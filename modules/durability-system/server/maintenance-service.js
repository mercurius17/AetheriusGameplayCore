const crypto = require('crypto');
const { buildCatalog } = require('./catalog');

const EFFECTIVE_EVENTS = new Set(['weapon_hit', 'physical_damage_received', 'shield_block']);

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function uniqueStrings(values) {
  return [...new Set((Array.isArray(values) ? values : [values]).filter(value => typeof value === 'string' && value.trim()))];
}

function makeCycleId(characterId, now) {
  const uuid = typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : crypto.randomBytes(12).toString('hex');
  return `${characterId}:${now}:${uuid}`;
}

function emptyBalances() {
  return { weapons: {}, armor: {} };
}

class AetheriusDurabilityService {
  constructor(options = {}) {
    if (!options.configStore || typeof options.configStore.get !== 'function') throw new Error('configStore é obrigatório');
    if (!options.persistence) throw new Error('persistence é obrigatório');
    this.configStore = options.configStore;
    this.persistence = options.persistence;
    this.clock = options.clock || (() => Date.now());
    this.authorize = options.authorize || (() => true);
    this.notifier = options.notifier || (() => {});
    this.metrics = { effectiveEvents: 0, rejectedEvents: 0, chargesConsumed: 0, kitActivations: 0, cyclesStarted: 0, cyclesClosed: 0, stateSyncs: 0 };
    this.characters = new Map();
    this.locks = new Map();
    this.notificationAt = new Map();
    this.catalog = null;
    this.catalogConfig = null;
  }

  _config() { return this.configStore.get(); }

  _catalog() {
    const config = this._config();
    if (!this.catalog || this.catalogConfig !== config) {
      this.catalog = buildCatalog(config);
      this.catalogConfig = config;
    }
    return this.catalog;
  }

  _withLock(characterId, fn) {
    const key = String(characterId);
    const previous = this.locks.get(key) || Promise.resolve();
    const current = previous.then(fn, fn);
    this.locks.set(key, current.catch(() => {}));
    return current;
  }

  async initializeCharacter(characterId) {
    const key = String(characterId);
    const persisted = await this.persistence.loadCharacter(characterId);
    const config = this._config();
    const state = {
      balances: { ...emptyBalances(), ...(persisted?.balances || {}) },
      cycle: persisted?.cycle && config.maintenance.cycles.restoreOpenCycleAfterReconnect ? clone(persisted.cycle) : null,
      initializedAt: this.clock()
    };
    for (const category of ['weapons', 'armor']) {
      state.balances[category] = { ...(state.balances[category] || {}) };
    }
    this.characters.set(key, state);
    return this.getStatus(characterId);
  }

  async _state(characterId) {
    const key = String(characterId);
    if (!this.characters.has(key)) await this.initializeCharacter(characterId);
    return this.characters.get(key);
  }

  _isCycleExpired(cycle, now) {
    if (!cycle) return false;
    const rules = this._config().maintenance.cycles;
    return now - cycle.startedAt >= rules.maxDurationMs || now - cycle.lastActivityAt >= rules.inactivityToCloseMs;
  }

  async _startOrRotateCycle(characterId, state, now) {
    if (state.cycle && !this._isCycleExpired(state.cycle, now)) return state.cycle;
    if (state.cycle) {
      this.metrics.cyclesClosed++;
      state.cycle = null;
      await this.persistence.saveCycle(characterId, null);
    }
    const cycle = { id: makeCycleId(characterId, now), startedAt: now, lastActivityAt: now, coveredKeys: [] };
    state.cycle = cycle;
    this.metrics.cyclesStarted++;
    if (this._config().maintenance.cycles.persistOpenCycle) await this.persistence.saveCycle(characterId, cycle);
    return cycle;
  }

  _categoryEnabled(category) {
    const config = this._config().maintenance;
    return config.enabled && config.debuffs[category].enabled;
  }

  _balance(state, category, material) {
    return Number(state.balances[category]?.[material] || 0);
  }

  _setBalance(state, category, material, value) {
    if (!state.balances[category]) state.balances[category] = {};
    state.balances[category][material] = Math.max(0, Number(value) || 0);
  }

  _key(category, material) { return `${category}:${material}`; }

  _notify(characterId, type, data = {}, force = false) {
    const config = this._config().maintenance.notifications;
    const key = `${characterId}:${type}`;
    const now = this.clock();
    const previous = this.notificationAt.get(key) || 0;
    if (!force && now - previous < config.minIntervalMs) return;
    this.notificationAt.set(key, now);
    try { this.notifier({ characterId, type, data }); } catch (error) { /* notificações não interrompem a transação */ }
  }

  async activateKit({ characterId, actorId, kitKey, baseId, requestId }) {
    if (!this.authorize({ characterId, actorId })) return { ok: false, reason: 'UNAUTHORIZED' };
    if (!this._config().maintenance.enabled) return { ok: false, reason: 'DISABLED' };
    if (!Number.isInteger(baseId) || baseId <= 0) return { ok: false, reason: 'KIT_RECORD_NOT_RESOLVED' };
    if (typeof requestId !== 'string' || requestId.length < 8 || requestId.length > 128) return { ok: false, reason: 'INVALID_REQUEST_ID' };
    return this._withLock(characterId, async () => {
      const kit = this._catalog().getByStableId(kitKey);
      if (!kit) return { ok: false, reason: 'UNKNOWN_KIT' };
      if (!this._categoryEnabled(kit.category)) return { ok: false, reason: 'CATEGORY_DISABLED' };
      const state = await this._state(characterId);
      try {
        const result = await this.persistence.commitKitActivation({
          characterId,
          actorId,
          baseId,
          kit,
          requestId,
          maxCharges: this._config().maintenance.limits.maxChargesPerBalance
        });
        this._setBalance(state, kit.category, kit.material, result.balance);
        if (!result.idempotent) {
          this.metrics.kitActivations++;
          this._notify(characterId, 'kit_activated', { kitKey: kit.stableId, chargesAdded: kit.charges, balance: result.balance }, true);
        }
        return { ok: true, idempotent: Boolean(result.idempotent), kitKey: kit.stableId, category: kit.category, material: kit.material, chargesAdded: result.chargesAdded || 0, balance: result.balance, state: this._snapshot(state) };
      } catch (error) {
        if (error.code === 'CHARGE_LIMIT') return { ok: false, reason: 'CHARGE_LIMIT', message: error.message };
        if (error.code === 'INSUFFICIENT_INVENTORY') return { ok: false, reason: 'KIT_NOT_IN_INVENTORY' };
        throw error;
      }
    });
  }

  _eventMaterials(event, category) {
    if (category === 'weapons') return uniqueStrings(event.weaponMaterials || event.weaponMaterial);
    if (event.type === 'shield_block') return uniqueStrings(event.shieldMaterial);
    return uniqueStrings(event.affectedArmorMaterials || event.armorMaterialsUsed);
  }

  async _consumeForKey(characterId, state, cycle, event, category, material) {
    if (!this._catalog().materialExists(category, material)) return { ok: false, category, material, reason: 'UNSUPPORTED_MATERIAL' };
    const key = this._key(category, material);
    if (cycle.coveredKeys.includes(key)) return { ok: true, category, material, charged: false, alreadyCovered: true, balance: this._balance(state, category, material) };
    const requestId = `combat:${cycle.id}:${String(event.eventId)}:${category}:${material}`;
    const result = await this.persistence.commitChargeConsumption({ characterId, category, material, requestId });
    this._setBalance(state, category, material, result.balance);
    if (result.charged) {
      if (!cycle.coveredKeys.includes(key)) cycle.coveredKeys.push(key);
      this.metrics.chargesConsumed += result.idempotent ? 0 : 1;
      if (result.balance <= this._config().maintenance.notifications.lowChargesThreshold) {
        this._notify(characterId, 'low_charges', { category, material, balance: result.balance });
      }
    } else {
      this._notify(characterId, 'maintenance_exhausted', { category, material });
    }
    return { ok: true, category, material, charged: Boolean(result.charged), idempotent: Boolean(result.idempotent), balance: result.balance };
  }

  async handleEffectiveEvent(event) {
    if (!event || typeof event !== 'object' || event.authority !== 'server' || !EFFECTIVE_EVENTS.has(event.type)) {
      this.metrics.rejectedEvents++;
      return { ok: false, reason: 'UNTRUSTED_OR_INVALID_EVENT' };
    }
    if (typeof event.eventId !== 'string' || event.eventId.length < 1 || event.eventId.length > 128) {
      this.metrics.rejectedEvents++;
      return { ok: false, reason: 'MISSING_EVENT_ID' };
    }
    const characterId = event.characterId;
    if (!this.authorize({ characterId, actorId: event.actorId })) {
      this.metrics.rejectedEvents++;
      return { ok: false, reason: 'UNAUTHORIZED' };
    }
    return this._withLock(characterId, async () => {
      const state = await this._state(characterId);
      if (!this._config().maintenance.enabled) return { ok: true, skipped: true, reason: 'DISABLED' };
      const category = event.type === 'weapon_hit' ? 'weapons' : 'armor';
      if (!this._categoryEnabled(category)) return { ok: true, skipped: true, reason: 'CATEGORY_DISABLED' };
      if (event.type === 'weapon_hit' && event.physicalWeapon !== true) return { ok: true, skipped: true, reason: 'NON_PHYSICAL_WEAPON' };
      if (event.type === 'physical_damage_received' && event.physical !== true) return { ok: true, skipped: true, reason: 'NON_PHYSICAL_DAMAGE' };
      if (event.type === 'shield_block' && (event.effective !== true || event.physical !== true)) return { ok: true, skipped: true, reason: 'INEFFECTIVE_BLOCK' };

      const materials = this._eventMaterials(event, category);
      if (materials.length === 0) return { ok: true, skipped: true, reason: 'NO_CLASSIFIED_MATERIAL' };
      const now = Number.isFinite(event.at) ? event.at : this.clock();
      const cycle = await this._startOrRotateCycle(characterId, state, now);
      cycle.lastActivityAt = now;
      const consumed = [];
      for (const material of materials) consumed.push(await this._consumeForKey(characterId, state, cycle, event, category, material));
      if (this._config().maintenance.cycles.persistOpenCycle) await this.persistence.saveCycle(characterId, cycle);
      this.metrics.effectiveEvents++;
      return { ok: true, cycleId: cycle.id, consumed, state: this._snapshot(state, now) };
    });
  }

  _coverageActive(state, category, material, now) {
    return Boolean(state.cycle && !this._isCycleExpired(state.cycle, now) && state.cycle.coveredKeys.includes(this._key(category, material)));
  }

  isCovered(characterId, category, material, now = this.clock()) {
    const state = this.characters.get(String(characterId));
    if (!state) return false;
    return this._coverageActive(state, category, material, now) || this._balance(state, category, material) > 0;
  }

  getMultiplier(characterId, category, material, now = this.clock()) {
    if (!this._categoryEnabled(category)) return 1;
    if (this.isCovered(characterId, category, material, now)) return 1;
    return 1 - this._config().maintenance.debuffs[category].efficiencyPenalty;
  }

  applyWeaponDamage(characterId, calculatedWeaponDamage, material, now = this.clock()) {
    const multiplier = this.getMultiplier(characterId, 'weapons', material, now);
    return { base: calculatedWeaponDamage, multiplier, effective: calculatedWeaponDamage * multiplier, debuffed: multiplier !== 1 };
  }

  applyArmorContribution(characterId, baseArmorRating, material, now = this.clock()) {
    const multiplier = this.getMultiplier(characterId, 'armor', material, now);
    return { base: baseArmorRating, multiplier, effective: baseArmorRating * multiplier, debuffed: multiplier !== 1 };
  }

  _snapshot(state, now = this.clock()) {
    return clone({ balances: state.balances, cycle: state.cycle ? { id: state.cycle.id, startedAt: state.cycle.startedAt, lastActivityAt: state.cycle.lastActivityAt, coveredKeys: [...state.cycle.coveredKeys], active: !this._isCycleExpired(state.cycle, now) } : null });
  }

  async getStatus(characterId, equipment = [], now = this.clock()) {
    const state = await this._state(characterId);
    const catalog = this._catalog();
    const materialKeys = new Set([...Object.keys(this._config().maintenance.materials), ...Object.keys(state.balances.weapons), ...Object.keys(state.balances.armor)]);
    const reserves = [...materialKeys].sort().map(material => ({
      material,
      displayName: catalog.materialDisplayName(material),
      weapons: Object.prototype.hasOwnProperty.call(this._config().maintenance.kits.weapons, material) ? this._balance(state, 'weapons', material) : null,
      armor: Object.prototype.hasOwnProperty.call(this._config().maintenance.kits.armor, material) ? this._balance(state, 'armor', material) : null,
      weaponCoverageActive: this._coverageActive(state, 'weapons', material, now),
      armorCoverageActive: this._coverageActive(state, 'armor', material, now)
    }));
    const equipped = (Array.isArray(equipment) ? equipment : []).map(item => {
      const category = item.category === 'weapons' || item.category === 'armor' ? item.category : null;
      const material = typeof item.material === 'string' ? item.material : null;
      const charges = category && material ? this._balance(state, category, material) : 0;
      const covered = category && material ? this._coverageActive(state, category, material, now) : false;
      const maintained = category && material ? (covered || charges > 0) : false;
      return { slot: item.slot || null, name: item.name || 'Equipamento', category, material, charges, status: covered ? 'Cobertura ativa no ciclo atual' : maintained ? 'Conservado' : 'Sem manutenção' };
    });
    this.metrics.stateSyncs++;
    const kits = catalog.all().map(kit => ({ stableId: kit.stableId, displayName: kit.displayName, category: kit.category, material: kit.material, charges: kit.charges }));
    return { version: 1, generatedAt: now, enabled: this._config().maintenance.enabled, reserves, equipped, kits, cycle: state.cycle ? { active: !this._isCycleExpired(state.cycle, now), coveredKeys: [...state.cycle.coveredKeys], startedAt: state.cycle.startedAt, lastActivityAt: state.cycle.lastActivityAt } : null, metrics: { ...this.metrics } };
  }

  async onDisconnect(characterId) {
    const state = this.characters.get(String(characterId));
    if (!state) return;
    const rules = this._config().maintenance.cycles;
    if (rules.disconnectClosesCycle) {
      state.cycle = null;
      await this.persistence.saveCycle(characterId, null);
    } else if (rules.persistOpenCycle) {
      await this.persistence.saveCycle(characterId, state.cycle);
    }
    this.characters.delete(String(characterId));
  }

  async metricsSnapshot() {
    const persistenceMetrics = typeof this.persistence.getMetrics === 'function' ? await this.persistence.getMetrics() : {};
    return { service: { ...this.metrics }, persistence: persistenceMetrics, onlineCharacters: this.characters.size };
  }
}

module.exports = { AetheriusDurabilityService, EFFECTIVE_EVENTS };

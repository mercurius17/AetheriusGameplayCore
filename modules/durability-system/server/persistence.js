class InsufficientInventoryError extends Error {
  constructor(characterId, baseId) {
    super(`Personagem ${characterId} não possui o kit 0x${Number(baseId).toString(16)}`);
    this.code = 'INSUFFICIENT_INVENTORY';
  }
}

class ChargeLimitError extends Error {
  constructor(category, material, current, requested, limit) {
    super(`Limite de cargas excedido para ${category}.${material}: ${current} + ${requested} > ${limit}`);
    this.code = 'CHARGE_LIMIT';
  }
}

function emptyCharacter() {
  return { balances: { weapons: {}, armor: {} }, cycle: null, inventory: {}, ledger: {} };
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

class InMemoryPersistence {
  constructor(seed = {}) {
    this.characters = new Map();
    this.locks = new Map();
    this.metrics = { reads: 0, writes: 0, ledgerWrites: 0 };
    for (const [characterId, state] of Object.entries(seed)) {
      this.characters.set(String(characterId), { ...emptyCharacter(), ...clone(state), ledger: { ...(state.ledger || {}) } });
    }
  }

  _state(characterId) {
    const key = String(characterId);
    if (!this.characters.has(key)) this.characters.set(key, emptyCharacter());
    return this.characters.get(key);
  }

  _withLock(characterId, fn) {
    const key = String(characterId);
    const previous = this.locks.get(key) || Promise.resolve();
    const current = previous.then(fn, fn);
    this.locks.set(key, current.catch(() => {}));
    return current;
  }

  async loadCharacter(characterId) {
    this.metrics.reads++;
    return clone(this._state(characterId));
  }

  async setInventory(characterId, baseId, count) {
    return this._withLock(characterId, async () => {
      const state = this._state(characterId);
      if (!Number.isInteger(count) || count < 0) throw new Error('count de inventário inválido');
      if (count === 0) delete state.inventory[String(baseId)];
      else state.inventory[String(baseId)] = count;
      this.metrics.writes++;
    });
  }

  async commitKitActivation({ characterId, baseId, kit, requestId, maxCharges }) {
    return this._withLock(characterId, async () => {
      const state = this._state(characterId);
      const idempotencyKey = String(requestId);
      if (state.ledger[idempotencyKey]) return { ...clone(state.ledger[idempotencyKey]), idempotent: true };
      const inventoryCount = Number(state.inventory[String(baseId)] || 0);
      if (inventoryCount < 1) throw new InsufficientInventoryError(characterId, baseId);
      const current = Number(state.balances[kit.category][kit.material] || 0);
      const next = current + kit.charges;
      if (next > maxCharges) throw new ChargeLimitError(kit.category, kit.material, current, kit.charges, maxCharges);
      state.inventory[String(baseId)] = inventoryCount - 1;
      if (state.inventory[String(baseId)] === 0) delete state.inventory[String(baseId)];
      state.balances[kit.category][kit.material] = next;
      const result = { ok: true, type: 'kit_activation', stableId: kit.stableId, category: kit.category, material: kit.material, chargesAdded: kit.charges, balance: next };
      state.ledger[idempotencyKey] = result;
      this.metrics.writes++;
      this.metrics.ledgerWrites++;
      return clone(result);
    });
  }

  async commitChargeConsumption({ characterId, category, material, requestId }) {
    return this._withLock(characterId, async () => {
      const state = this._state(characterId);
      const idempotencyKey = String(requestId);
      if (state.ledger[idempotencyKey]) return { ...clone(state.ledger[idempotencyKey]), idempotent: true };
      const current = Number(state.balances[category][material] || 0);
      if (current <= 0) {
        const result = { ok: true, type: 'charge_consumption', charged: false, category, material, balance: 0 };
        state.ledger[idempotencyKey] = result;
        this.metrics.writes++;
        this.metrics.ledgerWrites++;
        return clone(result);
      }
      state.balances[category][material] = current - 1;
      const result = { ok: true, type: 'charge_consumption', charged: true, category, material, balance: current - 1 };
      state.ledger[idempotencyKey] = result;
      this.metrics.writes++;
      this.metrics.ledgerWrites++;
      return clone(result);
    });
  }

  async saveCycle(characterId, cycle) {
    return this._withLock(characterId, async () => {
      this._state(characterId).cycle = cycle ? clone(cycle) : null;
      this.metrics.writes++;
    });
  }

  async getMetrics() { return { ...this.metrics }; }
  snapshot(characterId) { return clone(this._state(characterId)); }
}

class SqlMaintenancePersistence {
  constructor(db, options = {}) {
    if (!db || typeof db.getConnection !== 'function') throw new Error('SqlMaintenancePersistence requer db.getConnection()');
    this.db = db;
    this.inventoryTable = options.inventoryTable || 'character_inventory';
  }

  async loadCharacter(characterId) {
    const [balances, sessions] = await Promise.all([
      this.db.query('SELECT category, material, charges FROM character_maintenance_balances WHERE character_id = ?', [characterId]),
      this.db.query('SELECT cycle_json FROM character_maintenance_sessions WHERE character_id = ?', [characterId])
    ]);
    const state = emptyCharacter();
    for (const row of balances) {
      if (state.balances[row.category]) state.balances[row.category][row.material] = Number(row.charges);
    }
    if (sessions[0]?.cycle_json) {
      try { state.cycle = JSON.parse(sessions[0].cycle_json); } catch { state.cycle = null; }
    }
    return state;
  }

  async commitKitActivation({ characterId, baseId, kit, requestId, maxCharges }) {
    const conn = await this.db.getConnection();
    try {
      await conn.beginTransaction();
      const [ledger] = await conn.query('SELECT result_json FROM character_maintenance_ledger WHERE idempotency_key = ? FOR UPDATE', [requestId]);
      if (ledger.length) {
        await conn.commit();
        return { ...JSON.parse(ledger[0].result_json), idempotent: true };
      }
      const [inventory] = await conn.query(`SELECT count FROM ${this.inventoryTable} WHERE character_id = ? AND base_id = ? FOR UPDATE`, [characterId, baseId]);
      if (!inventory.length || Number(inventory[0].count) < 1) throw new InsufficientInventoryError(characterId, baseId);
      const [balance] = await conn.query('SELECT charges FROM character_maintenance_balances WHERE character_id = ? AND category = ? AND material = ? FOR UPDATE', [characterId, kit.category, kit.material]);
      const current = Number(balance[0]?.charges || 0);
      const next = current + kit.charges;
      if (next > maxCharges) throw new ChargeLimitError(kit.category, kit.material, current, kit.charges, maxCharges);
      if (Number(inventory[0].count) === 1) await conn.query(`DELETE FROM ${this.inventoryTable} WHERE character_id = ? AND base_id = ?`, [characterId, baseId]);
      else await conn.query(`UPDATE ${this.inventoryTable} SET count = count - 1 WHERE character_id = ? AND base_id = ?`, [characterId, baseId]);
      await conn.query(`INSERT INTO character_maintenance_balances (character_id, category, material, charges) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE charges = VALUES(charges)`, [characterId, kit.category, kit.material, next]);
      const result = { ok: true, type: 'kit_activation', stableId: kit.stableId, category: kit.category, material: kit.material, chargesAdded: kit.charges, balance: next };
      await conn.query('INSERT INTO character_maintenance_ledger (idempotency_key, character_id, operation, result_json) VALUES (?, ?, ?, ?)', [requestId, characterId, 'kit_activation', JSON.stringify(result)]);
      await conn.commit();
      return result;
    } catch (error) {
      await conn.rollback();
      throw error;
    } finally { conn.release(); }
  }

  async commitChargeConsumption({ characterId, category, material, requestId }) {
    const conn = await this.db.getConnection();
    try {
      await conn.beginTransaction();
      const [ledger] = await conn.query('SELECT result_json FROM character_maintenance_ledger WHERE idempotency_key = ? FOR UPDATE', [requestId]);
      if (ledger.length) { await conn.commit(); return { ...JSON.parse(ledger[0].result_json), idempotent: true }; }
      const [balance] = await conn.query('SELECT charges FROM character_maintenance_balances WHERE character_id = ? AND category = ? AND material = ? FOR UPDATE', [characterId, category, material]);
      const current = Number(balance[0]?.charges || 0);
      const charged = current > 0;
      const next = charged ? current - 1 : 0;
      if (balance.length) await conn.query('UPDATE character_maintenance_balances SET charges = ? WHERE character_id = ? AND category = ? AND material = ?', [next, characterId, category, material]);
      else await conn.query('INSERT INTO character_maintenance_balances (character_id, category, material, charges) VALUES (?, ?, ?, 0)', [characterId, category, material]);
      const result = { ok: true, type: 'charge_consumption', charged, category, material, balance: next };
      await conn.query('INSERT INTO character_maintenance_ledger (idempotency_key, character_id, operation, result_json) VALUES (?, ?, ?, ?)', [requestId, characterId, 'charge_consumption', JSON.stringify(result)]);
      await conn.commit();
      return result;
    } catch (error) {
      await conn.rollback();
      throw error;
    } finally { conn.release(); }
  }

  async saveCycle(characterId, cycle) {
    await this.db.query('INSERT INTO character_maintenance_sessions (character_id, cycle_json) VALUES (?, ?) ON DUPLICATE KEY UPDATE cycle_json = VALUES(cycle_json)', [characterId, cycle ? JSON.stringify(cycle) : null]);
  }
}

module.exports = { InMemoryPersistence, SqlMaintenancePersistence, InsufficientInventoryError, ChargeLimitError };

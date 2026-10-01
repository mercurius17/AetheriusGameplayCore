const PLUGIN_EXTENSION = /\.(esm|esp|esl)$/i;
const LOCAL_FORM_ID = /^[0-9a-f]{6}$/i;

export function normalizePluginName(value) {
  const name = String(value ?? '').trim().replaceAll('\\', '/').split('/').at(-1);
  return name && PLUGIN_EXTENSION.test(name) ? name.toLowerCase() : null;
}

export function canonicalEnemyIdentity(pluginName, localFormId) {
  const plugin = normalizePluginName(pluginName);
  if (!plugin || !Number.isInteger(localFormId) || localFormId < 0 || localFormId > 0xFFFFFF) return null;
  return `${plugin}|${localFormId.toString(16).padStart(6, '0').toUpperCase()}`;
}

export function parseEnemyIdentity(value) {
  if (typeof value !== 'string') return null;
  const separator = value.lastIndexOf('|');
  if (separator <= 0) return null;
  const plugin = normalizePluginName(value.slice(0, separator));
  const localHex = value.slice(separator + 1);
  if (!plugin || !LOCAL_FORM_ID.test(localHex)) return null;
  const localFormId = Number.parseInt(localHex, 16);
  return { plugin, localFormId, identity: canonicalEnemyIdentity(plugin, localFormId) };
}

function identityFor(actor) {
  return parseEnemyIdentity(actor?.stableEnemyIdentity)?.identity
    ?? canonicalEnemyIdentity(actor?.sourcePlugin, actor?.localFormId);
}

export class LoadOrderIndependentEnemyIndex {
  constructor() {
    this.epoch = null;
    this.byStableIdentity = new Map();
    this.byRuntimeActorId = new Map();
  }

  refresh({ epoch, actors }) {
    if (typeof epoch !== 'string' || !epoch || !Array.isArray(actors)) return { ok: false, reason: 'INVALID_WINNER_SNAPSHOT' };
    const byStableIdentity = new Map();
    const byRuntimeActorId = new Map();
    const errors = [];
    for (const [index, actor] of actors.entries()) {
      const stableEnemyIdentity = identityFor(actor);
      if (!stableEnemyIdentity) { errors.push({ index, reason: 'INVALID_STABLE_ENEMY_IDENTITY' }); continue; }
      if (byStableIdentity.has(stableEnemyIdentity)) { errors.push({ index, stableEnemyIdentity, reason: 'DUPLICATE_WINNING_ENEMY' }); continue; }
      const normalized = { ...actor, stableEnemyIdentity };
      byStableIdentity.set(stableEnemyIdentity, normalized);
      if (Number.isInteger(actor.runtimeActorId)) {
        if (byRuntimeActorId.has(actor.runtimeActorId)) errors.push({ index, runtimeActorId: actor.runtimeActorId, reason: 'DUPLICATE_RUNTIME_ACTOR_ID' });
        else byRuntimeActorId.set(actor.runtimeActorId, normalized);
      }
    }
    if (errors.length) return { ok: false, reason: 'INVALID_WINNER_SNAPSHOT', errors };
    this.epoch = epoch;
    this.byStableIdentity = byStableIdentity;
    this.byRuntimeActorId = byRuntimeActorId;
    return { ok: true, epoch, count: byStableIdentity.size };
  }

  resolveStable(value) {
    const identity = parseEnemyIdentity(value)?.identity;
    return identity ? this.byStableIdentity.get(identity) ?? null : null;
  }

  resolveRuntime(runtimeActorId, epoch) {
    if (epoch !== this.epoch) return { ok: false, reason: 'STALE_LOAD_ORDER_EPOCH' };
    const actor = this.byRuntimeActorId.get(runtimeActorId);
    return actor ? { ok: true, actor } : { ok: false, reason: 'RUNTIME_ACTOR_NOT_FOUND' };
  }
}

export class EnemyCoverageAuditor {
  constructor({ catalog }) { this.catalog = catalog; }

  audit(enemyActors = [], { epoch = null } = {}) {
    const rows = enemyActors.map((actor, index) => {
      const stableEnemyIdentity = identityFor(actor);
      if (!stableEnemyIdentity) return { index, status: 'INVALID', reason: 'INVALID_STABLE_ENEMY_IDENTITY', stableEnemyIdentity: null, xpCategory: actor?.xpCategory ?? null };
      if (actor.explicitlyExcluded === true) return { index, status: 'EXCLUDED', reason: actor.exclusionReason ?? 'EXPLICITLY_EXCLUDED', stableEnemyIdentity, xpCategory: actor.xpCategory ?? null };
      const resolution = this.catalog.resolveExact(actor.xpCategory);
      if (!resolution.ok) return { index, status: 'UNASSIGNED', reason: resolution.reasonCode, stableEnemyIdentity, xpCategory: actor.xpCategory ?? null };
      return { index, status: 'COVERED', reason: null, stableEnemyIdentity, xpCategory: actor.xpCategory, balanceId: resolution.profile.balanceId };
    });
    const counts = Object.fromEntries(['COVERED', 'EXCLUDED', 'UNASSIGNED', 'INVALID'].map((status) => [status, rows.filter((row) => row.status === status).length]));
    return { complete: counts.UNASSIGNED === 0 && counts.INVALID === 0, epoch, total: rows.length, counts, rows };
  }
}

export class EnemyCoverageGate {
  constructor({ readAudit, readCurrentEpoch }) { this.readAudit = readAudit; this.readCurrentEpoch = readCurrentEpoch; }

  check() {
    if (typeof this.readAudit !== 'function' || typeof this.readCurrentEpoch !== 'function') return { ok: false, reason: 'COVERAGE_AUDIT_UNBOUND' };
    try {
      const audit = this.readAudit();
      const currentEpoch = this.readCurrentEpoch();
      if (typeof currentEpoch !== 'string' || !currentEpoch || audit?.epoch !== currentEpoch) return { ok: false, reason: 'STALE_COVERAGE_EPOCH', currentEpoch, audit: audit ?? null };
      const ok = audit.complete === true && Number.isInteger(audit.total) && audit.total > 0;
      return { ok, reason: ok ? null : 'ENEMY_COVERAGE_INCOMPLETE', currentEpoch, audit };
    } catch (error) {
      return { ok: false, reason: 'COVERAGE_AUDIT_FAILED', error: error.message };
    }
  }
}

export function createSimulationCoverageGate() {
  return new EnemyCoverageGate({
    readCurrentEpoch: () => 'simulation',
    readAudit: () => ({ complete: true, epoch: 'simulation', total: 1, counts: { COVERED: 1, EXCLUDED: 0, UNASSIGNED: 0, INVALID: 0 } })
  });
}

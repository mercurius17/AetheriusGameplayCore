import { CONTRACT_VERSION, validateEnemyKilledEvent } from '../contracts/enemy-killed.mjs';
import { ReasonCodes } from '../contracts/reasons.mjs';
import { EnemyCoverageAuditor, EnemyCoverageGate } from './enemy-coverage.mjs';

export const AETHERIUS_ENEMY_KILLED_EVENT = 'aetherius.enemy.killed.v1';

function configuredCategories(catalog) {
  return new Set((catalog?.profiles ?? [])
    .filter((profile) => profile.enabled === true && profile.mappingStatus === 'ASSIGNED')
    .flatMap((profile) => profile.eventXpCategories ?? []));
}

export function createAetheriusEnemySystemXpContract({ catalog, balanceVersion = null, familyMappings = null } = {}) {
  const categories = [...configuredCategories(catalog)].sort();
  const mappings = familyMappings ?? Object.fromEntries(categories.map((category) => [category.toUpperCase(), category]));
  return Object.freeze({
    contractVersion: CONTRACT_VERSION,
    eventName: AETHERIUS_ENEMY_KILLED_EVENT,
    categories: Object.freeze(categories),
    familyMappings: Object.freeze({ ...mappings }),
    source: 'AetheriusLevelingSystem enabled JSON profiles',
    balanceVersion: balanceVersion ?? catalog?.balanceVersion ?? null
  });
}

export function auditAetheriusEnemySystemContract({ enemySystemApi, catalog } = {}) {
  const errors = [];
  const warnings = [];
  if (!enemySystemApi || typeof enemySystemApi !== 'object') {
    return { status: 'INCOMPATIBLE', errors: ['Enemy System API is required'], warnings, sharedCategories: [], missingLevelingCategories: [], unsupportedEnemySystemCategories: [] };
  }
  if (enemySystemApi.CONTRACT_VERSION !== CONTRACT_VERSION) {
    errors.push(`contract version mismatch: Enemy System=${enemySystemApi.CONTRACT_VERSION ?? 'missing'}, Leveling System=${CONTRACT_VERSION}`);
  }
  if (typeof enemySystemApi.validateEvent !== 'function') errors.push('Enemy System validateEvent export is required');
  if (typeof enemySystemApi.prepareLevelingEvent !== 'function') errors.push('Enemy System prepareLevelingEvent export is required');
  if (typeof enemySystemApi.EventHub !== 'function') errors.push('Enemy System EventHub export is required');
  if (typeof enemySystemApi.DeathBridge !== 'function') errors.push('Enemy System DeathBridge export is required');
  if (typeof enemySystemApi.EnemyScanner !== 'function') errors.push('Enemy System EnemyScanner export is required');
  if (!Array.isArray(enemySystemApi.BESTIARY_XP_CATEGORIES)) errors.push('Enemy System BESTIARY_XP_CATEGORIES export is required');
  if (typeof enemySystemApi.isExactXpCategory !== 'function') errors.push('Enemy System isExactXpCategory export is required');
  if (typeof enemySystemApi.createXpCategoryContract !== 'function') errors.push('Enemy System createXpCategoryContract export is required');
  if (typeof enemySystemApi.DeathBridge === 'function') {
    try {
      if (new enemySystemApi.DeathBridge().eventName !== AETHERIUS_ENEMY_KILLED_EVENT) errors.push('Enemy System death event name is incompatible');
    } catch (error) {
      errors.push(`Enemy System DeathBridge inspection failed: ${error.message}`);
    }
  }

  const upstream = new Set(Array.isArray(enemySystemApi.BESTIARY_XP_CATEGORIES) ? enemySystemApi.BESTIARY_XP_CATEGORIES : []);
  const local = configuredCategories(catalog);
  const xpCategoryContract = createAetheriusEnemySystemXpContract({ catalog });
  const sharedCategories = [...upstream].filter((category) => local.has(category)).sort();
  const missingLevelingCategories = [...upstream].filter((category) => !local.has(category)).sort();
  const unsupportedEnemySystemCategories = [...local].filter((category) => (
    typeof enemySystemApi.isExactXpCategory === 'function' && !enemySystemApi.isExactXpCategory(category)
  )).sort();
  const categoryProbeFailures = [];
  if (typeof enemySystemApi.createXpCategoryContract === 'function') {
    try {
      const negotiatedContract = enemySystemApi.createXpCategoryContract(xpCategoryContract);
      if (typeof enemySystemApi.EnemyScanner === 'function') {
        const records = Object.entries(xpCategoryContract.familyMappings).map(([family, category], index) => ({
          identity: `CompatibilityFixture.esp|${String(index + 1).padStart(6, '0')}`,
          plugin: 'CompatibilityFixture.esp',
          winningOverridePlugin: 'CompatibilityFixture.esp',
          type: 'NPC_',
          levelSemantics: 'FIXED',
          sourceLevel: 1,
          semanticTags: [family],
          expectedCategory: category
        }));
        const registry = new enemySystemApi.EnemyScanner({ xpCategoryContract: negotiatedContract }).scan(records);
        for (const record of records) {
          if (registry.get(record.identity)?.xpCategory !== record.expectedCategory) categoryProbeFailures.push(record.expectedCategory);
        }
        if (categoryProbeFailures.length) errors.push(`Enemy System scanner failed configured categories: ${categoryProbeFailures.join(', ')}`);
      }
    } catch (error) {
      errors.push(`Enemy System rejected the Leveling XP category contract: ${error.message}`);
    }
  }
  const fixtureCategory = sharedCategories[0] ?? null;
  if (fixtureCategory && typeof enemySystemApi.validateEvent === 'function' && typeof enemySystemApi.prepareLevelingEvent === 'function') {
    const fixture = {
      contractVersion: CONTRACT_VERSION,
      eventId: 'aetherius-contract-compatibility-fixture',
      occurredAt: 1,
      victimId: 1,
      killerId: 0,
      enemy: {
        contractVersion: CONTRACT_VERSION,
        managed: true,
        stableEnemyIdentity: 'CompatibilityFixture.esp|000001',
        enemyFamily: fixtureCategory.toUpperCase(),
        spawnRole: 'GENERIC',
        combatLevel: 1,
        xpEligible: true,
        xpCategory: fixtureCategory,
        sourcePlugin: 'CompatibilityFixture.esp',
        winningOverridePlugin: 'CompatibilityFixture.esp',
        sourceRecordIdentity: 'CompatibilityFixture.esp|000001'
      },
      progressionContext: {
        contractVersion: CONTRACT_VERSION,
        sourceType: 'OTHER',
        sourceId: 'compatibility-fixture',
        recommendedClassMin: 1,
        recommendedClassMax: 40,
        status: 'ASSIGNED',
        valid: true,
        provenance: 'runtime compatibility audit'
      },
      contributors: []
    };
    try {
      const localErrors = validateEnemyKilledEvent(fixture);
      const upstreamErrors = enemySystemApi.validateEvent(fixture);
      const prepared = enemySystemApi.prepareLevelingEvent(fixture);
      if (localErrors.length || !Array.isArray(upstreamErrors) || upstreamErrors.length || prepared?.acceptedForConsumer !== true || prepared?.failClosed === true) {
        errors.push('shared event fixture is not accepted by both contracts');
      }
    } catch (error) {
      errors.push(`shared event fixture validation failed: ${error.message}`);
    }
  }
  if (missingLevelingCategories.length) warnings.push(`Enemy System categories without an enabled Leveling profile: ${missingLevelingCategories.join(', ')}`);
  if (unsupportedEnemySystemCategories.length) warnings.push(`Leveling categories the current Enemy System contract cannot emit: ${unsupportedEnemySystemCategories.join(', ')}`);

  return {
    status: errors.length ? 'INCOMPATIBLE' : warnings.length ? 'PARTIAL' : 'COMPATIBLE',
    eventName: AETHERIUS_ENEMY_KILLED_EVENT,
    contractVersion: CONTRACT_VERSION,
    errors,
    warnings,
    fixtureCategory,
    xpCategoryContract,
    categoryProbeFailures,
    sharedCategories,
    missingLevelingCategories,
    unsupportedEnemySystemCategories
  };
}

function exclusionReasons(enemy) {
  const reasons = [];
  if (enemy?.explicitlyExcluded === true) reasons.push(enemy.exclusionReason ?? 'EXPLICITLY_EXCLUDED');
  if (enemy?.excluded === true || enemy?.exclusions?.excluded === true) reasons.push('EXPLICITLY_EXCLUDED');
  if (enemy?.quest === true || enemy?.exclusions?.quest === true) reasons.push('QUEST_ACTOR');
  if (enemy?.summonOnly === true || enemy?.exclusions?.summonOnly === true) reasons.push('SUMMON_ONLY');
  if ((enemy?.scripted === true || enemy?.exclusions?.scripted === true) && enemy?.spawnRole !== 'BOSS_UNIQUE') reasons.push('SCRIPTED_ACTOR');
  if ((enemy?.unique === true || enemy?.exclusions?.unique === true) && enemy?.spawnRole !== 'BOSS_UNIQUE') reasons.push('UNMANAGED_UNIQUE_ACTOR');
  return reasons;
}

export function enemySystemRegistryToCoverageRows(registry) {
  const enemies = Array.isArray(registry) ? registry : registry?.enemies;
  if (!Array.isArray(enemies)) throw new TypeError('Enemy System registry must expose an enemies array');
  return enemies.map((enemy) => {
    const reasons = exclusionReasons(enemy);
    return {
      stableEnemyIdentity: enemy?.stableEnemyIdentity ?? null,
      sourcePlugin: enemy?.sourcePlugin ?? null,
      localFormId: enemy?.localFormId ?? null,
      xpCategory: enemy?.xpCategory ?? null,
      explicitlyExcluded: reasons.length > 0,
      exclusionReason: reasons.join('+') || null,
      enemyFamily: enemy?.enemyFamily ?? null,
      classificationStatus: enemy?.classificationStatus ?? null
    };
  });
}

export class AetheriusEnemySystemCoverageAdapter {
  constructor({ catalog, readRegistry, readEpoch } = {}) {
    this.catalog = catalog;
    this.readRegistry = readRegistry;
    this.readEpoch = readEpoch;
    this.auditor = new EnemyCoverageAuditor({ catalog });
    this.gate = new EnemyCoverageGate({
      readCurrentEpoch: () => this.readEpoch?.(),
      readAudit: () => this.audit()
    });
  }

  audit() {
    if (typeof this.readRegistry !== 'function' || typeof this.readEpoch !== 'function') {
      throw new Error('Enemy System registry and load-order epoch readers must be bound');
    }
    const epoch = this.readEpoch();
    return this.auditor.audit(enemySystemRegistryToCoverageRows(this.readRegistry()), { epoch });
  }

  check() {
    return this.gate.check();
  }
}

export class AetheriusEnemySystemBridge {
  constructor({ enemySystemApi, eventHub, xpService, partySnapshotProvider, clock = () => Date.now(), onResult = null } = {}) {
    this.enemySystemApi = enemySystemApi;
    this.eventHub = eventHub;
    this.xpService = xpService;
    this.partySnapshotProvider = partySnapshotProvider;
    this.clock = clock;
    this.onResult = onResult;
    this.unsubscribe = null;
  }

  inspectCompatibility() {
    return auditAetheriusEnemySystemContract({ enemySystemApi: this.enemySystemApi, catalog: this.xpService?.catalog });
  }

  createXpCategoryContract() {
    return createAetheriusEnemySystemXpContract({ catalog: this.xpService?.catalog });
  }

  connect() {
    const compatibility = this.inspectCompatibility();
    if (compatibility.status === 'INCOMPATIBLE') throw new Error(`Incompatible AetheriusEnemySystem contract: ${compatibility.errors.join('; ')}`);
    if (!this.eventHub || typeof this.eventHub.on !== 'function') throw new TypeError('Enemy System EventHub.on must be bound');
    if (!this.xpService || typeof this.xpService.processEvent !== 'function' || typeof this.xpService.reject !== 'function') throw new TypeError('XpAwardService must be bound');
    if (this.unsubscribe) return { connected: true, reused: true, compatibility };
    this.unsubscribe = this.eventHub.on(AETHERIUS_ENEMY_KILLED_EVENT, (event) => this.consume(event));
    return { connected: true, reused: false, compatibility };
  }

  disconnect() {
    if (!this.unsubscribe) return false;
    this.unsubscribe();
    this.unsubscribe = null;
    return true;
  }

  consume(event) {
    const localErrors = validateEnemyKilledEvent(event);
    let upstreamErrors = [];
    try {
      upstreamErrors = typeof this.enemySystemApi?.validateEvent === 'function' ? this.enemySystemApi.validateEvent(event) : [];
    } catch (error) {
      upstreamErrors = [`Enemy System validation failed: ${error.message}`];
    }
    const errors = [...new Set([...localErrors, ...(Array.isArray(upstreamErrors) ? upstreamErrors : ['Enemy System validateEvent returned a non-array result'])])];
    let result;
    if (errors.length) {
      result = this.xpService.reject(event, ReasonCodes.INVALID_EVENT_CONTRACT, errors);
    } else {
      let partySnapshot;
      try {
        partySnapshot = this.partySnapshotProvider?.(event);
        if (partySnapshot && typeof partySnapshot.then === 'function') throw new TypeError('partySnapshotProvider must be synchronous');
      } catch (error) {
        result = this.xpService.reject(event, ReasonCodes.PARTY_CONTEXT_UNAVAILABLE, error.message);
      }
      if (!result) result = this.xpService.processEvent(event, { partySnapshot, nowMs: this.clock() });
    }
    if (typeof this.onResult === 'function') this.onResult(result, event);
    return result;
  }
}

export function connectAetheriusEnemySystem({
  enemySystemApi,
  eventHub,
  xpService,
  readRegistry,
  readEpoch,
  partySnapshotProvider,
  clock,
  onResult
} = {}) {
  if (!xpService || typeof xpService.processEvent !== 'function' || typeof xpService.reject !== 'function' || !xpService.catalog) {
    throw new TypeError('A configured XpAwardService must be bound');
  }
  const coverage = new AetheriusEnemySystemCoverageAdapter({ catalog: xpService.catalog, readRegistry, readEpoch });
  const bridge = new AetheriusEnemySystemBridge({ enemySystemApi, eventHub, xpService, partySnapshotProvider, clock, onResult });
  const previousCoverage = xpService.enemyCoverage;
  xpService.enemyCoverage = coverage;
  let connection;
  try {
    connection = bridge.connect();
  } catch (error) {
    xpService.enemyCoverage = previousCoverage;
    throw error;
  }
  return {
    bridge,
    coverage,
    connection,
    compatibility: connection.compatibility,
    xpCategoryContract: bridge.createXpCategoryContract(),
    disconnect() {
      const disconnected = bridge.disconnect();
      if (xpService.enemyCoverage === coverage) xpService.enemyCoverage = previousCoverage;
      return disconnected;
    }
  };
}

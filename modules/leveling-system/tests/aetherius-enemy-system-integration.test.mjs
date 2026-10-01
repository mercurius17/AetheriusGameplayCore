import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ConfigLoader } from '../src/config/loader.mjs';
import { validateEnemyKilledEvent } from '../src/contracts/enemy-killed.mjs';
import { XpAwardService } from '../src/integration/enemy-consumer.mjs';
import { createSimulationAuthorityCoordinator } from '../src/integration/experience-authority.mjs';
import {
  AETHERIUS_ENEMY_KILLED_EVENT,
  AetheriusEnemySystemBridge,
  AetheriusEnemySystemCoverageAdapter,
  auditAetheriusEnemySystemContract,
  connectAetheriusEnemySystem,
  createAetheriusEnemySystemXpContract,
  enemySystemRegistryToCoverageRows
} from '../src/integration/aetherius-enemy-system.mjs';
import { InMemoryProgressionRepository } from '../src/persistence/in-memory.mjs';
import { ProgressionRules } from '../src/domain/progression.mjs';
import { LevelingReadinessService } from '../src/readiness/service.mjs';
import { event, player, soloParty } from './helpers.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const loaded = await new ConfigLoader(root).load();
const configuredCategories = loaded.configs.enemyBaseXp.profiles
  .filter((profile) => profile.enabled && profile.mappingStatus === 'ASSIGNED')
  .flatMap((profile) => profile.eventXpCategories);

class TestEventHub {
  constructor() { this.listeners = new Map(); }
  on(name, listener) {
    const listeners = this.listeners.get(name) ?? new Set();
    listeners.add(listener);
    this.listeners.set(name, listeners);
    return () => listeners.delete(listener);
  }
  emit(name, payload) { for (const listener of this.listeners.get(name) ?? []) listener(payload); }
}

const enemySystemApi = {
  CONTRACT_VERSION: 1,
  BESTIARY_XP_CATEGORIES: configuredCategories,
  isExactXpCategory: (value) => typeof value === 'string' && /^[a-z0-9]+(?:_[a-z0-9]+)*$/.test(value),
  createXpCategoryContract: (contract) => contract,
  EnemyScanner: class {
    constructor({ xpCategoryContract }) { this.contract = xpCategoryContract; }
    scan(records) {
      const byIdentity = new Map(records.map((record) => [record.identity, {
        xpCategory: this.contract.familyMappings[record.semanticTags[0]] ?? null
      }]));
      return { get: (identity) => byIdentity.get(identity) ?? null };
    }
  },
  EventHub: TestEventHub,
  DeathBridge: class { constructor() { this.eventName = AETHERIUS_ENEMY_KILLED_EVENT; } },
  validateEvent: validateEnemyKilledEvent,
  prepareLevelingEvent: (value) => ({ acceptedForConsumer: validateEnemyKilledEvent(value).length === 0, event: value })
};

function serviceWithPlayer() {
  const progression = new ProgressionRules(loaded.configs.levelProgression);
  const repository = new InMemoryProgressionRepository({ progression });
  repository.seed(player(1));
  const coverage = { check: () => ({ ok: true }) };
  const service = new XpAwardService({ configResult: loaded, repository, experienceAuthority: createSimulationAuthorityCoordinator(), enemyCoverage: coverage });
  return { service, repository };
}

test('compatibility audit negotiates the complete active Leveling catalog', () => {
  const { service, repository } = serviceWithPlayer();
  const report = auditAetheriusEnemySystemContract({ enemySystemApi, catalog: service.catalog });
  assert.equal(report.status, 'COMPATIBLE');
  assert.equal(report.sharedCategories.length, configuredCategories.length);
  assert.deepEqual(report.missingLevelingCategories, []);
  assert.deepEqual(report.unsupportedEnemySystemCategories, []);
  assert.equal(report.xpCategoryContract.familyMappings.CULTIST, 'cultist');
  const readiness = new LevelingReadinessService({ configResult: loaded, repository, experienceAuthority: service.experienceAuthority, enemyCoverage: service.enemyCoverage, enemySystemCompatibility: report }).check();
  assert.ok(!readiness.blockers.includes('ENEMY_SYSTEM_CATEGORY_COVERAGE_PARTIAL'));
});

test('Leveling exports a runtime category contract with JSON as the sole reward authority', () => {
  const { service } = serviceWithPlayer();
  const contract = createAetheriusEnemySystemXpContract({ catalog: service.catalog, balanceVersion: loaded.configVersion });
  assert.equal(contract.balanceVersion, loaded.configVersion);
  assert.equal(contract.eventName, AETHERIUS_ENEMY_KILLED_EVENT);
  assert.ok(contract.categories.includes('ash_guardian'));
  assert.ok(contract.categories.includes('thalmor'));
  assert.ok(contract.categories.includes('ice_wraith'));
  assert.equal(contract.familyMappings.WRATHMAN, 'wrathman');
});

test('bridge subscribes to the Enemy System event and awards through the Leveling pipeline', () => {
  const { service, repository } = serviceWithPlayer();
  const eventHub = new TestEventHub();
  const results = [];
  const bridge = new AetheriusEnemySystemBridge({
    enemySystemApi,
    eventHub,
    xpService: service,
    partySnapshotProvider: () => soloParty(1),
    clock: () => Date.parse('2026-09-12T12:00:00Z'),
    onResult: (result) => results.push(result)
  });
  const connection = bridge.connect();
  assert.equal(connection.connected, true);
  eventHub.emit(AETHERIUS_ENEMY_KILLED_EVENT, event({ eventId: 'enemy-system-event', killerId: 0 }));
  assert.equal(results[0].status, 'AWARDED');
  assert.equal(repository.get(1).totalXpAccumulated, 10);
  assert.equal(bridge.disconnect(), true);
});

test('bridge fails closed when either contract rejects an event', () => {
  const { service, repository } = serviceWithPlayer();
  const bridge = new AetheriusEnemySystemBridge({ enemySystemApi, xpService: service, partySnapshotProvider: () => soloParty(1) });
  const result = bridge.consume({ ...event({ eventId: 'invalid-enemy-system-event' }), finalXp: 999 });
  assert.equal(result.status, 'REJECTED');
  assert.equal(result.reasonCode, 'INVALID_EVENT_CONTRACT');
  assert.equal(repository.get(1).totalXpAccumulated, 0);
});

test('registry coverage maps explicit safety exclusions and keeps unknown enemies visible', () => {
  const rows = enemySystemRegistryToCoverageRows({ enemies: [
    { stableEnemyIdentity: 'Skyrim.esm|000001', sourcePlugin: 'Skyrim.esm', xpCategory: 'bandit' },
    { stableEnemyIdentity: 'Quest.esp|000002', sourcePlugin: 'Quest.esp', xpCategory: null, quest: true },
    { stableEnemyIdentity: 'Mod.esp|000003', sourcePlugin: 'Mod.esp', xpCategory: null, classificationStatus: 'UNRESOLVED' }
  ] });
  assert.equal(rows[1].explicitlyExcluded, true);
  assert.equal(rows[2].explicitlyExcluded, false);

  const { service } = serviceWithPlayer();
  const adapter = new AetheriusEnemySystemCoverageAdapter({ catalog: service.catalog, readRegistry: () => ({ enemies: rows }), readEpoch: () => 'epoch-a' });
  const audit = adapter.audit();
  assert.deepEqual(audit.counts, { COVERED: 1, EXCLUDED: 1, UNASSIGNED: 1, INVALID: 0 });
  assert.equal(adapter.check().ok, false);
});

test('one-step integration binds live registry coverage and restores the previous gate on disconnect', () => {
  const { service, repository } = serviceWithPlayer();
  const previousCoverage = service.enemyCoverage;
  const eventHub = new TestEventHub();
  const integration = connectAetheriusEnemySystem({
    enemySystemApi,
    eventHub,
    xpService: service,
    readRegistry: () => ({ enemies: [{ stableEnemyIdentity: 'Fixture.esp|000001', sourcePlugin: 'Fixture.esp', xpCategory: 'bandit' }] }),
    readEpoch: () => 'epoch-a',
    partySnapshotProvider: () => soloParty(1)
  });
  eventHub.emit(AETHERIUS_ENEMY_KILLED_EVENT, event({ eventId: 'connected-event' }));
  assert.equal(repository.get(1).totalXpAccumulated, 10);
  assert.equal(integration.coverage.check().ok, true);
  assert.ok(integration.xpCategoryContract.categories.includes('cultist'));
  assert.equal(integration.disconnect(), true);
  assert.equal(service.enemyCoverage, previousCoverage);
});

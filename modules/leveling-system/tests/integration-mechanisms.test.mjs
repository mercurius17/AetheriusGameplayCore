import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ConfigLoader } from '../src/config/loader.mjs';
import { validateEnemyBaseXp } from '../src/config/validator.mjs';
import { EnemyXpCatalog } from '../src/domain/catalog.mjs';
import { isExactXpCategory, validateEnemyDescriptor } from '../src/contracts/enemy-killed.mjs';
import { canonicalEnemyIdentity, EnemyCoverageAuditor, EnemyCoverageGate, LoadOrderIndependentEnemyIndex } from '../src/integration/enemy-coverage.mjs';
import { ExperienceAuthorityCoordinator, LEVELING_AUTHORITY_ID } from '../src/integration/experience-authority.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const loaded = await new ConfigLoader(root).load();

test('plugin plus local FormID remains stable when runtime load-order slots change', () => {
  const index = new LoadOrderIndependentEnemyIndex();
  assert.equal(index.refresh({ epoch: 'order-a', actors: [{ sourcePlugin: 'ExampleCreatures.esp', localFormId: 0x123, runtimeActorId: 0x01000123, xpCategory: 'modded_horror' }] }).ok, true);
  const first = index.resolveRuntime(0x01000123, 'order-a').actor.stableEnemyIdentity;
  assert.equal(first, 'examplecreatures.esp|000123');
  assert.equal(index.refresh({ epoch: 'order-b', actors: [{ sourcePlugin: 'ExampleCreatures.esp', localFormId: 0x123, runtimeActorId: 0x7F000123, xpCategory: 'modded_horror' }] }).ok, true);
  const second = index.resolveRuntime(0x7F000123, 'order-b').actor.stableEnemyIdentity;
  assert.equal(second, first);
  assert.equal(index.resolveRuntime(0x01000123, 'order-a').reason, 'STALE_LOAD_ORDER_EPOCH');
});

test('configured mod categories are accepted without changing application code', () => {
  assert.equal(isExactXpCategory('modded_horror'), true);
  assert.equal(isExactXpCategory('Modded Horror'), false);
  const descriptor = {
    contractVersion: 1, managed: true, stableEnemyIdentity: canonicalEnemyIdentity('ExampleCreatures.esp', 0x123), runtimeActorId: 1,
    enemyFamily: 'MODDED_HORROR', spawnRole: 'GENERIC', combatLevel: 20, xpEligible: true, xpCategory: 'modded_horror',
    sourcePlugin: 'ExampleCreatures.esp', winningOverridePlugin: 'ExampleCreaturesPatch.esp', sourceRecordIdentity: 'ExampleCreatures.esp|000123'
  };
  assert.deepEqual(validateEnemyDescriptor(descriptor), []);
  const moddedConfig = structuredClone(loaded.configs.enemyBaseXp);
  moddedConfig.profiles.push({ balanceId: 'mods.modded-horror', sourceLabel: 'Modded Horror', awardMode: 'SCALED', baseXp: 19, eventXpCategories: ['modded_horror'], mappingStatus: 'ASSIGNED', enabled: true, difficultyCategory: 'MEDIUM', provenance: 'TEST_ONLY' });
  assert.deepEqual(validateEnemyBaseXp(moddedConfig), []);
  assert.equal(new EnemyXpCatalog(moddedConfig).resolveExact('modded_horror').profile.baseXp, 19);
});

test('coverage audit accounts for every discovered enemy and reports gaps', () => {
  const catalog = new EnemyXpCatalog(loaded.configs.enemyBaseXp);
  const audit = new EnemyCoverageAuditor({ catalog }).audit([
    { sourcePlugin: 'Skyrim.esm', localFormId: 1, xpCategory: 'falmer' },
    { sourcePlugin: 'ModCreatures.esp', localFormId: 2, xpCategory: 'modded_horror' },
    { sourcePlugin: 'QuestMod.esp', localFormId: 3, explicitlyExcluded: true, exclusionReason: 'QUEST_ACTOR' }
  ], { epoch: 'order-a' });
  assert.equal(audit.total, 3);
  assert.deepEqual(audit.counts, { COVERED: 1, EXCLUDED: 1, UNASSIGNED: 1, INVALID: 0 });
  assert.equal(audit.complete, false);
  assert.equal(new EnemyCoverageGate({ readAudit: () => audit, readCurrentEpoch: () => 'order-a' }).check().ok, false);
});

test('coverage gate opens only for a non-empty complete enemy audit', () => {
  assert.equal(new EnemyCoverageGate({ readAudit: () => ({ complete: true, epoch: 'a', total: 2 }), readCurrentEpoch: () => 'a' }).check().ok, true);
  assert.equal(new EnemyCoverageGate({ readAudit: () => ({ complete: true, epoch: 'a', total: 0 }), readCurrentEpoch: () => 'a' }).check().ok, false);
  assert.equal(new EnemyCoverageGate({ readAudit: () => ({ complete: false, epoch: 'a', total: 2 }), readCurrentEpoch: () => 'a' }).check().ok, false);
  assert.equal(new EnemyCoverageGate({ readAudit: () => ({ complete: true, epoch: 'a', total: 2 }), readCurrentEpoch: () => 'b' }).check().reason, 'STALE_COVERAGE_EPOCH');
  assert.equal(new EnemyCoverageGate({ readAudit: () => { throw new Error('offline'); }, readCurrentEpoch: () => 'a' }).check().reason, 'COVERAGE_AUDIT_FAILED');
});

test('authority coordinator disables every competing XP authority before activation', () => {
  const authorities = [
    { id: LEVELING_AUTHORITY_ID, enabled: true },
    { id: 'LegacyLevelingSystem', enabled: true },
    { id: 'AnotherXpMod', enabled: true }
  ];
  const coordinator = new ExperienceAuthorityCoordinator({
    listAuthorities: () => authorities,
    disableAuthority: (id) => {
      const authority = authorities.find((candidate) => candidate.id === id);
      if (!authority) return false;
      authority.enabled = false;
      return true;
    }
  });
  assert.equal(coordinator.check().ok, false);
  const result = coordinator.disableConflicts();
  assert.equal(result.ok, true);
  assert.deepEqual(result.disabled, ['LegacyLevelingSystem', 'AnotherXpMod']);
  assert.deepEqual(result.activeAuthorities, [LEVELING_AUTHORITY_ID]);
  assert.equal(new ExperienceAuthorityCoordinator({ listAuthorities: () => { throw new Error('offline'); } }).check().reason, 'AUTHORITY_DISCOVERY_FAILED');
});

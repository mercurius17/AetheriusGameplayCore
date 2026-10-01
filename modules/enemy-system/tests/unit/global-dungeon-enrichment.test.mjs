import test from 'node:test';
import assert from 'node:assert/strict';
import { enrichGlobalDungeonProfiles, summarizeDungeonEnrichment } from '../../src/index.mjs';

function profile(dungeonId, { cells = [], locations = [], family = 'DRAUGR' } = {}) {
  return {
    schemaVersion: 1,
    dungeonId,
    cells,
    locations,
    classification: 'MEDIUM',
    progressionContext: { contractVersion: 1, sourceType: 'DUNGEON', sourceId: dungeonId, recommendedClassMin: 10, recommendedClassMax: 20, status: 'ASSIGNED', valid: true, provenance: 'fixture' },
    segments: [{ segmentId: `${dungeonId}|main`, allowedEnemyFamilies: [family] }],
    contentEvidence: { discoveryRule: 'fixture' }
  };
}

function enemy(canonicalFormId, enemyFamily, combatLevel, extra = {}) {
  return {
    stableEnemyIdentity: canonicalFormId.replace(':', '|'),
    canonicalFormId,
    editorId: extra.editorId ?? enemyFamily,
    raceEditorId: null,
    enemyFamily,
    combatLevel,
    unique: extra.unique ?? false
  };
}

test('global enrichment preserves every dungeon and applies placed NPC evidence outside Hammet', () => {
  const profiles = [
    profile('Skyrim.esm|000100', { cells: ['Skyrim.esm|000101'] }),
    profile('ModDungeon.esp|000200', { locations: ['ModDungeon.esp|000200'], family: 'BANDIT' }),
    profile('Unoccupied.esm|000300', { cells: ['Unoccupied.esm|000301'], family: 'WOLF' })
  ];
  const placedActors = [
    { identity: 'Skyrim.esm|000110', canonicalFormId: '000110:Skyrim.esm', baseId: '000120:Skyrim.esm', baseIdentity: 'Skyrim.esm|000120', baseType: 'Npc', cellIdentity: 'Skyrim.esm|000101' },
    { identity: 'ModDungeon.esp|000210', canonicalFormId: '000210:ModDungeon.esp', baseId: '000220:ModDungeon.esp', baseIdentity: 'ModDungeon.esp|000220', baseType: 'LeveledNpc', locationIdentity: 'ModDungeon.esp|000200' }
  ];
  const enemies = [
    enemy('000120:Skyrim.esm', 'DRAGON_PRIEST', 100, { unique: true }),
    enemy('000230:ModDungeon.esp', 'BANDIT', null)
  ];
  const lists = [{
    id: '000220:ModDungeon.esp',
    canonicalFormId: '000220:ModDungeon.esp',
    entries: [{ formId: '000230:ModDungeon.esp', targetType: 'Npc', resolved: true, level: 20 }]
  }];

  const result = enrichGlobalDungeonProfiles({ profiles, placedActors, enemies, lists, epoch: 'fixture-epoch' });
  assert.equal(result.length, 3);
  assert.equal(result[0].classification, 'VERY_HARD');
  assert.equal(result[0].spawnRefs[0].spawnRole, 'BOSS_UNIQUE');
  assert.equal(result[1].classification, 'MEDIUM');
  assert.deepEqual(result[1].segments[0].allowedEnemyFamilies, ['BANDIT']);
  assert.deepEqual(result[1].associatedLvln, ['ModDungeon.esp|000220']);
  assert.equal(result[1].contentEvidence.levelP75, 20);
  assert.equal(result[2].classification, 'EASY');
  assert.equal(result[2].spawnRefs.length, 0);
  assert.deepEqual(summarizeDungeonEnrichment(result), {
    managedLocations: 3,
    enrichedWithPlacedActors: 2,
    placedActors: 2,
    candidateEnemies: 2,
    unresolvedActorFamilies: 0,
    unresolvedActorBases: 0,
    unassignedClassification: 0,
    tierCounts: { EASY: 1, MEDIUM: 1, HARD: 0, VERY_HARD: 1 }
  });
});

test('global enrichment resolves nested leveled-list candidates for dungeon classification', () => {
  const profiles = [profile('Skyrim.esm|000400', { cells: ['Skyrim.esm|000401'], family: 'DRAUGR' })];
  const placedActors = [{
    identity: 'Skyrim.esm|000410',
    baseId: '000420:Skyrim.esm',
    baseIdentity: 'Skyrim.esm|000420',
    baseType: 'LeveledNpc',
    cellIdentity: 'Skyrim.esm|000401'
  }];
  const lists = [
    { id: '000420:Skyrim.esm', entries: [{ formId: '000421:Skyrim.esm', targetType: 'LeveledNpc', resolved: true, level: 1 }] },
    { id: '000421:Skyrim.esm', entries: [{ formId: '000430:Skyrim.esm', targetType: 'Npc', resolved: true, level: 45 }] }
  ];
  const result = enrichGlobalDungeonProfiles({
    profiles,
    placedActors,
    lists,
    enemies: [enemy('000430:Skyrim.esm', 'DRAUGR', null)],
    epoch: 'fixture-epoch'
  });
  assert.equal(result[0].classification, 'HARD');
  assert.equal(result[0].contentEvidence.levelP75, 45);
  assert.deepEqual(result[0].spawnRefs[0].candidateEnemies[0].lvlnPath, ['000420:Skyrim.esm', '000421:Skyrim.esm', '000430:Skyrim.esm']);
});

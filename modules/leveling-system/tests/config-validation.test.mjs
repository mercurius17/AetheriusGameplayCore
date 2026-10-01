import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ConfigLoader } from '../src/config/loader.mjs';
import { validateConfigSet } from '../src/config/validator.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const loaded = await new ConfigLoader(root).load();

function mutated(change) {
  const copy = structuredClone(loaded.configs);
  change(copy);
  return copy;
}

test('invalid schemaVersion is rejected', () => {
  assert.ok(validateConfigSet(mutated((configs) => { configs.levelProgression.schemaVersion = 2; })).some((error) => error.includes('schemaVersion')));
});

test('negative base and fixed XP are rejected', () => {
  const errors = validateConfigSet(mutated((configs) => {
    configs.enemyBaseXp.profiles.find((profile) => profile.awardMode === 'SCALED').baseXp = -1;
    configs.enemyBaseXp.profiles.find((profile) => profile.awardMode === 'FIXED').fixedXp = -1;
  }));
  assert.ok(errors.some((error) => error.includes('positive baseXp')));
  assert.ok(errors.some((error) => error.includes('positive fixedXp')));
});

test('duplicate category mappings and enabled unresolved profiles are rejected', () => {
  const errors = validateConfigSet(mutated((configs) => {
    configs.enemyBaseXp.profiles.find((profile) => profile.sourceLabel === 'Bandit').eventXpCategories.push('vampire');
    const iceWraith = configs.enemyBaseXp.profiles.find((profile) => profile.sourceLabel === 'Ice Wraith');
    iceWraith.mappingStatus = 'UNRESOLVED';
    iceWraith.enabled = true;
  }));
  assert.ok(errors.some((error) => error.includes('conflicting profiles')));
  assert.ok(errors.some((error) => error.includes('unresolved profiles must be disabled')));
});

test('inconsistent progression totals and invalid party/fatigue policy are rejected', () => {
  const errors = validateConfigSet(mutated((configs) => {
    configs.levelProgression.levels[0].totalAccumulated = 999;
    configs.partyXp.normal.maxSize = 9;
    configs.fatigue.reset.localHour = 7;
  }));
  assert.ok(errors.some((error) => error.includes('totalAccumulated')));
  assert.ok(errors.some((error) => error.includes('normal party range')));
  assert.ok(errors.some((error) => error.includes('06:00')));
});

test('JSON parser failure is not silently converted into an empty config', () => {
  assert.throws(() => JSON.parse('{"schemaVersion":1,}'));
});

test('content relevance cannot allow a 100% reduction', () => {
  const errors = validateConfigSet(mutated((configs) => {
    configs.contentRelevance.policy.maximumReduction = 1;
  }));
  assert.ok(errors.some((error) => error.includes('maximumReduction')));
});

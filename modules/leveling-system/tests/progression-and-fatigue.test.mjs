import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ConfigLoader } from '../src/config/loader.mjs';
import { ProgressionRules } from '../src/domain/progression.mjs';
import { FatiguePolicy } from '../src/policies/fatigue.mjs';
import { player } from './helpers.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const loaded = await new ConfigLoader(root).load();
const progression = new ProgressionRules(loaded.configs.levelProgression);
const fatigue = new FatiguePolicy({ config: loaded.configs.fatigue, progression });

test('progression has 39 contiguous transitions, total 1,848,000, and 585 potential points', () => {
  assert.equal(loaded.configs.levelProgression.levels.length, 39);
  assert.equal(loaded.configs.levelProgression.levels.at(-1).totalAccumulated, 1848000);
  assert.equal(loaded.configs.levelProgression.totalPotentialAttributePoints, 585);
});

test('level-up grants 15 points exactly once per transition', () => {
  const state = progression.createInitialState({ playerId: 1, classId: 'warrior' });
  const result = fatigue.apply(state, 1000, Date.parse('2026-09-10T12:00:00Z'));
  assert.equal(result.xpAwarded, 1000);
  assert.equal(state.classLevel, 4);
  assert.equal(state.unspentAttributePoints, 45);
  assert.equal(state.currentXp, 0);
});

test('fatigue starts at level 15 with floor(20% of current threshold)', () => {
  const state = progression.normalizeState(player(1, { classLevel: 15 }));
  const result = fatigue.apply(state, 2161, Date.parse('2026-09-10T12:00:00Z'));
  assert.equal(state.dailyXpCap, 2160);
  assert.equal(result.xpAwarded, 2160);
  assert.equal(result.remainingXp, 1);
  assert.equal(result.fatigueCapReached, true);
  assert.equal(state.isFatigued, true);
});

test('a reward crossing 14 -> 15 applies the level 15 cap to the remainder', () => {
  const state = progression.normalizeState(player(1, { classLevel: 14 }));
  const result = fatigue.apply(state, 9101, Date.parse('2026-09-10T12:00:00Z'));
  assert.equal(state.classLevel, 15);
  assert.equal(result.xpAwarded, 9101);
  assert.equal(state.currentXp, 1);
  assert.equal(state.dailyXpGained, 1);
});

test('reset is a 06:00 America/Sao_Paulo cycle boundary', () => {
  const before = progression.normalizeState(player(1, { classLevel: 15, dailyCycleKey: null, dailyXpGained: 200 }));
  fatigue.refresh(before, Date.parse('2026-09-10T08:59:59Z'));
  const beforeKey = before.dailyCycleKey;
  fatigue.refresh(before, Date.parse('2026-09-10T09:00:00Z'));
  assert.notEqual(before.dailyCycleKey, beforeKey);
  assert.equal(before.dailyXpGained, 0);
});

test('level 40 cannot advance beyond the cap', () => {
  const state = progression.normalizeState(player(1, { classLevel: 39 }));
  const start = Date.parse('2026-09-10T12:00:00Z');
  let result;
  for (let day = 0; day < 5; day += 1) result = fatigue.apply(state, 39700, start + day * 86400000);
  assert.equal(state.classLevel, 40);
  assert.equal(state.nextLevelXp, 0);
  assert.equal(state.totalXpAccumulated, 198500);
  assert.equal(result.xpAwarded, 39700);
  const second = fatigue.apply(state, 1000, Date.parse('2026-09-10T12:00:00Z'));
  assert.equal(second.xpAwarded, 0);
});

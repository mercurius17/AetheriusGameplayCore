import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ConfigLoader } from '../src/config/loader.mjs';
import { XpAwardService } from '../src/integration/enemy-consumer.mjs';
import { InMemoryEventIdempotencyStore, InMemoryProgressionRepository } from '../src/persistence/in-memory.mjs';
import { ProgressionRules } from '../src/domain/progression.mjs';
import { event, player, soloParty, validContext } from './helpers.mjs';
import { createSimulationAuthorityCoordinator } from '../src/integration/experience-authority.mjs';
import { createSimulationCoverageGate } from '../src/integration/enemy-coverage.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const loaded = await new ConfigLoader(root).load();

function setup(states = [player(1)]) {
  const progression = new ProgressionRules(loaded.configs.levelProgression);
  const repository = new InMemoryProgressionRepository({ progression });
  for (const state of states) repository.seed(state);
  const idempotencyStore = new InMemoryEventIdempotencyStore();
  const service = new XpAwardService({ configResult: loaded, repository, idempotencyStore, experienceAuthority: createSimulationAuthorityCoordinator(), enemyCoverage: createSimulationCoverageGate() });
  return { service, repository, idempotencyStore };
}

function fixedEvent(overrides = {}) {
  return event({ category: 'dragon_priest', combatLevel: 100, ...overrides });
}

test('fixed Dragon Priest awards exact fixed XP and bypasses all numerical modifiers', () => {
  const { service, repository } = setup();
  const result = service.processEvent(fixedEvent(), { partySnapshot: soloParty(1), nowMs: Date.parse('2026-09-10T12:00:00Z') });
  assert.equal(result.status, 'AWARDED');
  assert.equal(result.recipients[0].xpAwarded, 500);
  assert.equal(repository.get(1).totalXpAccumulated, 500);
  assert.equal(repository.get(1).currentXp, 300);
});

test('XP processing fails closed without exclusive system authority', () => {
  const progression = new ProgressionRules(loaded.configs.levelProgression);
  const repository = new InMemoryProgressionRepository({ progression });
  repository.seed(player(1));
  const service = new XpAwardService({ configResult: loaded, repository });
  const result = service.processEvent(fixedEvent({ eventId: 'authority-unbound' }), { partySnapshot: soloParty(1) });
  assert.equal(result.status, 'REJECTED');
  assert.equal(result.reasonCode, 'EXPERIENCE_AUTHORITY_NOT_EXCLUSIVE');
  assert.equal(repository.get(1).totalXpAccumulated, 0);
});

test('XP processing fails closed without a complete enemy coverage audit', () => {
  const progression = new ProgressionRules(loaded.configs.levelProgression);
  const repository = new InMemoryProgressionRepository({ progression });
  repository.seed(player(1));
  const service = new XpAwardService({ configResult: loaded, repository, experienceAuthority: createSimulationAuthorityCoordinator() });
  const result = service.processEvent(fixedEvent({ eventId: 'coverage-unbound' }), { partySnapshot: soloParty(1) });
  assert.equal(result.status, 'REJECTED');
  assert.equal(result.reasonCode, 'ENEMY_COVERAGE_INCOMPLETE');
  assert.equal(repository.get(1).totalXpAccumulated, 0);
});

test('fixed Dragon ignores the raid reduction at size 8', () => {
  const states = Array.from({ length: 8 }, (_, index) => player(index + 1));
  const { service, repository } = setup(states);
  const partySnapshot = { source: 'SERVER', isRaid: true, center: { position: [0, 0, 0], cell: 'Tamriel' }, members: states.map((state) => ({ id: state.playerId, isOnline: true, pos: [0, 0, 0], cellOrWorldDesc: 'Tamriel' })) };
  const result = service.processEvent(event({ eventId: 'dragon-raid', category: 'dragon', combatLevel: 100 }), { partySnapshot, nowMs: Date.parse('2026-09-10T12:00:00Z') });
  assert.equal(result.status, 'AWARDED');
  assert.equal(result.partyModifier, 1);
  assert.equal(result.recipients.length, 8);
  assert.equal(repository.get(1).totalXpAccumulated, 1000);
  assert.equal(repository.get(1).currentXp, 0);
});

test('regular XP applies approved content relevance', () => {
  const { service, repository } = setup();
  const result = service.processEvent(event({ eventId: 'regular-unresolved' }), { partySnapshot: soloParty(1) });
  assert.equal(result.status, 'AWARDED');
  assert.equal(result.recipients[0].xpAwarded, 10);
  assert.equal(repository.get(1).currentXp, 10);
});

test('EnemyCombatLevel 41 uses the approved second softcap', () => {
  const { service, repository } = setup();
  const result = service.processEvent(event({ eventId: 'level-41', category: 'bandit', combatLevel: 41 }), { partySnapshot: soloParty(1) });
  assert.equal(result.status, 'AWARDED');
  assert.equal(result.recipients[0].xpAwarded, 58.2);
  assert.equal(repository.get(1).currentXp, 58.2);
});

test('content relevance reduces 5% per level above the range with a 90% cap', () => {
  const { service } = setup([player(1, { classLevel: 25 })]);
  const result = service.processEvent(event({ eventId: 'relevance-floor', category: 'bandit', combatLevel: 1, context: validContext({ min: 1, max: 5 }) }), { partySnapshot: soloParty(1) });
  assert.equal(result.status, 'AWARDED');
  assert.equal(result.recipients[0].xpAwarded, 1);
  assert.equal(result.recipients[0].ledgerEntry.contentRelevance.multiplier, 0.1);
});

test('fixed boss bypasses fatigue and does not consume the daily allowance', () => {
  const { service, repository } = setup([player(1, { classLevel: 15, dailyCycleKey: '2026-09-10', dailyXpGained: 2160 })]);
  const result = service.processEvent(fixedEvent({ eventId: 'fixed-fatigue-bypass' }), { partySnapshot: soloParty(1), nowMs: Date.parse('2026-09-10T12:00:00Z') });
  assert.equal(result.status, 'AWARDED');
  assert.equal(result.recipients[0].xpAwarded, 500);
  assert.equal(result.recipients[0].fatigueCapReached, false);
  assert.equal(repository.get(1).dailyXpGained, 2160);
  assert.equal(result.recipients[0].ledgerEntry.fatigueStatus, 'BYPASSED_FIXED_XP');
});

test('UNASSIGNED progression context rejects before reward', () => {
  const { service } = setup();
  const result = service.processEvent(fixedEvent({ eventId: 'unassigned', context: validContext({ status: 'UNASSIGNED', valid: false }) }), { partySnapshot: soloParty(1) });
  assert.equal(result.reasonCode, 'UNASSIGNED_PROGRESSION_CONTEXT');
});

test('unknown exact contract category is not mapped to a default', () => {
  const { service } = setup();
  const result = service.processEvent(event({ eventId: 'unconfigured-mod-enemy', category: 'unconfigured_mod_enemy' }), { partySnapshot: soloParty(1) });
  assert.equal(result.reasonCode, 'UNRESOLVED_XP_CATEGORY');
});

test('killer 0 uses the authoritative party snapshot without a final-hit exception', () => {
  const noKiller = setup().service.processEvent(fixedEvent({ eventId: 'no-killer', killerId: 0 }), { partySnapshot: soloParty(1) });
  assert.equal(noKiller.status, 'AWARDED');
  assert.equal(noKiller.recipients[0].playerId, 1);
});

test('invalid party size and no class are explicit rejections', () => {
  const invalidParty = setup().service.processEvent(fixedEvent({ eventId: 'party-21' }), { partySnapshot: { source: 'SERVER', isRaid: true, center: { position: [0, 0, 0], cell: 'Tamriel' }, members: Array.from({ length: 21 }, (_, index) => ({ id: index + 1, isOnline: true, pos: [0, 0, 0], cellOrWorldDesc: 'Tamriel' })) } });
  assert.equal(invalidParty.reasonCode, 'INVALID_PARTY_SIZE');
  const noClass = setup([player(1, { classId: null })]).service.processEvent(fixedEvent({ eventId: 'no-class' }), { partySnapshot: soloParty(1) });
  assert.equal(noClass.reasonCode, 'PLAYER_HAS_NO_CLASS');
});

test('same eventId is idempotent and cannot grant attribute points twice', () => {
  const { service, repository, idempotencyStore } = setup();
  const first = service.processEvent(fixedEvent({ eventId: 'replay' }), { partySnapshot: soloParty(1) });
  const second = service.processEvent(fixedEvent({ eventId: 'replay' }), { partySnapshot: soloParty(1) });
  assert.equal(first.status, 'AWARDED');
  assert.equal(second.reasonCode, 'DUPLICATE_EVENT');
  assert.equal(repository.get(1).totalXpAccumulated, 500);
  assert.equal(repository.get(1).currentXp, 300);
  assert.equal(repository.get(1).unspentAttributePoints, 15);
  assert.equal(idempotencyStore.has('replay:1'), true);
});

test('level-up awards points through the pipeline without invoking class perks', () => {
  const { service, repository } = setup([player(1, { currentXp: 100 })]);
  const result = service.processEvent(fixedEvent({ eventId: 'level-up', category: 'dragon', combatLevel: 100 }), { partySnapshot: soloParty(1) });
  assert.equal(result.recipients[0].newClassLevel, 4);
  assert.equal(repository.get(1).unspentAttributePoints, 45);
  assert.ok(service.publisher.events.some((item) => item.type === 'aetherius.leveling.level-changed.v1'));
});

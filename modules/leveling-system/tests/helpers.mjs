export function validContext({ status = 'ASSIGNED', valid = true, min = 1, max = 40 } = {}) {
  return { contractVersion: 1, sourceType: 'DUNGEON', sourceId: 'fixture-dungeon', recommendedClassMin: valid ? min : null, recommendedClassMax: valid ? max : null, status, valid, provenance: 'TEST_ONLY' };
}

export function event({ eventId = 'event-1', category = 'bandit', combatLevel = 1, killerId = 1, xpEligible = true, context = validContext(), managed = true } = {}) {
  return { contractVersion: 1, eventId, occurredAt: 1760000000000, victimId: 9001, killerId, enemy: { contractVersion: 1, managed, stableEnemyIdentity: 'Fixture.esp|000001', runtimeActorId: 9001, enemyFamily: category.toUpperCase(), spawnRole: 'GENERIC', sourceLevel: combatLevel, combatLevel, xpEligible, xpCategory: category, sourcePlugin: 'Fixture.esp', winningOverridePlugin: 'Fixture.esp', sourceRecordIdentity: 'Fixture.esp|000001', spawnId: 'fixture-spawn-1' }, progressionContext: context, contributors: [] };
}

export function soloParty(playerId = 1) {
  return { source: 'SERVER', isRaid: false, center: { position: [0, 0, 0], cell: 'Tamriel' }, members: [{ id: playerId, isOnline: true, pos: [0, 0, 0], cellOrWorldDesc: 'Tamriel' }] };
}

export function player(playerId = 1, { classId = 'warrior', classLevel = 1, currentXp = 0, totalXpAccumulated = 0, unspentAttributePoints = 0, dailyCycleKey = null, dailyXpGained = 0 } = {}) {
  return { playerId, playerName: `Player_${playerId}`, classId, classLevel, currentXp, totalXpAccumulated, unspentAttributePoints, dailyCycleKey, dailyXpGained };
}

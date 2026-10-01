export const OUTPUT_EVENTS = Object.freeze({
  XP_AWARDED: 'aetherius.leveling.xp-awarded.v1',
  LEVEL_CHANGED: 'aetherius.leveling.level-changed.v1',
  XP_REJECTED: 'aetherius.leveling.xp-rejected.v1'
});

export function createXpAwardedEvent({ eventId, playerId, xpAwarded, oldClassLevel, newClassLevel, attributePointsGranted, configVersion, ledgerId }) {
  return { contractVersion: 1, type: OUTPUT_EVENTS.XP_AWARDED, eventId, playerId, xpAwarded, oldClassLevel, newClassLevel, attributePointsGranted, configVersion, ledgerId };
}

export function createLevelChangedEvent({ eventId, playerId, oldClassLevel, newClassLevel, levelsGained, attributePointsGranted, configVersion }) {
  return { contractVersion: 1, type: OUTPUT_EVENTS.LEVEL_CHANGED, eventId, playerId, oldClassLevel, newClassLevel, levelsGained, attributePointsGranted, configVersion };
}

export function createXpRejectedEvent({ eventId, playerId = null, reasonCode, details = null, configVersion = null }) {
  return { contractVersion: 1, type: OUTPUT_EVENTS.XP_REJECTED, eventId, playerId, reasonCode, details, configVersion };
}

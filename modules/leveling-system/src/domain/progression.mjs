export class ProgressionRules {
  constructor(config) {
    this.config = config;
    this.maxClassLevel = config.maxClassLevel;
    this.attributePointsPerLevel = config.attributePointsPerLevel;
    this.byLevel = new Map(config.levels.map((entry) => [entry.levelFrom, entry.xpRequired]));
  }

  xpRequiredFor(level) { return level >= this.maxClassLevel ? 0 : this.byLevel.get(level); }

  normalizeState(raw) {
    const state = { ...raw };
    state.classLevel = Number.isInteger(state.classLevel) ? state.classLevel : (Number.isInteger(state.level) ? state.level : 1);
    state.currentXp = Number.isFinite(state.currentXp) ? state.currentXp : 0;
    state.totalXpAccumulated = Number.isFinite(state.totalXpAccumulated) ? state.totalXpAccumulated : 0;
    state.unspentAttributePoints = Number.isFinite(state.unspentAttributePoints) ? state.unspentAttributePoints : 0;
    state.nextLevelXp = this.xpRequiredFor(state.classLevel);
    state.dailyXpGained = Number.isFinite(state.dailyXpGained) ? state.dailyXpGained : 0;
    state.dailyXpCap = state.dailyXpCap ?? null;
    state.isFatigued = state.isFatigued === true;
    return state;
  }

  validateState(state) {
    const errors = [];
    if (!Number.isInteger(state.classLevel) || state.classLevel < 1 || state.classLevel > this.maxClassLevel) errors.push('classLevel must be 1..40');
    if (!Number.isFinite(state.currentXp) || state.currentXp < 0) errors.push('currentXp must be non-negative');
    if (!Number.isFinite(state.totalXpAccumulated) || state.totalXpAccumulated < 0) errors.push('totalXpAccumulated must be non-negative');
    if (!Number.isFinite(state.unspentAttributePoints) || state.unspentAttributePoints < 0) errors.push('unspentAttributePoints must be non-negative');
    if (state.nextLevelXp !== this.xpRequiredFor(state.classLevel)) errors.push('nextLevelXp does not match configuration');
    return errors;
  }

  createInitialState({ playerId, classId = null, playerName = null } = {}) {
    return this.normalizeState({ playerId, playerName, classId, classLevel: 1, level: 1, currentXp: 0, nextLevelXp: this.xpRequiredFor(1), totalXpAccumulated: 0, unspentAttributePoints: 0, dailyCycleKey: null, dailyXpGained: 0, dailyXpCap: null, isFatigued: false });
  }
}

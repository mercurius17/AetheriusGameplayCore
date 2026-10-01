export function buildProgressionReadModel(state) {
  const required = state.nextLevelXp ?? 0;
  const progressPercent = state.classLevel >= 40 || required <= 0 ? 100 : Math.min(100, Math.max(0, (state.currentXp / required) * 100));
  return {
    playerId: state.playerId,
    classLevel: state.classLevel,
    currentXp: state.currentXp,
    xpRequiredForNextLevel: required,
    progressPercent,
    unspentAttributePoints: state.unspentAttributePoints,
    fatigueActive: state.classLevel >= 15 && state.classLevel < 40,
    dailyXpGained: state.dailyXpGained ?? 0,
    dailyXpCap: state.dailyXpCap ?? null,
    nextResetAt: state.nextResetAt ?? null
  };
}

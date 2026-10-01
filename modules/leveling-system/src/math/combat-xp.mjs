import { roundXp } from './scaling.mjs';

export class CombatXpCalculator {
  calculate({ profile, enemyLevelFactor = null, contentMultiplier = 1, partyModifier }) {
    const fixed = profile.awardMode === 'FIXED';
    const base = fixed ? profile.fixedXp : profile.baseXp;
    const factor = fixed ? 1 : enemyLevelFactor;
    if (!Number.isFinite(base) || !Number.isFinite(factor) || !Number.isFinite(contentMultiplier) || !Number.isFinite(partyModifier)) return { ok: false, reason: 'INVALID_XP_INPUT' };
    const effectiveContentMultiplier = fixed ? 1 : contentMultiplier;
    const effectivePartyModifier = fixed ? 1 : partyModifier;
    const value = base * factor * effectiveContentMultiplier * effectivePartyModifier;
    if (!Number.isFinite(value) || value <= 0) return { ok: false, reason: 'INVALID_XP_RESULT' };
    return { ok: true, value: roundXp(value), breakdown: { awardMode: profile.awardMode, baseXp: profile.baseXp ?? null, fixedXp: profile.fixedXp ?? null, enemyLevelFactor: fixed ? null : enemyLevelFactor, contentMultiplier: fixed ? null : contentMultiplier, partyModifier: fixed ? null : partyModifier, allXpModifiersBypassed: fixed } };
  }
}

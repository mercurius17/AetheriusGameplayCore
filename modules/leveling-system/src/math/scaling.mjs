import { ReasonCodes } from '../contracts/reasons.mjs';

export class EnemyLevelScalingPolicy {
  constructor(config) { this.ranges = config.ranges; }

  resolve(enemyCombatLevel) {
    if (!Number.isInteger(enemyCombatLevel) || enemyCombatLevel < 1 || enemyCombatLevel > 100) return { ok: false, reasonCode: ReasonCodes.INVALID_ENEMY_LEVEL };
    const range = this.ranges.find((candidate) => enemyCombatLevel >= candidate.levelFrom && enemyCombatLevel <= candidate.levelTo);
    if (!range || range.status !== 'ASSIGNED' || !range.formula) return { ok: false, reasonCode: ReasonCodes.UNRESOLVED_ENEMY_LEVEL_FACTOR, range };
    const { base, levelOffset, slope } = range.formula;
    const value = base + (enemyCombatLevel - levelOffset) * slope;
    if (!Number.isFinite(value) || value <= 0) return { ok: false, reasonCode: ReasonCodes.UNRESOLVED_ENEMY_LEVEL_FACTOR, range };
    return { ok: true, value, range };
  }
}

export function roundXp(value) { return Math.round((value + Number.EPSILON) * 10) / 10; }

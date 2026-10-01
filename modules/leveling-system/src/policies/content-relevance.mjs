import { ReasonCodes } from '../contracts/reasons.mjs';

export class ContentRelevancePolicy {
  constructor(config) { this.config = config; }

  resolve(playerClassLevel, progressionContext) {
    if (this.config.status !== 'ASSIGNED' || !this.config.policy) return { ok: false, reasonCode: ReasonCodes.CONTENT_RELEVANCE_UNRESOLVED, status: 'UNRESOLVED' };
    if (!Number.isInteger(playerClassLevel) || playerClassLevel < 1 || playerClassLevel > 40) return { ok: false, reasonCode: ReasonCodes.CONTENT_RELEVANCE_UNRESOLVED, status: 'INVALID' };
    const min = progressionContext?.recommendedClassMin;
    const max = progressionContext?.recommendedClassMax;
    if (!Number.isInteger(min) || !Number.isInteger(max) || min > max) return { ok: false, reasonCode: ReasonCodes.CONTENT_RELEVANCE_UNRESOLVED, status: 'INVALID_CONTEXT' };
    const policy = this.config.policy;
    if (policy.kind !== 'LINEAR_REDUCTION_ABOVE_MAX') return { ok: false, reasonCode: ReasonCodes.CONTENT_RELEVANCE_UNRESOLVED, status: 'UNRESOLVED' };
    let multiplier;
    let status;
    if (playerClassLevel < min) {
      multiplier = policy.belowRangeMultiplier;
      status = 'BELOW_RANGE';
    } else if (playerClassLevel <= max) {
      multiplier = policy.withinRangeMultiplier;
      status = 'WITHIN_RANGE';
    } else {
      const levelsAbove = playerClassLevel - max;
      const reduction = Math.min(policy.maximumReduction, levelsAbove * policy.reductionPerLevelAboveMax);
      multiplier = Math.round((1 - reduction) * 1e12) / 1e12;
      status = 'ABOVE_RANGE';
    }
    if (!Number.isFinite(multiplier) || multiplier < 0) return { ok: false, reasonCode: ReasonCodes.CONTENT_RELEVANCE_UNRESOLVED, status: 'INVALID_POLICY' };
    return { ok: true, multiplier, status };
  }
}

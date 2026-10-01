import { ReasonCodes } from '../contracts/reasons.mjs';

export class EnemyXpCatalog {
  constructor(config) {
    this.balanceVersion = config.balanceVersion ?? null;
    this.profiles = config.profiles;
    this.byCategory = new Map();
    for (const profile of this.profiles) for (const category of profile.eventXpCategories) this.byCategory.set(category, profile);
  }

  resolveExact(xpCategory) {
    if (typeof xpCategory !== 'string' || !xpCategory) return { ok: false, reasonCode: ReasonCodes.XP_CATEGORY_MISSING };
    const profile = this.byCategory.get(xpCategory);
    if (!profile) return { ok: false, reasonCode: ReasonCodes.XP_CATEGORY_UNRESOLVED };
    if (!profile.enabled || profile.mappingStatus !== 'ASSIGNED') return { ok: false, reasonCode: ReasonCodes.BALANCE_PROFILE_DISABLED, profile };
    return { ok: true, profile };
  }
}

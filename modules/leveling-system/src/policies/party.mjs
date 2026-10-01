import { ReasonCodes } from '../contracts/reasons.mjs';

function distance(a, b) {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  const dz = a[2] - b[2];
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export class PartyModifierPolicy {
  constructor(config) { this.config = config; }

  resolve(size, isRaid) {
    if (!Number.isInteger(size)) return { ok: false, reasonCode: ReasonCodes.INVALID_PARTY_SIZE };
    const table = isRaid ? this.config.raid : this.config.normal;
    if (size < table.minSize || size > table.maxSize) return { ok: false, reasonCode: ReasonCodes.INVALID_PARTY_SIZE };
    const value = table.multipliers[String(size)];
    if (!Number.isFinite(value)) return { ok: false, reasonCode: ReasonCodes.INVALID_PARTY_SIZE };
    return { ok: true, value, size, isRaid };
  }
}

export class PartyEligibilityPolicy {
  constructor(config) { this.config = config; }

  resolve({ partySnapshot }) {
    if (!partySnapshot || partySnapshot.source !== 'SERVER' || !Array.isArray(partySnapshot.members)) return { ok: false, reasonCode: ReasonCodes.PARTY_CONTEXT_UNAVAILABLE };
    const isRaid = partySnapshot.isRaid === true;
    const center = partySnapshot.center;
    const eligible = partySnapshot.members.filter((member) => {
      if (!member || !Number.isInteger(member.id) || member.isOnline !== true) return false;
      if (!center || !Array.isArray(center.position) || center.position.length !== 3 || typeof center.cell !== 'string') return false;
      if (this.config.sameCellRequired && member.cellOrWorldDesc !== center.cell) return false;
      if (Array.isArray(member.pos) && distance(member.pos, center.position) > this.config.maxDistance) return false;
      if (!Array.isArray(member.pos)) return false;
      return true;
    });
    const unique = [...new Map(eligible.map((member) => [member.id, member])).values()];
    if (unique.length === 0) return { ok: false, reasonCode: ReasonCodes.NO_ELIGIBLE_RECIPIENT, eligibleMembers: unique };
    return { ok: true, eligibleMembers: unique, isRaid };
  }
}

export const LegacyPartyEligibilityAdapter = PartyEligibilityPolicy;

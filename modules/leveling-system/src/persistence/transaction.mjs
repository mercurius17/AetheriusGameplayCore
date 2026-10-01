import { ReasonCodes } from '../contracts/reasons.mjs';

export class ProgressionTransactionService {
  constructor({ repository, idempotencyStore, progression, fatiguePolicy, ledger }) {
    this.repository = repository;
    this.idempotencyStore = idempotencyStore;
    this.progression = progression;
    this.fatiguePolicy = fatiguePolicy;
    this.ledger = ledger;
  }

  apply({ eventId, playerId, requestedXp, nowMs, bypassFatigue = false, ledgerContext }) {
    const key = `${eventId}:${playerId}`;
    if (this.idempotencyStore.has(key)) return { ok: false, reasonCode: ReasonCodes.DUPLICATE_EVENT, duplicate: true };
    let claimed = false;
    try {
      const transaction = this.repository.transaction(playerId, (state) => {
        if (this.idempotencyStore.has(key)) return { commit: false, duplicate: true, reasonCode: ReasonCodes.DUPLICATE_EVENT };
        const oldClassLevel = state.classLevel;
        const result = this.fatiguePolicy.apply(state, requestedXp, nowMs, { bypass: bypassFatigue });
        const errors = this.progression.validateState(state);
        if (errors.length) return { commit: false, reasonCode: ReasonCodes.PERSISTENCE_FAILURE, errors };
        claimed = this.idempotencyStore.claim(key);
        if (!claimed) return { commit: false, duplicate: true, reasonCode: ReasonCodes.DUPLICATE_EVENT };
        return { ...result, oldClassLevel, newClassLevel: state.classLevel };
      });
      if (!transaction.ok) {
        if (transaction.result?.duplicate) return { ok: false, reasonCode: ReasonCodes.DUPLICATE_EVENT, duplicate: true };
        return { ok: false, reasonCode: ReasonCodes.PLAYER_NOT_FOUND };
      }
      if (transaction.result?.duplicate) return { ok: false, reasonCode: ReasonCodes.DUPLICATE_EVENT, duplicate: true };
      const state = transaction.state;
      const result = transaction.result;
      const ledgerEntry = this.ledger.append({ ...ledgerContext, playerId, oldClassLevel: result.oldClassLevel, newClassLevel: result.newClassLevel, xpAwarded: result.xpAwarded, reasonCode: result.fatigueCapReached ? ReasonCodes.FATIGUE_CAP_REACHED : null });
      return { ok: true, state, result, ledgerEntry };
    } catch (error) {
      if (claimed) this.idempotencyStore.release(key);
      return { ok: false, reasonCode: ReasonCodes.PERSISTENCE_FAILURE, error: error.message };
    }
  }
}

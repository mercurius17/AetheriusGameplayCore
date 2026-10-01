import { ReasonCodes } from '../contracts/reasons.mjs';

export class SkyMpPlayerProgressionRepository {
  constructor({ mp, progression }) { this.mp = mp; this.progression = progression; }

  get(playerId) {
    if (!this.mp || typeof this.mp.get !== 'function') return null;
    const raw = this.mp.get(playerId, 'playerClassData');
    if (!raw) return null;
    const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
    return this.progression.normalizeState(parsed);
  }

  save(state) {
    if (!this.mp || typeof this.mp.set !== 'function') throw new Error(ReasonCodes.PERSISTENCE_FAILURE);
    this.mp.set(state.playerId, 'playerClassData', JSON.stringify(state));
    return state;
  }

  transaction() {
    throw new Error('SkyMP mp.get/mp.set has no atomic transaction boundary; host adapter must provide one before production awards');
  }
}

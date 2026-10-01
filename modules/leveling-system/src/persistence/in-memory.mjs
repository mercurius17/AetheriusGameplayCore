export function clone(value) { return structuredClone(value); }

export class InMemoryProgressionRepository {
  constructor({ progression } = {}) { this.progression = progression; this.states = new Map(); }

  seed(state) { const normalized = this.progression ? this.progression.normalizeState(state) : clone(state); this.states.set(normalized.playerId, clone(normalized)); return clone(normalized); }
  get(playerId) { const value = this.states.get(playerId); return value ? clone(value) : null; }
  save(state) { this.states.set(state.playerId, clone(state)); return clone(state); }

  transaction(playerId, operation) {
    const current = this.get(playerId);
    if (!current) return { ok: false, error: new Error(`player ${playerId} not found`) };
    const working = clone(current);
    const result = operation(working);
    if (result?.commit === false) return result;
    this.states.set(playerId, clone(working));
    return { ok: true, result, state: clone(working) };
  }
}

export class InMemoryEventIdempotencyStore {
  constructor() { this.keys = new Set(); }
  has(key) { return this.keys.has(key); }
  claim(key) { if (this.keys.has(key)) return false; this.keys.add(key); return true; }
  release(key) { this.keys.delete(key); }
}

export class InMemoryEventPublisher {
  constructor() { this.events = []; }
  publish(event) { this.events.push(clone(event)); }
}

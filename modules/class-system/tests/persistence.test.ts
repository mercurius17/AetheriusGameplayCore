import { PlayerRepository } from '../server/storage/playerRepository';
import { configureClassRuntime } from '../server/runtime';

describe('Native persistence failure boundaries', () => {
  const repo = PlayerRepository.getInstance();
  beforeEach(() => repo.clearMemory());
  afterEach(() => { configureClassRuntime({ get: () => undefined, set: () => {}, getServerSettings: () => ({}) }); repo.clearMemory(); });

  test('a failed read does not create or persist a default character', () => {
    const set = jest.fn();
    configureClassRuntime({ get: () => { throw new Error('storage unavailable'); }, set, getServerSettings: () => ({}) });
    expect(() => repo.getPlayerState(501)).toThrow('persistence read failed');
    expect(set).not.toHaveBeenCalled();
  });

  test('a failed write does not publish the new state into the memory cache', () => {
    let fail = false;
    configureClassRuntime({ get: () => undefined, set: () => { if (fail) throw new Error('write failed'); }, getServerSettings: () => ({}) });
    const original = repo.getPlayerState(502);
    const changed = { ...original, currentXp: 900 };
    fail = true;
    expect(() => repo.savePlayerState(changed)).toThrow('write failed');
    expect(repo.getPlayerState(502).currentXp).toBe(original.currentXp);
  });

  test('invalid persisted JSON cannot silently reset progression', () => {
    const set = jest.fn();
    configureClassRuntime({ get: () => '{invalid', set, getServerSettings: () => ({}) });
    expect(() => repo.getPlayerState(503)).toThrow('persistence read failed');
    expect(set).not.toHaveBeenCalled();
  });

  test('a persisted state belonging to another actor is rejected without overwrite', () => {
    configureClassRuntime({ get: () => undefined, set: () => {}, getServerSettings: () => ({}) });
    const foreign = repo.getPlayerState(504);
    repo.clearMemory();
    const set = jest.fn();
    configureClassRuntime({ get: () => JSON.stringify(foreign), set, getServerSettings: () => ({}) });
    expect(() => repo.getPlayerState(505)).toThrow('persistence read failed');
    expect(set).not.toHaveBeenCalled();
  });

  test('an object with invalid persisted numbers fails closed', () => {
    configureClassRuntime({ get: () => undefined, set: () => {}, getServerSettings: () => ({}) });
    const valid = repo.getPlayerState(506);
    repo.clearMemory();
    const set = jest.fn();
    configureClassRuntime({ get: () => ({ ...valid, level: -1 }), set, getServerSettings: () => ({}) });
    expect(() => repo.getPlayerState(506)).toThrow('persistence read failed');
    expect(set).not.toHaveBeenCalled();
  });
});

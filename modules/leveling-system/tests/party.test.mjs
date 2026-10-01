import test from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ConfigLoader } from '../src/config/loader.mjs';
import { PartyModifierPolicy, PartyEligibilityPolicy } from '../src/policies/party.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const loaded = await new ConfigLoader(root).load();

test('party eligibility preserves audited same-cell, online, <=5000 policy', () => {
  const adapter = new PartyEligibilityPolicy(loaded.configs.partyXp.eligibility);
  const result = adapter.resolve({ killerId: 1, partySnapshot: { source: 'SERVER', isRaid: false, center: { position: [0, 0, 0], cell: 'Tamriel' }, members: [
    { id: 1, isOnline: true, pos: [0, 0, 0], cellOrWorldDesc: 'Tamriel' },
    { id: 2, isOnline: true, pos: [5000, 0, 0], cellOrWorldDesc: 'Tamriel' },
    { id: 3, isOnline: true, pos: [5001, 0, 0], cellOrWorldDesc: 'Tamriel' },
    { id: 4, isOnline: true, pos: [0, 0, 0], cellOrWorldDesc: 'OtherCell' },
    { id: 5, isOnline: false, pos: [0, 0, 0], cellOrWorldDesc: 'Tamriel' }
  ] } });
  assert.equal(result.ok, true);
  assert.deepEqual(result.eligibleMembers.map((member) => member.id), [1, 2]);
});

test('final-hit player has no eligibility exception', () => {
  const policy = new PartyEligibilityPolicy(loaded.configs.partyXp.eligibility);
  const result = policy.resolve({ killerId: 1, partySnapshot: { source: 'SERVER', isRaid: false, center: { position: [0, 0, 0], cell: 'Tamriel' }, members: [
    { id: 1, isOnline: true, pos: [5001, 0, 0], cellOrWorldDesc: 'Tamriel' },
    { id: 2, isOnline: true, pos: [0, 0, 0], cellOrWorldDesc: 'Tamriel' }
  ] } });
  assert.equal(result.ok, true);
  assert.deepEqual(result.eligibleMembers.map((member) => member.id), [2]);
});

test('party modifier never clamps an invalid size or invents 21+ behavior', () => {
  const policy = new PartyModifierPolicy(loaded.configs.partyXp);
  assert.equal(policy.resolve(8, false).value, 0.6);
  assert.equal(policy.resolve(8, true).value, 0.6);
  assert.equal(policy.resolve(20, true).value, 0.4);
  assert.equal(policy.resolve(21, true).reasonCode, 'INVALID_PARTY_SIZE');
  assert.equal(policy.resolve(9, false).reasonCode, 'INVALID_PARTY_SIZE');
});

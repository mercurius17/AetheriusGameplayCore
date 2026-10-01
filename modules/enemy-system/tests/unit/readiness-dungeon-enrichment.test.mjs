import test from 'node:test';
import assert from 'node:assert/strict';
import { buildReadinessReport } from '../../src/index.mjs';

test('readiness fails closed when a global dungeon lacks spawn references or resolved actor bases', () => {
  const report = buildReadinessReport({
    sourceLockOk: true,
    loadOrderValidation: { ok: true, issues: [] },
    enemyRegistry: { enemies: [] },
    dungeons: [{
      classification: 'MEDIUM',
      progressionContext: { valid: true },
      spawnRefs: [],
      contentEvidence: { unresolvedActorBases: 2 }
    }],
    integration: { inGameValidated: true }
  });
  assert.equal(report.readyForProduction, false);
  assert.deepEqual(report.errors.map((error) => error.code), [
    'DUNGEON_SPAWN_REFERENCES_MISSING',
    'DUNGEON_ACTOR_BASES_UNRESOLVED'
  ]);
});

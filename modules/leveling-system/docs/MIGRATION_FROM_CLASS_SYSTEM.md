# Migration from ClassSystemAetherius

## Findings

- `server/index.ts` registers `reportCombatKill` and forwards a client-shaped event to the
  legacy LevelingSystem.
- `client/combatEvents.ts` derives victim name, level and bestiary reward client-side.
- `server/levelingSystem.ts` calls fuzzy `findBestiaryEntry`, calculates Delta and awards XP.
- `shared/bestiaryData.ts` contains stale values and a fallback of 10 XP for unknown enemies.
- `server/partySystem.ts` owns proximity eligibility, while `shared/levelingMath.ts` owns party
  math; `server/storage/playerRepository.ts` persists with memory plus `mp.get/mp.set`.

## Future cutover

1. Subscribe the host to `aetherius.enemy.killed.v1`.
2. Source party state and player state server-side.
3. Route all XP through this module and disable the legacy `reportCombatKill` award path.
4. Keep class stage/perk handling behind `ClassProgressionPort`.
5. Provide a transactional persistence implementation before production enablement.

No patch is applied here. `ExperienceAuthorityCoordinator` now requires the host to enumerate and
disable every conflicting authority, then proves `AetheriusLevelingSystem` is the sole active XP
authority before any reward. The host callbacks are intentionally deferred to the definitive
integration project.

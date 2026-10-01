# Exclusive experience authority

`AetheriusLevelingSystem` is the maximum and sole authority for Class XP.

`ExperienceAuthorityCoordinator` defines the host integration seam:

1. enumerate every enabled XP authority;
2. disable each authority other than `AetheriusLevelingSystem`;
3. read the state again;
4. activate XP processing only when the LevelingSystem is the sole remaining authority.

The XP consumer checks exclusivity before validating or awarding an event. Missing discovery,
failure to disable a conflict, or more than one active authority produces
`EXPERIENCE_AUTHORITY_NOT_EXCLUSIVE` and awards no XP.

After authority validation, the consumer also requires a complete, non-empty enemy coverage audit
for the current load-order epoch. Missing, incomplete or stale coverage produces
`ENEMY_COVERAGE_INCOMPLETE` and awards no XP.

The coordinator is implemented but not connected to the host yet, as requested. The definitive
integration must bind the real legacy `reportCombatKill`/LevelingSystem switch and any additional
XP providers to `listAuthorities` and `disableAuthority`. The offline simulator binds a declared
simulation-only authority snapshot.

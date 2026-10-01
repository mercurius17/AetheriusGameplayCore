# ClassSystem integration

The legacy `server/levelingSystem.ts` currently owns XP calculation, level-up, attribute points
and stage perk unlocking. The new module owns XP and Class Level but publishes only versioned
`xp-awarded` and `level-changed` events through `ClassProgressionPort`.

Perks, skills, effects and class-specific unlocks remain outside this module. A future bridge can
consume `aetherius.leveling.level-changed.v1`. No direct ClassSystem change was made.

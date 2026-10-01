# Legacy Delta analysis

`sistema-classes/shared/levelingMath.ts` defines `calculateDeltaModifier(enemyLevel, playerLevel)`
as `EnemyLevel - PlayerLevel`, with historical bands from 0.0 through 1.5. The legacy combat
pipeline calls it from `calculateCombatXp` and applies it to regular enemies.

The new contract explicitly separates `EnemyCombatLevel` 1..100 from `PlayerClassLevel` 1..40.
The new pipeline therefore contains no Delta field, no Delta function, and no Delta-derived
content relevance. A future content policy compares the player level only with the configured
`recommendedClassMin..recommendedClassMax` context.

The legacy formula remains documented here solely for migration and compatibility analysis.

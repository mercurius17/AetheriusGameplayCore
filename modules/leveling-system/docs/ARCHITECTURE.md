# Architecture

> [!IMPORTANT]
> Esta pipeline documenta a baseline interna do módulo. Para ownership integrado, prevalece [a arquitetura canônica](../../../docs/architecture/AETHERIUS_GAMEPLAY_CORE_ARCHITECTURE.md): Leveling escreve `totalXp/characterLevel/fatigue`; Class consome milestones e não possui segundo saldo de XP.

```text
AetheriusEnemySystem
  -> MO2 winning-enemy snapshot / load-order epoch
  -> stable plugin + local FormID coverage index
  -> aetherius.enemy.killed.v1
  -> exclusive XP authority guard
  -> contract validation
  -> event idempotency
  -> enemy eligibility
  -> exact xpCategory catalog
  -> EnemyLevelScalingPolicy
  -> ProgressionContext validation
  -> ContentRelevancePolicy
  -> PartyEligibilityPort
  -> PartyModifierPolicy
  -> Combat XP
  -> FatiguePolicy
  -> atomic progression transaction
  -> level-up + attribute points
  -> ClassProgressionPort / output events / audit ledger
```

`AetheriusLevelingSystem` owns global XP, `characterLevel`, party reward policy, relevance, fatigue and progression. `AetheriusEnemySystem` owns enemy identity, combat level, eligibility, category,
spawn and progression context. `ClassSystemAetherius` remains responsible for perks, skills,
effects and class-specific unlocks.

The category contract accepts any exact configured lowercase snake_case key, allowing mod-added
enemy families without a code release. The JSON catalog remains closed at runtime: a syntactically
valid but unconfigured key is rejected. `EnemyCoverageAuditor` accounts for every supplied enemy,
and `ExperienceAuthorityCoordinator` blocks awards until sole XP authority is proven.

The implementation is dependency-free Node ESM, matching the standalone Enemy System's current
runtime style while keeping a host adapter seam for the existing TypeScript/SkyMP stack.

# Exclusive experience authority

Current architecture: [AetheriusGameplayCore canonical architecture](../../../docs/architecture/AETHERIUS_GAMEPLAY_CORE_ARCHITECTURE.md).

`AetheriusLevelingSystem` is the sole writer of character `totalXp`, `characterLevel` and fatigue. Class consumes `CharacterLevelChanged`/the committed progression state for milestones; it must not maintain a second XP balance.

Production award flow:

```text
NativeDeathPort
  -> Enemy validates spawn/generation/classification
  -> EnemyDefeated
  -> Leveling computes RewardPlan
  -> PostgreSQL transaction
       xp_ledger
       progression
       fatigue
       outbox
  -> commit
  -> CharacterLevelChanged / XpAwarded
```

`ExperienceAuthorityCoordinator` remains a migration/fencing mechanism: it must prove that legacy or competing XP writers are disabled before `xp.mode=active`. It does **not** authenticate a kill and must not convert client kill reports into authoritative deaths.

Activation therefore requires both:

1. exclusive Leveling write ownership; and
2. a real `NativeDeathPort` plus durable PostgreSQL ledger/transaction semantics.

Missing death proof, duplicate writers, incomplete enemy coverage, stale catalog epoch or persistence failure keeps awards off/shadow with an explicit reason.

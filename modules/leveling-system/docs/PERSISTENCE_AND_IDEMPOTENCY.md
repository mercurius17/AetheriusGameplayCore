# Persistence and idempotency

`ProgressionTransactionService` claims `${eventId}:${playerId}` and applies XP, level-ups and
attribute points inside the repository transaction boundary. Replays return `DUPLICATE_EVENT` and
do not mutate state.

The in-memory repository is deterministic test infrastructure. `SkyMpPlayerProgressionRepository`
adapts the existing `playerClassData` property but intentionally refuses a transaction because
plain `mp.get/mp.set` does not prove atomic compare-and-save semantics. A production host must
provide a repository transaction/CAS boundary and durable idempotency storage before readiness
can become `READY`.

The audit ledger stores source event, player, enemy identity/category, balance profile, factor,
context, party, XP before/after fatigue, level transition, reason code and config version.

# User review required

These items remain intentionally unresolved. Approved XP, category, universal-coverage and
single-authority decisions are recorded in `docs/USER_APPROVED_XP_POLICY.md` and implemented as
configuration or integration mechanisms.

## PERSISTENCE-001 - Atomic transaction boundary

- Module: `ProgressionTransactionService` and SkyMP adapter.
- Missing decision: durable repository/CAS/transaction implementation for `playerClassData` and
  processed event keys.
- Available data: legacy repository uses memory plus `mp.get/mp.set`.
- Fail-closed behavior: the adapter refuses production transaction use.
- Human input: approved persistence primitive and recovery semantics.

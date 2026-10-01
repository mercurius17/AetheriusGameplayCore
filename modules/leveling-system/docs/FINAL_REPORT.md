# Final report

## 1. Audited scope

The workspace, legacy ClassSystem leveling/bestiary/party/storage/hooks, local AetheriusEnemySystem
contracts and reports, and local SkyMP/Skyrim Platform death/respawn APIs were audited. houseCARL was
queried read-only for the active MO2 profile; no data-layer change was needed.

## 2. Sources and commits

The locked fork, upstream and ClassSystem commits are recorded in `docs/SOURCE_LOCK.md`, alongside
the local paths and their revision limitations.

## 3. Implemented

The new module contains data-driven JSON configuration, JSON Schemas, cross-file validators,
exact extensible XP catalog, piecewise scaling through level 100, approved content relevance, party/raid math, fatigue,
progression transactions, idempotency, audit ledger, read model, output events, simulator and
tests. It also includes load-order-independent enemy identity, complete-coverage auditing and an
exclusive XP authority coordinator. Perks and external systems remain untouched.

## 4. XP resolution

Exact `xpCategory` resolves a configured profile. Regular XP is
`BaseXP * EnemyLevelFactor * ContentRelevance * PartyModifier`, then fatigue and progression.
Fixed bosses use exact `FixedXP` and bypass enemy scaling, content relevance, party/raid reduction
and fatigue.

## 5. Configuration and future rebalance

All values are in `config/`, with provenance and schemas. A rebalance requires validator/tests,
provenance review, simulator checks and a new config version. Unknown values never become defaults.

## 6. Integrations

The executable bridge subscribes to `aetherius.enemy.killed.v1`, validates both repository
contracts, derives the complete coverage audit from `EnemyRegistry`, leaves discovery authority
with MO2 and EnemySystem, emits
versioned progression events, and leaves class perks/skills/effects with ClassSystem.

Party eligibility is the approved online/same-cell/<=5000 policy with no damage requirement;
fatigue is level 15+, floor 20%, 06:00 Brasília;
idempotency is `${eventId}:${playerId}` with a transaction seam and ledger.

## 7. Tests

The current suite includes 44 tests covering identity, mod categories, coverage, authority and the
live-shaped Enemy System bridge.
`docs/TEST_REPORT.md` lists the covered scenarios. Production
balance configuration is `READY`; production readiness remains blocked until durable transaction
semantics are bound to the host.

## 8. Limitations and patches

Durable transaction semantics remain in `USER_REVIEW_REQUIRED.md`. Ice Wraith and Thalmor are
classified as MEDIUM and integrated with the Enemy System. Definitive SkyMP host bindings remain
deferred.

## 9. Integrity proof

This integration update intentionally edits both Aetherius repositories. No Skyrim plugin or load
order was changed. See `docs/WORKSPACE_INTEGRITY.md`.

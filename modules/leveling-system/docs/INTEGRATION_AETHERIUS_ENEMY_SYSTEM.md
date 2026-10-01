# AetheriusEnemySystem integration

Compatibility is verified directly against the sibling
[`mercurius17/AetheriusEnemySystem`](https://github.com/mercurius17/AetheriusEnemySystem) checkout
by `npm run verify:enemy-system`.

## Executable boundary

`src/integration/aetherius-enemy-system.mjs` now provides the concrete, dependency-free seam between
the repositories:

- `AetheriusEnemySystemBridge` subscribes to `aetherius.enemy.killed.v1` on the Enemy System
  `EventHub` and routes accepted events to `XpAwardService`;
- both projects validate every event before XP calculation;
- `partySnapshotProvider(event)` is the host-owned callback that resolves the authoritative party
  snapshot at death time;
- `AetheriusEnemySystemCoverageAdapter` converts `EnemyRegistry.enemies` into the Leveling coverage
  audit and binds that audit to the current MO2 epoch;
- `connectAetheriusEnemySystem` wires the event subscription and live coverage gate in one step and
  restores the previous gate when disconnected;
- `auditAetheriusEnemySystemContract` compares contract version, required exports, event name and XP
  category negotiation without importing private SkyMP symbols;
- `createAetheriusEnemySystemXpContract` derives the active category/family mapping from enabled
  JSON profiles and can be injected into `EnemyScanner` before discovery;
- `npm run verify:enemy-system` checks the sibling repository directly.

The bridge is intentionally structural rather than an npm dependency. Both modules can remain
independently versioned and the definitive host composition supplies the instances.

```js
const xpService = new XpAwardService({
  configResult,
  repository,
  idempotencyStore,
  experienceAuthority
});

const xpCategoryContract = createAetheriusEnemySystemXpContract({ catalog: xpService.catalog });
const enemyRegistry = new enemySystemApi.EnemyScanner({
  xpCategoryContract,
  winningOverrideResolver
}).scan(enemyRecords, { encounterProfiles });

const integration = connectAetheriusEnemySystem({
  enemySystemApi,
  eventHub,
  xpService,
  readRegistry: () => enemyRegistry,
  readEpoch: () => currentMo2Epoch,
  partySnapshotProvider: (event) => partyHost.snapshotForDeath(event)
});
```

## Shared event contract

The Enemy System `DeathBridge` publishes:

- `eventId`, `occurredAt`, `victimId` and `killerId`;
- an `EnemyDescriptorV1` with exact `xpCategory`, `combatLevel` 1..100 and canonical provenance;
- a `ProgressionContextV1` with the recommended Class Level range;
- optional contributors, which do not affect party eligibility.

It does not publish base XP, final XP, Delta, party, fatigue, relevance or enemy-level factors.
Those fields remain owned and calculated by the Leveling System.

`killerId: 0` means “no attributable killer” in the Enemy System. The Leveling System no longer
rejects that value by itself: if the host supplies a valid server-owned party snapshot, all eligible
members receive XP under the normal rules. Without a valid snapshot, the event remains fail-closed.

## Coverage and identity

The adapter consumes the full Enemy System registry, not only XP-eligible actors. Quest, summon-only
and unmanaged unique/scripted actors become explicit exclusions; unresolved families and categories
remain visible as `UNASSIGNED`. The coverage gate opens only when the audit is complete, non-empty
and belongs to the current MO2 epoch.

Both projects use `plugin filename + local FormID` as persistent identity. Runtime IDs are accepted
only at the host edge and are never persisted, so a reordered load order does not change an enemy's
identity.

## Current compatibility result

The contract version, event name, required exports and all 52 enabled categories are compatible.
The Enemy System validates exact lowercase `snake_case` keys and consumes the Leveling-generated
catalog instead of maintaining a closed enum. This includes Cultist, the Soul Cairn families,
Wisp/Spriggan/Gargoyle, Ash Guardian and mod-added families.

Ice Wraith and Thalmor are included as exact MEDIUM categories following the explicit 2026-09-12
decision. `ENEMY_SYSTEM_CATEGORY_COVERAGE_PARTIAL` is emitted only if a future default category and
the active Leveling catalog diverge.

## Production host responsibilities

The future integration project must provide:

- the actual `EventHub`, registry and current MO2 epoch;
- a synchronous, server-authoritative party snapshot for each death event;
- durable transaction/CAS semantics for player XP and idempotency keys;
- discovery and disabling of every competing XP authority;
- lifecycle ordering so a death is marked once before the event is delivered;
- refreshed registry and coverage audit whenever the MO2 epoch changes.

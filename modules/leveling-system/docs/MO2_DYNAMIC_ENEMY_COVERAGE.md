# Dynamic MO2 enemy coverage

## Contract

MO2 is the authoritative source of the active plugin set and winning overrides. The definitive
integration supplies a fresh winner snapshot to `LoadOrderIndependentEnemyIndex` and refreshes it
whenever the load-order epoch changes.

Stable identity is:

`normalized-plugin-filename|LOCAL_FORM_ID`

Examples include `skyrim.esm|000123` and `examplecreatures.esp|000ABC`. Runtime FormIDs and plugin
indexes are ephemeral lookup data only and are never persisted. A reordered full plugin or ESL can
therefore receive a different runtime ID while retaining the same stable identity.

## Complete accounting

`EnemyCoverageAuditor` receives the enemy-only winner set produced by the EnemySystem and emits one
row per actor:

- `COVERED`: exact configured `xpCategory` resolves to an enabled JSON profile;
- `EXCLUDED`: explicitly excluded with a reason, such as a protected quest actor;
- `UNASSIGNED`: valid enemy identity but missing/disabled category;
- `INVALID`: malformed or duplicate identity.

The audit is complete only when there are zero `UNASSIGNED` and zero `INVALID` rows. The
`EnemyCoverageGate` additionally requires a non-empty audit whose epoch exactly matches the current
MO2/EnemySystem epoch. A load-order change therefore makes the old audit stale and blocks XP until
the winner snapshot is rebuilt. There is no name matching and no default XP. Mod categories use
the same lowercase snake_case grammar and are added to `enemy-base-xp.json`, not to application
source code.

## Live evidence, not configuration

houseCARL read the current MO2 winner layer on 2026-09-11: 503 enabled mods, 363 active plugins and
11,558 winning `NPC_` records at epoch `e2-8fae83455b0b4491`. This count includes non-enemy NPCs and
is diagnostic evidence only. None of these counts, plugin positions or the epoch is embedded in
runtime configuration.

No MO2 file, plugin or load order was changed.

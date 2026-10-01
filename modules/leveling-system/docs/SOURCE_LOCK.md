# Source lock

Consulted initially on 2026-09-10 and refreshed on 2026-09-12, `America/Sao_Paulo`. All
the original source revisions remain recorded below. The later integration update intentionally
modified both Aetherius repositories while preserving the external SkyMP and legacy sources.

## Local workspace sources

| Source | Revision state | Paths consulted | Purpose |
|---|---|---|---|
| `AetheriusEnemySystem/` | integration base `b33be5185cc0f32f79250219b314a11cf6a05614`; updated in the paired repository | `src/contracts/types.mjs`, `src/contracts/factories.mjs`, `src/events/event-hub.mjs`, `src/enemies/registry.mjs`, `src/adapters/skymp-adapter.mjs`, `src/leveling-integration/bridge.mjs`, `docs/ARCHITECTURE.md`, `docs/INTEGRATION_CLASS_SYSTEM.md`, `docs/SKYMP_RUNTIME_INTEGRATION.md` | current EnemySystem contract, registry, death event, runtime lifecycle and executable integration boundary |
| `sistema-classes/` | local directory; no Git metadata found | `shared/levelingMath.ts`, `shared/bestiaryData.ts`, `shared/types.ts`, `server/levelingSystem.ts`, `server/partySystem.ts`, `server/raidSystem.ts`, `server/storage/playerRepository.ts`, `server/index.ts`, `client/combatEvents.ts`, `server/classSystem.ts` | legacy behavior and migration audit |
| `skymp-main/` | local directory; no Git metadata found | `skyrim-platform` event definitions, `skymp5-server` death/respawn sources and property docs | host event and persistence capability audit |

## Locked external references recorded by the local Enemy System audit

- `https://github.com/mercurius17/skymp`, branch `main`, commit
  `a5ceec7ab58ec3bbe5d92da3974fdda894186253`; selected death, respawn, actor and runtime-ID paths.
- `https://github.com/skyrim-multiplayer/skymp`, branch `main`, commit
  `f926944b18e3aed4bc3864ce668626c05ec2545f`; corresponding upstream paths and tests.
- `https://github.com/mercurius17/ClassSystemAetherius`, branch `main`, commit
  `c9d811f10524c27648db552f6185433df917f67d`; legacy leveling, bestiary, party and storage paths.

The commit metadata above is preserved from `AetheriusEnemySystem/docs/SOURCE_LOCK.md` and was
used as reference provenance; the SkyMP and legacy source repositories were not edited or pushed.

## Balance source

The Google Sheet URL named by the PDF was attempted read-only, but the current sheet could not be
opened in the available browser source. The user subsequently confirmed the supplied PDF as the
primary official source. Future sheet values require explicit approval before replacing it.

## houseCARL context

Read-only load-order status refreshed on 2026-09-12: profile
`AETHERIUS - GRAFICO - QUALIDADE`, instância local do MO2, 514 enabled mods and 381 active
plugins, epoch `e2-de29c6df8a4a64e2`. No record, asset, plugin or load-order write was required.

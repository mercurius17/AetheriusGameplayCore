# Bestiary migration

The legacy source is `sistema-classes/shared/bestiaryData.ts`. The current catalog is the PDF
snapshot in `config/enemy-base-xp.json`, resolved only by exact EnemySystem category keys.

## Known updates

| Category | Legacy | Current | Status |
|---|---:|---:|---|
| Vampire | 16 | 30 | UPDATED |
| Skeleton | 8 | 10 | UPDATED |
| Ghost | 14 | 20 | UPDATED |
| Falmer | 18 | 20 | UPDATED |
| Ash Spawn | 20 | 18 | UPDATED |
| Giant | 25 | 20 | UPDATED |
| Troll | 20 | 16 | UPDATED |
| Hagraven | 24 | 21 | UPDATED |
| Bandit, Riekling, Silver Hand, Reaver, Forsworn, Warlock, Draugr, Chaurus, Lurker, Seeker, animals, Dwemer, Daedra | equal | equal | MATCH |
| Dragon Priest | fixed 500 | fixed 500 | MATCH |
| Dragon | fixed 1000 | fixed 1000 | MATCH |
| Thalmor | 18 | 18 | RESTORED_BY_USER_DECISION |

## User-approved new mappings

`Cultist`, `Corrupted Shade`, `Boneman`, `Mistman`, `Wrathman`, `Chaurus Hunter`, `Spriggan`,
`Wispmother`, `Wisp`, `Gargoyle`, and `Ash Guardian` now have exact future contract keys and retain
their individual PDF XP values. Difficulty/equivalence metadata follows the 2026-09-11 user
decision. No matching by visible name is allowed.

`Ice Wraith` retains its PDF base XP 14 and is assigned to `ice_wraith` as MEDIUM. `Thalmor` restores
the documented legacy base XP 18 and is assigned to `thalmor` as MEDIUM. Both classifications were
approved explicitly on 2026-09-12 and are represented without a name-based fallback.

`Ghost / Phantom` maps to `ghost`; `Warlock / Necromancer` maps to `warlock`; Cultist remains its
own exact `cultist` key while carrying a Warlock-equivalence classification. These decisions are
provenance-visible in the JSON.

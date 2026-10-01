# Balance source of truth

## Authority order

1. Explicit non-negotiable rules and values in the supplied PDF.
2. User-approved decisions recorded in `docs/USER_APPROVED_XP_POLICY.md` for matters left open by
   the PDF.
3. Current `Sistema de Leveling` sheet revision only after explicit approval to replace the PDF.
4. Audited EnemySystem V1 contract for exact category keys.
5. Local workspace sources and legacy ClassSystem only as behavior evidence.

The PDF is confirmed as the primary official source. A future sheet revision cannot silently
replace it; replacement requires an explicit approval and a new balance version.

## Materialized values

- `config/enemy-base-xp.json`: every snapshot entry from PDF pages 10-11.
- `config/level-progression.json`: all 39 transitions and total `1,848,000`.
- `config/enemy-level-scaling.json`: approved affine ranges for 1..20, 21..40 and 41..100.
- `config/party-xp.json`: exact normal and raid tables.
- `config/fatigue.json`: level 15+, floor 20%, reset 06:00 Brasília.
- `config/content-relevance.json`: 100% below/inside range and 5% loss per level above, capped at
  90% reduction.
- `config/enemy-coverage-policy.json`: MO2 winner discovery, plugin-local stable identity,
  load-order refresh and complete vanilla/mod enemy accounting.

Legacy values are migration evidence only. They are not copied into the production catalog.

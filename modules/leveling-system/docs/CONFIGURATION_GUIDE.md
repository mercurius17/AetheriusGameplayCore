# Configuration guide

All production values live in `config/` and are validated on load. JSON Schema files document the
shape; `src/config/validator.mjs` also enforces cross-entry invariants such as contiguous levels,
unique categories and exact totals.

- `enemy-base-xp.json`: exact category-to-profile mappings; set `mappingStatus: UNRESOLVED` and
  `enabled: false` until a contract key is proven.
- `level-progression.json`: 39 transitions, cumulative totals, cap and attribute points.
- `enemy-level-scaling.json`: piecewise formulas; an unresolved range must have `formula: null`.
- `party-xp.json`: normal/raid table and audited eligibility adapter settings.
- `fatigue.json`: activation level, 20% floor cap and IANA reset timezone.
- `content-relevance.json`: approved linear reduction above the recommended maximum, including its
  configurable rate and maximum reduction.
- `enemy-coverage-policy.json`: MO2 winner authority, plugin-local identity, mod coverage and
  fail-closed rules for unassigned enemies.

`enemy-base-xp.json` remains the only runtime source for every enemy `baseXp` and `fixedXp`. Edit
those values in JSON; do not duplicate them in business code.

New mod enemies are supported by adding an exact lowercase snake_case `eventXpCategories` entry to
an enabled profile, or by adding a new profile with an explicit `baseXp`. No application-code enum
needs to be changed. A coverage audit must still prove that every discovered enemy is covered or
explicitly excluded.

Changing a balance value requires updating provenance, running `node tools/verify.mjs`, running all
tests, reviewing the ledger semantics in the simulator, and recording the decision in the source
of truth document. Never add a default for an unknown value.

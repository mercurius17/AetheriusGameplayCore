# User-approved XP policy

Approved on 2026-09-10 and extended on 2026-09-11 and 2026-09-12. The supplied PDF remains the primary and official balance source. These
decisions extend or resolve points that the PDF intentionally left for human review.

## Enemy level scaling

- Levels 1..20: `1 + (EnemyCombatLevel - 1) * 0.20`.
- Levels 21..40: `4.80 + (EnemyCombatLevel - 20) * 0.05`.
- Levels 41..100: second softcap, `5.80 + (EnemyCombatLevel - 40) * 0.02`.

## Content relevance

- Below the recommended class range: 100% XP.
- Inside the recommended class range: 100% XP.
- Above the recommended maximum: subtract 5% per excess class level.
- Maximum reduction: 90%; the multiplier floor is therefore 10%.
- Final XP continues to use the centralized one-decimal rounding policy.

## Fixed-XP bosses

Every profile whose `awardMode` is `FIXED`, including Dragon Priest and Dragon, awards its exact
`fixedXp` value to every eligible recipient. Enemy-level scaling, content relevance, party/raid
modifiers and fatigue are bypassed. Eligibility, idempotency, level progression, attribute points
and the class-level cap still apply.

## Party eligibility and participation

Every recipient is evaluated by the same rules, including the player credited with the final hit:

- online;
- same cell/area as the server-owned party center;
- Euclidean distance at most 5,000 Skyrim units.

Disconnected, cross-cell and out-of-range members are excluded. Damage participation is not
required and contributor data does not change eligibility or divide XP.

## Configuration authority

The PDF is the primary official source. Base and fixed XP values remain editable exclusively in
`config/enemy-base-xp.json`; no catalog XP value is duplicated in business code.

## Enemy classifications

- Cultist is Warlock-equivalent.
- Corrupted Shade, Boneman, Mistman and Wrathman are HARD Draugr-equivalent enemies.
- Chaurus, Chaurus Hunter and Falmer are MEDIUM.
- Wisp, Wispmother and Spriggan are MEDIUM, equivalent to strong animals such as Troll and Bear.
- Ash Guardian and Gargoyle are MEDIUM.
- Ice Wraith is MEDIUM and retains its PDF base XP 14.
- Thalmor is MEDIUM; its documented legacy base XP 18 is restored by the explicit 2026-09-12 user
  decision because the primary PDF snapshot does not contain a current Thalmor row.

These classifications do not overwrite each creature's individual PDF `baseXp` value.

## Universal enemy coverage

Every vanilla or mod-added enemy must appear in the coverage audit as `COVERED`, `EXCLUDED`,
`UNASSIGNED` or `INVALID`; no discovered enemy may disappear from accounting. MO2's resolved winner
snapshot is authoritative. Persistent identity is normalized plugin filename plus local FormID,
never a load-order slot or runtime FormID. Exact mod categories can be added through JSON without
changing application code; unknown categories receive no invented XP and remain reportable.

## Exclusive XP authority

At production activation, `AetheriusLevelingSystem` must be the only enabled experience authority.
The host integration must enumerate and disable every competing XP system, then verify exclusivity.
XP processing fails closed when exclusive authority cannot be proven.

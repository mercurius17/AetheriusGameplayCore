# XP calculation pipeline

For regular enemies:

`BaseXP * EnemyLevelFactor * ContentRelevance * PartyModifier`, followed by fatigue and the
atomic progression transaction.

For Dragon Priest and Dragon:

`FixedXP`, awarded independently to every eligible member. Enemy scaling, content relevance,
party/raid reduction and fatigue are bypassed for every `FIXED` profile.

The level factor has three configured ranges: +20% through level 20, +5% through level 40 and the
second +2% softcap through level 100. Content relevance remains 100% below/inside the recommended
range, then loses 5% per excess class level to a maximum reduction of 90%.

An unassigned context is rejected with `UNASSIGNED_PROGRESSION_CONTEXT`; a missing exact catalog
mapping is rejected without a fallback.

The centralized rounding policy rounds final XP to one decimal place. No client field is used as
authority for killer, combat level, category, party, context or XP.

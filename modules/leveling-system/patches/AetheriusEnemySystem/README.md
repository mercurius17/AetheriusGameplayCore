# AetheriusEnemySystem integration changes

The sibling AetheriusEnemySystem repository now implements the required boundary:

- emit the newly approved exact keys `cultist`, `corrupted_shade`, `boneman`, `mistman`,
  `wrathman`, `chaurus_hunter`, `spriggan`, `wispmother`, `wisp`, `gargoyle` and `ash_guardian`;
- permit additional exact lowercase snake_case categories configured for mod-added enemies instead
  of maintaining a closed application-code enum;
- accept an injected category/family contract generated from the Leveling JSON;
- retain canonical plugin + local FormID identity while treating runtime FormIDs as ephemeral;
- refresh runtime mappings whenever the MO2/load-order epoch changes.

The definitive host still owns the live winning-record snapshot, epoch refresh and construction
order. No source patch is duplicated here; the repositories communicate through exported APIs.

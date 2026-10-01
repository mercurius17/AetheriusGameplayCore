# Party XP policy

`config/party-xp.json` is authoritative for modifiers. Normal groups use sizes 1..8; raids use
8..20. A size outside the table is `INVALID_PARTY_SIZE`; it is never clamped.

Eligibility is separated from math through `PartyEligibilityPort`, implemented here as
`PartyEligibilityPolicy`. The approved policy is `isOnline`, same cell/world, and distance <= 5000
Skyrim units. The adapter requires a server-owned snapshot (`source: SERVER`) and never trusts
client-reported party size, position or eligibility. The final-hit player receives no exception.

Damage participation is not required. Contributors are preserved on the input event for audit only
and do not change eligibility or divide XP.

The normal and raid multiplier tables apply only to scaled enemies. Fixed-XP bosses bypass the
tables while retaining the same recipient eligibility rules.

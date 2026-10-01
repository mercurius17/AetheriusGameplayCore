# Test report

Executed with Node.js on 2026-09-12:

```text
node --test tests/**/*.test.mjs
44 passed, 0 failed
```

Coverage includes exact catalog values, mapping states, piecewise scaling through level 100,
content relevance and its 10% floor, progression totals and cap, 15-point level-ups, multi-level
awards, fatigue thresholds and reset, fixed-boss fatigue bypass, party eligibility, the absence of
a final-hit exception, normal/raid modifiers, fixed bosses, invalid context, missing killer, no
class, unknown category, invalid group sizes, replay idempotency, and output events.
Coverage also includes arbitrary configured mod categories, stable identities across load-order
slot changes, stale-epoch rejection, complete enemy accounting, exclusive XP authority and
fail-closed behavior when either integration proof is absent.
Dedicated integration coverage now also verifies the executable Enemy System event bridge,
cross-contract rejection, category compatibility reporting, registry-to-coverage conversion, and
`killerId: 0` awards when an authoritative eligible party snapshot exists.

The sibling repository check executes directly against the current AetheriusEnemySystem checkout.
Contract version 1, the death event name, required exports and all 52 enabled categories are
compatible; `npm run verify:enemy-system` reports `COMPATIBLE`.

The production balance configuration validator reports `READY`. Production activation remains
blocked separately until durable transactional persistence is supplied by the host.

# Receiz Scale Reasoning Invariants

Status: Product law for scale, performance, and release reasoning for `v97.5.0`.

Receiz scale is not legacy web-app scale. Receiz is a proof-native artifact system with deterministic primitives, sealed artifact truth, verified local truth, settlement state, ownership state, public proof routes, and deterministic first paint. Scaling Receiz means using those implemented truths directly and removing unnecessary weaker work beneath them.

This document exists so future work does not reason from outdated assumptions such as:

- every live surface needs a timer
- every rich chart needs fetched or accumulated state
- every old game/reward/reveal must remain active until the user opens it in the same session
- every route must rediscover truth from the database before painting
- every performance fix should reduce visible capability
- every proof, ownership, or settlement problem needs a new authority layer

Those assumptions are legacy-stack habits. They are lower authority than Receiz law and implemented Receiz primitives.

## Scale Law

Receiz scales by preserving the visible primitive and reducing the work beneath it.

Correct pattern:

```txt
implemented primitive stays visually and functionally complete
known stronger truth paints first
deterministic projection computes locally
verified additions append after paint
old settlement/reward/game state closes when truth is final
background work warms hidden paths only
```

Wrong pattern:

```txt
remove the visible primitive to make it lighter
replace deterministic math with fetched state
replace proof truth with cache truth
keep old active rows because the user did not open them immediately
poll or accumulate what the state machine can compute
invent a new authority because a shared primitive needs composition
```

If a surface feels heavy, the first question is not "what visible feature can we remove?"

The first question is:

```txt
what weaker rediscovery, timer, poller, broad scan, accumulated state, stale row, or wrong route is working beneath an already-known truth?
```

## Deterministic Math Is Not Weight

Deterministic chart data, Kai pulse projection, scoring windows, local proof projection, and state-machine motion are not fetched state and not accumulated state.

When the app has:

- current pulse
- seed
- base value
- market value
- score delta
- tier
- subject identity
- deterministic scoring law

then the series can be reconstructed from math.

Do not store, poll, fetch, or increment counters for data the deterministic state machine can compute. A chart can be advanced and visually rich while remaining light if it projects from deterministic inputs.

The v91 chart lesson:

```txt
Keep the exact LiveChart surface.
Keep range controls, tooltip, overlay dock, pulse rows, and depth.
Remove chart-local timers.
Reconstruct points from deterministic Kai pulse math.
```

The visible primitive is not the performance problem. Unnecessary timer/rebuild work beneath the primitive is the performance problem.

## Closeout Is Scale

Old game, reward, reveal, and tournament rows are not harmless when they remain active after truth is final.

They can:

- make a settled screen feel like it loads again
- flash a reveal that should be closed
- block a claim with stale "locked" state
- keep hydration selecting old active rows
- make a user think rewards were lost
- add pressure to first paint and live hydration

Correct pattern:

```txt
if slate/game/challenge/reveal truth is final, close or finalize stale active rows
if a reward was opened, mark it opened and keep it out of first-paint recovery
if a tournament is underfilled after finality, void/refund through the settlement primitive
if a sport has the shared entry primitive, its claim route must be sport-specific
```

The v91 closeout lesson:

```txt
FIFA and UFC entries cannot rely on baseball claim routes.
FIFA tournament reads must run the same closeout sweep as other Sports Main Events.
Expired Pack Derby challenges may settle by deadline even when attempts are unfinished.
Pack Derby challenge runs must reject receipts after the deadline.
```

Closing stale settlement truth is not cleanup theater. It is how the proof-native game surface remains snappy and continuous over long-term play.

## Rich Surfaces Can Be Light

Receiz primitives are allowed to be rich:

- live value charts
- event reels
- proof docks
- vault surfaces
- market panels
- Pack Derby gameplay
- ownership transfer panels
- public proof media
- settlement popovers

Richness is not the issue. The issue is whether the richness is driven by stronger known truth or by weaker repeated rediscovery.

Light rich surface:

```txt
deterministic projection
stable object identity
bounded local computation
already-known proof truth
hidden warming only
append-only verified enrichment
```

Heavy weak surface:

```txt
foreground DB scan
chart-local timer
unbounded owner-wide read
wrong sport route
client cache replacing proof truth
old active rows surviving final truth
surface remount after settled paint
```

## First Paint Remains The Scale Baseline

First paint is the scale baseline because it exposes whether the product trusts its own truth.

If the app already knows a proof object, value state, owner state, settlement state, media object, route shell, or closed-game state, it must use it immediately.

Scale work must not:

- move known proof appends behind idle
- make a settled surface wait for DB refresh
- remount a visible shell because richer transport arrives
- use signed-in/private enrichment to delay the same truthful shell signed-out users see
- treat verified local truth as stale mutable cache

The user-facing question is:

```txt
does this make the product feel more already-there?
```

If not, the scale change is suspect.

## Existing Primitive First

Before adding a new proof, verifier, issuer, route authority, signature layer, registry, session, or DB confirmation, identify the existing Receiz primitive that already carries the boundary.

Scale failures often start when code avoids composing the implemented primitive and creates a weaker side path.

Examples from the v90 to v91 arc:

- Sports card transfer must use the existing offline-transfer ownership append route.
- Public card, QR, and vault proof market depth must use the shared sport-aware market-depth loader.
- Settlement conformance must be its own gate, not an alias to economy conformance.
- Soccer/UFC entry claim must use the shared sport-specific entry route, not the baseball route.
- Pack Derby challenge settlement must follow the server deadline-or-attempts contract.

## Review Questions

Before approving scale or performance work, ask:

- What primitive is this surface carrying?
- What stronger truth does the app already know?
- What work is being removed beneath the primitive?
- Is any visible function, control, media, proof, ownership, settlement, or first paint being reduced?
- Is the data deterministic math, verified local truth, append truth, or fetched/accumulated state?
- Can old active rows outlive final truth?
- Does the route use the correct primitive for the sport/object/surface?
- Does this fix remove pressure without downgrading the visible primitive?

The right answer is not "make it simpler."

The right answer is:

```txt
make the existing primitive exact, deterministic, closed out, and already-there.
```

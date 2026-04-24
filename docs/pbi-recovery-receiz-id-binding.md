# PBI Recovery And Receiz ID Binding

Status: Canonical reference for `v70.0.0`
Release date: April 24, 2026

Receiz ID is the primary everyday login rail. PBI and keyfile proof remain recovery and interoperability rails that bind back into local identity instead of replacing it.

## Binding Rule

A recovered account must bind to the same local Receiz identity truth when PBI/keyfile proof verifies the identity root. Recovery may append verified account evidence, refresh server state, mint cookies, or restore sync, but it must not create a competing identity when the device already holds stronger local proof.

## Login Rail Split

- Receiz ID is the primary everyday entry path.
- Existing local Receiz ID accounts continue directly to the managed profile.
- Cold devices create a local Receiz ID and continue directly to the new managed profile.
- `/signin` is a pass-through route.
- PBI and keyfile proof restore identity when the everyday local rail is unavailable or needs recovery.
- Email and magic-link flows remain interoperability rails.

## Recovery Requirements

- Recovery must preserve verified local identity roots.
- A weaker session response must not erase a valid local Receiz ID, PBI root, or keyfile root.
- Recovery appends evidence into local verified history before it changes visible profile or wallet truth.
- Recovery may resync server state, but the server state must be additive or stronger before it can replace local visible truth.
- Recovery must return the user to the intended profile, wallet, market, verifier, or route context when route intent is known.

## Non-Regression Boundary

A change regresses this binding if it:

- treats PBI recovery as a separate identity from the local Receiz ID it verifies
- makes email or magic-link login the primary everyday rail
- drops verified local identity because a network session is stale, anonymous, or missing
- recovers to home when the original route intent is known
- rewrites append-only recovery history instead of appending stronger verified evidence

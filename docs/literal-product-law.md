# Literal Product Law

Status: Canonical reference from `v70.0.0`; carried forward for `v74.0.0`
Release date: April 24, 2026

Receiz release truth is literal. A product surface must tell the same story as the proof, local register, deterministic route state, and value-causality record that already exist.

## Core Law

> Identity is local. Proof is in the file. Verified truth is append-only. `/<username>` is canonical profile truth. Settlement and Reserve preserve funded causality. The network propagates and appends; it does not get to downgrade stronger proof already held by the device.

## Operating Rules

- A local Receiz ID is everyday identity, not a network permission slip.
- PBI, keyfile, email, and magic-link paths are recovery and interoperability rails.
- `/<username>` is the canonical profile surface.
- `/<username>?manage=1` is the same profile with owner powers layered on top.
- Owner controls may append private panels or controls, but they cannot redefine first-paint profile identity, showcase, media, or shell.
- File-backed proof remains authoritative for artifact truth.
- Verified local truth is append-only. Corrections append stronger truth; they do not mutate earlier proof.
- Settlement remains proof-native value.
- Reserve remains funded external-conversion value.
- Notes stay Reserve-only.
- Certificates and shares bridge live proof-native value into buyer-funded Reserve.
- The network may publish, mirror, sync, discover, mint cookies, recover, and append verified additions.
- The network must not downgrade stronger proof already held by the device.

## Non-Regression Boundary

A change regresses this law if it:

- turns `/signin` into a destination page instead of a pass-through route
- makes a cold device wait for network permission before creating a local Receiz ID when local creation is available
- renders `/<username>?manage=1` as a different profile truth than `/<username>`
- lets owner-only data rewrite public profile first paint
- treats proof already held by the device as provisional until the server repeats it
- lets stale runtime, stale service-worker, or stale session state dump the user to home instead of returning to the route they were on
- collapses funded Reserve and proof-native Settlement into a single causality-free value bucket
- lets live twin identity fall back to profile-picture identity when the per-user/per-twin image is unavailable

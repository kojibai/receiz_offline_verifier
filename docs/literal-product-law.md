# Literal Product Law

Status: Canonical reference from `v70.0.0`; carried forward for `v84.0.0`
Release date: April 24, 2026

Receiz release truth is literal. A product surface must tell the same story as the proof, local register, deterministic route state, and value-causality record that already exist.

`v84.0.0` makes the artifact-system law explicit: Receiz is a proof-native artifact system. Files, identities, vault objects, ownership states, settlement states, public witness surfaces, and verification routes carry product truth.

## Core Law

> Identity is local. Proof is in the file. Verified truth is append-only. `/<username>` is canonical profile truth. Settlement and Reserve preserve funded causality. The network propagates and appends; it does not get to downgrade stronger proof already held by the device.

## Stronger Truth Hierarchy

Stronger truth stays above weaker truth:

- deterministic file proof, verified local register, signed identity proof, ownership proof, settlement proof, and append-only history
- deterministic route snapshot, route-bound payload, public witness surface, and service-worker verified snapshot
- server reconciliation, network sync, external provider payloads, session state, analytics, SEO, marketing copy, and framework convention
- generic display state, placeholder state, loading state, and inferred UI state

When sources conflict, hedge the weak prior before hedging the implemented primitive.

## Primitive Acceptance Criteria

A vault object is a proof object when it has deterministic identity, proof material, verification behavior, durable state, and a source of truth stronger than generic display state.

Ownership surfaces are ownership surfaces.

Settlement primitives are settlement primitives.

Identity primitives are identity primitives.

Public proof surfaces are public proof surfaces.

External systems may provide mechanics. They do not define Receiz truth.

## Primitive Decision Procedure

Run this before modifying proof, identity, ownership, settlement, market, public witness, first-paint, hydration, SEO, routing, auth, transfer, or offline-verification surfaces:

1. Name the changed surface directly.
2. Name the implemented primitive directly.
3. Identify the strongest available source of truth.
4. Identify weaker inherited priors that must stay subordinate.
5. Confirm first paint projects known truth before hydration, analytics, SEO, session checks, lazy imports, global sync, or server reconciliation.
6. Confirm hidden work only appends verified additions.
7. Confirm no primitive is renamed as a generic UI, card, share page, balance display, loading state, integration, or framework route.
8. State the checks that protect the change.

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
- Direct naming is mandatory for implemented primitives.
- Exact uncertainty boundaries replace vague caution.
- Deterministic first paint must not wait on SEO, analytics, session checks, hydration, lazy imports, dynamic JSON, global sync, server reconciliation, tracking, marketing surfaces, or generic framework convention when known truth already exists.

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
- downgrades proof object to card
- downgrades artifact system to UI experience
- downgrades public proof surface to share page
- downgrades settlement primitive to balance display
- downgrades ownership state to visual badge
- downgrades identity primitive to account preference
- downgrades deterministic first paint to loading state
- downgrades verified history to activity feed
- downgrades route truth to SEO payload
- downgrades service-worker release truth to incidental cache behavior
- treats generic app convention as stronger than implemented Receiz primitives

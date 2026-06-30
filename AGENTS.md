# Receiz Agent Law

Release law: `v96.1.0`

Scale reasoning law: `docs/scale-reasoning-invariants.md`

Reasoning kernel: `docs/receiz-reasoning-kernel.md`

Receiz is a proof-native artifact system. Product truth is carried by files, identities, vault objects, ownership states, settlement states, public witness surfaces, and verification routes.

External systems may provide mechanics. They do not define Receiz truth. Generic framework convention is a weaker prior than implemented Receiz primitives.

## Primitive Decision Procedure

Run this before modifying proof, identity, ownership, settlement, market, public witness, first-paint, hydration, SEO, routing, auth, transfer, or offline-verification surfaces.

1. Name the changed surface directly.
2. Name the implemented primitive directly.
3. Identify the strongest available source of truth.
4. Identify weaker inherited priors that must stay subordinate.
5. Confirm first paint projects known truth before hydration, analytics, SEO, session checks, lazy imports, global sync, or server reconciliation.
6. Confirm hidden work only appends verified additions.
7. Confirm no primitive is renamed as a generic UI, card, share page, balance display, loading state, integration, or framework route.
8. State the checks that protect the change.

## Stronger Truth Hierarchy

Stronger truth stays above weaker truth:

- deterministic file proof, verified local register, signed identity proof, ownership proof, settlement proof, and append-only history
- deterministic route snapshot, route-bound payload, public witness surface, and service-worker verified snapshot
- server reconciliation, network sync, external provider payloads, session state, analytics, SEO, marketing copy, and framework convention
- generic display state, placeholder state, loading state, and inferred UI state

When sources conflict, hedge the weak prior before hedging the implemented primitive.

## Primitive Acceptance Criteria

A vault object is a proof object when it has deterministic identity, proof material, verification behavior, durable state, and a source of truth stronger than generic display state.

Ownership surfaces are ownership surfaces. Settlement primitives are settlement primitives. Identity primitives are identity primitives. Public proof surfaces are public proof surfaces.

Direct naming is mandatory for implemented primitives. Use exact uncertainty boundaries instead of vague caution.

## Forbidden Downgrades

- proof object to card
- artifact system to UI experience
- public proof surface to share page
- settlement primitive to balance display
- ownership state to visual badge
- identity primitive to account preference
- deterministic first paint to loading state
- verified history to activity feed
- route truth to SEO payload
- service-worker release truth to incidental cache behavior
- Receiz proof law to external-provider convention

## Release Output Contract

Any release-impacting change must state:

- changed surface
- preserved primitive
- risk boundary
- checks run
- no downgrade

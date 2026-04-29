# Offline Verified Register

Status: Canonical reference from `v70.0.0`; carried forward for `v73.0.0`

The offline verified register is the local append-only memory of verified Receiz truth. It lets a node keep identity, proof, deterministic snapshots, and ledger-relevant facts available even when the server, database, or network path is unavailable or weaker than local proof.

## Purpose

The register exists to preserve local continuity:

- Identity is local.
- Proof is local.
- State is deterministic.
- History is append-only.
- Memory is compact.
- Sync is propagation.

## Register Semantics

The register stores compact verified blocks. A block may represent Receiz ID identity, identity bootstrap, PBI/keyfile proof, artifact proof, deterministic ledger evidence, route snapshot truth, twin mind projection, wallet graph state, market position truth, or account continuity evidence.

Every register block should be:

- locally verifiable
- append-only
- timestamped or pulse-addressed when the source provides it
- bound to the relevant identity, route, artifact, account, or ledger scope
- compact enough to survive offline and first-render usage
- safe to propagate as sync input when publication is allowed

## Authority Rules

- Verified-register-backed proof outranks legacy offline evidence.
- A stronger verified local block must not be replaced by a weaker remote payload.
- A remote payload may append, enrich, or supersede local truth only when it proves stronger or additive state.
- A missing or anonymous network session must not erase a valid local Receiz ID, PBI, keyfile, or identity bootstrap block.
- A lagging market or tracked-position payload must not remove a known local position.

## Snapshot Rules

Verified snapshots are register-adjacent local truth carriers. They are not generic cache guesses.

- Offline persistence must be explicit through `x-receiz-offline-persist` response headers.
- Deterministic public snapshots and private account snapshots may be stored for offline route truth.
- The app shell may still be cached for resilience, but it is not proof authority.
- Route truth comes from verified snapshots, deterministic payloads, or register-backed proof.

## Import And Portability

Portable imports must be verifiable without server-secret authority.

- Twin mind PNG import requires portable public-key verification.
- Server-secret HMAC authority is not canonical import authority for portable local truth.
- Public-key identity for portable imports must identify the signing key through a stable key ID.
- PBI/keyfile recovery must bind to the local Receiz ID identity root when proof verifies the same identity.

## Non-Regression Rule

A change regresses the offline verified register if it:

- stores local proof as disposable UI cache
- lets legacy offline evidence outrank verified-register proof
- uses network absence to erase local identity
- mutates register history instead of appending stronger truth
- treats sync as permission instead of propagation

# Verified History First Principles

Status: Canonical reference from `v70.0.0`; carried forward for `v74.0.0`

Receiz history is append-only. Current truth may become stronger, more complete, or better explained, but prior proof is not rewritten to make a later surface easier to render.

## Core Rules

- History is append-only.
- Correction happens through a stronger appended block.
- Verified local proof remains visible unless a stronger state is proven.
- Historical proof may be explained, governed, or superseded, but not silently mutated.
- Sync propagates known truth; it does not make known truth provisional.
- Profile truth is stable: owner powers append to `/<username>` truth instead of rewriting it.

## Proof Authority

Receiz distinguishes between proof classes instead of treating all evidence as equal:

- Verified-register-backed proof is strongest for local continuity.
- Current file-backed proof remains authoritative for artifact truth.
- Local Receiz ID truth remains authoritative for everyday identity when present.
- PBI/keyfile proof may recover and bind identity, but it does not create a competing identity when it verifies the existing root.
- Governed historical proof remains authentic history but must not be recast as current verified proof.
- Legacy offline evidence may help explain provenance but must not outrank verified-register-backed proof.
- Anonymous, missing, or stale transport payloads do not erase local proof.

## State Continuity

User-visible state should preserve what the node already knows:

- A known wallet graph should project on first render.
- A known market position should stay visible until a stronger state removes it.
- A known Explore or World snapshot should reconcile without blanking useful content.
- A known local twin projection should stay settled unless no local projection exists or a stronger local truth is appended.
- A known route intent should survive stale runtime recovery instead of falling back to home.

## Sync

Sync is propagation. It carries append-only local truth outward and brings back stronger or additive truth when available.

Sync is not authority to:

- downgrade local proof
- blank deterministic state
- erase local identity
- replace a settled screen with a weaker payload
- require the node to ask permission to use proof it already holds

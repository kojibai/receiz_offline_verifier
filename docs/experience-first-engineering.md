# Experience-First Engineering

Status: Canonical reference from `v70.0.0`; carried forward for `v73.0.0`

Receiz engineering starts from the user's already-held truth. A surface that can render from local proof should render from local proof. A surface that already has deterministic state should not perform visible loading theater while it asks a weaker transport to repeat what the node already knows.

## Principle

Known local truth should move immediately.

Everything else must justify its existence.

This is not a preference for offline mode over online capability. It is an authority rule: the network can enrich, publish, discover, sync, append, and propagate, but it must not make settled local proof provisional.

## Experience Rules

- Prefer verified local proof over later weaker payloads.
- Prefer local Receiz ID truth over stale, missing, or anonymous session payloads.
- Prefer deterministic snapshots over placeholder frames.
- Prefer compact local memory over full-background hydration when the visible state is already settled.
- Keep expensive runtime work hidden until explicit intent requires it.
- Reconcile online enrichment into the view only when it proves a stronger or additive state.
- Preserve useful already-visible content while background data arrives.
- Never use spinners, skeletons, or "loading" copy to mask truth the node already holds.

## Authority Order

For user-visible trust surfaces, resolve truth in this order:

1. Current verified local proof.
2. Append-only local register truth.
3. Deterministic route or account snapshot.
4. Network/session enrichment that proves a stronger or additive state.
5. Empty/null while authoritative route resolution commits.

Generic cache entries, anonymous session payloads, stale market transport, and legacy offline evidence do not outrank verified local proof.

## Runtime Discipline

Background work may prefetch code, warm data, or prepare model paths. It must not visually redefine a screen that already appears settled.

- Hidden preparation stays hidden.
- Explicit user intent may promote a richer runtime.
- Late hydration may add truth, but it must not replace stronger local truth with a weaker state.
- First render should project durable local state when durable state already exists.

## Release Boundary

A change regresses this standard if it:

- asks the network to reconfirm proof before moving known local truth
- visibly reloads a settled screen because background hydration finished
- replaces a verified local block with a weaker remote payload
- hides local state behind a placeholder frame
- treats an unavailable session as permission to erase a valid local identity root
- turns a pass-through identity route into a destination that blocks local continuation

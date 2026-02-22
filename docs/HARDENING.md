# Hardening rules (must not regress)

These are the rules that preserve “proof lives in the file”.

## Must-haves
- Enforce exactly one `receiz.proof_bundle` chunk
- Decode must be deterministic and size-limited
- Artifact binding must be verified from bytes (fail if missing or mismatched)
- Canonical identity fields must be validated:
  - ts, slug, code, pulse, verifyPath
  - slug derived from ts
  - verifyPath derived from slug/code/pulse
- Optional link, if provided, must match embedded canonical path

## Offline-only
The verifier must not introduce:
- fetch / XHR
- WebSocket / EventSource
- sendBeacon
- remote script tags
# Receiz schemas

This directory contains JSON Schemas for verifier-visible payloads used in v21.

## Files
- `receiz-proof-bundle.schema.json`: proof bundle payload shape.
- `receiz-anchor-bundle.schema.json`: PNG anchor bundle shape.
- `receiz-bundle-envelope.schema.json`: `.receizbundle` container envelope shape.

## Notes
- Runtime invariants are stricter than schema shape checks.
- Canonical derivations (`slug <- ts`, `verifyPath <- slug/code/pulse`) are enforced in verifier code.
- Trailer payloads decode directly to proof bundle objects and therefore reuse the proof bundle schema.
- In `v21`, trusted verification requires valid `signatureV3`, effective anchor context, and real `g16:` Groth16 proof artifacts.
- Proof bundle schema includes `signatureV3` envelope fields for Receiz Signature v3 validation.
- Signature envelope semantics (including `signedAtMs`) and pinned-key pulse lifecycle policy (`activeFromPulse` / `retiredAtPulse`) are runtime checks and are not fully expressible in JSON Schema.

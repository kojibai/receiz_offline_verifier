# Receiz schemas

This directory contains JSON Schemas for verifier-visible payloads used in `v24`.

## Files
- `receiz-proof-bundle.schema.json`: proof bundle payload shape.
- `receiz-anchor-bundle.schema.json`: PNG anchor bundle shape.
- `receiz-bundle-envelope.schema.json`: `.receizbundle` container envelope shape.

## Notes
- Runtime invariants are stricter than schema shape checks.
- Canonical derivations (`slug <- ts`, `verifyPath <- slug/code/pulse`) are enforced in verifier code.
- Trailer payloads decode directly to proof bundle objects and therefore reuse the proof bundle schema.
- In `v24`, trusted verification requires valid `signatureV4`, effective anchor context, and real `g16:` Groth16 proof artifacts.
- Proof bundle schema keeps both `signatureV3` and `signatureV4` envelope shapes, but requires `signatureV4` to be present.
- Signature semantics (`signedAtMs`, key lifecycle policy, certificate chain checks) are runtime checks and are not fully expressible in JSON Schema.

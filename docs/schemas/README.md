# Receiz schemas

This directory contains JSON Schemas for verifier-visible payloads used in v18.

## Files
- `receiz-proof-bundle.schema.json`: proof bundle payload shape.
- `receiz-anchor-bundle.schema.json`: optional PNG anchor bundle shape.
- `receiz-bundle-envelope.schema.json`: `.receizbundle` container envelope shape.

## Notes
- Runtime invariants are stricter than schema shape checks.
- Canonical derivations (`slug <- ts`, `verifyPath <- slug/code/pulse`) are enforced in verifier code.
- Trailer payloads decode directly to proof bundle objects and therefore reuse the proof bundle schema.
- `groth16Proof` schema accepts both deterministic base64url proofs and real-mode `g16:<base64url(json)>` payloads.
- Proof bundle schema includes optional `signatureV3` envelope fields for Receiz Signature v3 validation.
- Signature timestamp skew and pinned-key lifecycle policy are runtime checks and are not fully expressible in JSON Schema.

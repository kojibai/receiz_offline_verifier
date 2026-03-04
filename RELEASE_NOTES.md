# Release Notes

## v21.0.0 (from v20.0.0)
Release date: 2026-03-04

`v21.0.0` is a verification-policy hardening release. It upgrades several previously warning-only or optional checks into strict verification requirements.

## Summary
- Signature v3 is now required for verified outcomes.
- Anchor context is now required for trusted verification.
- Groth16 proof artifacts are now required and must be real `g16:` payloads.
- Applied release marker update to `v21.0.0` in both published and mirrored entrypoints.

## What changed in v21

### 1) Signature v3 is mandatory
- Previous behavior allowed warning states for:
  - missing `signatureV3`
  - key-unavailable / policy-unavailable signature states
- New behavior treats both as hard failures.
- Verified outcome now requires:
  - valid `signatureV3` payload shape
  - signed payload hash match
  - key resolution by `kid`
  - Ed25519 signature verification
  - pulse lifecycle policy acceptance

### 2) Anchor context is required
- New behavior requires effective anchor context to produce a trusted verification result.
- Effective anchor is resolved from:
  - explicit `receiz_anchor_bundle`, or
  - derived anchor context from proof bundle fields.
- Missing anchor context now hard fails with explicit reason.

### 3) Groth16 policy is strict real-proof only
- Previous behavior accepted deterministic-style Groth16 artifacts and tolerated missing fields in legacy bundles.
- New behavior requires all Groth16 fields and enforces real-mode proof envelopes.
- Enforcement details:
  - `zkPoseidonHash`, `groth16Proof`, `groth16ProofDigest` are required
  - `groth16Proof` must be `g16:<base64url(json)>`
  - digest and public-signal alignment checks must pass
  - proof must verify via `snarkjs.groth16.verify`
- Non-`g16:` proofs now fail with explicit messaging.

### 4) Version marker update
- Footer release marker advanced from `v20.0.0` to `v21.0.0` in:
  - `site/index.html`
  - `apps/offline-verifier.html`

## Preserved from v20
- Carrier extraction/normalization for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical identity derivation and artifact-binding checks.
- Fail-closed verification semantics.

## Compatibility and deployment impact

### Runtime compatibility
- Still a static browser app.
- No new third-party network dependency introduced.

### Breaking policy impact
Artifacts that previously produced warning-only signature states may now fail verification.
Artifacts without anchor context may now fail verification.
Artifacts without real `g16:` Groth16 payloads may now fail verification.

### Assets required
Required:
- `/index.html`

Optional by deployment route:
- `/offline-verifier.html` (alternate route + footer download target)
- `/sw.js` (service worker warm/caching behavior)

## Migration checklist
- Ensure generated proof bundles include valid `signatureV3` envelopes and pinned-key-compatible `kid` values.
- Ensure anchor context is present (explicit anchor bundle or derivable proof-bundle anchor fields).
- Ensure Groth16 output is emitted as real `g16:` payload with matching digest/public signals.
- Update outward release/docs references to `v21.0.0`.
- Deploy updated `site/` artifacts.

## Security posture
The release strengthens fail-closed enforcement: verification now requires authorship evidence (signature), anchor context, and real Groth16 proof validation in addition to byte-level integrity checks.

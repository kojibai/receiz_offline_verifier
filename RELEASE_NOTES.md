# Release Notes

## v23.0.0 (from v22.0.0)
Release date: 2026-03-05

`v23.0.0` introduces trusted Signature v4 verification and updates trusted-signature policy to accept `signatureV3` or `signatureV4` for verified outcomes.

## Summary
- Added `signatureV4` verification with rooted device-certificate validation.
- Added Signature v4 root-key pin set with optional runtime override support.
- Updated trusted-signature decision logic to support dual-signature bundles safely.
- Advanced footer release marker from `v22.0.0` to `v23.0.0` in shipped entrypoints.

## What changed in v23

### 1) Signature v4 verification path
- New trusted signature envelope: `proofbundle.signatureV4`.
- Validation includes:
  - payload hash check against canonical bundle payload
  - root-key resolution by `cert.issuerKid`
  - pulse-based root-key lifecycle policy checks
  - device certificate ID derivation check
  - device certificate signature verification (root key -> cert)
  - certificate-window checks (`issuedAtMs <= signedAtMs <= expiresAtMs`)
  - final payload signature verification (device key -> bundle payload)

### 2) Trusted-signature policy update
- Verified outcome now requires at least one verified signature path (`signatureV3` or `signatureV4`).
- If any present signature path is invalid, verification fails (`Trusted signature invalid`).
- Unavailable signature paths are warning-only when another signature path verifies.
- If no signature path verifies, verification fails (`Trusted signature unavailable` or `Trusted signature missing`).

### 3) Key pinning model expansion
- Existing Signature v3 key pinning remains supported (`__RECEIZ_SIGNATURE_V3_PUBLIC_KEYS_PINNED__`).
- New Signature v4 root-key pin override is supported (`__RECEIZ_SIGNATURE_V4_ROOT_PUBLIC_KEYS_PINNED__`).

### 4) Version marker update
- Footer release marker advanced from `v22.0.0` to `v23.0.0` in:
  - `site/index.html`
  - `apps/offline-verifier.html`

## Preserved from v22
- Effective anchor context remains required (explicit or derivable).
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction/normalization for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical identity derivation and artifact-binding checks.
- Fail-closed verification semantics.

## Compatibility and deployment impact

### Runtime compatibility
- Still a static browser app.
- No new network dependency introduced.
- Requires WebCrypto Ed25519 support for trusted signature verification paths.

### Policy impact
- Signature policy behavior is expanded (not relaxed): a trusted signature is still required, but either v3 or v4 can satisfy it.
- Invalid present signatures continue to fail closed.

### Assets required
Required:
- `/index.html`

Optional by deployment route:
- `/offline-verifier.html` (alternate route + footer download target)
- `/sw.js` (service worker warm/caching behavior)

## Migration checklist
- Update outward release/docs references to `v23.0.0`.
- If you provide custom key pins, add/validate Signature v4 root-key pins where needed.
- Deploy updated `site/` artifacts.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.

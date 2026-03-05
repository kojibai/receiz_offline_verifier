# Release Notes

## v24.0.0 (from v23.0.0)
Release date: 2026-03-05

`v24.0.0` narrows trusted-signature acceptance to Signature v4 for verified outcomes and aligns release docs with the new fail-closed policy behavior.

## Summary
- Trusted-signature success now requires verified `signatureV4`.
- Added an additional pinned Signature v4 root key (`receiz.v4.prod.2026-03-02`) to shipped entrypoints.
- Updated trusted-signature failure semantics for missing/unavailable v4 paths.
- Advanced footer release marker from `v23.0.0` to `v24.0.0` in shipped entrypoints.

## What changed in v24

### 1) Trusted-signature policy narrowed to v4
- Verified outcome now requires a verified `signatureV4` path.
- `signatureV3` no longer satisfies trusted-signature requirements for a verified outcome.
- Signature v3 verification runtime is removed from active trusted-signature evaluation in shipped entrypoints.
- If present `signatureV4` is invalid, verification fails (`Trusted signature invalid`).
- If present `signatureV4` is unavailable, verification fails (`Trusted signature unavailable`).
- If `signatureV4` is missing, verification fails with:
  - `Trusted signature missing`
  - error detail `Trusted signature missing. Expected signatureV4.`

### 2) Signature v4 root-key pin set update
- Static Signature v4 root-key set now includes:
  - `receiz.v3.prod.2026-03-02`
  - `receiz.v4.prod.2026-03-02`
- Runtime override contract remains unchanged:
  - `__RECEIZ_SIGNATURE_V4_ROOT_PUBLIC_KEYS_PINNED__`
- Signature v3 key-pin override (`__RECEIZ_SIGNATURE_V3_PUBLIC_KEYS_PINNED__`) is not used by `v24` runtime.

### 3) Version marker update
- Footer release marker advanced from `v23.0.0` to `v24.0.0` in:
  - `site/index.html`
  - `apps/offline-verifier.html`

## Preserved from v23
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
- Bundles that only contain valid `signatureV3` no longer satisfy trusted-signature requirements in `v24`.
- Dual-signature bundles are evaluated for trusted-signature success through `signatureV4`.
- Invalid present `signatureV4` remains fail-closed.

### Assets required
Required:
- `/index.html`

Optional by deployment route:
- `/offline-verifier.html` (alternate route + footer download target)
- `/sw.js` (service worker warm/caching behavior)

## Migration checklist
- Update outward release/docs references to `v24.0.0`.
- Ensure producers emit valid `signatureV4` for artifacts intended to verify under `v24`.
- If you provide custom root pins, add/validate Signature v4 root-key entries.
- Deploy updated `site/` artifacts.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.

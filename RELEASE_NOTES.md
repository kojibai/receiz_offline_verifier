# Release Notes

## v18.0.0 (from v17.0.0)
Release date: 2026-03-02

`v18.0.0` adds offline authorship verification for proof bundles via Receiz Signature v3, while keeping the same fail-closed integrity contract and multi-carrier verification behavior from `v17`.

## Summary
- Added `signatureV3` verification using Ed25519 and canonical payload hash matching.
- Added pinned Signature v3 key handling with a default static key and optional host override.
- Added signature policy checks for `signedAtMs` and key lifecycle windows.
- Added explicit signature result states (`verified`, `invalid`, `missing`, `unavailable`) to verification checks.
- Advanced release marker to `v18.0.0`.

## What changed in v18

### 1) Receiz Signature v3 offline verification
- Verifier now parses an optional `bundle.signatureV3` payload and validates:
  - signature envelope shape (`version`, `alg`, `kid`, `sig`, `payloadHashSha256`, `signedAtMs`)
  - payload hash match against canonicalized signed payload
  - Ed25519 signature validity for the resolved key ID (`kid`)
  - `signedAtMs` policy (future-skew guard)
- Signed payload canonicalization excludes `signatureV3` and includes canonical proof-bundle fields (`kind`, `payloadVersion`, `ts`, `slug`, `code`, `verifyPath`, `kaiPulseEternal`, binding/proof digest fields, and related identity metadata).

### 2) Key pinning model
- Added static pinned Signature v3 key metadata in verifier runtime.
- Current built-in active key ID:
  - `receiz.v3.prod.2026-03-02`
- Host/runtime override is supported via:
  - `globalThis.__RECEIZ_SIGNATURE_V3_PUBLIC_KEYS_PINNED__`
- Pinned key metadata supports lifecycle policy fields (`activeFromMs`, `retiredAtMs`) used during signature timestamp validation.

### 3) Verification-result behavior for signature checks
- `Receiz Signature (v3) verified (<kid>)` -> success check.
- `Receiz Signature (v3) invalid` -> hard failure (verification fails).
- `Receiz Signature (v3) missing` -> warning only.
- `Receiz Signature (v3) unavailable` (for unknown/unpinned or policy-unavailable keys) -> warning only.

### 4) Release marker update
- Footer release marker updated to `v18.0.0` in published and mirrored verifier entrypoints.

## Preserved from v17
- Fail-closed verification semantics.
- Canonical identity validation:
  - `ts`, `slug`, `code`, `kaiPulseEternal`, `verifyPath`
- Canonical derivation checks:
  - `slug <- ts`
  - `verifyPath <- /v/<slug>/<CODE>/<PULSE>`
- Artifact SHA-256 basis binding requirements.
- Anchor fallback derivation + anchor ID consistency enforcement.
- Carrier-specific extraction/normalization across PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder verification paths for sealed manifest workflows.
- Deterministic + real Groth16 verification modes.

## Compatibility and deployment impact

### Runtime compatibility
- Still a static browser app.
- Works in modern desktop/mobile browsers and compatible WebViews.
- Signed-bundle verification requires WebCrypto Ed25519 support for signature validation success paths.
- Signed-bundle verification policy depends on local verifier clock correctness (`signedAtMs` future-skew validation).

### Assets required
Baseline verification:
- `/index.html`

Full v18 feature coverage:
- `/offline-verifier.html` (alternate route, if used)
- `/snarkjs.min.js` (real Groth16 mode)
- `/zk/document_seal_verification_key.json` (real Groth16 mode)
- `/sw.js` (optional; warm/caching behavior)

No new network assets are required for Signature v3 checks when using built-in pinned keys.

## Migration checklist
- Deploy updated `site/` artifacts.
- Update outward release/docs references to `v18.0.0`.
- Ensure alternate route references use `/offline-verifier.html` (not legacy path names).
- If integrations issue signed proof bundles, include valid `signatureV3` payloads.
- If your environment requires custom key pinning, set `__RECEIZ_SIGNATURE_V3_PUBLIC_KEYS_PINNED__` before verifier initialization, including key lifecycle metadata when applicable.
- If using real Groth16 mode, keep `snarkjs.min.js` and verification key JSON available at same-origin paths.

## Security posture
The release goal remains unchanged: detect tampering deterministically and refuse verification when integrity conditions are not fully proven from artifact bytes and required checks.

`v18` extends this posture with optional cryptographic authorship checks for signed bundles via Signature v3.

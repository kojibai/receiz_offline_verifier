# Release Notes

## v19.0.0 (from v18.0.0)
Release date: 2026-03-03

`v19.0.0` moves Signature v3 key-lifecycle enforcement from timestamp windows to bundle pulse windows, aligning policy with canonical bundle identity (`kaiPulseEternal`) and removing local-clock dependence for signature acceptance.

## Summary
- Switched Signature v3 key policy checks from timestamp windows to pulse windows.
- Replaced key lifecycle metadata fields with pulse-based fields (`activeFromPulse`, `retiredAtPulse`).
- Removed verifier-clock future-skew enforcement for `signedAtMs`.
- Kept Signature v3 verification outcomes and fail-closed behavior (`verified`, `invalid`, `missing`, `unavailable`).
- Advanced release marker to `v19.0.0`.

## What changed in v19

### 1) Pulse-based key lifecycle policy
- Signature v3 key policy now evaluates against the bundle pulse (`bundle.kaiPulseEternal`).
- Bundle pulse is normalized as a non-negative integer pulse value before policy checks.
- Key metadata now supports:
  - `activeFromPulse`
  - `retiredAtPulse`
- Policy outcomes:
  - bundle pulse before `activeFromPulse` -> `invalid`
  - retired key without `retiredAtPulse` -> `unavailable`
  - bundle pulse after `retiredAtPulse` -> `unavailable`

### 2) Signature envelope behavior
- Verifier still requires a valid Signature v3 envelope shape:
  - `version`, `alg`, `kid`, `sig`, `payloadHashSha256`, `signedAtMs`
- `signedAtMs` remains shape-validated for compatibility, but is no longer used for local-clock acceptance gating.
- Payload canonicalization and payload-hash verification behavior are unchanged from `v18`.

### 3) Release marker update
- Footer release marker updated to `v19.0.0` in published and mirrored verifier entrypoints.

## Preserved from v18
- Fail-closed verification semantics.
- Canonical identity validation:
  - `ts`, `slug`, `code`, `kaiPulseEternal`, `verifyPath`
- Canonical derivation checks:
  - `slug <- ts`
  - `verifyPath <- /v/<slug>/<CODE>/<PULSE>`
- Artifact SHA-256 basis binding requirements.
- Signature v3 payload-hash and Ed25519 verification model.
- Anchor fallback derivation + anchor ID consistency enforcement.
- Carrier-specific extraction/normalization across PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder verification paths for sealed manifest workflows.
- Deterministic + real Groth16 verification modes.

## Compatibility and deployment impact

### Runtime compatibility
- Still a static browser app.
- Works in modern desktop/mobile browsers and compatible WebViews.
- Signed-bundle verification requires WebCrypto Ed25519 support for signature validation success paths.
- Signature acceptance policy no longer depends on verifier local clock skew windows.

### Assets required
Baseline verification:
- `/index.html`

Full v19 feature coverage:
- `/offline-verifier.html` (alternate route, if used)
- `/snarkjs.min.js` (real Groth16 mode)
- `/zk/document_seal_verification_key.json` (real Groth16 mode)
- `/sw.js` (optional; warm/caching behavior)

No new network assets are required for Signature v3 checks when using built-in pinned keys.

## Migration checklist
- Deploy updated `site/` artifacts.
- Update outward release/docs references to `v19.0.0`.
- Ensure alternate route references use `/offline-verifier.html` (not legacy path names).
- If integrations issue signed proof bundles, continue including valid `signatureV3` payloads.
- If your environment uses custom key pinning, migrate lifecycle metadata to `activeFromPulse` / `retiredAtPulse` in `__RECEIZ_SIGNATURE_V3_PUBLIC_KEYS_PINNED__`.
- If using retired key metadata, include `retiredAtPulse` to avoid policy-unavailable warnings.
- If using real Groth16 mode, keep `snarkjs.min.js` and verification key JSON available at same-origin paths.

## Security posture
The release goal remains unchanged: detect tampering deterministically and refuse verification when integrity conditions are not fully proven from artifact bytes and required checks.

`v19` keeps Signature v3 hard-fail semantics for malformed/hash-mismatch/signature-failure states while tightening lifecycle policy around canonical bundle pulse identity.

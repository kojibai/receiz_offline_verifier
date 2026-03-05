# Architecture

## Goals
- Public verification.
- Offline-capable verification from local artifact bytes.
- Deterministic outcomes for the same input bytes.
- Fail-closed result model.

## Implementation shape
- Static HTML app with embedded verifier logic and decompression runtime.
- Input via unified upload surface (file picker + drag/drop).
- Format detection by signature bytes (PNG, PDF, JPEG, GIF, WEBP, ZIP/unknown fallback).

## Verification pipeline
1. Detect artifact carrier format.
2. Extract proof bundle according to carrier rules.
3. Build basis bytes according to carrier normalization rules.
4. Decode and validate canonical bundle fields.
5. Verify artifact SHA-256 binding.
6. Validate trusted signatures (`signatureV3` / `signatureV4`).
7. Resolve/validate effective anchor context (required for trusted verification).
8. Validate Groth16 proof artifacts (required; real `g16:` payload only).
9. Optionally cross-check integration-provided `/v/...` path.

## Trusted signature model
- Trusted signature payloads are read from:
  - `proofbundle.signatureV3`
  - `proofbundle.signatureV4`
- At least one signature path must verify for trusted-signature success.
- If any present signature path is invalid, verification fails.
- If one path verifies and another present path is unavailable, verification continues with warnings.
- If no path verifies:
  - unavailable signature paths fail verification
  - missing signature paths fail verification

## Receiz Signature v3 model
- Signed payload hash is computed from canonicalized bundle content with `signatureV3` removed.
- Ed25519 verification runs against pinned key metadata selected by `kid`.
- Built-in pinned keys can be overridden by `globalThis.__RECEIZ_SIGNATURE_V3_PUBLIC_KEYS_PINNED__`.
- Signature policy validates bundle pulse (`kaiPulseEternal`) as a non-negative integer policy value.
- Signature policy enforces key lifecycle windows via key metadata (`activeFromPulse` / `retiredAtPulse`).
- `signedAtMs` is shape-validated but is not used for local-clock future-skew gating.

## Receiz Signature v4 model
- Signed payload hash is computed from canonicalized bundle content with both `signatureV3` and `signatureV4` removed.
- Signature v4 includes a device certificate envelope rooted in pinned v4 root keys.
- Root keys can be overridden by `globalThis.__RECEIZ_SIGNATURE_V4_ROOT_PUBLIC_KEYS_PINNED__`.
- Validation flow:
  - root key resolution by `cert.issuerKid`
  - pulse-based key lifecycle policy checks
  - deterministic certificate ID derivation check
  - certificate signature verification (root key)
  - certificate validity bounds check against `signedAtMs`
  - payload signature verification (device subject key)

## Anchor context model
- Effective anchor context is either:
  - explicit parsed anchor bundle, or
  - anchor context derived from proof bundle fields.
- Verification fails when effective anchor context is unavailable.
- When both explicit and derived anchor values exist, anchor ID consistency is validated.

## Groth16 model (`v23`)
- Required fields: `zkPoseidonHash`, `groth16Proof`, `groth16ProofDigest`.
- Accepted proof format: real `g16:` payload (`receiz.g16.real.v1`).
- Validation checks:
  - encoded proof digest
  - public-signal alignment with `zkPoseidonHash`
  - `snarkjs.groth16.verify` success
- Missing fields or non-`g16:` payloads fail verification.

## Offline and network contract
- No third-party network calls are required for verification.
- Signature v3/v4 verification uses WebCrypto in-process.
- Default shipped entrypoints embed Groth16 runtime/key material.
- Service worker registration and warm messaging is non-critical and failure-tolerant.

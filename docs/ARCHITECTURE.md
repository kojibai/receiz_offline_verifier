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
6. Validate trusted signature (`signatureV4`).
7. Resolve/validate effective anchor context (required for trusted verification).
8. Validate Groth16 proof artifacts (required; real `g16:` payload only).
9. Optionally cross-check integration-provided `/v/...` path.

## Trusted signature model
- Trusted signature payloads are read from:
  - `proofbundle.signatureV4`
- Trusted-signature success requires verified `proofbundle.signatureV4`.
- If present `signatureV4` is invalid, verification fails (`Trusted signature invalid`).
- If present `signatureV4` is unavailable, verification fails (`Trusted signature unavailable`).
- If `signatureV4` is missing, verification fails (`Trusted signature missing`).

## Receiz Signature v3 handling (legacy field)
- `signatureV3` may exist in payloads for compatibility with older producers.
- `v40` does not execute Signature v3 verification or key-policy evaluation.
- `signatureV3` does not contribute to trusted-signature success.

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

## Groth16 model (`v40`)
- Required fields: `zkPoseidonHash`, `groth16Proof`, `groth16ProofDigest`.
- Accepted proof format: real `g16:` payload (`receiz.g16.real.v1`).
- Validation checks:
  - encoded proof digest
  - public-signal alignment with `zkPoseidonHash`
  - `snarkjs.groth16.verify` success
- Missing fields or non-`g16:` payloads fail verification.

## Offline and network contract
- No third-party network calls are required for verification.
- Signature v4 verification uses WebCrypto in-process.
- Default shipped entrypoints embed Groth16 runtime/key material.
- Service worker registration and warm messaging is non-critical and failure-tolerant.

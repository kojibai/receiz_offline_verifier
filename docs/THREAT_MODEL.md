# Threat model

## Primary threats
1. Tampered artifact: bytes changed while attempting to preserve a verified result.
2. Bundle swap: proof data copied from one artifact to another.
3. Carrier confusion: malformed PNG/PDF/trailer/container payloads to bypass checks.
4. Metadata grafting: duplicate or conflicting proof payloads injected.
5. Signature forgery: fake `signatureV3`/`signatureV4` payloads or forged Signature v4 device certificates attempting to spoof Receiz authorship.
6. Groth16 spoofing: fake real `g16:` proof artifacts.
7. Anchor-context evasion: attempts to verify without valid anchor context.
8. UI deception: presenting verified state without required integrity proofs.

## Required defenses
- Strict per-carrier proof bundle uniqueness checks.
- Basis-byte normalization and SHA-256 artifact binding verification.
- Canonical identity field validation and path derivation checks.
- Proof decoding limits and malformed payload hard-fail behavior.
- Trusted signature enforcement:
  - at least one valid signature path (`v3` or `v4`) required
  - invalid present signatures hard fail
  - Signature v4 root-key lifecycle policy and device-certificate chain validation
- Anchor-context enforcement (explicit or derived anchor required; mismatch checks enforced).
- Real `g16:` Groth16 verification with digest/public-signal/verifier checks.
- Optional link canonical-path matching when an integration supplies link input.
- Explicit fail-closed status and reason reporting.

## Non-goals
- Preventing arbitrary edits to files.
- Preventing users from uploading unsupported artifacts.

The security goal is tamper detectability and deterministic non-verification on integrity failure.

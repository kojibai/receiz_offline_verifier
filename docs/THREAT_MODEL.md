# Threat model

## Primary threats
1. Tampered artifact: bytes changed while attempting to preserve a verified result.
2. Bundle swap: proof data copied from one artifact to another.
3. Carrier confusion: malformed PNG/PDF/trailer/container payloads to bypass checks.
4. Metadata grafting: duplicate or conflicting proof payloads injected.
5. Groth16 spoofing: fake deterministic/real proof artifacts.
6. UI deception: presenting verified state without required integrity proofs.

## Required defenses
- Strict per-carrier proof bundle uniqueness checks.
- Basis-byte normalization and SHA-256 artifact binding verification.
- Canonical identity field validation and path derivation checks.
- Proof decoding limits and malformed payload hard-fail behavior.
- Deterministic or real Groth16 verification when Groth16 fields are present.
- Optional link canonical-path matching when an integration supplies link input.
- Explicit fail-closed status and reason reporting.

## Non-goals
- Preventing arbitrary edits to files.
- Preventing users from uploading unsupported artifacts.

The security goal is tamper detectability and deterministic non-verification on integrity failure.

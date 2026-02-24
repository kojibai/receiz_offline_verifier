# Hardening rules (must not regress)

These rules preserve "proof lives in the file" semantics across all v12 carriers.

## Must-haves
- Enforce proof bundle uniqueness per carrier:
  - exactly one `receiz.proof_bundle` for PNG
  - exactly one `/Type /ReceizProof` object in PDF
  - exactly one Receiz trailer payload when trailer markers are present
- Decode proof bundle deterministically with size limits.
- Verify artifact binding hash against normalized basis bytes.
- Validate canonical identity fields:
  - `ts`, `slug`, `code`, `kaiPulseEternal`, `verifyPath`
  - `slug` derived from `ts`
  - `verifyPath` derived from `slug` / `code` / `pulse`
- Validate optional link input when provided.
- Fail closed with explicit error reasons.

## Allowed runtime network behavior
- No third-party network endpoints.
- Same-origin static asset load/fetch is allowed only for real Groth16 assets:
  - `/snarkjs.min.js`
  - `/zk/document_seal_verification_key.json`
- Service worker registration/warm messaging is allowed and must be non-critical.
- Missing real-Groth16 assets must fail real-Groth16 checks explicitly and must not produce a verified outcome.

## Must not introduce
- silent pass-through on malformed proof bundles
- relaxed canonical field validation
- non-deterministic basis hashing rules
- hidden fallbacks that convert hard failures into verified outcomes

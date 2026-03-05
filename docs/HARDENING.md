# Hardening rules (must not regress)

These rules preserve "proof lives in the file" semantics across all v22 carriers.

## Must-haves
- Enforce proof bundle uniqueness per carrier:
  - exactly one `receiz.proof_bundle` for PNG
  - exactly one `/Type /ReceizProof` object in PDF
  - exactly one SVG proof metadata payload when using embedded SVG proof channel
  - exactly one JSON whitespace proof payload when using embedded JSON proof channel
  - exactly one Receiz trailer payload when trailer markers are present
- Decode proof bundle deterministically with size limits.
- Verify artifact binding hash against normalized basis bytes.
- Validate canonical identity fields:
  - `ts`, `slug`, `code`, `kaiPulseEternal`, `verifyPath`
  - `slug` derived from `ts`
  - `verifyPath` derived from `slug` / `code` / `pulse`
- Require and validate effective anchor context:
  - explicit anchor bundle or derivable anchor context must exist
  - when both explicit and derived anchors exist, anchor ID consistency must hold
  - anchor parent code/pulse must match proof bundle code/pulse
- Validate optional integration-supplied link input when provided.
- Require and validate `signatureV3`:
  - missing signature must hard fail
  - malformed envelope or payload-hash mismatch must hard fail
  - bundle `kaiPulseEternal` must parse as a non-negative integer pulse policy value
  - signatures before `activeFromPulse` must hard fail
  - signatures with unavailable key policy state (including retired-without-pulse / retired-for-pulse) must hard fail
  - Ed25519 verification failure must hard fail
  - unknown/unconfigured key IDs must hard fail
- Require and validate Groth16 proof artifacts:
  - `zkPoseidonHash`, `groth16Proof`, and `groth16ProofDigest` must be present
  - `groth16Proof` must be real `g16:` payload format
  - digest and public-signal checks must pass
  - `snarkjs.groth16.verify` must pass
- Fail closed with explicit error reasons.

## Allowed runtime network behavior
- No third-party network endpoints.
- Service worker registration/warm messaging is allowed and must be non-critical.
- Verification must not depend on network fetches for correctness in default shipped entrypoints.

## Must not introduce
- silent pass-through on malformed proof bundles
- relaxed canonical field validation
- non-deterministic basis hashing rules
- hidden fallbacks that convert hard failures into verified outcomes
- signature downgrade paths that convert invalid/missing/unavailable `signatureV3` into warning-only outcomes
- Groth16 downgrade paths that accept missing fields or non-`g16:` proofs
- anchor downgrade paths that allow verification without effective anchor context

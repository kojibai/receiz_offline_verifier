# Hardening rules (must not regress)

These rules preserve "proof lives in the file" semantics across all `v45` carriers.

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
- Require and validate trusted signatures:
  - `signatureV4` must verify for trusted-signature success
  - any present invalid `signatureV4` payload must hard fail
  - present but unavailable `signatureV4` states must hard fail
  - missing `signatureV4` must hard fail
- Signature v4 checks:
  - malformed envelope must hard fail
  - payload-hash mismatch must hard fail
  - root key resolution/policy must enforce pulse lifecycle constraints
  - certificate ID derivation mismatch must hard fail
  - certificate signature verification failure must hard fail
  - `signedAtMs` outside certificate window must fail
  - subject-key payload signature verification failure must hard fail
- Signature v3 payloads may be present for compatibility but must not satisfy trusted-signature requirements.
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
- signature downgrade paths that convert invalid trusted signatures into warning-only outcomes
- missing-signature downgrade paths that bypass trusted-signature requirements
- Groth16 downgrade paths that accept missing fields or non-`g16:` proofs
- anchor downgrade paths that allow verification without effective anchor context

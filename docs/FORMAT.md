# Artifact format (verifier-visible)

This document defines the verifier-visible data contract for `v47.8.0`.

## Supported artifact carriers
- PNG with text chunks.
- PDF with embedded Receiz proof object metadata.
- SVG with embedded Receiz proof metadata attribute.
- JSON with embedded Receiz trailing-whitespace proof channel.
- Trailer-sealed files (binary or text artifacts with Receiz trailer markers).
- `.receizbundle` JSON envelope container (`kind: receiz.bundle.v1`).
- Package ZIP/folder inputs with manifest-driven verification paths.

## Proof bundle location rules

### PNG
- Required key: `receiz.proof_bundle` (exactly once).
- Optional keys:
  - `receiz_anchor_bundle`
  - `receiz.groth16`
- Chunk types accepted for text extraction: `iTXt`, `tEXt`, `zTXt`.

### PDF
- Required: exactly one object with `/Type /ReceizProof`.
- Required field inside that object: `/ProofBundle`.
- `/ProofBundle` may be encoded as:
  - PDF literal string `( ... )`
  - PDF hex string `<...>`

### SVG
- Required: exactly one encoded proof payload in SVG metadata attribute `data-receiz-proof-bundle`.
- If missing/malformed, verifier may attempt trailer-proof fallback when trailer markers are present.

### JSON
- Required: exactly one encoded proof payload in Receiz trailing-whitespace proof channel.
- If missing/malformed, verifier may attempt trailer-proof fallback when trailer markers are present.

### Trailer-sealed
- Required markers at EOF:
  - prefix: `\n\n--RECEIZ-TRAILER-v1--\n`
  - suffix: `\n--END-RECEIZ-TRAILER--\n`
- Exactly one trailer payload is accepted.
- Trailer payload JSON decodes directly to proof bundle object shape.

### `.receizbundle` envelope
- Top-level `kind` must be `receiz.bundle.v1`.
- Envelope must include:
  - `manifest`
  - `originalBase64`
  - `proofbundle`
- Manifest must include:
  - `filename`
  - `mime`
  - `basisSha256`
  - `createdAt`
  - `version` (`1`)

## Proof bundle encoding
- Preferred compressed codec: `c1:<base64url(deflate-raw(json))>`
- Legacy codec: `<base64url(json)>`
- `c1` decode hard limit: 64 KiB after inflation.

## Canonical path invariant
Proof bundle must resolve to a canonical verify path:
`/v/<slug>/<CODE>/<PULSE>`

## Anchor context requirement
Verified outcomes in `v47` require effective anchor context.

Effective anchor context is resolved from:
- explicit `receiz_anchor_bundle` carrier data, or
- derived anchor context from proof bundle fields (`anchorId`, `code`, `kaiPulseEternal`, `verifyPath`).

If neither explicit nor derivable anchor context is available, verification fails.

## Trusted signatures (`signatureV4`)
`v47` requires trusted Signature v4 verification for verified outcomes.

Trusted signature success requires:
- `signatureV4` verifies.

### Combined result semantics
- Any present invalid `signatureV4` payload causes hard failure (`Trusted signature invalid`).
- If present `signatureV4` is unavailable, verification hard fails (`Trusted signature unavailable`).
- If `signatureV4` is missing, verification hard fails (`Trusted signature missing` with detail `Trusted signature missing. Expected signatureV4.`).
- `signatureV3` may be present for compatibility but does not satisfy trusted-signature success in `v47`.

## Receiz Signature v3 (legacy payload support)

`signatureV3` payload shape is retained in schema for compatibility.
In `v47`, Signature v3 verification and key-policy evaluation are not executed, and `signatureV3` does not satisfy trusted-signature requirements.

## Receiz Signature v4

### Expected payload shape
- `version`: `1`
- `alg`: `Ed25519`
- `cert`: object
  - `version`: `1`
  - `certType`: `receiz.device.v1`
  - `certId`: 32-hex ID
  - `issuerKid`: root key ID (`[A-Za-z0-9._:-]{3,64}`)
  - `alg`: `Ed25519`
  - `subjectPublicKeyRawB64u`: base64url public key bytes
  - `issuedAtMs`: integer milliseconds
  - `expiresAtMs`: integer milliseconds (`expiresAtMs > issuedAtMs`)
  - `sig`: base64url Ed25519 signature over canonical cert payload
- `sig`: base64url payload signature by the device key
- `payloadHashSha256`: 64-hex digest of canonical signed payload
- `signedAtMs`: non-negative integer milliseconds

### Verification model
- Verifier removes both `signatureV3` and `signatureV4` from the bundle copy before canonicalization.
- `payloadHashSha256` must match SHA-256 of canonical payload bytes.
- Root key is resolved from pinned Signature v4 root keys by `cert.issuerKid`.
- Root-key lifecycle policy is evaluated against `bundle.kaiPulseEternal` (`activeFromPulse` / `retiredAtPulse`).
- `certId` must match `sha256(JCS(cert identity payload)).slice(0, 32)`.
- `cert.sig` must verify against canonical cert payload using the resolved root key.
- `signedAtMs` must be within certificate validity (`issuedAtMs <= signedAtMs <= expiresAtMs`).
- Final `sig` must verify against canonical payload bytes using `cert.subjectPublicKeyRawB64u`.

## Signature key pin overrides
- Signature v4 root-key override: `globalThis.__RECEIZ_SIGNATURE_V4_ROOT_PUBLIC_KEYS_PINNED__`

## Groth16 requirements (`v47`)
`v47` requires Groth16 artifact fields and accepts only real-mode proof payloads.

Required proof bundle fields:
- `zkPoseidonHash` (64-hex)
- `groth16Proof`
- `groth16ProofDigest` (64-hex)

Accepted proof format:
- Real mode only: `groth16Proof = g16:<base64url(json)>` where envelope `v = receiz.g16.real.v1`

Verification checks:
- digest match on encoded `g16:` payload
- public signal alignment with `zkPoseidonHash`
- `snarkjs.groth16.verify` validation

Non-`g16:` proof payloads fail verification.
Missing Groth16 fields fail verification.

## Basis-bytes normalization rules
- PNG: remove only proof bundle chunk(s) when computing basis hash.
- PDF: strip appended Receiz seal updates marked by `%RECEIZ_SEAL_UPDATE_v1%`.
- SVG: remove embedded proof metadata payload(s) when computing basis hash.
- JSON: remove Receiz trailing-whitespace proof payload(s) when computing basis hash.
- Trailer: basis is bytes before trailer prefix.
- `.receizbundle`: basis is decoded `originalBase64` payload.

## Optional link cross-check
If a link/path value is provided by an integration, parsed path must match one of:
- `bundle.verifyPath`
- `anchor.parent.viewUrl` (explicit anchor bundle or derived anchor context)
- `bundle.wireproof.verifierPath` (if present)

Note: the default `v47` UI does not prompt for a manual `/v/...` path input.

## Schemas
- [receiz-proof-bundle.schema.json](schemas/receiz-proof-bundle.schema.json)
- [receiz-anchor-bundle.schema.json](schemas/receiz-anchor-bundle.schema.json)
- [receiz-bundle-envelope.schema.json](schemas/receiz-bundle-envelope.schema.json)

Note: runtime invariants such as `slug == slugFromTs(ts)` and verifyPath derivation are enforced by code and are not fully expressible in JSON Schema alone.

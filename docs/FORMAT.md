# Artifact format (verifier-visible)

This document defines the verifier-visible data contract for `v17.0.0`.

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

## Groth16 artifact modes
- Deterministic mode: `groth16Proof` is base64url bytes derived from canonical identity.
- Real mode: `groth16Proof` is `g16:<base64url(json)>` where payload `v` is `receiz.g16.real.v1`.
- In real mode, verifier checks digest, public signal alignment with `zkPoseidonHash`, then runs `snarkjs.groth16.verify`.

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

Note: the default `v17` UI does not prompt for a manual `/v/...` path input.

## Schemas
- [receiz-proof-bundle.schema.json](schemas/receiz-proof-bundle.schema.json)
- [receiz-anchor-bundle.schema.json](schemas/receiz-anchor-bundle.schema.json)
- [receiz-bundle-envelope.schema.json](schemas/receiz-bundle-envelope.schema.json)

Note: runtime invariants such as `slug == slugFromTs(ts)` and verifyPath derivation are enforced by code and are not fully expressible in JSON Schema alone.

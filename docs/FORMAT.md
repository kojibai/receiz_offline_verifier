# Artifact format (verifier-visible)

This documents what the verifier expects to find inside a PNG.

## Embedded keys
- `receiz.proof_bundle` (required, exactly once)
- `receiz_anchor_bundle` (optional)
- `receiz.groth16` (optional notice)

## Proof bundle encoding
- Preferred: `c1:<base64url(deflate-raw(json))>`
- Legacy: `<base64url(json)>`

## Canonical path
The verifier expects the bundle to describe a canonical verify path:
`/v/<slug>/<CODE>/<PULSE>`

The verifier treats mismatches as non-verifying.
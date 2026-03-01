# Receiz Offline Verifier

Verify a file offline. Proof is in the file.

Current release: `v17.0.0`

## What changed in v17
- Added anchor fallback derivation directly from proof bundle fields when an explicit anchor bundle is not present.
- Anchor validation now fails closed when explicit anchor and derived anchor IDs disagree.
- Anchor facts panel now resolves from explicit anchor, derived anchor, or `bundle.anchorId`.
- User-facing copy was aligned with file-first wording across status, folder scan, and package verification messages.

## Release train highlights (v14 -> v17)
- `v14.0.0`: UI release marker advanced to `v14.0.0`; app entrypoint rename started (`receiz-offline-verifier.html` -> `offline-verifier.html`).
- `v15.0.0` / `v15.5.0`: runtime/doc route references aligned to `/offline-verifier.html`; release markers advanced.
- `v16.0.0`: wording shifted from "original/sealed artifact" language to consistent "file/sealed file" language.
- `v17.0.0`: anchor derivation + cross-check hardening shipped.

## Supported artifact inputs (v17)
1. PNG artifact containing exactly one `receiz.proof_bundle` text chunk.
2. PDF artifact containing exactly one embedded Receiz proof object (`/Type /ReceizProof` + `/ProofBundle`).
3. SVG artifact with exactly one embedded Receiz proof metadata attribute (with trailer-proof fallback).
4. JSON artifact with exactly one embedded Receiz JSON whitespace proof channel (with trailer-proof fallback).
5. Trailer-sealed artifact ending with one Receiz trailer payload.
6. `.receizbundle` container (`kind: receiz.bundle.v1`).
7. Sealed package payloads provided as ZIP or multi-file folder-style selections (manifest-driven verification path).

## Primitive contract (what "Verified" means)
A file is verified only if the verifier can prove integrity from bytes (plus optional integration-supplied path input):
- proof bundle payload is found exactly once for the selected format
- proof bundle decoding succeeds
- canonical field invariants pass
- artifact binding hash matches normalized basis bytes
- if an optional path is supplied, it matches an accepted embedded canonical path
- when Groth16 fields are present, deterministic or real Groth16 checks pass

## Runtime notes
- The verifier is a static HTML app.
- Verification logic runs client-side in browser JavaScript.
- Real Groth16 mode requires:
  - `snarkjs` runtime (`/snarkjs.min.js`)
  - verification key JSON (`/zk/document_seal_verification_key.json`)
- If those assets are unavailable, deterministic verification still works and real Groth16 checks fail with explicit messaging.
- The default `v17` UI does not prompt for manual `/v/...` path input; integrations can still supply it.

## Quick start (local)

### Option A: Open directly
Open [site/index.html](site/index.html).

### Option B: Serve locally (recommended)
```bash
cd site
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploy
Deploy the `site/` directory to any static host.

Required runtime assets for full `v17` feature coverage:
- `index.html`
- `offline-verifier.html` (if served as an alternate entry path)
- `snarkjs.min.js` (for real Groth16 mode)
- `zk/document_seal_verification_key.json` (for real Groth16 mode)
- `sw.js` (optional, for service worker warm behavior)

## Schemas
Machine-readable schemas are provided in [docs/schemas](docs/schemas):
- [receiz-proof-bundle.schema.json](docs/schemas/receiz-proof-bundle.schema.json)
- [receiz-anchor-bundle.schema.json](docs/schemas/receiz-anchor-bundle.schema.json)
- [receiz-bundle-envelope.schema.json](docs/schemas/receiz-bundle-envelope.schema.json)

## Repository layout
- [site/index.html](site/index.html): published verifier entrypoint.
- [apps/offline-verifier.html](apps/offline-verifier.html): mirrored app entrypoint.
- [docs/FORMAT.md](docs/FORMAT.md): artifact and payload format contract.
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md): runtime and verification flow.
- [docs/HARDENING.md](docs/HARDENING.md): non-regression security rules.
- [CHANGELOG.md](CHANGELOG.md): release history.
- [RELEASE_NOTES.md](RELEASE_NOTES.md): full release notes.

## Security
If you discover a vulnerability (including false-positive verification), do not open a public issue.
Use [SECURITY.md](SECURITY.md).

## License
MIT. See [LICENSE](LICENSE).

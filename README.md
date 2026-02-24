# Receiz Offline Verifier

Verify a Receiz artifact offline. Proof lives in the file.

Current release: `v12.0.0`

## What stayed the same from v11
- Fail-closed verification: if integrity cannot be proven from artifact bytes, result is not verified.
- Canonical identity checks: `ts`, `slug`, `code`, `kaiPulseEternal`, `verifyPath`.
- Artifact binding checks: SHA-256 basis hash must match embedded binding.
- Optional `/v/...` link cross-check against embedded canonical paths.
- No third-party network dependencies.

## What changed in v12
- Release marker and docs updated from `v11.0.0` to `v12.0.0`.
- Release notes/changelog now describe migration from `v11` to `v12`.
- Verifier behavior and contracts remain aligned with the multi-carrier model introduced in `v11`.

## Supported artifact inputs (v12)
1. PNG artifact containing exactly one `receiz.proof_bundle` text chunk.
2. PDF artifact containing exactly one embedded Receiz proof object (`/Type /ReceizProof` + `/ProofBundle`).
3. Trailer-sealed artifact ending with one Receiz trailer payload.
4. `.receizbundle` container (`kind: receiz.bundle.v1`).

## Primitive contract (what "Verified" means)
A file is verified only if the verifier can prove integrity from bytes plus optional user link input:
- proof bundle payload is found exactly once for the selected format
- proof bundle decoding succeeds
- canonical field invariants pass
- artifact binding hash matches normalized basis bytes
- optional provided link path matches an accepted embedded canonical path
- when Groth16 fields are present, deterministic or real Groth16 checks pass

## Runtime notes
- The verifier is still a static HTML app.
- Verification logic runs client-side in browser JavaScript.
- Real Groth16 mode requires:
  - `snarkjs` runtime (`/snarkjs.min.js`)
  - verification key JSON (`/zk/document_seal_verification_key.json`)
- If those assets are unavailable, deterministic verification still works and real-Groth16 checks fail with explicit messaging.

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

Required runtime assets for full v12 feature coverage:
- `index.html`
- `receiz-offline-verifier.html` (if served as an alternate entry path)
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
- [apps/receiz-offline-verifier.html](apps/receiz-offline-verifier.html): mirrored app entrypoint.
- [docs/FORMAT.md](docs/FORMAT.md): artifact and payload format contract.
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md): runtime and verification flow.
- [docs/HARDENING.md](docs/HARDENING.md): non-regression security rules.
- [CHANGELOG.md](CHANGELOG.md): release history.

## Security
If you discover a vulnerability (including false-positive verification), do not open a public issue.
Use [SECURITY.md](SECURITY.md).

## License
MIT. See [LICENSE](LICENSE).

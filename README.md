# Receiz Offline Verifier

Verify a file offline. Proof is in the file.

Current release: `v54.0.0`

## What changed in v54
- Current release/docs surfaces are aligned to `v54.0.0`.
- Published the canonical `v54.0.0` release note at [docs/releases/v54.0.0.md](docs/releases/v54.0.0.md).
- Published the release-scoped product-truth freeze at [docs/releases/v54.0.0-product-truth.md](docs/releases/v54.0.0-product-truth.md).
- `v54.0.0` broadens the public-market baseline into a broader operating release with a clearer public product map, a dedicated Business surface, an admin command deck, transparent Stripe-to-ledger wallet behavior, shared session bootstrap, deterministic market-preview first paint, persistent twin continuity, and deterministic Kai sigil SVG rendering.
- Current shipped verifier, studio, and settlement entrypoints now display `v54.0.0`.
- Verifier semantics remain unchanged relative to `v53.0.0`.
- Core verifier outcomes remain file-authoritative, deterministic, and fail-closed.

## Live Conformance

<table>
  <tr>
    <td align="center" valign="middle"><a href="https://receiz.com/powered-by"><img alt="Powered by Receiz" src="https://receiz.com/powered-by-receiz.svg" height="32" /></a></td>
    <td align="center" valign="middle"><a href="https://receiz.com/verify/conformance"><img alt="Verification conformance badge" src="https://receiz.com/api/verification/conformance/badge" height="30" /></a></td>
    <td align="center" valign="middle"><a href="https://receiz.com/economy/conformance"><img alt="Settlement conformance badge" src="https://receiz.com/api/economy/conformance/badge" height="30" /></a></td>
    <td align="center" valign="middle"><a href="https://receiz.com/identity/conformance"><img alt="Identity conformance badge" src="https://receiz.com/api/identity/conformance/badge" height="30" /></a></td>
    <td align="center" valign="middle"><a href="https://receiz.com/issuance/conformance"><img alt="Issuance conformance badge" src="https://receiz.com/api/issuance/conformance/badge" height="30" /></a></td>
    <td align="center" valign="middle"><a href="https://receiz.com/interoperability/conformance"><img alt="Interoperability conformance badge" src="https://receiz.com/api/interoperability/conformance/badge" height="30" /></a></td>
    <td align="center" valign="middle"><a href="https://receiz.com/world/conformance"><img alt="World conformance badge" src="https://receiz.com/api/world/conformance/badge" height="30" /></a></td>
  </tr>
</table>

The repo-local conformance hub at [docs/conformance/README.md](docs/conformance/README.md) tracks the latest vendored conformance snapshot in this repository. It includes live badge surfaces, current imported results, and suite-by-suite requirement coverage docs for the currently imported suites; the broader `v54.0.0` operating release is documented in the release note and can be vendored here on the next snapshot refresh.

## Release train highlights (v14 -> v54)
- `v14.0.0`: UI release marker advanced to `v14.0.0`; app entrypoint rename started (`receiz-offline-verifier.html` -> `offline-verifier.html`).
- `v15.0.0` / `v15.5.0`: runtime/doc route references aligned to `/offline-verifier.html`; release markers advanced.
- `v16.0.0`: wording shifted from "original/sealed artifact" language to consistent "file/sealed file" language.
- `v17.0.0`: anchor derivation + cross-check hardening shipped.
- `v18.0.0`: Signature v3 offline verification + key pinning model shipped.
- `v19.0.0`: Signature v3 key policy shifted to pulse-based lifecycle enforcement.
- `v20.0.0`: added footer download action for the offline verifier page.
- `v21.0.0`: strict verification gating requires signature, anchor context, and real `g16:` Groth16 proof artifacts.
- `v22.0.0`: release marker and docs alignment with no policy/runtime behavior change.
- `v23.0.0`: Signature v4 trust-chain verification and trusted-signature policy expansion (`signatureV3` or `signatureV4`).
- `v24.0.0`: trusted-signature gating narrowed to `signatureV4` and v4 root-key pin set expanded.
- `v26.0.0`: release-marker/docs alignment only; verification semantics unchanged from `v24`.
- `v27.0.0`: release-marker/docs alignment only; verification semantics unchanged from `v26`.
- `v28.0.0`: release-marker/docs alignment only; verification semantics unchanged from `v27`.
- `v29.0.0`: release-marker/docs alignment only; verification semantics unchanged from `v28`.
- `v30.0.0`: release/docs alignment plus public standards, governance, and release-note expansion; verifier semantics unchanged from `v29`.
- `v40.0.0`: release/docs alignment for the broader operational trust-platform release, including offline proof, wallet/settlement, public artifact delivery, admin/business rails, and world-runtime framing.
- `v45.0.0`: release/docs alignment for the production Public Twin and World consolidation release, including photoreal live stages, owned-runtime rendering, deterministic trail bundles, and hardened calendar/booking flows.
- `v46.0.0`: release/docs alignment for the locked-surface product-truth release, including richer original/document viewing, a stronger verified-original player, authority-aware Public Twin photoreal behavior, and explicit release-freeze framing.
- `v47.0.0`: release/docs alignment for the governed trust-surface release, including first-class original/document delivery, stronger verified-player continuity and sharing, stricter storage/media freshness, more authority-aware Public Twin/world behavior, and explicit version-truth governance.
- `v47.0.1`: release/docs alignment for the profile stability patch; verifier semantics remain unchanged from `v47.0.0`.
- `v47.2.0`: release/docs alignment for the Business custom-domain root-routing and DNS setup-surface patch; verifier semantics remain unchanged from `v47.0.0`.
- `v47.3.0`: release/docs alignment for the custom-domain continuity and sign-in experience release, including auth-bridge continuity on verified business domains, email-first fallback in likely embedded browsers, and trusted-host first-paint hero media behavior; verifier semantics remain unchanged from `v47.0.0`.
- `v47.4.0`: release/docs alignment for the native business-entitlement and embedded-surface continuity release, including Business-preserving session surfaces, Receiz calendar scheduling continuity, and Receiz-hosted embedded Stripe checkout; verifier semantics remain unchanged from `v47.0.0`.
- `v47.5.0`: release/docs alignment for the world revenue-operations release, including explicit revenue skills, multi-channel outbound opportunity lanes, owner-side playbooks, proof-first kits, action-card embeds, booking confirmation packs, and call closeout rails; verifier semantics remain unchanged from `v47.0.0`.
- `v47.6.0`: release/docs alignment for the world command-center and contacts-operations release, including the atlas-first `/world` shell, concierge twin-run tracking, a standalone `/contacts` CRM surface, safer outreach persistence rules, and Stripe-backed checkout completion truth; verifier semantics remain unchanged from `v47.0.0`.
- `v47.7.0`: release/docs alignment for the durable contacts production release, including migration-backed contact persistence, historical relationship backfill, live person timelines, portable import/export, and locked release-governance surfaces; verifier semantics remain unchanged from `v47.0.0`.
- `v47.8.0`: release/docs alignment for the contacts continuity hardening release, including guest-contact materialization, public-twin and calendar continuity, mobile identity visibility, and guest-thread follow-up continuity; verifier semantics remain unchanged from `v47.0.0`.
- `v48.0.0`: release/docs alignment for the operator-surface release, including the operator-first contacts shell, durable `linked_user_id` merge upgrades, and a cleaner authoritative mobile world atlas; verifier semantics remain unchanged from `v47.0.0`.
- `v50.0.0`: release/docs alignment for the world revenue operating system release, including durable contacts CRM, live world command surfaces, concierge-run lead sourcing, campaign persistence, scheduled autopilot, provider telemetry, truthful rail readiness, reply handling, and revenue attribution; verifier semantics remain unchanged from `v47.0.0`.
- `v51.0.0`: release/docs alignment for the product-ladder and operator-truth release, including public plan renaming to Authorship / Business / Automation, Free-to-Enterprise ordering, consistent entitlement copy, and carried-forward Contacts/world truth hardening; verifier semantics remain unchanged from `v50.0.0`.
- `v52.0.0`: release/docs alignment for the governed market release, including deterministic quote execution, replayable quote evidence, partial share-certificate custody, first-class market conformance, and lighter premium market runtime behavior; verifier semantics remain unchanged from `v51.0.0`.
- `v52.5.0`: release/docs alignment for the market hardening release, including deterministic quote math, persisted quote evidence, bounded spread/pressure behavior, partial share-certificate custody, first-class market conformance, lighter premium runtime, contextual market media, inline launch, and official market share surfaces; verifier semantics remain unchanged from `v52.0.0`.
- `v53.0.0`: release/docs alignment for the public market product-system release, including public market data routes, persisted conformance history, stricter prediction resolution, touch-safe market/player flows, stronger proof metadata, proper passkey account attachment, first-class Enterprise handling, simpler public entry surfaces, and `Ed25519` release attestation; verifier semantics remain unchanged from `v52.0.0`.
- `v54.0.0`: release/docs alignment for the broader operating-system release, including the expanded public product map, the dedicated Business surface, the admin command deck, Stripe-to-ledger wallet transparency, shared session bootstrap, deterministic market-preview pricing, twin continuity across profile/artifact/player handoffs, and deterministic Kai sigil rendering; verifier semantics remain unchanged from `v53.0.0`.

## Supported artifact inputs (v54)
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
- trusted signature checks pass (`signatureV4` must verify)
- anchor context is present (explicit or derived) and matches bundle code/pulse
- real `g16:` Groth16 proof artifacts are present and verify against digest/public-signal constraints
- if an optional path is supplied, it matches an accepted embedded canonical path

## Runtime notes
- The verifier is a static HTML app.
- Verification logic runs client-side in browser JavaScript.
- Signature v4 verification uses WebCrypto Ed25519 verification.
- Trusted-signature outcomes are fail-closed:
  - any present invalid `signatureV4` payload fails verification
  - unavailable present `signatureV4` fails verification
  - missing `signatureV4` fails verification
- Signature policy validates bundle `kaiPulseEternal` against pinned Signature v4 root-key lifecycle windows (`activeFromPulse` / `retiredAtPulse`).
- Signature v4 validates a device certificate chain rooted in pinned v4 root keys.
- `signedAtMs` remains required in signature payload shape and v4 enforces certificate issuance/expiry bounds against `signedAtMs`.
- Groth16 checks require `zkPoseidonHash`, `groth16Proof`, and `groth16ProofDigest`.
- Only real `g16:` Groth16 payloads are accepted.
- The default `v54` UI does not prompt for manual `/v/...` path input; integrations can still supply it.

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

Required runtime assets for `v54`:
- `index.html`
- `offline-verifier.html` (if served as an alternate entry path)
- `sw.js` (optional, for service worker warm behavior)

Note: Signature/Groth16 verification runtime and pinned key material are embedded in the shipped HTML entrypoints.

## Schemas
Machine-readable schemas are provided in [docs/schemas](docs/schemas):
- [receiz-proof-bundle.schema.json](docs/schemas/receiz-proof-bundle.schema.json)
- [receiz-anchor-bundle.schema.json](docs/schemas/receiz-anchor-bundle.schema.json)
- [receiz-bundle-envelope.schema.json](docs/schemas/receiz-bundle-envelope.schema.json)

## Repository layout
- [docs/README.md](docs/README.md): documentation map for `v54.0.0`.
- [site/index.html](site/index.html): published verifier entrypoint.
- [apps/offline-verifier.html](apps/offline-verifier.html): mirrored app entrypoint.
- [apps/offline-record-seal.html](apps/offline-record-seal.html): offline record, seal, and verify studio surface.
- [apps/offline-settlement.html](apps/offline-settlement.html): offline settlement bundle builder.
- [docs/releases/v54.0.0.md](docs/releases/v54.0.0.md): canonical `v54.0.0` release note.
- [docs/releases/v54.0.0-product-truth.md](docs/releases/v54.0.0-product-truth.md): `v54.0.0` product-truth freeze document.
- [docs/receiz-standard-v1.md](docs/receiz-standard-v1.md): public Receiz artifact and settlement standard framing.
- [docs/deterministic-surfaces.md](docs/deterministic-surfaces.md): deterministic route contract for public truth surfaces.
- [docs/conformance/README.md](docs/conformance/README.md): styled conformance hub with live badge surfaces, current imported snapshot results, and deep suite docs for the currently vendored conformance suites.
- [docs/presencebound-canonical-realm.md](docs/presencebound-canonical-realm.md): canonical PresenceBound/WebAuthn realm requirements.
- [docs/governance/README.md](docs/governance/README.md): public governance standards, registers, and evidence-summary map.
- [docs/FORMAT.md](docs/FORMAT.md): artifact and payload format contract.
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md): runtime and verification flow.
- [docs/HARDENING.md](docs/HARDENING.md): non-regression security rules.
- [CHANGELOG.md](CHANGELOG.md): release history.
- [RELEASE_NOTES.md](RELEASE_NOTES.md): full release notes.

## Security
If you discover a vulnerability (including false-positive verification), do not open a public issue.
Use [SECURITY.md](SECURITY.md).

## License
MIT for repository contents. See [LICENSE](LICENSE) for scope notes covering live `receiz.com` assets and Receiz branding references.

# Receiz Offline Verifier

Verify a file offline. Proof is in the file.

Current release: `v107.0.0`

## What changed in v107.0.0

- Current release/docs surfaces are aligned to `v107.0.0`.
- Published the unified proof-native developer operations release and complete evidence set at [docs/releases/v107.0.0.md](docs/releases/v107.0.0.md).
- Published the release-scoped [product truth](docs/releases/v107.0.0-product-truth.md), [checklist](docs/releases/v107.0.0-checklist.md), [process](docs/releases/v107.0.0-process.md), [regression lessons](docs/releases/v107.0.0-regression-lessons.md), [performance findings](docs/releases/v107.0.0-performance-findings.md), [invariant register](docs/releases/v107.0.0-invariant-register.md), and [commit-history boundary](docs/releases/v107.0.0-commit-history.md).
- Published release notes, developer guide, v106-to-v107 migration, v100–v107 lineage, canonical registry/digest, threat model, v106 closure inventory, and visual-evidence artifacts.
- Identity, profile, media, portable continuity, generic bearer ownership, receipt, proof-head, and offline-command primitives use one schema and stable-error language across Receiz.com, SDK, MCP, AI skills, emulator, generator, frontend, service worker, and migration.
- The key remains the identity; username rename preserves the same key and releases the prior username only after canonical commitment.
- Raw and prepublished avatar proof inputs share one atomic profile/media/head append, and generic bearer claims verify the enclosing artifact first.
- Queued offline commands are signed proposals with `globallyCommitted: false`; only a verified canonical receipt establishes commitment.
- SDK, MCP, and AI-skills packages align exactly at `107.0.0` with registry digest `4d0caa6172a69c3bf5817c1c35db5630e555b5d6d824091d45a90fb426b86ef6`; the independent verifier remains lower authority than sealed proof objects.
- The `v94.0.0` Official SDK And Durable Proof Operating Model release remains in force.
- The `v93.2.0` SDK Proof Developer Experience release remains in force.
- The `v93.1.0` Durable Proof Memory release remains in force.
- The `v93.0.0` Sports Proof Economy release remains in force.
- The `v89.0.0` foreground anchor publication, profile projection, Sports Vault sealed-manifest proof, wallet/runtime, lease/market, DB pressure, regression-lessons, and commit-history boundary remains in force.
- The `v87.0.0` offline proof baseline remains in force.
- The `v64.0.0` value-loop invariants remain in force.
- Broader platform target environments require identity/profile/media atomicity, enclosing-artifact ownership, receipt-gated projection, offline proposal semantics, registry-digest parity, SDK/MCP/AI-skill conformance, emulator/generator validation, migration, package installation, visual evidence, governance, release freeze, attestation, publication, deployment, and production evidence named in [docs/releases/v107.0.0-checklist.md](docs/releases/v107.0.0-checklist.md).
- Current shipped verifier, Sports card verifier, studio, and settlement entrypoints now display `v107.0.0`.
- Root package metadata now resolves cleanly to `107.0.0`.
- The static service-worker surface carries runtime version `107.0.0`.
- Verifier semantics remain unchanged relative to `v60.0.0`.
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

The repo-local conformance hub at [docs/conformance/README.md](docs/conformance/README.md) tracks the latest vendored conformance snapshot in this repository. It includes live badge surfaces, current imported results, and suite-by-suite requirement coverage docs for the currently imported suites; the broader `v107.0.0` release is documented in the release note and can be vendored here on the next snapshot refresh.

## Release train highlights (v14 -> v98.0)
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
- `v55.0.0`: release/docs alignment for the guided owner-setup release, including sticky `/profile` activation, sealed profile media, explicit world-avatar freshness, shared stable-route market/player continuity, and canonical performance route grouping; verifier semantics remain unchanged from `v54.0.0`.
- `v55.1.0`: release/docs alignment for the continuity-and-execution release, including reusable profile truth, deterministic route handoff, passkey-first buy continuation, exact-USD non-entitled settlement, position-aware sell presentation, and tighter live-player continuity; verifier semantics remain unchanged from `v55.0.0`.
- `v56.0.0`: release/docs alignment for the canonical continuity release cut, including lockstep version surfaces, guarded logged-in world hydration, entitlement-aware concierge polling, and fresh-account analytics schema-drift hardening; verifier semantics remain unchanged from `v55.1.0`.
- `v57.0.0`: release/docs alignment for the route-coherence, certificate-custody, and market-conformance release, including canonical managed-owner routing, world/market fast-entry truth reuse, certificate-native custody/history, and coherent market balances and inventory across certificate and profile-visibility mutations; verifier semantics remain unchanged from `v56.0.0`.
- `v58.0.0`: release/docs alignment for the authoritative-market and release-surface coherence cut, including authoritative signed-in market first paint, shared wallet/chart-buy live hydration, lean deterministic market transport, live tracked-position semantics, and unified release-surface version truth; verifier semantics remain unchanged from `v57.0.0`.
- `v60.0.0`: release/docs alignment for the major stable recap cut across `v50.0.0` through `v60.0.0`, including live proof and twin at the front door, stronger canonical original upload/download recovery, explicit profile-ready twin portrait publishing, tighter compact-device wallet and certificate framing, and unified `v60.0.0` release truth; verifier semantics remain unchanged from `v58.0.0`.
- `v60.1.0`: release/docs alignment for the continuity-and-market-proof cut on top of `v60.0.0`, including holder-aware public market witness truth, compact market-desk polish, twin shell continuity without late visible promotion, lighter public-profile route assembly, and deterministic market sigil hydration; verifier semantics remain unchanged from `v60.0.0`.
- `v61.0.0`: release/docs alignment for the governed historical-continuity and runtime-discipline cut on top of `v60.0.0`, including the governed pre-v4 historical cohort, deterministic market exits, stricter settled-shell runtime boundaries, published operating standards, and unified `v61.0.0` release truth; verifier semantics remain unchanged from `v60.0.0`.
- `v64.0.0`: release/docs alignment for the complete value-loop cut, including Settlement as proof-native liquid value, funded Reserve as the external-conversion lane, Reserve-only notes and wire transfer, Reserve-first sends and buys, funded/unfunded market sale splits, buyer-funded certificates, and canonical value-loop invariants; verifier semantics remain unchanged from `v60.0.0`.
- `v66.0.0`: release/docs alignment for the local proof continuity cut, including local identity roots, verified-register-backed proof authority, deterministic state preservation, append-only history, compact local memory, sync as propagation, explicit verified-snapshot persistence, and local twin register projection; verifier semantics remain unchanged from `v60.0.0`.
- `v70.0.0`: release/docs alignment for the public alpha cut, including one-click Receiz ID entry, canonical `/<username>` profile truth, complete Settlement/Reserve value-loop causality, local-first/server-always recovery, route-preserving stale-runtime recovery, live twin identity locking, proof-sealed world trail bundles, and the `v70.0.0` invariant register; verifier semantics remain unchanged from `v60.0.0`.
- `v72.0.0`: release/docs archive for the stable continuity cut, including actor-scoped route warmth clearing on account switch and compact mobile Live Twin face-lock overlay fit; verifier semantics remain unchanged from `v60.0.0`.
- `v73.0.0`: release/docs alignment for the ownership, vault, and continuity cut, including business account ownership, receipt provenance, vault portability, account brain proof detail, Offline Verifier authority navigation, and bounded world twin fit contracts; verifier semantics remain unchanged from `v60.0.0`.
- `v74.0.0`: release/docs alignment for the Receiz Key, identity artwork, and profile media cut, including sovereign Receiz Key restore, deterministic profile identity artwork, PBI-signed identity artifacts, stable profile creation truth, long-form originals, attached-link preservation, video derivatives, sold-position continuity, and portable profile state import; verifier semantics remain unchanged from `v60.0.0`.
- `v75.0.0`: release/docs alignment for the local proof, backup sign-in, market continuity, and Explore cut, including local-first Receiz ID proof, durable account bindings, Identity Record / Seal / Receiz Key restore parity, old-browser backup sign-in, restored-account route authority, profile identity downloads, Plans / Upgrade parity, market snapshot continuity, stable market navigation, and Explore mobile packaging; verifier semantics remain unchanged from `v60.0.0`.
- `v76.0.0`: release/docs alignment for the World Agent revenue loop, Public Proof registry, Market Twin mandate safety, wallet settlement correctness, and expanded public/developer status inventory; verifier semantics remain unchanged from `v60.0.0`.
- `v77.0.0`: release/docs alignment for Signal Circuit, verified Signal Cards, Signal Vault and packs, Signal Pack Foundry, public conformance assurance, Creator OS, creator wallet metering, managed launch, Vault sealed downloads, old-Safari Signature V4 document sealing, runtime recovery, market quote batching, and wallet/profile continuity; verifier semantics remain unchanged from `v60.0.0`.
- `v78.0.0`: release/docs alignment for Signal Card World ownership, synced Vault discovery, sealed Vault Card export, explicit mobile/PWA download intent, transfer packages, Signal Arena, auction wallet holds, public Signal Circuit and Exchange routes, conformance source repair, dashboard first paint, service-worker/PWA continuity, value-loop copy, and release-worker coherence; verifier semantics remain unchanged from `v60.0.0`.
- `v80.0.0`: release/docs alignment for the major stable release, including verified-truth-first identity, canonical profile truth, wallet/market funded causality, World revenue loops, Public Proof registry behavior, Creator OS production, Signal Cards as owned Receiz assets, Vault export portability, public conformance/status visibility, and runtime/PWA continuity; verifier semantics remain unchanged from `v60.0.0`.
- `v81.0.0`: release/docs alignment for the Signal Circuit Provenance Release, including Signal Card DNA, rewarded-card payment before reveal, wallet/calendar card activity, transfer deduplication, all-card history, explicit discovery memory, mobile/PWA chrome stability, and card proof/art polish; verifier semantics remain unchanged from `v60.0.0`.
- `v82.0.0`: release/docs alignment for the Sports Arena World-Class Gameplay Release, including live MLB Sports Arena, owned Sports cards, pack issuance, auditable rarity odds, Pick 5, daily tournaments, live scoring, card careers, Sports market depth, trading, conformance, scale hardening, and PWA first-paint stability; verifier semantics remain unchanged from `v60.0.0`.
- `v83.0.0`: release/docs alignment for the Stable Live Proof Release, including deterministic Sports first paint, scoped score and lock truth, stable card reveal/issuance continuity, live-player sharing recovery, fast Explore and Market surfaces, centralized interoperability policy, OTC proof objects, and release conformance hardening; verifier semantics remain unchanged from `v60.0.0`.
- `v84.0.0`: release/docs alignment for the Proof-Native Artifact System Stable Release, including direct primitive naming, stronger/weaker truth hierarchy, forbidden downgrade boundaries, deterministic first-paint protection, service-worker version truth, and release law coherence; verifier semantics remain unchanged from `v60.0.0`.
- `v85.0.0`: release/docs alignment for the Official Proof-Native Sports, Market, Passport, and Speed Release, including Signal Card provenance, Sports as a live proof economy, Main Event as a settlement primitive, deterministic Market/wallet ownership and settlement projection, Series Passport proof-object gating, referral-backed public sharing, truthful speed invariants, and coherent release/service-worker identity; verifier semantics remain unchanged from `v60.0.0`.
- `v86.0.0`: release/docs alignment for the Official Locked Proof-Native Baseline, including the v80-to-v86 proof arc, Profile-visible proof objects in Market, deterministic Market and Explore first paint, signed-in ownership-history preservation, Sports all-source-date live hydration, payment-confirmed Main Event entry, single-card QR proof routes, World/public twin continuity, and coherent release/service-worker identity; verifier semantics remain unchanged from `v60.0.0`.
- `v87.0.0`: release/docs alignment for Offline Proof Links, QR Proof Transport, And Post-v86 Public Proof Lock, including compact offline proof-bearing `/v` links, `/v` Signature V4 proof-bundle classification as `Proof`, coordinate-only historical fallback boundaries, Sports single-card QR/value proof surfaces, World Estate, Market/Profile first-paint hardening, and RLS/security cleanup; verifier semantics remain unchanged from `v60.0.0`.
- `v88.0.0`: release/docs alignment for Live Sports Truth, Runtime Coherence, Public Live Cockpit, And Post-v87 Regression Lock, including Sports selected-game field truth, `/baseball` direct entry, locked entries, per-player scores, finalized reward recovery, Public Live Cockpit, runtime/session coherence, notification/chat delivery, Supabase timeout hardening, and required regression lessons; verifier semantics remain unchanged from `v60.0.0`.
- `v89.0.0`: release/docs alignment for Foreground Anchor Publication, Profile Global Sync, Sports Vault Public Proof, Wallet Runtime, And Post-v88 Regression Lock, including `/api/receiz/anchor` outbox exclusion, profile showcase/global/public market/route snapshot projection, Sports Vault sealed-manifest public proof publishing, Sports FIFA/UFC/fight additions, wallet/runtime continuity, lease/market ownership surfaces, DB pressure repairs, required regression lessons, and commit-history boundary; verifier semantics remain unchanged from `v60.0.0`.
- `v90.0.0`: release/docs alignment for the Official Stable Proof-Native Artifact System Release, including the full v80-to-current proof-native arc, Sports Vault owner-row projection, Sports card ownership transfer, Sports event proof value, Sports conformance, live value/market depth, competition rooms, public metadata projection, regression lessons, and commit-history boundary; verifier semantics remain unchanged from `v60.0.0`.
- `v91.0.0`: release/docs alignment for the Deterministic Sports Scale And Proof-Native Game Release, including deterministic value chart math, full LiveChart primitive preservation, Pack Derby reward-game challenge settlement, post-deadline receipt rejection, sport-specific Sports entry finalization, FIFA closeout composition, settlement conformance, and the scale reasoning law; verifier semantics remain unchanged from `v60.0.0`.
- `v92.0.0`: release/docs alignment for the Receiz Logic Release, including the repo-local reasoning kernel, public proof/profile first paint, vault ownership projection, value/event proof stacking, Pitch Command proof, Pack Derby proof gameplay, append source-date truth, source-age countdown truth, and local artifact save; verifier semantics remain unchanged from `v60.0.0`.
- `v92.1.0`: release/docs alignment for the Sports Proof Telemetry Release, including Play Command 3D play proof, exact Pitch Command event binding, event proof video and milestone projection, foreground Sports Arena appends, Pack Derby opening stability, rarity/value/rookie truth, pitch day-proof archives, and Sports DB hot-path hardening; verifier semantics remain unchanged from `v60.0.0`.
- `v93.0.0`: release/docs alignment for the Sports Proof Economy Release, including Sports Economy as a live public proof surface, bounded proof-read projection, Sports score ledger projection, deterministic card value basis, causal card lineage, visible-card append memory, physical activation proof/settlement routing, command-grade Play/Pitch surfaces, Pack Derby proof-game continuity, and explicit performance/invariant locks; verifier semantics remain unchanged from `v60.0.0`.
- `v93.1.0`: release/docs alignment for the Durable Proof Memory Release, including first admission then append forever, Calendar/Account shared event proof projection, Account brain activity proof nodes, wallet Kai-ledger heads, bounded Sports addition discovery, SDK convenience boundary, and no-downgrade Sports proof fixtures; verifier semantics remain unchanged from `v60.0.0`.
- `v93.2.0`: release/docs alignment for the SDK Proof Developer Experience Release, including runtime schema exports, deterministic proof object projections, Sports card proof object projections, append-only SDK proof memory, verify/project/admit/persist/append docs, and SDK convenience beneath proof authority; verifier semantics remain unchanged from `v60.0.0`.
- `v94.0.0`: release/docs alignment for the Official SDK And Durable Proof Operating Model Release, including the official `@receiz/sdk` launch, known-verified-truth-first rendering, verified additions after known heads, Kai coordinate preservation, bounded projection mechanics, and SDK convenience beneath proof authority; verifier semantics remain unchanged from `v60.0.0`.
- `v95.0.0`: release/docs alignment for the Official Public Table Release, including complete proof objects carrying Kai/Klok state, Kai Klok as proof object state machine, `kaiPulseEternal` / `kai_upulse` as pulse unit, SDK canonical proof bundle parity, and no optional-Kai doctrine for complete proof objects; verifier semantics remain unchanged from `v60.0.0`.
- `v96.0.0`: release/docs alignment for the SDK A+ Release Evidence Lock, including the `receiz` CLI, local fixture conformance with zero network/DB authority, proof payload inspection, local-first proof memory starter generation, passive SDK observations, copy-paste integration docs, and release-blocking SDK package evidence; verifier semantics remain unchanged from `v60.0.0`.
- `v96.1.0`: release/docs alignment for the Twin And World SDK Release Lock, including World public SDK clients, delegated Twin clients, Connect Twin scopes, OpenAPI/status catalog visibility, Twin/World integration docs, identity conformance visibility, and app/SDK version identity lock; verifier semantics remain unchanged from `v60.0.0`.
- `v97.0.0`: release/docs alignment for the Public App-State Projection Rail And SDK Ecosystem Release, including delegated public app-state publishing, URL/host/domain/creator/namespace/id reads, URL-normalized app-state projections, SDK app-state helpers, OIDC consent repair, public proof projection correctness, admin performance measurement cleanup, and app/SDK release identity lock; verifier semantics remain unchanged from `v60.0.0`.
- `v97.2.0`: release/docs alignment for the Enterprise App Runtime SDK Release, including customer sessions, customer portals, merchant onboarding, expanded commerce primitives, media, events, jobs, RBAC, audit, risk, compliance, portability, search, notifications, release pinning, React subpath helpers, idempotent writes, and offline proof queues beneath proof authority; verifier semantics remain unchanged from `v60.0.0`.
- `v97.5.0`: release/docs alignment for the Public App-State, Enterprise SDK, and MCP Agent Rail Release, including public-store projections, typed SDK app rails, `@receiz/mcp-server`, delegated agent tokens, MCP resource templates, npm `.bin` startup repair, and developer MCP surfaces beneath proof authority; verifier semantics remain unchanged from `v60.0.0`.
- `v97.6.0`: release/docs alignment for the Signed Merchant Public-Store, Live Proof Graph, MCP, SDK, and Service Worker Law Release, including Identity Seal / Receiz Key public-store publishing, proof graph inspection, SDK/MCP authority-boundary guidance, service-worker release continuity, and Sports saved-card base issue copy; verifier semantics remain unchanged from `v60.0.0`.
- `v105.0.0`: Browser-safe SDK architecture separates runtime/React/testing graphs from the Node-only compiler, adds stable redacted errors, capabilities, protected generation, emulator conformance, semantic MCP operations, and exact externally installable coordinated packages.
- `v106.0.0`: Registry-bound constitutional enforcement coordinates SDK command admission, MCP context, AI-skill contracts, forward-only migration, and independent replay while restoring owner-local PBI and Live Player append continuity.
- `v107.0.0`: Unified developer operations expose identity, profile, media, portable continuity, generic bearer ownership, receipts, proof heads, and signed offline proposals across coordinated packages and runtime surfaces.

## Supported artifact inputs (v60)
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
- The default `v60` UI does not prompt for manual `/v/...` path input; integrations can still supply it.

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

Required runtime assets for `v60`:
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
- [docs/README.md](docs/README.md): documentation map for `v107.0.0`.
- [docs/releases/v107.0.0.md](docs/releases/v107.0.0.md): canonical unified proof-native developer operations release for `v107.0.0`.
- [docs/releases/v107.0.0-product-truth.md](docs/releases/v107.0.0-product-truth.md): `v107.0.0` product-truth freeze document.
- [docs/releases/v107.0.0-checklist.md](docs/releases/v107.0.0-checklist.md): release-prep checklist and additional gates for `v107.0.0`.
- [docs/releases/v107.0.0-process.md](docs/releases/v107.0.0-process.md): release-prep process for `v107.0.0`.
- [docs/releases/v107.0.0-regression-lessons.md](docs/releases/v107.0.0-regression-lessons.md): required regression lessons lock for `v107.0.0`.
- [docs/releases/v107.0.0-performance-findings.md](docs/releases/v107.0.0-performance-findings.md): local-first, atomic-operation, deterministic-queue, receipt-gated, generator, and external-action boundaries for `v107.0.0`.
- [docs/releases/v107.0.0-invariant-register.md](docs/releases/v107.0.0-invariant-register.md): locked invariant register for `v107.0.0`.
- [docs/releases/v107.0.0-commit-history.md](docs/releases/v107.0.0-commit-history.md): required commit-history boundary for `v107.0.0`.
- [docs/releases/v107.0.0-release-notes.md](docs/releases/v107.0.0-release-notes.md): coordinated SDK, MCP, AI-skill, emulator, generator, migration, and runtime change record.
- [docs/releases/v107.0.0-developer-guide.md](docs/releases/v107.0.0-developer-guide.md): exact identity, profile, continuity, ownership, offline, MCP, generator, and emulator usage contract.
- [docs/releases/v107.0.0-migration.md](docs/releases/v107.0.0-migration.md): forward-only v106-to-v107 migration contract.
- [docs/releases/v107.0.0-v100-v107-lineage.md](docs/releases/v107.0.0-v100-v107-lineage.md): complete v100 through v107 product-truth lineage.
- [docs/releases/v107.0.0-constitution-registry.digest](docs/releases/v107.0.0-constitution-registry.digest): declared canonical v107 registry payload digest.
- [docs/releases/v107.0.0-constitution-registry.json](docs/releases/v107.0.0-constitution-registry.json): pinned machine-readable constitutional registry.
- [docs/releases/v107.0.0-threat-model.json](docs/releases/v107.0.0-threat-model.json): registry-bound constitutional enforcement threat model.
- [docs/releases/v107.0.0-v106-closure-inventory.json](docs/releases/v107.0.0-v106-closure-inventory.json): closed inherited-v106 requirement inventory.
- [docs/releases/v107.0.0-visual-evidence.json](docs/releases/v107.0.0-visual-evidence.json): eight-capture non-contradictory visual-evidence index.
- [docs/receiz-reasoning-kernel.md](docs/receiz-reasoning-kernel.md): primitive-first reasoning kernel carried forward for `v107.0.0`.
- [docs/releases/v97.2.0.md](docs/releases/v97.2.0.md): canonical Enterprise App Runtime SDK Release note for `v97.2.0`.
- [docs/releases/v97.2.0-product-truth.md](docs/releases/v97.2.0-product-truth.md): `v97.2.0` product-truth freeze document.
- [docs/releases/v97.2.0-checklist.md](docs/releases/v97.2.0-checklist.md): release-prep checklist and additional gates for `v97.2.0`.
- [docs/releases/v97.2.0-process.md](docs/releases/v97.2.0-process.md): release-prep process for `v97.2.0`.
- [docs/releases/v97.2.0-regression-lessons.md](docs/releases/v97.2.0-regression-lessons.md): required regression lessons lock for `v97.2.0`.
- [docs/releases/v97.2.0-performance-findings.md](docs/releases/v97.2.0-performance-findings.md): performance findings and enterprise app runtime SDK proof rules for `v97.2.0`.
- [docs/releases/v97.2.0-invariant-register.md](docs/releases/v97.2.0-invariant-register.md): locked invariant register for `v97.2.0`.
- [docs/releases/v97.2.0-commit-history.md](docs/releases/v97.2.0-commit-history.md): required commit-history boundary for `v97.2.0`.
- [docs/releases/v97.0.0.md](docs/releases/v97.0.0.md): canonical Public App-State Projection Rail And SDK Ecosystem Release note for `v97.0.0`.
- [docs/releases/v97.0.0-product-truth.md](docs/releases/v97.0.0-product-truth.md): `v97.0.0` product-truth freeze document.
- [docs/releases/v97.0.0-checklist.md](docs/releases/v97.0.0-checklist.md): release-prep checklist and additional gates for `v97.0.0`.
- [docs/releases/v97.0.0-process.md](docs/releases/v97.0.0-process.md): release-prep process for `v97.0.0`.
- [docs/releases/v97.0.0-regression-lessons.md](docs/releases/v97.0.0-regression-lessons.md): required regression lessons lock for `v97.0.0`.
- [docs/releases/v97.0.0-performance-findings.md](docs/releases/v97.0.0-performance-findings.md): performance findings and app-state projection proof rules for `v97.0.0`.
- [docs/releases/v97.0.0-invariant-register.md](docs/releases/v97.0.0-invariant-register.md): locked invariant register for `v97.0.0`.
- [docs/releases/v97.0.0-commit-history.md](docs/releases/v97.0.0-commit-history.md): required commit-history boundary for `v97.0.0`.
- [docs/releases/v96.1.0.md](docs/releases/v96.1.0.md): canonical Twin And World SDK Release Lock note for `v96.1.0`.
- [docs/releases/v96.1.0-product-truth.md](docs/releases/v96.1.0-product-truth.md): `v96.1.0` product-truth freeze document.
- [docs/releases/v96.1.0-checklist.md](docs/releases/v96.1.0-checklist.md): release-prep checklist and additional gates for `v96.1.0`.
- [docs/releases/v96.1.0-process.md](docs/releases/v96.1.0-process.md): release-prep process for `v96.1.0`.
- [docs/releases/v96.1.0-regression-lessons.md](docs/releases/v96.1.0-regression-lessons.md): required regression lessons lock for `v96.1.0`.
- [docs/releases/v96.1.0-performance-findings.md](docs/releases/v96.1.0-performance-findings.md): performance findings and Twin/World SDK proof rules for `v96.1.0`.
- [docs/releases/v96.1.0-invariant-register.md](docs/releases/v96.1.0-invariant-register.md): locked invariant register for `v96.1.0`.
- [docs/releases/v96.1.0-commit-history.md](docs/releases/v96.1.0-commit-history.md): required commit-history boundary for `v96.1.0`.
- [docs/releases/v96.0.0.md](docs/releases/v96.0.0.md): canonical SDK A+ Release Evidence Lock note for `v96.0.0`.
- [docs/releases/v96.0.0-product-truth.md](docs/releases/v96.0.0-product-truth.md): `v96.0.0` product-truth freeze document.
- [docs/releases/v96.0.0-checklist.md](docs/releases/v96.0.0-checklist.md): release-prep checklist and additional gates for `v96.0.0`.
- [docs/releases/v96.0.0-process.md](docs/releases/v96.0.0-process.md): release-prep process for `v96.0.0`.
- [docs/releases/v96.0.0-regression-lessons.md](docs/releases/v96.0.0-regression-lessons.md): required regression lessons lock for `v96.0.0`.
- [docs/releases/v96.0.0-performance-findings.md](docs/releases/v96.0.0-performance-findings.md): performance findings and SDK evidence proof rules for `v96.0.0`.
- [docs/releases/v96.0.0-invariant-register.md](docs/releases/v96.0.0-invariant-register.md): locked invariant register for `v96.0.0`.
- [docs/releases/v96.0.0-commit-history.md](docs/releases/v96.0.0-commit-history.md): required commit-history boundary for `v96.0.0`.
- [docs/releases/v95.0.0.md](docs/releases/v95.0.0.md): canonical Official Public Table Release note for `v95.0.0`.
- [docs/releases/v95.0.0-product-truth.md](docs/releases/v95.0.0-product-truth.md): `v95.0.0` product-truth freeze document.
- [docs/releases/v95.0.0-checklist.md](docs/releases/v95.0.0-checklist.md): release-prep checklist and additional gates for `v95.0.0`.
- [docs/releases/v95.0.0-process.md](docs/releases/v95.0.0-process.md): release-prep process for `v95.0.0`.
- [docs/releases/v95.0.0-regression-lessons.md](docs/releases/v95.0.0-regression-lessons.md): required regression lessons lock for `v95.0.0`.
- [docs/releases/v95.0.0-performance-findings.md](docs/releases/v95.0.0-performance-findings.md): performance findings and public table proof rules for `v95.0.0`.
- [docs/releases/v95.0.0-invariant-register.md](docs/releases/v95.0.0-invariant-register.md): locked invariant register for `v95.0.0`.
- [docs/releases/v95.0.0-commit-history.md](docs/releases/v95.0.0-commit-history.md): required commit-history boundary for `v95.0.0`.
- [docs/releases/v94.0.0.md](docs/releases/v94.0.0.md): canonical Official SDK And Durable Proof Operating Model Release note for `v94.0.0`.
- [docs/releases/v94.0.0-product-truth.md](docs/releases/v94.0.0-product-truth.md): `v94.0.0` product-truth freeze document.
- [docs/releases/v94.0.0-checklist.md](docs/releases/v94.0.0-checklist.md): release-prep checklist and additional gates for `v94.0.0`.
- [docs/releases/v94.0.0-process.md](docs/releases/v94.0.0-process.md): release-prep process for `v94.0.0`.
- [docs/releases/v94.0.0-regression-lessons.md](docs/releases/v94.0.0-regression-lessons.md): required regression lessons lock for `v94.0.0`.
- [docs/releases/v94.0.0-performance-findings.md](docs/releases/v94.0.0-performance-findings.md): performance findings and durable proof operating model rules for `v94.0.0`.
- [docs/releases/v94.0.0-invariant-register.md](docs/releases/v94.0.0-invariant-register.md): locked invariant register for `v94.0.0`.
- [docs/releases/v94.0.0-commit-history.md](docs/releases/v94.0.0-commit-history.md): required commit-history boundary for `v94.0.0`.
- [docs/releases/v93.2.0.md](docs/releases/v93.2.0.md): canonical SDK Proof Developer Experience Release note for `v93.2.0`.
- [docs/releases/v93.2.0-product-truth.md](docs/releases/v93.2.0-product-truth.md): `v93.2.0` product-truth freeze document.
- [docs/releases/v93.2.0-checklist.md](docs/releases/v93.2.0-checklist.md): release-prep checklist and additional gates for `v93.2.0`.
- [docs/releases/v93.2.0-process.md](docs/releases/v93.2.0-process.md): release-prep process for `v93.2.0`.
- [docs/releases/v93.2.0-regression-lessons.md](docs/releases/v93.2.0-regression-lessons.md): required regression lessons lock for `v93.2.0`.
- [docs/releases/v93.2.0-performance-findings.md](docs/releases/v93.2.0-performance-findings.md): performance findings and SDK developer proof rules for `v93.2.0`.
- [docs/releases/v93.2.0-invariant-register.md](docs/releases/v93.2.0-invariant-register.md): locked invariant register for `v93.2.0`.
- [docs/releases/v93.2.0-commit-history.md](docs/releases/v93.2.0-commit-history.md): required commit-history boundary for `v93.2.0`.
- [docs/releases/v93.1.0.md](docs/releases/v93.1.0.md): canonical Durable Proof Memory Release note for `v93.1.0`.
- [docs/releases/v93.1.0-product-truth.md](docs/releases/v93.1.0-product-truth.md): `v93.1.0` product-truth freeze document.
- [docs/releases/v93.1.0-checklist.md](docs/releases/v93.1.0-checklist.md): release-prep checklist and additional gates for `v93.1.0`.
- [docs/releases/v93.1.0-process.md](docs/releases/v93.1.0-process.md): release-prep process for `v93.1.0`.
- [docs/releases/v93.1.0-regression-lessons.md](docs/releases/v93.1.0-regression-lessons.md): required regression lessons lock for `v93.1.0`.
- [docs/releases/v93.1.0-performance-findings.md](docs/releases/v93.1.0-performance-findings.md): performance findings and durable proof memory rules for `v93.1.0`.
- [docs/releases/v93.1.0-invariant-register.md](docs/releases/v93.1.0-invariant-register.md): locked invariant register for `v93.1.0`.
- [docs/releases/v93.1.0-commit-history.md](docs/releases/v93.1.0-commit-history.md): required commit-history boundary for `v93.1.0`.
- [docs/releases/v93.0.0.md](docs/releases/v93.0.0.md): canonical Sports Proof Economy Release note for `v93.0.0`.
- [docs/releases/v93.0.0-product-truth.md](docs/releases/v93.0.0-product-truth.md): `v93.0.0` product-truth freeze document.
- [docs/releases/v93.0.0-checklist.md](docs/releases/v93.0.0-checklist.md): release-prep checklist and additional gates for `v93.0.0`.
- [docs/releases/v93.0.0-process.md](docs/releases/v93.0.0-process.md): release-prep process for `v93.0.0`.
- [docs/releases/v93.0.0-regression-lessons.md](docs/releases/v93.0.0-regression-lessons.md): required regression lessons lock for `v93.0.0`.
- [docs/releases/v93.0.0-performance-findings.md](docs/releases/v93.0.0-performance-findings.md): performance findings and bounded proof-read rules for `v93.0.0`.
- [docs/releases/v93.0.0-invariant-register.md](docs/releases/v93.0.0-invariant-register.md): locked invariant register for `v93.0.0`.
- [docs/releases/v93.0.0-commit-history.md](docs/releases/v93.0.0-commit-history.md): required commit-history boundary for `v93.0.0`.
- [docs/releases/v92.1.0.md](docs/releases/v92.1.0.md): canonical Sports Proof Telemetry Release note for `v92.1.0`.
- [docs/releases/v92.1.0-product-truth.md](docs/releases/v92.1.0-product-truth.md): `v92.1.0` product-truth freeze document.
- [docs/releases/v92.1.0-checklist.md](docs/releases/v92.1.0-checklist.md): release-prep checklist and additional gates for `v92.1.0`.
- [docs/releases/v92.1.0-process.md](docs/releases/v92.1.0-process.md): release-prep process for `v92.1.0`.
- [docs/releases/v92.1.0-regression-lessons.md](docs/releases/v92.1.0-regression-lessons.md): required regression lessons lock for `v92.1.0`.
- [docs/releases/v92.1.0-commit-history.md](docs/releases/v92.1.0-commit-history.md): required commit-history boundary for `v92.1.0`.
- [docs/releases/v92.0.0.md](docs/releases/v92.0.0.md): canonical Receiz Logic Release note for `v92.0.0`.
- [docs/releases/v92.0.0-product-truth.md](docs/releases/v92.0.0-product-truth.md): `v92.0.0` product-truth freeze document.
- [docs/releases/v92.0.0-checklist.md](docs/releases/v92.0.0-checklist.md): release-prep checklist and additional gates for `v92.0.0`.
- [docs/releases/v92.0.0-process.md](docs/releases/v92.0.0-process.md): release-prep process for `v92.0.0`.
- [docs/releases/v92.0.0-regression-lessons.md](docs/releases/v92.0.0-regression-lessons.md): required regression lessons lock for `v92.0.0`.
- [docs/releases/v92.0.0-commit-history.md](docs/releases/v92.0.0-commit-history.md): required commit-history boundary for `v92.0.0`.
- [docs/releases/v91.0.0.md](docs/releases/v91.0.0.md): canonical Deterministic Sports Scale And Proof-Native Game Release note for `v91.0.0`.
- [docs/releases/v91.0.0-product-truth.md](docs/releases/v91.0.0-product-truth.md): `v91.0.0` product-truth freeze document.
- [docs/releases/v91.0.0-checklist.md](docs/releases/v91.0.0-checklist.md): release-prep checklist and additional gates for `v91.0.0`.
- [docs/releases/v91.0.0-process.md](docs/releases/v91.0.0-process.md): release-prep process for `v91.0.0`.
- [docs/releases/v91.0.0-regression-lessons.md](docs/releases/v91.0.0-regression-lessons.md): required regression lessons lock for `v91.0.0`.
- [docs/releases/v91.0.0-commit-history.md](docs/releases/v91.0.0-commit-history.md): required commit-history boundary for `v91.0.0`.
- [docs/releases/v90.0.0.md](docs/releases/v90.0.0.md): canonical Official Stable Proof-Native Artifact System Release note for `v90.0.0`.
- [docs/releases/v90.0.0-product-truth.md](docs/releases/v90.0.0-product-truth.md): `v90.0.0` product-truth freeze document.
- [docs/releases/v90.0.0-checklist.md](docs/releases/v90.0.0-checklist.md): release-prep checklist and additional gates for `v90.0.0`.
- [docs/releases/v90.0.0-process.md](docs/releases/v90.0.0-process.md): release-prep process for `v90.0.0`.
- [docs/releases/v90.0.0-regression-lessons.md](docs/releases/v90.0.0-regression-lessons.md): required regression lessons lock for `v90.0.0`.
- [docs/releases/v90.0.0-commit-history.md](docs/releases/v90.0.0-commit-history.md): required commit-history boundary for `v90.0.0`.
- [docs/releases/v89.0.0.md](docs/releases/v89.0.0.md): canonical Foreground Anchor Publication, Profile Global Sync, Sports Vault Public Proof, Wallet Runtime, And Post-v88 Regression Lock note for `v89.0.0`.
- [docs/releases/v89.0.0-product-truth.md](docs/releases/v89.0.0-product-truth.md): `v89.0.0` product-truth freeze document.
- [docs/releases/v89.0.0-checklist.md](docs/releases/v89.0.0-checklist.md): release-prep checklist and additional gates for `v89.0.0`.
- [docs/releases/v89.0.0-process.md](docs/releases/v89.0.0-process.md): release-prep process for `v89.0.0`.
- [docs/releases/v89.0.0-regression-lessons.md](docs/releases/v89.0.0-regression-lessons.md): required regression lessons lock for `v89.0.0`.
- [docs/releases/v89.0.0-commit-history.md](docs/releases/v89.0.0-commit-history.md): required commit-history boundary for `v89.0.0`.
- [docs/releases/v88.0.0.md](docs/releases/v88.0.0.md): canonical Live Sports Truth, Runtime Coherence, Public Live Cockpit, And Post-v87 Regression Lock note for `v88.0.0`.
- [docs/releases/v88.0.0-product-truth.md](docs/releases/v88.0.0-product-truth.md): `v88.0.0` product-truth freeze document.
- [docs/releases/v88.0.0-checklist.md](docs/releases/v88.0.0-checklist.md): release-prep checklist and additional gates for `v88.0.0`.
- [docs/releases/v88.0.0-process.md](docs/releases/v88.0.0-process.md): release-prep process for `v88.0.0`.
- [docs/releases/v88.0.0-regression-lessons.md](docs/releases/v88.0.0-regression-lessons.md): required regression lessons lock for `v88.0.0`.
- [docs/releases/v87.0.0.md](docs/releases/v87.0.0.md): canonical Offline Proof Links, QR Proof Transport, And Post-v86 Public Proof Lock note for `v87.0.0`.
- [docs/releases/v87.0.0-product-truth.md](docs/releases/v87.0.0-product-truth.md): `v87.0.0` product-truth freeze document.
- [docs/releases/v87.0.0-checklist.md](docs/releases/v87.0.0-checklist.md): release-prep checklist and additional gates for `v87.0.0`.
- [docs/releases/v87.0.0-process.md](docs/releases/v87.0.0-process.md): release-prep process for `v87.0.0`.
- [docs/releases/v86.0.0.md](docs/releases/v86.0.0.md): canonical Official Locked Proof-Native Baseline note for `v86.0.0`.
- [docs/releases/v86.0.0-product-truth.md](docs/releases/v86.0.0-product-truth.md): `v86.0.0` product-truth freeze document.
- [docs/releases/v86.0.0-checklist.md](docs/releases/v86.0.0-checklist.md): release-prep checklist and additional gates for `v86.0.0`.
- [docs/releases/v86.0.0-process.md](docs/releases/v86.0.0-process.md): release-prep process for `v86.0.0`.
- [docs/releases/v85.0.0.md](docs/releases/v85.0.0.md): canonical Official Proof-Native Sports, Market, Passport, and Speed Release note for `v85.0.0`.
- [docs/releases/v85.0.0-product-truth.md](docs/releases/v85.0.0-product-truth.md): `v85.0.0` product-truth freeze document.
- [docs/releases/v85.0.0-checklist.md](docs/releases/v85.0.0-checklist.md): release-prep checklist and additional gates for `v85.0.0`.
- [docs/releases/v85.0.0-process.md](docs/releases/v85.0.0-process.md): release-prep process for `v85.0.0`.
- [docs/releases/v84.0.0.md](docs/releases/v84.0.0.md): canonical Proof-Native Artifact System Stable Release note for `v84.0.0`.
- [docs/releases/v84.0.0-product-truth.md](docs/releases/v84.0.0-product-truth.md): `v84.0.0` product-truth freeze document.
- [docs/releases/v84.0.0-checklist.md](docs/releases/v84.0.0-checklist.md): release-prep checklist and additional gates for `v84.0.0`.
- [docs/releases/v84.0.0-process.md](docs/releases/v84.0.0-process.md): release-prep process for `v84.0.0`.
- [docs/releases/v83.0.0.md](docs/releases/v83.0.0.md): canonical Stable Live Proof Release note for `v83.0.0`.
- [docs/releases/v83.0.0-product-truth.md](docs/releases/v83.0.0-product-truth.md): `v83.0.0` product-truth freeze document.
- [docs/releases/v83.0.0-checklist.md](docs/releases/v83.0.0-checklist.md): release-prep checklist and additional gates for `v83.0.0`.
- [docs/releases/v83.0.0-process.md](docs/releases/v83.0.0-process.md): release-prep process for `v83.0.0`.
- [docs/releases/v82.0.0.md](docs/releases/v82.0.0.md): canonical Sports Arena World-Class Gameplay Release note for `v82.0.0`.
- [docs/releases/v82.0.0-product-truth.md](docs/releases/v82.0.0-product-truth.md): `v82.0.0` product-truth freeze document.
- [docs/releases/v82.0.0-checklist.md](docs/releases/v82.0.0-checklist.md): release-prep checklist and additional gates for `v82.0.0`.
- [docs/releases/v82.0.0-process.md](docs/releases/v82.0.0-process.md): release-prep process for `v82.0.0`.
- [docs/releases/v81.0.0.md](docs/releases/v81.0.0.md): canonical Signal Circuit Provenance Release note for `v81.0.0`.
- [docs/releases/v81.0.0-product-truth.md](docs/releases/v81.0.0-product-truth.md): `v81.0.0` product-truth freeze document.
- [docs/releases/v81.0.0-checklist.md](docs/releases/v81.0.0-checklist.md): release-prep checklist and additional gates for `v81.0.0`.
- [docs/releases/v81.0.0-process.md](docs/releases/v81.0.0-process.md): release-prep process for `v81.0.0`.
- [docs/releases/v80.0.0.md](docs/releases/v80.0.0.md): canonical Major Stable Release note for `v80.0.0`.
- [docs/releases/v80.0.0-product-truth.md](docs/releases/v80.0.0-product-truth.md): `v80.0.0` product-truth freeze document.
- [docs/releases/v80.0.0-checklist.md](docs/releases/v80.0.0-checklist.md): release-prep checklist and additional gates for `v80.0.0`.
- [docs/releases/v80.0.0-process.md](docs/releases/v80.0.0-process.md): release-prep process for `v80.0.0`.
- [docs/releases/v78.0.0.md](docs/releases/v78.0.0.md): canonical `v78.0.0` Signal Card World, Vault Export, Battle Arena, Exchange, and PWA Continuity release archive.
- [docs/releases/v78.0.0-product-truth.md](docs/releases/v78.0.0-product-truth.md): `v78.0.0` product-truth freeze document.
- [docs/releases/v78.0.0-checklist.md](docs/releases/v78.0.0-checklist.md): release-prep checklist and additional gates for `v78.0.0`.
- [docs/releases/v78.0.0-process.md](docs/releases/v78.0.0-process.md): release-prep process for `v78.0.0`.
- [docs/releases/v77.0.0.md](docs/releases/v77.0.0.md): canonical `v77.0.0` Signal Circuit, Creator OS, Vault Settlement, and Runtime Trust release archive.
- [docs/releases/v77.0.0-product-truth.md](docs/releases/v77.0.0-product-truth.md): `v77.0.0` product-truth freeze document.
- [docs/releases/v77.0.0-checklist.md](docs/releases/v77.0.0-checklist.md): release-prep checklist and additional gates for `v77.0.0`.
- [docs/releases/v77.0.0-process.md](docs/releases/v77.0.0-process.md): release-prep process for `v77.0.0`.
- [docs/releases/v76.0.0.md](docs/releases/v76.0.0.md): canonical `v76.0.0` World Agent revenue, Public Proof, and Market Twin release archive.
- [docs/releases/v76.0.0-product-truth.md](docs/releases/v76.0.0-product-truth.md): `v76.0.0` product-truth freeze document.
- [docs/releases/v76.0.0-checklist.md](docs/releases/v76.0.0-checklist.md): release-prep checklist and additional gates for `v76.0.0`.
- [docs/releases/v76.0.0-process.md](docs/releases/v76.0.0-process.md): release-prep process for `v76.0.0`.
- [site/index.html](site/index.html): published verifier entrypoint.
- [apps/offline-verifier.html](apps/offline-verifier.html): mirrored app entrypoint.
- [apps/offline-record-seal.html](apps/offline-record-seal.html): offline record, seal, and verify studio surface.
- [apps/offline-settlement.html](apps/offline-settlement.html): offline settlement bundle builder.
- [docs/releases/v75.0.0.md](docs/releases/v75.0.0.md): canonical `v75.0.0` local proof, backup sign-in, market continuity, and Explore release note.
- [docs/releases/v75.0.0-product-truth.md](docs/releases/v75.0.0-product-truth.md): `v75.0.0` product-truth freeze document.
- [docs/releases/v75.0.0-checklist.md](docs/releases/v75.0.0-checklist.md): release-prep checklist and additional gates for `v75.0.0`.
- [docs/releases/v75.0.0-process.md](docs/releases/v75.0.0-process.md): release-prep process for `v75.0.0`.
- [docs/releases/v75.0.0-hpl-continuity-review.md](docs/releases/v75.0.0-hpl-continuity-review.md): HPL continuity review evidence for `v75.0.0`.
- [docs/releases/v75.0.0-receiz-identity-continuity-one-pager.md](docs/releases/v75.0.0-receiz-identity-continuity-one-pager.md): Receiz identity continuity one-pager evidence for `v75.0.0`.
- [docs/releases/v74.0.0.md](docs/releases/v74.0.0.md): canonical `v74.0.0` Receiz Key, identity artwork, and profile media release archive.
- [docs/releases/v74.0.0-product-truth.md](docs/releases/v74.0.0-product-truth.md): `v74.0.0` product-truth freeze document.
- [docs/releases/v74.0.0-checklist.md](docs/releases/v74.0.0-checklist.md): release-prep checklist and additional gates for `v74.0.0`.
- [docs/releases/v74.0.0-process.md](docs/releases/v74.0.0-process.md): release-prep process for `v74.0.0`.
- [docs/releases/v73.0.0.md](docs/releases/v73.0.0.md): canonical `v73.0.0` ownership, vault, and continuity release archive.
- [docs/releases/v73.0.0-product-truth.md](docs/releases/v73.0.0-product-truth.md): `v73.0.0` product-truth freeze document.
- [docs/releases/v73.0.0-checklist.md](docs/releases/v73.0.0-checklist.md): release-prep checklist and additional gates for `v73.0.0`.
- [docs/releases/v73.0.0-process.md](docs/releases/v73.0.0-process.md): release-prep process for `v73.0.0`.
- [docs/releases/v72.0.0.md](docs/releases/v72.0.0.md): canonical `v72.0.0` stable continuity release archive.
- [docs/releases/v72.0.0-product-truth.md](docs/releases/v72.0.0-product-truth.md): `v72.0.0` product-truth freeze document.
- [docs/releases/v72.0.0-checklist.md](docs/releases/v72.0.0-checklist.md): release-prep checklist and additional gates for `v72.0.0`.
- [docs/releases/v72.0.0-process.md](docs/releases/v72.0.0-process.md): release-prep process for `v72.0.0`.
- [docs/releases/v70.0.0-invariant-register.md](docs/releases/v70.0.0-invariant-register.md): public alpha invariant register carried forward by `v107.0.0`.
- [docs/literal-product-law.md](docs/literal-product-law.md): literal product law carried forward for `v107.0.0`.
- [docs/experience-first-engineering.md](docs/experience-first-engineering.md): experience-first rules for local proof and deterministic state.
- [docs/truthful-speed-invariants.md](docs/truthful-speed-invariants.md): truthful speed and first-paint invariants carried forward for `v107.0.0`.
- [docs/scale-reasoning-invariants.md](docs/scale-reasoning-invariants.md): scale, deterministic chart, closeout, and primitive-preservation law carried forward for `v107.0.0`.
- [docs/verified-history-first-principles.md](docs/verified-history-first-principles.md): append-only history and stronger-known-truth principles.
- [docs/offline-verified-register.md](docs/offline-verified-register.md): local register semantics for verified offline truth.
- [docs/pbi-recovery-receiz-id-binding.md](docs/pbi-recovery-receiz-id-binding.md): PBI/keyfile recovery and Receiz ID binding rules.
- [docs/value-loop-invariants.md](docs/value-loop-invariants.md): canonical Settlement, Reserve, certificate, note, and wire-transfer value-loop invariants.
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

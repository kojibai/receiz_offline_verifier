# Release Notes

## v70.0.0
Release date: 2026-04-24

`v70.0.0` is the first public alpha release cut of Receiz as an end-to-end product system. In this offline verifier repository, the release work is publication of the canonical `v70.0.0` artifacts, product-truth reference documents, growth record, invariant register, and outward version-surface alignment only.

Canonical full release note: [docs/releases/v70.0.0.md](docs/releases/v70.0.0.md)
Product-truth freeze: [docs/releases/v70.0.0-product-truth.md](docs/releases/v70.0.0-product-truth.md)
Release checklist: [docs/releases/v70.0.0-checklist.md](docs/releases/v70.0.0-checklist.md)
Release process: [docs/releases/v70.0.0-process.md](docs/releases/v70.0.0-process.md)
Growth from v60: [docs/releases/v70.0.0-growth-from-v60.md](docs/releases/v70.0.0-growth-from-v60.md)
Invariant register: [docs/releases/v70.0.0-invariant-register.md](docs/releases/v70.0.0-invariant-register.md)
Docs manifest: [docs/releases/v70.0.0-docs-manifest.md](docs/releases/v70.0.0-docs-manifest.md)
Literal product law: [docs/literal-product-law.md](docs/literal-product-law.md)
PBI recovery and Receiz ID binding: [docs/pbi-recovery-receiz-id-binding.md](docs/pbi-recovery-receiz-id-binding.md)

## Highlights
- Receiz ID is the primary everyday login rail; `/signin` is a pass-through route.
- Existing local Receiz ID accounts go directly to the managed profile, and cold devices create a local Receiz ID before continuing to the new managed profile.
- `/<username>` is canonical profile truth; `/<username>?manage=1` is the same profile with owner powers layered on top.
- Settlement remains proof-native value, Reserve remains funded external-conversion value, and notes stay Reserve-only.
- Certificates and shares bridge live proof-native value into buyer-funded Reserve.
- Market sells preserve funded/unfunded causality and patch visible truth from the known trade result.
- Receiz ID, PBI/keyfile proof, route snapshots, wallet graphs, market positions, twin state, and proof bundles are real local truth.
- Stale runtime, stale service-worker, and stale session states recover through local proof or server resync and return to the route the user was on.
- Live twins cannot fall back to a profile picture as an identity substitute.
- Mind trail ZIP downloads package every file with Receiz proof material so the downloaded bundle verifies as a proof bundle.
- Release-governed version surfaces now move together to `v70.0.0` across package metadata, public verifier artifacts, shipped release badges, and current-release documentation.

## Verifier impact
- Current shipped verifier, studio, and settlement entrypoints are marked `v70.0.0`.
- Repository release/docs surfaces now align to `v70.0.0`.
- Root package metadata now resolves cleanly at `v70.0.0`.
- No verifier proof-format or producer payload migration is implied by this release update.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

## Preserved verifier contract
- Trusted-signature success still requires verified `signatureV4`.
- Trusted-signature failure semantics remain fail-closed:
  - invalid present `signatureV4` -> `Trusted signature invalid`
  - unavailable present `signatureV4` -> `Trusted signature unavailable`
  - missing `signatureV4` -> `Trusted signature missing. Expected signatureV4.`
- Effective anchor context remains required (explicit or derivable).
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction/normalization for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical identity derivation and artifact-binding checks.
- Fail-closed verification semantics.

## Operational notes
- Published release surfaces now include the canonical `v70.0.0` release note, product-truth freeze, checklist, process, growth record, invariant register, docs manifest, literal product law, PBI recovery binding reference, and updated docs indexes.
- The `v64.0.0` value-loop invariants remain in force.
- In this offline verifier repository, the release work is documentation, visible version-surface alignment, and package-metadata normalization only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- No new database migrations are introduced by this documentation cut.
- Confirm Receiz ID is the everyday login rail and `/signin` is pass-through only.
- Confirm PBI/keyfile recovery binds back to local Receiz ID truth.
- Confirm `/<username>` and `/<username>?manage=1` share canonical profile truth.
- Confirm Settlement/Reserve causality, Reserve-only notes, certificate funding, and market funded/unfunded sale splits.
- Confirm local proof and deterministic local truth outrank weaker stale network/session payloads.
- Confirm route-preserving stale-runtime and service-worker recovery.
- Confirm live twin identity image locking and proof-sealed mind trail ZIP downloads.
- Update outward release/docs references to `v70.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v70.0.0` release note, product-truth freeze, checklist, process, growth record, invariant register, docs manifest, product-truth reference docs, and updated docs indexes.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.

## v66.0.0
Release date: 2026-04-21

`v66.0.0` is the local proof continuity release. In this offline verifier repository, the release work is publication of the canonical `v66.0.0` artifacts, local-proof reference documents, and outward version-surface alignment only.

Canonical full release note: [docs/releases/v66.0.0.md](docs/releases/v66.0.0.md)
Product-truth freeze: [docs/releases/v66.0.0-product-truth.md](docs/releases/v66.0.0-product-truth.md)
Release checklist: [docs/releases/v66.0.0-checklist.md](docs/releases/v66.0.0-checklist.md)
Release process: [docs/releases/v66.0.0-process.md](docs/releases/v66.0.0-process.md)
Experience-first engineering: [docs/experience-first-engineering.md](docs/experience-first-engineering.md)
Verified history first principles: [docs/verified-history-first-principles.md](docs/verified-history-first-principles.md)
Offline verified register: [docs/offline-verified-register.md](docs/offline-verified-register.md)

## Highlights
- Local proof is now frozen as the default authority when the node already holds stronger verified truth.
- Verified-register-backed proof outranks weaker legacy offline evidence.
- Account surfaces preserve valid local identity roots when the session API is unavailable, anonymous, or weaker.
- Public Twin projection can come from the local twin mind register and local model rail before online streaming is needed.
- Twin mind PNG import requires portable public-key verification instead of server-secret HMAC authority for canonical import.
- World, Explore, Wallet, Market, and tracked-position surfaces preserve known deterministic state unless a transport payload proves a stronger state.
- Service-worker offline persistence is explicit through `x-receiz-offline-persist` response headers for verified snapshots.
- No new database migration is required by the release docs themselves.
- Release-governed version surfaces now move together to `v66.0.0` across package metadata, public verifier artifacts, shipped release badges, and current-release documentation.

## Verifier impact
- Current shipped verifier, studio, and settlement entrypoints are marked `v66.0.0`.
- Repository release/docs surfaces now align to `v66.0.0`.
- Root package metadata now resolves cleanly at `v66.0.0`.
- No verifier proof-format or producer payload migration is implied by this release update.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

## Preserved verifier contract
- Trusted-signature success still requires verified `signatureV4`.
- Trusted-signature failure semantics remain fail-closed:
  - invalid present `signatureV4` -> `Trusted signature invalid`
  - unavailable present `signatureV4` -> `Trusted signature unavailable`
  - missing `signatureV4` -> `Trusted signature missing. Expected signatureV4.`
- Effective anchor context remains required (explicit or derivable).
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction/normalization for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical identity derivation and artifact-binding checks.
- Fail-closed verification semantics.

## Operational notes
- Broader platform validation for `v66.0.0` is captured in the canonical release note, process, and checklist, including local proof authority classification, verified-register precedence, offline identity continuity, deterministic ledger proof bundles, local twin register projection, twin mind public-key import, verified-snapshot persistence, and market/tracked-position local truth preservation.
- Published release surfaces now include the canonical `v66.0.0` release note, the `v66.0.0` product-truth freeze, the `v66.0.0` checklist, the `v66.0.0` process document, and the local-proof reference docs.
- The `v64.0.0` value-loop invariants remain in force.
- In this offline verifier repository, the release work is documentation, visible version-surface alignment, and package-metadata normalization only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- No new database migrations are introduced by this documentation cut.
- Confirm local verified-register proof outranks weaker offline or legacy evidence.
- Confirm wallet transaction receipts verify deterministic ledger proof bundles before treating ledger claims as truth.
- Confirm anonymous or missing network session payloads do not erase locally held identity proof.
- Confirm local twin register projection wins for the visible reply when present.
- Confirm twin mind portable import/export production keys are configured.
- Confirm deterministic public snapshots and private account snapshots opt into explicit offline persistence.
- Confirm wallet, market, tracked-position, World, and Explore surfaces preserve known state until stronger state is proven.
- Update outward release/docs references to `v66.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v66.0.0` release note, product-truth freeze, checklist, process, local-proof reference docs, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.

## v64.0.0
Release date: 2026-04-21

`v64.0.0` is the complete value-loop release. In this offline verifier repository, the release work is publication of the canonical `v64.0.0` artifacts plus outward version-surface alignment only.

Canonical full release note: [docs/releases/v64.0.0.md](docs/releases/v64.0.0.md)
Product-truth freeze: [docs/releases/v64.0.0-product-truth.md](docs/releases/v64.0.0-product-truth.md)
Release checklist: [docs/releases/v64.0.0-checklist.md](docs/releases/v64.0.0-checklist.md)
Release process: [docs/releases/v64.0.0-process.md](docs/releases/v64.0.0-process.md)
Value-loop invariants: [docs/value-loop-invariants.md](docs/value-loop-invariants.md)

## Highlights
- Receiz now documents one closed value loop: create value, hold Settlement, send proof-native value, use Reserve for notes and wire transfers, issue shares into certificates, let buyers fund certificates, and credit sellers only when value is actually funded.
- Settlement is the primary proof-native liquid value lane.
- Reserve is the funded external-conversion lane for notes, sends, positions, and wire transfers.
- Sends and buys deploy funded Reserve first, then Settlement covers the remainder.
- Market sells split into funded Reserve and unfunded Settlement.
- Settlement shares and certificates bridge Settlement to buyer-funded Reserve.
- Certificate issue locks value, and funded certificate sale credits the seller.
- No new value state or database migration is added by this documentation cut.
- Release-governed version surfaces now move together to `v64.0.0` across package metadata, public verifier artifacts, shipped release badges, and current-release documentation.

## Verifier impact
- Current shipped verifier, studio, and settlement entrypoints are marked `v64.0.0`.
- Repository release/docs surfaces now align to `v64.0.0`.
- Root package metadata now resolves cleanly at `v64.0.0`.
- No verifier proof-format or producer payload migration is implied by this release update.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

## Preserved verifier contract
- Trusted-signature success still requires verified `signatureV4`.
- Trusted-signature failure semantics remain fail-closed:
  - invalid present `signatureV4` -> `Trusted signature invalid`
  - unavailable present `signatureV4` -> `Trusted signature unavailable`
  - missing `signatureV4` -> `Trusted signature missing. Expected signatureV4.`
- Effective anchor context remains required (explicit or derivable).
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction/normalization for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical identity derivation and artifact-binding checks.
- Fail-closed verification semantics.

## Operational notes
- Broader platform validation for `v64.0.0` is captured in the canonical release note, process, and checklist, including wallet account-lane truth, account quote math, Reserve-first send/buy execution, market funded/unfunded sale splits, certificate funding causality, Reserve-only note issuance, Reserve-funded wire transfer, and value-state metadata preservation.
- Published release surfaces now include the canonical `v64.0.0` release note, the `v64.0.0` product-truth freeze, the `v64.0.0` checklist, the `v64.0.0` process document, and the canonical value-loop invariants.
- In this offline verifier repository, the release work is documentation, visible version-surface alignment, and package-metadata normalization only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.
- The broader product baseline referenced by this release is the `v63.2.0` value-state release; this repository advances its public release surface from `v61.0.0` to `v64.0.0`.

## Migration checklist
- No new database migrations are introduced by this documentation cut.
- No new value state is added by `v64.0.0`.
- Confirm wallet leads with Settlement balance, USD first, with phi equivalent underneath where phi context is shown.
- Confirm Reserve appears beneath Settlement as the funded external-conversion lane.
- Confirm Settlement and Reserve popover charts use account-lane truth and account quote math.
- Confirm Market wallet panel and portfolio chart use real phi conversion math through the wallet account quote.
- Confirm notes stay Reserve-only.
- Confirm wire transfer draws from Reserve.
- Confirm sends and buys deploy Reserve before Settlement remainder.
- Confirm market sells split funded Reserve and unfunded Settlement.
- Confirm certificate issue locks value and funded certificate sale credits the seller only when funded.
- Update outward release/docs references to `v64.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v64.0.0` release note, product-truth freeze, checklist, process, invariants, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.

## v61.0.0
Release date: 2026-04-19

`v61.0.0` is the governed historical-continuity and runtime-discipline release on top of `v60.0.0`. In this offline verifier repository, the release work is publication of the canonical `v61.0.0` artifacts plus outward version-surface alignment only.

Canonical full release note: [docs/releases/v61.0.0.md](docs/releases/v61.0.0.md)
Product-truth freeze: [docs/releases/v61.0.0-product-truth.md](docs/releases/v61.0.0-product-truth.md)
Release checklist: [docs/releases/v61.0.0-checklist.md](docs/releases/v61.0.0-checklist.md)

## Highlights
- Pre-v4 receiz now sits under governed historical continuity: frozen cohort membership, sealed governance artifact support, explicit `Historical` trust presentation, and historical package delivery that preserves original bytes.
- Holder-aware public market witness truth from `v60.1.0` remains the floor, and market exits now stay on deterministic internal routes through the shared stable client-navigation path.
- Settled home and profile twin shells keep hidden warming hidden and defer richer runtime promotion until explicit activation, including on compact touch devices.
- The release line now publishes its operating standards around experience-first engineering, expensive truth, fast entry, and governed historical continuity as part of repository truth.
- No new database migrations are added beyond the `v60.0.0` baseline.
- Release-governed version surfaces now move together to `v61.0.0` across package metadata, public verifier artifacts, shipped release badges, and current-release documentation.

## Verifier impact
- Current shipped verifier, studio, and settlement entrypoints are marked `v61.0.0`.
- Repository release/docs surfaces now align to `v61.0.0`.
- Root package metadata now resolves cleanly at `v61.0.0`.
- No verifier proof-format or producer payload migration is implied by this release update.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

## Preserved verifier contract
- Trusted-signature success still requires verified `signatureV4`.
- Trusted-signature failure semantics remain fail-closed:
  - invalid present `signatureV4` -> `Trusted signature invalid`
  - unavailable present `signatureV4` -> `Trusted signature unavailable`
  - missing `signatureV4` -> `Trusted signature missing. Expected signatureV4.`
- Effective anchor context remains required (explicit or derivable).
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction/normalization for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical identity derivation and artifact-binding checks.
- Fail-closed verification semantics.

## Operational notes
- Broader platform validation for `v61.0.0` is captured in the canonical release note and checklist, including historical cohort governance, deterministic market exit continuity, settled-shell runtime discipline, compact verified-player control tightening, and release-surface lockstep.
- Published release surfaces now include the canonical `v61.0.0` release note, the `v61.0.0` product-truth freeze, and the `v61.0.0` checklist.
- In this offline verifier repository, the release work is documentation, visible version-surface alignment, and package-metadata normalization only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.
- `v60.1.0` has a dedicated release note in the repository, but there is no dedicated `v60.2.0` through `v60.4.x` public release note or matching repository tag, so the canonical `v61.0.0` note records the full post-`v60.0.0` product delta in one governed release record.

## Migration checklist
- No new database migrations beyond the `v60.0.0` baseline.
- Confirm public market witness timing and holder count still derive from real holder activity, and deterministic market exits stay on the stable client-navigation path for Receiz routes.
- Confirm home and profile twin shells do not visually remount or upgrade after settlement, compact touch devices keep full twin hydration on-demand, and the home dock only promotes the full runtime after explicit interaction.
- Confirm the verified-player audio control glass stays compact and legible on small layouts.
- Confirm historical pre-v4 records render as `Historical` rather than being silently treated as current `Verified` or generic warnings.
- Confirm historical downloads preserve raw bytes and include the sealed governance bundle instead of rewriting the original artifact identity.
- Confirm the pinned historical cohort artifact and payload stay byte-stable, and no public/private cohort boundary drift has occurred.
- Update outward release/docs references to `v61.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v61.0.0` release note, product-truth freeze, checklist, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.

## v60.1.0
Release date: 2026-04-18

`v60.1.0` is the continuity-and-market-proof release on top of `v60.0.0`. In this offline verifier repository, the release work is publication of the canonical `v60.1.0` artifacts plus outward version-surface alignment only.

Canonical full release note: [docs/releases/v60.1.0.md](docs/releases/v60.1.0.md)
Product-truth freeze: [docs/releases/v60.1.0-product-truth.md](docs/releases/v60.1.0-product-truth.md)
Release checklist: [docs/releases/v60.1.0-checklist.md](docs/releases/v60.1.0-checklist.md)

## Highlights
- Public profile asset markets now derive holder count and latest witness timing from live public positions and buy activity.
- The market desk, chart dock, and public market metadata surfaces are tighter and more legible on compact devices, especially in public and signed-out flows.
- Home and profile twin shells keep background preload hidden until explicit open intent, preventing late visible promotion after settlement.
- Public profile route assembly is lighter, and `MarketValuePill` sigils now use deterministic surface-scoped IDs to avoid hydration drift.
- No new database migrations are added beyond the `v60.0.0` baseline.
- Release-governed version surfaces now move together to `v60.1.0` across package metadata, public verifier artifacts, shipped release badges, and current-release documentation.

## Verifier impact
- Current shipped verifier, studio, and settlement entrypoints are marked `v60.1.0`.
- Repository release/docs surfaces now align to `v60.1.0`.
- Root package metadata now resolves cleanly at `v60.1.0`.
- No verifier proof-format or producer payload migration is implied by this release update.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

## Preserved verifier contract
- Trusted-signature success still requires verified `signatureV4`.
- Trusted-signature failure semantics remain fail-closed:
  - invalid present `signatureV4` -> `Trusted signature invalid`
  - unavailable present `signatureV4` -> `Trusted signature unavailable`
  - missing `signatureV4` -> `Trusted signature missing. Expected signatureV4.`
- Effective anchor context remains required (explicit or derivable).
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction/normalization for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical identity derivation and artifact-binding checks.
- Fail-closed verification semantics.

## Operational notes
- Broader platform validation for `v60.1.0` is captured in the canonical release note and checklist, including holder-aware public market witness truth, compact market-desk polish, hidden-only twin preload, profile-route continuity, deterministic sigil hydration, and release-surface lockstep.
- Published release surfaces now include the canonical `v60.1.0` release note, the `v60.1.0` product-truth freeze, and the `v60.1.0` checklist.
- In this offline verifier repository, the release work is documentation, visible version-surface alignment, and package-metadata normalization only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.
- There is no dedicated `v60.0.1` release note or tag in the repository, so the canonical `v60.1.0` note records the full post-`v60.0.0` product delta in one governed release record.

## Migration checklist
- No new database migrations beyond the `v60.0.0` baseline.
- Confirm public profile asset markets show holder count and latest witness timing from real public holder activity.
- Confirm market buy continuation still survives passkey and funding fallback, and sell stays hidden when the viewer has no position.
- Confirm home and profile twin shells do not visually remount or upgrade after the page has already settled.
- Confirm opening the twin explicitly still promotes the full twin module cleanly.
- Confirm profile, player, artifact, and home market pills render without hydration ID drift.
- Update outward release/docs references to `v60.1.0`.
- Deploy updated `site/` artifacts.
- Publish the `v60.1.0` release note, product-truth freeze, checklist, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

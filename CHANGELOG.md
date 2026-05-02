# Changelog

All notable changes to this project will be documented in this file.

## [v75.0.0] - 2026-05-02

### Changed
- Advanced the current release/documentation surface from `v74.0.0` to `v75.0.0`.
- Updated canonical root package metadata and set `package.json` to `v75.0.0`.
- Published the canonical `v75.0.0` local proof, backup sign-in, market continuity, and Explore release artifacts:
  - `docs/releases/v75.0.0.md`
  - `docs/releases/v75.0.0-product-truth.md`
  - `docs/releases/v75.0.0-checklist.md`
  - `docs/releases/v75.0.0-process.md`
  - `docs/releases/v75.0.0-hpl-continuity-review.md`
  - `docs/releases/v75.0.0-receiz-identity-continuity-one-pager.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v75.0.0`.
- Aligned public release framing around local-first Receiz ID proof, durable account bindings, Identity Record / Identity Seal / Receiz Key restore parity, old-browser backup sign-in, restored-account account / wallet / upgrade authority, deterministic profile identity downloads, Plans / Upgrade parity, market snapshot continuity, stable market navigation, and Explore mobile packaging.
- No new database migration is introduced by this documentation cut.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v75.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.
- The `v70.0.0` public alpha law, `v74.0.0` Receiz Key / identity-artwork baseline, and `v64.0.0` value-loop invariants remain in force.

## [v74.0.0] - 2026-04-30

### Changed
- Advanced the current release/documentation surface from `v73.0.0` to `v74.0.0`.
- Updated canonical root package metadata and set `package.json` to `v74.0.0`.
- Published the canonical `v74.0.0` Receiz Key, identity artwork, and profile media release artifacts:
  - `docs/releases/v74.0.0.md`
  - `docs/releases/v74.0.0-product-truth.md`
  - `docs/releases/v74.0.0-checklist.md`
  - `docs/releases/v74.0.0-process.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v74.0.0`.
- Aligned public release framing around sovereign Receiz Key restore, account key controls, deterministic profile identity artwork, PBI-signed identity artifacts, stable profile creation timestamps, long-form profile originals, attached-link preservation, video playback derivatives, sold-position continuity, and portable profile state import.
- No new database migration is introduced by this documentation cut.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v74.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.
- The `v70.0.0` public alpha law, `v73.0.0` ownership/vault continuity baseline, and `v64.0.0` value-loop invariants remain in force.

## [v73.0.0] - 2026-04-29

### Changed
- Advanced the current release/documentation surface from `v70.0.0` to `v73.0.0` while adding the missing `v72.0.0` release archive.
- Updated canonical root package metadata and set `package.json` to `v73.0.0`.
- Published the canonical `v73.0.0` ownership, vault, and continuity release artifacts:
  - `docs/releases/v73.0.0.md`
  - `docs/releases/v73.0.0-product-truth.md`
  - `docs/releases/v73.0.0-checklist.md`
  - `docs/releases/v73.0.0-process.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v73.0.0`.
- Aligned public release framing around business account ownership, receipt provenance, vault portability, account brain proof detail, Offline Verifier authority navigation, profile/account continuity, and bounded world twin fit contracts.
- No new database migration is introduced by this documentation cut.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v73.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.
- The `v70.0.0` public alpha law, `v72.0.0` stable continuity locks, and `v64.0.0` value-loop invariants remain in force.

## [v72.0.0] - 2026-04-28

### Changed
- Added the canonical `v72.0.0` stable continuity release archive:
  - `docs/releases/v72.0.0.md`
  - `docs/releases/v72.0.0-product-truth.md`
  - `docs/releases/v72.0.0-checklist.md`
  - `docs/releases/v72.0.0-process.md`
- Aligned release framing around actor-scoped route warmth clearing on account switch, viewer-user-id preservation for market/private wallet state, signed-in profile first-paint parity, useful hydration repair, and compact mobile Live Twin face-lock overlay fit.
- Recorded that package metadata, service-worker defaults, public version badges, verifier surfaces, and release docs moved together to `v72.0.0` at the stable continuity cut.
- No verifier proof-format or producer payload migration is implied by this release archive.

### Kept
- The `v70.0.0` public alpha law remains intact.
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Fail-closed verification model.
- The `v64.0.0` value-loop invariants remain in force.

## [v70.0.0] - 2026-04-24

### Changed
- Advanced the current release/documentation surface from `v66.0.0` to `v70.0.0`.
- Updated canonical root package metadata and set `package.json` to `v70.0.0`.
- Published the canonical `v70.0.0` public alpha release artifacts:
  - `docs/releases/v70.0.0.md`
  - `docs/releases/v70.0.0-product-truth.md`
  - `docs/releases/v70.0.0-checklist.md`
  - `docs/releases/v70.0.0-process.md`
  - `docs/releases/v70.0.0-growth-from-v60.md`
  - `docs/releases/v70.0.0-invariant-register.md`
  - `docs/releases/v70.0.0-docs-manifest.md`
- Published product-truth reference documents:
  - `docs/literal-product-law.md`
  - `docs/pbi-recovery-receiz-id-binding.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v70.0.0`.
- Aligned public release framing around one-click Receiz ID entry, canonical `/<username>` profile truth, complete Settlement/Reserve value-loop causality, local-first/server-always recovery, route-preserving stale-runtime recovery, proof-sealed world trail bundles, live twin identity locking, and the `v70.0.0` invariant register.
- No new database migration is introduced by this documentation cut.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v70.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.
- The `v64.0.0` value-loop invariants remain in force.

## [v66.0.0] - 2026-04-21

### Changed
- Advanced the current release/documentation surface from `v64.0.0` to `v66.0.0`.
- Updated canonical root package metadata and set `package.json` to `v66.0.0`.
- Published the canonical `v66.0.0` release note, product-truth freeze, checklist, process, and local-proof reference documents:
  - `docs/experience-first-engineering.md`
  - `docs/verified-history-first-principles.md`
  - `docs/offline-verified-register.md`
  - `docs/releases/v66.0.0.md`
  - `docs/releases/v66.0.0-product-truth.md`
  - `docs/releases/v66.0.0-checklist.md`
  - `docs/releases/v66.0.0-process.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v66.0.0`.
- Aligned public release framing around local proof continuity: local identity roots, verified-register-backed proof, deterministic state, append-only history, compact memory, sync as propagation, service-worker verified snapshots, local twin register projection, and stronger-known-state preservation.
- No new database migration is introduced by this documentation cut.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v66.0.0`.

### Kept
- The `v64.0.0` value-loop invariants remain in force.
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v64.0.0] - 2026-04-21

### Changed
- Advanced the current release/documentation surface from `v61.0.0` to `v64.0.0`.
- Updated canonical root package metadata and set `package.json` to `v64.0.0`.
- Published the canonical `v64.0.0` release note, product-truth freeze, checklist, process, and value-loop invariant documents:
  - `docs/value-loop-invariants.md`
  - `docs/releases/v64.0.0.md`
  - `docs/releases/v64.0.0-product-truth.md`
  - `docs/releases/v64.0.0-checklist.md`
  - `docs/releases/v64.0.0-process.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v64.0.0`.
- Aligned public release framing around the complete value loop: Settlement as proof-native liquid value, funded Reserve as the external-conversion lane, Reserve-only notes and wire transfer, Reserve-first sends and buys, funded/unfunded market sale splits, buyer-funded certificates, and metadata-preserving value movement.
- No new value state or database migration is introduced by this documentation cut.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v64.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v61.0.0] - 2026-04-19

### Changed
- Advanced the current release/documentation surface from `v60.1.0` to `v61.0.0`.
- Updated canonical root package metadata and set `package.json` to `v61.0.0`.
- Published the canonical `v61.0.0` release note, product-truth freeze, and checklist documents:
  - `docs/releases/v61.0.0.md`
  - `docs/releases/v61.0.0-product-truth.md`
  - `docs/releases/v61.0.0-checklist.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v61.0.0`.
- Aligned public release framing around governed historical continuity for pre-v4 receiz, deterministic market exit continuity, stricter settled-shell runtime boundaries, published operating standards, and release-surface lockstep.
- No new database migrations are introduced beyond the `v60.0.0` baseline.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v61.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v60.1.0] - 2026-04-18

### Changed
- Advanced the current release/documentation surface from `v60.0.0` to `v60.1.0`.
- Updated canonical root package metadata and set `package.json` to `v60.1.0`.
- Published the canonical `v60.1.0` release note, product-truth freeze, and checklist documents:
  - `docs/releases/v60.1.0.md`
  - `docs/releases/v60.1.0-product-truth.md`
  - `docs/releases/v60.1.0-checklist.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v60.1.0`.
- Aligned public release framing around holder-aware public market witness truth, compact market-desk polish, twin shell continuity without late visible promotion, lighter public-profile route assembly, deterministic market sigil hydration, and release-surface lockstep.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v60.1.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v60.0.0] - 2026-04-18

### Changed
- Advanced the current release/documentation surface from `v58.0.0` to `v60.0.0`.
- Updated canonical root package metadata and set `package.json` to `v60.0.0`.
- Published the canonical `v60.0.0` release note, product-truth freeze, and checklist documents:
  - `docs/releases/v60.0.0.md`
  - `docs/releases/v60.0.0-product-truth.md`
  - `docs/releases/v60.0.0-checklist.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v60.0.0`.
- Aligned public release framing around live front-door proof and twin presentation, canonical original upload/download authority, explicit twin-portrait publishing, compact wallet/certificate framing, schema hardening, and release-surface lockstep.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v60.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v58.0.0] - 2026-04-17

### Changed
- Advanced the current release/documentation surface from `v57.0.0` to `v58.0.0`.
- Updated canonical root package metadata and set `package.json` to `v58.0.0`.
- Published the canonical `v58.0.0` release note, product-truth freeze, and checklist documents:
  - `docs/releases/v58.0.0.md`
  - `docs/releases/v58.0.0-product-truth.md`
  - `docs/releases/v58.0.0-checklist.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v58.0.0`.
- Aligned public release framing around authoritative signed-in market first paint, shared wallet/chart-buy hydration, deterministic lean market transport, live tracked-position semantics, and release-surface lockstep.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v58.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v57.0.0] - 2026-04-17

### Changed
- Advanced the current release/documentation surface from `v56.0.0` to `v57.0.0`.
- Updated canonical root package metadata and set `package.json` to `v57.0.0`.
- Published the canonical `v57.0.0` release note, product-truth freeze, and checklist documents:
  - `docs/releases/v57.0.0.md`
  - `docs/releases/v57.0.0-product-truth.md`
  - `docs/releases/v57.0.0-checklist.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v57.0.0`.
- Aligned public release framing around canonical managed-owner routing, world/market fast-entry truth reuse, share-certificate live custody/history, coherent market balances and inventory, and market-conformance boundary locking.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v57.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v56.0.0] - 2026-04-17

### Changed
- Advanced the current release/documentation surface from `v55.1.0` to `v56.0.0`.
- Restored canonical root package metadata and set `package.json` to `v56.0.0`.
- Published the canonical `v56.0.0` release note, product-truth freeze, and checklist documents:
  - `docs/releases/v56.0.0.md`
  - `docs/releases/v56.0.0-product-truth.md`
  - `docs/releases/v56.0.0-checklist.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v56.0.0`.
- Aligned public release framing around lockstep version surfaces, guarded logged-in world hydration, entitlement-aware concierge polling, and fresh-account analytics schema-drift tolerance.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v56.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v55.1.0] - 2026-04-16

### Changed
- Advanced the current release/documentation surface from `v55.0.0` to `v55.1.0`.
- Published the canonical `v55.1.0` release note, product-truth freeze, and checklist documents:
  - `docs/releases/v55.1.0.md`
  - `docs/releases/v55.1.0-product-truth.md`
  - `docs/releases/v55.1.0-checklist.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v55.1.0`.
- Aligned public release framing around reusable profile truth, deterministic route handoff, passkey-first trade continuation, exact-USD non-entitled settlement, and tighter live-player continuity.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v55.1.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v55.0.0] - 2026-04-15

### Changed
- Advanced the current release/documentation surface from `v54.0.0` to `v55.0.0`.
- Published the canonical `v55.0.0` release note and product-truth freeze documents:
  - `docs/releases/v55.0.0.md`
  - `docs/releases/v55.0.0-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v55.0.0`.
- Aligned public release framing around guided owner setup in `/profile`, sealed profile avatar and cover media, explicit world-twin freshness across route handoffs, shared stable-route market and live-player continuity, bounded prediction-book hydration, and canonical performance route grouping.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v55.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v54.0.0] - 2026-04-15

### Changed
- Advanced the current release/documentation surface from `v53.0.0` to `v54.0.0`.
- Published the canonical `v54.0.0` release note and product-truth freeze documents:
  - `docs/releases/v54.0.0.md`
  - `docs/releases/v54.0.0-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v54.0.0`.
- Aligned public release framing around the broader product map, the dedicated Business surface, the admin command deck, Stripe-to-ledger wallet transparency, shared session bootstrap, deterministic market-preview first paint, world-twin continuity, and deterministic Kai sigil SVG serialization.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v54.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v53.0.0] - 2026-04-14

### Changed
- Advanced the current release/documentation surface from `v52.5.0` to `v53.0.0`.
- Published the canonical `v53.0.0` release note and product-truth freeze documents:
  - `docs/releases/v53.0.0.md`
  - `docs/releases/v53.0.0-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v53.0.0`.
- Aligned public release framing around public market data routes, persisted conformance history, stricter prediction resolution, touch-safe market/viewer/playback surfaces, stronger proof and market metadata, account-owned passkey attachment, first-class Enterprise handling, simpler beginner-first product framing, and public-key-based release attestation.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v53.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v52.5.0] - 2026-04-13

### Changed
- Advanced the current release/documentation surface from `v52.0.0` to `v52.5.0`.
- Published the canonical `v52.5.0` release note and product-truth freeze documents:
  - `docs/releases/v52.5.0.md`
  - `docs/releases/v52.5.0-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v52.5.0`.
- Aligned public release framing around deterministic quote math, replayable quote evidence, bounded spread/pressure behavior, partial share-certificate custody, first-class market conformance, lighter premium runtime, contextual market media, inline launch, and official market share surfaces.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v52.5.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v52.0.0] - 2026-04-13

### Changed
- Advanced the current release/documentation surface from `v51.0.0` to `v52.0.0`.
- Published the canonical `v52.0.0` release note and product-truth freeze documents:
  - `docs/releases/v52.0.0.md`
  - `docs/releases/v52.0.0-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v52.0.0`.
- Aligned public release framing around deterministic market execution, bounded quote pressure, replayable quote evidence, partial share-certificate custody, first-class market conformance, and lighter premium runtime paths.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v52.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v51.0.0] - 2026-04-12

### Changed
- Advanced the current release/documentation surface from `v50.0.0` to `v51.0.0`.
- Published the canonical `v51.0.0` release note and product-truth freeze documents:
  - `docs/releases/v51.0.0.md`
  - `docs/releases/v51.0.0-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v51.0.0`.
- Aligned public release framing around the Free -> Authorship -> Business -> Automation -> Enterprise ladder, stable billing-key mapping, clearer entitlement copy, and carried-forward Contacts/world truth hardening.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v51.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v50.0.0] - 2026-04-11

### Changed
- Advanced the current release/documentation surface from `v48.0.0` to `v50.0.0`.
- Published the canonical `v50.0.0` release note and product-truth freeze documents:
  - `docs/releases/v50.0.0.md`
  - `docs/releases/v50.0.0-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v50.0.0`.
- Aligned public release framing around the world revenue operating system, durable contacts CRM, live campaign continuity, truthful rail readiness, provider-backed enrichment, reply handling, and revenue attribution.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v50.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v48.0.0] - 2026-04-10

### Changed
- Advanced the current release/documentation surface from `v47.8.0` to `v48.0.0`.
- Published the canonical `v48.0.0` release note and product-truth freeze documents:
  - `docs/releases/v48.0.0.md`
  - `docs/releases/v48.0.0-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v48.0.0`.
- Aligned public release framing around the operator-first contacts shell, durable `linked_user_id` merge upgrades, cleaner world atlas layering, and locked release-version surfaces.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v48.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v47.8.0] - 2026-04-10

### Changed
- Advanced the current release/documentation surface from `v47.7.0` to `v47.8.0`.
- Published the canonical `v47.8.0` release note and product-truth freeze documents:
  - `docs/releases/v47.8.0.md`
  - `docs/releases/v47.8.0-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v47.8.0`.
- Aligned public release framing around guest-contact materialization, public-twin and calendar continuity, mobile identity visibility, guest-thread follow-up continuity, and locked release-version surfaces.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v47.8.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v47.7.0] - 2026-04-09

### Changed
- Advanced the current release/documentation surface from `v47.6.0` to `v47.7.0`.
- Published the canonical `v47.7.0` release note and product-truth freeze documents:
  - `docs/releases/v47.7.0.md`
  - `docs/releases/v47.7.0-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v47.7.0`.
- Aligned public release framing around durable contacts persistence, historical relationship backfill, portable contact import/export, live per-person timelines, and locked release-version surfaces.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v47.7.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v47.6.0] - 2026-04-09

### Changed
- Advanced the current release/documentation surface from `v47.5.0` to `v47.6.0`.
- Published the canonical `v47.6.0` release note and product-truth freeze documents:
  - `docs/releases/v47.6.0.md`
  - `docs/releases/v47.6.0-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v47.6.0`.
- Aligned public release framing around the world atlas shell, concierge twin-run task tracking, standalone contacts operations, truthful outreach persistence, and checkout-completion verification.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v47.6.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v47.5.0] - 2026-04-09

### Changed
- Advanced the current release/documentation surface from `v47.4.0` to `v47.5.0`.
- Published the canonical `v47.5.0` release note and product-truth freeze documents:
  - `docs/releases/v47.5.0.md`
  - `docs/releases/v47.5.0-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v47.5.0`.
- Aligned public release framing around world revenue-operations surfaces, including explicit revenue skills, outbound opportunity lanes, owner-side playbooks, proof-first kits, action-card embeds, booking confirmation packs, and post-call closeout rails.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v47.5.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v47.4.0] - 2026-04-09

### Changed
- Advanced the current release/documentation surface from `v47.3.0` to `v47.4.0`.
- Published the canonical `v47.4.0` release note and product-truth freeze documents:
  - `docs/releases/v47.4.0.md`
  - `docs/releases/v47.4.0-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v47.4.0`.
- Aligned public release framing around Business entitlement continuity in native session flows, Receiz-native scheduling surfaces, Receiz-hosted embedded checkout, and locked release-version surfaces.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v47.4.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v47.3.0] - 2026-04-09

### Changed
- Advanced the current release/documentation surface from `v47.2.0` to `v47.3.0`.
- Published the canonical `v47.3.0` release note and product-truth freeze documents:
  - `docs/releases/v47.3.0.md`
  - `docs/releases/v47.3.0-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v47.3.0`.
- Aligned public release framing around custom-domain auth continuity, embedded-browser email-first sign-in fallback, trusted-host custom-domain hero media behavior, and locked release-version surfaces.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v47.3.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v47.2.0] - 2026-04-09

### Changed
- Advanced the current release/documentation surface from `v47.0.1` to `v47.2.0`.
- Published the canonical `v47.2.0` release note and product-truth freeze documents:
  - `docs/releases/v47.2.0.md`
  - `docs/releases/v47.2.0-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v47.2.0`.
- Aligned public release framing around Business custom-domain root routing, copy-friendly DNS setup, and locked release-version surfaces.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v47.2.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v47.0.1] - 2026-04-05

### Changed
- Advanced the current release/documentation surface from `v47.0.0` to `v47.0.1`.
- Published the canonical `v47.0.1` release note and product-truth freeze documents:
  - `docs/releases/v47.0.1.md`
  - `docs/releases/v47.0.1-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v47.0.1`.
- Aligned public release framing around profile composer upload stability, storage-backed sealed video resolution, preload discipline, and locked release-version surfaces.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v47.0.1`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v47.0.0] - 2026-04-05

### Changed
- Advanced the current release/documentation surface from `v46.0.0` to `v47.0.0`.
- Published the canonical `v47.0.0` release note and product-truth freeze documents:
  - `docs/releases/v47.0.0.md`
  - `docs/releases/v47.0.0-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v47`.
- Aligned public release framing around first-class original/document delivery, stronger verified-player continuity and sharing, harder-to-break storage/media correctness, more authority-aware Public Twin/world embodiment, and explicit release-governed version truth.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v47.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v46.0.0] - 2026-03-30

### Changed
- Advanced the current release/documentation surface from `v45.0.0` to `v46.0.0`.
- Published the canonical `v46.0.0` release note and product-truth freeze documents:
  - `docs/releases/v46.0.0.md`
  - `docs/releases/v46.0.0-product-truth.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v46`.
- Aligned public release framing around locked original/document viewing, a stronger verified-original player, authority-aware Public Twin photoreal embodiment, stricter media-delivery correctness, and an explicit release-freeze surface.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v46.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v45.0.0] - 2026-03-28

### Changed
- Advanced the current release/documentation surface from `v40.0.0` to `v45.0.0`.
- Published the canonical `v45.0.0` release note:
  - `docs/releases/v45.0.0.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v45`.
- Aligned public release framing around the production Public Twin and World consolidation release, including photoreal live stages, owned-runtime rendering, deterministic proof/trail bundles, and hardened calendar/booking flows.
- Updated shipped version markers in published verifier, studio, and settlement entrypoints to `v45.0.0`.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v40.0.0] - 2026-03-27

### Changed
- Advanced the current release/documentation surface from `v30.0.0` to `v40.0.0`.
- Published the canonical `v40.0.0` release note:
  - `docs/releases/v40.0.0.md`
- Updated current-release references in repository docs and verifier-contract docs to point at `v40`.
- Aligned public release framing around hardened trust/signing, deeper offline proof and studio operation, wallet/settlement controls, richer verified artifact delivery, stronger admin/business rails, and the world runtime stack.

### Kept
- File-first verification remains authoritative and deterministic.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v30.0.0] - 2026-03-16

### Changed
- Verifier UI version marker from `v29.0.0` to `v30.0.0`.
- Applied the same footer release marker update in both entrypoints:
  - `site/index.html`
  - `apps/offline-verifier.html`
- Updated repository release and verifier-contract documentation references from `v29` to `v30`.
- Published the `v30.0.0` release note and added public standards/governance docs:
  - `docs/releases/v30.0.0.md`
  - `docs/receiz-standard-v1.md`
  - `docs/deterministic-surfaces.md`
  - `docs/presencebound-canonical-realm.md`
  - `docs/governance/`
- Reframed governance evidence artifacts as public summary material and removed low-value operational detail from the key-rotation example.

### Kept
- No verifier runtime or policy logic changed relative to `v29.0.0`.
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v29.0.0] - 2026-03-12

### Changed
- Verifier UI version marker from `v28.0.0` to `v29.0.0`.
- Applied the same footer release marker update in both entrypoints:
  - `site/index.html`
  - `apps/offline-verifier.html`
- Updated release and operations documentation references from `v28` to `v29`.
- No verifier runtime or policy logic changes were introduced between `v28.0.0` and `v29.0.0`.

### Kept
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v27.0.0] - 2026-03-08

### Changed
- Verifier UI version marker from `v26.0.0` to `v27.0.0`.
- Applied the same footer release marker update in both entrypoints:
  - `site/index.html`
  - `apps/offline-verifier.html`
- Updated release and operations documentation references from `v26` to `v27`.
- No verifier runtime or policy logic changes were introduced between `v26.0.0` and `v27.0.0`.

### Kept
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v26.0.0] - 2026-03-06

### Changed
- Verifier UI version marker from `v24.0.0` to `v26.0.0`.
- Applied the same footer release marker update in both entrypoints:
  - `site/index.html`
  - `apps/offline-verifier.html`
- Updated release and operations documentation references from `v24` to `v26`.
- No verifier runtime or policy logic changes were introduced between `v24.0.0` and `v26.0.0`.

### Kept
- Trusted-signature gating remains `signatureV4`-required for verified outcomes.
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v24.0.0] - 2026-03-05

### Added
- Signature v4 root key pin set expanded with `receiz.v4.prod.2026-03-02` in shipped entrypoints.

### Changed
- Trusted-signature gating now requires verified `signatureV4` for verified outcomes.
- `signatureV3` no longer satisfies trusted-signature requirements for final verification.
- Signature v3 verification runtime path and v3 key-pin override usage were removed from active verifier logic.
- Trusted-signature v4 failure handling is explicit and fail-closed:
  - any present invalid `signatureV4` payload hard fails (`Trusted signature invalid`)
  - unavailable present `signatureV4` hard fails (`Trusted signature unavailable`)
  - missing `signatureV4` hard fails (`Trusted signature missing. Expected signatureV4.`)
- Verifier UI version marker from `v23.0.0` to `v24.0.0`.
- Applied the same footer release marker update in both entrypoints:
  - `site/index.html`
  - `apps/offline-verifier.html`
- Updated release and operations documentation references from `v23` to `v24`.

### Kept
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v23.0.0] - 2026-03-05

### Added
- Offline `signatureV4` verification path with rooted device-certificate validation.
- Signature v4 root key pinning with static defaults and optional runtime override (`__RECEIZ_SIGNATURE_V4_ROOT_PUBLIC_KEYS_PINNED__`).

### Changed
- Trusted-signature gating now accepts either verified `signatureV3` or verified `signatureV4`.
- Trusted-signature evaluation precedence is now explicit:
  - any present invalid signature path hard fails (`Trusted signature invalid`)
  - unavailable signature paths are warnings only when another signature path verifies
  - when no signature path verifies, unavailable/missing trusted signatures hard fail
- Verifier UI version marker from `v22.0.0` to `v23.0.0`.
- Applied the same footer release marker update in both entrypoints:
  - `site/index.html`
  - `apps/offline-verifier.html`
- Updated release and operations documentation references from `v22` to `v23`.

### Kept
- Effective anchor context remains required for verified outcomes.
- Groth16 fields remain required and only real `g16:` proof payloads are accepted.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v22.0.0] - 2026-03-05

### Changed
- Verifier UI version marker from `v21.0.0` to `v22.0.0`.
- Applied the same footer release marker update in both entrypoints:
  - `site/index.html`
  - `apps/offline-verifier.html`
- Updated release and operations documentation references from `v21` to `v22`.

### Kept
- Verification semantics from `v21` (required `signatureV3`, required effective anchor context, required real `g16:` Groth16 proof artifacts).
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v21.0.0] - 2026-03-04

### Changed
- Signature verification is now required for a verified outcome: `signatureV3` states `missing` and `unavailable` now hard fail.
- Anchor context is now required; verification fails when neither explicit nor derivable anchor data is available.
- Groth16 verification is now strict real-proof only: missing Groth16 fields fail, and non-`g16:` proofs are rejected.
- Verifier UI version marker from `v20.0.0` to `v21.0.0`.

### Kept
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Canonical field validation and artifact binding checks.
- Fail-closed verification model.

## [v20.0.0] - 2026-03-04

### Changed
- Added a footer download action (`Download Offline Verifier`) linked to `/offline-verifier.html`.
- Applied footer action styling and markup updates to both `site/index.html` and `apps/offline-verifier.html`.
- Verifier UI version marker from `v19.0.0` to `v20.0.0`.

### Kept
- Verification semantics, proof extraction rules, and fail-closed behavior from `v19`.
- Signature v3 pulse-based lifecycle policy and key pinning behavior from `v19`.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Deterministic and real Groth16 verification modes.

## [v19.0.0] - 2026-03-03

### Changed
- Signature v3 key lifecycle policy now evaluates bundle `kaiPulseEternal` instead of signature timestamp windows.
- Pinned key lifecycle metadata now uses pulse fields: `activeFromPulse` / `retiredAtPulse`.
- Removed Signature v3 verifier-clock future-skew gating (`signedAtMs` is no longer used as an acceptance-time policy guard).
- Retired key handling now reports bundle-pulse policy outcomes (`retired without retirement pulse` / `retired for this bundle pulse`).
- Verifier UI version marker from `v18.0.0` to `v19.0.0`.

### Kept
- Offline `signatureV3` verification path for proof bundles using Ed25519 public keys and payload-hash checks.
- Signature v3 key pinning model with a static key set and optional runtime override (`__RECEIZ_SIGNATURE_V3_PUBLIC_KEYS_PINNED__`).
- Core offline verification pipeline and fail-closed semantics from `v18`.
- Anchor fallback derivation + anchor consistency checks from `v18`.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Deterministic and real Groth16 verification modes.

## [v18.0.0] - 2026-03-02

### Added
- Offline `signatureV3` verification path for proof bundles using Ed25519 public keys and payload-hash checks.
- Signature v3 key pinning model with a static key set and optional runtime override (`__RECEIZ_SIGNATURE_V3_PUBLIC_KEYS_PINNED__`).

### Changed
- Verification checks now surface Receiz Signature (v3) states:
  - verified (OK)
  - invalid (hard fail)
  - missing / unavailable (warning)
- Signature policy checks now enforce `signedAtMs` time sanity and key lifecycle windows (activation/retirement policy).
- Verifier UI version marker from `v17.0.0` to `v18.0.0`.

### Kept
- Core offline verification pipeline and fail-closed semantics from `v17`.
- Anchor fallback derivation + anchor consistency checks from `v17`.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Deterministic and real Groth16 verification modes.

## [v17.0.0] - 2026-03-01

### Added
- Anchor fallback derivation from proof bundle fields when an explicit anchor bundle is missing.
- Anchor ID consistency check between explicit anchor bundle and derived anchor data.

### Changed
- Anchor fact display now resolves from explicit anchor, derived anchor, or `bundle.anchorId`.
- Optional-link/canonical-path checks now use an effective anchor model (explicit anchor or derived anchor).
- Verifier UI version marker from `v16.0.0` to `v17.0.0`.

### Kept
- Core offline verification pipeline and fail-closed semantics from `v16`.
- Carrier extraction and normalization rules for PNG, PDF, SVG, JSON, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths.
- Deterministic and real Groth16 verification modes.

## [v16.0.0] - 2026-02-28

### Changed
- Verifier UI copy reframed from "original/sealed artifact" wording to "file/sealed file" wording.
- Hero, load-step, folder scan, package status, and verification-result text updated for file-first wording.
- Package/folder manifest and unsupported-format errors rewritten to match current "sealed file" terminology.
- Hint copy tuned to `Copies fail. Ask for the receiz.`
- Verifier UI version marker from `v15.5.0` to `v16.0.0`.

### Kept
- Verification contract and canonical checks from `v15.5.0`.
- Multi-carrier support and package verification flow.

## [v15.5.0] - 2026-02-27

### Changed
- Verifier UI version marker from `v15.0.0` to `v15.5.0`.

### Kept
- Runtime behavior and verification semantics from `v15.0.0`.

## [v15.0.0] - 2026-02-26

### Changed
- Service-worker route references aligned from `/receiz-offline-verifier.html` to `/offline-verifier.html`.
- Deployment/docs references aligned to `offline-verifier.html` naming.
- Verifier UI version marker from `v14.0.0` to `v15.0.0`.

### Kept
- Core verifier logic and UI behavior from `v14`.

## [v14.0.0] - 2026-02-26

### Changed
- Verifier UI version marker from `v13.0.0` to `v14.0.0`.
- App entrypoint filename alignment: `apps/receiz-offline-verifier.html` -> `apps/offline-verifier.html`.

### Kept
- Core offline verification pipeline and fail-closed semantics from `v13`.
- Carrier extraction and normalization rules.

## [v13.0.0] - 2026-02-25

### Changed
- Verifier UI copy reframed around "Verify an original."
- Upload flow simplified to a single integrated upload surface (tap to upload + drag/drop).
- Removed dedicated `Choose files` / `Choose folder` controls from the default UI.
- Removed manual optional `/v/...` link input field from the default UI.
- Verify/status text simplified (`Verify Offline` -> `Verify`, `Verified original receiz` -> `Verified original`).
- Verifier UI version marker from `v12.0.0` to `v13.0.0`.

### Kept
- Core offline verification pipeline and fail-closed semantics from `v12`.
- Carrier extraction and normalization rules for PNG, PDF, trailer, and `.receizbundle`.
- Package ZIP/folder manifest verification paths in verifier logic.
- Deterministic and real Groth16 verification modes.

## [v12.0.0] - 2026-02-24

### Changed
- Verifier UI version marker from `v11.0.0` to `v12.0.0`.
- Repository release/docs references updated from `v11` to `v12`.
- Release notes reframed for migration from `v11` to `v12`.

### Kept
- Multi-format carrier verification support (PNG, PDF, trailer, `.receizbundle`).
- Real and deterministic Groth16 verification paths.
- Fail-closed verification semantics and canonical binding checks.

## [v11.0.0] - 2026-02-24

### Added
- Multi-format carrier verification support:
  - PNG proof chunk flow
  - PDF embedded Receiz proof object flow
  - trailer-sealed proof flow
  - `.receizbundle` envelope flow
- Trailer parser (`RECEIZ-TRAILER-v1`) and envelope parser (`receiz.bundle.v1`).
- PDF proof extraction (`/Type /ReceizProof`, `/ProofBundle` literal/hex).
- Real Groth16 verification path using `snarkjs` + verification key JSON.
- JSON Schema definitions for proof, anchor, and bundle envelope payloads.

### Changed
- Verifier UI version marker from `v10.0.0` to `v11.0.0`.
- File chooser accepts additional extensions (`.pdf`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.receizbundle`).
- Documentation updated from PNG-only contract to v11 multi-carrier contract.

### Kept
- Fail-closed verification semantics.
- Canonical field validation and artifact binding enforcement.
- Optional link path cross-check model.

## [v10.0.0] - 2026-02-22

### Added
- Initial public offline verifier release for PNG artifacts with embedded `receiz.proof_bundle`.

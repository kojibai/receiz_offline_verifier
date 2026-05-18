# Release Notes

## v84.0.0
Release date: 2026-05-18

`v84.0.0` is the Proof-Native Artifact System Stable Release. It names Receiz as a proof-native artifact system and locks the stronger/weaker truth hierarchy, primitive naming rules, forbidden downgrade boundary, deterministic first-paint protection, service-worker version truth, and release-law surfaces into one governed public cut. In this offline verifier repository, the release work is publication of canonical `v84.0.0` artifacts, local release-surface gates, primitive repo law, and outward version-surface alignment only.

Canonical full release note: [docs/releases/v84.0.0.md](docs/releases/v84.0.0.md)
Product-truth freeze: [docs/releases/v84.0.0-product-truth.md](docs/releases/v84.0.0-product-truth.md)
Release checklist: [docs/releases/v84.0.0-checklist.md](docs/releases/v84.0.0-checklist.md)
Release process: [docs/releases/v84.0.0-process.md](docs/releases/v84.0.0-process.md)
Prior v83 archive: [docs/releases/v83.0.0.md](docs/releases/v83.0.0.md)

## Highlights
- Receiz is named directly as a proof-native artifact system.
- Files, identities, vault objects, ownership states, settlement states, public witness surfaces, and verification routes are documented as product-truth carriers.
- Stronger implemented truth remains above weaker inherited truth.
- Deterministic first paint remains protected from SEO, analytics, session checks, hydration, lazy imports, dynamic JSON, global sync, server reconciliation, tracking, marketing surfaces, and generic framework convention.
- Primitive acceptance criteria and the primitive decision procedure are written into `AGENTS.md` and `docs/literal-product-law.md`.
- Forbidden downgrades are named directly for proof objects, artifact-system objects, public proof surfaces, settlement primitives, ownership state, identity primitives, deterministic first paint, verified history, route truth, and service-worker release truth.
- Current shipped verifier, studio, settlement entrypoints, and static service-worker runtime are marked `v84.0.0`.
- Root package metadata now resolves to `v84.0.0`.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

## Operational notes
- Release candidate: current `main` at `d9490705d7` plus the `v84.0.0` release-lock worktree, as supplied by the release brief.
- The committed arc from tag `v83.0.0` to `d9490705d7` spans 17 commits, 48 changed files, 3,122 insertions, and 416 deletions before final `v84.0.0` lock edits.
- The `v70.0.0` public alpha law, `v80.0.0` stable platform law, `v81.0.0` Signal Card asset law, `v82.0.0` Sports game economy law, `v83.0.0` stable live-proof law, and `v64.0.0` value-loop invariants remain in force.
- This offline verifier cut remains docs/governance alignment and static release-surface validation only.

## Migration checklist
- Confirm primitive acceptance criteria and primitive decision procedure are present in `AGENTS.md` and `docs/literal-product-law.md`.
- Confirm proof, vault, ownership, settlement, identity, public proof, deterministic first-paint, route truth, verified-history, and service-worker truth surfaces are not generically renamed or downgraded.
- Confirm Sports refunded tournament entry cleanup, Sports lock-state display, live-player first-paint/share/OG, Signal Run vault, and profile/public asset contracts in the broader platform workspace.
- Confirm production DB migrations for Sports, Signal Run vault, profile/public assets, and refunded tournament entry cleanup are applied in the target environment before production promotion.
- Update release and entrypoint version markers to `v84.0.0`.
- Run `pnpm lint`, `pnpm build`, and `pnpm release:lock`.
- Run whitespace diff check.
- Run `pnpm release:attest` for the final commit in the release-signing environment before production shipment.
- Deploy updated `site/` and `apps/` artifacts.

## v83.0.0
Release date: 2026-05-17

`v83.0.0` is the Stable Live Proof Release. It hardens the Sports Arena, profile live-player route, Explore, Market, OTC proof objects, interoperability policy, and conformance system into one stable public build. In this offline verifier repository, the release work is publication of canonical `v83.0.0` artifacts, local release-surface gates, and outward version-surface alignment only.

Canonical full release note: [docs/releases/v83.0.0.md](docs/releases/v83.0.0.md)
Product-truth freeze: [docs/releases/v83.0.0-product-truth.md](docs/releases/v83.0.0-product-truth.md)
Release checklist: [docs/releases/v83.0.0-checklist.md](docs/releases/v83.0.0-checklist.md)
Release process: [docs/releases/v83.0.0-process.md](docs/releases/v83.0.0-process.md)
Prior v82 archive: [docs/releases/v82.0.0.md](docs/releases/v82.0.0.md)

## Highlights
- Sports first paint is locked around truthful shell projection, known game state before hydration, scoped score/lock truth, and legitimate zero-score display.
- Main Event and single-game play share the same scoreboard selection path without letting active entry lock state rewrite unrelated field or scoreboard state.
- Card reveal behavior is stabilized across click, popover, drag, drop, selection, deselection, reward-card, and multi-card paths.
- Saved Sports cards preserve issue number, pack origin, card identity, proof object, owner, and appendable card memory through viewer, vault, and market surfaces.
- Pick 5 player availability becomes release truth for starters, bench/role players, backups, injured players, Main Event, and single-game cards.
- Profile live-player sharing from iMessage is restored while canonical public profile truth remains the first-paint source.
- Explore avoids white-screen races and Market keeps its fast entry path while conformance checks transport proof truth instead of stale hot-path JSON-LD assumptions.
- Interoperability callback policy is centralized, and OTC wallet/Cash Image work becomes an offline-verifiable Receiz proof-object upgrade path.
- Current shipped verifier, studio, and settlement entrypoints are marked `v83.0.0`.
- Root package metadata now resolves to `v83.0.0`.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

## Operational notes
- Release base before final `v83.0.0` lock edits: `223b2ddbbd`, 123 commits after tag `v82.0.0`, as supplied by the release brief.
- The pre-lock arc from `v82.0.0` to `82.9.4` spans 188 files, 28,716 insertions, and 3,485 deletions.
- The `v70.0.0` public alpha law, `v80.0.0` stable platform law, `v81.0.0` Signal Card asset law, `v82.0.0` Sports game economy law, and `v64.0.0` value-loop invariants remain in force.
- This offline verifier cut remains docs/governance alignment and static release-surface validation only.

## Migration checklist
- Confirm Sports first paint, Main Event, single-game selection, scoped live score, scoped lock state, legitimate zero-score display, and next-game hydration.
- Confirm card reveal, reward reveal, saved-card issuance truth, proof object, owner, vault, market, and card-memory continuity.
- Confirm Pick 5 availability language for starters, bench/role, backup, injured/out players across Main Event and single-game play.
- Confirm iMessage live-player opens, canonical public profile first paint, public profile route truth, and owner/manage hydration behavior.
- Confirm Explore immediate shell behavior, Market fast entry, market transport proof conformance, centralized callback allowlist, and Vercel trace inclusion.
- Confirm OTC wallet proof creation, private-key import, connected-wallet add, wallet bundle sealing, Cash Image proof objects, offline pulse transfer, proof export/import, and wallet-panel UI placement.
- Update release and entrypoint version markers to `v83.0.0`.
- Run `pnpm lint`, `pnpm build`, and `pnpm release:lock`.
- Run `pnpm release:attest` for the final commit in the release-signing environment before production shipment.
- Deploy updated `site/` and `apps/` artifacts.

## v82.0.0
Release date: 2026-05-14

`v82.0.0` is the Sports Arena World-Class Gameplay Release. It moves Receiz from proof-native platform plus Signal Circuit into a full live sports game economy where owned cards, live MLB games, scoring, rank, proof, reward, memory, market value, and repeat play move through one governed loop. In this offline verifier repository, the release work is publication of canonical `v82.0.0` artifacts, local release-surface gates, and outward version-surface alignment only.

Canonical full release note: [docs/releases/v82.0.0.md](docs/releases/v82.0.0.md)
Product-truth freeze: [docs/releases/v82.0.0-product-truth.md](docs/releases/v82.0.0-product-truth.md)
Release checklist: [docs/releases/v82.0.0-checklist.md](docs/releases/v82.0.0-checklist.md)
Release process: [docs/releases/v82.0.0-process.md](docs/releases/v82.0.0-process.md)
Prior v81 archive: [docs/releases/v81.0.0.md](docs/releases/v81.0.0.md)

## Highlights
- Sports becomes a first-class Receiz destination with `/game/sports`, `/game/sports/baseball`, live MLB rows, Pick 5, live field, cockpit, leaders, proofs, cards, profile access, and mobile chrome.
- MLB cards become owned, issued, playable inventory with deterministic issue numbers, pack origin, rarity variants, card career memory, market paths, and premium downloads.
- Player strength and card rarity are locked as separate scarcity gates, and pack odds become auditable through published odds, observed simulations, health checks, and registry basis hashes.
- Pick 5 separates per-game play from Main Event selection, while live cockpit, pregame, scoring story, rank, and payout proximity become watchable daily-game surfaces.
- Daily tournaments gain funded entry, Stripe delta recovery, minimum-participant refunds, top-percent payout, finality, reward packs, settlement payout, result sharing, and play-again reset.
- Sports market and trading gain sales, wallet-first purchase, provenance, bids, asks, floors, value movement, guarded trade actions, and stale-state protections.
- Sports conformance becomes official under Game with badge, history, rollups, odds, source checks, hot fanout, checkout recovery, and signed history coverage.
- Scale hardening starts with hot public snapshots, Vercel Cron warming, runtime cache, warmed stream reads, account overlay throttling, route backpressure, worker jobs, observability, and build-cost controls.
- Current shipped verifier, studio, and settlement entrypoints are marked `v82.0.0`.
- Root package metadata now resolves to `v82.0.0`.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

## Operational notes
- Release candidate: `edb39fa11a`, 174 commits after tag `v80.0.0` and 138 commits after tag `v81.0.0`, as supplied by the release brief.
- The full `v80.0.0` to `v82.0.0` arc spans 241 changed files, 125,524 insertions, and 506 deletions including QA evidence; excluding Playwright and screenshot evidence, it spans 184 changed files, 56,474 insertions, and 506 deletions.
- The post-`v81.0.0` Sports line spans 124 code and documentation files, 47,737 insertions, and 113 deletions.
- The `v70.0.0` public alpha law, `v80.0.0` stable platform law, `v81.0.0` Signal Card asset law, and `v64.0.0` value-loop invariants remain in force.
- Broader platform target environments must include the Sports Arena and Signal Card migrations named in [docs/releases/v82.0.0-checklist.md](docs/releases/v82.0.0-checklist.md).
- Worker coverage must be live for append drain, entry finality, tournament settlement, hot snapshot warming, and conformance history rollups.
- This offline verifier cut remains docs/governance alignment and static release-surface validation only.

## Migration checklist
- Confirm Sports Arena, baseball route, MLB live rows, Pick 5, live field, cockpit, leaders, proofs, cards, profile access, and mobile chrome.
- Confirm MLB registry, player images, rookie registry, owned-card ordering, issue assignment, rarity/player-scarcity separation, pack origin, premium card export, and downloaded metadata.
- Confirm pack purchase, reveal, reward packs, pack sync, published odds, observed simulation, pack health, and registry basis hashes.
- Confirm per-game and Main Event Pick 5 selection, live-game blocking, selected-game field truth, live cockpit, pregame, finality, reward claim, and claimed-final clearing.
- Confirm tournament entry, wallet funding, Stripe delta recovery, minimum participant refunds, top-percent payout, settlement payout, result sharing, and play-again reset.
- Confirm Sports market, purchase, provenance, value panels, bids, asks, floors, sale history, trading, stale trade status, conformance, scale hardening, and first-paint/PWA continuity.
- Update release and entrypoint version markers to `v82.0.0`.
- Run `pnpm lint`, `pnpm build`, and `pnpm release:lock`.
- Run `pnpm release:attest` for the final commit in the release-signing environment before production shipment.
- Deploy updated `site/` and `apps/` artifacts.

## v81.0.0
Release date: 2026-05-10

`v81.0.0` is the Signal Circuit Provenance Release. It locks the first stable major release after `v80.0.0` by making Signal Cards easier to discover, inspect, fund, seal, track, transfer, and understand as durable Receiz assets. In this offline verifier repository, the release work is publication of canonical `v81.0.0` artifacts, local release-surface gates, and outward version-surface alignment only.

Canonical full release note: [docs/releases/v81.0.0.md](docs/releases/v81.0.0.md)
Product-truth freeze: [docs/releases/v81.0.0-product-truth.md](docs/releases/v81.0.0-product-truth.md)
Release checklist: [docs/releases/v81.0.0-checklist.md](docs/releases/v81.0.0-checklist.md)
Release process: [docs/releases/v81.0.0-process.md](docs/releases/v81.0.0-process.md)
Prior v80 archive: [docs/releases/v80.0.0.md](docs/releases/v80.0.0.md)

## Highlights
- Signal Card DNA at `/game/cards/history` makes cards inspectable through origin, holder context, listing state, auctions, bids, sales, verified arena appends, and price points.
- Card pages, World cards, and share-card surfaces expose explicit paths to share, card-world, DNA/history, and Find Cards routes.
- Rewarded-card seal payment now verifies the submitted claim before charge, spends eligible wallet lanes first, preserves compact idempotency, reports exact shortfall, and appends wallet activity.
- Wallet and calendar activity now surface purchased packs, rewarded card purchases, rewarded-card seals, card transfers, and card receives as account history.
- Card receive activity deduplicates repeated receive rows.
- Card history reads across all discoverable cards, while Card World remembers explicit same-session "More cards" expansion.
- Explorer, discovery, card backs, proof manifests, popovers, and Find Cards entry paths get fit and density polish.
- Mobile game chrome, white-route isolation, nav hit targets, card-share animation, liquid loaders, and rewarded-card stage sizing are stabilized.
- Signal Card art, orb realism, rim treatment, and card-back proof manifest layout are tightened.
- Current shipped verifier, studio, and settlement entrypoints are marked `v81.0.0`.
- Root package metadata now resolves to `v81.0.0`.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

## Operational notes
- Release candidate: `23eec6d23`, 35 commits after tag `v80.0.0`, with 52 changed files, 8,289 insertions, and 385 deletions, as supplied by the release brief.
- The `v80.1.0` through `v80.3.0` stabilization line is folded into one major lock for card DNA, rewarded-card payment, card activity, mobile stability, and release-surface coherence.
- The `v70.0.0` public alpha law, `v80.0.0` stable platform law, and `v64.0.0` value-loop invariants remain in force.
- Broader platform target environments must include the rewarded-card seal wallet migrations:
  - `supabase/migrations/20260509170000_signal_run_rewarded_card_seal_wallet_charge.sql`
  - `supabase/migrations/20260509193000_signal_run_rewarded_card_seal_compact_idempotency.sql`
- This offline verifier cut remains docs/governance alignment and static release-surface validation only.

## Migration checklist
- Confirm Signal Card DNA route, filters, search, event rows, price charting, owner context, focus URLs, and progressive hydration.
- Confirm rewarded-card seal claim verification, 99 USD-cent wallet charge, funding shortfall behavior, compact idempotency, Stripe minimum handling, and wallet action-ledger emission.
- Confirm wallet and calendar activity for pack purchases, rewarded card purchases, rewarded-card seals, card transfers, and card receives.
- Confirm transfer receive deduplication and all-card history coverage.
- Confirm card-world same-session discovery memory preserves explicit user expansion.
- Confirm mobile game chrome, route coloring, card-share animation, loaders, stage sizing, and PWA continuity.
- Update release and entrypoint version markers to `v81.0.0`.
- Run `pnpm lint`, `pnpm build`, and `pnpm release:lock`.
- Run `pnpm release:attest` for the final commit in the release-signing environment before production shipment.
- Deploy updated `site/` and `apps/` artifacts.

## v80.0.0
Release date: 2026-05-09

`v80.0.0` is the Major Stable Release. It turns the `v70.0.0` public alpha law into one operating platform across identity, proof, profile, wallet, market, world, creator production, public proof, Signal Circuit, vault export, conformance, and runtime continuity. In this offline verifier repository, the release work is publication of canonical `v80.0.0` artifacts, local release-surface gates, and outward version-surface alignment only.

Canonical full release note: [docs/releases/v80.0.0.md](docs/releases/v80.0.0.md)
Product-truth freeze: [docs/releases/v80.0.0-product-truth.md](docs/releases/v80.0.0-product-truth.md)
Release checklist: [docs/releases/v80.0.0-checklist.md](docs/releases/v80.0.0-checklist.md)
Release process: [docs/releases/v80.0.0-process.md](docs/releases/v80.0.0-process.md)
Prior v78 archive: [docs/releases/v78.0.0.md](docs/releases/v78.0.0.md)

## Highlights
- Local identity proof, file restore, profile truth, market/wallet state, card ownership, vault export, and creator production are locked under one verified-truth-first law.
- `/<username>` remains canonical profile truth, and `?manage=1` remains an owner permission overlay only.
- Identity Record, Identity Seal, Receiz Key, PBI, email, server session, and Receiz ID continuity converge into the same signed-in product experience after proof acceptance.
- Wallet, Settlement, Reserve, market shares, cards, auctions, packs, transfers, and battle stakes preserve funded causality and append-only value truth.
- Signal Cards are locked as owned Receiz assets across game, world, vault, discovery, transfer, auction, battle, market, export, share, and conformance surfaces.
- Vault export remains portable proof with explicit user intent, archive bytes, manifest, archive hash, chunking, Merkle integrity, KAI timing, and restore rules.
- World revenue loops, Public Proof, Creator OS, Signal Circuit, Exchange, Status, and conformance are locked as inspectable product surfaces without exposing private/admin/worker paths.
- Runtime, service-worker, PWA, stale header, stale chunk, and stale session coherence are release surfaces, not incidental implementation details.
- Current shipped verifier, studio, and settlement entrypoints are marked `v80.0.0`.
- Root package metadata now resolves to `v80.0.0`.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

## Operational notes
- Full trail from `v70.0.0` to this candidate: 460 commits and 755 changed files, as supplied by the release brief.
- Immediate post-`v78.0.0` stabilization candidate: `997418abb`, 17 commits after tag `v78.0.0`, with 28 changed files, 3,439 insertions, and 1,334 deletions before the governed `v80.0.0` release bump.
- The `v70.0.0` public alpha law, `v70.0.0` invariant register, `v74.0.0` Receiz Key / identity-artwork baseline, `v75.0.0` local proof/file restore law, `v76.0.0` World / Market / Public Proof law, `v77.0.0` Signal Circuit / Creator OS / Vault law, `v78.0.0` Signal Card World / Vault Export / Battle Arena / Exchange / PWA law, and `v64.0.0` value-loop invariants remain in force.
- This offline verifier cut remains docs/governance alignment and static release-surface validation only.

## Migration checklist
- Confirm accepted proof projects the correct account now and background work only imports, binds, mirrors, syncs, refreshes, or enriches.
- Confirm stale echoes cannot downgrade stronger local account, profile, wallet, market, card, vault, or creator truth.
- Confirm Signal Card World, Vault Card export/restore, transfer packages, Arena append manifests, card flip gestures, and mobile/PWA download intent.
- Confirm World revenue loops, Public Proof registry, Creator OS production, `/signal-circuit`, `/exchange`, Status, conformance, runtime, service-worker, and release-worker marker coherence.
- Update release and entrypoint version markers to `v80.0.0`.
- Run `pnpm lint` and `pnpm build`.
- Deploy updated `site/` and `apps/` artifacts.

## v78.0.0
Release date: 2026-05-09

`v78.0.0` is the Signal Card World, Vault Export, Battle Arena, Exchange, and PWA Continuity release. In this offline verifier repository, the release work is publication of canonical `v78.0.0` artifacts and outward version-surface alignment only.

Canonical full release note: [docs/releases/v78.0.0.md](docs/releases/v78.0.0.md)
Product-truth freeze: [docs/releases/v78.0.0-product-truth.md](docs/releases/v78.0.0-product-truth.md)
Release checklist: [docs/releases/v78.0.0-checklist.md](docs/releases/v78.0.0-checklist.md)
Release process: [docs/releases/v78.0.0-process.md](docs/releases/v78.0.0-process.md)
Prior v77 archive: [docs/releases/v77.0.0.md](docs/releases/v77.0.0.md)

## Highlights
- Signal Card World at `/game/cards` is locked as an owned-asset network that can merge synced Vault ownership, local card storage, discovery, sale, auction, challenge, and proof state without rewriting card truth.
- Signal Card fronts, share pages, QR payloads, external share actions, and OG/Twitter images carry sealed card proof and ownership more directly.
- Signal Vault Card export becomes a receized PNG archive carrier with manifest, archive hash, chunked payload, Merkle integrity, KAI timing, roster counts, card claim paths, art paths, and restore rules.
- Vault restore and download behavior is explicit user intent only; opening a panel must not silently start sealing, background export, timers, or hidden-frame navigation.
- Mobile Safari, installed PWA, and in-app-browser card downloads are hardened against visible navigation, refresh, and header collisions.
- Transfer-download packages, Signal Arena battles, and card auctions append ownership/value truth without mutating original card claims.
- `/signal-circuit` and `/exchange` become public ownership/value routes that connect cards, Market, settlement, wallet, transfers, offline notes, discovery, and conformance.
- Signal Circuit conformance sources, badges, route inventory, and public status entries are repaired around real files and public/private boundary exclusions.
- Dashboard first paint, service-worker registration, PWA header behavior, runtime versioning, value-loop copy, and release-worker markers are aligned to `v78.0.0`.
- Current shipped verifier, studio, and settlement entrypoints are marked `v78.0.0`.
- Root package metadata now resolves to `v78.0.0`.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

## Operational notes
- Baseline: tag `v77.0.0` at commit `b44c2c863`.
- Candidate scope: 57 commits in the pre-bump window (`1793af926` as the candidate anchor), including Signal Card World, Vault global sync, sealed Vault Card export, mobile/PWA downloads, transfer packages, external sharing, Battle Arena, card auctions, Signal Circuit conformance, public Exchange, Dashboard first paint, service-worker registration, public status inventory, value-loop copy, and release worker coherence.
- The `v70.0.0` public alpha law, `v70.0.0` invariant register, `v74.0.0` Receiz Key / identity-artwork baseline, `v75.0.0` local proof/file restore law, `v76.0.0` World / Market / Public Proof law, `v77.0.0` Signal Circuit / Creator OS / Vault law, and `v64.0.0` value-loop invariants remain in force.
- This offline verifier cut remains docs/governance alignment only.

## Migration checklist
- Confirm Signal Card front, download, QR, share, public proof, OG image, and Twitter image behavior.
- Confirm Signal Card World global sync, owner-scope, local merge, discovery, sale, auction, challenge, and proof-state behavior.
- Confirm Signal Vault Card export, archive manifest, chunking, Merkle integrity, restore rules, and user-intent-only download behavior.
- Confirm mobile Safari, installed PWA, in-app browser, header, service-worker, and stale runtime continuity.
- Confirm transfer-download packages prevent ambiguous duplicate ownership.
- Confirm Signal Arena requests, loadouts, AI twin authorization, stake settlement, action ledger, and transfer integration.
- Confirm card auction wallet holds and reserve/account settlement.
- Confirm `/signal-circuit`, `/exchange`, conformance source repair, public status inventory, dashboard first paint, value-loop copy, and release-worker marker coherence.
- Update release and entrypoint version markers to `v78.0.0`.
- Deploy updated `site/` and `apps/` artifacts.

## v77.0.0
Release date: 2026-05-08

`v77.0.0` is the Signal Circuit, Creator OS, Vault Settlement, and Runtime Trust release. In this offline verifier repository, the release work is publication of canonical `v77.0.0` artifacts and outward version-surface alignment only.

Canonical full release note: [docs/releases/v77.0.0.md](docs/releases/v77.0.0.md)
Product-truth freeze: [docs/releases/v77.0.0-product-truth.md](docs/releases/v77.0.0-product-truth.md)
Release checklist: [docs/releases/v77.0.0-checklist.md](docs/releases/v77.0.0-checklist.md)
Release process: [docs/releases/v77.0.0-process.md](docs/releases/v77.0.0-process.md)
Prior v76 archive: [docs/releases/v76.0.0.md](docs/releases/v76.0.0.md)

## Highlights
- Signal Circuit is locked as a dedicated `/game` product surface with deterministic local logic, mobile game chrome, and Signal Card issue paths that use existing Receiz proof primitives.
- Signal Cards become portable verified collectibles with sealed claims, durable artwork, deterministic rarity, battle profiles, lineage, visual profile, and standard verification paths.
- Signal Pack purchases and reveals are wallet-aware, exact-rate, resumable, settlement-safe, and incomplete until sealed cards are issued, stored, and recoverable.
- Signal Vault is account-scoped, paginated, retryable, batch-hydrated, and protected from account bleed across transfer, listing, market, audit, and navigation flows.
- Card public/share/proof/listing/auction/purchase/battle surfaces render from sealed card truth without fake loader or placeholder replacement paths.
- Signal Pack Foundry and Signal Circuit conformance add brand pack campaigns, visible odds, supply caps, manifest seals, source digests, bounded simulation, badges, history, and status rollups.
- Creator Workspace is a first-class `/creator` route with settled local first paint, Streamdown output, durable Creator OS records, wallet-metered production, and managed launch jobs.
- Verified Data Vault seals linked bytes, exports verifiable ZIP/vault packages, restores original files, and previews restored bytes.
- Old Safari document sealing uses Signature V4 online and fails closed offline with Safari 17+ or online guidance instead of legacy V3 fallback.
- Runtime stale recovery clears stale runtime state silently and returns to stable paths without automatic root interstitials or stale-guard redirects.
- Current shipped verifier, studio, and settlement entrypoints are marked `v77.0.0`.
- Root package metadata now resolves to `v77.0.0`.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

## Operational notes
- Baseline: tag `v76.0.0` at commit `10e335eb2`.
- Candidate scope: 128 commits in the pre-bump window (`6a7b79993` as the candidate anchor), including Signal Circuit, verified Signal Cards, Signal Vault and packs, Creator OS, Creator Wallet metering, managed launch, Vault restore, old-Safari sealing, status, runtime, market, wallet, profile, and release-contract updates.
- The `v70.0.0` public alpha law, `v70.0.0` invariant register, `v74.0.0` Receiz Key / identity-artwork baseline, `v75.0.0` local proof/file restore law, `v76.0.0` World / Market / Public Proof law, and `v64.0.0` value-loop invariants remain in force.
- This offline verifier cut remains docs/governance alignment only.

## Migration checklist
- Confirm Signal Circuit first paint, local deterministic game logic, mobile chrome, and card issue flow.
- Confirm Signal Card sealed claims, art replay/export, share proof, transfer, listing, auction, purchase, and battle behavior.
- Confirm Signal Pack wallet settlement, exact-rate reveal continuity, durable opening records, and recovery.
- Confirm Signal Vault account scoping, pagination, partial retry, transfer/listing/audit rows, ZIP restore, and restored-byte preview.
- Confirm Signal Pack Foundry campaign odds, caps, manifest seals, and primitive isolation.
- Confirm Signal Circuit conformance source digests, scarcity proof, bounded simulation, badge/history/rollup, and public Status inventory.
- Confirm Creator Workspace first paint, Streamdown output, durable queues, wallet metering, paid asset/publish jobs, safety reviews, and managed launch provider proof.
- Confirm old-Safari Signature V4 document sealing and offline guidance.
- Confirm runtime stale recovery removal, market quote batching, wallet value-state, and profile/original continuity.
- Update release and entrypoint version markers to `v77.0.0`.
- Deploy updated `site/` and `apps/` artifacts.

## v76.0.0
Release date: 2026-05-06

`v76.0.0` is the world-agent revenue-loop, public proof registry, market twin mandate, wallet settlement correction, and status-surface release. In this offline verifier repository, the release work is publication of canonical `v76.0.0` artifacts and outward version-surface alignment only.

Canonical full release note: [docs/releases/v76.0.0.md](docs/releases/v76.0.0.md)  
Product-truth freeze: [docs/releases/v76.0.0-product-truth.md](docs/releases/v76.0.0-product-truth.md)  
Release checklist: [docs/releases/v76.0.0-checklist.md](docs/releases/v76.0.0-checklist.md)  
Release process: [docs/releases/v76.0.0-process.md](docs/releases/v76.0.0-process.md)  
Prior v75 archive: [docs/releases/v75.0.0.md](docs/releases/v75.0.0.md)

## Highlights
- World keeps concierge streaming continuity while moving agentic work to the Agents SDK, including task-level trace summaries that stay public-safe.
- Revenue loops now include protected follow-up campaign continuity, Sales Brain, autopilot briefs, and mission outcomes with value attribution.
- Market Twin receives mandate-safe persistence, replay labeling, win-rate math corrections, and stronger authority handling for saved account settings.
- Public Proof is promoted as a first-class registry surface with observe/claim/verify/seal/dispute flows.
- Wallet settlement now correctly handles running reserve balances and non-subscription payment-credit movement.
- Public and developer Status coverage now includes expanded, non-privileged surface inventory for profile/world/public proof/market/wallet/payment/discovery.
- No new database migration is introduced by this documentation cut.
- Current shipped verifier, studio, and settlement entrypoints are marked `v76.0.0`.
- Root package metadata now resolves to `v76.0.0`.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

## Operational notes
- Baseline: tag `v75.0.0` at commit `bae14f0cd`.
- Candidate scope: 46 commits in the pre-bump window (`876f70c7b` as the candidate anchor), including Agents SDK migration, protected trace UX, public proof registry, wallet, market, and status behavior updates plus release evidence.
- The `v70.0.0` public alpha law, `v70.0.0` invariant register, `v74.0.0` Receiz Key / identity-artwork baseline, and `v64.0.0` value-loop invariants remain in force.
- This offline verifier cut remains docs/governance alignment only.

## Migration checklist
- Confirm world concierge can continue direct responses while using Agents SDK for tool orchestration and handoffs.
- Confirm campaign follow-up and marketing email defaults prefer email unless a valid connected webhook destination exists.
- Confirm Market Twin authority persistence, mandate checks, replay label accuracy, and win-rate math corrections.
- Confirm Public Proof observe/claim/verify/seal/dispute and rights flows remain readably safe.
- Confirm wallet running-balance, reserve settlement, and ledger framing remain correct for non-subscription flows.
- Confirm public/developer Status endpoint inventory excludes privileged/private admin routes.
- Update release and entrypoint version markers to `v76.0.0`.
- Deploy updated `site/` and `apps/` artifacts.

## v75.0.0
Release date: 2026-05-02

`v75.0.0` is the local proof, backup sign-in, market continuity, and Explore release. In this offline verifier repository, the release work is publication of canonical `v75.0.0` artifacts and outward version-surface alignment only.

Canonical full release note: [docs/releases/v75.0.0.md](docs/releases/v75.0.0.md)
Product-truth freeze: [docs/releases/v75.0.0-product-truth.md](docs/releases/v75.0.0-product-truth.md)
Release checklist: [docs/releases/v75.0.0-checklist.md](docs/releases/v75.0.0-checklist.md)
Release process: [docs/releases/v75.0.0-process.md](docs/releases/v75.0.0-process.md)
HPL continuity review: [docs/releases/v75.0.0-hpl-continuity-review.md](docs/releases/v75.0.0-hpl-continuity-review.md)
Identity continuity one-pager: [docs/releases/v75.0.0-receiz-identity-continuity-one-pager.md](docs/releases/v75.0.0-receiz-identity-continuity-one-pager.md)
Prior v74 archive: [docs/releases/v74.0.0.md](docs/releases/v74.0.0.md)

## Highlights
- Receiz ID login is locked as local-first: the device-held key admits local identity truth, projects the signed-in shell, seeds profile and wallet route truth, and starts server propagation in the background.
- Server continuation may publish, bind, mint cookies, and append stronger additions, but it cannot replace a stronger local account binding with a weaker or stale payload for another account.
- Local account bindings persist as durable register truth across Receiz device, Receiz Key, PBI, email, and server-switch sources.
- Identity Record, Identity Seal, and Receiz Key restore now project verified file sessions directly, admit restored accounts locally, and seed profile, wallet, and upgrade truth.
- Unsupported browsers use `/signin/receiz-id-fallback` with sanitized return paths while primary sign-in surfaces remain Receiz ID pass-through.
- Account, managed profile, wallet, and upgrade surfaces recognize locally restored account authority before stale old-cookie echoes.
- Profile identity artwork and signed original downloads preserve deterministic profile truth, owner proof, purchase context, and PBI authorization without redefining the base profile shell.
- Plans and Upgrade keep parity for immediate payment / upgrade actions and old-browser fallback affordances.
- Market snapshots preserve stronger signed-in wallet, owned-item, prediction-history, and share-trade truth across lagging or anonymous payloads while refusing private-state preservation across viewer changes.
- Sold share positions remain closed when local sell history is newer than incoming market payloads.
- Explore opens as a card-first, dock-safe mobile surface with bounded swipe rendering, deterministic preview fallbacks, in-card actions, and local-first route entry.
- Release-governed version surfaces now move together to `v75.0.0` across package metadata, public verifier artifacts, shipped release badges, README pointers, and current-release documentation.

## Verifier impact
- Current shipped verifier, studio, and settlement entrypoints are marked `v75.0.0`.
- Repository release/docs surfaces now align to `v75.0.0`.
- Root package metadata now resolves cleanly at `v75.0.0`.
- No verifier proof-format or producer payload migration is implied by this release update.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

## Operational notes
- The broader release brief records tag `v74.0.0` at commit `7547ebf43` as the baseline and commit `ae5491c82` as the pre-bump v75 candidate.
- Published release surfaces now include the canonical `v75.0.0` release note, product-truth freeze, checklist, process, HPL continuity review, Receiz identity continuity one-pager, and updated docs indexes.
- The `v70.0.0` public alpha law, `v70.0.0` invariant register, `v74.0.0` Receiz Key / identity-artwork baseline, and `v64.0.0` value-loop invariants remain in force.
- In this offline verifier repository, the release work is documentation, visible version-surface alignment, and package-metadata normalization only.

## Migration checklist
- No new database migrations are introduced by this documentation cut.
- Confirm Receiz ID local-proof login and server-continuation downgrade gates.
- Confirm account binding register and account-switch continuity gates.
- Confirm Identity Record, Identity Seal, and Receiz Key restore projection gates.
- Confirm old-browser backup sign-in and sanitized return-path gates.
- Confirm restored-account account, managed profile, wallet, and upgrade authority gates.
- Confirm profile identity artwork, signed original downloads, Plans / Upgrade parity, market continuity, and Explore local-first packaging gates.
- Update outward release/docs references to `v75.0.0`.
- Deploy updated `site/` artifacts.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.

## v74.0.0
Release date: 2026-04-30

`v74.0.0` is the Receiz Key, identity artwork, and profile media release. In this offline verifier repository, the release work is publication of canonical `v74.0.0` artifacts and outward version-surface alignment only.

Canonical full release note: [docs/releases/v74.0.0.md](docs/releases/v74.0.0.md)
Product-truth freeze: [docs/releases/v74.0.0-product-truth.md](docs/releases/v74.0.0-product-truth.md)
Release checklist: [docs/releases/v74.0.0-checklist.md](docs/releases/v74.0.0-checklist.md)
Release process: [docs/releases/v74.0.0-process.md](docs/releases/v74.0.0-process.md)
Prior v73 archive: [docs/releases/v73.0.0.md](docs/releases/v73.0.0.md)

## Highlights
- Receiz Key restore is locked as a sovereign key-file recovery path proven by fresh key signatures and active key registration; PBI may attest new key export but is not required for already-held keys.
- Account now owns Receiz Key controls for private Identity Record PNG export, optional file-password protection, Identity Record PNG or legacy key JSON import, active/revoked key listing, refresh, and two-step revocation.
- Offline Receiz Key projection preserves verified portable state and admitted local identity proof even when the server misses later.
- Profile identity artwork derives deterministically from account creation Kai truth, with KaiSigil glyph geometry and size math kept canonical.
- PBI-signed identity seal and identity record artifacts append verified authorship state without replacing the base profile shell.
- Long-form profile originals preserve full text, title, hash, word count, and a compact Read affordance; attached Receiz URLs preserve exact href values.
- Profile video originals may use playback derivatives and range-aware proxying while original proof downloads stay canonical.
- Sold share positions remain local truth across market snapshots and route hydration, and portable state import preserves profile media/state fields with visible integrity failures.
- Release-governed version surfaces now move together to `v74.0.0` across package metadata, public verifier artifacts, shipped release badges, README pointers, and current-release documentation.

## Verifier impact
- Current shipped verifier, studio, and settlement entrypoints are marked `v74.0.0`.
- Repository release/docs surfaces now align to `v74.0.0`.
- Root package metadata now resolves cleanly at `v74.0.0`.
- No verifier proof-format or producer payload migration is implied by this release update.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

## Operational notes
- The broader release brief records tag `v73.0.0` at commit `fb2d82142` as the baseline and 44 commits plus release-candidate working-tree updates in scope.
- Published release surfaces now include the canonical `v74.0.0` release note, product-truth freeze, checklist, process, and updated docs indexes.
- The `v70.0.0` public alpha law, `v70.0.0` invariant register, `v73.0.0` ownership/vault continuity baseline, and `v64.0.0` value-loop invariants remain in force.
- In this offline verifier repository, the release work is documentation, visible version-surface alignment, and package-metadata normalization only.

## Migration checklist
- No new database migrations are introduced by this documentation cut.
- Confirm Receiz Key restore, registration, export/import, active/revoked key listing, refresh, and two-step revocation gates.
- Confirm offline Receiz Key projection keeps admitted local identity proof when later server fetches miss.
- Confirm deterministic profile identity artwork, KaiSigil geometry, PBI-signed identity artifacts, and stable profile creation timestamps.
- Confirm long-form profile originals, attached-link preservation, and profile video derivative playback preserve canonical original proof.
- Confirm sold-position continuity and portable profile state import keep local truth and visible integrity failures.
- Update outward release/docs references to `v74.0.0`.
- Deploy updated `site/` artifacts.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.

## v73.0.0
Release date: 2026-04-29

`v73.0.0` is the ownership, vault, and continuity release. In this offline verifier repository, the release work is publication of the `v72.0.0` archive, canonical `v73.0.0` artifacts, and outward version-surface alignment only.

Canonical full release note: [docs/releases/v73.0.0.md](docs/releases/v73.0.0.md)
Product-truth freeze: [docs/releases/v73.0.0-product-truth.md](docs/releases/v73.0.0-product-truth.md)
Release checklist: [docs/releases/v73.0.0-checklist.md](docs/releases/v73.0.0-checklist.md)
Release process: [docs/releases/v73.0.0-process.md](docs/releases/v73.0.0-process.md)
Included v72 archive: [docs/releases/v72.0.0.md](docs/releases/v72.0.0.md)

## Highlights
- Business account entity ownership and certificates now have first-class API, server, and contract coverage.
- Receipt ownership provenance and transfer flows now carry stronger proof bundles and route-level continuity.
- Vault and original-download paths preserve portable verified records instead of treating recovered artifact state as disposable UI state.
- Account brain selections expose compact proof-bundle data in a dismissible mobile-friendly popover, with Open shown only for nodes that have a real route target.
- Account authority navigation names the offline surface as Offline Verifier and consolidates Privacy/Terms into Legal while keeping Security one tap away.
- Account, profile, composer, chat, discovery, and world twin surfaces keep post-v72 UI improvements under explicit continuity and fit contracts.
- Release-governed version surfaces now move together to `v73.0.0` across package metadata, public verifier artifacts, shipped release badges, README pointers, and current-release documentation.

## Verifier impact
- Current shipped verifier, studio, and settlement entrypoints are marked `v73.0.0`.
- Repository release/docs surfaces now align to `v73.0.0`.
- Root package metadata now resolves cleanly at `v73.0.0`.
- No verifier proof-format or producer payload migration is implied by this release update.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

## Operational notes
- The broader release brief records `61ae0ef2b` as the `v72.0.0` baseline, but this offline verifier checkout does not contain that commit object or a `v72.0.0` tag locally.
- Published release surfaces now include the canonical `v72.0.0` archive and the `v73.0.0` release note, product-truth freeze, checklist, process, and updated docs indexes.
- The `v70.0.0` public alpha law, `v70.0.0` invariant register, `v72.0.0` stable continuity locks, and `v64.0.0` value-loop invariants remain in force.
- In this offline verifier repository, the release work is documentation, visible version-surface alignment, and package-metadata normalization only.

## Migration checklist
- No new database migrations are introduced by this documentation cut.
- Confirm business ownership APIs, certificate generation, and holdings reads have contract coverage.
- Confirm receipt provenance and transfer proof do not rewrite artifact identity or canonical receipt truth.
- Confirm vault decode, verifier, and original-download state preserve portable verified record truth.
- Confirm account brain selected-node proof data and route-target-only Open actions.
- Confirm account authority navigation names Offline Verifier, consolidates Privacy/Terms into Legal, and keeps Security one tap away.
- Confirm world twin face authority and photoreal shell fit remain bounded by contracts.
- Update outward release/docs references to `v73.0.0`.
- Deploy updated `site/` artifacts.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.

## v72.0.0
Release date: 2026-04-28

`v72.0.0` is the stable continuity release. In this offline verifier repository, the release work is publication of the canonical `v72.0.0` artifacts and release-governed version-surface expectations only.

Canonical full release note: [docs/releases/v72.0.0.md](docs/releases/v72.0.0.md)
Product-truth freeze: [docs/releases/v72.0.0-product-truth.md](docs/releases/v72.0.0-product-truth.md)
Release checklist: [docs/releases/v72.0.0-checklist.md](docs/releases/v72.0.0-checklist.md)
Release process: [docs/releases/v72.0.0-process.md](docs/releases/v72.0.0-process.md)

## Highlights
- Account switching clears actor-scoped route warmth and refuses to preserve market/private wallet state unless the viewer user id matches.
- Compact mobile Live Twin rendered-portrait overlays apply a bounded lower-left face-lock correction so eyes and mouth stay on the person's face without restoring the old oversized mobile downshift.
- `/<username>` remains canonical profile truth; `?manage=1` remains owner permissions only.
- Owner/private enrichment must not make signed-in profile first paint slower than public profile truth.
- Useful hydration repairs stay: stale app-open state can refresh in the background without replacing a settled visible shell.
- Release-governed version surfaces moved together to `v72.0.0` at the stable continuity cut.

## Verifier impact
- No verifier proof-format or producer payload migration is implied by this release update.
- Verifier trust semantics remain unchanged relative to `v60.0.0`.

## Operational notes
- The `v70.0.0` public alpha law remains intact.
- The `v64.0.0` value-loop invariants remain in force.
- In this offline verifier repository, `v72.0.0` is now retained as historical release truth while current-release pointers move to `v73.0.0`.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.

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

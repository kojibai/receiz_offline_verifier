# Release Notes

## v57.0.0
Release date: 2026-04-17

`v57.0.0` is the route-coherence, certificate-custody, and market-conformance release on top of the `v56.0.0` version-surface baseline. If Receiz already knows the route truth, custody truth, or certificate truth, runtime should reuse that truth instead of rediscovering it after navigation, login, or trade.

Canonical full release note: [docs/releases/v57.0.0.md](docs/releases/v57.0.0.md)
Product-truth freeze: [docs/releases/v57.0.0-product-truth.md](docs/releases/v57.0.0-product-truth.md)
Release checklist: [docs/releases/v57.0.0-checklist.md](docs/releases/v57.0.0-checklist.md)

## Highlights
- Runtime profile entry now resolves through canonical managed owner routes instead of the weak `/profile` fallback when owner truth is already knowable.
- World and market now reuse prepared route truth and light entry snapshots before heavier background enrichment.
- Share certificates now behave as first-class live custody surfaces with passkey-first auth, USD-first trading, certificate-native history, and basis semantics.
- Certificate mint, import, and sell flows keep market balances, certificate balances, and note history coherent without reload.
- Market conformance now locks the runtime boundary around certificate note-event ledgers, authoritative import-delta recovery, exact sell quantity, fast-entry continuity, and trace coverage.
- Release-governed version surfaces now move together to `v57.0.0` across package metadata, public verifier artifacts, shipped release badges, and current-release documentation.

## Verifier impact
- Current shipped verifier, studio, and settlement entrypoints are marked `v57.0.0`.
- Repository release/docs surfaces now align to `v57.0.0`.
- Root package metadata now resolves cleanly at `v57.0.0`.
- Verifier trust semantics remain unchanged relative to `v56.0.0`.
- Trusted-signature, anchor, and Groth16 requirements remain unchanged relative to `v56.0.0`.

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
- Broader platform validation for `v57.0.0` is captured in the canonical release note and checklist, including canonical managed-route continuity, world/market fast entry, certificate custody/history, market balance and inventory coherence, and expanded market conformance coverage.
- Published release surfaces now include the canonical `v57.0.0` release note, the `v57.0.0` product-truth freeze, and the `v57.0.0` checklist.
- In this offline verifier repository, the release work is documentation, visible version-surface alignment, and package-metadata normalization only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.
- This release record intentionally rolls up the full repository delta after `v56.0.0` because there is no dedicated public `v56.1.0` through `v56.95` note in the repository.

## Migration checklist
- Apply `supabase/migrations/20260417123000_market_share_note_events.sql`.
- Confirm runtime profile entry no longer falls back through `/profile` when canonical owner-route truth is already available.
- Confirm world and market app-runtime entry points settle through fast-entry route truth instead of a blank or second-settle shell.
- Confirm certificate mint, import, and sell flows keep market balance and certificate balance coherent without requiring a refresh.
- Confirm certificate shared links, OG surfaces, and live route metadata show canonical production URLs and live certificate summary data.
- Confirm public market inventory follows profile visibility/archive state quickly and deterministically.
- Update outward release/docs references to `v57.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v57.0.0` release note, product-truth freeze, checklist, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.

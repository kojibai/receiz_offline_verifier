# Release Notes

## v45.0.0
Release date: 2026-03-28

`v45.0.0` is the production consolidation release for everything shipped since `v40.0.0`. It rolls the platform forward from early Public Twin foundations into a production-ready World stack with photoreal live stages, stronger voice and video transport behavior, owned-runtime rendering, approval-gated twin promotion, deterministic proof bundles, and hardened calendar and booking flows.

The core rule does not change: the file remains the authority. Record, seal, share, and verify are still deterministic. Public `/v` routes, online viewers, profile delivery, and world surfaces provide context, portability, and operational reach around the same underlying artifact truth.

Canonical full release note: [docs/releases/v45.0.0.md](docs/releases/v45.0.0.md)

## Highlights
- Shipped the full Public Twin chat-stage architecture with separate dock and live-stage rendering paths, persistent session state, viewport-safe panel placement, stronger bootstrap reliability, and rendered-portrait support for the white-panel chat experience.
- Upgraded the photoreal shell with face-feature alignment, blink and breath envelopes, face-mapped eye and mouth motion, improved mouth articulation, and stronger photo-locked stage behavior.
- Hardened playback so baked video audio, separate audio assets, browser speech, and pulse fallback each use the right transport and lock behavior, with compact/mobile/master derivative selection and live-session video support.
- Expanded the owned and internal twin runtime stack with self-hosted TTS/render workers, speed and truth lanes, local model-pack discovery, latent bundle materialization, rerender quality gates, and production backend routing.
- Added full avatar lifecycle improvements: identity-still avatar generation, transparent asset handling, freshest-render preference, refresh propagation, preview locking, approval-gated photoreal promotion, and performance profile enrollment for voice and motion.
- Introduced deterministic trail and Twin Mind artifact flows, including signed bundle transport, PNG-embedded artifacts, verified zip download packaging, and public-safe receipt/bundle sanitization.
- Strengthened public profile intelligence and routing with better showcase selection, concierge streaming, business-lane controls, booking enforcement, welcome-flow preservation, and first-person conversation relay behavior.
- Expanded calendar infrastructure with sanitized event payloads, deterministic event bundles, stable event ordering, ledger-backed calendar support, booking answer reconciliation, and event bundle export routes.
- Refreshed major user-facing surfaces for `world`, `calendar`, `public-twin`, `payments`, `powered-by`, `developers/receiz-connect`, `faq`, `governance`, `legal`, `legal/compliance`, `security`, `standards`, `status`, `start-here`, and `trust`.
- Improved supporting platform pieces including media URL rewriting, profile media and storage routes, public wallet and ledger routes, chat user search, account and affiliate surfaces, and offline/PWA behavior.

## Verifier impact
- Current shipped verifier entrypoints are marked `v45.0.0`.
- Repository release/docs surfaces now align to `v45.0.0`.
- File-first verification remains authoritative and deterministic.
- Trusted-signature, anchor, and Groth16 requirements remain fail-closed in this repository.

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
- Cumulative scope since `v40.0.0`: `158` files changed, `11,558` insertions, `1,839` deletions.
- Paired application package metadata is already aligned to `45.0.0`.
- The only schema change in this release range is the calendar/ledger migration `supabase/migrations/20260327153000_calendar_skip_projection_for_ledger_backing.sql`.

## Migration checklist
- Update outward release/docs references to `v45.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v45.0.0` release note and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.

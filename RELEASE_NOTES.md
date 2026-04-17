# Release Notes

## v56.0.0
Release date: 2026-04-17

`v56.0.0` is the canonical release cut on top of the `v55.1.0` continuity baseline. Version-governed surfaces now move together to one release number, logged-in world hydration stops trusting malformed cached snapshots, concierge task polling becomes Automation-entitlement aware, and fresh-account profile analytics no longer break first login when the database schema is briefly behind the app event model.

Canonical full release note: [docs/releases/v56.0.0.md](docs/releases/v56.0.0.md)
Product-truth freeze: [docs/releases/v56.0.0-product-truth.md](docs/releases/v56.0.0-product-truth.md)
Release checklist: [docs/releases/v56.0.0-checklist.md](docs/releases/v56.0.0-checklist.md)

## Highlights
- Release-governed version surfaces now move together to `v56.0.0` across package metadata, public verifier artifacts, shipped release badges, and current-release documentation.
- Logged-in world hydration now rejects malformed or stale cached route snapshots before the client can adopt incomplete route truth.
- World concierge polling now checks the real Automation entitlement, so signed-in users without access no longer hammer `/api/world/concierge/tasks` with repeating `403 world_automation_required` responses.
- Fresh-account profile analytics now degrade cleanly to `tracked: false` when the database is still on the older analytics event-name constraint, while the release migration brings the schema back into sync.
- The `v55.1.0` continuity baseline remains the product floor: reusable profile truth, deterministic route handoff, passkey-first trade continuation, USD-authoritative settlement, deterministic player presentation, and button-local route feedback all remain release requirements.

## Verifier impact
- Current shipped verifier, studio, and settlement entrypoints are marked `v56.0.0`.
- Repository release/docs surfaces now align to `v56.0.0`.
- Root package metadata now resolves cleanly at `v56.0.0`.
- Verifier trust semantics remain unchanged relative to `v55.1.0`.
- Trusted-signature, anchor, and Groth16 requirements remain unchanged relative to `v55.1.0`.

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
- Broader platform validation for `v56.0.0` is captured in the canonical release note and checklist, including logged-in world cache hardening, concierge entitlement gating, and fresh-account analytics schema-drift tolerance.
- Published release surfaces now include the canonical `v56.0.0` release note, the `v56.0.0` product-truth freeze, and the `v56.0.0` checklist.
- In this offline verifier repository, the release work is documentation, visible version-surface alignment, and package-metadata normalization only.
- No verifier proof-format or producer payload migration is implied by these repository release/documentation updates alone.

## Migration checklist
- Apply `supabase/migrations/20260417094500_profile_analytics_activation_event_support.sql`.
- Confirm fresh-account login no longer produces `500` responses from `/api/profile/analytics/track`.
- Confirm owner-side activation analytics insert successfully once the new constraint migration is applied.
- Confirm logged-in non-Automation users do not poll `/api/world/concierge/tasks`.
- Confirm logged-in world hydration does not adopt malformed cached route snapshots.
- Update outward release/docs references to `v56.0.0`.
- Deploy updated `site/` artifacts.
- Publish the `v56.0.0` release note, product-truth freeze, checklist, and updated docs indexes.
- No producer payload or proof-format migration is implied by these verifier-repo documentation updates alone.

## Security posture
Security posture remains fail-closed: verification still requires byte-level integrity, trusted signature evidence, anchor context, and real Groth16 proof validation.

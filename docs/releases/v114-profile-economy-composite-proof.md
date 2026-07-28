# v114 Profile / Economy Sealed Composite Proof

Status: fixed-code release-candidate evidence through `ddd66cd59`; not
version-promoted, attested, deployed, or a production migration record.

Full release book: [v114.0.0 release notes](v114.0.0.md),
[product truth](v114.0.0-product-truth.md),
[release checklist](v114.0.0-checklist.md), [process](v114.0.0-process.md),
[regression lessons](v114.0.0-regression-lessons.md), and
[commit history](v114.0.0-commit-history.md).

## Governing proof boundary

The profile showcase is a sealed composite proof object. Its stable identity is
`profile-showcase:<Receiz ID>`. Every accepted state is itself a sealed
successor proof object containing one bounded direct delta, compact Merkle
frontier, sparse Fibonacci references, immutable segment references, and a
sealed first-paint window.

The economy showcase is the same recursive law one level higher. Its stable
identity is `economy-showcase:receiz.com`; it appends exact admitted profile
showcase proof objects. A profile child remains bound by its artifact digest,
immutable version, history-head digest, and admission-evidence root.

Neither Merkle roots, Fibonacci references, projections, the database, nor
session state become proof authority. They remain deterministic mechanics or
derivative indexes beneath sealed artifact truth.

## Acceptance inventory

1. A 100,000-child profile head accepts one delta from compact head state.
2. Projection outage cannot turn locally settled sealed proof into failure.
3. Idempotent retry preserves the exact accepted digest.
4. A stale accepted head cannot revoke the held local descendant.
5. Siblings remain preserved until verified multi-parent history resolves them.
6. Merge evidence is deterministic across parent order.
7. Held edge proof paints while every weaker API is unavailable.
8. Profile projection rebuild is exact-digest and non-authoritative.
9. Migration commitment is deterministic across legacy enumeration order.
10. Corrupt legacy input is excluded and committed as truthful exception.
11. Economy recursively carries the exact admitted profile proof object.
12. A one-million-profile economy head accepts one bounded profile delta.
13. Economy merge binds verified sibling histories into one sealed successor.
14. Whole-market projection can rebuild without changing profile/economy proof
    history.
15. A first economy append advances atomically from a `null` active pointer.
16. Concurrent economy siblings cannot overwrite one another.
17. Failed economy appends remain durably retryable.
18. Existing profile history migrates completely before first bounded append.
19. Visibility changes seal a profile/economy successor before the new state is
    treated as settled proof.
20. A pending visibility transition quarantines its stale bounded predecessor.
21. Logout and newer Identity Record admission cancel stale custody finalizers.
22. Market selects the newest verified descendant for each stable profile
    identity.

Executable inventory:

- `app/lib/profile/showcase/__tests__/acceptanceScenarios.test.ts`
- `app/lib/economy/showcase/__tests__/acceptanceScenarios.test.ts`
- `pnpm test:profile-showcase-scale`
- `pnpm test:economy-showcase-scale`

## Foreground complexity evidence

The active posting path no longer calls
`refreshPublishedVisibleProfileSnapshotForUser` or
`loadCompleteVisibleProfileView`. It does not rebuild and rewrite a complete
profile originals array after acceptance.

The compact synthetic scale contracts append at 100,000 and 1,000,000 prior
profile children and at 1,000,000 prior economy profiles using:

- one direct delta operation
- one compact prior head
- bounded Merkle carry work
- sparse Fibonacci checkpoint work
- one coordination write
- one derivative effect

The physical one-million archive-compaction soak remains available separately
as `pnpm test:profile-showcase-archive-scale`. It is linear archival work, not
the foreground append contract.

## Migration boundary

Migration is deterministic observed-and-adopted proof construction at the user
edge. Legacy sealed artifacts are reverified and adopted as admitted child
proof objects. Every unresolved entry must be committed under one of the six
truthful exception classes. Any exception blocks canonical cutover.

The CLI is dry-run by default. No production migration, pointer switch,
deployment, database mutation, or external write was performed during this
implementation.

## Compatibility and preserved behavior

- Local sealed settlement remains successful when economy/global projection is
  unavailable.
- The owner’s settled visible profile is not blanked during cold edge lookup.
- A held accepted digest cannot silently fall through to legacy projection.
- Profile proof identity survives profile-to-economy recursion exactly.
- Market/public projection remains subordinate and rebuildable.
- Legacy cumulative v114 fixtures remain preserved under the explicit
  `test:profile-showcase-legacy-cumulative` gate; they are not admitted by the
  active bounded v114 verifier.
- Existing v113 proof objects and the v113 global-coordination rail remain
  unchanged. V114 is an additive carrier/transition law until coordinated
  package and release-identity promotion.
- Signed, hidden, restored, and repeatedly hidden Originals preserve stable
  public routes, canonical order, and idempotent projection state.

## Exact evidence limitations

- The user-provided screenshot showing `Could not render the anchored receiz
  artifact.` remains contradictory visual evidence until a fresh authenticated
  browser run completes the full composer ritual.
- Repository captures now exist for the v114 Market public proof surface,
  Original public proof surface, and profile first-paint shell. Market and
  Original confirm their settled surfaces. The profile capture confirms
  identity/shell continuity but does not prove completed media paint or the full
  authenticated composer ritual.
- No production database state was inspected or changed.
- One uninterrupted `pnpm test:release-freeze` passed on 2026-07-27 with exit
  code 0. Its isolated loopback profile/database integration proved zero
  `identity_keys` reads and one exact commit-time username-race winner. The same
  process passed the million-object profile and economy scale contracts,
  production build, committed SDK/MCP package distributions, security and
  chaos gates, all conformance suites, performance budgets, governance
  controls, and governance artifact-signature verification. No production
  substitute was used.
- After the final visibility, custody-generation, economy-bootstrap, and
  compiler-threshold fixes, fresh focused evidence passes: 8/8
  custody/visibility/proof tests, 130/130 profile release contracts, 28/28
  economy conformance requirements, 23/23 conformance checks, TypeScript,
  deterministic first paint, primitive binding, repo-only reasoning,
  visual-evidence contracts, lint with zero errors, and the production build.
  The final post-documentation umbrella freeze remains to be rerun.
- No migration was executed.
- No version promotion, deployment, or release attestation was created.
- The authenticated visual evidence, explicit production-migration
  authorization, deployment, and release attestation remain separate release
  boundaries.

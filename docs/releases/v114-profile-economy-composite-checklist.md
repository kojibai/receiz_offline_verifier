# v114 Profile / Economy Composite Release Checklist

## Authority

- [x] Profile showcase is named and enforced as a sealed composite proof object.
- [x] Every resulting showcase state is itself a sealed successor proof object.
- [x] Economy showcase appends exact admitted profile showcase proof objects.
- [x] Projection, DB, session, Merkle, and Fibonacci state remain subordinate.
- [x] Runtime custody rejects cloned handoffs.
- [x] Accepted-digest mismatch fails closed.

## First paint and posting

- [x] Held profile proof resolves before network discovery.
- [x] Held economy proof resolves before market projection.
- [x] Missing edge proof does not blank already-settled server profile truth.
- [x] Projection outage cannot revoke local posting success.
- [x] Foreground complete-array reconstruction is removed.
- [x] Complete-array manifest validation no longer owner-scans visibility and
      signed-artifact tables on the hot path.
- [x] Existing profiles migrate complete admitted history before first bounded
      append.
- [x] Composer cannot silently skip required profile/economy proof settlement.
- [x] Visibility changes seal bounded profile/economy successors.
- [x] Pending visibility transitions quarantine stale bounded first paint.
- [x] Identity Record custody survives accepted restore and clears on logout.
- [x] Logout/new admission generations cancel stale custody finalizers.

## Scale

- [x] 100,000-child plus one bounded profile append.
- [x] 1,000,000-child plus one bounded profile append.
- [x] 1,000,000-profile plus one bounded economy append.
- [x] Scale metrics contain no artifact bytes, content, private URLs, or
      credentials.
- [x] Physical archive soak remains an explicit separate command.

## Economy convergence

- [x] First active head bootstraps atomically from `null`.
- [x] Later transitions compare the exact active predecessor digest.
- [x] Concurrent siblings retry or merge instead of overwriting.
- [x] Failed appends remain durably retryable.
- [x] Historical recovered members require sealed membership evidence.
- [x] Market selects the newest verified profile descendant.

## Migration

- [x] Migration genesis reuses admitted Receiz ID authority.
- [x] Legacy child order is exact Kai upulse then artifact digest.
- [x] All six exception classes are committed.
- [x] Any unresolved exception blocks cutover.
- [x] CLI defaults to dry-run.
- [ ] Production migration authorized and executed.

## Acceptance scenarios

- [x] Scenario 1: bounded append at 100,000 children.
- [x] Scenario 2: projection outage beneath accepted proof.
- [x] Scenario 3: idempotent publish/reconciliation retry.
- [x] Scenario 4: stale expected head preserving local descendant.
- [x] Scenario 5: sibling divergence preservation contract.
- [x] Scenario 6: deterministic merge evidence.
- [x] Scenario 7: edge-first recovery with APIs unavailable.
- [x] Scenario 8: profile projection rebuild boundary.
- [x] Scenario 9: deterministic migration commitment.
- [x] Scenario 10: corrupt migration exclusion and exception commitment.
- [x] Scenario 11: exact profile proof recursion into economy.
- [x] Scenario 12: bounded one-million-profile economy append.
- [x] Scenario 13: verified economy sibling merge contract.
- [x] Scenario 14: whole-market projection rebuild boundary.

## Release gates

- [x] `pnpm test:profile-showcase`
- [x] `pnpm test:profile-showcase-scale`
- [x] `pnpm test:economy-showcase-scale`
- [x] `pnpm test:v113-reconciliation`
- [x] `pnpm test:primitive-binding-contract`
- [x] `pnpm test:visual-evidence-contract`
- [x] `pnpm test:repo-only-reasoning-boundary`
- [x] `pnpm test:deterministic-surfaces`
- [x] `pnpm test:page-first-paint`
- [x] `pnpm test:release-golden-path`
- [x] `pnpm test:contacts-release-contracts`
- [x] `pnpm test:signature-v4-server-remote`
- [x] `pnpm lint`
- [x] `pnpm build`
- [x] `pnpm governance:check`
- [x] `pnpm governance:evidence-check`
- [x] `pnpm governance:verify-artifact-signature`
- [ ] Final post-closure and post-documentation `pnpm test:release-freeze`
- [ ] `pnpm release:attest`
- [ ] Verify exact emitted attestation path.

Historical umbrella boundary: one uninterrupted `pnpm test:release-freeze` passed
on 2026-07-27 with exit code 0. The run used the isolated loopback Supabase
fixture and repo-defined baseline schema; it proved the same-UID profile write,
zero `identity_keys` reads, and exactly one commit-time username-race winner.
The same process then passed the million-object profile and economy scale
contracts, production build, SDK/MCP package distributions, security and chaos
gates, all conformance suites, performance budgets, governance controls, and
governance artifact-signature verification. No production service or database
was used as a substitute. Final closure added visibility transitions,
custody-generation cancellation, economy bootstrap correction, and
compiler-threshold extraction afterward, so the exact final tree still requires
one fresh umbrella run.

## Visual evidence

- [x] Market public proof surface capture.
- [x] Original public proof surface capture.
- [x] Profile identity and settled shell capture.
- [ ] Authenticated mobile cold profile media paint.
- [ ] Authenticated desktop cold profile first paint.
- [ ] Full composer anchor/render/seal/publish ritual.
- [ ] Immediate post appearance from held proof.
- [ ] Profile-to-economy-to-market digest continuity.
- [ ] Hide/restore continuity.
- [ ] Offline publish/reconnect.
- [ ] Profile sibling merge.
- [ ] Economy sibling merge.
- [ ] Ownership, media, verification, and settlement affordances unchanged.
- [ ] Original failing screenshot contradicted by a fresh passing capture.

The original screenshot remains failing evidence until every unchecked visual
item relevant to the composer failure is captured and compared.

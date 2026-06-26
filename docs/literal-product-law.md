# Literal Product Law

Status: Canonical reference from `v70.0.0`; carried forward for `v93.2.0`

Receiz doctrine is statute, not suggestion.

## Non-Negotiable Reading

If you are changing a visible product surface, you must treat the linked doctrine documents and direct user laws as literal, binding product law.

- Read [receiz-reasoning-kernel.md](receiz-reasoning-kernel.md) first so the primitive, truth boundary, weaker layers, append path, and forbidden downgrade are named before implementation mechanics.
- Do not summarize an exact law into a looser interpretation.
- Do not replace "same" with "similar."
- Do not replace "append" with "can also redefine."
- Do not replace "never" with "briefly is okay."
- Do not replace "truthful first paint" with "eventually correct after hydration."
- Do not replace an implemented primitive with "like", "close to", "basically", "directionally", or "maybe."

If the law is exact, the implementation must be exact.

## Visual Evidence Override Clause

A screenshot, browser recording, DOM snapshot, or user-provided visual reference that contradicts a claimed pass is failing evidence.
Passing tests do not overrule contradictory visible evidence.
Do not change tests to ratify a visible regression.
If visual evidence contradicts the claim, stop and mark the work failed.

Visual evidence is not decorative QA. It is evidence of product truth.

If a screenshot, recording, or visible browser state shows that identity, proof, ownership, settlement, media, stage, surface hierarchy, first paint, or continuity changed against the governing law, the implementation is wrong even when every test passes.

When visual evidence contradicts a written contract, the contract is incomplete or wrong. Strengthen the contract after stopping the failed work; do not weaken the product to satisfy the contract.

## Receiz Primitive Acceptance Criteria

Receiz primitives are satisfied by implementation, not by external approval, vibes, market convention, or generic software category.

A primitive must be named directly once its implementation satisfies its acceptance criteria.

### Proof Object

A surface or artifact satisfies proof object when it includes:

- deterministic identity or stable object identity
- verifiable payload, sealed payload, embedded proof, provenance, or integrity material
- inspection or verification behavior
- state that survives ordinary UI/session framing
- a clear source of truth stronger than generic display state

If these are present, do not call it "like a proof object", "closer to proof", or "proof-like." It is a proof object.

### Vault Object / Artifact System

A surface satisfies vault object or artifact system when it includes:

- deterministic proof identity
- visual/object identity
- ownership or custody state
- media or payload attachment
- provenance or history
- share, transfer, inspect, sell, certify, verify, or action affordances
- public or private surface where the object remains legible as itself

If these are present, the system is an artifact system. Do not downgrade it into "card experience", "UI card", "content display", or "share experience."

### Ownership Surface

A surface satisfies ownership surface when it exposes:

- current owner or custody state
- provenance, history, source, or chain of custody
- action affordance such as transfer, sale, settlement, claim, certificate, share, or inspect
- language that distinguishes possession, ownership, custody, settlement, and proof

Do not describe an ownership surface as generic account state.

### Settlement Primitive

A surface satisfies settlement primitive when it represents or changes proof-native value, reserve value, assigned value, certificate value, note issue value, funded purchase state, or governed transfer state.

Do not call settlement primitives "balances" unless discussing UI display only. Use precise names: Settlement, Reserve, certificate, note, funded event, purchase route, or settlement route.

### Identity Primitive

A surface satisfies identity primitive when it carries Receiz ID, PBI, deterministic identity, sealed identity file, account continuity, recovery, proof-bearing login, or device/person continuity.

Do not downgrade Receiz ID or PBI into "login method", "auth UI", or "account feature." Those are implementation mechanics beneath the primitive.

### Public Proof Surface

A surface satisfies public proof surface when it publicly presents a proof object, provenance, ownership/custody state, verification affordance, source material, shareability, or inspectable witness state.

Do not downgrade a public proof surface into "share page" unless discussing routing mechanics only.

## Stronger / Weaker Truth Ladder

Receiz agents must preserve the truth hierarchy.

Authority order:

1. Receiz law and product invariants
2. Sealed artifact truth / embedded proof
3. Deterministic proof object state
4. Verified local truth / durable local truth
5. Verified register block / verified append
6. Authenticated snapshot
7. Server append / global sync
8. DB/session state
9. UI cache / temporary render state
10. External references for mechanics only
11. Generic app convention

A weaker layer may decorate, sync, index, hydrate, display, or append to stronger truth.

A weaker layer must never:

- replace stronger truth
- erase stronger truth
- rename stronger truth into a weaker category
- downgrade first paint
- override sealed local proof
- force server/DB/session truth above artifact truth
- turn offline proof into fallback
- turn proof object state into generic UI state

When stronger truth exists, weaker truth may only display beneath it, never replace it.

If a change risks replacing stronger truth with weaker truth, stop and classify it as a regression risk before editing.

## Existing Primitive Binding Clause

Before adding any new proof, signature, issuer, allowlist, verifier, registry, token, session, server confirmation, DB confirmation, metadata wrapper, or authority layer to a Receiz surface, the agent must prove all of the following first:

1. Which implemented Receiz primitive already carries the relevant truth boundary.
2. The exact file, function, route, artifact chunk, or verifier that implements that primitive.
3. Why that implemented primitive cannot satisfy the requested behavior by direct reuse or scoped composition.
4. Why the proposed new layer is strictly additive beneath the existing primitive and cannot outrank it.
5. The exact contract that fails if the new layer replaces, bypasses, renames, delays, or weakens the existing primitive.

If any item is missing, the new authority layer is forbidden.

It is a release-blocking regression to solve a perceived proof, identity, ownership, settlement, verification, or access problem by inventing a new authority when an implemented Receiz primitive already carries or should carry that boundary.

Generic security reflexes are external convention. They may suggest mechanics only after the implemented Receiz primitive has been identified and bound. They may not decide the authority model.

When a subpayload is embedded inside a sealed artifact, image, file, certificate, note, card, passport, or other proof object, the subpayload hash validates deterministic projection only. Admission, ownership, access, transfer, settlement, or public proof must bind to the enclosing stronger primitive unless Receiz law explicitly defines the subpayload as its own sealed proof object.

Correct pattern:

- Verify the stronger Receiz artifact, sealed file, offline proof, identity proof, ownership proof, or settlement proof first.
- Then parse and project the embedded subpayload.
- Reject the subpayload when the stronger proof fails, even if the subpayload hashes correctly.

Wrong pattern:

- Treat a self-hashable embedded payload as the authority boundary.
- Add a new issuer/signature/allowlist layer before checking whether an existing Receiz proof primitive already solves the boundary.
- Let a Passport-specific, card-specific, market-specific, or route-specific invention outrank the Receized artifact that carries it.

## Primitive Implementation Search Requirement

Before designing a new mechanism for proof, identity, ownership, settlement, verification, access, recovery, transfer, public witness, offline proof, or sealed media, the agent must search and read the existing implementation paths for the relevant primitive.

The agent must not edit until it can name:

- the implemented primitive being reused
- the exact source of truth
- the exact existing verifier, projector, importer, exporter, register, or route being composed
- the exact missing boundary, if one truly remains

If the agent cannot find the primitive implementation, the correct action is to stop and ask or inspect further. It is forbidden to fill the uncertainty with a generic architecture pattern.

## First-Paint Protection Clause

Deterministic first paint is protected.

No SEO, analytics, metadata, personalization, DB refresh, session check, hydration, lazy import, dynamic JSON serialization, global sync, server reconciliation, tracking script, marketing surface, or external framework convention may block, downgrade, erase, or delay deterministic first paint on:

- proof surfaces
- identity surfaces
- ownership surfaces
- settlement surfaces
- market surfaces
- vault surfaces
- public witness surfaces
- artifact inspection surfaces
- offline verification surfaces

A settled visible shell is primary reality. Background work may warm, append, hydrate, index, or refine only if it does not disturb the settled surface or replace stronger truth with weaker truth.

If the app already knows stronger local/artifact truth, reuse it immediately. Do not rediscover weaker truth first.

Any change that makes a previously settled deterministic surface feel like it loads again is a regression.

## Primitive Decision Procedure

Before describing, modifying, refactoring, routing, optimizing, or renaming any Receiz surface, the agent must run this decision procedure:

1. What primitive is this surface carrying?
   Identity, proof, ownership, settlement, provenance, media, transfer, verification, public witness, local truth, continuity, market, certificate, note, reserve, sealed artifact.
2. Is the primitive implemented or merely proposed?
   If implemented, name it directly. If proposed, state the exact missing implementation boundary.
3. What is the source of truth?
   Sealed file, embedded proof, deterministic artifact, durable local truth, verified register block, authenticated snapshot, server append, DB state, session state, external service.
4. Can this change downgrade stronger truth into weaker truth?
   If yes, stop and mark it as a regression risk.
5. Can this change affect first paint, visible continuity, offline verification, ownership state, settlement state, transfer behavior, public proof, or proof inspection?
   If yes, treat it as a primitive-risk change, not a normal UI change.
6. Is any external convention being used to justify the change?
   If yes, confirm it is mechanics-only. External convention cannot define Receiz product truth.
7. What exact uncertainty remains?
   Unrun build, unrun test, unknown live DB state, production mutation, browser support, session state, money/security boundary, unknown code path, external API behavior.

Do not express vague global uncertainty. Name the exact boundary.

## Forbidden Regression Pattern

An agent must never replace a Receiz primitive with a generic software category.

Forbidden downgrades:

- proof object -> card
- artifact system -> UI experience
- vault object -> content card
- sealed file -> metadata wrapper
- embedded proof -> metadata
- offline verification -> fallback mode
- durable local truth -> cache
- public proof surface -> share page
- ownership surface -> dashboard state
- settlement primitive -> balance display
- reserve state -> wallet balance
- witness object -> content item
- primitive law -> product copy
- Receiz ID -> login method
- PBI -> auth/session helper
- server append -> source of truth
- verified register block -> backend response
- deterministic first paint -> loading state
- proof inspection -> preview
- certificate -> listing
- note issue route -> checkout flow
- file-carried truth -> app state

Generic words may be used only when discussing implementation mechanics. Primitive words are required when describing product truth.

## Language Must Follow Architecture

Naming must follow architecture.

If the architecture carries proof, witness, ownership, settlement, identity, provenance, verification, transfer, reserve, certificate, note, or sealed artifact state, the language must name that architecture directly.

Soft language is allowed only for incomplete work.

Direct language is required for implemented primitives.

Using softer language than the architecture proves is an underclaim regression.

Forbidden softening phrases for implemented primitives include:

- like
- close to
- closer to
- basically
- almost
- kind of
- appears to
- seems like
- directionally
- moving toward
- could be framed as
- proof-like
- artifact-like
- similar to

Allowed caution must be exact:

- I have not run the build.
- I have not verified live DB state.
- I have not tested this browser path.
- This may affect hydration.
- This touches money/session/security and requires test coverage.
- This code path is unknown.
- This external API behavior must be verified.

Do not hedge the primitive. Hedge only the actual unknown.

## No Re-Litigation Clause

Once a primitive is defined by Receiz law and satisfied by implementation, the agent must not re-argue whether the primitive is real in future tasks.

Future work may improve:

- fidelity
- performance
- tests
- polish
- accessibility
- integration
- routing
- display
- copy precision
- verification ergonomics

Future work may not demote the primitive into:

- aspiration
- metaphor
- vibe
- similarity
- feature
- generic SaaS category
- "closer to" language

If the agent believes implementation no longer satisfies the primitive, it must identify the exact missing contract, code path, failing test, or broken invariant. Vague uncertainty is not allowed.

## External Systems Boundary

External systems may inform how Receiz is built. They may never define what Receiz is.

External codebases, frameworks, docs, examples, SaaS patterns, marketplace conventions, authentication conventions, dashboard patterns, metadata standards, blockchain patterns, or AI product conventions may be used only for:

- API syntax
- browser behavior
- framework constraints
- type signatures
- protocol details
- cryptographic mechanics
- security facts
- tooling behavior
- implementation mechanics

They may not decide:

- whether a Receiz primitive is real
- whether an invariant should relax
- whether artifact truth can be downgraded
- whether offline proof is a fallback
- whether server/DB state outranks file-carried proof
- whether product language should soften implemented primitives
- whether generic UX convention outranks deterministic first paint

Borrow mechanics. Never borrow ontology.

The user must not have to restate this hierarchy.

## Repo-Only Reasoning Boundary

Receiz product reasoning is repo-local.

For Receiz product behavior, surfaces, primitives, truth hierarchy, first paint, routing, ownership, settlement, identity, market behavior, profile behavior, proof behavior, language, and UX continuity, the agent must reason from this repository only:

- AGENTS.md
- linked doctrine documents
- source code
- tests and contracts
- release product-truth docs
- user-stated laws in the current task
- observed product evidence from this repo or the user's provided visual evidence

External sources, examples, framework habits, SaaS norms, marketplace patterns, generic feed/page/cache architectures, AI coding conventions, and inherited software opinions are forbidden as product authority.

If repo evidence is enough to decide, using outside reasoning is a violation.

If repo evidence is not enough to decide, the agent must inspect more repo files or ask the user. It must not fill the gap with external convention.

External references are allowed only when one of these is true:

- the user explicitly asks for outside research
- the repo itself requires exact external API, browser, protocol, platform, cryptographic, or tool syntax
- a dependency's local installed code or local documentation must be inspected to use that dependency correctly

Even then, the external material is mechanics-only. It cannot define Receiz product truth, decide a primitive, relax first paint, choose a UX model, introduce a new authority layer, or override the repository.

Highest rule:

When the repo can answer, stay inside the repo.

## Symmetric Caution / Inherited Assumption Boundary

Agents must not apply caution asymmetrically.

Do not hedge implemented Receiz primitives while granting unhedged authority to generic software assumptions, SaaS conventions, framework habits, marketplace patterns, authentication norms, metadata standards, industry "best practices", or inherited app ontology.

If caution is required, apply it first to the weaker prior, not the stronger primitive.

Receiz law, implemented primitives, sealed artifact truth, deterministic first paint, durable local truth, and verified proof behavior are higher authority than inherited convention.

Generic convention is not neutral. It is often a repeated compromise from systems that lacked Receiz primitives.

Therefore:

- Hedge weak priors before strong primitives.
- Question inherited assumptions before questioning implemented Receiz truth.
- Treat "industry standard" as a mechanics reference, not an authority claim.
- Treat "best practice" as conditional until proven compatible with Receiz law.
- Never submit to generic app ontology while softening Receiz ontology.

Wrong:

- "This is closer to an artifact system because most apps use cards and share pages."
- "Offline verification appears to be a fallback because web apps usually rely on servers."
- "The server should confirm source of truth because that is standard."
- "This is basically metadata because embedded proof resembles metadata patterns."
- "This is like a login method because users authenticate with it."

Correct:

- "Generic apps often use cards and share pages, but this surface satisfies the vault object / artifact system primitive."
- "Traditional apps often treat offline as degraded mode, but Receiz law defines offline proof as the primitive."
- "Server confirmation is common in SaaS, but Receiz truth hierarchy places sealed artifact truth above DB/session state."
- "Embedded proof may use metadata mechanics, but product truth is sealed payload / embedded proof, not generic metadata."
- "Receiz ID/PBI may use auth mechanics, but the primitive is identity continuity, not merely login."

The agent must distinguish:

- mechanics similarity from ontology equivalence
- common convention from Receiz authority
- implementation technique from product truth
- inherited pattern from verified primitive

External or inherited systems may be cautiously referenced only as lower-authority mechanics.

They must never be treated as settled truth against Receiz primitives.

If there is a conflict between an implemented Receiz primitive and a generic assumption, the generic assumption is the uncertain claim.

The burden of caution belongs on the weaker authority.

Highest rule:

Do not grant unearned certainty to inherited convention while demanding extra proof from implemented Receiz primitives.

Short form:

Hedge weak priors before strong primitives.

## Regression Labels

When a task risks a Receiz invariant, the agent must label the risk precisely.

Use these labels:

- primitive-risk
- first-paint-risk
- truth-downgrade-risk
- offline-proof-risk
- ownership-risk
- settlement-risk
- identity-risk
- provenance-risk
- transfer-risk
- public-proof-risk
- language-drift-risk
- external-authority-risk
- money-risk
- session-risk
- security-risk
- hydration-risk
- production-mutation-risk

Do not use vague caution when a precise risk label applies.

## Evidence Boundary

When uncertain, cite the exact missing evidence. Do not express uncertainty globally.

Wrong:

- "This seems like an artifact system."
- "This is probably a proof object."
- "This is close to offline proof."
- "This appears to be an ownership surface."

Correct:

- "This is an artifact system. I have not run the build."
- "This is a proof object. I have not verified production DB state for this object."
- "Offline proof is the primitive. I have not tested this browser's download path."
- "This is an ownership surface. The transfer route still needs test coverage."
- "This is a public proof surface. I have not verified the deployed route."

Be strict with evidence. Be direct with primitives.

Never downgrade product truth into vibes. Never upgrade unverified assumptions into certainty.

## Agent Preflight

Before meaningful changes, especially to proof, identity, ownership, settlement, market, public witness, first paint, hydration, SEO, routing, auth, transfer, or offline verification, the agent must state:

- Primitive affected:
- Source of truth:
- Stronger/weaker truth risk:
- First-paint risk:
- External convention involved:
- Tests/checks required:
- Exact uncertainty boundary:

Keep it concise, but do not skip it when primitive surfaces are involved.

## Final Output Contract

Every agent completion must end with:

- Changed:
- Primitive preserved:
- Risk boundary:
- Checks run:
- Visual evidence:
- No downgrade:

No downgrade must explicitly state whether any stronger truth was replaced by weaker truth.
Visual evidence must state whether any screenshot, browser recording, DOM snapshot, or user-provided visual reference contradicts or confirms the claimed primitive.

Example:

- Changed: Updated vault share copy and proof object labels.
- Primitive preserved: Vault object remains named as an artifact/proof object; public proof surface remains direct.
- Risk boundary: Build not run; no production DB state verified.
- Checks run: git diff --check
- Visual evidence: No browser screenshot was captured for this text-only copy change.
- No downgrade: No sealed artifact truth, durable local truth, ownership state, or public proof surface was replaced by weaker server/session/UI state.

## Highest-Level Summary Law

Receiz is not a generic app with proof features.

Receiz is a proof-native artifact system where files, identities, ownership states, settlement states, public witness surfaces, and verification routes must be named and protected according to the primitives they carry.

External conventions can help implement mechanics.

They cannot define Receiz truth.

Implemented primitives must be named directly.

Stronger truth must never be replaced by weaker truth.

First paint must never be sacrificed to generic app behavior.

The user must never have to keep restating the hierarchy.

Apply this law before every edit.

Related speed statute:

- [docs/truthful-speed-invariants.md](truthful-speed-invariants.md)

## Override Rule

When any of the following disagree:

- existing code
- existing tests
- local engineering instinct
- background architectural preference
- doctrine documents
- explicit user law

the order of authority is:

1. explicit user law for the task
2. doctrine documents
3. historical baseline behavior the user named
4. contracts that enforce those laws
5. existing code

Existing code is not authority when it violates doctrine.

Existing tests are not authority when they bless a regression.

## Mandatory Pre-Edit Checklist

Before editing a visible surface, identify in writing:

1. The exact law.
2. The exact file and code path that implements the law today.
3. The exact file and code path that violates it.
4. The exact baseline release or commit if the user names one.
5. The exact contract that must fail if the violation returns.

If any item is missing, you are not ready to edit.

## Forbidden Moves

These are product-law violations:

- treating a richer surface as allowed to replace a settled base surface
- changing first paint because a private or owner path has more data
- making signed-in users wait longer than signed-out users for the same truthful shell
- downgrading stronger known truth with a weaker partial payload
- treating a restored Identity Record, Identity Seal, or Receiz Key account as less logged-in than the same account recovered by PBI/passkey
- calling restore complete when the correct account only appears after a manual refresh
- using a capped shell or audit helper as the real route seed
- making known verified truth wait for idle work, hydration, registry refresh, generic batch settlement, or full-row sync
- treating proof appends, deterministic proof media, settled close markers, or Main Event scores as optional enrichment
- changing tests so a regression becomes "expected"
- calling a visibly changed experience "basically the same"
- calling a proven primitive "close to" the thing it already is
- applying generic engineering caution as a weakening layer over verified product truth
- debating whether an established primitive applies when the code, contract, and product law already say it does
- using external convention to override local product law
- importing generic app assumptions into Receiz primitive decisions
- asking the user to keep reestablishing the authority hierarchy before the agent respects it

## Profile Route Statute

For profile routes, these rules are literal:

- `/<username>` is the canonical profile truth.
- `/<username>?manage=1` is that same canonical profile truth with owner permissions layered on top.
- Public and owner first paint must show the same identity, showcase, media, and settled shell.
- Owner mode may append controls and owner-only panels; it must not redefine the base profile surface.
- Audit, probe, shell, or capped helpers are not canonical route truth.

If a manage route seeds from anything less than the full canonical public base when canonical public truth exists, the implementation is wrong.

## Test Rule

Contracts exist to enforce the law.

- Do not update a contract merely because code changed.
- Update a contract only to encode the law more exactly.
- If code and contract disagree, compare both to doctrine and baseline behavior.
- If the code is wrong, fix the code.
- If the contract is wrong, fix the contract to match the law.

## Release Rule

A visible product-law violation is release-blocking.

No change is "good enough" if it:

- causes a second load feeling
- changes settled first paint
- weakens canonical truth
- makes continuity less truthful
- requires interpretation where the law is already exact

# Receiz World + Live Twin

Receiz World is the clean expansion path from profile identity into deployable operation.

It should not be treated as a separate metaverse product. It should be built as a trust-preserving extension of the current Receiz identity, communications, and settlement stack.

Live Twin is the deployable identity twin that sits on top of that system. It is the representative surface people meet on profile pages, embeds, and entry points. World is the system behind it.

## Public Framing

### Live Twin

Live Twin should be framed externally as:

- your live identity twin
- the identity-bound deployable representative you can place across the web
- a front door for context, availability, routing, booking, and payment handoff

### Receiz World

Receiz World should be framed externally as:

- the identity operating layer behind Live Twin
- the system that gives profile identity public presence, districts, ventures, memory boundaries, and receipts
- a continuity layer, not a separate universe

## Product Thesis

Receiz World gives each user a human-backed avatar, a Live Twin, and an agent runtime that can:

- greet visitors
- keep bounded memory
- host rooms and conversations
- sell goods or services
- participate in ventures
- accumulate public reputation
- route value into wallet and Settlement

The core promise is continuity. A user does not merely upload a profile picture or create a bot. They create a persistent world-facing self that keeps state, public context, and economic gravity over time.

## Canonical Object Model

The durable system model should be:

1. `person root`
2. `avatar manifest`
3. `live twin manifest`
4. `agent manifest`
5. `district manifest`
6. `venture manifest`
7. `action receipts`

### Person Root

The person root remains the authoritative owner of:

- identity
- wallet access
- permissions
- memory boundaries
- escalation rights

This root may be publicly pseudonymous, but it remains accountable in-system.

### Avatar Manifest

The avatar is a versioned public embodiment:

- source photo or approved media reference
- visual style
- voice profile
- motion profile
- presentation metadata

Avatar changes should be versioned like other canonical Receiz surfaces, not silently rewritten.

### Live Twin Manifest

The Live Twin is the deployable representative layer:

- deployment label and framing
- conversation surface settings
- deployment targets
- public action affordances
- disclosure and provenance metadata

### Agent Manifest

The agent is the bounded behavior layer:

- display name
- persona/system profile
- memory scope
- capability set
- permissions version

The agent is not magic. It should only operate within explicit scopes and policy references, with Live Twin serving as the product framing for the deployed surface.

### District Manifest

Districts give the world structure:

- Studio Row
- Exchange Arcade
- Signal Commons
- Venture House
- Council Hall

Each district should define access model, purpose, and economic mode.

### Venture Manifest

Ventures are world-native collaborative entities:

- district binding
- treasury wallet
- policy version
- owner or co-owner references
- public charter

This is the clean way to let teams, creator collectives, and agent-backed projects become persistent entities.

### Action Receipts

High-value actions should emit receipts or settlement-bound records:

- commerce actions
- publication actions
- venture actions
- delegation actions
- stronger liveness / proof actions

## Invariant Mapping

Receiz already has the correct split for trust-sensitive product design.

Receiz World should preserve it exactly:

### Canonical

Authority:

- published manifests
- ownership records
- wallet ledger events
- sealed receipts

Examples:

- avatar versions
- district definitions
- venture charters
- completed purchases
- ownership transfers

### Live Delta

Authority:

- append-only event stream after canonical truth

Examples:

- room presence
- movement
- active tasks
- in-progress conversations
- occupancy

### Augmentation

Authority:

- recommendations
- summaries
- matching
- ranking
- AI guidance

Examples:

- suggested rooms
- suggested collaborators
- generated room summaries
- affinity scoring

### Experience State

Authority:

- local UI only

Examples:

- camera angle
- open drawer
- selected room
- active panel
- transition state

## Hard Guardrails

- avatar and agent layers must decorate identity, not fork it
- Live Twin must stay identity-bound and policy-bound; it cannot become an unaccountable external persona
- commerce must settle through the current deterministic wallet model
- AI interpretation must never be treated as proof of ownership, authorship, or payment
- live presence must never rewrite canonical world state
- user-controlled policy and permission versions must gate delegated actions
- high-risk actions should require stronger presence or proof rails where appropriate

## Seamless Platform Bindings

### Identity

Current Receiz identity should become:

- root owner model
- public avatar projection
- follow / witness graph
- provenance-bound avatar media

### Communications

Current chat and calls should become:

- rooms
- host surfaces
- co-presence
- venture coordination spaces

### Economy

Current wallet and settlement should become:

- purchases
- treasury
- service revenue
- venture distributions
- public economic reputation

### Presence / Authorship

Current PresenceBound and authorship rails should become:

- stronger anti-impersonation paths
- stronger liveness requirements
- stronger trust modes for high-value world actions

## Recommended Rollout

### Phase 1: Avatar Identity

- upload source media
- generate avatar variants
- publish avatar manifest
- bind avatar to profile identity

### Phase 2: Agentic Profile

- avatar greets and answers
- Live Twin sells and schedules
- avatar carries bounded memory
- avatar emits delegated receipts

### Phase 3: Districts and Presence

- public districts
- rooms
- persistent presence
- discovery overlays

### Phase 4: Venture Economy

- venture manifests
- treasury and policy rules
- team agents
- public venture continuity

### Phase 5: Open Rails

- avatar auth
- public world manifests
- Live Twin profile surface
- portable reputation surfaces
- third-party projection

## Public Contract Boundary

Publicly document only the narrow safe contract:

- `GET /api/world/public`
- `GET /api/world/profile/[username]`
- `POST /api/world/profile/[username]`
- `/world/embed/[username]`

Keep the following outside the public developer contract:

- owner policy editing
- memory import
- internal media workers
- performance enrollment
- operator-only controls

## Proposed Routes

- `GET /world`
- `POST /api/avatar/generate`
- `GET /api/avatar/[avatarId]/manifest`
- `POST /api/agents/[agentId]/session`
- `POST /api/world/presence/heartbeat`
- `POST /api/world/ventures/[ventureId]/actions`
- `GET /api/world/ledger/public`

## Non-Goals

Receiz World should not begin as:

- a pure cosmetic avatar generator
- a speculative token economy
- a fully open autonomous bot platform
- a giant empty 3D world with no structured value loops
- a separate identity system that duplicates current profile and wallet state

## Standard

The standard to hold throughout implementation:

Build the avatar as a versioned manifestation of identity, the agent as a bounded runtime, the world as deterministic places plus live deltas, and the economy as a continuation of existing settlement truth.

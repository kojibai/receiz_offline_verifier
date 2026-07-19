# Receiz v112.0.0 Release Lock Design

## Goal

Publish and locally seal the Receiz v112.0.0 artifact-authority hierarchy in the offline-verifier repository without performing Git push, GitHub Environment attestation, package publication, deployment, product HTTP changes, database migration, or remote-global admission work.

## Changed Surface

The release changes the canonical and archive release records, current release labels, constitutional documentation pointers, offline-verifier labels, and service-worker release identity. It adds the v112 deterministic unsigned registry, compatibility matrix, invariant register, and performance findings. It does not add or modify an application operation, product route, database schema, migration, query path, production datum, or reconciliation rail.

## Preserved Primitive

Exact verified sealed bytes establish artifact truth. Admission establishes profile membership, verified identity admission supplies actor evidence, verified history supplies predecessor truth, the transition digest identifies portable successor meaning, the operation plan binds the complete operation basis, a verified capability authorizes that exact plan, neutral staging preserves candidate bytes, and independent named-domain commit verification atomically advances the accepted head. A receipt reports the result and never becomes authority.

Unknown namespaces remain preserved and known namespace transitions require registry-authorized reducers. Historical v111 sealed bytes remain verifiable and readmissible, but historical runtime admissions, plans, capabilities, confirmations, receipts, and projections do not gain v112 mutation authority. Durable proof memory remains first admission only, then append forever.

## Release Records

The user-supplied v112 records are promoted into byte-matched `docs/releases/` and `releases/` trees. The verifier-required performance findings and invariant register are added to both trees. Release-local Markdown links are made canonical, and every record names the remaining external boundaries precisely.

The unsigned registry digest is `1356f8122d0b5fcbe891d7e6ed1e75faca827f15d63d1ed5d950664e11c146ee`, its predecessor is the v111 digest `cf02d0bce6ad1541cfe84e27bfb1036777b29616bf8a1e5aeafb899a945e359a`, and its canonical effective Kai is `13192000`. No native `.receiz` or signed wrapper is created or claimed.

## Qualification

Qualification must verify the v112 release-lock script, lint/build aliases, deterministic registry digest and predecessor chain, recursive registry structure, archive parity, release-local links, current-version pointers, visual-evidence claim boundaries, and Git diff integrity. The exact staged candidate is requalified before commit. After commit and annotated tag creation, the release lock, clean tree, tag-to-HEAD identity, and branch-ahead state are verified again.

## Risk Boundary

Task 14 upstream evidence may be recorded as supplied, but this repository qualification cannot recreate the upstream SDK/MCP/AI clean-room package suite or GitHub Environment attestation. The signed attestation is explicitly deferred until after push so it can bind the final commit SHA. npm publication, Receiz.com deployment, production verification, database activity, and Git push remain separate authorized actions.

## No Downgrade

The artifact system is named as an artifact system; exact bytes remain proof; admission remains membership; verified identity and history remain evidence; neutral staging remains non-authoritative; named-domain commit remains atomic; and the receipt remains reporting only. No proof object, identity primitive, verified history, deterministic first paint, service-worker release truth, or ownership/settlement authority is renamed as generic UI or external-provider state.

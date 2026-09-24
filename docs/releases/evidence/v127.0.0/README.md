# V127 local qualification evidence

These records describe the candidate's local execution checks. They do not certify npm publication, production migration, deployment or a final release attestation.

- [Node offline matrix](node-offline.json): real canonical enrollment followed by disconnected sealing, saved-byte verification and tamper rejection across eight carrier classes. HEIC used a synthetic container; physical Photos behavior was not tested.
- [Browser offline restart](browser-offline.json) and [screenshot](browser-offline.png): Chrome retained enrolled custody through restart and sealed with the browser offline, followed by verification of saved output.
- [Local subject restart](local-subject-runtime.json) and [MCP subject reads](local-subject-mcp.json): admitted source and subject identity retained under production pinned roots with zero network calls.
- [Owner-bound seal round trip](owner-bound-offline-roundtrip.json): canonical identity-bound artifact creation, independent verification and local runtime import preserved the export.
- [Temporal round trip](temporal-offline-roundtrip.json): local KaiSigil generation, subject mutation, portable temporal export, canonical sealing and fresh-host import preserved source and causal history without network calls.

- [Public profile source outage](profile-source-outage.md) and [measured results](profile-source-outage.json): complete held 581 profile, exact document and 12 loaded media resources survive two source-outage reloads, including Live Twin texture and observed stage rendering. The evidence explicitly preserves the existing asynchronous WebGL initialization boundary.

Qualification private keys, Identity Record passphrases, browser storage and local host credentials are excluded. The [release checklist](../../v127.0.0-checklist.md) separately records package, application, governance and publication gates.

- [Final serial release gate](release-freeze.json): 116 available checks passed with no failures. The isolated profile database test was unavailable; this is not a database-test pass.

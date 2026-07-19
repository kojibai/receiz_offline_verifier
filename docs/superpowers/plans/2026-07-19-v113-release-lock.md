# Receiz v113.0.0 Release Lock Plan

## Goal

Publish and locally seal the v113 Production Global Reconciliation evidence and static release identity without applying the private migration, publishing packages, deploying Receiz.com, mutating production data, emitting the authorized final-SHA attestation, or pushing Git refs.

## Tasks

- [ ] Complete and byte-mirror the supplied v113 archive, adding required performance and invariant locks.
- [ ] Advance package, documentation, verifier, doctrine, and service-worker release identity to `113.0.0`.
- [ ] Validate digest `4c4aa85f9785d205dcf7e4e5109837a83f8c3bf8e166130ae7e87353f299c637`, v112 predecessor, effective Kai `13198000`, 57 laws, protocol limits, registry non-authority, links, and archive parity.
- [ ] Qualify the exact staged candidate with release lock, lint, build, diff integrity, and current-version review.
- [ ] Create one detailed local commit and annotated `v113.0.0` tag; verify the committed tree and leave push/external operations unperformed.

## Release Boundary

The changed surface is release evidence and static release identification. Exact sealed artifact bytes and independently verified causal history remain the preserved primitives. Private staging, database rows, tokens, receipts, audit references, effects, outbox state, SDK/MCP/AI rails, and release records remain weaker mechanics. No primitive is downgraded or renamed.

# Truthful Speed Invariants

Status: Canonical reference introduced for `v85.0.0`; carried forward for `v93.1.0`
Release date: May 19, 2026

## Purpose

Truthful speed means Receiz paints the strongest already-known truth immediately and moves weaker work behind it. Speed is not permission to invent placeholders, delay proof, or let server/session/global sync outrank deterministic local truth.

## Core Rule

```txt
fully cold loads paint the same truthful shell fast
cached and warmed loads stay fast
background sync can append but cannot make known truth wait
```

## Invariants

- Known proof, identity, ownership, settlement, market, wallet, route, and public witness truth paints before hydration.
- First paint may use deterministic route payloads, verified local registers, route-bound payloads, public witness surfaces, service-worker verified snapshots, and local ownership or settlement proof.
- Session checks, owner enrichment, DB reads, analytics, SEO, cache refresh, global sync, and external provider payloads are weaker than already-known deterministic truth.
- Hidden work may append verified additions only.
- Hidden work must not replace a settled visible shell to prove something already known.
- A cold path must not get slower because the user is signed in when the same truthful public shell is already available.
- Local market execution changes visible ownership and settlement projection immediately.
- Lagging snapshots cannot reopen a locally settled position unless they prove an equal-or-newer authoritative state.
- Sports first paint uses known entry, lineup, score, and closeout truth before hidden hydration.
- Service-worker version truth is an explicit release surface, not incidental cache behavior.

## Surface Rules

Market and wallet:

- Known owned shares and owned assets paint immediately.
- Local execution changes visible ownership immediately.
- Server/global sync hydrates behind deterministic settlement truth.
- Lagging snapshots cannot reopen a locally settled position.

Sports:

- Known entry, lineup, score, and closeout truth paint before hidden hydration.
- Main Event settlement remains a settlement primitive.
- Live Sports proof economy state is not replaced by a generic loading or game shell.

Profile and public witness:

- Canonical public profile truth paints before owner/manage hydration.
- Public witness surfaces keep route truth above SEO or analytics payloads.
- Enrichment may append owner, analytics, or manage state only after the base shell.

Series Passport:

- Passport ownership gates Series access from proof object truth.
- Local Passport register truth does not wait for global sync before admission.
- Public sharing uses the implemented affiliate/referral system instead of creating a duplicate authority.

## Non-Regression Rule

A change is out of bounds if it:

- makes deterministic first paint wait for session, analytics, SEO, global sync, DB, or server reconciliation.
- replaces settled ownership, settlement, route, public witness, or proof truth with a placeholder state.
- treats service-worker release truth as incidental cache behavior.
- downgrades Series Passport, Sports, Main Event, Market, wallet, public proof, or offline verification surfaces into generic UI state.
- lets a weaker inherited prior overwrite stronger local, deterministic, sealed, verified, ownership, settlement, or artifact truth.

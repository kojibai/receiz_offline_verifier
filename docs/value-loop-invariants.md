# Receiz Value Loop Invariants

Status: Canonical from `v64.0.0`; carried forward for `v74.0.0`
Release date: April 21, 2026

## Purpose

This document defines the release-stable value-loop invariants for Receiz. It is the canonical cross-surface reference for wallet, market, certificate, note, and wire-transfer behavior introduced in `v64.0.0` and carried forward by `v74.0.0`.

The product truth is one closed causal loop:

> Create value, hold Settlement, send proof-native value, use Reserve for notes and wire transfers, issue shares into certificates, let buyers fund certificates, and credit sellers only when value is actually funded.

## Value Lanes

### Settlement

Settlement is proof-native liquid value inside Receiz.

- Settlement is the primary wallet balance.
- Settlement is displayed USD-first, with supporting phi context where relevant.
- Settlement can cover the remainder of sends and buys after funded Reserve is deployed.
- Settlement price movement remains Settlement until the value is actually funded.
- Settlement is not renamed into provider or bank language.

### Funded Reserve

Reserve is funded external-conversion value.

- Reserve funds notes.
- Reserve funds sends.
- Reserve funds market positions.
- Reserve funds wire transfers.
- Reserve proceeds issue notes.
- Reserve builds Settlement shares.
- Reserve is the lane that makes external conversion explicit.

### Notes

Notes stay Reserve-only.

- A note can issue only from Reserve.
- Note issuance must not draw from unfunded Settlement.
- Note proceeds remain tied to funded Reserve causality.

### Shares And Certificates

Settlement shares and certificates are the bridge from Settlement to buyer-funded Reserve.

- Certificate issue locks value.
- Buyers fund certificates.
- A funded certificate sale credits the seller.
- A certificate sale that is not funded must not credit the seller as funded Reserve.
- Certificate custody and sale state must preserve the metadata needed to distinguish funded from unfunded value.

### Wire Transfer

Wire transfer draws from Reserve.

- Wire transfer is a Reserve-funded external conversion path.
- Wire transfer must not be represented as generic Settlement movement.
- Wire improvements must preserve funded causality and Reserve/Settlement metadata.

## Hard Invariants

- Reserve funds notes, sends, positions, and wire transfers.
- Settlement is proof-native liquid value.
- Price moves in Settlement until funded.
- Notes stay Reserve-only.
- Settlement shares and certificates bridge Settlement to buyer-funded Reserve.
- Reserve funds wire transfer.
- Sends and buys deploy Reserve first, then Settlement covers the remainder.
- Market sells split into funded Reserve and unfunded Settlement.
- Certificate issue locks value.
- Funded certificate sale credits the seller.
- Reserve builds Settlement shares.
- Reserve proceeds issue notes.

## User-Facing Language Rules

- Use `Settlement` for proof-native liquid value.
- Use `funded Reserve` or `Reserve` for funded external-conversion value.
- Use `wire transfer` for the Reserve-funded wire path.
- Use `buyer-funded certificate` for certificate value that has actually been funded by the buyer.
- Provider names are implementation detail and must not replace user-facing liquidity language.

## Display Rules

- Wallet leads with Settlement balance.
- Settlement balance is USD-first, with phi equivalent underneath where phi context is shown.
- Reserve is shown beneath Settlement as the funded external-conversion lane.
- Settlement and Reserve chart surfaces must use account-lane truth and account quote math, not partial receipt reconstruction that creates misleading spikes.
- Market wallet panels and portfolio charts must use real phi conversion math through the wallet account quote rather than symbol-swapping USD into phi.

## Causality Rules

- No user-facing flow may claim funded value before funding has occurred.
- No Reserve-funded action may discard Reserve/Settlement metadata.
- Sends and buys must consume funded Reserve first, then use Settlement for the remainder.
- Market sells must separate the seller credit that is actually funded from price movement that is still Settlement.
- Certificate sale credit must occur only when buyer funding is present.
- Future wire improvements must preserve funded causality.

## Non-Changes

- No new value state is added by `v64.0.0`, and `v74.0.0` does not replace this value-loop model.
- Notes issue from Reserve only.
- Wire transfer draws from Reserve.
- Certificate issue locks value; sale credits the seller only when funded.
- Peer certificate liquidity stays buyer-funded or Receiz-funded.
- Provider names remain implementation detail, not user-facing liquidity language.

## Non-Regression Rule

A change is out of bounds if it:

- moves value without preserving Reserve/Settlement metadata
- credits a seller before buyer funding exists
- lets note issuance draw from unfunded Settlement
- lets wire transfer draw from anything other than Reserve
- presents provider implementation detail as the user-facing liquidity lane
- reconstructs account-lane charts from partial receipt history when account quote truth is available
- treats funded and unfunded sale proceeds as the same user-visible value

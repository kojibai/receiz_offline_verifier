# Receiz Docs

This directory is the public documentation set for Receiz `v70.0.0`.

## Start Here

- [releases/v70.0.0.md](releases/v70.0.0.md): canonical public alpha release note for `v70.0.0`.
- [releases/v70.0.0-product-truth.md](releases/v70.0.0-product-truth.md): release-scoped product-truth freeze for `v70.0.0`.
- [releases/v70.0.0-checklist.md](releases/v70.0.0-checklist.md): release-prep checklist and additional gates for `v70.0.0`.
- [releases/v70.0.0-process.md](releases/v70.0.0-process.md): release-prep process for `v70.0.0`.
- [releases/v70.0.0-growth-from-v60.md](releases/v70.0.0-growth-from-v60.md): plain-language growth record from `v60.0.0` through the final `v69.9.x` stabilization line.
- [releases/v70.0.0-invariant-register.md](releases/v70.0.0-invariant-register.md): invariant register for the public alpha release boundary.
- [releases/v70.0.0-docs-manifest.md](releases/v70.0.0-docs-manifest.md): full public docs manifest for the `v70.0.0` release surface.
- [literal-product-law.md](literal-product-law.md): literal product law for local identity, file proof, append-only truth, canonical profiles, funded causality, and network propagation.
- [experience-first-engineering.md](experience-first-engineering.md): experience-first rules for local proof, deterministic state, and hidden runtime work.
- [verified-history-first-principles.md](verified-history-first-principles.md): append-only history and stronger-known-truth principles.
- [offline-verified-register.md](offline-verified-register.md): local append-only register semantics for verified offline truth.
- [pbi-recovery-receiz-id-binding.md](pbi-recovery-receiz-id-binding.md): PBI/keyfile recovery and Receiz ID binding rules.
- [value-loop-invariants.md](value-loop-invariants.md): canonical Settlement, Reserve, certificate, note, and wire-transfer value-loop invariants carried forward from `v64.0.0`.
- [receiz-standard-v1.md](receiz-standard-v1.md): high-level standard framing for canonical proof and settlement surfaces.
- [FORMAT.md](FORMAT.md): verifier-visible artifact contract.
- [ARCHITECTURE.md](ARCHITECTURE.md): runtime pipeline and verification flow.
- [COMPATIBILITY.md](COMPATIBILITY.md): supported environments and artifact carriers.
- [HARDENING.md](HARDENING.md): non-regression rules for fail-closed verification.
- [THREAT_MODEL.md](THREAT_MODEL.md): threat model for verifier, artifact, governance, and release surfaces.
- [DEPLOYMENT.md](DEPLOYMENT.md): deployment guidance for static release surfaces.
- [COPY_GUIDE.md](COPY_GUIDE.md): public copy and messaging guidance.

## Public Standards

- [deterministic-surfaces.md](deterministic-surfaces.md): contract for deterministic public truth routes.
- [conformance/README.md](conformance/README.md): styled conformance hub with live badges, current imported results, and deep suite-by-suite coverage docs.
- [presencebound-canonical-realm.md](presencebound-canonical-realm.md): canonical WebAuthn realm and reset guidance.
- [schemas/README.md](schemas/README.md): schema inventory for proof payloads and containers.

## Governance

- [governance/README.md](governance/README.md): governance document map and publication guidance.
- [governance/charter.v1.md](governance/charter.v1.md): governance authority and decision-rights charter.
- [governance/release-attestation-standard.v1.md](governance/release-attestation-standard.v1.md): signed release attestation requirements.
- [governance/governance-artifact-signature-standard.v1.md](governance/governance-artifact-signature-standard.v1.md): signed governance manifest rules.
- [governance/document-register.v1.json](governance/document-register.v1.json): controlled governance document register.
- [governance/evidence-register.v1.json](governance/evidence-register.v1.json): cadence and status register for governance evidence.

## Publication Guidance

Files in this tree are intended to be public-facing documentation or public summary artifacts.

- Publish standards, release notes, schemas, registers, and summary evidence.
- Keep raw access exports, raw recovery logs, customer data, private key material, internal hostnames, and incident payload dumps out of this tree.
- When adding governance evidence, prefer summary artifacts that describe scope, result, and references instead of reproducing sensitive operational data.

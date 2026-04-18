# Receiz Docs

This directory is the public documentation set for Receiz `v60.1.0`.

## Start Here

- [releases/v60.1.0.md](releases/v60.1.0.md): canonical public release note for `v60.1.0`.
- [releases/v60.1.0-product-truth.md](releases/v60.1.0-product-truth.md): release-scoped product-truth freeze for `v60.1.0`.
- [releases/v60.1.0-checklist.md](releases/v60.1.0-checklist.md): release-prep checklist and additional gates for `v60.1.0`.
- [receiz-standard-v1.md](receiz-standard-v1.md): high-level standard framing for canonical proof and settlement surfaces.
- [FORMAT.md](FORMAT.md): verifier-visible artifact contract.
- [ARCHITECTURE.md](ARCHITECTURE.md): runtime pipeline and verification flow.
- [COMPATIBILITY.md](COMPATIBILITY.md): supported environments and artifact carriers.
- [HARDENING.md](HARDENING.md): non-regression rules for fail-closed verification.

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

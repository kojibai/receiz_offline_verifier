# Governance Docs

This directory contains the public governance documentation set for Receiz `v70.0.0`.

## Contents

- Standards: charter, change control, release attestation, control testing, independent assurance, incident governance, artifact signing, artifact verification, key custody, and control boundaries.
- Registers: [document-register.v1.json](document-register.v1.json), [evidence-register.v1.json](evidence-register.v1.json), [exception-log.v1.md](exception-log.v1.md), and [corrective-action-register.v1.md](corrective-action-register.v1.md).
- Evidence summaries: files under [evidence/](evidence/) provide public summaries of review activity, not raw operational exports.
- Templates: [templates/postmortem-template.v1.md](templates/postmortem-template.v1.md) is the controlled incident template.

## What Is Safe To Publish

- Normative standards and governance procedures.
- Controlled registers and status summaries.
- Evidence summaries that report scope, outcome, and reference IDs without exposing sensitive implementation detail.

## What Should Stay Out

- Private keys or custody secrets.
- Raw privileged-access exports or personnel-identifying access lists.
- Internal recovery environment details, internal hostnames, or network topology.
- Raw incident evidence, customer data, or unredacted approval payloads.

## Notes

The evidence files in this directory should add trust value by showing that a control ran, what it covered, and what the result was. They should not attempt to mirror the full internal evidence package.

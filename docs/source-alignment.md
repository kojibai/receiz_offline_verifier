# Current standalone source alignment

Committed source: `3267b36b88060987b509b27fec6763683ee10e98`; release `129.5.0`; complete release book: 16 files; aggregate `f58428b1f34515e7404063071fdc11d23305c88efc3bf3e3eaa0716bd822d564`.

All source inputs are retained under source-inputs/v129.5.0/ and validated against current application, asset and record mirrors. Canonical verifier and Studio are byte-identical. Any explicitly selected Sports release-footer/worker epoch or settlement distribution-meta adjustment is enumerated and reproducible; it does not change verification or Settlement JavaScript. Historical records, source-alignment receipt and inherited v127 law remain intact.

No new proof authority, signing service, deployment, Pages workflow, tag, attestation or publication is created. The existing single CI workflow remains verification-only. Run npm test, npm run lint, npm run build and npm run release:lock, then retain browser first-paint/file/provenance evidence before release qualification.

## Current governance authority

The main implementation uses the designated Receiz identity to seal governance and release attestations locally. Carried source, exact membership, predecessor and Kai succession are verified offline. GitHub and a public keyring cannot replace that source or independently rotate authority. Historical Ed25519/HMAC records remain historical evidence.

The implemented main-repository commands are `governance:sign-artifacts`, `governance:verify-artifact-signature`, `release:attest` and `release:verify-attestation`. They are not commands implemented by this static repository. The main implementation requires build, conformance and approval evidence before release attestation; this synchronization does not claim those gates ran. Private identity files and signer secrets are excluded.

The versioned governance standards preserved here describe their archived boundary. For current operation, follow this source-aligned description and the current [governance documentation](https://docs.receiz.com). Public audit disclosure belongs in [reality-grade-infrastructure](https://github.com/kojibai/reality-grade-infrastructure); this repository retains the offline applications and product release history.

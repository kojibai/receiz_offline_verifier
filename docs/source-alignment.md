# Current standalone source alignment

Upstream committed source: `b6bab4d8b2098676820b118b5497dcb2cdb70cfb`. Release family: `126.0.0`.

The canonical verifier is copied from `public/offline-verifier.html` to both the downloadable app and the deployed index. The Studio remains byte-identical to upstream. Sports includes the upstream enclosing-ZIP proof boundary and explicit reader capability disclosure. Only the canonical verifier worker epoch, Sports release label/worker epoch and settlement release label differ from upstream, as enumerated in [the source manifest](../source-alignment.json).

`npm test` checks every deployed mirror and source digest, ownership/provenance surface presence, and executable workflow placement. `npm run release:lock` checks the original release archive. GitHub Pages runs the same source checks before upload. Downloadable app paths are included in the Pages artifact.

## Release history

The original v126 records and their original source hashes remain unchanged. This source update appends to that history; it does not move a published tag or imply an attestation was issued. A digest inventory establishes exact bytes; it is not an authenticated release signature or a substitute for conformance.

## Current governance authority

The main implementation uses the designated Receiz identity to seal governance and release attestations locally. Carried source, exact membership, predecessor and Kai succession are verified offline. GitHub and a public keyring cannot replace that source or independently rotate authority. Historical Ed25519/HMAC records remain historical evidence.

The implemented main-repository commands are `governance:sign-artifacts`, `governance:verify-artifact-signature`, `release:attest` and `release:verify-attestation`. They are not commands implemented by this static repository. The main implementation requires build, conformance and approval evidence before release attestation; this synchronization does not claim those gates ran. Private identity files and signer secrets are excluded.

The versioned governance standards preserved here describe their archived boundary. For current operation, follow this source-aligned description and the current [governance documentation](https://docs.receiz.com). Public audit disclosure belongs in [reality-grade-infrastructure](https://github.com/kojibai/reality-grade-infrastructure); this repository retains the offline applications and product release history.

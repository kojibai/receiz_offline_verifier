# Current standalone source alignment

Upstream committed source: `3090835f1e5a7de57b3b7c526d90b03512c2da70`. Release family: `128.0.0`.

The canonical verifier is copied byte-for-byte from `public/offline-verifier.html` to both the downloadable app and the deployed index. The Studio is also byte-identical to committed upstream source. Sports retains its existing enclosing-ZIP proof boundary and explicit reader capability disclosure; only its standalone release label/worker epoch and the settlement release label advance, as enumerated in [the source manifest](../source-alignment.json).

`npm test` checks every static mirror and source digest, ownership/provenance surface presence, CI workflow placement, and the absence of a GitHub Pages deployment workflow. `npm run release:lock` checks the original release archive. GitHub runs verification only, producing the repository's CI status check; it does not upload or deploy a Pages artifact. Downloadable application paths remain committed in this repository for local use or an explicitly selected external host.

## Release history

The original v127 records and their original source hashes remain unchanged. The v128 archive appends to that history; it does not move an older tag or imply a new attestation was issued. A digest inventory establishes exact bytes; it is not an authenticated release signature or a substitute for conformance.

## Current governance authority

The main implementation uses the designated Receiz identity to seal governance and release attestations locally. Carried source, exact membership, predecessor and Kai succession are verified offline. GitHub and a public keyring cannot replace that source or independently rotate authority. Historical Ed25519/HMAC records remain historical evidence.

The implemented main-repository commands are `governance:sign-artifacts`, `governance:verify-artifact-signature`, `release:attest` and `release:verify-attestation`. They are not commands implemented by this static repository. The main implementation requires build, conformance and approval evidence before release attestation; this synchronization does not claim those gates ran. Private identity files and signer secrets are excluded.

The versioned governance standards preserved here describe their archived boundary. For current operation, follow this source-aligned description and the current [governance documentation](https://docs.receiz.com). Public audit disclosure belongs in [reality-grade-infrastructure](https://github.com/kojibai/reality-grade-infrastructure); this repository retains the offline applications and product release history.

# Current standalone source alignment

Committed source: `3267b36b88060987b509b27fec6763683ee10e98`; release `129.5.0`; complete release book: 16 files; aggregate `f58428b1f34515e7404063071fdc11d23305c88efc3bf3e3eaa0716bd822d564`.

All source inputs are retained under source-inputs/v129.5.0/ and validated against current application, asset and record mirrors. Canonical verifier and Studio are byte-identical. Any explicitly selected Sports release-footer/worker epoch or settlement distribution-meta adjustment is enumerated and reproducible; it does not change verification or Settlement JavaScript. Historical records, source-alignment receipt and inherited v127 law remain intact.

No new proof authority, signing service, deployment, Pages workflow, tag, attestation or publication is created. The existing single CI workflow remains verification-only. Run npm test, npm run lint, npm run build and npm run release:lock, then retain browser first-paint/file/provenance evidence before release qualification.

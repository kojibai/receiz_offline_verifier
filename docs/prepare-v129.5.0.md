# v129.5.0 source import and qualification

The published tag resolves to `3267b36b88060987b509b27fec6763683ee10e98`. The existing importer enumerated and imported all 16 committed release-family records and the four canonical applications from that exact clean Source. Verifier and Studio are byte-identical. The Sports footer/worker epoch and Settlement distribution metadata are the only enumerated distribution-label adjustments; verification and Settlement logic are unchanged.

`npm test`, `npm run lint`, `npm run build` and `npm run release:lock` pass. The normal test command also runs all seven importer refusal/preservation tests. The actual four embedded verifier scripts verified a genuine historical Original in Node24 with a DOM implementation and refused an altered copy with zero network calls; see `releases/evidence/v129.5.0-offline-runtime.json`. That receipt is not a graphical-browser or file-picker claim.

The prior source-alignment receipt, all old versioned release records, inherited registry127 and verification-only CI are retained. No new proof authority, signer, deployment, tag or publication is introduced. The repository uses the existing canonical verifier.

# Public profile source-outage qualification

The final local production build and performance budgets passed. Chrome 153.0.8010.53 retained the complete 581-Original public profile, identity artwork, Showcase and Live Twin public texture across two source-outage reloads. [Measured results](profile-source-outage.json) record exact document and media comparisons. This is local candidate evidence, not deployment, publication or release attestation.

The browser remained online to the isolated production server. Only that server's Supabase source was unavailable. The route was `/business-domain/bjk.ceo`; this does not claim a deployed custom-domain test or a fully disconnected whole-app test. Requests from the test page were restricted to GET/HEAD. The browser's native service worker established navigation custody and all 12 already-loaded media resources, including one stage texture, after the first visit; no extra healthy navigation or synthetic cache insertion was used. The test does not claim all 581 attachment bytes were downloaded.

- [Healthy held baseline](profile-held-baseline.png).
- [First source-outage reload](profile-source-outage-first.png).
- [Second source-outage reload](profile-source-outage-second.png).
- [Cold source unavailable](profile-cold-source-unavailable.png): no held complete source and no older 543-Original replacement.

Both reloads used the held navigation document unchanged, retained all 12 admitted media byte digests, displayed all five visible DOM media objects, and preserved 581 Originals. The sampled profile wrapper had zero empty frames (135 and 256 samples). Full viewport screenshots include the stage and were inspected directly.

## Existing stage initialization boundary

A seven-second screenshot initially showed a blank Live Twin canvas despite its exact texture being held and returned with status 200 by the worker. That evidence failed a full-stage claim. An identical healthy-source control reproduced the same blank canvas: its first WebGL context initialized at 11.643 seconds from navigation, and the next two reloads had not created a context at capture. [Healthy control screenshot](profile-healthy-stage-initialization.png) preserves that contradictory evidence against any immediate-stage claim.

The final qualification separately records the seven-second state and actual first WebGL draws, with a bounded 30-second readiness check and two animation frames before the final screenshot. First draws occurred at 7.193 seconds and 8.644 seconds from navigation. The second run had zero draws at the initial observation and then rendered the same retained avatar. No renderer behavior was changed. This qualifies source custody and the resulting stage rendering; it does **not** qualify immediate stage first paint or assert that WebGL initialization is synchronous. Profile/document first-paint measurements are separate from stage initialization.

## Superseded failures and corrections

Earlier candidates failed because complete snapshots exceeded WebStorage quota, a null-equality branch discarded held source, optional worker discovery stalled activation, dotted internal hostnames were warmed as assets, image `Accept` variation missed held bytes, and storage outages were returned as 404. [Earlier second-reload failure](profile-superseded-media-revocation.png) preserves the last material-media downgrade before storage classification was corrected. Those failures are superseded only for the exact final scope measured above. Genuine 401/403/404/410 and private responses still revoke media; 503/522 unavailability does not manufacture absence.

Public World avatar retention now reuses the existing public-media policy and response admission. The prior v41.0.4 commit `bd5afb8517` identifies the historical origin of its no-store exception, not an old version running inside v127. Private World source and performance objects remain owner-only.

## Complete source storage compatibility

V127 losslessly encodes the complete held profile and existing player snapshots under codec-versioned keys, preserving source and rank. It reads legacy JSON and removes a legacy copy only after a new write reads back exactly and the old copy remains unchanged. V126's JSON-only reader cannot read the new encoded keys; no cross-version reader compatibility is claimed. Already-open older pages retain their in-memory surface. No projection-only replacement, truncation or eviction is used.

Only public screenshots and aggregate measurements are committed. Raw browser storage, HTML, network headers, cookies, identity private keys and local credentials are excluded.

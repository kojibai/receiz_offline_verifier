import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import path from 'node:path';
import {APPLICATIONS,ASSETS,TARGET_RELEASE,sha256,projectApplication,enumerateReleaseFamily} from './prepare-source-alignment.mjs';
// Filled only by applying an exact reviewed qualified-source inventory.
const EXPECTED_CURRENT_SOURCE = {"upstreamCommit":"3267b36b88060987b509b27fec6763683ee10e98","recordCount":16,"inventorySha256":"b683782a26e0a3b838b7d7587d935bb0c02809fd28b8e4ea482bb23cd05055df"};
const root=process.cwd(),read=p=>readFileSync(path.join(root,p)),json=p=>JSON.parse(read(p));
const manifest=json('source-alignment.json');
assert(EXPECTED_CURRENT_SOURCE,'qualified source lock is pending');
const {previousAlignment:_previous,...inputPlan}=manifest;
assert.equal(sha256(JSON.stringify(inputPlan)),EXPECTED_CURRENT_SOURCE.inventorySha256,'source inventory differs from the reviewed code pin');
assert.equal(manifest.upstreamCommit,EXPECTED_CURRENT_SOURCE.upstreamCommit);
assert.equal(manifest.releaseRecords.length,EXPECTED_CURRENT_SOURCE.recordCount);
assert.equal(json('package.json').version,TARGET_RELEASE);assert.equal(manifest.release,TARGET_RELEASE);
assert.equal(manifest.schema,'receiz.standalone-source-alignment.v2');assert.equal(manifest.upstreamState,'clean');assert.match(manifest.upstreamCommit,/^[a-f0-9]{40}$/);
assert(manifest.files.every(row=>!row.releaseLabelPending),'release label boundary unresolved');
assert.deepEqual(manifest.files.map(({source,destinations})=>({source,destinations})),APPLICATIONS);
const evidence=p=>'source-inputs/v'+TARGET_RELEASE+'/'+p;
for(const entry of manifest.files){const original=read(evidence(entry.source));assert.equal(sha256(original),entry.sourceSha256);const projected=projectApplication(entry.source,original,TARGET_RELEASE,manifest.allowDistributionLabels);assert.deepEqual(projected.adjustments,entry.adjustments);assert.equal(sha256(projected.bytes),entry.sha256);for(const target of entry.destinations)assert.deepEqual(read(target),projected.bytes);}
const list=(directory,prefix='')=>readdirSync(directory,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?list(path.join(directory,entry.name),prefix+entry.name+'/'):[prefix+entry.name]);
const rawRecords=list(path.join(root,evidence('docs/releases'))).map(p=>'docs/releases/'+p);
assert.deepEqual(manifest.releaseRecords.map(row=>row.source),enumerateReleaseFamily(rawRecords));
for(const entry of manifest.releaseRecords){assert.deepEqual(entry.destinations,[entry.source,entry.source.replace(/^docs\//,'')]);const original=read(evidence(entry.source));if(entry.source.endsWith('.json'))JSON.parse(original);assert.equal(sha256(original),entry.sourceSha256);assert.equal(entry.sourceSha256,entry.sha256);for(const target of entry.destinations)assert.deepEqual(read(target),original);}
assert.equal(sha256(manifest.releaseRecords.map(row=>row.source+'\0'+row.sourceSha256+'\n').join('')),manifest.sourceBookSha256);
assert.deepEqual(manifest.assets.map(row=>row.source),ASSETS.map(name=>'public/'+name));
for(const entry of manifest.assets){assert.equal(entry.destination,'site/'+path.posix.basename(entry.source));assert.equal(sha256(read(evidence(entry.source))),entry.sha256);assert.equal(sha256(read(entry.destination)),entry.sha256);}
assert.equal(manifest.registry.sourceSha256,'f9f713c7a4d75ab4ffccc4551cdaeaa6e9268978222d7f8cbbc13e3683155c8a');assert.equal(manifest.registry.digestFileSha256,'a8766e68d55394499fd7a92bb9b418c89730f375c84bc678757bdbd8a977db2e');assert.equal(json(manifest.registry.source).laws.length,133);
assert.equal(sha256(read(manifest.registry.source)),manifest.registry.sourceSha256);assert.equal(sha256(read(manifest.registry.digestSource)),manifest.registry.digestFileSha256);assert.equal(json(manifest.registry.source).version,'127.0.0');assert.equal(read(manifest.registry.digestSource).toString().trim(),'8d0b5b839d02d9efbd4306cc99410595a183705c2670b76d2567eaaaade99065');
assert.ok(manifest.previousAlignment);assert.equal(sha256(read(manifest.previousAlignment.path)),manifest.previousAlignment.sha256);
for(const marker of ['factCurrentOwner','ownershipHistoryPanel','pbiAuthorshipHistoryPanel'])assert(read('apps/offline-verifier.html').includes(marker));
assert.deepEqual(readdirSync('.github/workflows').filter(p=>/\.ya?ml$/.test(p)).sort(),['ci.yml']);assert(!existsSync('.github/workflows/pages.yml'));
assert(read('AGENTS.md').includes('Release law: `v'+TARGET_RELEASE+'`'));assert(read('README.md').includes('Current release: `v'+TARGET_RELEASE+'`'));assert(read('docs/source-alignment.md').includes(manifest.upstreamCommit));assert(read('docs/source-alignment.md').includes(manifest.sourceBookSha256));assert(read('site/sw.js').includes('const RECEIZ_RELEASE_VERSION = "'+TARGET_RELEASE+'";'));assert.equal(json('source-alignment.pending.json').status,'source-imported-pending-qualification');
console.log('Exact committed129.5 application/source mirrors, complete '+manifest.releaseRecords.length+'-record family, inherited registry, history and verification-only CI pass. Browser/release qualification remains separate.');

for(const file of ['README.md','AGENTS.md','RELEASE_NOTES.md','CHANGELOG.md','docs/README.md','docs/FORMAT.md','docs/governance/README.md','docs/receiz-reasoning-kernel.md','docs/scale-reasoning-invariants.md','docs/truthful-speed-invariants.md','docs/literal-product-law.md','docs/experience-first-engineering.md','docs/deterministic-surfaces.md','docs/verified-history-first-principles.md','docs/offline-verified-register.md','docs/pbi-recovery-receiz-id-binding.md','docs/value-loop-invariants.md'])assert(existsSync(file),'required existing release surface missing: '+file);
for(const file of ['docs/README.md','docs/FORMAT.md','docs/governance/README.md','docs/receiz-reasoning-kernel.md','docs/scale-reasoning-invariants.md','docs/truthful-speed-invariants.md','docs/literal-product-law.md','docs/experience-first-engineering.md','docs/deterministic-surfaces.md','docs/verified-history-first-principles.md','docs/offline-verified-register.md','docs/pbi-recovery-receiz-id-binding.md','docs/value-loop-invariants.md'])assert(read(file).includes('`v'+TARGET_RELEASE+'`'),'current doctrine pointer missing: '+file);
for(const file of ['README.md','docs/conformance/README.md'])for(const suite of ['temporal','market','identity','issuance','signal-circuit','game/sports','verification','economy','interoperability','world'])assert(read(file).includes('/api/'+suite+'/conformance/badge'),'existing conformance badge missing: '+suite);
assert(read('RELEASE_NOTES.md').includes('## v'+TARGET_RELEASE));assert(read('CHANGELOG.md').includes('## [v'+TARGET_RELEASE+']'));

const startHere=read('docs/README.md').toString().split('## Historical releases')[0];
assert(startHere.includes('(releases/v129.5.0.md)'), 'current documentation entrance must link the v129.5 release book');
assert(startHere.includes('(source-alignment.md)'), 'current documentation entrance must link standalone qualification');
assert(!read('README.md').includes('Current release: `v129.0.0`'), 'historical release must not be labelled current');
const alignmentText=read('docs/source-alignment.md').toString();
const governanceHeading='## Current governance authority';
assert(alignmentText.includes(governanceHeading), 'existing governance navigation must resolve');
assert.equal(sha256(alignmentText.slice(alignmentText.indexOf(governanceHeading))), 'cb863a543c04b349abc508d966e94728af6882b1eaa8a720467bd9df0bfe257d', 'designated-owner offline governance contract must be preserved');

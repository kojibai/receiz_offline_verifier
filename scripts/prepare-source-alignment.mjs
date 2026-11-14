import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {readFileSync,writeFileSync,mkdirSync,existsSync,lstatSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';

export const TARGET_RELEASE='129.5.0';
export const APPLICATIONS=Object.freeze([
 {source:'public/offline-verifier.html',destinations:['apps/offline-verifier.html','site/offline-verifier.html','site/index.html']},
 {source:'public/offline-record-seal.html',destinations:['apps/offline-record-seal.html','site/offline-record-seal.html']},
 {source:'public/offline-sports-card-verifier.html',destinations:['apps/offline-sports-card-verifier.html','site/offline-sports-card-verifier.html']},
 {source:'public/offline-settlement.html',destinations:['apps/offline-settlement.html','site/offline-settlement.html']},
]);
export const ASSETS=Object.freeze(['offline-studio.webmanifest','icon.png','apple-touch-icon.png','receiz.svg','powered-by-receiz.svg']);
export const sha256=bytes=>createHash('sha256').update(bytes).digest('hex');
const git=(repository,args,encoding='utf8')=>execFileSync('git',args,{cwd:repository,encoding,maxBuffer:64*1024*1024});
const safe=relative=>{assert.equal(typeof relative,'string');assert(relative&&!relative.startsWith('/')&&!relative.includes('\\')&&!relative.split('/').some(p=>!p||p==='.'||p==='..'),'unsafe source path');return relative;};
const publicEvidencePath=source=>'source-inputs/v'+TARGET_RELEASE+'/'+safe(source);
export function enumerateReleaseFamily(files,release=TARGET_RELEASE){
 const prefix='docs/releases/v'+release;
 const selected=files.filter(p=>p.startsWith(prefix)&&['.','-','/'].includes(p[prefix.length]));
 assert(selected.length>0,'committed release family is absent');assert.equal(new Set(selected).size,selected.length,'duplicate release source');
 return selected.map(safe).sort();
}
export function projectApplication(source,bytes,release=TARGET_RELEASE,allowDistributionLabels=false){
 let text=bytes.toString('utf8');const adjustments=[];
 // Canonical verifier and Studio always retain exact source bytes.
 if(allowDistributionLabels&&source==='public/offline-sports-card-verifier.html'){
  const footer=/(<a href="https:\/\/github\.com\/kojibai\/receiz_offline_verifier"[^>]*>)v\d+\.\d+\.\d+(<\/a>)/;
  assert(footer.test(text),'sports release footer slot is unknown');
  const epoch=/const OFFLINE_STANDALONE_SW_VERSION = "\d+\.\d+\.\d+-official-release-v1";/;
  assert(epoch.test(text),'sports worker epoch slot is unknown');
  for(const [slot,pattern,replace]of[['footer',footer,(_all,start,end)=>start+'v'+release+end],['worker epoch',epoch,()=>`const OFFLINE_STANDALONE_SW_VERSION = "${release}-official-release-v1";`]]){
   const before=text.match(pattern)[0];const after=before.replace(pattern,replace);if(before!==after){text=text.replace(pattern,replace);adjustments.push({slot,before,after});}
  }
 }
 if(allowDistributionLabels&&source==='public/offline-settlement.html'){
  const existing=/<meta name="receiz-standalone-release" content="v\d+\.\d+\.\d+">/;
  if(text.includes('name="receiz-standalone-release"')){assert(existing.test(text),'settlement distribution metadata slot is unknown');const before=text.match(existing)[0],after=`<meta name="receiz-standalone-release" content="v${release}">`;if(before!==after){text=text.replace(existing,after);adjustments.push({slot:'distribution metadata only',before,after});}}
  else{assert(text.includes('<head>'),'settlement head slot is unknown');const after=`<head>\n<meta name="receiz-standalone-release" content="v${release}">`;text=text.replace('<head>',after);adjustments.push({slot:'distribution metadata only',before:'<head>',after});}
 }
 return {bytes:adjustments.length?Buffer.from(text):bytes,adjustments};
}
export function buildInputPlan(repository,commit,{allowDistributionLabels=false}={}){
 assert.match(commit??'',/^[a-f0-9]{40}$/,'qualified source commit is required; placeholders cannot be imported');
 assert.equal(git(repository,['rev-parse','HEAD']).trim(),commit,'source HEAD differs from the selected committed boundary');
 assert.equal(git(repository,['status','--porcelain']),'','selected source must be clean');
 const all=git(repository,['ls-tree','-r','--name-only','-z',commit,'--','docs/releases']).split('\0').filter(Boolean);
 const read=source=>git(repository,['show',commit+':'+safe(source)],null);
 assert.equal(JSON.parse(read('package.json')).version,TARGET_RELEASE,'source package release mismatch');
 const files=APPLICATIONS.map(entry=>{const original=read(entry.source),projection=projectApplication(entry.source,original,TARGET_RELEASE,allowDistributionLabels);return {...entry,sourceSha256:sha256(original),sha256:sha256(projection.bytes),bytes:projection.bytes.length,adjustments:projection.adjustments,releaseLabelPending:!projection.bytes.includes('v'+TARGET_RELEASE)};});
 const releaseRecords=enumerateReleaseFamily(all).map(source=>{const bytes=read(source);return {source,sourceSha256:sha256(bytes),sha256:sha256(bytes),bytes:bytes.length,destinations:[source,source.replace(/^docs\//,'')]};});
 const assets=ASSETS.map(name=>{const source='public/'+name,bytes=read(source);return {source,destination:'site/'+name,sha256:sha256(bytes),bytes:bytes.length};});
 const registrySource='docs/releases/v127.0.0-constitution-registry.json',registryDigestSource='docs/releases/v127.0.0-constitution-registry.digest';
 const registry=JSON.parse(read(registrySource)),registryDigest=read(registryDigestSource).toString().trim();
 assert.equal(sha256(read(registrySource)),'f9f713c7a4d75ab4ffccc4551cdaeaa6e9268978222d7f8cbbc13e3683155c8a','inherited registry source changed');assert.equal(sha256(read(registryDigestSource)),'a8766e68d55394499fd7a92bb9b418c89730f375c84bc678757bdbd8a977db2e','inherited registry digest bytes changed');assert.equal(registry.version,'127.0.0');assert.equal(registryDigest,'8d0b5b839d02d9efbd4306cc99410595a183705c2670b76d2567eaaaade99065');
 return {schema:'receiz.standalone-source-alignment.v2',release:TARGET_RELEASE,upstreamCommit:commit,upstreamState:'clean',sourceDate:git(repository,['show','-s','--format=%cs',commit]).trim(),allowDistributionLabels,files,releaseRecords,assets,sourceBookSha256:sha256(releaseRecords.map(row=>row.source+'\0'+row.sourceSha256+'\n').join('')),registry:{source:registrySource,digestSource:registryDigestSource,version:'127.0.0',digest:registryDigest,sourceSha256:sha256(read(registrySource)),digestFileSha256:sha256(read(registryDigestSource))}};
}
const json=value=>JSON.stringify(value,null,2)+'\n';
const put=(root,relative,bytes)=>{safe(relative);const target=path.join(root,relative);let cursor=path.resolve(root);assert(!lstatSync(cursor).isSymbolicLink(),'destination root symlink forbidden');for(const part of relative.split('/')){cursor=path.join(cursor,part);if(existsSync(cursor))assert(!lstatSync(cursor).isSymbolicLink(),'destination symlink forbidden');}mkdirSync(path.dirname(target),{recursive:true});writeFileSync(target,bytes);};
export function projectDocumentationIndex(previous,previousRelease){
 const marker='## Start Here';assert(previous.includes(marker),'existing documentation entrance is missing');
 const header=previous.slice(0,previous.indexOf(marker)).replace('`v'+previousRelease+'`','`v'+TARGET_RELEASE+'`');
 return header+`## Start Here

- [Release v${TARGET_RELEASE}](releases/v${TARGET_RELEASE}.md): complete release framing, outcomes and practical use.
- [Product truth](releases/v${TARGET_RELEASE}-product-truth.md) and [compatibility](releases/v${TARGET_RELEASE}-compatibility.md): implemented primitives and retained proof formats.
- [Integration](releases/v${TARGET_RELEASE}-integration.md) and [conformance](releases/v${TARGET_RELEASE}-conformance.md): developer use and exact qualification boundaries.
- [Source alignment and standalone qualification](source-alignment.md), [preparation record](prepare-v${TARGET_RELEASE}.md) and [offline runtime evidence](../releases/evidence/v${TARGET_RELEASE}-offline-runtime.json).
- [Checklist](releases/v${TARGET_RELEASE}-checklist.md), [process](releases/v${TARGET_RELEASE}-process.md), [regression lessons](releases/v${TARGET_RELEASE}-regression-lessons.md) and [commit history](releases/v${TARGET_RELEASE}-commit-history.md).

## Historical releases

`+previous.slice(previous.indexOf(marker)+marker.length).trimStart();
}
export function projectSourceAlignment(heldPlan,previous){
 const heading='## Current governance authority';assert(previous.includes(heading),'existing governance authority section is missing');
 return `# Current standalone source alignment

Committed source: \`${heldPlan.upstreamCommit}\`; release \`${TARGET_RELEASE}\`; complete release book: ${heldPlan.releaseRecords.length} files; aggregate \`${heldPlan.sourceBookSha256}\`.

All source inputs are retained under source-inputs/v${TARGET_RELEASE}/ and validated against current application, asset and record mirrors. Canonical verifier and Studio are byte-identical. Any explicitly selected Sports release-footer/worker epoch or settlement distribution-meta adjustment is enumerated and reproducible; it does not change verification or Settlement JavaScript. Historical records, source-alignment receipt and inherited v127 law remain intact.

No new proof authority, signing service, deployment, Pages workflow, tag, attestation or publication is created. The existing single CI workflow remains verification-only. Run npm test, npm run lint, npm run build and npm run release:lock, then retain browser first-paint/file/provenance evidence before release qualification.

`+previous.slice(previous.indexOf(heading));
}
export function applyInputPlan(root,repository,heldPlan){
 assert.equal(heldPlan.release,TARGET_RELEASE);
 const actual=buildInputPlan(repository,heldPlan.upstreamCommit,{allowDistributionLabels:heldPlan.allowDistributionLabels});
 assert.deepEqual(actual,heldPlan,'input inventory changed or omitted committed version-family records');
 assert(heldPlan.files.every(row=>!row.releaseLabelPending),'canonical source labels require explicit reviewed distribution projection or corrected qualified upstream; refusing a visible version downgrade');
 assert.equal(sha256(readFileSync(path.join(root,heldPlan.registry.source))),heldPlan.registry.sourceSha256,'inherited registry bytes must remain exact');
 assert.equal(sha256(readFileSync(path.join(root,heldPlan.registry.digestSource))),heldPlan.registry.digestFileSha256,'inherited registry digest must remain exact');
 const previousBytes=readFileSync(path.join(root,'source-alignment.json'));const previous=JSON.parse(previousBytes);
 if(previous.release===TARGET_RELEASE){assert.equal(previous.upstreamCommit,heldPlan.upstreamCommit,'same-version source substitution requires a separately reviewed successor');assert.equal(previous.sourceBookSha256,heldPlan.sourceBookSha256);for(const row of [...heldPlan.files,...heldPlan.releaseRecords])for(const target of row.destinations)assert.equal(sha256(readFileSync(path.join(root,target))),row.sha256,'existing imported bytes changed');for(const row of heldPlan.assets)assert.equal(sha256(readFileSync(path.join(root,row.destination))),row.sha256,'existing asset changed');return {release:TARGET_RELEASE,upstreamCommit:heldPlan.upstreamCommit,releaseRecords:heldPlan.releaseRecords.length,qualified:false,alreadyImported:true};}
 const history='releases/evidence/source-alignments/v'+previous.release+'/source-alignment.json';
 if(existsSync(path.join(root,history)))assert.deepEqual(readFileSync(path.join(root,history)),previousBytes);else put(root,history,previousBytes);
 const read=source=>git(repository,['show',heldPlan.upstreamCommit+':'+safe(source)],null);
 for(const entry of heldPlan.files){const original=read(entry.source),projection=projectApplication(entry.source,original,TARGET_RELEASE,heldPlan.allowDistributionLabels);assert.equal(sha256(projection.bytes),entry.sha256);put(root,publicEvidencePath(entry.source),original);for(const target of entry.destinations)put(root,target,projection.bytes);}
 for(const entry of heldPlan.releaseRecords){const original=read(entry.source);put(root,publicEvidencePath(entry.source),original);for(const target of entry.destinations)put(root,target,original);}
 for(const entry of heldPlan.assets){const original=read(entry.source);put(root,publicEvidencePath(entry.source),original);put(root,entry.destination,original);}
 const pkg=JSON.parse(readFileSync(path.join(root,'package.json')));pkg.version=TARGET_RELEASE;put(root,'package.json',json(pkg));
 const replaceFirst=(file,from,to)=>{const old=readFileSync(path.join(root,file),'utf8');assert(old.includes(from),'missing current release slot: '+file);put(root,file,old.replace(from,to));};
 replaceFirst('AGENTS.md',`Release law: \`v${previous.release}\``,`Release law: \`v${TARGET_RELEASE}\``);
 replaceFirst('site/sw.js',`const RECEIZ_RELEASE_VERSION = "${previous.release}";`,`const RECEIZ_RELEASE_VERSION = "${TARGET_RELEASE}";`);
 for(const file of ['docs/FORMAT.md','docs/governance/README.md','docs/literal-product-law.md','docs/experience-first-engineering.md','docs/truthful-speed-invariants.md','docs/deterministic-surfaces.md','docs/verified-history-first-principles.md','docs/offline-verified-register.md','docs/pbi-recovery-receiz-id-binding.md','docs/value-loop-invariants.md','docs/receiz-reasoning-kernel.md','docs/scale-reasoning-invariants.md'])replaceFirst(file,'`v'+previous.release+'`','`v'+TARGET_RELEASE+'`');
 put(root,'docs/README.md',projectDocumentationIndex(readFileSync(path.join(root,'docs/README.md'),'utf8'),previous.release));
 const readme=readFileSync(path.join(root,'README.md'),'utf8');put(root,'README.md',`# Receiz Offline Verifier\n\nCurrent release: \`v${TARGET_RELEASE}\`\n\nRead the [complete release book](docs/releases/v${TARGET_RELEASE}.md) and [current documentation](docs/README.md).\n\nCanonical applications and the complete ${heldPlan.releaseRecords.length}-record release family are imported from clean committed Receiz source \`${heldPlan.upstreamCommit}\`. Source hashes identify bytes; they do not confer proof authority or claim browser/release qualification. The inherited v127 registry remains exact. See [source alignment](docs/source-alignment.md).\n\n## Previous release description\n\n${readme.replace(/^# Receiz Offline Verifier\n/,'').replace('Current release: `v'+previous.release+'`','Historical release: `v'+previous.release+'`')}`);
 const notes=readFileSync(path.join(root,'RELEASE_NOTES.md'),'utf8');put(root,'RELEASE_NOTES.md',`## v${TARGET_RELEASE}\n\nImported exact qualified-source boundary ${heldPlan.upstreamCommit}; ${heldPlan.releaseRecords.length} complete release records, preserved historical archives and inherited v127 registry. Distribution-label adjustments, if explicitly selected, are individually enumerated; canonical verifier/Studio bytes remain exact. Browser/release qualification is separate.\n\n${notes}`);
 const changelog=readFileSync(path.join(root,'CHANGELOG.md'),'utf8');put(root,'CHANGELOG.md',`## [v${TARGET_RELEASE}] - ${heldPlan.sourceDate}\n\nCanonical committed source and complete enumerated release book imported; prior release records and attestations remain immutable.\n\n${changelog}`);
 put(root,'docs/source-alignment.md',projectSourceAlignment(heldPlan,readFileSync(path.join(root,'docs/source-alignment.md'),'utf8')));
 const lockPath='scripts/check-source-alignment-v1295.mjs';const lock=readFileSync(path.join(root,lockPath),'utf8');const marker='const EXPECTED_CURRENT_SOURCE = null;';assert(lock.includes(marker),'qualified source code lock is already set or its slot changed');put(root,lockPath,lock.replace(marker,'const EXPECTED_CURRENT_SOURCE = '+JSON.stringify({upstreamCommit:heldPlan.upstreamCommit,recordCount:heldPlan.releaseRecords.length,inventorySha256:sha256(JSON.stringify(heldPlan))})+';'));
 put(root,'source-alignment.json',json({...heldPlan,previousAlignment:{path:history,sha256:sha256(previousBytes)}}));put(root,'source-alignment.pending.json',json({release:TARGET_RELEASE,status:'source-imported-pending-qualification',upstreamCommit:heldPlan.upstreamCommit,browserQualification:'not-run',releaseQualification:'not-run'}));
 return {release:TARGET_RELEASE,upstreamCommit:heldPlan.upstreamCommit,releaseRecords:heldPlan.releaseRecords.length,qualified:false};
}
function cli(){const args=process.argv.slice(2);const option=name=>{const at=args.indexOf(name);return at<0?null:args[at+1];};const repository=option('--source-repository'),commit=option('--source-commit');assert(repository,'--source-repository is required');const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');const apply=option('--apply');if(apply){const held=JSON.parse(readFileSync(apply));console.log(json(applyInputPlan(root,repository,held)));return;}const plan=buildInputPlan(repository,commit,{allowDistributionLabels:args.includes('--allow-distribution-labels')});const output=option('--plan');assert(output,'--plan <new-file> or --apply <reviewed-plan> is required');writeFileSync(output,json(plan),{flag:'wx'});console.log(json({plan:output,releaseRecords:plan.releaseRecords.length,qualified:false}));}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){try{cli();}catch(error){console.error(error.message);process.exitCode=1;}}

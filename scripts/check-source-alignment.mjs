import {readFileSync} from 'node:fs';
const version=JSON.parse(readFileSync('package.json','utf8')).version;
if(version==='129.0.0')await import('./check-source-alignment-v1290.mjs');
else if(version==='129.5.0')await import('./check-source-alignment-v1295.mjs');
else throw Error('Unsupported standalone release: '+version);

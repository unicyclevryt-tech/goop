import {cp, mkdir, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {dirname,join} from 'node:path';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const root=join(dirname(fileURLToPath(import.meta.url)),'..');
const out=join(root,'dist');
await mkdir(out,{recursive:true});
await cp(join(root,'public'),out,{recursive:true});
const {scramjetPath}=require('@mercuryworkshop/scramjet/path');
const {baremuxPath}=require('@mercuryworkshop/bare-mux/node');
const {libcurlPath}=require('@mercuryworkshop/libcurl-transport');
for(const [name,dir] of [['scram',scramjetPath],['baremux',baremuxPath],['libcurl',libcurlPath]]){
 await cp(dir,join(out,name),{recursive:true});
}
await writeFile(join(out,'.nojekyll'),'');
console.log('Goop ready for GitHub Pages:',out);

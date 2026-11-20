#!/usr/bin/env node
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),catalog=JSON.parse(fs.readFileSync(path.join(root,'courses.json'),'utf8'));
assert.equal(catalog.chapters.length,28);
for(const ch of catalog.chapters){const file=path.join(root,ch.file),dir=path.dirname(file),html=fs.readFileSync(file,'utf8');assert.ok(html.includes('<h1>'),ch.num+' missing h1');assert.ok(html.includes('assets/overview.svg'),ch.num+' missing diagram');assert.ok(fs.existsSync(path.join(dir,'assets/overview.svg')),ch.num+' missing SVG');assert.ok(fs.existsSync(path.join(dir,'evidence.json')),ch.num+' missing evidence ledger');assert.ok(html.includes('id="references"'),ch.num+' missing references');assert.ok(html.includes('data-demo='),ch.num+' missing interactive lab');}
console.log('statistics site structure checks passed');

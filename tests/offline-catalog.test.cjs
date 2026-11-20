#!/usr/bin/env node
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8'),catalog=JSON.parse(fs.readFileSync(path.join(root,'courses.json'),'utf8'));
const match=html.match(/var offlineCourses=(\{[\s\S]*?\});var root=/);
assert.ok(match,'offline catalog snapshot missing');
assert.deepEqual(JSON.parse(match[1]),catalog,'offline snapshot differs from courses.json');
assert.equal(catalog.chapterCount,catalog.chapters.length);
assert.equal(new Set(catalog.chapters.map(c=>c.file)).size,catalog.chapters.length);
assert.ok(catalog.chapters.every(c=>/^chapters\/[a-z0-9-]+\/index\.html$/.test(c.file)));
assert.match(html,/location\.protocol==="file:"/);
console.log('offline catalog checks passed');

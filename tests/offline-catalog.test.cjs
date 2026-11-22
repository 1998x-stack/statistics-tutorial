#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const page=fs.readFileSync(path.join(root,'index.html'),'utf8');
const catalog=JSON.parse(fs.readFileSync(path.join(root,'data/courses.json'),'utf8'));
assert.equal(catalog.chapterCount,28);
assert.equal((page.match(/class="lesson"/g)||[]).length,catalog.chapters.length);
for(const chapter of catalog.chapters){assert.ok(page.includes(`href="${chapter.file}"`));assert.ok(page.includes(`<h3>${chapter.title}</h3>`));}
assert.doesNotMatch(page,/fetch\s*\(/,'homepage should not require network fetch');
assert.match(page,/<div class="catalog-grid"/);
assert.match(page,/assets\/js\/catalog\.js/);
console.log('offline catalog checks passed');

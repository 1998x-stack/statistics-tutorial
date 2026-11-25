#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const catalog=JSON.parse(read('data/courses.json'));
const html=read('index.html');
assert.equal(catalog.chapterCount,28);
assert.equal(catalog.chapters.length,28);
assert.equal(new Set(catalog.chapters.map(c=>c.file)).size,28);
assert.equal((html.match(/class="lesson"/g)||[]).length,28,'homepage must have 28 static cards without JS');
assert.match(html,/assets\/css\/site.css/);
assert.match(html,/assets\/svg\/intro-distribution.svg/);
assert.doesNotMatch(html,/<script[^>]+src="https?:/);
for(let i=0;i<28;i++){
 const c=catalog.chapters[i],n=String(i+1).padStart(2,'0');
 assert.equal(c.num,n);
 assert.equal(c.file,`chapters/${n}.html`);
 assert.ok(fs.existsSync(path.join(root,c.file)),`missing ${c.file}`);
 assert.ok(html.includes(`href="${c.file}"`),`missing homepage link ${c.file}`);
 const redirect=read(`${n}.html`);
 assert.match(redirect,/chapters\//);
}
for(let i=1;i<=16;i++){
 const n=String(i).padStart(2,'0');
 const h=read(`chapters/${n}.html`);
 assert.equal((h.match(/<h1\b/g)||[]).length,1,`one H1 ${n}`);
 assert.match(h,/<main\b/);
 assert.match(h,/<article\b/);
 assert.match(h,/aria-label="本文目录"/);
 if(i!==2)assert.match(h,/<math display="block"/);
 if(i!==2)assert.match(h,/class="math-scroll"/);
 assert.match(h,/<figcaption>/);
 if(i>=4)assert.ok((h.match(/<figure\b/g)||[]).length>=2,`expected multiple figures in ${n}`);
 assert.match(h,/<pre><code>/);
 const refs=[...h.matchAll(/(?:src|href)="([^"#?]+)"/g)].map(m=>m[1]);
 for(const link of refs){if(/^(?:https?:|mailto:|javascript:|\/)/.test(link))continue;const target=path.resolve(root,'chapters',link);assert.ok(fs.existsSync(target),`broken ${n} local ref: ${link}`)}
 const ledger=JSON.parse(read(`evidence/${n}.json`));
 assert.equal(ledger.chapter,n);
 assert.ok(ledger.entries.length>=4);
 assert.ok(ledger.entries.filter(e=>e.status==='verified').every(e=>e.source_url),`verified claims must cite source in ${n}`);
 assert.ok(ledger.entries.some(e=>e.status==='illustrative'||e.status==='derived'));
}
assert.ok(fs.existsSync(path.join(root,'chapters/theme.css')),'legacy CSS missing');
console.log('site integrity: 28 chapters, 28 redirects, 16 deep lessons, local links and source ledgers passed');

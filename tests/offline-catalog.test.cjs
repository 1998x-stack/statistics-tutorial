#!/usr/bin/env node
// Regression: local-file catalog must contain the same chapters as courses.json.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const canonical = JSON.parse(fs.readFileSync(path.join(root, 'courses.json'), 'utf8'));
const match = html.match(/var offlineCourses = (\{[^\n]+\});/);
assert.ok(match, 'embedded offline catalog missing');
const offline = JSON.parse(match[1]);
assert.deepEqual(offline, canonical, 'offline catalog drifted from courses.json');
assert.equal(offline.chapterCount, offline.chapters.length);
assert.equal(new Set(offline.chapters.map(ch => ch.file)).size, offline.chapters.length);
assert.ok(offline.chapters.every(ch => /^\d{2}\.html$/.test(ch.file)));
assert.match(html, /location\.protocol === 'file:'/);
assert.match(html, /Promise\.resolve\(offlineCourses\)/);
assert.match(html, /fetch\('courses\.json'\)/);
console.log('offline catalog checks passed');

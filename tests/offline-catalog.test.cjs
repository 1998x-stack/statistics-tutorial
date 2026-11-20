#!/usr/bin/env node
// Offline catalog regression: generated browser data must match courses.json.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const canonical = JSON.parse(fs.readFileSync(path.join(root, 'courses.json'), 'utf8'));
const js = fs.readFileSync(path.join(root, 'assets/js/course-data.js'), 'utf8');
const match = js.match(/window\.STATISTICS_COURSE_CATALOG = ([\s\S]+);\s*$/);
assert.ok(match, 'generated course snapshot missing');
const snapshot = JSON.parse(match[1]);
assert.deepEqual(snapshot, canonical, 'generated snapshot drifted from courses.json');
assert.equal(snapshot.chapterCount, snapshot.chapters.length);
assert.equal(new Set(snapshot.chapters.map(ch => ch.file)).size, snapshot.chapters.length);
assert.ok(snapshot.chapters.every(ch => /^chapters\//.test(ch.file)));
console.log('offline course catalog checks passed');

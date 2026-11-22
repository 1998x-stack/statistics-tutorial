# AGENTS.md — Statistics Tutorial

## Mission
Maintain a complete, independently understandable Chinese statistics course. The article is teaching material, not a description of a lecture or a marketing landing page. Never start a chapter with “本讲义介绍了…”. Every lesson must explain its prerequisites, the question, assumptions, worked example, validation and limitations in the page itself.

## Authoritative style workflow
Use `https://github.com/1998x-stack/Olah-style-posts/tree/main/skills/olah-style-paper-posts` as the narrative, SVG, evidence, MathML and browser-QA standard. Adapt its evidence contract from ML papers to statistics primary texts/standards; don't replicate images, layout files or prose from that project. Educational approach: misconception → concrete data → picture → exact formula → hand calculation → executable example → limits → references.

## Repository contract
- Homepage: `index.html`; current canonical chapter paths: `chapters/NN.html` (01–28). Never break legacy `NN.html` redirects without a migration plan.
- Shared styles: `assets/css/site.css` (homepage), `assets/css/article.css` (new articles), `chapters/theme.css` (legacy chapters pending migration). Do not restyle the 20 legacy chapters incidentally.
- Original topic map: `data/courses.json`. Keep 28 chapters, ordered with stable two-digit IDs and unique canonical paths. Update the homepage, README and tests when changing metadata.
- Original SVGs: `assets/svg/`; filenames should describe concept, not tool/version. Use SVG `xmlns`, `viewBox`, `title`, `desc`, readable labels and captions. Colors: teal=population/estimate, terracotta=sample or bias, violet=uncertainty.
- Numerical sources and assumptions: `evidence/NN.json`; quantitative examples must be labeled `illustrative` unless traceable to an actual dataset. Historical stories require traceable sources; otherwise replace with explicitly synthetic examples.
- Inline math: semantic MathML (mfrac for true fractions, msub/msup for subscripts), accessible labels and keyboard-scrollable display regions. No math elements inside SVG text.
- Use no externally hosted JS, fonts or SVG assets. All substantive content visible with JavaScript disabled; interactions only progressively enhance.

## Chapter quality gate
1. Independently review the existing chapter and its neighbors; identify false certainty, sampling bias, misleading claims and unreferenced numerical stories.
2. Build one learning question per SVG; define its claim and caption before drawing. Diagrams must be technically correct without hover or animation.
3. Check derivations, units, denominators, variance conventions, quantile definitions and assumptions with OpenIntro, OpenStax, NIST or another authoritative source. Distinguish population parameters from sample statistics, observational association from causation.
4. Provide at least one fully reproducible calculation (hand worked and/or deterministic code), a failure mode, self-check with answer, and nearby source references.
5. Static QA: chapter metadata, reachable internal links, SVG XML parsing, MathML structure, accessibility and metadata assertions.
6. Browser QA: desktop 1440, tablet 768, mobile 390 and 360, keyboard, actual diagram render, print, and offline. If not run, mark **not verified** rather than passing.
7. Publish in a scoped PR; review changed files and CI; never claim Pages is live before verifying its URL. Retain old links for migrated chapters.

## CI / publishing
Run `node tests/site.test.cjs` plus `node tests/offline-catalog.test.cjs`. Website is root static GitHub Pages site; static assets are committed as-is. Do not introduce a framework build or change Pages settings without verifying existing deployment source. Keep separate PRs for future chapter batches (09–13, ...).

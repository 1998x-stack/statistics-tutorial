# Agent instructions

This repository is a statistics learning system, not a generic collection of HTML pages.

## Source of truth
- Follow skills/statistics-visual-tutorial/SKILL.md and its references.
- courses.json is the canonical course taxonomy and chapter metadata.
- chapters/<slug>/index.html is the canonical article path.
- Root 01.html–28.html are compatibility redirects only.

## Editorial rules
- Explain the problem in plain language before formulas or terminology.
- Preserve correct existing content, but review every numerical claim, formula, assumption and historical statement.
- Every chapter has its own SVG, meaningful interaction, learning objectives, recap, references and evidence.json.
- Never imply simulated data is real. Never infer causality from correlation or regression alone.
- Keep p-value, confidence interval, power, multiple testing and causal identification interpretations precise.
- Use MathML for substantive formulas; keep math out of SVG.
- Prefer original diagrams tied to each chapter's statistical meaning.

## Engineering
- Keep assets local and offline-first. No CDN, remote font, telemetry or external runtime dependency.
- Shared styles and interactions belong in assets/css/article.css and assets/js/article.js.
- Preserve local-file course reading and verify catalog parity.
- Run node tests/offline-catalog.test.cjs, node tests/statistics-site.test.cjs and Playwright QA for changed chapters.
- Do not claim browser QA or deployment success unless actually executed and checked.

## Pull requests
- Prefer focused branches and PRs. Include chapter-by-chapter summary, source review status, test evidence and known limitations.
- Do not silently rewrite unrelated statistical content or weaken tests to make CI pass.
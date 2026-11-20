### 2026-11-05 21:21 UTC — ChatGPT Portfolio Iteration
- Run ID: portfolio-20261105T2121Z-11
- Repo / Base SHA: 1998x-stack/statistics-tutorial / c4fb39c4236de687cf4ef2fa54edbbb3c53f9d25
- Historical context: Default-branch docs/improvements.md returned GitHub 404 (first initialization); repository PR search returned no PRs; recent commits were 2026-08-18 and 2026-06-30.
- Product problem & expected user value: README instructs learners to open index.html directly, but browsers commonly block fetch('courses.json') on file://; learners cannot see the 28 chapters. Preserve offline reading.
- Engineering diagnosis & evidence: index.html fetch('courses.json') was unconditional; README.md explicitly describes opening the file directly. A second issue is snapshot drift; a third is absent browser E2E. These remain independently verifiable concerns.
- Options & decision: Offline access (user value 5, correctness 4, evidence 5, verifiability 4, cost 2, risk 1 = 15); snapshot drift (4+3+4+4-2-1=12); browser E2E (3+2+4+3-4-2=6). Selected offline access.
- Changes: index.html embeds canonical chapter metadata and uses it only on file://; hosted pages continue fetching courses.json. tests/offline-catalog.test.cjs checks snapshot equivalence and path invariants. No dependency or schema changes.
- Validation: A: six JavaScript assertions against actual branch HTML and canonical JSON passed; C: static branch inspection confirmed both code paths. D: node tests/offline-catalog.test.cjs written but not executed in a checkout; browser file:// E2E not executed. No CI status claimed.
- Security & regression review: No secrets, permission changes, external scripts, or deployment changes; snapshot uses JSON metadata only. Remaining risk is divergence when editing courses.json, detected by new test.
- Risk & rollback: Revert this PR or its two implementation commits; hosted fetch behavior remains unchanged.
- Follow-up: Run Node test and browser E2E for both file:// and HTTP, and include test in future existing quality checks only with explicit workflow authorization.
- Commit: pending
- PR: pending

### 2026-11-20 — Olah-style statistics tutorial restructuring
- Branch: feat/olah-style-statistics-tutorial
- Scope: migrate and standardize all 28 chapter pages, define eight knowledge domains and chapter metadata, preserve legacy root URLs, and introduce a reusable statistics-tutorial Skill.
- Content: each chapter now has a semantic article shell, learning objectives, a dedicated SVG concept diagram, an interactive lab mount, a takeaway, a method-boundary note and references. Existing explanations and examples were preserved as the first-pass content baseline; a chapter-by-chapter audit records high-risk claims requiring deeper source-level review.
- Engineering: shared responsive CSS/JS, local catalog snapshot, search/filter UI, MathML snippets, offline relative assets, static validation, Python tests and Playwright browser checks were added.
- Validation: CI has been configured but has not yet been run at the time of this entry. No merge or Pages deployment is claimed.
- Known limitation: interactive labs are explanatory mini-experiments, not replacements for full statistical software or a formal sample-size analysis.

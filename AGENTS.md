# Agent Instructions

This repository is a structured statistics-learning course. The authoritative content workflow is skills/statistics-tutorial/SKILL.md.

## Non-negotiable rules

1. Read the relevant chapter, courses.json, skill references and neighboring chapters before editing.
2. Statistical correctness comes before narrative or visual polish. State the target quantity, data type, study design, assumptions and scope of every method.
3. Separate description, prediction and causal inference. Never infer causation from correlation alone.
4. Do not present rules of thumb (for example, n ≥ 30, VIF > 10, AUC ≥ 0.8) as universal laws.
5. Preserve existing useful explanations and examples; change the smallest appropriate scope and document material corrections.
6. Every chapter must have one semantic h1, ordered section headings, one original standalone SVG with accessible title/description, a meaningful interactive lab, a takeaway, a caveat and references.
7. MathML must be semantically valid, accessible and keyboard-scrollable on narrow screens. Never place MathML inside SVG.
8. Keep all runtime assets local. No CDN, remote fonts, telemetry or unnecessary external JavaScript.
9. Keep legacy root URLs 01.html–28.html working when chapter files move.
10. Update courses.json and regenerate assets/js/course-data.js with the build script. Never hand-edit the generated snapshot.
11. Run catalog checks, pytest, static validation and browser QA for every touched chapter. Report skipped checks as not verified.
12. Do not claim GitHub Pages is deployed until the deployment and public URL are checked.

## Edit discipline

- Chapter content lives in chapters/<category>/<chapter>.html.
- Shared design and behavior live in assets/css/course.css and assets/js/course.js.
- Original chapter diagrams live in assets/figures/<chapter>-*.svg.
- Course taxonomy, prerequisites, tags and learning outcomes live in courses.json.
- Reusable production instructions live in skills/statistics-tutorial/.
- Record chapter-by-chapter substantive corrections in docs/content-audit.md.
- Prefer a focused branch and pull request; inspect the complete diff before merge.

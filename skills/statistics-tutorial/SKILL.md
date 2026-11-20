---
name: statistics-tutorial
description: Design, audit, write and maintain rigorous, intuitive, visual, interactive statistics-learning chapters in this repository.
---

# Statistics Tutorial Skill

Use this skill whenever creating, restructuring, reviewing or deeply revising a chapter, the course taxonomy, shared HTML/CSS/JS, diagrams, mathematical notation or learning experience in this repository.

The goal is not to make a page look academic. The goal is to help a learner build a correct mental model, understand when a method applies, reproduce a calculation and recognize what the result does not establish.

## Audience and teaching contract

- Primary audience: Chinese-speaking undergraduate learners, graduate beginners and practitioners who need sound statistical foundations.
- Assume basic algebra. Introduce probability, calculus, linear algebra and programming only when needed; explain the minimum prerequisite before using it.
- Be intuitive without being simplistic. Explain technical terms in plain Chinese, then give the formal name and notation.
- Do not use a lecturer persona, fake personal experience, inflated claims or conversational filler.
- Prefer one coherent worked example to a list of disconnected definitions.
- Keep the learner oriented: what question is being answered, what quantity is estimated, what assumptions are needed and how to interpret the result.

## Required workflow

### Gate 1 — Inspect before editing
Read AGENTS.md, README.md, courses.json, this skill, the target chapter, its SVG, neighboring chapters and relevant tests. Identify existing useful material, duplicated explanations, broken links, missing prerequisites and current rendering conventions. Do not replace content before understanding it.

### Gate 2 — Define the statistical question
Write down:
1. The research question and target population.
2. The unit of observation and variable types.
3. The estimand or predictive target.
4. The data-generating process and study design.
5. The assumptions required by the method.
6. The decision or interpretation the learner should be able to make.

Distinguish description, prediction and causal inference explicitly.

### Gate 3 — Verify statistical correctness
Use authoritative textbooks, peer-reviewed sources, statistical society guidance and official package documentation. Check formulas, notation, degrees of freedom, test direction, denominator, estimator target, assumptions, boundary cases and interpretation. Add a short caveat when the method is commonly misused. See references/statistical-correctness.md.

### Gate 4 — Design the learning narrative
Use this progression where it fits:
1. A concrete question or motivating example.
2. An intuitive explanation and a small numerical example.
3. A visual mental model.
4. The formal definition and equation.
5. A step-by-step derivation or worked calculation.
6. Interpretation in context, including units and uncertainty.
7. Assumptions, failure modes and common misconceptions.
8. A short recap, practice prompt and next learning step.

Do not force every chapter into identical section names. Preserve topic-specific narrative.

### Gate 5 — Build the visual explanation
Create an original standalone SVG for the chapter. The diagram must explain a real relationship, distribution, decision path, model or data workflow—not decorate the page. Use a descriptive filename, title, description, readable labels, responsive viewBox and sufficient contrast. Do not reuse a generic cover or diagram across unrelated chapters.

### Gate 6 — Add a meaningful interactive experiment
Each chapter has at least one deterministic, local interaction tied to its core idea. Controls should change a meaningful statistical quantity, chart, result or interpretation. Explain fixed assumptions. Avoid random output unless a seed and reproducible behavior are explicit. The article must remain readable when JavaScript is unavailable.

### Gate 7 — Implement accessible HTML and math
Use one h1, ordered headings, main/article/aside/nav landmarks, descriptive link text, alt text and keyboard-accessible controls. Use MathML for important equations when possible; provide a scrollable region on narrow screens. Keep SVG and MathML separate. No CDN, remote fonts, tracking or unnecessary network dependencies.

### Gate 8 — Validate and publish
Run catalog generation/checks, Python tests, static HTML/link checks and browser checks at desktop and mobile widths. Inspect console errors, local asset loading, image dimensions, horizontal overflow, interaction updates and keyboard behavior. Record what was actually run. Use a focused branch and pull request; do not claim merge or Pages deployment until verified.

## Chapter completion checklist

- [ ] Statistical question, target quantity and design are explicit.
- [ ] Core claims and formulas are verified.
- [ ] Every assumption needed for interpretation is stated.
- [ ] Examples use consistent numbers, units and denominators.
- [ ] At least one original accessible SVG explains the concept.
- [ ] At least one topic-specific interactive lab changes an output.
- [ ] Formula markup is semantically valid and readable on mobile.
- [ ] Common errors and method boundaries are explained.
- [ ] Takeaway and trustworthy references are present.
- [ ] Metadata, prerequisites and tags in courses.json are correct.
- [ ] Static validation, tests and browser checks are recorded.

## Repository conventions

- Chapter source: chapters/<category>/<chapter>.html
- Taxonomy and chapter metadata: courses.json
- Generated catalog snapshot: assets/js/course-data.js
- Shared design: assets/css/course.css
- Shared interactions and MathML: assets/js/course.js
- Original SVGs: assets/figures/
- Review log: docs/content-audit.md
- Validation scripts: skills/statistics-tutorial/scripts/

Read the relevant reference files before making specialized changes.

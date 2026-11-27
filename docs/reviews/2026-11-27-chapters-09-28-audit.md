# 2026-11-27 · Chapters 09–28 executable-example audit

## Scope
Read-only audit of every chapter 09–28 that ships a `<pre><code>` example, plus the
interactive demos they describe. No chapter structure, prose style or topic coverage
was rewritten; only statements that contradicted a reproducible output were corrected.

## Method
Extracted each code block from `chapters/09.html`–`chapters/28.html` and executed the
Python snippets with the system interpreter (NumPy 2.0, SciPy 1.13, statsmodels 0.14),
comparing printed values against the inline `#` annotations and the surrounding prose.
Blocks that only reference a reader's own `X, y` (chapter 26) were left as-is.

## Findings and fixes
- Ch12 `power(0.4, 30)`: annotation said `0.336`, arithmetic gives `Φ(−0.4108) ≈ 0.3406`,
  i.e. `0.341`. The prose already said "约 0.34"; only the annotation was corrected.
- Ch15 false-positive simulation: `# 约 0.05` printed `0.065` under seed 7. The
  annotation now states the single-run value and the long-run theoretical 0.05.
- Ch17 confounding demo: with observation noise σ = 8000 the adjusted coefficient
  landed at 2848, which reads as a biased estimator next to the "≈ 3000" claim in the
  text and demo. Lowering the synthetic noise to σ = 2000 isolates the omitted-variable
  bias and reproduces 3476 / 2962; annotations now quote those exact integers.
- Ch23 pooled variance: annotation `2.5526` did not match the printed `2.5531`.

## Unchanged (verified consistent)
Chapters 09, 10, 11, 13, 14, 16, 18, 19, 20, 21, 22, 24, 25, 26, 27 and 28 reproduce
their stated values, including the difference-in-differences arithmetic in 27 and the
Frisch–Waugh–Lovell example in 28.

## Regression coverage
`tests/examples.test.cjs` now asserts the chapter 12 sample-size rule, the chapter 17
DiD identity, the chapter 23 pooled variance and Cohen's d, and the chapter 26
bias-variance minimum, so these numbers cannot drift silently.

## Status
Static gate (`scripts/validate.py`) and the repository Node tests pass for every edited
page. Browser QA was run for a representative sample (05, 12, 24) at 1440/768/390/360
with no JavaScript errors, overflow or broken images.

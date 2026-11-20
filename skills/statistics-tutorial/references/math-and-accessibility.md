# MathML, Formula and Accessibility

## Equation writing

- Define symbols before or immediately after the equation.
- Prefer MathML for important equations; keep the surrounding prose explanation.
- Preserve distinctions such as population parameter versus sample statistic, random variable versus observed value and estimator versus estimate.
- State assumptions beside the formula, not in a distant footnote.
- Never use a formula whose symbols are not defined in the article.

## MathML requirements

- Use the MathML namespace and semantic elements such as mrow, mi, mn, mo, mfrac, msup, msub and munderover.
- Give the surrounding region an accessible label.
- Put display math inside a horizontally scrollable container with keyboard focus.
- Do not place MathML inside SVG or use SVG text as the only representation of an equation.
- Verify that superscripts, subscripts, summations and fractions preserve their intended grouping.
- If MathML is unsupported in a target browser, retain a readable plain-text explanation.

## Responsive and keyboard behavior

- Equations wider than the viewport must scroll horizontally rather than force page-wide overflow.
- Focus indicators must remain visible.
- Controls and equation scroll regions need accessible names.
- Do not rely on color alone to communicate a statistical distinction.

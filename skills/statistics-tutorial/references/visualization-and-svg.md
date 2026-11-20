# Visualization and SVG Production

## Purpose

Every diagram should answer a teaching question: what varies, what is conditioned on, what is compared, what flows into what, or what changes when a parameter changes?

## SVG requirements

- One standalone SVG per chapter under assets/figures/.
- Use a descriptive, stable filename that begins with the two-digit chapter number.
- Include a root viewBox, title and description. Use semantic labels, not decorative glyphs as the only explanation.
- Use readable type at common display sizes, sufficient contrast and a restrained palette.
- Keep labels inside the viewBox and avoid clipping.
- Prefer vector primitives and explicit paths; avoid embedded raster screenshots.
- Do not use the same diagram as a generic cover across unrelated topics.
- Keep SVG self-contained. No external images, fonts, scripts or stylesheets.

## Chart design

- Show units, denominators and reference values where they matter.
- Use a histogram for distributions, scatterplot for bivariate relationships, interval plot for uncertainty and causal graph for assumptions.
- Do not imply that a smoothed curve is observed data.
- Label illustrative/simulated values.
- Avoid 3D charts, misleading truncated axes and unnecessary chart junk.
- If a diagram encodes a causal claim, distinguish assumed arrows from observed associations.

## HTML integration

Use figure, img with meaningful alt text and figcaption. The alt text should communicate the diagram's purpose, not say only “image”. SVG files should also include title and desc for direct viewing.

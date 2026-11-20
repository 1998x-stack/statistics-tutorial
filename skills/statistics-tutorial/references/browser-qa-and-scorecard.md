# Browser QA and Quality Scorecard

## Static checks

- One h1 per chapter; headings follow a logical hierarchy.
- main, article, aside and nav landmarks are present.
- Local links, CSS, JS and SVG assets resolve.
- No remote script, stylesheet, font or tracking dependency.
- SVG includes title and description; img has meaningful alt.
- MathML markup is structurally valid and horizontally scrollable.
- One topic-specific lab exists per chapter.
- Metadata and generated catalog agree.

## Browser checks

Run on file:// and HTTP when available, at desktop and narrow mobile widths.
- No JavaScript console errors or failed local assets.
- No page-wide horizontal overflow.
- SVGs and MathML regions render and remain readable.
- Search and category filtering work on the catalog.
- Each lab control changes its result.
- Navigation links resolve and the active chapter is marked.
- Keyboard focus is visible; reduced-motion preference is respected.
- Print styles do not cut off equations or figures.

## Scorecard (0–5 each)

1. Statistical correctness and assumptions.
2. Intuition and conceptual clarity.
3. Worked example and numerical consistency.
4. Original visualization quality.
5. Interactive learning value.
6. Accessibility and responsive layout.
7. Source quality and citation traceability.
8. Reproducibility and maintainability.

A high total cannot compensate for a critical correctness error. Any unresolved critical error blocks publication.

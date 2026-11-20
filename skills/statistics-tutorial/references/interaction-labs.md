# Interactive Labs

## Learning objective

A lab should let learners change one or two meaningful parameters and see how a statistical quantity or interpretation responds. It is not a decorative slider.

## Requirements

- Keep the calculation deterministic and local.
- Label each control, its unit, range, default and fixed assumptions.
- Explain the formula or approximation behind the result.
- Use input and change events; update a visible result with aria-live.
- Provide sensible minimum, maximum and step values.
- Avoid invalid combinations and handle edge cases such as zero denominators.
- Distinguish a teaching approximation from a production-grade power calculation or statistical analysis.
- Do not present toy simulations as empirical evidence.
- Ensure controls work with keyboard and touch.
- Keep the article understandable without JavaScript. The lab may show a fallback explanation.

## Interaction design

Use the smallest number of controls that reveals the central relationship. Prefer a single focused question over a dashboard of unrelated controls. The output should include both a number and a plain-language interpretation.

## Quality checks

- Change each control and verify that the result changes.
- Verify default values and boundary values.
- Check that labels remain associated with controls.
- Confirm no console error or layout overflow at mobile widths.

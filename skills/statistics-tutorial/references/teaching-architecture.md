# Teaching Architecture

## The chapter is a learning sequence, not a glossary

A useful statistics chapter should let a learner answer four questions:
- What real-world question does this method answer?
- What is the statistical object being described or estimated?
- Why does the method work, at least intuitively?
- Under which assumptions does the interpretation hold?

## Recommended narrative sequence

1. **Question first** — define the population, outcome, comparison or prediction task.
2. **Intuition** — use a small example with concrete units and numbers.
3. **Visual model** — show how observations, random variables, distributions or causal paths relate.
4. **Formalization** — introduce notation only after the objects have names.
5. **Worked example** — calculate one result step by step and check arithmetic.
6. **Interpretation** — translate the result back into the original question.
7. **Method boundary** — assumptions, alternatives and common traps.
8. **Practice and recap** — a short prompt and a concise takeaway.

## Explanation standards

- Define every symbol at first use; keep notation consistent across chapters.
- State whether a standard deviation is population or sample, whether a test is one- or two-sided, and whether a confidence interval is z- or t-based.
- Show denominators. A percentage without its denominator is incomplete.
- Do not use a formula as a substitute for interpretation.
- Prefer small numerical examples that can be checked by hand.
- When using simulated or toy data, label it as simulated and state the data-generating assumptions.
- Avoid claiming that a package function is a statistical explanation.

## Learning progression

Use the chapter prerequisites in courses.json. Do not introduce an advanced method before its key concepts have been explained or linked. When a chapter intentionally revisits an earlier idea, say what is new in this context.

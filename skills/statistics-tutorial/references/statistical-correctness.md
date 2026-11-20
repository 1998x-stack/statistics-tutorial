# Statistical Correctness and Evidence

## Claim audit

For each statistical claim, identify whether it is:
- a definition;
- a mathematical result;
- a model assumption;
- an empirical finding;
- a practical rule of thumb;
- a software-specific behavior;
- a causal claim.

Support empirical and historical claims with traceable sources. A software example should cite the official documentation for the function and version-sensitive behavior.

## High-risk misconceptions to reject

1. **Central limit theorem:** there is no universal n ≥ 30 threshold. Approximation quality depends on the population distribution, tails, dependence and the statistic.
2. **p-values:** a p-value is a tail probability under the null model and its assumptions, not the probability that the null is true, not effect size and not the probability of replication.
3. **Non-significance:** failure to reject is not proof of no effect. Consider uncertainty intervals, power and equivalence/non-inferiority design where appropriate.
4. **Confidence intervals:** a frequentist 95% confidence procedure has 95% long-run coverage under its assumptions; it is not a posterior probability statement about a fixed parameter.
5. **Correlation:** Pearson r summarizes linear association. Normality is not required merely to calculate r; inferential procedures may require additional assumptions. Correlation alone does not establish causation.
6. **Regression:** coefficients describe conditional relationships under the model. Causal interpretation requires a credible identification strategy.
7. **ANOVA:** the classical one-way ANOVA F test compares means, not variances. A two-sample variance-ratio F test is a different procedure.
8. **Multiple testing:** 1−(1−α)^m assumes independent tests with common type-I error α. Bonferroni provides a general upper bound; FDR procedures target a different error criterion.
9. **Power:** power depends on a specified alternative, effect size, sample size, variance, design and alpha. There is no context-free “80% power” guarantee.
10. **VIF:** cutoffs such as 5 or 10 are heuristics, not universal decision rules. Collinearity affects coefficient uncertainty and interpretation, not necessarily predictive accuracy.
11. **ROC AUC:** there is no universal AUC threshold for a good model. Consider prevalence, calibration, costs, operating point and the target use.
12. **Bayesian intervals:** posterior probability statements are conditional on the model and prior. Numeric intervals must be computed from stated assumptions and data.
13. **Missing data:** distinguish MCAR, MAR and MNAR. Complete-case analysis and mean imputation are not harmless defaults.
14. **A/B testing:** plan randomization unit, primary and guardrail metrics, sample ratio checks, repeated looks, stopping rules and interference.
15. **Bias–variance:** the familiar decomposition is tied to squared-error prediction and its assumptions; do not apply it unchanged to every loss function.
16. **Causal methods:** PSM, DID, RDD and IV each need their own identification assumptions and diagnostics. Matching on propensity scores does not remove unobserved confounding.

## Formula and numerical audit

- Check dimensions and units on both sides of an equation.
- Check whether the denominator is n or n−1 and explain why.
- Check one-sided versus two-sided tails.
- Check whether a variance is known, estimated or pooled.
- Check degrees of freedom and the sampling distribution used.
- Recompute all displayed numerical examples independently.
- Mark approximations as approximations and state when exact or simulation-based alternatives are preferable.

## Evidence hierarchy

Prefer, in order:
1. Peer-reviewed primary methods papers and official statistical society statements.
2. Established textbooks and university course notes.
3. Official package documentation for implementation details.
4. Reputable technical explanations for intuition.

Do not invent references, page numbers, authors, publication dates or numerical results. If a claim cannot be verified, qualify it or remove it.

---
title: "Estimation in an AI World"
sidebar_position: 3
description: "Rethinking estimation when AI accelerates development."
---

# Estimation in an AI World

Traditional estimation techniques assume a relatively predictable relationship between story complexity and development time. AI-assisted development breaks this assumption because the acceleration varies dramatically by task type, developer proficiency with AI tools, and even the specific nature of the code being written. This section provides new estimation techniques, uncertainty management strategies, and team calibration exercises that account for this variability.

## Why Traditional Estimation Breaks

Story points and time-based estimation both rely on historical data patterns. AI introduces several factors that invalidate historical patterns:

| Factor | Impact on Estimation |
|--------|---------------------|
| **Task-dependent acceleration** | A CRUD endpoint might take 20% of traditional time; a complex algorithm might take 90%. The average is misleading. |
| **Developer-dependent acceleration** | A Level 3 AI developer might complete a task 3x faster with AI than a Level 1 developer using the same tool. |
| **Tool-dependent acceleration** | Different AI tools perform differently on different types of code. Switching tools changes velocity. |
| **Quality overhead variability** | Some AI output needs minimal review; some needs substantial rework. This is hard to predict in advance. |
| **Learning curve effects** | Velocity improves over time as developers learn, creating a non-stationary baseline. |

## New Estimation Techniques

### Technique 1: Dual-Track Estimation

Estimate two components separately, then combine:

1. **Generation estimate:** How long would this take to generate with AI assistance? (Consider prompt writing, iteration, and initial testing.)
2. **Validation estimate:** How long will thorough review, testing, security checking, and integration take?

**Total estimate = Generation estimate + Validation estimate**

This technique is valuable because the two components have different variance profiles. Generation time is highly variable (depends on AI effectiveness for this specific task); validation time is more predictable (depends on code complexity and team review practices).

**Example:**
- Story: "Create a REST API for order management with CRUD operations"
- Generation estimate: 2-4 hours (AI-suitable task, but we need to verify API design decisions)
- Validation estimate: 3-4 hours (code review, security check, integration testing, documentation review)
- Total: 5-8 hours (compare to traditional estimate of 12-16 hours)

### Technique 2: AI Suitability Scoring

Before estimating, rate each story on AI suitability (1-5 scale), then apply a multiplier to your traditional estimate:

| AI Suitability Score | Description | Time Multiplier (vs. Traditional) |
|---------------------|-------------|----------------------------------|
| 5 - Highly suitable | Standard patterns, well-defined requirements, boilerplate heavy | 0.3-0.5x |
| 4 - Suitable | Known patterns with some customization, clear constraints | 0.5-0.7x |
| 3 - Moderately suitable | Mix of standard and novel work, some ambiguity | 0.7-0.85x |
| 2 - Limited suitability | Mostly novel work, complex business logic, performance-critical | 0.85-1.0x |
| 1 - Not suitable | Security-critical, novel algorithms, heavy cross-system integration | 1.0x (no AI benefit) |

**Example:** If a story is traditionally estimated at 8 story points and scored as AI Suitability 4, the adjusted estimate is 4-6 points.

:::tip
Have the developer who will implement the story rate the AI suitability. Their assessment will be more accurate than the team average because they know their own AI proficiency level and the specific codebase area.
:::

### Technique 3: Range-Based Estimation with Confidence

Replace single-point estimates with ranges that include a confidence level:

- **Best case:** Everything goes right, AI generates high-quality code on the first attempt
- **Most likely:** Typical scenario with some iteration and standard review
- **Worst case:** AI output is poor, requires significant rework or manual implementation
- **Confidence:** Team's confidence that the most-likely scenario will occur (percentage)

**Example:**
| Story | Best Case | Most Likely | Worst Case | Confidence |
|-------|-----------|-------------|------------|------------|
| Order API CRUD | 4 hrs | 7 hrs | 14 hrs | 75% |
| Payment validation logic | 6 hrs | 10 hrs | 12 hrs | 60% |
| Admin dashboard component | 3 hrs | 5 hrs | 8 hrs | 80% |

Use the confidence percentage to weight your sprint commitment. If most stories have low confidence (< 60%), commit to less than the sum of most-likely estimates.

## Uncertainty Management

### The Uncertainty Budget

Allocate an explicit "uncertainty budget" in each sprint to account for AI estimation variance.

**Formula:** Uncertainty budget = Sprint capacity x (1 - average team confidence)

**Example:** If your sprint capacity is 80 story points and your average confidence on committed stories is 70%, your uncertainty budget is 80 x 0.3 = 24 points. This means you should commit to no more than 56 points of planned work, reserving 24 points as buffer.

During the first 3 months of AI adoption, use a more conservative uncertainty budget:
- Month 1: Reserve 35-40% buffer
- Month 2: Reserve 25-30% buffer
- Month 3: Reserve 15-20% buffer
- Month 4+: Reserve 10-15% buffer (similar to mature agile teams)

### Handling Estimation Surprises

When an AI-assisted task takes significantly more or less time than estimated:

1. **Record the variance.** Track estimated vs. actual for each story, noting the AI suitability score.
2. **Analyze the pattern.** After 3-5 sprints, look for systematic biases in your estimation by AI suitability category.
3. **Adjust multipliers.** Update your AI suitability multipliers based on empirical data.
4. **Share the learning.** If a story surprised the team, discuss it in the retrospective to calibrate collective understanding.

## Team Calibration Exercises

Run these exercises to improve your team's estimation accuracy in AI-augmented workflows.

### Exercise 1: Blind AI Estimation (Monthly, 30 minutes)

1. Select 3-4 completed stories from the previous sprint
2. For each story, ask each team member to independently estimate:
   - Traditional effort (no AI)
   - AI-assisted effort
   - AI suitability score
3. Compare estimates to each other and to actuals
4. Discuss the biggest variances -- what did some people see that others missed?

### Exercise 2: AI Acceleration Mapping (Quarterly, 60 minutes)

1. Review all stories from the past quarter
2. Group stories by type (API endpoints, UI components, data migrations, business logic, etc.)
3. Calculate the actual AI acceleration factor for each category
4. Create a team-specific reference table of AI acceleration by story type
5. Use this table to inform future sprint planning

### Exercise 3: Confidence Calibration (Monthly, 20 minutes)

1. At the end of each sprint, compare your confidence predictions to actual outcomes
2. If you predicted 75% confidence and the story hit its most-likely estimate 50% of the time, your confidence was overestimated
3. Track calibration accuracy over time -- the goal is for stated confidence to match reality

## Communicating Estimation Changes

When working with your [Product Manager](/roles/product-manager/), communicate estimation changes clearly:

- **Do say:** "Our average cycle time has decreased 25%, but variance has increased. We can likely deliver more per sprint, but we need a larger buffer for uncertainty."
- **Do not say:** "AI makes us faster, so we can commit to 40% more stories."
- **Do say:** "This story has high AI suitability, so we estimate 3-5 points instead of our traditional 8. But the validation work still takes 3 points."
- **Do not say:** "AI will do this in an hour."

See [Stakeholder Expectations](/roles/product-manager/stakeholder-expectations) and [Velocity & Quality Trade-offs](/roles/product-manager/velocity-quality-tradeoffs) for more on managing expectations with product stakeholders.

:::info
The estimation techniques in this section should evolve as your team gains experience with AI tools. Revisit and adjust your approach quarterly. What works in month 1 will need refinement by month 6. This is the essence of [Pillar 4: Continuous Improvement](/pillars/pillar-4-operating-model/).
:::

---
title: "Sprint & Agile Process Adaptation"
sidebar_position: 2
description: "Adapting agile processes and sprint ceremonies for AI-augmented development."
---

# Sprint & Agile Process Adaptation

AI-assisted development changes the fundamental dynamics of agile software delivery. Tasks that previously consumed full sprints may now complete in days, while the review and validation burden increases to account for AI-generated code quality risks. Organizations MUST adapt their agile processes to reflect this new reality rather than forcing AI-augmented work into frameworks designed for purely human development.

## Story Pointing in the AI Era

### The Calibration Problem

Traditional story pointing relies on team-relative estimation based on historical experience. When AI tools accelerate certain task categories by 2-5x while leaving others unchanged, historical reference points become unreliable. A "5-point story" that took a sprint last quarter may now take two days -- or it may still take a sprint if the AI tool is poorly suited to the task.

### Adapted Story Pointing Approach

Organizations MUST adopt a two-dimensional pointing system that separates complexity from effort:

| Dimension | What It Measures | Scale | AI Impact |
|-----------|-----------------|-------|-----------|
| **Complexity** | Inherent difficulty of the problem (design decisions, integration points, business logic) | Fibonacci (1, 2, 3, 5, 8, 13) | Low -- complexity is independent of tooling |
| **AI Acceleration Factor** | Expected AI productivity multiplier for this task type | Low (1x), Medium (1.5-2x), High (2-4x) | Direct -- varies by task type |

**Effective Story Points** = Complexity Points / AI Acceleration Factor (rounded to nearest Fibonacci number)

### AI Acceleration Factor Guidelines

Teams MUST calibrate their acceleration factors based on actual measured data, but the following starting guidelines are RECOMMENDED:

| Task Type | Typical AI Acceleration | Rationale |
|-----------|------------------------|-----------|
| Boilerplate / CRUD operations | High (2-4x) | Highly repetitive, well-understood patterns |
| Unit test generation | High (2-4x) | Pattern-based, clear inputs/outputs |
| API endpoint implementation | Medium (1.5-2x) | Moderate complexity, some design judgment |
| Documentation generation | High (2-4x) | AI excels at structured text generation |
| Complex business logic | Low (1x) | Requires deep domain understanding |
| Architecture / system design | Low (1x) | Requires human judgment and creativity |
| Security-sensitive code | Low (1x) | Enhanced review offsets any generation speed gain |
| Performance optimization | Low (1x) | Requires profiling, analysis, and expertise |
| UI/UX implementation | Medium (1.5-2x) | Moderate AI assistance for component generation |
| Data migration scripts | Medium (1.5-2x) | Accelerated generation, careful validation needed |

:::warning
AI acceleration factors MUST be based on end-to-end delivery time (including review and validation), not just initial generation time. A task that is generated in 10 minutes but requires 2 hours of review and fixing has an effective acceleration far below the raw generation speed.
:::

### Recalibration Cadence

- Teams MUST recalibrate their acceleration factors every 8 sprints (approximately quarterly)
- Recalibration SHOULD use actual data: compare estimated acceleration to measured acceleration for completed stories
- New AI tool introductions or major version updates MUST trigger immediate recalibration

## Sprint Capacity Planning

### Variable Capacity Model

Traditional capacity planning assumes relatively stable team velocity. AI-assisted development introduces significant sprint-to-sprint variability depending on the mix of work items. Organizations MUST adopt a variable capacity model.

**Capacity Calculation:**

```
Sprint Capacity = Sum of (Team Member Available Hours x
                  Weighted Average AI Acceleration Factor for Sprint Backlog)
```

Rather than using a single velocity number, teams SHOULD plan with a capacity range:

| Scenario | Calculation | Use Case |
|----------|------------|----------|
| **Conservative** | Baseline velocity x 1.0 | Commitment line -- what the team commits to delivering |
| **Expected** | Baseline velocity x weighted AI acceleration | Planning target -- most likely outcome |
| **Optimistic** | Baseline velocity x maximum AI acceleration | Stretch goal -- possible if AI assistance performs well |

### Capacity Planning Rules

1. Teams MUST commit to the conservative estimate and treat additional capacity as upside
2. Sprint commitments to stakeholders MUST use the conservative estimate
3. The gap between conservative and optimistic SHOULD shrink over time as teams gain experience with AI tools
4. Capacity planning MUST account for the additional review burden of AI-generated code -- allocate 20-30% more review time than pre-AI baselines

:::tip
Track the accuracy of each scenario over time. If the team consistently delivers at the "optimistic" level, the conservative baseline should be adjusted upward. If they frequently miss even the "conservative" estimate, investigate whether AI acceleration factors are overstated.
:::

## Backlog Management

### AI-Aware Backlog Grooming

Backlog grooming sessions MUST incorporate AI readiness assessment for each candidate story:

**AI Readiness Checklist for Backlog Items:**

- [ ] Can this story be decomposed into AI-appropriate task units?
- [ ] Are the required context artifacts (interfaces, types, examples) available?
- [ ] Does the team have relevant prompts in the [prompt repository](../pillar-3-productivity/index.md)?
- [ ] Is the expected AI acceleration factor estimated?
- [ ] Are the review and validation requirements identified?
- [ ] Are there security or compliance constraints that limit AI assistance?

### Backlog Prioritization Adjustments

AI assistance changes the cost-benefit calculus of backlog items. Items that were previously deprioritized due to high effort but moderate value may become attractive when AI significantly reduces the effort. Teams SHOULD:

- Re-evaluate previously deprioritized backlog items through an AI-adjusted effort lens
- Prioritize technical debt items that AI can accelerate (e.g., adding test coverage, updating documentation, migrating deprecated patterns)
- Create explicit "AI-enabled" backlog items that capture productivity infrastructure work (prompt creation, context pack development, automation library development)

### Sprint Backlog Composition

Teams SHOULD aim for a balanced sprint backlog that mixes task types:

| Category | Recommended Allocation | Rationale |
|----------|----------------------|-----------|
| High AI-acceleration tasks | 30-40% | Maximize productivity gains |
| Medium AI-acceleration tasks | 30-40% | Balanced workload |
| Low AI-acceleration tasks | 20-30% | Maintain deep engineering skills |
| AI infrastructure work | 5-10% | Invest in prompt repos, automation |

:::info
Sprints composed entirely of high-acceleration tasks may appear highly productive but can erode deep engineering skills over time. The balanced composition ensures that developers maintain the architectural and analytical abilities that AI cannot replace.
:::

## Ceremony Adaptations

### Sprint Planning

**Additions to Sprint Planning:**
- Review AI acceleration factors for each selected story
- Identify stories that require enhanced review due to AI-generated code
- Assign AI-aware reviewers to stories with security or complexity concerns
- Verify that required prompts and context packs are available for planned AI-assisted tasks

**Duration Adjustment:** Sprint planning MAY be shortened by 15-20% as AI-assisted estimation becomes faster, but MUST NOT be shortened at the expense of review planning.

### Daily Stand-up

**Additions to Stand-up:**
- Developers SHOULD briefly note when AI assistance significantly accelerated or impeded progress
- Blockers related to AI tools (service outages, quality issues, context limitations) MUST be raised
- The team SHOULD NOT spend stand-up time troubleshooting AI tool issues -- defer to a dedicated channel

### Sprint Review

**Additions to Sprint Review:**
- Transparently communicate which deliverables involved significant AI assistance
- Demonstrate AI-assisted delivery efficiency gains to stakeholders
- Highlight quality metrics alongside velocity metrics (see [Metrics & Measurement](../pillar-3-productivity/metrics-measurement.md))
- Present any reusable assets (prompts, components, automation) produced during the sprint

### Sprint Retrospective

**Required Retrospective Topics:**

The retrospective MUST include a dedicated section for AI-assisted development reflection:

1. **What AI workflows worked well this sprint?** -- Identify patterns to replicate
2. **What AI workflows were frustrating or unproductive?** -- Identify patterns to improve
3. **Did our acceleration factor estimates match reality?** -- Calibration data point
4. **What prompts or context packs should we add to the repository?** -- Knowledge capture
5. **Were there quality issues traceable to AI-generated code?** -- Quality signal

Retrospective findings related to AI workflows MUST be fed into the [feedback loop](../pillar-3-productivity/feedback-loop-design.md) system.

### Definition of Done (AI-Augmented)

The team's Definition of Done MUST be updated to include AI-specific criteria:

**Standard DoD items remain unchanged, plus:**

- [ ] AI-generated code has been reviewed by a human reviewer with domain expertise
- [ ] AI-generated code passes enhanced static analysis (stricter ruleset per [Pillar 2](../pillar-2-governance-risk/index.md))
- [ ] AI-generated tests have been validated for meaningful assertions (not just passing status)
- [ ] Effective prompts used during development have been contributed to the prompt repository
- [ ] AI acceleration factor for the story has been recorded for future estimation calibration

:::danger
Do not weaken the Definition of Done to accommodate faster AI-generated output. The DoD exists to protect quality. If AI-generated code cannot meet the DoD, the code requires more refinement -- the DoD does not require relaxation.
:::

## Scaling Considerations

### Multi-Team Coordination

When multiple teams collaborate on a program, AI-assisted development creates coordination challenges:

- Different teams may have different AI acceleration factors for similar work
- Dependencies between teams become harder to predict when velocity is more variable
- Shared codebases require aligned review standards for AI-generated code

**Recommendations:**
- Program-level planning MUST use the most conservative team's acceleration factors for dependency planning
- Shared code areas MUST have consistent AI code review standards enforced by the [CoE](../pillar-5-organizational-enablement/center-of-excellence.md)
- Cross-team sprint reviews SHOULD include AI productivity and quality comparisons (at the team level, never individual) to identify best practices for sharing

### SAFe and Large-Scale Agile

Organizations using SAFe or other scaled agile frameworks SHOULD adapt at the following levels:

- **Team Level**: Apply all adaptations described in this section
- **Program Level**: Adjust PI planning to account for variable team acceleration
- **Portfolio Level**: Update capacity models and investment frameworks to reflect AI-augmented delivery rates
- **Enterprise Level**: Align AI operating model standards across all value streams through the [CoE](../pillar-5-organizational-enablement/center-of-excellence.md)

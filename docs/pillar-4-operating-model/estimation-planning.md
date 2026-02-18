---
title: "Estimation & Planning with AI"
sidebar_position: 3
description: "Revised estimation and planning approaches for AI-augmented teams."
---

# Estimation & Planning with AI

Traditional estimation models are built on the assumption that developer productivity is relatively stable and predictable. AI-assisted development violates this assumption. Some tasks are accelerated dramatically; others see no benefit; and the same task may yield different acceleration depending on context quality, prompt effectiveness, and AI tool performance on a given day. Organizations MUST recalibrate their estimation and planning approaches to account for this new reality.

## The Estimation Challenge

### Why Traditional Estimation Breaks Down

Consider a team that historically delivered 40 story points per sprint with consistent accuracy. After adopting AI tools:

- Sprint 1: 52 points delivered (AI accelerated several stories)
- Sprint 2: 38 points delivered (sprint contained mostly architecture work)
- Sprint 3: 61 points delivered (high proportion of AI-friendly tasks)
- Sprint 4: 35 points delivered (AI service outage, security-sensitive work)

The average velocity (46.5 points) is higher than the pre-AI baseline, but the variance is far larger. Planning based on a single velocity number produces unreliable forecasts. Stakeholders lose confidence. Teams feel pressure when they undershoot and undervalued when they overshoot.

:::info
The core insight is that AI-assisted development does not uniformly increase velocity -- it changes the distribution of velocity from a narrow band to a wide range that depends heavily on work mix. Estimation approaches MUST account for this distribution, not just the mean.
:::

## Recalibrating Velocity

### Establishing AI-Adjusted Baselines

Organizations MUST establish new velocity baselines that reflect AI-augmented capabilities. This requires a structured baselining period.

**Baselining Process:**

1. **Collect Data**: Track velocity for a minimum of 6 sprints after AI tool adoption stabilizes (past the initial learning curve)
2. **Categorize Work**: Tag each completed story with its AI acceleration category (High, Medium, Low, None)
3. **Calculate Category Velocities**: Determine average velocity contribution by work category
4. **Build Work-Mix Model**: Create a model that predicts sprint velocity based on planned work mix

### Velocity Range Model

Rather than a single velocity number, teams MUST use a three-point velocity range:

| Velocity Estimate | Calculation | Confidence | Use |
|------------------|-------------|------------|-----|
| **P25 (Conservative)** | 25th percentile of observed sprint velocities | 75% confidence of achievement | Sprint commitment |
| **P50 (Expected)** | Median observed sprint velocity | 50% confidence of achievement | Planning target |
| **P75 (Optimistic)** | 75th percentile of observed sprint velocities | 25% confidence of achievement | Best-case scenario |

**Example:**

```
Observed velocities over 8 sprints: 35, 38, 42, 45, 48, 52, 55, 61

P25 (Conservative): 39    → Commit to this
P50 (Expected):     46.5  → Plan for this
P75 (Optimistic):   53    → Stretch target
```

### Work-Mix Adjusted Estimation

For higher accuracy, teams SHOULD compute expected velocity based on the specific work mix planned for the sprint:

```
Expected Velocity = Σ (Story Points in Category × Category Acceleration Factor)
```

This approach requires the [story categorization described in Sprint & Agile Adaptation](./sprint-agile-adaptation.md) and produces more accurate estimates than a blanket velocity number.

## Managing Variable Productivity

### Sources of Variability

Teams MUST understand and plan for the following sources of AI productivity variability:

| Source | Impact | Mitigation |
|--------|--------|-----------|
| **Work mix** | High acceleration vs. low acceleration tasks | Work-mix adjusted estimation |
| **AI tool availability** | Service outages, rate limits, degraded performance | Fallback capacity planning |
| **Context quality** | Well-prepared context vs. ad-hoc prompting | [Workflow optimization](../pillar-3-productivity/workflow-optimization.md) standards |
| **Developer AI proficiency** | Experienced vs. new AI tool users | [Training programs](../pillar-5-organizational-enablement/training-skill-development.md) |
| **Task novelty** | Routine vs. novel problems | Category-specific estimation |
| **Review burden** | Simple vs. complex review requirements | Review time allocation in planning |

### Variability Reduction Strategies

Organizations SHOULD implement these strategies to reduce estimation variability over time:

1. **Standardize Workflows**: Consistent [workflow patterns](../pillar-3-productivity/workflow-optimization.md) reduce the variance introduced by individual approach differences
2. **Invest in Context Packs**: Well-maintained context packs reduce the variance caused by context quality differences
3. **Build Prompt Libraries**: Proven prompts from the [prompt repository](../pillar-3-productivity/index.md) produce more consistent results than ad-hoc prompting
4. **Level Up Skills**: [Training programs](../pillar-5-organizational-enablement/training-skill-development.md) reduce the variance between experienced and novice AI tool users
5. **Plan for Fallback**: Always include non-AI-dependent tasks in the sprint backlog so that AI tool outages do not derail the sprint

:::tip
Variability is highest in the first 3-6 months of AI adoption and naturally decreases as teams build expertise, prompts, and workflows. Do not panic about high variability during the adoption period -- focus on collecting data and building the assets that will reduce it over time.
:::

## Communicating Timelines

### The Range-Based Communication Model

When communicating timelines to stakeholders, teams MUST use range-based estimates rather than point estimates:

**Instead of:** "This project will take 8 sprints."

**Use:** "This project will take 6-10 sprints, with 8 sprints being our most likely estimate. The range reflects variability in AI-assisted development acceleration, which we are actively working to narrow."

### Stakeholder Communication Framework

| Audience | Communication Style | Detail Level | Frequency |
|----------|-------------------|-------------|-----------|
| **Executive Leadership** | Range with confidence level | High-level milestones | Monthly |
| **Product Management** | Range with work-mix explanation | Feature-level estimates | Per sprint |
| **Engineering Teams** | Detailed estimation model | Story-level breakdown | Sprint planning |
| **External Stakeholders** | Conservative estimate + upside potential | Commitment dates only | As needed |

### Managing Expectations

Organizations MUST proactively set expectations about AI-assisted development estimation:

1. **Acknowledge Uncertainty**: Be transparent that AI assistance introduces estimation variability, especially in early adoption
2. **Show Improvement Trend**: Present estimation accuracy data over time to demonstrate that the team is improving
3. **Explain the Tradeoff**: Higher average velocity comes with higher variability -- this is a known tradeoff, not a failure
4. **Commit Conservatively, Deliver Frequently**: Use conservative commitments but deliver increments as they complete, which often means delivering ahead of the commitment date

:::warning
Never promise stakeholders the optimistic estimate. The asymmetry of outcomes is severe: delivering early is a pleasant surprise; delivering late damages trust. Always commit to P25 (conservative) and let faster delivery speak for itself.
:::

## Uncertainty Management

### Cone of Uncertainty (AI-Adjusted)

The traditional cone of uncertainty narrows as a project progresses and more is learned. In AI-assisted development, the cone is initially wider but can narrow faster:

| Project Phase | Traditional Uncertainty | AI-Adjusted Uncertainty | Rationale |
|-------------|----------------------|------------------------|-----------|
| Inception | +/- 100% | +/- 150% | AI acceleration unknown for this project |
| Elaboration | +/- 50% | +/- 60% | Initial AI effectiveness data collected |
| Construction (early) | +/- 25% | +/- 30% | Work-mix acceleration factors calibrated |
| Construction (late) | +/- 10% | +/- 10% | Sufficient data for reliable estimation |
| Transition | +/- 5% | +/- 5% | Most work complete, minimal uncertainty |

### Risk Buffers

Project plans MUST include explicit buffers for AI-related risks:

- **AI Tool Dependency Risk**: 5-10% buffer for AI service outages or degraded performance
- **Quality Risk**: 10-15% buffer for additional review and rework of AI-generated code
- **Learning Curve Risk**: 15-20% buffer for teams in their first 3 months of AI tool adoption (decreasing to 0% after 6 months)
- **Regulatory Risk**: 5% buffer for compliance-related rework if regulations change

### Contingency Planning

For each critical path milestone, teams MUST identify:

1. **AI-dependent tasks**: Which milestone tasks rely on AI acceleration?
2. **Fallback approach**: How would these tasks be completed without AI assistance?
3. **Fallback timeline**: How much longer would the fallback approach take?
4. **Trigger criteria**: At what point should the team switch to the fallback approach?

## Planning Artifacts

### AI-Augmented Sprint Planning Template

```markdown
## Sprint [N] Planning

### Planned Work Mix
- High AI acceleration: [X] stories, [Y] points
- Medium AI acceleration: [X] stories, [Y] points
- Low AI acceleration: [X] stories, [Y] points

### Velocity Estimates
- Conservative (P25): [X] points
- Expected (P50): [Y] points
- Optimistic (P75): [Z] points

### Sprint Commitment: [Conservative estimate] points

### AI-Related Risks
- [Risk 1]: [Mitigation]
- [Risk 2]: [Mitigation]

### Review Capacity
- AI code review allocation: [X] hours
- Standard review allocation: [Y] hours
```

### Release Planning Adjustments

For release-level planning, organizations MUST:

- Use the P25 (conservative) velocity for release date commitments
- Use the P50 (expected) velocity for internal planning and resource allocation
- Track actual velocity against all three estimates to improve future planning accuracy
- Recalculate release projections at least every 2 sprints using updated velocity data
- Include explicit AI risk buffers in the release plan

:::danger
Do not allow AI tool vendors' productivity claims to influence release commitments. Vendor claims of "2-3x productivity improvement" are marketing figures based on ideal conditions. Real-world acceleration varies dramatically by task type, team maturity, and codebase complexity. Use only your team's measured data for planning.
:::

## Estimation Maturity Progression

As organizations gain experience, their estimation approaches SHOULD mature:

| Maturity Stage | Approach | Expected Accuracy |
|---------------|----------|-------------------|
| **Beginner** | Pre-AI baseline + flat AI buffer | +/- 40-60% |
| **Developing** | Category-based acceleration factors | +/- 25-40% |
| **Proficient** | Work-mix adjusted velocity ranges | +/- 15-25% |
| **Advanced** | Predictive models using historical AI task data | +/- 10-15% |
| **Expert** | ML-assisted estimation with continuous calibration | +/- 5-10% |

Organizations SHOULD target the "Proficient" stage within 2-3 months of AI adoption and "Advanced" within 4-6 months. The progression is driven by data collection, analysis, and the [feedback loops](../pillar-3-productivity/feedback-loop-design.md) defined in Pillar 3.

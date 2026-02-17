---
title: "Sprint Adaptation for AI Workflows"
sidebar_position: 2
description: "Adapting sprint processes for AI-augmented development."
---

# Sprint Adaptation for AI Workflows

AI-assisted development disrupts the sprint rhythm in specific, predictable ways. Code generation accelerates but review time increases. Velocity becomes more variable. The traditional capacity-based planning model needs adjustment because the relationship between developer hours and output has fundamentally changed. This section provides concrete adaptations for sprint planning, execution, and review that account for these dynamics. It supports [Pillar 4: Continuous Improvement](/pillars/pillar-4-operating-model/) by establishing the iterative framework for process optimization.

## How AI Changes Sprint Dynamics

### The Acceleration-Review Paradox

AI accelerates code generation but creates proportionally more review work. A developer might generate in 2 hours what previously took 8 hours to write, but the generated code still needs 1-2 hours of careful review, testing, and refinement. Net productivity improves, but the ratio of "writing" to "reviewing" shifts dramatically.

**Before AI:**
- Code writing: 60% of developer time
- Code review: 15% of developer time
- Testing: 15% of developer time
- Other: 10% of developer time

**After AI:**
- AI-assisted generation + editing: 35% of developer time
- Code review (own + team): 25% of developer time
- Testing + validation: 25% of developer time
- Prompt engineering + context loading: 10% of developer time
- Other: 5% of developer time

The key insight for sprint planning: **review and validation time increases as a percentage of the sprint, even though overall throughput increases.**

## Sprint Planning Adaptations

### Capacity Adjustments

When calculating sprint capacity for an AI-augmented team, make these adjustments:

| Factor | Traditional Calculation | AI-Adjusted Calculation |
|--------|------------------------|------------------------|
| **Available hours** | Total hours - meetings - PTO | Same |
| **Focus factor** | 0.6-0.7 (accounts for interruptions) | 0.55-0.65 (accounts for AI context-switching overhead during adoption; returns to 0.6-0.7 after stabilization) |
| **Review overhead** | ~15% of capacity | ~25% of capacity (more code to review) |
| **Learning allocation** | 0-5% | 10-15% during first 3 months; 5% ongoing |
| **AI productivity multiplier** | N/A | 1.2-1.5x for AI-suitable tasks (apply only after 1 month of baseline data) |

:::warning
Do not apply the AI productivity multiplier until you have at least one month of empirical data with the specific team and tools. Premature velocity inflation leads to overcommitment and burnout. See [Estimation in an AI World](/roles/scrum-master/estimation-ai-world) for calibration techniques.
:::

### Story Selection Strategy

Not all stories benefit equally from AI assistance. During sprint planning, categorize stories by AI suitability:

| Category | AI Acceleration Potential | Examples | Planning Implication |
|----------|--------------------------|---------|---------------------|
| **High AI leverage** | 2-3x faster | CRUD features, boilerplate services, standard integrations, test generation | Can take more of these stories; still account for review time |
| **Moderate AI leverage** | 1.3-1.5x faster | Feature implementation with known patterns, refactoring, documentation | Standard velocity adjustment |
| **Low AI leverage** | 1.0-1.1x faster | Novel algorithms, complex business logic, performance optimization | Plan at traditional velocity |
| **AI-complicated** | Potentially slower | Security-critical code, compliance code, cross-system integration | May need extra review time; AI suggestions may need heavy editing |

Use this categorization to create a balanced sprint backlog. Do not fill a sprint entirely with "high AI leverage" stories -- the review bottleneck will cause a pile-up at the end.

### Planning Meeting Adjustments

Add these elements to your sprint planning sessions:

1. **AI suitability assessment.** For each story, briefly discuss which parts are AI-suitable and which are not. This improves estimation accuracy.
2. **Review pairing plan.** Identify who will review AI-generated code for each story. Do not leave review assignments to chance.
3. **Quality checkpoint schedule.** For larger stories, schedule mid-sprint check-ins where the developer shows AI-generated code to a reviewer before building further.

## Sprint Execution Adaptations

### Daily Standup Additions

Add these elements to your daily standup format (see [Ceremony Adjustments](/roles/scrum-master/ceremony-adjustments) for full details):

- **Review queue status.** Is anyone blocked waiting for a review? Are reviews keeping pace with generation?
- **AI surprises.** Any unexpected AI behavior that might affect the sprint (tool outage, poor output quality for a specific task, etc.)?
- **Quality signals.** Any concerns about the code being generated? Anything that needs escalation?

### Mid-Sprint Quality Check

Schedule a 30-minute mid-sprint quality check (Wednesday of a 2-week sprint):

1. Review the PR queue -- is it growing or staying manageable?
2. Check test coverage on new code -- is it meeting the [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements) threshold?
3. Review any security scan findings from the current sprint
4. Assess whether the sprint commitment is on track, accounting for the review pipeline

### Velocity Recalibration

AI-augmented velocity will follow a predictable pattern over the first 3-6 months:

| Phase | Duration | Velocity Pattern | Response |
|-------|----------|-----------------|----------|
| **Learning dip** | Weeks 1-3 | 10-20% decrease as developers learn new tools | Protect learning time; reduce sprint commitment |
| **Honeymoon surge** | Weeks 4-8 | 20-40% increase as developers get productive with AI | Celebrate but do not ratchet up expectations permanently |
| **Reality adjustment** | Weeks 9-12 | Settles to 15-30% above baseline with higher variance | This is your new normal; recalibrate velocity calculations |
| **Mature optimization** | Month 4+ | Gradual improvement as team refines AI practices | Continuous improvement; share cross-team learnings |

Recalibrate your velocity calculation at each phase transition. Communicate the pattern to your [Product Manager](/roles/product-manager/) to set appropriate expectations (see [Stakeholder Expectations](/roles/product-manager/stakeholder-expectations)).

## Sprint Review Adaptations

### Demo Strategy

When demoing AI-assisted work in sprint reviews:

- **Focus on outcomes, not tools.** Stakeholders care about features delivered, not which ones were AI-assisted.
- **Highlight quality.** Show test coverage, security scan results, and code review thoroughness alongside feature demos.
- **Share the learning.** Briefly mention what the team learned about AI-assisted development during the sprint. This builds organizational knowledge per [Pillar 4: Continuous Improvement](/pillars/pillar-4-operating-model/).

### Sprint Metrics Review

Add these to your sprint review metrics:

- **Velocity trend** (last 6 sprints) with AI adoption timeline overlay
- **Story completion rate** by AI suitability category
- **Review turnaround time** trend
- **Quality metrics** from [Quality & Risk Oversight](/roles/development-manager/quality-risk-oversight)

## Retrospective Focus Areas

Dedicate at least part of every retrospective to AI-related topics during the first 3 months of adoption. Suggested prompts:

- "What AI-assisted task went better than expected? What made it work?"
- "What AI-assisted task went worse than expected? What would you do differently?"
- "Are our review processes keeping up with our generation speed?"
- "What AI skill or technique should we invest in learning next sprint?"
- "Is anyone feeling overwhelmed by the pace of change?"

See [Ceremony Adjustments](/roles/scrum-master/ceremony-adjustments) for detailed retrospective formats.

:::tip
Track retrospective action items related to AI adoption separately. Over time, this creates a valuable record of your team's AI learning journey that can be shared with other teams beginning their adoption.
:::

For the metrics framework that supports sprint adaptation, see [Metrics That Matter](/roles/development-manager/metrics-that-matter). For impediment resolution during sprints, see [Impediment Patterns](/roles/scrum-master/impediment-patterns).

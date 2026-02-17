---
title: "AI Exploration & Prototype"
sidebar_position: 3
description: "Structured AI exploration and prototyping within controlled environments."
---

# AI Exploration & Prototype

The AI Exploration stage is the second stage of the [Operating Model Lifecycle](/transformation/operating-model/). It provides a controlled environment for rapid prototyping using AI tools, including structured exploration sessions, time-boxed experiments, and initial viability assessment. This is where AI tools deliver their greatest acceleration — generating initial implementations, exploring solution approaches, and rapidly iterating on designs. However, exploration without structure leads to sprawl, technical debt, and security risk. This stage defines the guardrails that enable speed while maintaining discipline.

## Time-Boxed Experiments

### Why Time Boxing Matters

AI tools make code generation so fast that developers can produce far more code than they can properly review and harden. Time boxing prevents the "AI exploration spiral" where developers continuously generate and refine AI output without progressing to [Human Hardening](/transformation/operating-model/human-hardening/). The time box forces a viability decision and ensures that exploration remains a means to an end, not an end in itself.

### Time Box Guidelines

| Initiative Size | Exploration Time Box | Extension Allowed |
|---|---|---|
| Small task (< 1 day total) | 1-2 hours | No extension; decide viability |
| Standard feature (1-5 days) | 1-2 days | 1 day with Tech Lead approval |
| Large initiative (> 5 days) | 3-5 days | 2 days with Tech Lead approval |
| Research/spike | Up to 5 days | Defined in Business Intent; no unplanned extension |

### Time Box Rules

1. **Set the timer before starting** — The time box MUST be agreed upon before exploration begins, documented in the task tracking system.
2. **Define exploration goals** — Before starting, list 3-5 specific questions the exploration should answer. Examples: "Can the AI generate a working OAuth integration?", "What is the quality of AI-generated database migrations?", "How many edge cases does the AI handle without prompting?"
3. **Track time honestly** — Time spent on AI exploration MUST be tracked. Consistently exceeding time boxes indicates a training or process issue.
4. **Make the viability decision** — At the end of the time box, make a clear go/no-go decision for proceeding to hardening.

## Controlled Sandbox Environment

AI exploration MUST occur within a controlled environment that prevents accidental exposure of sensitive data and ensures exploration code does not leak into production paths.

### Sandbox Requirements

| Requirement | Description | Enforcement |
|---|---|---|
| **Isolated branches** | AI exploration code MUST be developed on feature branches prefixed with `ai-explore/` | Branch naming convention enforced by CI |
| **No production data** | Exploration MUST NOT use production databases or services | Network isolation or synthetic data requirement |
| **Approved tools only** | Only tools approved per [AI Tool Assessment](/transformation/phase-1-foundation/ai-tool-assessment/) MAY be used | Tool access controls |
| **Data classification compliance** | Prompts MUST comply with data classification rules per [Baseline Security Policies](/transformation/phase-1-foundation/baseline-security-policies/) | DLP controls and developer training |
| **No direct deployment path** | Exploration branches MUST NOT be directly mergeable to main/production branches | Branch protection rules |

### Sandbox Configuration

```
Production Environment (OFF LIMITS)
  └── Staging Environment (OFF LIMITS for exploration)
       └── Development Environment
            └── AI Exploration Sandbox
                 ├── Synthetic test data
                 ├── Isolated database instance
                 ├── Approved AI tools configured
                 └── DLP monitoring active
```

The sandbox ensures that exploration-phase code — which has not undergone hardening or governance review — cannot accidentally reach production. Exploration branches MUST be deleted or merged into development branches (not main) after the time box concludes.

## Rapid Prototyping Guidelines

### Effective Exploration Patterns

| Pattern | Description | When to Use |
|---|---|---|
| **Breadth-first exploration** | Generate multiple solution approaches quickly; compare before deepening | When the optimal approach is unclear |
| **Depth-first exploration** | Generate a complete implementation of one approach | When the approach is known; assessing AI's capability |
| **Constraint testing** | Generate code with progressively tighter constraints; assess quality impact | When evaluating how well AI handles non-functional requirements |
| **Edge case probing** | Ask AI to handle specific edge cases; assess coverage | When evaluating completeness and robustness |
| **Architecture sketching** | Use AI to generate interface definitions and module structure | Early in large initiatives to validate architecture |

### Exploration Documentation

During exploration, developers MUST maintain lightweight documentation:

1. **Prompts used** — Record the key prompts that produced useful output (feed these into the [Prompt Library](/transformation/phase-2-expansion/knowledge-sharing/))
2. **Approaches explored** — Brief summary of each approach tried and why it was selected or rejected
3. **AI limitations observed** — Specific areas where AI output was inadequate, incorrect, or insecure
4. **Quality observations** — Initial assessment of code quality, including any patterns of concern
5. **Dependencies identified** — Libraries, APIs, or services that the AI-generated code depends on (verify they exist — hallucinated dependencies are common)

### What NOT to Do During Exploration

- **Do not optimize prematurely** — Exploration is about viability, not production readiness. Optimization happens in [Human Hardening](/transformation/operating-model/human-hardening/).
- **Do not skip the hardening stage** — No matter how good the AI output looks, it MUST go through hardening. Research shows AI-generated code has 1.7x more issues even when it appears correct.
- **Do not exceed the time box** — If the time box expires without a viable prototype, that is a valid outcome. The viability assessment captures this.
- **Do not use Restricted data** — Even in a sandbox, Restricted data MUST NOT be used in AI prompts under any circumstances.
- **Do not commit exploration code directly** — Exploration code stays on `ai-explore/` branches until it enters hardening.

## Viability Assessment

At the conclusion of the time box, a viability assessment MUST be completed. This assessment determines whether the exploration produced a viable prototype that merits investment in hardening.

### Viability Assessment Criteria

| Criterion | Question | Assessment |
|---|---|---|
| **Functional viability** | Does the prototype demonstrate that the core requirements can be met? | Yes / Partially / No |
| **Quality assessment** | What is the initial quality of the AI-generated code? | High / Acceptable / Low |
| **Security concerns** | Were any security issues identified during exploration? | None / Minor / Major |
| **Hardening effort estimate** | How much effort will be needed to harden this code for production? | Low (< 50% of generation time) / Medium (50-100%) / High (> 100%) |
| **AI vs. manual assessment** | Would a manual implementation be more efficient than hardening the AI output? | AI-assisted is faster / Comparable / Manual is faster |
| **Dependency validation** | Do all referenced dependencies exist and meet licensing/security requirements? | All validated / Some need review / Critical issues |

### Viability Decision

| Decision | Criteria | Next Step |
|---|---|---|
| **Proceed to hardening** | Functional viability = Yes; no Major security concerns; hardening effort is justified | Move prototype to [Human Hardening](/transformation/operating-model/human-hardening/) |
| **Partial proceed** | Some components viable, others not | Viable components proceed to hardening; non-viable components are implemented manually |
| **Rework** | Functional viability = Partially; additional exploration may resolve issues | Extend time box (with approval) or revise approach |
| **Abandon AI approach** | Functional viability = No; or manual implementation would be faster | Implement manually using standard development processes |
| **Abandon initiative** | Business intent cannot be met regardless of approach | Return to [Business Intent](/transformation/operating-model/business-intent/) for re-evaluation |

### Viability Assessment Template

```markdown
## Viability Assessment

### Initiative: [Name]
### Exploration Time Box: [Duration]
### Date: [Date]
### Developer(s): [Names]

#### Exploration Summary
[Brief description of what was explored and the approaches tried]

#### Results
| Criterion | Assessment | Notes |
|---|---|---|
| Functional viability | | |
| Quality assessment | | |
| Security concerns | | |
| Hardening effort estimate | | |
| AI vs. manual assessment | | |
| Dependency validation | | |

#### Decision: [Proceed / Partial / Rework / Abandon AI / Abandon Initiative]

#### Key Observations
- Prompts that worked well: [List]
- AI limitations observed: [List]
- Risks identified: [List]
- Estimated hardening effort: [Hours/Days]
```

The AI Exploration stage is where the organization captures the speed benefits of AI-assisted development. But speed without structure creates chaos. The time boxes, sandbox controls, and viability assessment defined here ensure that exploration produces actionable prototypes that flow efficiently into [Human Hardening](/transformation/operating-model/human-hardening/) — where those prototypes become production-ready code.

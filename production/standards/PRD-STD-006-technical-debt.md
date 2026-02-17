---
title: "PRD-STD-006: Technical Debt Management"
sidebar_position: 7
description: "Technical debt management standards for AI-generated code."
---

# PRD-STD-006: Technical Debt Management

**Standard ID:** PRD-STD-006
**Version:** 1.0
**Status:** Active
**Compliance Level:** Level 3 (Optimized)
**Effective Date:** 2025-01-15
**Last Reviewed:** 2026-01-15

## 1. Purpose

This standard defines how technical debt from AI-generated code must be identified, tracked, prioritized, and remediated. AI coding assistants introduce a unique form of technical debt that organizations are not accustomed to managing: code that is syntactically correct and functionally adequate but architecturally suboptimal, inconsistent with project conventions, or dependent on patterns the team does not fully understand.

Left unmanaged, AI-generated technical debt compounds rapidly. Teams that use AI to generate large volumes of code without active debt management find their codebases become increasingly difficult to maintain, extend, and debug. This standard establishes the controls necessary to prevent technical debt accumulation from undermining the velocity gains that AI tools provide.

## 2. Scope

This standard applies to:

- All production code generated, modified, or substantially influenced by AI coding assistants
- Technical debt tracking systems and processes used by engineering teams
- Sprint and release planning activities that involve AI-generated code

## 3. Definitions

| Term | Definition |
|---|---|
| **Technical Debt** | The implied cost of additional work caused by choosing an expedient solution now instead of a better approach that would take longer |
| **AI-Induced Debt** | Technical debt specifically attributable to AI-generated code, including architectural misalignment, convention violations, and knowledge gaps |
| **Debt Item** | A discrete, trackable instance of technical debt with identified scope, impact, and remediation approach |
| **Debt Budget** | The maximum percentage of sprint or development capacity allocated to carrying (not remediating) technical debt |
| **Debt Ratio** | The ratio of estimated debt remediation effort to total feature development effort in a codebase |

## 4. Requirements

### 4.1 Identification Criteria

:::danger MANDATORY
**REQ-006-01:** Teams MUST identify and record technical debt during every code review of AI-generated code. The code review process per [PRD-STD-002](/production/standards/PRD-STD-002-code-review/) MUST include explicit debt identification as a review activity.

**REQ-006-02:** The following categories of AI-induced technical debt MUST be tracked:

| Category | Description | Example |
|---|---|---|
| **Architectural Misalignment** | AI-generated code that does not follow project architecture patterns | Repository logic embedded in controller layer |
| **Convention Violations** | Code that works but does not match project coding standards | Inconsistent naming, non-standard error handling |
| **Over-Engineering** | Unnecessarily complex solutions for simple problems | Abstract factory pattern for a single implementation |
| **Under-Engineering** | Solutions that lack proper abstractions for future extensibility | Hardcoded values that should be configurable |
| **Knowledge Gaps** | Code that the team does not fully understand or can't confidently maintain | Complex algorithm without documentation |
| **Dependency Debt** | Unnecessary or suboptimal dependencies introduced by AI | Using a heavy library for a simple utility function |
| **Test Debt** | Insufficient, brittle, or misleading tests for AI-generated code | Tests that pass but do not validate real behavior |

**REQ-006-03:** Each identified debt item MUST be recorded with: (a) description, (b) category, (c) estimated remediation effort, (d) impact assessment, and (e) the AI tool and prompt that produced it (if known).
:::

:::warning RECOMMENDED
**REQ-006-04:** Teams SHOULD use automated tooling (linters, architecture fitness functions, complexity analyzers) to identify technical debt in AI-generated code that may not be caught during manual review.

**REQ-006-05:** Teams SHOULD conduct quarterly technical debt audits specifically focused on areas with high AI-generated code concentration.
:::

### 4.2 Tracking Requirements

:::danger MANDATORY
**REQ-006-06:** All identified technical debt items MUST be tracked in the team's issue tracking system (e.g., Jira, Linear, GitHub Issues) with a dedicated label or tag (e.g., `tech-debt`, `ai-debt`).

**REQ-006-07:** Debt items MUST be tagged to indicate whether they are AI-induced or traditional technical debt to enable separate tracking and reporting.

**REQ-006-08:** The debt backlog MUST be reviewed at least monthly by the engineering lead or architect to assess cumulative impact and re-prioritize items.
:::

:::warning RECOMMENDED
**REQ-006-09:** Teams SHOULD maintain a technical debt dashboard that provides visibility into total debt volume, aging, and trends over time.

**REQ-006-10:** Debt metrics SHOULD be reported as part of regular engineering health reviews per [Pillar 4: Measurement & Metrics](/pillars/pillar-3-productivity/).
:::

### 4.3 Prioritization Framework

:::danger MANDATORY
**REQ-006-11:** Technical debt items MUST be prioritized using the following framework:

| Priority | Criteria | Remediation Timeline |
|---|---|---|
| **P0 - Critical** | Debt that poses an active security risk, causes data integrity issues, or blocks critical development | Immediate -- next sprint |
| **P1 - High** | Debt that significantly impacts development velocity, causes recurring bugs, or affects system performance | Within 30 days |
| **P2 - Medium** | Debt that reduces maintainability, causes developer friction, or violates architecture principles | Within 90 days |
| **P3 - Low** | Debt that is cosmetic, has minimal impact on velocity, or affects non-critical paths | Within 180 days |

**REQ-006-12:** Priority MUST be determined by a combination of impact (how much harm the debt causes) and reach (how much of the codebase is affected), not solely by effort to remediate.
:::

### 4.4 Remediation Timelines and Debt Budget

:::danger MANDATORY
**REQ-006-13:** Teams MUST allocate a minimum of 15% of each sprint's capacity to technical debt remediation. This allocation MUST be protected and not consumed by feature work.

**REQ-006-14:** The total AI-induced debt ratio for a project MUST NOT exceed 20% of estimated total development effort. When this threshold is exceeded, the team MUST prioritize debt remediation over new AI-assisted feature development until the ratio falls below 15%.

**REQ-006-15:** P0 (Critical) debt items MUST be remediated in the next sprint regardless of the debt budget allocation.
:::

:::warning RECOMMENDED
**REQ-006-16:** Teams SHOULD target a debt remediation rate that exceeds the debt introduction rate, measured on a rolling 3-month basis.

**REQ-006-17:** Organizations SHOULD establish a "debt ceiling" per project, above which all new AI-assisted development is paused until the ceiling is restored.

**REQ-006-18:** When remediating AI-generated debt, teams SHOULD also update the relevant prompt templates per [PRD-STD-001](/production/standards/PRD-STD-001-prompt-engineering/) to prevent the same type of debt from being reintroduced.
:::

## 5. Implementation Guidance

### Debt Identification During Code Review

Add the following to the code review checklist per [PRD-STD-002](/production/standards/PRD-STD-002-code-review/):

- [ ] Does the AI-generated code follow project architecture patterns?
- [ ] Are there unnecessary abstractions or missing necessary abstractions?
- [ ] Does the code introduce dependencies that could be avoided?
- [ ] Will the team be able to maintain this code confidently in 6 months?
- [ ] Are there hardcoded values, magic numbers, or missing configurations?
- [ ] Is the code more complex than necessary for the stated requirements?

### Debt Tracking Template

```markdown
## Debt Item: [DEBT-ID]

**Category:** [Architectural Misalignment | Convention Violation | Over-Engineering | ...]
**Source:** AI-generated by [tool] on [date] in PR #[number]
**Priority:** [P0 | P1 | P2 | P3]
**Estimated Effort:** [story points or hours]
**Impact:** [Description of ongoing impact]
**Affected Files:** [List of files]
**Remediation Approach:** [Brief description of how to fix]
**Target Remediation Date:** [Date]
```

### Debt Budget Tracking

Track the following metrics monthly:

| Metric | Target | Warning | Critical |
|---|---|---|---|
| Sprint capacity allocated to debt remediation | >= 15% | 10-15% | < 10% |
| AI-induced debt ratio | < 15% | 15-20% | > 20% |
| P0/P1 items older than SLA | 0 | 1-2 | > 2 |
| Debt introduction rate vs. remediation rate | Remediation > Introduction | Equal | Introduction > Remediation |
| Total debt items in backlog | Decreasing trend | Stable | Increasing trend |

### Prevention Strategies

The most effective debt management strategy is prevention:

1. **Improve prompts** -- Update prompt templates when debt patterns are identified ([PRD-STD-001](/production/standards/PRD-STD-001-prompt-engineering/))
2. **Strengthen review** -- Focus code review on architectural alignment ([PRD-STD-002](/production/standards/PRD-STD-002-code-review/))
3. **Enforce gates** -- Use quality gates to block code that introduces excessive complexity ([PRD-STD-007](/production/standards/PRD-STD-007-quality-gates/))
4. **Know when not to use AI** -- Some code is best written manually ([When NOT to Use AI](/production/best-practices/when-not-to-use-ai/))

## 6. Exceptions & Waiver Process

Exceptions MAY be granted for:

- **Debt budget allocation** (REQ-006-13) during time-critical release periods, provided the deficit is made up in the subsequent two sprints
- **Debt ratio threshold** (REQ-006-14) during initial AI adoption periods (first 6 months), with a higher temporary ceiling of 25%

No exceptions are available for P0 debt remediation timelines (REQ-006-15) or tracking requirements (REQ-006-06 through REQ-006-08).

## 7. Related Standards

- [PRD-STD-002: Code Review Standards](/production/standards/PRD-STD-002-code-review/) -- Debt identification during review
- [PRD-STD-001: Prompt Engineering](/production/standards/PRD-STD-001-prompt-engineering/) -- Improving prompts to prevent debt
- [PRD-STD-007: Quality Gates](/production/standards/PRD-STD-007-quality-gates/) -- Automated complexity and quality enforcement
- [PRD-STD-005: Documentation](/production/standards/PRD-STD-005-documentation/) -- Documenting known debt
- [Pillar 4: Measurement & Metrics](/pillars/pillar-3-productivity/) -- Debt metrics and reporting
- [Maturity Model](/pillars/maturity/) -- Debt management maturity assessment

## 8. Revision History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-01-15 | AEEF Standards Committee | Initial release |
| 1.0.1 | 2026-01-15 | AEEF Standards Committee | Added prevention strategies section; clarified debt budget tracking metrics |

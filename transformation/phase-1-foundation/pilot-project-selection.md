---
title: "Pilot Project Selection Criteria"
sidebar_position: 5
description: "Criteria for selecting appropriate pilot projects."
---

# Pilot Project Selection Criteria

This section defines the criteria for choosing pilot projects that will serve as the initial testbed for AI-assisted development. Pilot selection is a strategic decision — choose too simple a project and the results are unconvincing; choose too complex and the risk of failure obscures the evaluation. The ideal pilot demonstrates meaningful value, contains risk within acceptable bounds, and provides clear, measurable data points to inform the go/no-go decision for [Phase 2: Structured Expansion](/transformation/phase-2-expansion/).

## Ideal Project Characteristics

A well-selected pilot project exhibits the following characteristics. Organizations SHOULD aim to satisfy at least seven of these ten criteria.

### Technical Characteristics

1. **Moderate complexity** — The project SHOULD involve 2-4 week development cycles with well-understood requirements. It MUST NOT be a greenfield architecture initiative or a critical system rewrite.
2. **Established technology stack** — The project MUST use languages and frameworks that are well-supported by the selected AI tools. Niche or legacy technology stacks SHOULD be avoided for initial pilots.
3. **Strong test infrastructure** — The project MUST have existing automated test suites (unit and integration) that can validate AI-generated code. Projects without test infrastructure are NOT suitable pilots.
4. **Non-critical production path** — The project SHOULD NOT be on the critical path for a major revenue-generating release. Internal tools, developer productivity features, and non-customer-facing services are RECOMMENDED for initial pilots.
5. **Clear code review culture** — The project team MUST already practice regular code review. Teams without an established review culture will not provide reliable quality signal.

### Organizational Characteristics

6. **Willing and experienced team** — The team MUST include developers who volunteered for the pilot and have at least 2 years of experience in the project's technology stack.
7. **Supportive management** — The team's direct management MUST actively support the pilot, including allocating time for training, measurement overhead, and feedback sessions.
8. **Stable scope** — The project SHOULD have stable, well-defined scope for the pilot duration. Projects with rapidly shifting requirements are poor candidates.
9. **Visible outcomes** — The project SHOULD produce outcomes that are demonstrable to stakeholders, supporting the case for expansion.
10. **Representative workload** — The project SHOULD involve a mix of task types (new feature development, bug fixes, refactoring, test writing) to evaluate AI assistance across multiple scenarios.

## Risk Scoring

Every candidate pilot project MUST be scored against the following risk factors. Projects with a total risk score above 35 (out of 50) MUST NOT be selected as pilots without Steering Committee exception approval.

| Risk Factor | Low Risk (1-2) | Medium Risk (3) | High Risk (4-5) | Weight |
|---|---|---|---|---|
| **Data sensitivity** | Public/Internal data only | Some Confidential data | Restricted data (PII/PHI/PCI) | 3x |
| **Production impact** | Internal tool, no customer impact | Limited customer impact | Direct customer-facing, revenue impact | 3x |
| **Technical complexity** | CRUD operations, well-understood patterns | Moderate business logic, some integration | Distributed systems, complex algorithms | 2x |
| **Regulatory scope** | No regulatory requirements | Standard compliance (SOC 2) | Heavy regulation (HIPAA, PCI-DSS) | 2x |
| **Team experience** | Senior team, deep domain knowledge | Mixed experience levels | Junior team or new domain | 1x |

**Risk Score Calculation:** Sum of (Risk Score x Weight) for each factor. Maximum possible score: 55.

### Risk Thresholds

| Total Risk Score | Decision |
|---|---|
| 11-20 | **Ideal pilot candidate** — Proceed with standard approval |
| 21-30 | **Acceptable pilot candidate** — Proceed with documented risk mitigations |
| 31-35 | **Marginal candidate** — Requires additional mitigations and Director-level approval |
| 36+ | **Not recommended** — Select a different project or request Steering Committee exception |

## Team Readiness Assessment

Before a team is approved for a pilot, the following readiness criteria MUST be verified:

### Required Readiness Criteria

- [ ] All pilot developers have completed the [Developer Training](/transformation/phase-1-foundation/developer-training/) curriculum and passed the assessment
- [ ] All pilot developers have signed the Acceptable Use Policy per [Baseline Security Policies](/transformation/phase-1-foundation/baseline-security-policies/)
- [ ] The team has an established code review process with documented standards
- [ ] The project has automated test infrastructure with at least 60% code coverage
- [ ] The team's Tech Lead has been briefed on AI output review responsibilities
- [ ] The team manager has confirmed willingness to allocate 15-20% overhead for measurement and feedback activities

### Recommended Readiness Criteria

- [ ] At least one team member has prior experience with AI development tools
- [ ] The team has a dedicated Slack/Teams channel for pilot communication
- [ ] The team has identified 3-5 initial tasks suitable for AI assistance
- [ ] Historical velocity data is available for baseline comparison (at least 3 sprints)

## Success Metrics

Each pilot project MUST define success metrics before the pilot begins. The following metrics are REQUIRED:

### Quantitative Metrics

| Metric | Measurement Method | Target |
|---|---|---|
| Velocity change | Story points completed per sprint vs. baseline | No degradation in first 2 sprints; 10%+ improvement by sprint 4 |
| Defect density | Defects per 1,000 lines of code (AI-assisted vs. baseline) | No increase vs. baseline |
| Security findings | SAST/DAST findings per release (AI-assisted vs. baseline) | No increase vs. baseline |
| Code review cycle time | Time from PR creation to merge | Baseline or better |
| AI attribution rate | Percentage of commits with AI attribution metadata | 100% of AI-assisted commits |

### Qualitative Metrics

| Metric | Collection Method | Target |
|---|---|---|
| Developer satisfaction | Survey (1-5 scale) at weeks 2, 6, and 12 | Average score >= 3.5 |
| Perceived code quality | Developer and reviewer assessment | "Same or better" for >80% of respondents |
| Tool usability | Survey (1-5 scale) | Average score >= 3.5 |
| Training effectiveness | Post-training survey | Average score >= 4.0 |
| Confidence level | Developer self-assessment of AI tool proficiency | "Confident" or "Very Confident" for >70% |

## Go/No-Go Criteria

At the pilot conclusion (typically 6-8 weeks into Phase 1), the Phase Lead MUST conduct a go/no-go assessment for each pilot project:

### Go Criteria (ALL must be met)

- No Critical or High severity security incidents attributable to AI tool usage
- Defect density has not increased more than 10% relative to baseline
- At least 80% of pilot developers recommend continuing AI tool usage
- AI attribution metadata is present on 95%+ of AI-assisted commits
- All Acceptable Use Policy violations (if any) have been resolved

### No-Go Indicators (ANY triggers no-go)

- A security incident involving Restricted or Confidential data leakage
- Defect density increase of more than 25% relative to baseline
- Fewer than 50% of pilot developers recommend continuing
- Systematic failure to follow code review or governance processes
- Evidence of automation complacency (AI output accepted without review)

### Conditional Continuation

If the pilot neither clearly passes go criteria nor triggers a no-go indicator, the Steering Committee MAY approve a conditional continuation of up to 4 additional weeks with:

- Documented remediation actions for identified issues
- Enhanced monitoring and weekly status reporting
- A defined re-assessment date

Pilot project selection is one of the most consequential decisions in [Phase 1](/transformation/phase-1-foundation/). These projects will become the reference cases for expanding AI-assisted development across the organization in [Phase 2](/transformation/phase-2-expansion/) — invest the effort to choose them well.

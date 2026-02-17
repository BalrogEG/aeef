---
title: "Quality & Risk Oversight"
sidebar_position: 3
description: "Managing quality and risk in AI-augmented teams."
---

# Quality & Risk Oversight

When AI tools accelerate code production by 30-50%, quality assurance must scale proportionally or defects will accumulate. As a development manager, you are responsible for ensuring that the speed benefits of AI-assisted development are not purchased with quality debt. This section provides the review processes, risk indicators, escalation procedures, and dashboard designs you need to maintain quality at velocity. It implements [Pillar 2: Quality Assurance](/pillars/pillar-2-governance-risk/) and [Pillar 3: Governance & Oversight](/pillars/pillar-2-governance-risk/) at the team level.

## The Quality Challenge

AI-assisted development creates a specific quality dynamic that differs from traditional development:

| Traditional Development | AI-Assisted Development |
|------------------------|------------------------|
| Code volume limited by typing speed and thinking time | Code volume limited only by review capacity |
| Defects correlate with developer fatigue and complexity | Defects correlate with review thoroughness and prompt quality |
| Quality bottleneck: writing correct code | Quality bottleneck: reviewing generated code |
| Technical debt accumulates slowly | Technical debt can accumulate rapidly if reviews are superficial |

The fundamental insight is this: **in AI-assisted development, the quality bottleneck shifts from code generation to code review.** Your processes must reflect this shift.

## Review Process Design

### Enhanced Code Review Requirements

All code containing AI-generated content must undergo enhanced review per [PRD-STD-002](/production/standards/PRD-STD-002-code-review). As a development manager, you are responsible for ensuring these processes are followed.

**Mandatory review elements for AI-assisted PRs:**

1. **Author self-review attestation.** The PR author confirms they have reviewed and understand all AI-generated code. This should be a checkbox in your PR template.
2. **AI disclosure.** PRs should indicate which portions involved AI assistance. This is not about blame -- it is about directing reviewer attention.
3. **Security scan results.** Automated security scanning must pass before human review begins.
4. **Test coverage verification.** New code must meet minimum coverage thresholds. AI-generated tests must themselves be reviewed for quality.
5. **Peer review.** At least one human reviewer must approve, with enhanced scrutiny per the [Code Review Responsibilities](/roles/developer/code-review-responsibilities) checklist.

### Review Capacity Planning

As code velocity increases, plan review capacity explicitly:

| Team Size | Recommended Review Time | Review Load Per Developer |
|-----------|------------------------|--------------------------|
| 4-6 developers | 1-1.5 hours/day | 2-3 PRs/day |
| 7-10 developers | 1.5-2 hours/day | 3-4 PRs/day |
| 11+ developers | 2+ hours/day or dedicated reviewers | 4+ PRs/day |

:::warning
If review queues consistently exceed 24 hours, your team's code generation pace has outrun its review capacity. This is a leading indicator of quality problems. Either slow down generation, add review capacity, or invest in better automated checks.
:::

## Risk Indicators

Monitor these indicators to detect quality degradation early.

### Leading Indicators (Predict Future Problems)

| Indicator | Healthy Range | Warning Threshold | Action |
|-----------|--------------|-------------------|--------|
| PR review queue age | < 12 hours | > 24 hours | Add review capacity or slow generation |
| AI code acceptance rate (team avg) | 40-70% | > 80% | Investigate insufficient review rigor |
| Test coverage on new code | > 80% | < 70% | Enforce coverage gates in CI |
| Security scan findings per sprint | Trending down | Trending up | Security review session, training refresh |
| Prompt quality score (peer-rated) | > 3.5/5 | < 3/5 | Prompt engineering training |

### Lagging Indicators (Confirm Existing Problems)

| Indicator | Healthy Range | Warning Threshold | Action |
|-----------|--------------|-------------------|--------|
| Defects per sprint (AI-assisted code) | At or below team baseline | > 1.5x baseline | Root cause analysis, process review |
| Production incidents from AI code | Zero or trending down | Any increase | Immediate investigation, escalation |
| Rework rate (changes after review) | < 15% | > 25% | Improve prompting, strengthen first review |
| Customer-reported bugs in new features | Stable or declining | Increasing | Comprehensive quality audit |
| Security vulnerabilities in AI code | Zero critical/high | Any critical/high | Immediate remediation, process review |

## Quality Dashboard

Build a team-level quality dashboard that provides at-a-glance visibility into these metrics. Update it weekly and review it in your team's retrospective.

**Dashboard sections:**

1. **Quality Trend.** Line chart showing defect density over the past 6 sprints, with a separate series for AI-assisted code vs. manually-written code.
2. **Review Health.** Bar chart showing PR review queue age distribution and average review time.
3. **Security Posture.** Count of open security findings by severity, trend over time.
4. **Test Coverage.** Coverage percentage for AI-assisted code vs. team target.
5. **Risk Heatmap.** Color-coded view of leading indicators: green (healthy), yellow (warning), red (action needed).

Share this dashboard with your [CTO](/roles/cto/) and use it to feed the [Board-Ready Metrics](/roles/executive/board-ready-metrics) reporting chain.

## Escalation Procedures

Define clear escalation paths so that quality issues are addressed at the appropriate level.

### Level 1: Team-Level Resolution

**Trigger:** Individual PR with quality issues, isolated defect in AI-generated code, single security finding.

**Action:** Address through normal code review feedback, pair with the developer on better prompting, update team checklist if the issue reveals a gap.

**Owner:** Developer + reviewer.

### Level 2: Manager Intervention

**Trigger:** Pattern of quality issues across multiple PRs, review process not being followed, developer consistently producing low-quality AI-assisted code.

**Action:** One-on-one coaching, additional training, temporary pairing requirement, process adjustment. Document the pattern and the intervention.

**Owner:** Development manager.

### Level 3: Cross-Team Escalation

**Trigger:** Quality issue affects other teams or services, systematic tool-level problem, security vulnerability with broad exposure.

**Action:** Engage [QA Lead](/roles/qa-lead/) for defect analysis, engage security team for vulnerability assessment, engage [CTO](/roles/cto/) for tool-level decisions. Coordinate with [Scrum Master](/roles/scrum-master/) on sprint impact.

**Owner:** Development manager + relevant stakeholders.

### Level 4: Organizational Escalation

**Trigger:** Production incident caused by AI-generated code, compliance or regulatory impact, customer data exposure.

**Action:** Invoke incident response process, engage [Executive](/roles/executive/) leadership per [Risk & Governance Executive Summary](/roles/executive/risk-governance-summary). Consider temporary suspension of AI tool usage for affected code areas.

**Owner:** Development manager + CTO + security team.

## Risk Mitigation Strategies

### Automated Quality Gates

Invest in automated checks that run before human review to catch the most common AI code issues:

- **Static analysis** configured with rules targeting common AI patterns (hardcoded values, missing error handling)
- **Security scanning** (SAST/DAST) with rulesets tuned for AI vulnerability patterns
- **Test coverage enforcement** with minimum thresholds per [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements)
- **Dependency scanning** for outdated or vulnerable packages suggested by AI
- **Code complexity limits** to prevent AI from generating overly complex solutions

### Process Safeguards

- **Mandatory PR templates** with AI-specific checklists
- **Branch protection rules** requiring passing checks and human approval
- **Weekly quality review** where the team discusses AI-related quality findings
- **Monthly security audit** sampling AI-generated code for vulnerability patterns

:::info
For testing strategy specifics, see the [QA Lead Guide: Testing Strategy](/roles/qa-lead/testing-strategy). For defect pattern analysis, see [Defect Pattern Analysis](/roles/qa-lead/defect-analysis). This page focuses on management oversight; those pages focus on technical execution.
:::

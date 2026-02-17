---
title: "Tooling Decisions"
sidebar_position: 5
description: "Framework for making AI tool decisions at the team level."
---

# Tooling Decisions

AI development tools are evolving rapidly, with new entrants, features, and pricing models emerging monthly. As a development manager, you need a structured approach to evaluating, piloting, adopting, and sunsetting AI tools that balances innovation with stability. This section provides that framework, aligned with [Pillar 3: Governance & Oversight](/pillars/pillar-2-governance-risk/) and the technology strategy set by your [CTO](/roles/cto/) per [Technology Strategy & Tool Selection](/roles/cto/technology-strategy).

## Evaluation Rubric

Use this rubric to assess any AI development tool before piloting it with your team. Score each criterion from 1 (poor) to 5 (excellent).

| Criterion | Weight | What to Evaluate | Scoring Guide |
|-----------|--------|-----------------|---------------|
| **Code Quality** | 25% | Accuracy, correctness, and adherence to patterns | 5: Consistently high quality; 3: Acceptable with review; 1: Frequently incorrect |
| **Security Posture** | 20% | Data handling, privacy controls, vulnerability introduction rate | 5: Enterprise-grade controls; 3: Adequate with configuration; 1: Unacceptable data practices |
| **Developer Experience** | 15% | IDE integration, latency, context understanding, workflow fit | 5: Seamless integration; 3: Usable with workarounds; 1: Disruptive to workflow |
| **Organizational Fit** | 15% | Compatibility with tech stack, language support, policy compliance | 5: Full stack coverage; 3: Covers primary languages; 1: Poor fit for our needs |
| **Cost Effectiveness** | 10% | Per-seat pricing, usage-based costs, total cost vs. value delivered | 5: Clear ROI; 3: Reasonable cost; 1: Expensive relative to value |
| **Vendor Stability** | 10% | Company viability, product roadmap, support quality, SLAs | 5: Established vendor; 3: Growing but credible; 1: Risky or unstable |
| **Configurability** | 5% | Ability to customize behavior, enforce policies, integrate with CI/CD | 5: Highly configurable; 3: Basic configuration; 1: No customization |

**Minimum threshold for pilot:** Weighted score of 3.0 or higher with no criterion scoring 1 in Security Posture.

### Evaluation Process

1. **Identify candidate.** Tool surfaces through team request, CTO recommendation, or market research.
2. **Initial screening.** Review against [PRD-STD-001](/production/standards/PRD-STD-001-prompt-engineering) approved tool criteria and security requirements. Disqualify tools that cannot meet security baselines.
3. **Structured evaluation.** Two developers (one senior, one mid-level) evaluate the tool for 5 business days using prepared exercises that cover code generation, debugging, refactoring, and test writing.
4. **Score and compare.** Apply the rubric above. Compare to current tools.
5. **Pilot decision.** If the score exceeds threshold and offers meaningful improvement over current tools, proceed to pilot.

## Pilot Criteria

A pilot is a time-boxed, controlled evaluation with a subset of the team working on real (non-critical) projects.

### Pilot Design

| Parameter | Recommendation |
|-----------|---------------|
| **Duration** | 4-6 weeks (at least 2 full sprints) |
| **Team size** | 3-5 developers representing different skill levels |
| **Project scope** | Non-critical project or well-understood feature area |
| **Success criteria** | Define before pilot begins (see below) |
| **Data collection** | Track all metrics from [Metrics That Matter](/roles/development-manager/metrics-that-matter) plus tool-specific measures |
| **Comparison method** | Compare pilot team metrics against their own recent baselines, not against non-pilot team members |

### Pilot Success Criteria

Define these before the pilot begins and share them with the pilot team:

- [ ] Code quality scores are at or above team baseline
- [ ] No security incidents or data leakage events
- [ ] Developer satisfaction score > 3.5/5
- [ ] Measurable productivity improvement in at least one metric
- [ ] No significant workflow disruption after week 2
- [ ] Licensing and infrastructure costs are within budget projections

### Pilot Failure Criteria (Stop Conditions)

- Security incident or data leakage of any severity
- Tool unavailability exceeding 4 hours during business hours
- Consistent developer dissatisfaction (score < 2.5/5 after 2 weeks)
- Code quality degradation exceeding 20% above baseline defect rate
- Vendor changes terms of service or data handling practices during pilot

## Vendor Management

### Ongoing Vendor Assessment

For adopted tools, maintain an ongoing vendor relationship:

| Activity | Frequency | Owner |
|----------|-----------|-------|
| Review vendor security posture and certifications | Quarterly | Security team + manager |
| Assess product roadmap alignment | Quarterly | Manager + CTO |
| Review usage metrics and license utilization | Monthly | Manager |
| Monitor vendor stability (funding, leadership, market position) | Quarterly | CTO |
| Renegotiate pricing based on usage patterns | Annually | Procurement + manager |
| Review data handling agreement and privacy terms | Annually or on change | Legal + security |

### Vendor Risk Indicators

Watch for these signs that a vendor relationship needs attention:

- Significant price increases without corresponding value increases
- Degradation in tool quality or reliability over time
- Changes to data handling or privacy policies
- Key personnel departures or signs of financial instability
- Failure to address reported bugs or feature requests
- Acquisition by a company with conflicting interests

See [Technical Risk Management](/roles/cto/technical-risk) for deeper analysis of vendor lock-in risks.

## Multi-Tool Strategy

Most teams benefit from more than one AI tool. Design your tool portfolio deliberately:

| Tool Category | Purpose | Example Selection Criteria |
|--------------|---------|---------------------------|
| **Primary coding assistant** | Day-to-day code generation, completion, and editing | Best IDE integration, fastest for your primary language |
| **Conversational AI** | Architecture design, debugging complex issues, documentation | Best at long-context reasoning and explanation |
| **Specialized tools** | Security analysis, test generation, code review assistance | Best in specific domain |

:::tip
Limit your team to 2-3 AI tools maximum. Each additional tool increases cognitive load, training requirements, and vendor management overhead. Choose depth over breadth.
:::

## Sunset Procedures

When a tool needs to be replaced or removed, follow a structured sunset process:

### Phase 1: Decision (2 weeks)
- Document the reason for sunsetting (cost, quality, replacement, policy change)
- Identify all dependencies on the tool (prompt libraries, workflows, integrations)
- Communicate the decision with the rationale to the full team
- Set the sunset timeline

### Phase 2: Migration (2-4 weeks)
- Migrate reusable assets (prompt templates, configurations) to the replacement tool
- Retrain team on the replacement tool if applicable
- Run both tools in parallel to ensure the replacement meets needs
- Update all documentation and workflows

### Phase 3: Decommission (1 week)
- Revoke licenses for the sunset tool
- Remove IDE integrations and configurations
- Archive any tool-specific data per retention policies
- Update [PRD-STD-001](/production/standards/PRD-STD-001-prompt-engineering) approved tool list
- Confirm with each team member that the transition is complete

### Phase 4: Review (2 weeks post-sunset)
- Collect team feedback on the transition
- Verify that metrics are stable or improved
- Document lessons learned for future tool transitions

For the organizational perspective on build-vs-buy and tool strategy, see [Build vs. Buy](/roles/cto/build-vs-buy) and [Technology Strategy](/roles/cto/technology-strategy) in the CTO Guide.

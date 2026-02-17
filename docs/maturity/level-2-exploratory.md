---
title: "Level 2: Exploratory"
sidebar_position: 3
description: "Characteristics and transition guidance for Level 2 maturity — structured experimentation."
---

# Level 2: Exploratory

Level 2 organizations have moved beyond uncontrolled AI usage and entered a phase of structured experimentation. An initial AI usage policy exists, pilot teams are operating under basic guidelines, and the organization has acknowledged AI-assisted development as a capability that requires deliberate management. However, governance remains informal, adoption is uneven across teams, and the organization lacks the standardized processes needed for enterprise-wide scaling.

:::info Key Distinction
The difference between Level 1 and Level 2 is **awareness and intent**. Level 2 organizations know what AI tools are in use, have made deliberate choices about which tools to approve, and have begun to manage the associated risks — even if these efforts are still nascent and inconsistent.
:::

## Characteristics of Level 2 Organizations

### Governance
- A written AI usage policy exists and has been communicated to engineering staff
- An AI governance owner has been designated, though the role may be part-time or informal
- Data classification rules govern what code and data MAY be shared with AI services
- Legal has completed an initial (but not comprehensive) IP and licensing assessment
- Policy enforcement relies on trust and manual verification rather than automated controls

### Tooling
- One or two AI tools have been formally evaluated and approved for use
- Enterprise licenses are provisioned for approved tools, at least for pilot teams
- Personal account usage is discouraged but may still occur outside pilot teams
- Basic usage monitoring tracks which teams use approved tools and at what frequency
- No integration exists between AI tools and CI/CD pipelines or automated quality gates

### Security
- Awareness exists that AI-generated code may contain elevated vulnerability rates
- Standard SAST/DAST scanning covers AI-generated code but without AI-specific rules
- No formal threat model addresses AI-specific attack vectors
- Code provenance tracking is discussed but not yet implemented

### Training
- Self-directed learning is the primary training mode (articles, videos, internal wikis)
- Pilot teams share learnings informally through demos, retrospectives, or Slack channels
- No formal curriculum or certification program exists
- Prompt engineering skills vary widely across developers

### Metrics
- Basic adoption metrics are tracked (number of users, tool usage frequency)
- Productivity impact is assessed anecdotally through pilot team feedback
- No formal KPI framework is in place
- No baseline measurements exist for risk or financial impact

### Culture
- Pilot teams are enthusiastic; non-pilot teams range from curious to skeptical
- Management is supportive but has not committed to enterprise-wide rollout
- AI-assisted development is viewed as a productivity experiment rather than a strategic capability
- Sharing of AI techniques happens organically within teams but not across the organization

## Assessment Checklist

Organizations SHOULD evaluate themselves against the following checklist. Achieving **eight or more** items confirms Level 2 status. Fewer than eight items checked indicates the organization has not fully transitioned from [Level 1](./level-1-uncontrolled.md).

- [ ] A written AI usage policy exists and has been acknowledged by engineering staff
- [ ] At least one AI tool has been formally evaluated, approved, and provisioned with enterprise licenses
- [ ] An individual or team has been designated as the AI governance owner
- [ ] Data classification rules specify what MAY and MUST NOT be shared with AI services
- [ ] Legal counsel has completed an initial assessment of IP implications
- [ ] At least two pilot teams are actively using approved AI tools under the policy
- [ ] Basic usage monitoring is in place (who uses what, how often)
- [ ] Pilot teams have conducted at least one retrospective on AI-assisted development
- [ ] All AI-assisted code undergoes standard code review before merging
- [ ] Management has received at least one briefing on AI adoption status and risks
- [ ] Developers have access to self-directed learning resources for AI-assisted development
- [ ] An incident response procedure exists for AI-related data exposure events

## Common Challenges at Level 2

### The Pilot Plateau
Pilot teams achieve initial success and enthusiasm, but the organization struggles to expand beyond the pilot. This occurs when pilot learnings are not documented, success criteria are not defined, and there is no transition plan from "experiment" to "standard practice."

### Inconsistent Quality Perception
Some teams report dramatic productivity gains while others see no benefit or report quality degradation. Without standardized metrics, these perceptions cannot be objectively evaluated, leading to organizational ambiguity about the value of AI-assisted development.

### Shadow Adoption
While pilot teams operate under governance, other teams may adopt AI tools informally — reverting to Level 1 behavior in parts of the organization. Without automated enforcement, policy compliance depends on awareness and goodwill.

### Security False Confidence
Organizations at Level 2 may believe that existing SAST/DAST tools adequately cover AI-generated code. In practice, AI-generated code often introduces vulnerability patterns that standard rulesets do not prioritize, creating a false sense of security.

:::warning Shadow Adoption Risk
Survey data consistently shows that developer self-reporting underestimates AI tool usage by 20-30%. Organizations SHOULD supplement surveys with network monitoring and license auditing to capture the true scope of adoption.
:::

## Transition Roadmap: Level 2 to Level 3

The transition from Level 2 to Level 3 represents a shift from experimentation to standardization. This is where AI-assisted development moves from a team-level initiative to an organizational capability with formal processes, training, and enforcement. The typical timeline is **3-6 months**.

### Workstream 1: Governance Formalization (Months 1-2)

| Activity | Owner | Deliverable |
|---|---|---|
| Expand AI usage policy into comprehensive standards document | AI Governance Owner | Published AEEF-aligned standards |
| Establish AI Governance Board with cross-functional representation | CTO / VP Engineering | Board charter and membership roster |
| Define governance gates for AI-assisted development in the SDLC | AI Governance Board | Gate definitions integrated into SDLC documentation |
| Complete comprehensive legal review of all approved AI tools | Legal | Legal assessment memo with risk classifications |
| Define code provenance tracking requirements | AI Governance Board | Provenance policy and tagging standards |

### Workstream 2: Toolchain Standardization (Months 2-4)

| Activity | Owner | Deliverable |
|---|---|---|
| Evaluate and select enterprise-standard AI toolchain | Platform Engineering | Tool evaluation matrix and selection decision |
| Integrate approved AI tools with IDE and CI/CD environments | Platform Engineering | Standardized developer environment configuration |
| Implement automated policy enforcement (data classification, approved tools) | Platform Engineering | Automated guardrails in developer tooling |
| Retire all non-approved AI tool usage and personal accounts | IT Security | Audit confirming zero personal AI tool accounts |
| Establish AI tool configuration standards (model selection, context rules) | Platform Engineering | Configuration baseline document |

### Workstream 3: Training Program Development (Months 2-4)

| Activity | Owner | Deliverable |
|---|---|---|
| Design role-based AI training curriculum | Engineering Enablement | Curriculum document covering all engineering roles |
| Develop core training module: effective prompt engineering | Engineering Enablement | Training module with exercises |
| Develop core training module: AI code review and human hardening | Engineering Enablement | Training module with exercises |
| Develop core training module: security considerations for AI-generated code | Security Team | Training module with real-world examples |
| Pilot training with 2-3 teams and iterate based on feedback | Engineering Enablement | Revised curriculum incorporating pilot feedback |

### Workstream 4: Security Enhancement (Months 1-3)

| Activity | Owner | Deliverable |
|---|---|---|
| Assess current SAST/DAST coverage against AI-specific vulnerability patterns | Application Security | Gap analysis report |
| Implement AI-specific scanning rules or supplementary tools | Application Security | Updated scanning configuration |
| Develop AI threat model covering prompt injection, data leakage, and model manipulation | Application Security | Published threat model |
| Define mandatory security review criteria for AI-assisted code | Application Security | Security review checklist |

### Workstream 5: Metrics Foundation (Months 3-5)

| Activity | Owner | Deliverable |
|---|---|---|
| Implement the [KPI Framework](../kpi/index.md) productivity metrics | Engineering Analytics | Dashboards tracking core productivity KPIs |
| Implement the [KPI Framework](../kpi/index.md) risk metrics | Application Security | Dashboards tracking AI-related risk KPIs |
| Establish baseline measurements across all defined KPIs | Engineering Analytics | Baseline report |
| Define targets for each KPI aligned with Level 3 requirements | AI Governance Board | Published KPI targets |

### Prerequisites for Level 3 Certification

The organization MUST satisfy **all** of the following before claiming Level 3 maturity:

- [ ] Comprehensive AI-assisted development standards are published and enforced organization-wide
- [ ] An AI Governance Board with cross-functional representation is operational
- [ ] A standardized AI toolchain is deployed to all engineering teams (no personal accounts remain)
- [ ] A formal training curriculum has been delivered to all engineering staff
- [ ] AI-specific security scanning is implemented in the CI/CD pipeline
- [ ] Code provenance tracking distinguishes AI-assisted from human-only code
- [ ] The [KPI Framework](../kpi/index.md) is operational with baseline measurements established
- [ ] All governance gates are integrated into the SDLC and enforced
- [ ] Human review is mandatory for all AI-assisted code, verified through process controls (not just policy)

:::tip Transition Accelerator
Organizations that already have strong SDLC governance (e.g., SOC 2 certified, ISO 27001 compliant) can typically achieve Level 3 in 3 months rather than 6 by adapting existing governance structures to include AI-specific requirements rather than building new structures from scratch.
:::

## Related Resources

- [Maturity Model Overview](./index.md) — comparison across all five levels
- [Level 1: Uncontrolled](./level-1-uncontrolled.md) — the level this organization has transitioned from
- [Level 3: Defined](./level-3-defined.md) — the target state for this transition
- [KPI Framework](../kpi/index.md) — metrics that must be operational before advancing to Level 3
- [Productivity Metrics](../kpi/productivity-metrics.md) — detailed productivity KPI definitions

---
title: "Role-Based Navigation Guide"
sidebar_position: 1
description: "Find the guidance tailored to your role in AI-assisted engineering."
---

# Role-Based Navigation Guide

Every role has a different relationship with AI-assisted engineering. With 92% of US developers now using AI tools daily and AI co-authored code showing 1.7x more issues and a 2.74x higher vulnerability rate, the stakes for getting adoption right are enormous -- but the approach varies dramatically depending on your seat at the table. This section provides curated reading paths so that each role can quickly find the standards, practices, and recommendations most relevant to their responsibilities.

## How to Use This Section

The AEEF Standards framework is organized around [five pillars](/pillars/) that apply universally. However, **how** you engage with those pillars depends on your role. A developer needs hands-on prompt engineering techniques; a CTO needs architecture governance patterns; an executive needs board-ready metrics. This section translates the universal framework into role-specific guidance.

**Step 1:** Identify your primary role from the table below.
**Step 2:** Follow the link to your role's overview page.
**Step 3:** Work through the sub-pages in order -- they are sequenced from foundational to advanced.
**Step 4:** Use the cross-references to dive deeper into specific standards or pillars when you need more detail.

:::tip
Many professionals wear multiple hats. If you are a tech lead who also manages people, read both the Developer Guide and the Development Manager Guide. If you are a CTO at a startup who also writes code, add the Developer Guide to your reading list.
:::

## Role-to-Guide Mapping

| Role | Guide | Primary Focus | Key Standards | Key Pillars |
|------|-------|---------------|---------------|-------------|
| Software Developer / Engineer | [Developer Guide](/roles/developer/) | Daily workflows, prompt engineering, code review, security | [PRD-STD-001](/production/standards/PRD-STD-001-prompt-engineering), [PRD-STD-002](/production/standards/PRD-STD-002-code-review), [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements) | [Pillar 1: Engineering Discipline](/pillars/pillar-1-engineering-discipline/), [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/) |
| Development Manager / Engineering Manager | [Development Manager Guide](/roles/development-manager/) | Team enablement, quality oversight, metrics, performance | [PRD-STD-001](/production/standards/PRD-STD-001-prompt-engineering), [PRD-STD-006](/production/standards/PRD-STD-006-technical-debt), [PRD-STD-007](/production/standards/PRD-STD-007-quality-gates) | [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/), [Pillar 5: Organizational Enablement](/pillars/pillar-5-organizational-enablement/) |
| Scrum Master / Agile Coach | [Scrum Master Guide](/roles/scrum-master/) | Sprint adaptation, estimation, ceremonies, team health | [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements), [PRD-STD-007](/production/standards/PRD-STD-007-quality-gates) | [Pillar 4: Operating Model](/pillars/pillar-4-operating-model/), [Pillar 5: Organizational Enablement](/pillars/pillar-5-organizational-enablement/) |
| Product Manager / Product Owner | [Product Manager Guide](/roles/product-manager/) | Roadmap planning, stakeholder expectations, velocity trade-offs | [PRD-STD-001](/production/standards/PRD-STD-001-prompt-engineering), [PRD-STD-007](/production/standards/PRD-STD-007-quality-gates) | [Pillar 4: Operating Model](/pillars/pillar-4-operating-model/), [Pillar 3: Productivity](/pillars/pillar-3-productivity/) |
| CEO / Executive | [Executive Guide](/roles/executive/) | Strategy, risk governance, ROI, competitive positioning | [PRD-STD-004](/production/standards/PRD-STD-004-security-scanning), [PRD-STD-007](/production/standards/PRD-STD-007-quality-gates) | [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/), [Pillar 5: Organizational Enablement](/pillars/pillar-5-organizational-enablement/) |
| CTO / VP Engineering | [CTO Guide](/roles/cto/) | Technology strategy, architecture, build vs. buy, org design | [PRD-STD-001](/production/standards/PRD-STD-001-prompt-engineering), [PRD-STD-004](/production/standards/PRD-STD-004-security-scanning), [PRD-STD-007](/production/standards/PRD-STD-007-quality-gates) | [Pillar 1: Engineering Discipline](/pillars/pillar-1-engineering-discipline/), [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/) |
| Solution Architect | [Solution Architect Guide](/roles/solution-architect/) | Reference architecture, role-agent orchestration, architecture conformance | [PRD-STD-005](/production/standards/PRD-STD-005-documentation), [PRD-STD-007](/production/standards/PRD-STD-007-quality-gates), [PRD-STD-009](/production/standards/PRD-STD-009-autonomous-agent-governance) | [Pillar 1: Engineering Discipline](/pillars/pillar-1-engineering-discipline/), [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/) |
| QA Lead / Test Lead | [QA Lead Guide](/roles/qa-lead/) | Testing strategy, AI-generated tests, defect analysis, automation | [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements), [PRD-STD-002](/production/standards/PRD-STD-002-code-review) | [Pillar 2: Quality Assurance](/pillars/pillar-2-governance-risk/), [Pillar 1: Engineering Discipline](/pillars/pillar-1-engineering-discipline/) |
| Security Engineer | [Security Engineer Guide](/roles/security-engineer/) | AppSec controls, threat modeling, remediation governance | [PRD-STD-004](/production/standards/PRD-STD-004-security-scanning), [PRD-STD-008](/production/standards/PRD-STD-008-dependency-compliance), [PRD-STD-002](/production/standards/PRD-STD-002-code-review) | [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/), [Pillar 1: Engineering Discipline](/pillars/pillar-1-engineering-discipline/) |
| Platform / DevOps Engineer | [Platform / DevOps Engineer Guide](/roles/platform-engineer/) | CI quality gates, tooling provisioning, observability | [PRD-STD-007](/production/standards/PRD-STD-007-quality-gates), [PRD-STD-004](/production/standards/PRD-STD-004-security-scanning), [PRD-STD-008](/production/standards/PRD-STD-008-dependency-compliance) | [Pillar 4: Operating Model](/pillars/pillar-4-operating-model/), [Pillar 3: Productivity](/pillars/pillar-3-productivity/) |
| Compliance & Risk Officer | [Compliance & Risk Officer Guide](/roles/compliance-officer/) | Control mapping, audit evidence, third-party AI risk | [PRD-STD-005](/production/standards/PRD-STD-005-documentation), [PRD-STD-008](/production/standards/PRD-STD-008-dependency-compliance), [PRD-STD-004](/production/standards/PRD-STD-004-security-scanning) | [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/), [Pillar 5: Organizational Enablement](/pillars/pillar-5-organizational-enablement/) |

## Cross-Role Dependencies

Effective AI-assisted engineering requires collaboration across roles. The following matrix shows where guides intersect and where cross-role conversations are most critical.

| Topic | Roles Involved | Why It Matters |
|-------|---------------|----------------|
| Quality gates for AI code | Developer, QA Lead, Dev Manager | Everyone must agree on what "good enough" means for AI-generated code |
| Sprint velocity recalibration | Scrum Master, Product Manager, Developer | AI changes delivery speed unevenly; all parties need shared expectations |
| Tool selection and provisioning | CTO, Dev Manager, Platform Engineer, Developer | Tool choices cascade through the entire engineering organization |
| Risk governance | Executive, CTO, Dev Manager | Board-level risk reporting depends on ground-level risk identification |
| Multi-agent architecture governance | Solution Architect, CTO, Platform Engineer, Security Engineer, Compliance Officer | Role-specific agents remain within architecture constraints and auditable controls |
| Investment justification | Executive, CTO, Product Manager | ROI models require input from both technical and product perspectives |
| Security posture | Security Engineer, Developer, QA Lead, CTO | The 2.74x vulnerability rate in AI code requires vigilance at every level |
| Audit evidence readiness | Compliance Officer, Dev Manager, Platform Engineer | Controls are only defensible if evidence is complete and retrievable |

## Reading Paths by Maturity Level

If your organization is just beginning its AI-assisted engineering journey, the reading order matters. Use the [Maturity Model](/pillars/maturity/) to assess your current level, then follow the appropriate path.

### Level 1 -- Exploring (Weeks 1-4)
1. Start with the [Executive Guide: Strategic Imperative](/roles/executive/strategic-imperative) for organizational context
2. Read the [Developer Guide: Daily Workflows](/roles/developer/daily-workflows) for hands-on orientation
3. Review the [CTO Guide: Technology Strategy](/roles/cto/technology-strategy) for tool selection
4. Consult the [QA Lead Guide: Testing Strategy](/roles/qa-lead/testing-strategy) for quality baselines

### Level 2 -- Adopting (Months 2-3)
1. Work through the full [Developer Guide](/roles/developer/) end-to-end
2. Implement the [Scrum Master Guide: Sprint Adaptation](/roles/scrum-master/sprint-adaptation) processes
3. Establish the [Development Manager Guide: Metrics That Matter](/roles/development-manager/metrics-that-matter) dashboards
4. Begin [Product Manager Guide: Roadmap Planning](/roles/product-manager/roadmap-planning) adjustments
5. Implement CI controls with the [Platform / DevOps Engineer Guide](/roles/platform-engineer/)

### Level 3 -- Scaling (Months 4-6)
1. Deploy the full [Development Manager Guide](/roles/development-manager/) framework
2. Calibrate using [Scrum Master Guide: Estimation in an AI World](/roles/scrum-master/estimation-ai-world)
3. Optimize with [CTO Guide: Architecture Considerations](/roles/cto/architecture-considerations)
4. Establish role-agent architecture with the [Solution Architect Guide](/roles/solution-architect/)
5. Establish AppSec execution using the [Security Engineer Guide](/roles/security-engineer/)
6. Operationalize governance evidence with the [Compliance & Risk Officer Guide](/roles/compliance-officer/)
7. Report progress using [Executive Guide: Board-Ready Metrics](/roles/executive/board-ready-metrics)

### Level 4-5 -- Optimizing and Leading
1. All role guides should be fully implemented
2. Focus shifts to continuous improvement and industry leadership
3. Use the [Maturity Model](/pillars/maturity/) for ongoing self-assessment

## Keeping Current

The AI-assisted engineering landscape evolves rapidly. Each role guide includes a "What to Watch" section highlighting emerging trends. We recommend:

- **Monthly:** Review your role guide for updated practices
- **Quarterly:** Re-assess your maturity level using the [Maturity Model](/pillars/maturity/)
- **Annually:** Conduct a full cross-role alignment review using the dependency matrix above

:::info
These role guides are designed to complement, not replace, the core [AEEF Standards](/production/standards/) and [Five Pillars](/pillars/). Always refer to the authoritative standards documents when establishing formal policies or governance structures.
:::

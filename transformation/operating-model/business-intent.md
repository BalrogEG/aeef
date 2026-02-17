---
title: "Business Intent Definition"
sidebar_position: 2
description: "Defining business intent and requirements for AI-assisted development."
---

# Business Intent Definition

The Business Intent stage is the first stage of the [Operating Model Lifecycle](/transformation/operating-model/). It captures the business need, defines success criteria, identifies constraints, and establishes the scope for AI-assisted development activities. Clear business intent ensures that AI acceleration serves organizational objectives rather than becoming technology for technology's sake. Every AI-assisted development initiative MUST begin with a documented business intent, regardless of size. The rigor of documentation scales with the initiative's complexity and risk tier.

## Requirements Capture

### What Must Be Captured

Every Business Intent Document MUST include the following elements:

| Element | Description | Example |
|---|---|---|
| **Business need** | The problem being solved or opportunity being pursued, stated in business terms | "Reduce customer checkout abandonment by simplifying the payment flow" |
| **Desired outcome** | The specific, measurable result expected | "Reduce checkout abandonment rate from 68% to 55% within 3 months of launch" |
| **Scope** | What is included and excluded from this initiative | "In scope: payment page redesign, new API endpoints. Out of scope: payment processor migration" |
| **Priority** | Business priority relative to other initiatives | "P1 — revenue-impacting initiative for Q2" |
| **Timeline** | Expected delivery timeline and any fixed deadlines | "Target: 6-week delivery; hard deadline: March 31 for Q1 reporting" |
| **Stakeholders** | People or teams with a stake in the outcome | "Product: Jane Smith; Engineering: API team; Business: VP Commerce" |

### AI-Specific Requirements

In addition to standard requirements, the Business Intent Document MUST include AI-specific elements:

| Element | Description | Purpose |
|---|---|---|
| **Data classification** | Classification of data that will be involved in AI-assisted development | Determines which data MAY be used in AI prompts per [Baseline Security Policies](/transformation/phase-1-foundation/baseline-security-policies/) |
| **Risk tier** | Preliminary risk tier assignment per [Risk Assessment Scaling](/transformation/phase-2-expansion/risk-assessment-scaling/) | Determines governance level applied throughout the lifecycle |
| **AI suitability assessment** | Brief assessment of which aspects are suitable for AI assistance | Identifies tasks for AI-first vs. human-first approach per [AI-First Workflows](/transformation/phase-3-enterprise-scale/ai-first-workflows/) |
| **Regulatory constraints** | Applicable regulations that may constrain AI usage | Ensures compliance requirements are known before AI exploration begins |

### Requirements Quality Criteria

Requirements MUST meet the INVEST criteria:

- **I**ndependent — Can be developed without depending on incomplete parallel work
- **N**egotiable — Open to refinement based on technical exploration findings
- **V**aluable — Delivers clear business value
- **E**stimable — Sufficient detail to estimate effort
- **S**mall — Scoped to be deliverable within the target timeline
- **T**estable — Success criteria are measurable and verifiable

## Success Criteria

Success criteria translate business intent into measurable outcomes. They serve as the benchmark for [Post-Implementation Review](/transformation/operating-model/post-implementation-review/).

### Defining Effective Success Criteria

Every initiative MUST have at least two success criteria from different categories:

| Category | Example Criteria | Measurement Method |
|---|---|---|
| **Business outcome** | "Checkout abandonment rate decreases by 13 percentage points" | Production analytics |
| **Quality** | "Zero Critical or High severity defects within 30 days of launch" | Bug tracker |
| **Performance** | "API response time p95 < 200ms" | APM monitoring |
| **Security** | "Zero security findings from post-deployment scan" | DAST scan results |
| **User experience** | "User satisfaction score >= 4.0/5.0 in post-launch survey" | Survey |
| **Operational** | "No unplanned incidents related to this change within 14 days" | Incident tracker |

### Success Criteria Checklist

- [ ] Each criterion is specific and measurable (not vague or subjective)
- [ ] Each criterion has a defined measurement method and data source
- [ ] Each criterion has a defined measurement timeline (when will it be evaluated?)
- [ ] Criteria cover business outcomes, not just technical outputs
- [ ] Criteria are agreed upon by both business and technical stakeholders
- [ ] Criteria are documented in the Business Intent Document before AI Exploration begins

## Constraint Identification

Constraints define the boundaries within which the initiative must operate. Failing to identify constraints early leads to rework, governance failures, or deployment blocks later in the lifecycle.

### Constraint Categories

| Category | Questions to Ask | Examples |
|---|---|---|
| **Data constraints** | What data is involved? What classification levels? | "Customer payment data (Restricted) — MUST NOT be used in AI prompts" |
| **Regulatory constraints** | What regulations apply? | "PCI-DSS applies to all payment-related code; GDPR applies to EU customer data" |
| **Technical constraints** | What technology decisions are fixed? | "Must integrate with existing Spring Boot backend; must use PostgreSQL" |
| **Resource constraints** | What are the team, time, and budget limits? | "2 developers for 6 weeks; no additional infrastructure budget" |
| **Security constraints** | What security requirements apply? | "Risk Tier 3 — requires Security review at governance gate" |
| **Architectural constraints** | What architectural decisions are non-negotiable? | "Must use event-driven pattern per platform architecture standards" |
| **Dependency constraints** | What external dependencies exist? | "Dependent on Payment Gateway API v3 availability (expected Week 3)" |

### Constraint Documentation

Each constraint MUST be documented with:
- **Description** — What the constraint is
- **Source** — Where the constraint comes from (regulation, architecture decision, business requirement)
- **Impact** — How the constraint affects the initiative's approach
- **Flexibility** — Whether the constraint is absolute or negotiable

## Stakeholder Alignment

Stakeholder alignment ensures that all parties agree on the business intent before AI-assisted development begins. Misalignment discovered at the [Governance Gate](/transformation/operating-model/governance-gate/) or during [Post-Implementation Review](/transformation/operating-model/post-implementation-review/) is far more expensive to resolve than misalignment caught here.

### Alignment Process

1. **Identify stakeholders** — List all individuals or teams with authority over, input into, or impact from the initiative
2. **Classify stakeholder roles** — Assign each stakeholder a RACI role:
   - **R**esponsible — Does the work
   - **A**ccountable — Makes decisions and approves
   - **C**onsulted — Provides input
   - **I**nformed — Kept updated
3. **Conduct alignment review** — Present the Business Intent Document to all Accountable and Consulted stakeholders for review
4. **Resolve disagreements** — Address any conflicts in requirements, priorities, or constraints before proceeding
5. **Obtain sign-off** — All Accountable stakeholders MUST sign off on the Business Intent Document before the initiative proceeds to [AI Exploration](/transformation/operating-model/ai-exploration/)

### RACI Template

| Activity | Product Owner | Tech Lead | Security | Engineering Manager | Business Stakeholder |
|---|---|---|---|---|---|
| Define business need | A | C | I | I | R |
| Define success criteria | A | C | C | I | R |
| Identify constraints | C | R | R | C | C |
| Assign risk tier | I | R | A | I | I |
| Approve Business Intent | A | R | C | C | C |

## Business Intent Document Template

```markdown
# Business Intent Document

## Initiative: [Name]
## Date: [Date]
## Author: [Name]
## Status: [Draft / In Review / Approved]

### 1. Business Need
[Statement of the problem or opportunity]

### 2. Desired Outcome
[Specific, measurable outcome expected]

### 3. Scope
**In scope:** [List]
**Out of scope:** [List]

### 4. Success Criteria
| Criterion | Measurement Method | Target | Timeline |
|---|---|---|---|

### 5. Constraints
| Constraint | Source | Impact | Flexibility |
|---|---|---|---|

### 6. AI-Specific Assessment
- Data classification: [Public/Internal/Confidential/Restricted]
- Risk tier: [Tier 1-4]
- AI-suitable tasks: [List]
- Human-first tasks: [List]
- Regulatory constraints: [List or "None"]

### 7. Stakeholders (RACI)
| Stakeholder | Role | RACI |
|---|---|---|

### 8. Sign-off
| Stakeholder | Signature | Date |
|---|---|---|
```

The Business Intent stage sets the trajectory for everything that follows. A well-defined business intent leads to focused AI exploration, targeted hardening, smooth governance, and meaningful post-implementation review. A poorly defined one leads to scope creep, rework, and outcomes that nobody asked for. Invest the time here — it pays dividends throughout the lifecycle.

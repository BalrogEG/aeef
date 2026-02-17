---
title: "Operating Model Lifecycle"
sidebar_position: 1
description: "The six-stage operating model for AI-assisted development."
---

# Operating Model Lifecycle

The AEEF Operating Model defines a six-stage lifecycle that governs how AI-assisted development flows from business intent through deployment and review. Every AI-assisted development initiative — regardless of size, risk tier, or organizational maturity level — MUST follow this lifecycle. The stages are sequential, each with defined inputs, activities, governance requirements, and outputs. While the rigor and automation applied at each stage scales with the organization's maturity across [Phase 1](/transformation/phase-1-foundation/), [Phase 2](/transformation/phase-2-expansion/), and [Phase 3](/transformation/phase-3-enterprise-scale/), the stages themselves are mandatory.

## Lifecycle Overview Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    AEEF Operating Model Lifecycle                           │
│                                                                             │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐ │
│  │    1.     │   │    2.    │   │    3.    │   │    4.    │   │    5.    │ │
│  │ BUSINESS  │──>│    AI    │──>│  HUMAN   │──>│GOVERNANCE│──>│CONTROLLED│ │
│  │  INTENT   │   │EXPLORATION│  │HARDENING │   │   GATE   │   │DEPLOYMENT│ │
│  │          │   │          │   │          │   │          │   │          │  │
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘ │
│       │                                             │              │        │
│       │                                             │              v        │
│       │                                        ┌────┴─────┐  ┌──────────┐  │
│       │                         REJECT/REWORK  │ APPROVED/ │  │    6.    │  │
│       │                         <──────────────│ REJECTED  │  │  POST-   │  │
│       │                                        └──────────┘  │  IMPL    │  │
│       │                                                       │  REVIEW  │  │
│       │                                                       └─────┬────┘  │
│       │                                                             │       │
│       └──────────────── FEEDBACK LOOP ──────────────────────────────┘       │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Stage Descriptions

### Stage 1: Business Intent Definition

**Purpose**: Capture the business need, define success criteria, and establish the scope for AI-assisted work.

| Aspect | Details |
|---|---|
| **Input** | Business requirement, user story, or technical initiative |
| **Key Activities** | Requirements capture, constraint identification, data classification, risk tier assignment |
| **Output** | Business Intent Document with success criteria, constraints, and risk classification |
| **Gate Criteria** | Clear requirements documented; risk tier assigned; stakeholder sign-off obtained |

See [Business Intent Definition](/transformation/operating-model/business-intent/) for full details.

### Stage 2: AI Exploration & Prototype

**Purpose**: Use AI tools to rapidly explore solutions, generate prototypes, and assess feasibility within a controlled environment.

| Aspect | Details |
|---|---|
| **Input** | Approved Business Intent Document |
| **Key Activities** | Time-boxed experimentation, prompt engineering, rapid prototyping, viability assessment |
| **Output** | Prototype code, feasibility assessment, identified risks and limitations |
| **Gate Criteria** | Time box respected; prototype demonstrates viability; risks documented |

See [AI Exploration & Prototype](/transformation/operating-model/ai-exploration/) for full details.

### Stage 3: Human Hardening

**Purpose**: Transform AI-generated prototypes into production-quality code through expert human review, refactoring, security analysis, and quality assurance.

| Aspect | Details |
|---|---|
| **Input** | AI-generated prototype with feasibility assessment |
| **Key Activities** | Code refactoring, security review, performance optimization, test development, documentation |
| **Output** | Production-hardened code with full test coverage, security clearance, and documentation |
| **Gate Criteria** | Code meets quality standards; security review complete; tests pass; documentation complete |

See [Human Hardening](/transformation/operating-model/human-hardening/) for full details.

### Stage 4: Governance Gate

**Purpose**: Formally verify that the work meets organizational standards, security requirements, and compliance mandates before deployment.

| Aspect | Details |
|---|---|
| **Input** | Hardened code with all Stage 3 outputs |
| **Key Activities** | Compliance verification, security sign-off, architecture review, risk acceptance |
| **Output** | Governance approval (or rejection with feedback) |
| **Gate Criteria** | All mandatory governance checks passed; appropriate approvals obtained; audit trail complete |

See [Governance Gate](/transformation/operating-model/governance-gate/) for full details.

### Stage 5: Controlled Deployment

**Purpose**: Deploy approved changes to production using controlled release strategies that minimize risk and enable rapid rollback.

| Aspect | Details |
|---|---|
| **Input** | Governance-approved code with deployment plan |
| **Key Activities** | Canary release, feature flag management, monitoring activation, health verification |
| **Output** | Code deployed to production with monitoring active |
| **Gate Criteria** | Deployment successful; health checks pass; monitoring confirms expected behavior |

See [Controlled Deployment](/transformation/operating-model/controlled-deployment/) for full details.

### Stage 6: Post-Implementation Review

**Purpose**: Measure outcomes against business intent, capture lessons learned, and feed improvements back into the process.

| Aspect | Details |
|---|---|
| **Input** | Deployed feature with production metrics |
| **Key Activities** | Outcome measurement, lessons-learned capture, process improvement identification, feedback integration |
| **Output** | Post-Implementation Review Report with improvement recommendations |
| **Gate Criteria** | Outcomes measured against success criteria; lessons documented; improvements identified |

See [Post-Implementation Review](/transformation/operating-model/post-implementation-review/) for full details.

## Lifecycle Flow Rules

### Sequential Execution

Stages MUST be executed sequentially. A stage SHALL NOT begin until the prior stage's gate criteria are met, with the following exceptions:

- **Stage 2 to Stage 3 overlap** — Minor overlap is PERMITTED where hardening begins on completed components while exploration continues on others, provided the overall time box is respected.
- **Stage 5 to Stage 6 overlap** — Post-implementation review data collection MAY begin immediately upon deployment.

### Feedback and Iteration

- **Stage 4 rejection** — If the Governance Gate rejects the work, it MUST be returned to Stage 3 (Human Hardening) with specific feedback. Re-entry to Stage 2 (AI Exploration) is permitted if the rejection indicates fundamental design issues.
- **Stage 6 to Stage 1** — Post-Implementation Review findings feed back into future Business Intent definitions, closing the improvement loop.
- **Iteration within stages** — Multiple iterations within a single stage are expected and encouraged. The gate criteria determine when to progress, not a fixed timeline.

### Scaling the Lifecycle

The lifecycle applies at different scales depending on the work item:

| Work Item Size | Lifecycle Application |
|---|---|
| **Small task** (< 1 day) | Lightweight: Stages 1-3 may be informal; Stage 4 via automated pipeline; Stage 6 in sprint retro |
| **Standard feature** (1-5 days) | Standard: All stages applied; documentation proportional to complexity |
| **Large initiative** (> 5 days) | Full: All stages with comprehensive documentation; formal governance gate meeting |
| **Critical system change** | Enhanced: All stages with additional security review and extended monitoring in Stage 5 |

### Traceability

Every lifecycle execution MUST maintain traceability from Stage 1 through Stage 6. At minimum, this requires:

- A unique identifier linking all artifacts across stages
- AI attribution metadata on all AI-assisted code per [Pillar 1](/pillars/pillar-1-engineering-discipline/)
- Governance gate records in the audit trail
- Deployment records linking to the approved governance decision

## Roles and Responsibilities

| Role | Primary Stages | Responsibilities |
|---|---|---|
| Product Owner / Business Stakeholder | 1, 6 | Define business intent; validate outcomes |
| Developer | 2, 3 | AI exploration, code implementation, hardening |
| Tech Lead | 2, 3, 4 | Guide technical approach; review quality; governance participation |
| Security Reviewer | 3, 4 | Security analysis, governance approval |
| Governance Lead | 4 | Governance gate review and decision |
| Release Manager | 5 | Deployment execution and monitoring |
| All participants | 6 | Contribute to lessons learned |

The Operating Model Lifecycle is the operational backbone of the AEEF. It ensures that every piece of AI-assisted work — from a simple utility function to a complex system feature — follows a disciplined path from intent to production. The lifecycle does not slow teams down; it ensures that the speed AI provides does not come at the cost of quality, security, or governance.

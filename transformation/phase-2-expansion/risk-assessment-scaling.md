---
title: "Risk Assessment Scaling"
sidebar_position: 6
description: "Scaling risk assessment as AI adoption expands."
---

# Risk Assessment Scaling

This section covers how to scale risk assessment processes as AI-assisted development expands beyond pilot teams. In [Phase 1](/transformation/phase-1-foundation/), risk assessment was manual and focused on pilot project selection. In Phase 2, the volume of AI-assisted projects requires structured risk categorization, automated scoring, defined escalation procedures, and active risk register management. Without scalable risk processes, governance becomes either a bottleneck that slows adoption or a rubber stamp that fails to protect the organization.

## Risk Categorization

All AI-assisted development projects and activities MUST be categorized into one of four risk tiers. The risk tier determines the level of governance oversight applied.

### Risk Tier Definitions

| Tier | Name | Description | Governance Level |
|---|---|---|---|
| **Tier 1** | Low Risk | Internal tools, non-production code, documentation, test code. Public/Internal data only. | Standard automated governance gates |
| **Tier 2** | Moderate Risk | Production services with limited customer impact. Internal data with some Confidential elements. | Automated gates + Tech Lead review |
| **Tier 3** | Elevated Risk | Customer-facing services, services processing Confidential data, or services under standard regulatory compliance (SOC 2). | Automated gates + Security review + Governance Lead sign-off |
| **Tier 4** | High Risk | Services processing Restricted data (PII/PHI/PCI), services under heavy regulation (HIPAA, PCI-DSS), or critical infrastructure. | Automated gates + Security review + CISO approval + enhanced monitoring |

### Tier Assignment Criteria

Risk tiers are determined by evaluating four risk dimensions:

| Dimension | Tier 1 (1 point) | Tier 2 (2 points) | Tier 3 (3 points) | Tier 4 (4 points) |
|---|---|---|---|---|
| **Data sensitivity** | Public/Internal | Some Confidential | Primarily Confidential | Restricted (PII/PHI/PCI) |
| **Production impact** | No production impact | Limited customer impact | Direct customer impact | Revenue-critical or safety-critical |
| **Regulatory scope** | None | Standard compliance | Regulated industry | HIPAA/PCI-DSS/FedRAMP |
| **Blast radius** | Single service, isolated | Multiple services, limited dependency | Cross-service, significant dependency | Organization-wide or external dependency |

**Tier Calculation**: Sum all dimension scores. Tier 1: 4-6 points. Tier 2: 7-9 points. Tier 3: 10-12 points. Tier 4: 13-16 points. If any single dimension scores 4, the minimum tier is Tier 3 regardless of total score.

## Automated Risk Scoring

As the number of AI-assisted projects grows, manual risk assessment creates bottlenecks. Phase 2 MUST implement automated risk scoring that evaluates projects against defined criteria and assigns risk tiers with minimal manual intervention.

### Automated Scoring Inputs

The automated scoring system SHOULD consume data from the following sources:

| Data Source | Signals Extracted | Update Frequency |
|---|---|---|
| Project management tool | Project classification, team size, deadline pressure | Per sprint |
| Data catalog / classification system | Data types accessed by the project | On change |
| CI/CD pipeline | Security scan results, gate pass/fail history, deployment frequency | Per build |
| VCS | AI-assisted PR ratio, code change velocity, review patterns | Per PR |
| Incident management | Historical incident rate for the service | Daily |
| Compliance registry | Applicable regulations and compliance requirements | On change |

### Scoring Algorithm

The automated scoring system MUST implement the following logic:

1. **Base score calculation** — Sum the four risk dimension scores based on project metadata
2. **Dynamic adjustments** — Modify the base score based on runtime signals:
   - +1 if the team has been using AI tools for less than 30 days
   - +1 if the AI-assisted PR ratio exceeds 70% for the project
   - +1 if the team has had a governance gate failure in the last 30 days
   - -1 if the team has zero governance violations in the last 90 days
   - -1 if all team members have completed advanced training
3. **Tier assignment** — Map the adjusted score to risk tiers using the thresholds above
4. **Override capability** — The Governance Lead or CISO MAY manually override an automated tier assignment with documented justification

### Implementation Approach

The automated scoring system SHOULD be implemented as:

- A scheduled job (daily) that recalculates risk scores for all active AI-assisted projects
- A webhook-triggered assessment when new projects are registered or existing projects change classification
- A dashboard integration that displays current risk tier for each project in the [Expanded Metrics](/transformation/phase-2-expansion/expanded-metrics/) KPI dashboard

## Escalation Procedures

Clear escalation procedures ensure that identified risks are addressed by the appropriate level of authority within defined timeframes.

### Escalation Matrix

| Trigger | Escalation Level | Response Time | Action Required |
|---|---|---|---|
| Automated score crosses tier boundary upward | Governance Lead | 2 business days | Review and confirm/override tier change; adjust governance |
| Security scan finds Critical vulnerability in AI-assisted code | Security Lead + Tech Lead | 4 hours | Stop deployment; investigate; remediate |
| Data leakage incident involving AI tool | CISO | 1 hour | Activate incident response; assess scope; notify stakeholders |
| Repeated governance gate failures (3+ in 30 days) | Governance Lead + Engineering Manager | 2 business days | Root cause analysis; remediation plan; possible team re-training |
| AI tool vendor security incident | CISO + Platform Engineering Lead | 4 hours | Assess impact; consider tool suspension; notify teams |
| Risk register item unmitigated beyond due date | Phase Lead | 5 business days | Re-evaluate risk; escalate to Steering Committee if needed |

### Escalation Process

1. **Detection** — The triggering condition is detected (automated alert or human observation)
2. **Notification** — The appropriate escalation level is notified via the organization's alerting system
3. **Assessment** — The notified party assesses severity, scope, and impact within the response time
4. **Action** — Corrective action is taken and documented
5. **Resolution** — The triggering condition is resolved and verified
6. **Documentation** — The incident, action taken, and resolution are documented in the risk register
7. **Lessons learned** — Significant escalations are reviewed in the next Community of Practice session

## Risk Register Management

The risk register is the single source of truth for all identified risks related to AI-assisted development. It MUST be actively maintained throughout Phase 2 and beyond.

### Risk Register Structure

Each risk register entry MUST contain:

| Field | Description | Required |
|---|---|---|
| Risk ID | Unique identifier | Yes |
| Title | Brief description of the risk | Yes |
| Category | Technical, Security, Compliance, Operational, People | Yes |
| Risk tier | Associated risk tier (Tier 1-4) | Yes |
| Likelihood | Low / Medium / High | Yes |
| Impact | Low / Medium / High / Critical | Yes |
| Risk score | Likelihood x Impact (1-16 scale) | Yes |
| Owner | Person accountable for managing this risk | Yes |
| Mitigation strategy | Description of how the risk is being mitigated | Yes |
| Mitigation status | Not Started / In Progress / Implemented / Verified | Yes |
| Due date | Target date for mitigation completion | Yes |
| Last reviewed | Date of last review | Yes |
| Residual risk | Risk level after mitigation | Yes |

### Common AI-Assisted Development Risks

The following risks SHOULD be pre-populated in the risk register at Phase 2 launch:

| Risk | Category | Typical Tier | Suggested Mitigation |
|---|---|---|---|
| AI tool vendor data breach | Security | Tier 3-4 | Vendor security assessment; contractual requirements; DLP controls |
| AI-generated code introduces vulnerability | Security | Tier 2-3 | SAST scanning; mandatory security review; training |
| Developers bypass governance for speed | Operational | Tier 2 | Pipeline enforcement; audit monitoring; culture building |
| AI model update changes behavior | Technical | Tier 2-3 | Pin model versions; test before updating; configuration management |
| Over-reliance on AI reduces developer skills | People | Tier 1-2 | Balanced usage guidelines; skill development programs; metrics monitoring |
| Licensing issues with AI-generated code | Compliance | Tier 2-3 | License scanning; vendor agreements; legal review |
| AI tool availability impacts productivity | Operational | Tier 1-2 | Fallback procedures; multi-tool strategy; offline capabilities |

### Risk Register Review Cadence

| Review Type | Frequency | Participants | Actions |
|---|---|---|---|
| Risk register update | Weekly | Risk Lead | Update status, add new risks, close resolved risks |
| Risk review meeting | Bi-weekly | Risk Lead + Security Lead + Governance Lead | Discuss high-priority risks, review mitigations |
| Steering Committee risk report | Monthly | Risk Lead presents to Steering Committee | Strategic risk decisions, resource allocation |
| Comprehensive risk reassessment | Quarterly | All stakeholders | Full reassessment of all risks; tier recalibration |

Scalable risk assessment is what allows the organization to expand AI adoption confidently. The structures defined here — automated scoring, clear escalation, and active register management — ensure that increasing adoption does not mean increasing risk. These processes evolve further in [Phase 3](/transformation/phase-3-enterprise-scale/) where they become embedded in the [Organization-Wide Policy](/transformation/phase-3-enterprise-scale/organization-wide-policy/).

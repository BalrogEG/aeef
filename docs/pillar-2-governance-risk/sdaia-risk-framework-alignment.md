---
title: "SDAIA Risk Framework Alignment"
sidebar_position: 12
description: "Alignment between AEEF risk controls and SDAIA's National AI Risk Management Framework, including risk classification mapping and compliance requirements."
---

# SDAIA Risk Framework Alignment

The Saudi Data and Artificial Intelligence Authority (SDAIA) has published a National AI Risk Management Framework that introduces a risk-based classification system for AI systems. This document maps AEEF risk controls to the SDAIA framework, providing organizations with a clear path to compliance for AI-assisted engineering deployed in Saudi Arabia.

## Applicability

Apply this alignment when any of the following are true:

1. AI systems or AI-assisted engineering outputs are deployed within Saudi Arabia.
2. The organization is subject to SDAIA regulatory oversight.
3. Contracts require demonstrated alignment with Saudi AI risk management requirements.

## SDAIA Risk Classification Mapping

SDAIA's framework classifies AI systems into risk levels based on their potential impact. The following table maps SDAIA risk levels to AEEF risk tiers and specifies the corresponding governance requirements.

| SDAIA Risk Level | Criteria | AEEF Risk Tier | AEEF Review Requirements | Governance Gate |
|---|---|---|---|---|
| **Low Risk** | AI systems with minimal potential for harm; limited autonomy; reversible outputs | Tier 1 (Standard) | Peer review + automated scanning | Automated gate with human spot-check |
| **High Risk** | AI systems affecting rights, safety, critical infrastructure, or public services; significant autonomy; difficult-to-reverse outputs | Tier 2 (Elevated) or Tier 3 (High) | Full code review + AI checklist + architecture review + security review | Full manual Governance Gate with multi-stakeholder approval |

:::warning
SDAIA's risk classification applies to the **AI system as a whole**, not individual code changes. When AI-assisted engineering contributes to a system classified as High Risk by SDAIA, all AI-assisted contributions to that system MUST follow Tier 2 or Tier 3 review requirements regardless of the individual change size.
:::

### Risk Classification Decision Criteria

Organizations MUST classify AI systems using the following criteria aligned to the SDAIA framework:

| Factor | Low Risk Indicator | High Risk Indicator |
|---|---|---|
| **Impact on individuals** | No direct effect on rights or welfare | Affects employment, financial standing, access to services, or legal rights |
| **Autonomy level** | Human makes final decision | System makes or materially influences decisions |
| **Reversibility** | Outputs easily reversed or corrected | Outputs difficult or impossible to reverse |
| **Scale** | Limited user base, internal use | Citizen-scale deployment, public services |
| **Sector** | Non-regulated sector | Healthcare, finance, critical infrastructure, government |
| **Data sensitivity** | Public or internal data only | Personal data, confidential data, or restricted data |

## Pre-Deployment Impact Assessment

SDAIA requires pre-deployment impact assessments for AI systems. AEEF maps this requirement across the Operating Model Lifecycle:

| SDAIA Requirement | AEEF Implementation Point | Evidence |
|---|---|---|
| Pre-deployment risk assessment | [Stage 1: Business Intent](/transformation/operating-model/) — risk tier assignment | Business Intent Document with risk classification |
| Impact analysis | [Stage 2: AI Exploration](/transformation/operating-model/) — feasibility assessment with risk documentation | Exploration report with risk section |
| Mitigation planning | [Stage 3: Human Hardening](/transformation/operating-model/) — security review and quality hardening | Hardened code with security clearance |
| Approval before deployment | [Stage 4: Governance Gate](/transformation/operating-model/) — multi-stakeholder approval | Gate approval record with SDAIA risk classification |

## Post-Deployment Monitoring

SDAIA mandates post-deployment monitoring for AI systems. AEEF addresses this through:

| SDAIA Requirement | AEEF Control | Evidence |
|---|---|---|
| Continuous performance monitoring | [PRD-STD-012 Inference Reliability](/production/standards/PRD-STD-012-inference-reliability-cost-controls/) — SLOs and observability | Monitoring dashboards; SLO compliance reports |
| Incident detection and response | [Incident Response](./incident-response.md) — AI-specific incident classification | Incident reports; MTTR metrics |
| Outcome measurement | [Stage 6: Post-Implementation Review](/transformation/operating-model/) — outcome assessment | PIR reports; production metrics |
| Periodic reassessment | [Maturity Assessment](../pillar-5-organizational-enablement/maturity-assessment.md) — quarterly reassessment | Assessment records; trend data |

## Safety Testing Alignment

SDAIA emphasizes safety testing including stress testing, edge-case scenarios, and red-team exercises. The following table maps these to AEEF controls:

| SDAIA Testing Requirement | AEEF Control | Implementation |
|---|---|---|
| Stress testing | [PRD-STD-003 Testing](/production/standards/PRD-STD-003-testing-requirements/) — load and performance testing | Performance test results under extreme conditions |
| Edge-case scenarios | [PRD-STD-003 Testing](/production/standards/PRD-STD-003-testing-requirements/) — boundary value analysis, mutation testing | Edge-case test suites; mutation testing scores |
| Red-team exercises | [PRD-STD-010 AI Product Safety](/production/standards/PRD-STD-010-ai-product-safety-trust/) — abuse evaluation | Red-team reports; abuse scenario documentation |
| Adversarial testing | [Security Risk Framework](./security-risk-framework.md) — threat modeling | Threat model documents; adversarial test results |

## Transparency and Disclosure

SDAIA requires transparency artifacts including model factsheets and user notices. AEEF maps these through:

| SDAIA Requirement | AEEF Control | Artifact |
|---|---|---|
| Model factsheets | [PRD-STD-005 Documentation](/production/standards/PRD-STD-005-documentation/); [Code Provenance](./code-provenance.md) | AI model cards; provenance metadata with model version |
| User notices | [PRD-STD-010 AI Product Safety](/production/standards/PRD-STD-010-ai-product-safety-trust/) — transparency controls | User-facing AI disclosure notices |
| Decision rationale | [PRD-STD-005 Documentation](/production/standards/PRD-STD-005-documentation/) — architecture decision records | ADRs with AI-specific rationale |
| Audit trail | [Retention & Audit Evidence](./retention-audit-policy.md) | Complete provenance chain from generation to deployment |

## Cybersecurity and Model Security

SDAIA requires protection of AI models and training data against tampering and theft:

| SDAIA Requirement | AEEF Control | Evidence |
|---|---|---|
| Model integrity protection | [PRD-STD-004 Security Scanning](/production/standards/PRD-STD-004-security-scanning/) — SAST, SCA, secret detection | Scan results; integrity verification logs |
| Training data governance | [PRD-STD-011 Model & Data Governance](/production/standards/PRD-STD-011-model-data-governance/) — data lineage and rights | Data lineage records; rights verification |
| Access control | [Pillar 2 Data Classification](./index.md) — classification-based access restrictions | Access control configurations; tool approval records |
| Supply chain security | [PRD-STD-008 Dependency Compliance](/production/standards/PRD-STD-008-dependency-compliance/) — dependency scanning | Dependency audit reports; license compliance records |

## Accountability and Documentation

SDAIA requires standardized logs, model cards, and audit trails:

| SDAIA Requirement | AEEF Control | Evidence |
|---|---|---|
| Standardized logs | [Retention & Audit Evidence](./retention-audit-policy.md) — retention policy with defined periods | Log archives; retention compliance reports |
| Model cards | [Code Provenance](./code-provenance.md) — provenance metadata schema | AI provenance records per provenance schema |
| Audit trails | [Pillar 2 Production Gating](./index.md) — five mandatory gates | Gate approval records; deployment logs |
| Human accountability mapping | [PRD-STD-009 Autonomous Agent Governance](/production/standards/PRD-STD-009-autonomous-agent-governance/) — agent-to-human ownership | Agent contracts; human owner registry |

## Implementation Checklist

- [ ] AI systems classified by SDAIA risk level (Low/High) with documented rationale.
- [ ] High-risk systems assigned AEEF Tier 2 or Tier 3 review requirements.
- [ ] Pre-deployment impact assessments completed for all in-scope systems.
- [ ] Post-deployment monitoring active with SLOs defined and dashboarded.
- [ ] Safety testing (stress, edge-case, red-team) completed for high-risk systems.
- [ ] Transparency artifacts (model factsheets, user notices) published for high-risk systems.
- [ ] Model and data security controls verified and evidence retained.
- [ ] Accountability mapping documented with named human owners for all AI systems.
- [ ] Audit trail retention verified per AEEF retention policy.
- [ ] Periodic reassessment schedule established (minimum quarterly for high-risk systems).

## Related Documents

- [Security Risk Framework](./security-risk-framework.md)
- [KSA Regulatory Profile](./ksa-regulatory-profile.md)
- [AI Standards Crosswalk](./ai-standards-crosswalk.md)
- [SDAIA Ethics Traceability](./sdaia-ethics-traceability.md)
- [Incident Response](./incident-response.md)
- [PRD-STD-010 AI Product Safety](/production/standards/PRD-STD-010-ai-product-safety-trust/)

## External Sources

- SDAIA National AI Risk Management Framework: https://sdaia.gov.sa/en/SDAIA/about/Pages/AboutAI.aspx
- SDAIA AI Ethics Principles: https://sdaia.gov.sa/en/SDAIA/about/Documents/ai-principles.pdf
- SDAIA PDPL Knowledge Center: https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/

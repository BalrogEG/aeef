---
title: "SDAIA Ethics Traceability"
sidebar_position: 11
description: "Principle-by-principle traceability matrix mapping SDAIA AI Ethics Principles to AEEF controls, with ethics self-assessment template."
---

# SDAIA Ethics Traceability

The Saudi Data and Artificial Intelligence Authority (SDAIA) publishes AI Ethics Principles that apply to all AI stakeholders designing, developing, deploying, or using AI systems within Saudi Arabia. This document provides a principle-by-principle traceability matrix demonstrating how AEEF controls satisfy each SDAIA ethics principle, and includes an ethics self-assessment template aligned to SDAIA vendor qualification requirements for public-sector tenders.

## Applicability

Apply this traceability when any of the following are true:

1. AI-assisted engineering outputs are deployed within Saudi Arabia.
2. The organization seeks vendor qualification for Saudi government or government-linked tenders.
3. Contracts or policies require demonstrated alignment with SDAIA AI Ethics Principles.

## SDAIA Ethics Principles Traceability Matrix

The following matrix maps each of SDAIA's twelve AI Ethics Principles to specific AEEF controls. The **Coverage** column indicates whether existing AEEF controls fully satisfy the principle (Full), substantially satisfy it with minor operational additions (Substantial), or require supplementary controls (Partial).

| # | SDAIA Principle | Definition | AEEF Control(s) | Evidence | Coverage |
|---|---|---|---|---|---|
| 1 | **Integrity** | AI systems must operate with honesty and adherence to ethical standards throughout their lifecycle | [Code Provenance & Attribution](./code-provenance.md); [Human-in-the-Loop Review](../pillar-1-engineering-discipline/human-in-the-loop.md); [PRD-STD-002 Code Review](/production/standards/PRD-STD-002-code-review/) | Provenance metadata records; PR review logs; reviewer qualification records | Full |
| 2 | **Fairness** | AI systems must avoid bias and discrimination, ensuring equitable treatment | [AI Output Verification](../pillar-1-engineering-discipline/ai-output-verification.md); [Engineering Quality Standards](../pillar-1-engineering-discipline/engineering-quality-standards.md); [PRD-STD-003 Testing](/production/standards/PRD-STD-003-testing-requirements/) | Verification test results; quality gate evidence; bias-aware test cases | Substantial |
| 3 | **Privacy** | AI systems must protect personal data and respect individual privacy rights | [Pillar 2 Data Classification](./index.md); [Prompt Governance](./index.md#2-prompt-governance); [KSA Regulatory Profile](./ksa-regulatory-profile.md) (PDPL controls) | Data classification records; prompt sanitization logs; PDPL compliance evidence | Full |
| 4 | **Security** | AI systems must be protected against threats, vulnerabilities, and unauthorized access | [Security Risk Framework](./security-risk-framework.md); [PRD-STD-004 Security Scanning](/production/standards/PRD-STD-004-security-scanning/); [PRD-STD-008 Dependency Compliance](/production/standards/PRD-STD-008-dependency-compliance/) | SAST/SCA scan results; threat model documents; dependency audit logs | Full |
| 5 | **Reliability** | AI systems must perform consistently and predictably under expected conditions | [PRD-STD-003 Testing](/production/standards/PRD-STD-003-testing-requirements/); [PRD-STD-007 Quality Gates](/production/standards/PRD-STD-007-quality-gates/); [PRD-STD-012 Inference Reliability](/production/standards/PRD-STD-012-inference-reliability-cost-controls/) | Test coverage reports; quality gate pass records; SLO compliance dashboards | Full |
| 6 | **Safety** | AI systems must not cause harm and must include safeguards against unintended consequences | [PRD-STD-010 AI Product Safety & Trust](/production/standards/PRD-STD-010-ai-product-safety-trust/); [Incident Response](./incident-response.md) | Safety gate records; kill-switch readiness evidence; incident response logs | Full |
| 7 | **Transparency** | AI systems must be open about their capabilities, limitations, and decision-making processes | [Code Provenance & Attribution](./code-provenance.md); [Retention & Audit Evidence](./retention-audit-policy.md); [PRD-STD-005 Documentation](/production/standards/PRD-STD-005-documentation/) | Provenance metadata; audit trail records; published documentation | Full |
| 8 | **Interpretability** | AI systems must produce outputs that can be understood and explained by humans | [PRD-STD-005 Documentation](/production/standards/PRD-STD-005-documentation/); [Human-in-the-Loop Review](../pillar-1-engineering-discipline/human-in-the-loop.md); Architecture Decision Records | Documentation artifacts; review decisions with rationale; ADR records | Substantial |
| 9 | **Accountability** | Clear assignment of responsibility for AI system outcomes to identifiable human roles | [Human-in-the-Loop Review](../pillar-1-engineering-discipline/human-in-the-loop.md); [Pillar 2 Governance Roles](./index.md); [PRD-STD-009 Autonomous Agent Governance](/production/standards/PRD-STD-009-autonomous-agent-governance/) | Reviewer assignment records; governance role matrix; agent-to-human ownership mapping | Full |
| 10 | **Responsibility** | Organizations must take ownership of AI system impacts and provide remediation when harm occurs | [Incident Response](./incident-response.md); [Operating Model Lifecycle](/transformation/operating-model/); [PRD-STD-010 AI Product Safety](/production/standards/PRD-STD-010-ai-product-safety-trust/) | Incident reports; PIR documents; corrective action records | Full |
| 11 | **Humanity** | AI systems must serve human well-being and augment rather than replace human judgment | [Culture & Mindset](../pillar-5-organizational-enablement/culture-mindset.md); [Human-in-the-Loop Review](../pillar-1-engineering-discipline/human-in-the-loop.md) (non-negotiable human judgment) | Cultural health surveys; human review gate evidence; developer experience scores | Full |
| 12 | **Social & Environmental Benefit** | AI systems must contribute positively to society and minimize environmental impact | [KPI Framework](../kpi/index.md) (productivity + financial dimensions); [Training & Skill Development](../pillar-5-organizational-enablement/training-skill-development.md) | ROI reports; workforce development metrics; Saudization metrics | Substantial |

:::info
Principles marked **Substantial** require organizations to supplement AEEF controls with operational practices. For **Fairness**, add bias-aware test cases to AI output verification. For **Interpretability**, ensure architecture decision records include AI-specific rationale. For **Social & Environmental Benefit**, track workforce impact and environmental metrics alongside standard KPIs.
:::

## Ethics Self-Assessment Template

The following self-assessment is aligned to SDAIA vendor qualification requirements for public-sector tenders. Organizations SHOULD complete this assessment annually and before submitting responses to Saudi government procurement.

### Assessment Instructions

1. For each principle, rate your organization's compliance on a 1-5 scale.
2. Provide evidence references for each rating.
3. A score of 3 or above on all principles is the minimum for vendor qualification.
4. Submit the completed assessment as part of your governance evidence package.

### Self-Assessment Checklist

| # | SDAIA Principle | Assessment Question | Score (1-5) | Evidence Reference |
|---|---|---|---|---|
| 1 | Integrity | Do all AI-assisted engineering outputs have full provenance tracking and mandatory human review? | ___ | |
| 2 | Fairness | Are AI outputs systematically tested for bias, discrimination, and equitable behavior? | ___ | |
| 3 | Privacy | Is personal data prohibited from AI prompts unless the tool is approved for the data classification level, with PDPL compliance verified? | ___ | |
| 4 | Security | Are all AI-generated outputs scanned with SAST, SCA, and secret detection before deployment? | ___ | |
| 5 | Reliability | Do AI-assisted systems meet defined SLOs with automated quality gates enforced in CI/CD? | ___ | |
| 6 | Safety | Are safety gates, abuse evaluations, and kill-switch mechanisms in place for AI-powered products? | ___ | |
| 7 | Transparency | Is a complete audit trail maintained from AI generation through deployment, accessible for regulator review? | ___ | |
| 8 | Interpretability | Are AI-assisted architectural and design decisions documented with human-readable rationale? | ___ | |
| 9 | Accountability | Is every AI-assisted output attributable to a named human reviewer who approved it for production? | ___ | |
| 10 | Responsibility | Are incident response procedures in place that specifically address AI-generated defects, with defined remediation SLAs? | ___ | |
| 11 | Humanity | Does the organization maintain human judgment as non-negotiable in all AI-assisted workflows, with cultural health tracked? | ___ | |
| 12 | Social & Environmental Benefit | Does the organization track workforce development, Saudization, and positive societal impact from AI adoption? | ___ | |

**Scoring Guide:**

| Score | Meaning |
|---|---|
| 1 | No controls in place |
| 2 | Informal or ad-hoc controls |
| 3 | Documented controls with evidence (minimum acceptable) |
| 4 | Automated controls with dashboarded metrics |
| 5 | Continuously optimized controls with demonstrated improvement trends |

**Minimum Qualification Threshold:** Score of 3 or above on all twelve principles. Any principle scoring below 3 MUST have a documented remediation plan with target date.

## Integration with AEEF Governance Gates

Ethics compliance checks integrate into the AEEF Operating Model Lifecycle at two stages:

### Stage 2: AI Exploration

- Ethics impact screening SHOULD be performed during AI exploration to identify principles at risk early.
- For high-impact systems (citizen-facing, decision-making), a preliminary ethics assessment MUST be documented.

### Stage 4: Governance Gate

- The Governance Gate MUST include an ethics compliance check as a mandatory gate criterion for Saudi-deployed systems.
- The gate reviewer MUST verify that the ethics self-assessment for the relevant system is current (within 12 months) and all principles score 3 or above.
- Systems scoring below 3 on any principle MUST NOT pass the Governance Gate without a documented waiver from the Engineering Director and a remediation plan approved by the Compliance Officer.

### Stage 6: Post-Implementation Review

- The PIR MUST include an ethics outcome review assessing whether the deployed system maintains compliance with all twelve principles in production.
- Any ethics-related incidents MUST be logged and traced to the relevant principle for trend analysis.

## Related Documents

- [KSA Regulatory Profile](./ksa-regulatory-profile.md)
- [Government (Middle East) Profile](./government-middle-east-profile.md)
- [Compliance & Regulatory Alignment](./compliance-regulatory.md)
- [AI Standards Crosswalk](./ai-standards-crosswalk.md)
- [SDAIA AI Risk Management Framework Alignment](./sdaia-risk-framework-alignment.md)
- [Security Risk Framework](./security-risk-framework.md)
- [Human-in-the-Loop Review](../pillar-1-engineering-discipline/human-in-the-loop.md)

## External Sources

- SDAIA AI Ethics Principles: https://sdaia.gov.sa/en/SDAIA/about/Documents/ai-principles.pdf
- SDAIA AI Adoption Framework: https://sdaia.gov.sa/en/SDAIA/about/Files/AIAdoptionFramework.pdf
- SDAIA PDPL Knowledge Center: https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/

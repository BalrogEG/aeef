---
title: "SAMA CSF Integration"
sidebar_position: 13
description: "Deep mapping between AEEF controls and the Saudi Central Bank (SAMA) Cyber Security Framework for financial-sector AI engineering."
---

# SAMA Cybersecurity Framework Integration

The Saudi Central Bank (SAMA) Cyber Security Framework (CSF) is mandatory for all financial institutions regulated by SAMA. This document provides a comprehensive mapping between AEEF controls and SAMA CSF domains, enabling financial-sector organizations in Saudi Arabia to implement AI-assisted engineering within their existing cybersecurity compliance programs.

## Applicability

Apply this integration when any of the following are true:

1. The organization is regulated by SAMA (banks, insurance companies, finance companies, payment service providers).
2. AI-assisted engineering outputs are deployed in systems that process financial transactions, customer data, or regulatory reporting.
3. Contracts with SAMA-regulated entities require demonstrated cybersecurity framework compliance for AI development practices.

## SAMA CSF Domain Mapping

### Domain 1: Cyber Security Leadership and Governance

| SAMA CSF Control | Control Description | AEEF Control | Evidence |
|---|---|---|---|
| **1.1** Cyber Security Policy | Establish and maintain cyber security policies | [Pillar 2 Overview](./index.md) — AI governance policy framework; [IP Policy](./intellectual-property.md) | AI governance policy document; acceptable use policy |
| **1.2** Cyber Security Roles and Responsibilities | Define roles for cyber security management | [Pillar 2 Governance Roles](./index.md) — Engineering Director, CISO, Architecture Board, Compliance Officer | Governance role matrix; RACI charts |
| **1.3** Cyber Security Strategy | Align cyber security with business strategy | [Maturity Model](../maturity/index.md) — strategic progression; [KPI Framework](../kpi/index.md) — ROI measurement | Maturity assessment records; KPI dashboards |
| **1.4** Cyber Security Risk Management | Establish risk management processes | [Security Risk Framework](./security-risk-framework.md) — threat modeling, risk assessment | Risk registers; threat model documents |

### Domain 2: Cyber Security Risk Management and Compliance

| SAMA CSF Control | Control Description | AEEF Control | Evidence |
|---|---|---|---|
| **2.1** Risk Assessment | Conduct regular risk assessments | [Security Risk Framework](./security-risk-framework.md); [SDAIA Risk Framework Alignment](./sdaia-risk-framework-alignment.md) | Risk assessment reports; SDAIA risk classification |
| **2.2** Regulatory Compliance | Ensure compliance with regulations | [Compliance & Regulatory](./compliance-regulatory.md); [KSA Regulatory Profile](./ksa-regulatory-profile.md) | Compliance mapping matrices; audit evidence |
| **2.3** Audit | Conduct internal and external audits | [Retention & Audit Evidence](./retention-audit-policy.md) — retention policy and evidence model | Audit reports; evidence archives |
| **2.4** Third-Party Risk | Manage risks from third-party providers | [Pillar 2 Overview](./index.md) — AI tool approval process; [PRD-STD-008 Dependency Compliance](/production/standards/PRD-STD-008-dependency-compliance/) | Tool approval records; vendor risk assessments; dependency audit logs |

### Domain 3: Cyber Security Operations and Technology

| SAMA CSF Control | Control Description | AEEF Control | Evidence |
|---|---|---|---|
| **3.1** Asset Management | Maintain inventory of information assets | [Pillar 2 Overview](./index.md) — AI tool inventory; [Code Provenance](./code-provenance.md) | Tool inventory; provenance metadata store |
| **3.2** Access Control | Implement access control measures | [Pillar 2 Data Classification](./index.md) — classification-based access; [PRD-STD-009 Agent Governance](/production/standards/PRD-STD-009-autonomous-agent-governance/) — least privilege agents | Access control configurations; agent permission records |
| **3.3** Application Security | Secure application development | Complete AEEF Pillar 1 and Pillar 2 — [Engineering Discipline](../pillar-1-engineering-discipline/index.md); [PRD-STD-002](/production/standards/PRD-STD-002-code-review/); [PRD-STD-004](/production/standards/PRD-STD-004-security-scanning/) | PR review records; SAST/SCA scan results; quality gate evidence |
| **3.4** Change Management | Control changes to information systems | [Human-in-the-Loop Review](../pillar-1-engineering-discipline/human-in-the-loop.md); [PRD-STD-007 Quality Gates](/production/standards/PRD-STD-007-quality-gates/) | Change approval records; gate pass evidence |
| **3.5** Encryption | Protect data through encryption | [Pillar 2 Data Classification](./index.md) — encryption requirements by classification level | Encryption configuration records; certificate management |
| **3.6** Vulnerability Management | Identify and remediate vulnerabilities | [PRD-STD-004 Security Scanning](/production/standards/PRD-STD-004-security-scanning/); [Security Risk Framework](./security-risk-framework.md) — remediation SLAs | Vulnerability scan results; remediation tracking |
| **3.7** Logging and Monitoring | Monitor systems and maintain logs | [Retention & Audit Evidence](./retention-audit-policy.md); [PRD-STD-012 Inference Reliability](/production/standards/PRD-STD-012-inference-reliability-cost-controls/) — observability | Log retention evidence; monitoring dashboard configurations |

### Domain 4: Third-Party Cyber Security

| SAMA CSF Control | Control Description | AEEF Control | Evidence |
|---|---|---|---|
| **4.1** Vendor Risk Assessment | Assess third-party cyber security posture | [Pillar 2 Overview](./index.md) — AI tool security assessment and approval | Tool security assessment reports; vendor questionnaire responses |
| **4.2** Contractual Requirements | Include security requirements in contracts | [Intellectual Property](./intellectual-property.md) — vendor agreements; [KSA Regulatory Profile](./ksa-regulatory-profile.md) — data residency clauses | Contract security annexes; DPA agreements |
| **4.3** Ongoing Monitoring | Monitor third-party compliance | [KSA Regulatory Profile](./ksa-regulatory-profile.md) — annual revalidation (KSA-03) | Annual revalidation records; vendor compliance reports |

### Domain 5: Cyber Security Resilience

| SAMA CSF Control | Control Description | AEEF Control | Evidence |
|---|---|---|---|
| **5.1** Incident Management | Detect, respond to, and recover from incidents | [Incident Response](./incident-response.md) — AI-specific incident classification and response | Incident reports; MTTR metrics; root cause analyses |
| **5.2** Business Continuity | Maintain operations during disruptions | [Government (Middle East) Profile](./government-middle-east-profile.md) — GOV-ME-06 continuity fallback; [PRD-STD-012](/production/standards/PRD-STD-012-inference-reliability-cost-controls/) — fallback behavior | BCP/DR plans; continuity test results; fallback configuration |
| **5.3** Disaster Recovery | Recover systems after catastrophic events | [Pillar 1 Version Isolation](../pillar-1-engineering-discipline/index.md) — independent rollback capability | Rollback test results; recovery time evidence |

## SAMA-Specific Developer Requirements

Financial-sector AI engineering in Saudi Arabia requires additional developer controls beyond standard AEEF requirements:

:::danger MANDATORY for SAMA-Regulated Entities
The following requirements are mandatory for all AI-assisted engineering within SAMA-regulated organizations. Violations may result in regulatory findings.
:::

1. **Customer Data Prohibition**: Developers MUST NOT include customer financial data, account numbers, transaction records, or any customer PII in AI prompts under any circumstances. Use synthetic data only.

2. **Transaction-Processing Code**: AI-generated code that processes financial transactions MUST be classified as Tier 3 (High Risk) and MUST receive security champion review regardless of change size.

3. **Regulatory Reporting Code**: AI-generated code that produces or contributes to regulatory reports (SAMA, CMA, or other regulator submissions) MUST be classified as Tier 3 and MUST include enhanced testing with verified expected outputs.

4. **Model Risk for AI Products**: Financial AI products (credit scoring, fraud detection, AML) MUST comply with SAMA model risk management expectations in addition to [PRD-STD-010](/production/standards/PRD-STD-010-ai-product-safety-trust/) and [PRD-STD-011](/production/standards/PRD-STD-011-model-data-governance/).

5. **Audit Trail Retention**: Provenance metadata and audit trails for AI-assisted code in financial systems MUST be retained for a minimum of 7 years, aligned with SAMA record-keeping requirements.

6. **Segregation of Duties**: AI tools used for development MUST NOT have access to production financial data. Development, testing, and production environments MUST maintain strict segregation.

7. **Outsourcing Notification**: Use of cloud-based AI tools for financial system development MAY constitute outsourcing under SAMA rules. Organizations MUST assess whether AI tool usage triggers SAMA outsourcing notification requirements.

## SAMA Audit Preparation Checklist

- [ ] AI tool inventory includes SAMA compliance status and data classification approval.
- [ ] All AI tools assessed for SAMA third-party risk requirements (Domain 4).
- [ ] Customer data prohibition enforced through prompt governance and technical controls.
- [ ] Transaction-processing and regulatory-reporting code classified at Tier 3.
- [ ] SAST/SCA/secret detection scanning active on all AI-generated code in financial systems.
- [ ] Provenance metadata retention verified at 7-year minimum for financial system code.
- [ ] Incident response procedures include SAMA notification requirements.
- [ ] Change management records (PRs, reviews, approvals) accessible for SAMA audit sampling.
- [ ] Business continuity and disaster recovery plans include AI tool dependency analysis.
- [ ] Annual AI tool revalidation completed per KSA-03.
- [ ] Segregation of duties between AI development tools and production data verified.
- [ ] SAMA outsourcing assessment completed for cloud-based AI tool usage.

## Related Documents

- [Compliance & Regulatory Alignment](./compliance-regulatory.md)
- [KSA Regulatory Profile](./ksa-regulatory-profile.md)
- [Security Risk Framework](./security-risk-framework.md)
- [Incident Response](./incident-response.md)
- [SDAIA Risk Framework Alignment](./sdaia-risk-framework-alignment.md)
- [Retention & Audit Evidence Policy](./retention-audit-policy.md)

## External Sources

- SAMA Cyber Security Framework: https://rulebook.sama.gov.sa/en/cyber-security-framework-2
- SAMA Outsourcing Regulations: https://rulebook.sama.gov.sa/en/outsourcing
- SAMA PDPL Knowledge Center: https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/

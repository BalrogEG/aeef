---
title: "Compliance & Regulatory Alignment"
sidebar_position: 5
description: "Aligning AI-assisted development with regulatory requirements and industry standards."
---

# Compliance & Regulatory Alignment

This section maps AI-assisted development practices to regulatory requirements and industry compliance frameworks, including SOC 2 Type II, ISO 27001, GDPR, and HIPAA. AI-assisted development does not exempt organizations from compliance obligations; rather, it introduces new dimensions that existing compliance programs MUST address. The AEEF framework is designed to satisfy these obligations when fully implemented.

For expanded framework comparisons and regional overlays, use:

- [AI Standards Crosswalk](./ai-standards-crosswalk.md)
- [ISO 42001 Certification Readiness](./iso-42001-certification-readiness.md)
- [KSA Regulatory Profile](./ksa-regulatory-profile.md)
- [Government (Middle East) Profile](./government-middle-east-profile.md)

## Compliance Philosophy

:::info
Compliance is achieved through process, not prohibition. The goal is not to restrict AI tool usage but to ensure that AI-assisted development operates within a governance framework that satisfies regulatory requirements. Every AEEF standard maps to one or more compliance obligations.
:::

Organizations MUST maintain documentation demonstrating that their AI-assisted development practices comply with all applicable regulatory frameworks. This documentation MUST be available for auditor review and SHOULD be updated whenever AEEF processes change. Retention periods for audit evidence MUST align with the [Retention & Audit Evidence Policy](./retention-audit-policy.md).

## SOC 2 Type II Alignment

SOC 2 Type II evaluates the design and operating effectiveness of controls across five Trust Service Criteria. AI-assisted development affects multiple criteria.

### SOC 2 Compliance Mapping

| SOC 2 Trust Service Criteria | AEEF Control | Evidence |
|---|---|---|
| **CC6.1 -- Logical Access Controls** | Data sensitivity classification restricts AI tool access by data type. AI tools approved by security team per classification level. | Tool approval records; data classification policy; access control logs |
| **CC6.8 -- Controls Against Malicious Software** | SAST, SCA, and secret detection scanning on all AI-generated code ([AI Output Verification](../pillar-1-engineering-discipline/ai-output-verification.md)) | Scan results in CI/CD pipeline; scanning tool configurations |
| **CC7.1 -- Detection of Unauthorized Changes** | Code provenance tracking, commit attribution, and audit trails ([Code Provenance](./code-provenance.md)) | Provenance metadata records; git audit trails; deployment logs |
| **CC7.2 -- Monitoring of System Components** | Enhanced production monitoring for AI-generated code during initial 30-day window ([Security Risk Framework](./security-risk-framework.md)) | Monitoring configurations; alert records |
| **CC8.1 -- Change Management** | Human-in-the-loop review with qualified reviewers; production gating; approval workflows ([Human-in-the-Loop](../pillar-1-engineering-discipline/human-in-the-loop.md)) | Pull request records; review decisions; approval timestamps |
| **CC9.1 -- Risk Mitigation** | Threat modeling for AI outputs; risk assessment matrix; remediation SLAs ([Security Risk Framework](./security-risk-framework.md)) | Threat model documents; risk registers; SLA compliance reports |
| **A1.2 -- Recovery of Systems** | Version isolation enables independent rollback of AI-generated code ([Pillar 1 Overview](../pillar-1-engineering-discipline/index.md)) | Version control history; rollback test results |

### SOC 2 Audit Preparation Checklist

- [ ] AI tool inventory with approval status and data classification level documented
- [ ] Code provenance metadata retention verified per [Retention & Audit Evidence Policy](./retention-audit-policy.md)
- [ ] Change management records (PRs, reviews, approvals) accessible for sampling
- [ ] Security scanning results archived and retrievable for audit period
- [ ] Incident response records for AI-related incidents available
- [ ] Developer training records for AI-assisted development maintained
- [ ] Data classification policy includes AI tool usage restrictions

## ISO 27001 Alignment

ISO 27001 requires an Information Security Management System (ISMS) with controls defined in Annex A. AI-assisted development intersects with multiple control domains.

### ISO 27001 Control Mapping

| ISO 27001 Control | AEEF Implementation | Reference |
|---|---|---|
| **A.5.1 -- Policies for Information Security** | AI-Assisted Development IP Policy; AI Tool Acceptable Use Policy; Prompt Governance Policy | [Intellectual Property](./intellectual-property.md); [Pillar 2 Overview](./index.md) |
| **A.6.3 -- Information Security Awareness** | Annual AI security training for developers; reviewer qualification training; security champion training | [Human-in-the-Loop](../pillar-1-engineering-discipline/human-in-the-loop.md); [Security Risk Framework](./security-risk-framework.md) |
| **A.7.7 -- Clear Desk and Clear Screen** | Prompt sanitization requirements; prohibition on including credentials in AI prompts | [Intellectual Property](./intellectual-property.md); [Pillar 2 Overview](./index.md) |
| **A.8.3 -- Information Access Restriction** | Data classification-based AI tool usage restrictions | [Pillar 2 Overview](./index.md) |
| **A.8.9 -- Configuration Management** | Quality standards for AI-generated configurations; IaC scanning requirements | [Engineering Quality Standards](../pillar-1-engineering-discipline/engineering-quality-standards.md); [Security Risk Framework](./security-risk-framework.md) |
| **A.8.25 -- Secure Development Lifecycle** | Complete AEEF framework: prompt rigor, human review, verification, quality gates, security scanning | All Pillar 1 and Pillar 2 documents |
| **A.8.26 -- Application Security Requirements** | Threat modeling for AI outputs; OWASP alignment; security review integration | [Security Risk Framework](./security-risk-framework.md) |
| **A.8.28 -- Secure Coding** | Engineering quality standards; complexity thresholds; architectural conformance; prompt constraints for security | [Engineering Quality Standards](../pillar-1-engineering-discipline/engineering-quality-standards.md); [Prompt Engineering Rigor](../pillar-1-engineering-discipline/prompt-engineering-rigor.md) |

## GDPR Alignment

The General Data Protection Regulation (GDPR) is relevant to AI-assisted development when personal data is processed in the development workflow or when AI-generated code handles personal data.

### GDPR Compliance Requirements

| GDPR Principle | AI Development Risk | AEEF Control |
|---|---|---|
| **Lawfulness, Fairness, Transparency (Art. 5(1)(a))** | Personal data may be included in AI prompts without legal basis | Data classification policy prohibits PII in AI tool context unless tool is approved for Confidential data; prompt sanitization requirements |
| **Purpose Limitation (Art. 5(1)(b))** | Personal data used for AI-assisted development may exceed the original purpose of collection | Data classification restricts AI tool usage by data type; production data MUST NOT be used in AI prompts without anonymization |
| **Data Minimization (Art. 5(1)(c))** | Developers may include excessive personal data in AI context | Prompt engineering standards require curated context; minimum necessary data principle enforced through review |
| **Storage Limitation (Art. 5(1)(e))** | AI tool providers may retain prompt data containing personal data | Zero-retention tool preference; contractual data deletion obligations with AI tool vendors |
| **Integrity and Confidentiality (Art. 5(1)(f))** | AI tools may not provide adequate data protection | AI tool security assessment required; encryption in transit mandated; on-premises deployment for Restricted data |
| **Data Protection by Design (Art. 25)** | AI-generated code may not implement privacy by design | Prompt constraints MUST include privacy requirements; review checklist includes data handling verification |

:::warning
Using production personal data as context in cloud-based AI tools without appropriate legal basis, data protection impact assessment, and contractual safeguards is a potential GDPR violation. Organizations MUST ensure that AI tool usage complies with their Data Protection Impact Assessment (DPIA) findings.
:::

### GDPR-Specific Developer Requirements

- Developers MUST NOT include real personal data in AI prompts; use synthetic or anonymized data
- When AI-generated code will process personal data, the prompt MUST include privacy requirements as explicit constraints
- AI-generated data access code MUST implement data minimization (SELECT only required fields, not SELECT *)
- AI-generated code handling personal data MUST be classified as Tier 2 or Tier 3 risk for review purposes

## HIPAA Alignment

The Health Insurance Portability and Accountability Act (HIPAA) applies when AI-assisted development involves Protected Health Information (PHI).

### HIPAA Compliance Requirements

| HIPAA Requirement | AEEF Control | Evidence |
|---|---|---|
| **Security Rule -- Access Controls (164.312(a))** | AI tools processing PHI-related code MUST be deployed in HIPAA-compliant environments with appropriate access controls | Tool deployment documentation; access control configurations |
| **Security Rule -- Audit Controls (164.312(b))** | Complete audit trail of AI-generated code affecting PHI systems via provenance tracking | Provenance metadata; audit logs |
| **Security Rule -- Integrity Controls (164.312(c))** | Code integrity verified through multi-layer testing and human review | Test results; review records; scan reports |
| **Security Rule -- Transmission Security (164.312(e))** | AI tool communications encrypted in transit; PHI MUST NOT be transmitted to non-compliant AI tools | Network configurations; tool compliance certifications |
| **Privacy Rule -- Minimum Necessary (164.502(b))** | Prompts involving PHI-adjacent systems MUST use minimum necessary information | Prompt governance policy; sanitization verification |
| **Breach Notification Rule (164.400-414)** | Incident response procedures account for AI-specific breach scenarios | [Incident Response](./incident-response.md) |

### HIPAA-Specific Controls

- AI tools MUST NOT process actual PHI under any circumstances unless deployed in a BAA-covered, HIPAA-compliant environment
- Code that handles PHI MUST be classified as Tier 3 (High Risk) and MUST receive security champion review
- AI-generated code in PHI-processing systems MUST undergo DAST testing before production deployment
- Business Associate Agreements (BAAs) MUST be in place with any AI tool vendor whose tools process code related to PHI systems

## ISO 42001 and AI Management System Readiness

Organizations pursuing formal AI management system certification SHOULD implement the readiness approach in [ISO 42001 Certification Readiness](./iso-42001-certification-readiness.md). AEEF provides strong control coverage, but certification readiness requires explicit evidence packaging, internal audit cadence, and management review artifacts.

## KSA and Government Regional Adaptation

For operations in Saudi Arabia or public-sector programs in the Middle East:

1. Apply [KSA Regulatory Profile](./ksa-regulatory-profile.md) for PDPL, NCA, and DGA control alignment.
2. Apply [Government (Middle East) Profile](./government-middle-east-profile.md) where public-sector obligations require stricter sovereign, procurement, and transparency controls.
3. Treat regional overlays as additive requirements on top of core AEEF controls.

## Cross-Framework Compliance Summary

The following table provides a consolidated view of AEEF controls that satisfy requirements across multiple frameworks:

| AEEF Control | SOC 2 | ISO 27001 | GDPR | HIPAA |
|---|---|---|---|---|
| Data Classification for AI Tools | CC6.1 | A.8.3 | Art. 5(1)(f) | 164.312(a) |
| Code Provenance & Attribution | CC7.1 | A.8.25 | -- | 164.312(b) |
| Human-in-the-Loop Review | CC8.1 | A.8.25 | Art. 25 | 164.312(c) |
| Security Scanning (SAST/SCA) | CC6.8 | A.8.26 | Art. 5(1)(f) | 164.312(c) |
| Prompt Sanitization | CC6.1 | A.7.7 | Art. 5(1)(c) | 164.502(b) |
| Incident Response | CC7.2 | A.8.25 | Art. 33/34 | 164.400-414 |
| Developer Training | CC9.1 | A.6.3 | Art. 39 | 164.308(a)(5) |
| Audit Trail Retention | CC7.1 | A.8.25 | Art. 5(1)(e) | 164.312(b) |

## Compliance Audit Preparation

### General Audit Readiness

Organizations MUST maintain the following documentation in audit-ready condition at all times:

1. **AI Tool Inventory**: Complete list of approved AI tools with security assessments, data classification approvals, and vendor agreements
2. **Policy Library**: AI-Assisted Development IP Policy, Acceptable Use Policy, Prompt Governance Policy, Data Classification Policy
3. **Training Records**: Developer and reviewer training completion records with dates and content covered
4. **Process Evidence**: Sample of PR records, review decisions, scan results, and provenance metadata demonstrating process execution
5. **Incident Records**: All AI-related incident reports, root cause analyses, and corrective actions (see [Incident Response](./incident-response.md))
6. **Metrics Reports**: Monthly compliance metrics, SLA compliance, and trend analyses

:::tip
Automate evidence collection wherever possible. CI/CD pipeline artifacts, provenance metadata stores, and training management systems provide the bulk of audit evidence when properly configured.
:::

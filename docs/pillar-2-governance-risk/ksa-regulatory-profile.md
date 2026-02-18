---
title: "KSA Regulatory Profile"
sidebar_position: 9
description: "Saudi Arabia profile overlay for AEEF: PDPL, NCA controls, DGA controls, and sector-specific security obligations."
---

# KSA Regulatory Profile

This profile adapts AEEF to Saudi Arabia requirements for privacy, cybersecurity, and government digital controls. It is designed as an overlay on top of core AEEF controls, not a replacement.

## Applicability

Apply this profile when any of the following are true:

1. Data subjects, systems, or operations are in Saudi Arabia.
2. Delivery is for Saudi government or government-linked entities.
3. Contracts require Saudi cybersecurity or data residency compliance.

## KSA Baseline Sources

### Privacy and Data Protection

- Saudi Data and Artificial Intelligence Authority (SDAIA) Personal Data Protection Law (PDPL) knowledge center and regulations.

### Cybersecurity Controls

- National Cybersecurity Authority (NCA) Essential Cybersecurity Controls (ECC), version 2-2024.
- NCA Cloud Cybersecurity Controls (CCC), version 2-2024.
- NCA Digital Cybersecurity Controls (DCC-1:2022).
- NCA Cybersecurity Controls for Sensitive Systems (CSCC-1:2019).

### Government Digital Controls

- Digital Government Authority (DGA) IT Governance Controls for Digital Government, version 2.0 (published October 17, 2024).

### Sector Overlay (as applicable)

- Saudi Central Bank (SAMA) Cyber Security Framework (for financial-sector implementations).

## KSA Overlay Control Set

| KSA Control ID | Control Requirement | AEEF Integration Point |
|---|---|---|
| KSA-01 | Classify all AI prompt/context data by Saudi data sensitivity and legal constraints before use in AI tools | [Pillar 2 Overview](./index.md), [Prompt Governance](./index.md#2-prompt-governance) |
| KSA-02 | Enforce data residency and cross-border transfer checks for AI tooling and telemetry. AI tools MUST be hosted in Saudi-approved cloud regions or sovereign in-Kingdom data centers. See [Data Sovereignty and Localization](#data-sovereignty-and-localization) for detailed requirements. | [Compliance & Regulatory Alignment](./compliance-regulatory.md) |
| KSA-03 | Maintain KSA-approved AI tool list with legal/security sign-off and annual revalidation | [Pillar 2 Overview](./index.md), [Retention & Audit Evidence Policy](./retention-audit-policy.md) |
| KSA-04 | Map AI-assisted SDLC controls to NCA ECC/CCC/DCC/CSCC obligations and retain audit evidence | [Code Provenance & Attribution](./code-provenance.md) |
| KSA-05 | Add DGA control mapping for government projects and track compliance exceptions | [Incident Response](./incident-response.md), [Compliance & Regulatory Alignment](./compliance-regulatory.md) |
| KSA-06 | Require Arabic as the primary language for governance policies, training materials, audit documentation, and runbooks for all Saudi-deployed AI engineering programs. English versions MAY be maintained as secondary. See [Arabic Language Requirements](#arabic-language-requirements). | [PRD-STD-005 Documentation](/production/standards/PRD-STD-005-documentation/) |
| KSA-07 | Apply sector overlay controls (for example SAMA CSF) where contract or regulator requires. For detailed SAMA mapping, see [SAMA CSF Integration](./sama-csf-integration.md). | [Security Risk Framework](./security-risk-framework.md), [SAMA CSF Integration](./sama-csf-integration.md) |
| KSA-08 | All AI engineering governance artifacts (policies, standards, training materials, audit evidence summaries, and operational runbooks) MUST be available in Arabic for Saudi-deployed programs. English-only artifacts are not acceptable for regulatory submission or internal governance compliance. | [PRD-STD-005 Documentation](/production/standards/PRD-STD-005-documentation/), [Training & Skill Development](../pillar-5-organizational-enablement/training-skill-development.md) |
| KSA-09 | AI tool prompt data, telemetry, and model fine-tuning data MUST NOT leave Saudi Arabia without an approved cross-border transfer assessment per PDPL requirements. Organizations MUST maintain a data-flow inventory documenting where AI-related data is processed and stored. | [Compliance & Regulatory Alignment](./compliance-regulatory.md), [Retention & Audit Evidence Policy](./retention-audit-policy.md) |
| KSA-10 | AI systems that make or materially influence decisions affecting Saudi data subjects MUST comply with PDPL Article 22 automated decision-making requirements, including the right to human review of automated decisions. | [Human-in-the-Loop Review](../pillar-1-engineering-discipline/human-in-the-loop.md), [SDAIA Risk Framework Alignment](./sdaia-risk-framework-alignment.md) |

## PDPL + GDPR Dual-Jurisdiction Guidance

For organizations serving both EU and KSA jurisdictions:

1. Treat GDPR and PDPL requirements as cumulative when both may apply.
2. Use the stricter obligation where obligations differ.
3. Maintain a jurisdictional data-flow inventory and legal basis registry.
4. Include transfer and localization controls in tool onboarding reviews.

## PSSI Integration

Some organizations use **PSSI** terminology (Information Systems Security Policy) for internal policy architecture. In this profile, PSSI is handled as an internal control wrapper:

1. PSSI MUST incorporate this KSA profile as a mandatory annex for Saudi operations.
2. PSSI control identifiers SHOULD trace to AEEF and KSA control IDs.
3. PSSI exceptions MUST follow the same waiver and audit rules defined in AEEF governance.

## SDAIA Maturity Model Crosswalk

SDAIA's AI Adoption Framework defines four maturity levels. The following crosswalk maps these to the AEEF five-level maturity model to enable organizations to track progress against both frameworks without maintaining separate assessment programs.

| SDAIA Level | SDAIA Description | AEEF Level(s) | Rationale |
|---|---|---|---|
| **Emerging** | Initial AI awareness; ad-hoc adoption; no formal governance | [Level 1: Uncontrolled](../maturity/level-1-uncontrolled.md) + [Level 2: Exploratory](../maturity/level-2-exploratory.md) | SDAIA Emerging spans from no governance through initial structured experimentation. AEEF separates these into two levels for more granular assessment. |
| **Developed** | Formal standards established; governance framework operational; training in place | [Level 3: Defined](../maturity/level-3-defined.md) | Both frameworks align at this level: documented standards, approved toolchains, mandatory training, and governance gates. This is the minimum for regulated enterprises. |
| **Proficient** | Automated governance; KPI-driven management; mature practices | [Level 4: Managed](../maturity/level-4-managed.md) | Both frameworks expect integrated governance, dashboarded metrics, risk-tiered reviews, and demonstrated quantitative improvement at this level. |
| **Advanced** | AI-native workflows; predictive analytics; industry leadership | [Level 5: AI-First](../maturity/level-5-ai-first.md) | Both frameworks describe AI-first workflow design, continuous optimization, and competitive advantage at the highest level. |

:::tip Dual-Framework Reporting
Organizations tracking both SDAIA and AEEF maturity SHOULD report using the SDAIA four-level model for national reporting and regulatory communication, while using the AEEF five-level model internally for more granular assessment and improvement planning. When reporting to SDAIA, map the AEEF assessment to the corresponding SDAIA level using the table above. Organizations at AEEF Level 1 or Level 2 both map to SDAIA Emerging but should note their AEEF sub-level to track progression.
:::

## Arabic Language Requirements

KSA-06 and KSA-08 establish Arabic as the primary language for AI engineering governance in Saudi Arabia. This section provides implementation guidance.

### Scope

The Arabic language requirement applies to the following artifact categories for all Saudi-deployed AI engineering programs:

| Artifact Category | Arabic Required | English Secondary | Notes |
|---|---|---|---|
| Governance policies | MUST | MAY | Includes AI governance policy, acceptable use, data classification |
| Training materials | MUST | MAY | All Tier 1-4 training curricula and assessments |
| Audit documentation and evidence summaries | MUST | MAY | Evidence narratives and compliance reports |
| Operational runbooks | MUST | MAY | Incident response, deployment procedures |
| Technical standards (PRD-STD series) | SHOULD | MUST | English primary is acceptable for highly technical standards; Arabic summaries SHOULD be provided |
| Code comments and commit messages | NOT REQUIRED | MUST | English remains the standard for source code artifacts |
| Prompt templates | SHOULD | MUST | Arabic versions recommended for prompts used by Arabic-speaking teams |

### Bilingual Documentation Workflow

1. Author governance artifacts in Arabic as the primary version.
2. Create English translations for international stakeholders where needed.
3. When discrepancies exist between Arabic and English versions, the Arabic version takes precedence for Saudi regulatory purposes.
4. Maintain version alignment between language variants using the same version numbering.
5. Include language metadata in document headers (e.g., `lang: ar-SA` or `lang: en`).

## Data Sovereignty and Localization

KSA-02 and KSA-09 require detailed data residency controls for AI-assisted engineering. This section specifies implementation requirements.

### Approved Hosting Patterns

AI tools and their associated data MUST be hosted using one of the following patterns, listed in order of preference:

| Priority | Hosting Pattern | Description | Use Case |
|---|---|---|---|
| 1 | **Sovereign Saudi cloud** | Dedicated in-Kingdom infrastructure operated by Saudi-licensed providers (e.g., STC Cloud, Saudi Cloud Computing Company) | Restricted and Confidential data; government projects |
| 2 | **In-Kingdom cloud region** | Hyperscaler regions physically located in Saudi Arabia (e.g., Oracle Jeddah, Alibaba Cloud Riyadh) | Confidential and Internal data; standard enterprise use |
| 3 | **Regional cloud with transfer controls** | Middle East regions with approved cross-border transfer assessments (e.g., AWS me-south-1 Bahrain, Azure Qatar) | Internal data only; requires documented PDPL transfer assessment |
| 4 | **International cloud** | Regions outside the Middle East | NOT PERMITTED for Saudi-regulated data without explicit SDAIA cross-border transfer approval |

:::danger
Pattern 4 (international cloud) is NOT PERMITTED for data classified as Confidential or Restricted under AEEF data sensitivity classification. Organizations MUST obtain explicit SDAIA cross-border transfer approval before processing any Saudi-regulated data outside the Middle East region.
:::

### AI Tool Data Residency Requirements

| Data Type | Residency Requirement | Verification Method |
|---|---|---|
| Prompt content (user inputs to AI tools) | MUST remain within approved hosting pattern | AI tool vendor DPA; network traffic analysis |
| AI tool telemetry and usage analytics | MUST remain within approved hosting pattern | Vendor data processing documentation; audit log |
| Model fine-tuning data | MUST remain in Saudi Arabia (Pattern 1 or 2 only) | Training infrastructure documentation; data flow inventory |
| Generated code output | No additional residency requirement beyond standard source control | Standard source control hosting verification |
| Provenance metadata and audit trails | MUST remain within approved hosting pattern | Provenance store hosting configuration |

### Cross-Border Transfer Assessment

When data must cross borders (e.g., for AI tool functionality), organizations MUST:

1. Conduct a PDPL cross-border transfer impact assessment.
2. Document the legal basis for the transfer.
3. Verify the receiving jurisdiction provides adequate data protection.
4. Implement appropriate safeguards (contractual clauses, encryption, access controls).
5. Maintain a data-flow inventory mapping all AI-related data movements.
6. Review transfer assessments annually or when tool configurations change.

## PDPL Article 22: Automated Decision-Making

KSA-10 addresses PDPL Article 22 requirements for AI systems that make or influence decisions affecting Saudi data subjects.

### When Article 22 Applies

PDPL Article 22 applies when AI systems:

1. Make decisions **solely** based on automated processing of personal data, OR
2. **Materially influence** decisions that produce legal effects or similarly significant effects on data subjects.

### AEEF Compliance Requirements

| Requirement | AEEF Implementation | Evidence |
|---|---|---|
| Right to human review | [Human-in-the-Loop Review](../pillar-1-engineering-discipline/human-in-the-loop.md) — mandatory human approval for all production decisions | Review logs; approval records |
| Transparency about automated processing | [PRD-STD-005 Documentation](/production/standards/PRD-STD-005-documentation/) — document AI involvement in decision systems | System documentation; user notices |
| Data subject notification | Operational requirement — inform data subjects when AI influences decisions | Notification templates; consent records |
| Right to contest | Operational requirement — provide mechanism for data subjects to challenge automated decisions | Complaint handling procedures; escalation records |

:::info
AEEF's foundational principle that human judgment is non-negotiable provides strong alignment with PDPL Article 22. Organizations fully implementing AEEF's Human-in-the-Loop controls inherently satisfy the requirement for human review of automated decisions. However, organizations MUST also implement the notification and contestation mechanisms, which are operational requirements beyond AEEF's engineering scope.
:::

## KSA Audit Readiness Checklist

- [ ] KSA legal scope register is current.
- [ ] AI tool inventory includes KSA approval status and hosting location.
- [ ] Cross-border transfer assessment exists for all in-scope toolchains.
- [ ] NCA control mapping matrix is documented and evidence-backed.
- [ ] Government projects include DGA mapping and exception tracking.
- [ ] Sector overlay controls (for example SAMA) are explicitly assessed.
- [ ] SDAIA AI Ethics self-assessment completed within the last 12 months (see [SDAIA Ethics Traceability](./sdaia-ethics-traceability.md)).
- [ ] AI systems classified by SDAIA risk level with documented rationale (see [SDAIA Risk Framework Alignment](./sdaia-risk-framework-alignment.md)).
- [ ] Arabic versions of all governance artifacts are current and version-aligned with English variants.
- [ ] Data sovereignty compliance verified: all AI tool data within approved hosting patterns.
- [ ] PDPL Article 22 assessment completed for AI systems influencing decisions about data subjects.
- [ ] NAII-aligned metrics reporting established (see [NAII Metrics Mapping](./naii-metrics-mapping.md)).
- [ ] SAMA CSF compliance verified for financial-sector implementations (see [SAMA CSF Integration](./sama-csf-integration.md)).

## Related Documents

- [SDAIA Ethics Traceability](./sdaia-ethics-traceability.md)
- [SDAIA Risk Framework Alignment](./sdaia-risk-framework-alignment.md)
- [SAMA CSF Integration](./sama-csf-integration.md)
- [NAII Metrics Mapping](./naii-metrics-mapping.md)
- [Government (Middle East) Profile](./government-middle-east-profile.md)
- [Compliance & Regulatory Alignment](./compliance-regulatory.md)
- [AI Standards Crosswalk](./ai-standards-crosswalk.md)

## External Sources

- SDAIA PDPL knowledge center: https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/
- SDAIA AI Ethics Principles: https://sdaia.gov.sa/en/SDAIA/about/Documents/ai-principles.pdf
- SDAIA AI Adoption Framework: https://sdaia.gov.sa/en/SDAIA/about/Files/AIAdoptionFramework.pdf
- SDAIA National AI Risk Management Framework: https://sdaia.gov.sa/en/SDAIA/about/Pages/AboutAI.aspx
- SDAIA National AI Index (NAII): https://sdaia.gov.sa/en/SDAIA/about/Files/NAII.pdf
- NCA ECC: https://nca.gov.sa/en/regulatory-documents/controls-list/ecc/
- NCA CCC: https://nca.gov.sa/en/regulatory-documents/controls-list/ccc/
- NCA DCC: https://nca.gov.sa/en/regulatory-documents/controls-list/317/
- NCA CSCC: https://nca.gov.sa/en/pages/cscc.html
- DGA IT Governance Controls v2.0: https://dga.gov.sa/en/regulatory-documents/IT-governance-controls-in-digital-government
- SAMA Cyber Security Framework: https://rulebook.sama.gov.sa/en/cyber-security-framework-2


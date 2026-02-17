---
title: "Pillar 2: AI Governance & Risk Control"
sidebar_position: 1
description: "Embeds compliance and risk management into AI-assisted development workflows."
---

# Pillar 2: AI Governance & Risk Control

Pillar 2 ensures that governance, compliance, and risk management are embedded directly into AI-assisted development workflows rather than applied as an afterthought. While [Pillar 1](../pillar-1-engineering-discipline/index.md) addresses engineering discipline and code quality, Pillar 2 addresses the organizational, legal, regulatory, and security dimensions of AI-assisted software engineering.

The rapid adoption of AI development tools -- with 92% of US developers using them daily -- has outpaced the governance structures needed to manage the associated risks. AI co-authored code carries a 2.74x higher vulnerability rate, introduces novel intellectual property questions, and creates audit trail challenges that existing governance frameworks were not designed to address. Pillar 2 closes these gaps. Source confidence and revalidation guidance for benchmark claims are maintained in [Research Evidence & Assumption Register](../about/research-evidence.md).

## Scope and Applicability

These governance standards apply to:

- All AI-generated or AI-assisted code, configurations, and infrastructure definitions
- All AI tools used in the software development lifecycle, including but not limited to code completion tools, chat-based code generation, and autonomous coding agents
- All environments from development through production
- All personnel who use AI tools in engineering activities
- All third-party contractors and vendors developing software for the organization using AI tools

:::warning
Governance standards in this pillar are not advisory. They carry the same authority as the organization's information security and compliance policies. Non-compliance SHALL be escalated to the CISO and engineering leadership for remediation.
:::

## Core Governance Domains

### 1. Data Sensitivity Classification

AI tools process code and context that may include sensitive data. Organizations MUST classify the sensitivity of data that interacts with AI tools and enforce controls accordingly.

**Classification levels:**

| Level | Description | AI Tool Usage Restrictions |
|---|---|---|
| **Public** | Information intended for public disclosure | No restrictions on AI tool usage |
| **Internal** | Internal business information not intended for public disclosure | AI tools with data retention may be used; organization-approved tools only |
| **Confidential** | Sensitive business information, customer data, financial data | Only AI tools with zero data retention and SOC 2 Type II compliance; data MUST NOT leave organizational boundaries |
| **Restricted** | Regulated data (PII, PHI, PCI), trade secrets, cryptographic material | AI tools MUST NOT process this data unless deployed on-premises or in the organization's private cloud with full data isolation |

- Developers MUST verify the data classification level before including any code, configuration, or data as context in an AI prompt
- Code containing Confidential or Restricted data MUST NOT be submitted to cloud-based AI tools unless the tool has been approved by the security team for that classification level
- AI tool approval decisions MUST be documented and reviewed annually

### 2. Prompt Governance

Prompts are organizational assets that may contain proprietary context, business logic descriptions, and architectural details.

- Prompts used in AI-assisted development MUST comply with the data sensitivity classification rules above
- Prompts MUST NOT include production credentials, API keys, personal data, or other secrets
- Organizations SHOULD maintain a prompt governance policy that defines acceptable prompt content by data classification level
- Prompt audit logs SHOULD be maintained for compliance-sensitive projects

See [Prompt Engineering Rigor](../pillar-1-engineering-discipline/prompt-engineering-rigor.md) for detailed prompt construction and management standards.

### 3. Production Gating

AI-generated code MUST pass through defined gates before reaching production. Production gating ensures that no AI output bypasses the organization's quality, security, and compliance controls.

**Required production gates:**

1. **Quality Gate**: All engineering quality standards met (see [Engineering Quality Standards](../pillar-1-engineering-discipline/engineering-quality-standards.md))
2. **Security Gate**: SAST, dependency scanning, and manual security review (for high-risk changes) completed
3. **Compliance Gate**: Code provenance documented, IP review completed where required, regulatory alignment verified
4. **Human Approval Gate**: Qualified reviewer approval obtained (see [Human-in-the-Loop](../pillar-1-engineering-discipline/human-in-the-loop.md))
5. **Audit Gate**: All required metadata and attribution captured

No gate MAY be bypassed. Emergency bypass procedures require engineering director approval and MUST be logged and reviewed within 48 hours.

### 4. Security Review Integration

Security review is integrated throughout the AI-assisted development lifecycle, not applied as a final gate.

- Pre-generation: Prompts are reviewed for data leakage risk
- During generation: AI tool configurations enforce security-relevant constraints
- Post-generation: SAST, vulnerability scanning, and manual security review are applied
- Pre-deployment: Penetration testing for high-risk changes; security sign-off required

Detailed security requirements and threat modeling for AI outputs are defined in the [Security Risk Framework](./security-risk-framework.md).

### 5. Audit Traceability

Every AI-generated artifact MUST be traceable from its origin through review, approval, and deployment. Audit traceability supports regulatory compliance, incident investigation, and organizational learning.

**Audit trail requirements:**

- The AI tool and model version used for generation MUST be recorded
- The prompt or prompt template reference MUST be recorded
- Human modifications to AI output MUST be captured in version control
- Review decisions (approved, rejected, escalated) MUST be recorded with timestamps and reviewer identity
- Deployment events for AI-generated code MUST be logged
- Retention periods for audit evidence MUST follow the [Retention & Audit Evidence Policy](./retention-audit-policy.md)

Full attribution and metadata standards are defined in [Code Provenance & Attribution](./code-provenance.md).

## Sub-Pages in This Pillar

This pillar is organized into six detailed standards documents:

| Document | Focus Area |
|---|---|
| [Code Provenance & Attribution](./code-provenance.md) | Attribution standards, generation metadata, audit trails, commit annotations |
| [Retention & Audit Evidence Policy](./retention-audit-policy.md) | Normative retention durations, storage integrity, legal hold requirements |
| [Intellectual Property Management](./intellectual-property.md) | Licensing implications, copyright, proprietary code protection, open-source considerations |
| [Security Risk Framework](./security-risk-framework.md) | Threat modeling for AI outputs, OWASP considerations, vulnerability scanning, remediation SLAs |
| [Compliance & Regulatory Alignment](./compliance-regulatory.md) | SOC 2, ISO 27001, GDPR, HIPAA mapping for AI-assisted development |
| [Incident Response for AI-Generated Defects](./incident-response.md) | Incident classification, root cause analysis, corrective actions, post-mortem templates |

## Governance Roles and Responsibilities

| Role | Responsibilities |
|---|---|
| **Engineering Director** | Overall accountability for AEEF compliance; approves emergency gate bypasses; sponsors governance reviews |
| **CISO / Security Lead** | Approves AI tools for each data classification level; defines security requirements; participates in high-risk reviews |
| **Architecture Board** | Validates architectural conformance; approves new patterns introduced by AI; reviews complexity waivers |
| **Compliance Officer** | Maintains regulatory mapping; conducts compliance audits; advises on data classification |
| **Team Lead / Engineering Manager** | Ensures team compliance with AEEF standards; monitors metrics; manages reviewer qualifications |
| **Individual Developer** | Follows prompt governance, data classification, and attribution standards; participates in reviews |

## Governance Review Cadence

| Review Activity | Frequency | Owner |
|---|---|---|
| AI tool approval and re-certification | Annually or upon major tool update | CISO |
| Data classification review | Annually | Compliance Officer |
| Governance standards review | Quarterly | Engineering Director + Architecture Board |
| Compliance audit | Semi-annually | Compliance Officer |
| Incident trend analysis | Monthly | Engineering Director |
| Prompt governance policy review | Semi-annually | Architecture Board |

## Integration with Pillar 1

Pillar 1 and Pillar 2 are complementary. Pillar 1 ensures the code is well-engineered; Pillar 2 ensures it is well-governed. Together, they form the complete AEEF assurance model:

- **Quality + Governance**: Code passes engineering quality gates AND compliance gates
- **Review + Attribution**: Human reviewers verify code AND provenance metadata is captured
- **Testing + Security**: Automated tests verify behavior AND security scans verify safety
- **Standards + Audit**: Quality standards are met AND audit trails demonstrate compliance

Neither pillar alone is sufficient. Organizations MUST implement both pillars in their entirety to achieve the risk profile appropriate for enterprise AI-assisted development.

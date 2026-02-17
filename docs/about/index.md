---
title: "About AEEF"
sidebar_position: 1
description: "About the AI-Accelerated Enterprise Engineering Framework."
---

# About AEEF

The AI-Accelerated Enterprise Engineering Framework (AEEF) formalizes AI-assisted engineering into a structured, measurable, governance-embedded transformation model. It is designed to transform AI usage from isolated productivity hacks into a scalable, enterprise-grade capability — one that delivers quantifiable business value while systematically managing the risks inherent in AI-generated code.

## The Problem AEEF Solves

The enterprise software engineering landscape is undergoing a fundamental transformation. As of 2026, **92% of US developers use AI coding tools daily**. This adoption has occurred largely from the bottom up — individual developers discovering and adopting tools on their own initiative, without organizational guidance, governance, or measurement.

The result is a paradox. AI tools demonstrably accelerate individual coding tasks, yet research shows that AI co-authored code carries **1.7x more issues** and a **2.74x higher vulnerability rate** compared to human-only code. Organizations that adopt AI tools without governance are simultaneously speeding up and degrading their engineering output. Source quality and confidence levels for these benchmark claims are tracked in the [Research Evidence & Assumption Register](./research-evidence.md).

This paradox creates four critical enterprise challenges:

1. **Ungoverned risk.** AI tools are used without policies for data handling, code ownership, or security review. Proprietary code is shared with third-party AI services. Vulnerabilities accumulate undetected.

2. **Unmeasured value.** Leadership cannot determine whether AI tools are delivering genuine productivity gains or merely creating an illusion of speed while generating downstream rework and technical debt.

3. **Inconsistent practice.** Without standards, AI-assisted development quality varies dramatically across teams and individuals. Some developers use AI tools masterfully; others engage in "vibe coding" — accepting AI suggestions without critical review.

4. **Regulatory exposure.** Emerging regulations (EU AI Act, US executive orders, industry-specific mandates) increasingly require organizations to demonstrate governance over AI systems. Organizations without frameworks cannot satisfy these requirements.

AEEF addresses all four challenges through an integrated approach combining governance standards, a maturity model, and a measurement framework.

## Origin and Development

The AEEF was developed in response to the observed gap between the rapid adoption of AI coding tools and the absence of enterprise-grade governance frameworks to manage that adoption. Existing frameworks — CMMI, ITIL, DORA, OWASP SAMM — address adjacent concerns but none specifically addresses the unique challenges of AI-assisted software engineering.

The framework draws on:

- **Industry research** on AI-generated code quality, security, and productivity outcomes
- **Enterprise governance best practices** adapted from established frameworks (CMMI, ISO 27001, OWASP SAMM)
- **Practical implementation experience** from organizations at various stages of AI adoption maturity
- **Regulatory analysis** of emerging AI governance requirements across jurisdictions

The initial release (v1.0, February 2026) establishes the foundational framework. It is designed to evolve as the AI tooling landscape matures, new research becomes available, and implementation experience across diverse organizations generates refinements. See the [Version History](./version-history.md) for release details and the [Research Evidence & Assumption Register](./research-evidence.md) for current source mappings.

## Framework Components

The AEEF consists of three interconnected components:

### 1. Maturity Model

The [AEEF Maturity Model](../maturity/index.md) defines a five-level progression from uncontrolled AI usage to an AI-first organization:

| Level | Name | Summary |
|---|---|---|
| 1 | [Uncontrolled](../maturity/level-1-uncontrolled.md) | No governance; ad hoc AI tool usage with unmanaged risk |
| 2 | [Exploratory](../maturity/level-2-exploratory.md) | Structured experimentation with basic guidelines and pilot teams |
| 3 | [Defined](../maturity/level-3-defined.md) | Formal standards, standardized toolchain, mandatory training |
| 4 | [Managed](../maturity/level-4-managed.md) | Automated governance, KPI-driven management, developer certification |
| 5 | [AI-First](../maturity/level-5-ai-first.md) | AI-native workflows, predictive analytics, industry leadership |

Each level includes assessment checklists, key performance thresholds, and a detailed transition roadmap to the next level.

### 2. KPI Framework

The [KPI Framework](../kpi/index.md) provides measurable outcomes across three dimensions:

- **[Productivity](../kpi/productivity-metrics.md)** — idea-to-prototype time, feature throughput, code review cycle time, developer experience
- **[Risk](../kpi/risk-metrics.md)** — AI-related incidents, security findings, rework rates, technical debt
- **[Financial](../kpi/financial-metrics.md)** — cost per feature, headcount avoidance, outsourcing reduction, ROI

The three dimensions are designed to be measured concurrently. Productivity without risk measurement is dangerous; productivity and risk without financial measurement is unjustifiable.

### 3. Governance Standards

The governance component defines the policies, processes, and controls that organizations MUST implement at each maturity level. This includes:

- Data classification and acceptable use policies for AI tools
- Code provenance tracking requirements
- Human review and [human hardening](./glossary.md) mandates
- Security scanning requirements specific to AI-generated code
- Training and certification standards
- Incident response procedures for AI-related events

## Positioning: Relationship to Existing Frameworks

AEEF is not designed to replace existing engineering and governance frameworks. It is designed to **extend and complement** them by addressing the specific challenges that AI-assisted development introduces.

### Relationship to SDLC Frameworks

AEEF is **methodology-agnostic**. It overlays on any SDLC methodology — Agile, Waterfall, SAFe, or hybrid — without requiring changes to the underlying delivery approach. AEEF governance gates integrate into existing SDLC stage gates, sprint ceremonies, or continuous delivery pipelines as appropriate.

### Relationship to Agile Practices

AEEF supports Agile values and principles. The framework's emphasis on measurement, iteration, and continuous improvement aligns with Agile philosophy. Specific integrations include:

- **Sprint planning** — AI-assisted effort estimation and capacity planning
- **Code review** — AI-specific review criteria added to existing PR processes
- **Retrospectives** — AI tool effectiveness as a regular retrospective topic
- **Definition of Done** — AI-specific quality criteria incorporated into DoD

### Relationship to IT Governance (ITIL, COBIT)

For organizations with established IT governance frameworks, AEEF standards map to existing control categories:

| AEEF Requirement | ITIL Mapping | COBIT Mapping |
|---|---|---|
| AI tool change management | Change Management | BAI06 - Manage Changes |
| AI incident response | Incident Management | DSS02 - Manage Service Requests and Incidents |
| AI risk assessment | Risk Management | APO12 - Manage Risk |
| AI tool procurement | Supplier Management | APO10 - Manage Suppliers |
| AI skill development | Workforce Management | APO07 - Manage Human Resources |

### Relationship to Security Frameworks

AEEF extends security frameworks to address AI-specific threat vectors:

- **OWASP SAMM** — AEEF adds AI-specific dimensions to software assurance maturity assessment
- **ISO 27001** — AEEF governance requirements support Annex A controls for AI tool usage, data handling, and supplier management
- **NIST CSF** — AEEF risk metrics map to NIST CSF Identify, Protect, Detect, Respond, and Recover functions
- **SOC 2** — AEEF governance documentation supports SOC 2 Trust Services Criteria for AI-related controls

### Relationship to AI-Specific Frameworks

AEEF complements emerging AI governance frameworks:

- **EU AI Act** — AEEF provides the implementation framework for organizations that must demonstrate AI governance compliance
- **NIST AI RMF** — AEEF risk metrics and governance processes align with NIST AI Risk Management Framework categories
- **ISO 42001** — AEEF maturity levels provide a roadmap toward ISO 42001 AI Management System certification

## Intended Audience

The AEEF is designed for multiple stakeholders within an enterprise:

| Stakeholder | Primary Interest | Key Sections |
|---|---|---|
| **CTO / VP Engineering** | Strategic AI adoption, competitive advantage | Maturity Model, Financial Metrics |
| **Engineering Managers** | Team productivity, quality management | Maturity Assessment, Productivity Metrics |
| **Software Engineers** | Practical guidance, skill development | Governance Standards, Glossary |
| **Security Leadership (CISO)** | Risk management, vulnerability control | Risk Metrics, Security Requirements |
| **Legal / Compliance** | Regulatory compliance, IP protection | Governance Standards, Data Classification |
| **CFO / Finance** | Investment justification, ROI measurement | Financial Metrics, ROI Model |
| **HR / Talent** | Skill development, hiring criteria | Training Standards, Certification |

## Guiding Principles

The AEEF is built on the following principles:

1. **Governance enables, not constrains.** Well-designed governance accelerates AI adoption by providing clarity, consistency, and confidence. Governance SHOULD reduce friction, not add bureaucracy.

2. **Measurement over opinion.** Every claim about AI's impact — positive or negative — MUST be supported by data. Anecdotes are hypotheses; KPIs are evidence.

3. **Human judgment is irreplaceable.** AI tools generate code; humans judge its fitness for purpose. [Human hardening](./glossary.md) — the critical review and improvement of AI-generated output — is a non-negotiable requirement at every maturity level.

4. **Sequential maturity is required.** Organizations MUST NOT skip maturity levels. Each level builds capabilities that subsequent levels depend upon.

5. **Standards evolve.** The AI landscape changes rapidly. These standards are designed to be updated regularly. See [Contributing](./contributing.md) for how to participate in this evolution.

## Getting Started

Organizations new to AEEF SHOULD begin with the following steps:

1. Review the [Maturity Model Overview](../maturity/index.md) to understand the five-level framework
2. Complete the [Level 1 Assessment Checklist](../maturity/level-1-uncontrolled.md) to establish baseline maturity
3. Review the [KPI Framework](../kpi/index.md) to understand measurement requirements
4. Review the [Research Evidence & Assumption Register](./research-evidence.md) before setting KPI thresholds
5. Consult the [Glossary](./glossary.md) for definitions of terms used throughout the framework

## Contact and Governance

The AEEF is maintained by the AEEF Standards Committee. For questions, feedback, or contribution proposals, see the [Contributing](./contributing.md) page.

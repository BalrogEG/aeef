---
title: "AEEF Maturity Model"
sidebar_position: 1
description: "Five-level maturity model for AI-assisted enterprise engineering."
---

# AEEF Maturity Model

The AEEF Maturity Model provides a structured, repeatable framework for assessing and advancing an organization's capability in AI-assisted software engineering. With 92% of US developers now using AI coding tools daily, the question is no longer whether to adopt AI — it is whether your organization governs that adoption responsibly and extracts maximum strategic value from it.

Research consistently shows that AI co-authored code carries 1.7x more issues and a 2.74x higher vulnerability rate compared to human-only code. The maturity model directly addresses this paradox: how to capture AI's productivity gains while systematically mitigating its risks. See [Research Evidence & Assumption Register](../about/research-evidence.md) for source confidence and revalidation requirements.

## Purpose and Scope

This maturity model SHALL be used by engineering leadership, governance teams, and transformation offices to:

- **Assess** the current state of AI-assisted development practices across the organization
- **Plan** a structured progression toward higher maturity levels
- **Benchmark** against industry peers and internal targets
- **Communicate** expectations to engineering teams, security stakeholders, and executive leadership

The model applies to all software engineering activities where AI tools are used, including code generation, code review, testing, documentation, architecture, and operational support. It is designed to complement — not replace — existing frameworks such as CMMI, ITIL, and Agile maturity assessments. See the [About AEEF](../about/index.md) section for positioning details.

## The Five Levels at a Glance

The maturity model defines five distinct levels, each representing a qualitative leap in governance, process integration, and measurable outcomes.

| Dimension | [Level 1: Uncontrolled](./level-1-uncontrolled.md) | [Level 2: Exploratory](./level-2-exploratory.md) | [Level 3: Defined](./level-3-defined.md) | [Level 4: Managed](./level-4-managed.md) | [Level 5: AI-First](./level-5-ai-first.md) |
|---|---|---|---|---|---|
| **Governance** | None | Informal guidelines | Documented standards | Enforced & measured | Continuously optimized |
| **Tool Adoption** | Ad hoc, shadow IT | Piloted by teams | Standardized toolchain | Integrated into CI/CD | AI-native workflows |
| **Training** | None | Self-directed | Formal curriculum | Role-based certification | Continuous upskilling |
| **Security** | No AI-specific scanning | Basic awareness | Automated scanning | Integrated threat modeling | Predictive risk management |
| **Metrics** | None | Anecdotal | Defined KPIs | Dashboarded & actioned | Predictive analytics |
| **Code Review** | No AI-specific process | Ad hoc review | Mandatory human review | Risk-tiered review gates | AI-augmented review |
| **IP / Legal** | Unaddressed | Initial assessment | Policy documented | Contractual safeguards | Proactive IP strategy |
| **Culture** | Individual experimentation | Team curiosity | Organizational buy-in | Engineering standard | Innovation engine |

## How to Use This Model

### Step 1: Assess Current State

Organizations SHOULD conduct an honest assessment using the checklist provided at each maturity level. A cross-functional assessment team — including engineering, security, legal, and management representatives — is RECOMMENDED.

:::tip Assessment Best Practice
Start by distributing the Level 1 assessment checklist to all engineering teams. If more than 30% of items are checked, your organization is operating at Level 1 regardless of stated intentions.
:::

### Step 2: Set Target State

Not every organization needs to reach Level 5. The appropriate target depends on:

- **Industry regulatory requirements** — Regulated industries (finance, healthcare, defense) SHOULD target Level 4 minimum
- **Organization size** — Organizations with fewer than 50 engineers MAY find Level 3 sufficient
- **Competitive pressure** — Technology-first companies SHOULD target Level 5
- **Risk appetite** — Organizations with low risk tolerance MUST achieve at least Level 3

### Step 3: Execute Transition Roadmap

Each level includes a detailed transition roadmap to the next level. These roadmaps specify:

1. Prerequisites that MUST be satisfied before beginning the transition
2. Key initiatives organized by workstream (governance, tooling, training, security)
3. Success criteria that MUST be met to certify advancement
4. Typical timeline estimates based on organization size

### Step 4: Measure and Validate

Advancement between levels MUST be validated using the [KPI Framework](../kpi/index.md). Self-assessment alone is insufficient. Organizations SHOULD establish a formal certification process involving:

- Evidence-based review against the target level's checklist
- KPI data demonstrating sustained performance at the target level for a minimum of one quarter
- Sign-off from the AI Governance Board or equivalent authority

## Maturity Level Summary

### [Level 1: Uncontrolled](./level-1-uncontrolled.md)
AI tools are used without governance, visibility, or standards. Developers adopt tools individually. No security scanning targets AI-generated code specifically. Legal and IP risks are unaddressed. This level represents the **highest organizational risk** and is where the majority of enterprises currently operate.

### [Level 2: Exploratory](./level-2-exploratory.md)
The organization has acknowledged AI-assisted development and begun structured experimentation. Pilot teams operate with basic guidelines. Initial tool evaluations are underway. Awareness of risks exists but systematic mitigation does not.

### [Level 3: Defined](./level-3-defined.md)
Formal standards, approved toolchains, and mandatory training are in place. AI-assisted development follows documented workflows. Security scanning includes AI-specific checks. Code review processes incorporate [human hardening](../about/glossary.md) requirements. This is the **minimum acceptable level** for regulated enterprises.

### [Level 4: Managed](./level-4-managed.md)
AI governance is fully integrated into the engineering lifecycle. KPIs are tracked on dashboards and actioned through management review. Security scanning is automated and risk-tiered. Developer certification programs are mature. The organization can demonstrate quantitative improvement from AI adoption.

### [Level 5: AI-First](./level-5-ai-first.md)
AI-assisted development is the default mode of operation. Workflows are designed AI-first rather than retrofitted. Predictive analytics drive continuous improvement. The organization achieves measurable competitive advantage from its AI engineering capability and contributes back to industry standards.

## Progression Principles

The following principles govern maturity progression:

1. **Sequential advancement is REQUIRED.** Organizations MUST NOT skip levels. Each level builds foundational capabilities that subsequent levels depend upon.

2. **Regression is possible.** Without sustained investment, organizations can slip back to lower maturity levels. Quarterly reassessment is RECOMMENDED.

3. **Uneven maturity is common.** Different business units or product lines MAY operate at different maturity levels. The organizational maturity level is determined by the **lowest level** at which all critical systems operate.

4. **Speed varies.** Typical transition timelines range from 3-6 months between adjacent levels, but depend heavily on organizational size, culture, and investment. Attempting to rush transitions leads to superficial compliance without genuine capability.

5. **Measurement drives advancement.** Every level transition MUST be supported by quantitative evidence from the [KPI Framework](../kpi/index.md). Subjective assessment is insufficient.

:::warning Common Anti-Pattern
Organizations frequently claim Level 3 or Level 4 maturity based on having written policies, without verifying that those policies are consistently followed in practice. The assessment checklists at each level are designed to distinguish between documented intent and operational reality.
:::

## Relationship to Other Frameworks

The AEEF Maturity Model is designed to integrate with existing organizational frameworks:

| Framework | Relationship |
|---|---|
| **CMMI** | AEEF levels roughly correspond to CMMI levels but are specific to AI-assisted development |
| **DORA Metrics** | AEEF productivity metrics complement DORA; deployment frequency and lead time remain relevant |
| **OWASP SAMM** | AEEF security dimensions extend SAMM to cover AI-specific threat vectors |
| **ISO 27001** | AEEF governance requirements support ISO 27001 compliance for AI tool usage |
| **Agile Maturity** | AEEF is agnostic to delivery methodology; it overlays on Agile, Waterfall, or hybrid approaches |

## Next Steps

Begin by reviewing the [Level 1: Uncontrolled](./level-1-uncontrolled.md) assessment checklist to establish your organization's baseline. Even organizations that believe they have progressed beyond Level 1 SHOULD validate this assumption against the checklist criteria.

For guidance on the metrics that support maturity advancement, see the [KPI Framework](../kpi/index.md).

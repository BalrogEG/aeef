---
title: "Version History"
sidebar_position: 4
description: "Version history of the AEEF Standards."
---

# Version History

This page tracks the version history of the AEEF Standards, including major releases, minor updates, and patch corrections. The AEEF follows semantic versioning: major versions introduce structural or breaking changes, minor versions add new content or non-breaking enhancements, and patch versions address corrections and clarifications.

For information on how to contribute to future versions, see the [Contributing](./contributing.md) guide.

## Versioning Policy

The AEEF uses a three-part version number: **MAJOR.MINOR.PATCH**

| Component | Meaning | Typical Cadence |
|---|---|---|
| **MAJOR** | Structural changes, new maturity levels, breaking changes to existing standards | Annual or as warranted |
| **MINOR** | New standards, KPI additions, non-breaking enhancements, guidance improvements | Quarterly |
| **PATCH** | Corrections, typo fixes, clarifications, broken link repairs | As needed |

### Compatibility Commitment

- **Patch releases** are fully backwards-compatible. Organizations implementing the current version are not affected.
- **Minor releases** are backwards-compatible in normative requirements. New requirements may be added but existing requirements are not changed or removed.
- **Major releases** may introduce breaking changes. When they do, transition guidance is provided to help organizations adapt. Organizations SHOULD plan to review and adopt major releases within six months of publication.

## Release History

---

### v1.0.0 — Initial Release

**Release Date:** February 17, 2026

**Release Type:** Major

**Summary:** Initial publication of the AI-Accelerated Enterprise Engineering Framework (AEEF), establishing the foundational maturity model, KPI framework, and governance standards for AI-assisted enterprise software engineering.

#### Maturity Model
- Defined the five-level maturity model: Level 1 (Uncontrolled), Level 2 (Exploratory), Level 3 (Defined), Level 4 (Managed), Level 5 (AI-First)
- Published assessment checklists for each maturity level with defined thresholds for level confirmation
- Documented transition roadmaps between all adjacent levels, including prerequisites, workstreams, and typical timelines
- Established key performance thresholds per level for adoption rate, training completion, security scanning coverage, and governance gate compliance
- Defined maturity progression principles: sequential advancement required, regression monitoring, uneven maturity handling, and evidence-based certification

#### KPI Framework
- Established three-dimension measurement framework: Productivity, Risk, and Financial
- Defined five productivity KPIs: Idea-to-Prototype Time, AI-Assisted Commit Ratio, Feature Throughput per Engineer, Code Review Cycle Time, and Developer Experience Score
- Defined four risk KPIs: AI-Related Incident Rate (with severity-weighted scoring), Security Findings Rate (with vulnerability ratio), Rework Percentage, and Technical Debt Ratio
- Defined five financial KPIs: Cost per Feature, Headcount Avoidance Ratio, Outsourcing Reduction, Tool Licensing Cost Ratio, and Engineering ROI
- Published maturity-level-appropriate targets for all KPIs
- Documented measurement methods, data sources, and aggregation rules for each KPI
- Provided ROI calculation model with worked example

#### Governance Standards
- Defined data classification requirements for AI tool usage
- Established code provenance tracking requirements
- Documented human review and human hardening mandates
- Specified AI-specific security scanning requirements, including common AI-generated vulnerability patterns
- Defined training and certification framework structure
- Established governance gate requirements by maturity level
- Documented incident response requirements for AI-related events

#### About and Reference
- Published framework origin, purpose, and positioning document
- Documented relationships to existing frameworks: SDLC, Agile, ITIL, COBIT, OWASP SAMM, ISO 27001, NIST CSF, EU AI Act, NIST AI RMF, ISO 42001
- Established contribution process with proposal types, review stages, and governance structure
- Published comprehensive glossary with 30+ terms
- Defined versioning policy and release cadence

#### Key Statistics Referenced
- 92% of US developers use AI coding tools daily (2026)
- AI co-authored code carries 1.7x more issues than human-only code
- AI co-authored code has a 2.74x higher vulnerability rate than human-only code

#### Acknowledgments
The initial release was developed by the AEEF Standards Committee with input from enterprise engineering leaders, security practitioners, governance professionals, and AI tool vendors. The framework draws on published research in AI-generated code quality, established governance frameworks (CMMI, ISO 27001, OWASP SAMM), and practical implementation experience from organizations at various maturity stages.

---

### v1.0.1 — Autonomous Governance and Role Coverage Update

**Release Date:** February 18, 2026

**Release Type:** Patch

**Summary:** Added formal autonomous and multi-agent governance controls, introduced a dedicated Solution Architect role guide, and completed role-based prompt coverage for all published roles.

#### Standards and Governance
- Published **PRD-STD-009: Autonomous & Multi-Agent Governance** as an active standard
- Added agent identity, contract, handoff, and traceability control requirements
- Integrated autonomous workflow evidence requirements into rollout guidance and production standards navigation

#### Role Architecture and Agent Operating Model
- Added **Solution Architect Guide** with architecture, handoff, governance, and assurance guidance
- Updated role navigation and cross-role dependency mappings to include Solution Architect responsibilities
- Expanded role-focused prompt catalog to provide one prompt entry for each published role guide

#### Documentation Alignment
- Updated standards index and sidebars to include PRD-STD-009
- Updated rollout kit checklists and ownership matrix to include autonomous workflow controls

---

## Planned Releases

The following releases are planned. Dates and scope are subject to change based on community feedback and evolving industry needs.

### v1.1.0 — Planned Q2 2026

**Planned Focus Areas:**

- **Autonomous Governance Expansion** — Operational playbooks, implementation patterns, and maturity benchmarks that extend PRD-STD-009 for large-scale enterprise rollouts.
- **Multi-Modal AI Standards** — Guidance for AI tools that operate across modalities (code, documentation, diagrams, infrastructure-as-code) with a unified governance approach.
- **Vendor Assessment Framework** — Standardized criteria for evaluating and selecting AI coding tool vendors, including data handling, model isolation, security posture, and contractual requirements.
- **Implementation Case Studies** — Anonymized case studies from organizations that have implemented AEEF v1.0, documenting lessons learned, transition timelines, and measured outcomes.

### v1.2.0 — Planned Q3 2026

**Planned Focus Areas:**

- **Regulatory Compliance Mapping** — Detailed mapping of AEEF requirements to specific EU AI Act articles, NIST AI RMF categories, and industry-specific regulatory requirements (HIPAA, PCI-DSS, FedRAMP).
- **Small Organization Guidance** — Streamlined implementation guidance for organizations with fewer than 50 engineers, with pragmatic adaptations of governance requirements to smaller scale.
- **Advanced Metrics** — Additional KPIs for organizations at Level 4 and Level 5, including leading indicators, predictive metrics, and business outcome correlation methods.
- **Training Curriculum Templates** — Reference training curricula for each certification tier (Foundation, Practitioner, Expert) with learning objectives, assessment criteria, and recommended content.

### v2.0.0 — Planned Q1 2027

**Planned Focus Areas:**

- **Framework restructuring** based on one year of implementation feedback
- **Maturity model refinement** incorporating data from organizations that have progressed through multiple levels
- **KPI target recalibration** based on aggregated industry data from v1.x implementations
- **Governance model updates** reflecting the evolved AI tool landscape and regulatory environment

## How Releases Are Communicated

- **Release announcement** — Published on the AEEF standards site with a summary of changes
- **Changelog** — Detailed line-by-line changes available in the standards repository
- **Migration guide** (major releases only) — Step-by-step guidance for organizations updating their implementation
- **Webinar** (major and significant minor releases) — Live walkthrough of changes with Q&A

## Requesting Changes

To propose changes for inclusion in a future release, follow the process described in the [Contributing](./contributing.md) guide. Proposals submitted at least 30 days before a planned release date will be considered for that release. Proposals received after the cutoff will be considered for the subsequent release.

## Archive Policy

All published versions of the AEEF remain available in the standards repository for reference. Organizations implementing an older version can access the exact text that applied at their implementation date. However, organizations are RECOMMENDED to adopt the latest version within six months of a major release and within three months of a minor release to benefit from corrections, clarifications, and emerging best practices.

:::info Staying Current
Subscribe to the AEEF release notifications to receive announcements when new versions are published. Organizations at [Level 3](../maturity/level-3-defined.md) and above SHOULD designate a standards liaison responsible for reviewing new releases and assessing their impact on the organization's implementation.
:::

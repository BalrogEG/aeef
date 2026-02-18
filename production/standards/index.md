---
title: "Standards & Guidelines"
sidebar_position: 1
description: "Formal production standards for AI-assisted development."
---

# Standards & Guidelines

This section contains the formal production standards (PRD-STD series) that govern AI-assisted development practices within the AEEF framework. Each standard follows RFC 2119 language conventions and includes clear requirements, implementation guidance, and compliance criteria.

## Overview

The PRD-STD series establishes the minimum quality, security, and governance requirements for organizations using AI coding assistants in production development. With 92% of US developers now using AI tools daily and AI co-authored code showing 1.7x more issues and 2.74x higher vulnerability rates, these standards exist to ensure that the velocity gains from AI assistance do not come at the expense of software quality, security, or maintainability.

For teams that need immediate execution guidance, start with the [Apply-Ready Rollout Kit](/production/standards/apply-ready-rollout-kit/). It includes a 30/60/90-day rollout plan, copy-paste prompts, and role ownership mapping for all eight standards.

All standards in this series use RFC 2119 keywords:

- **MUST** / **SHALL** -- Absolute requirements. Non-compliance requires immediate remediation.
- **MUST NOT** / **SHALL NOT** -- Absolute prohibitions.
- **SHOULD** / **RECOMMENDED** -- Expected practices. Deviations require documented justification.
- **SHOULD NOT** -- Practices that are discouraged but not prohibited.
- **MAY** / **OPTIONAL** -- Truly discretionary practices.

## Standards Index

| Standard ID | Title | Status | Compliance Level | Description |
|---|---|---|---|---|
| [PRD-STD-001](/production/standards/PRD-STD-001-prompt-engineering/) | Prompt Engineering Standards | **Active** | Level 2 | Defines requirements for prompt structure, context management, constraint specification, version control, and prompt library standards for production development environments. |
| [PRD-STD-002](/production/standards/PRD-STD-002-code-review/) | Code Review Standards | **Active** | Level 1 | Establishes mandatory code review processes for AI-generated code, including reviewer qualifications, review checklists, approval thresholds, and escalation criteria. |
| [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements/) | Testing Requirements | **Active** | Level 2 | Specifies testing requirements for AI-generated code, including unit test coverage minimums (80%), integration testing, behavioral validation, regression testing, and mutation testing. |
| [PRD-STD-004](/production/standards/PRD-STD-004-security-scanning/) | Security Scanning | **Active** | Level 1 | Mandates security scanning for AI-generated code, including SAST, DAST, dependency scanning, and vulnerability remediation SLAs (Critical: 24h, High: 7d, Medium: 30d, Low: 90d). |
| [PRD-STD-005](/production/standards/PRD-STD-005-documentation/) | Documentation Requirements | **Active** | Level 3 | Defines documentation requirements for AI-assisted development, including code comments for AI-generated sections, architecture decisions, prompt documentation, and knowledge preservation. |
| [PRD-STD-006](/production/standards/PRD-STD-006-technical-debt/) | Technical Debt Management | **Active** | Level 3 | Establishes criteria for identifying, tracking, prioritizing, and remediating technical debt introduced by AI-generated code, including debt budget limits and remediation timelines. |
| [PRD-STD-007](/production/standards/PRD-STD-007-quality-gates/) | Performance & Quality Gates | **Active** | Level 2 | Defines the quality gates that AI-assisted development outputs must pass before deployment, including build, test, security, performance, and deployment gates. |
| [PRD-STD-008](/production/standards/PRD-STD-008-dependency-compliance/) | Dependency & License Compliance | **Active** | Level 1 | Specifies requirements for managing dependencies introduced by AI-generated code, including license compatibility, vulnerability monitoring, and supply chain security. |

## Compliance Levels

Standards are assigned to compliance levels that correspond to the [Maturity Model](/pillars/maturity/). This assignment determines the order in which organizations should adopt the standards:

### Level 1 -- Foundation (Mandatory for all organizations)

These standards address the highest-risk areas and MUST be implemented first:

- **PRD-STD-002: Code Review** -- Every line of AI-generated code MUST be reviewed by a qualified human reviewer before merging. This is the single most impactful control against AI code quality issues.
- **PRD-STD-004: Security Scanning** -- AI-generated code MUST undergo automated security analysis. Given the 2.74x higher vulnerability rate, this is non-negotiable.
- **PRD-STD-008: Dependency Compliance** -- Dependencies introduced by AI tools MUST be checked for license compatibility and known vulnerabilities.

### Level 2 -- Managed (Target within 12 months)

These standards provide comprehensive quality controls:

- **PRD-STD-001: Prompt Engineering** -- Structured prompting reduces the rate of defective AI outputs and improves consistency across teams.
- **PRD-STD-003: Testing Requirements** -- Rigorous testing catches the issues that code review alone misses.
- **PRD-STD-007: Quality Gates** -- Automated enforcement prevents non-compliant code from reaching production.

### Level 3 -- Optimized (Target within 24 months)

These standards ensure long-term sustainability:

- **PRD-STD-005: Documentation** -- Comprehensive documentation prevents knowledge erosion as AI-generated code accumulates.
- **PRD-STD-006: Technical Debt** -- Active debt management prevents the gradual degradation of codebases that rely heavily on AI generation.

## Standard Structure

Every standard in the PRD-STD series follows a consistent eight-section structure:

1. **Purpose** -- Why the standard exists and what risk it mitigates
2. **Scope** -- Which teams, projects, code types, and AI tools the standard covers
3. **Definitions** -- Key terms with precise definitions
4. **Requirements** -- Formal requirements using MANDATORY (:::danger) and RECOMMENDED (:::warning) classifications
5. **Implementation Guidance** -- Practical steps, examples, and configuration templates
6. **Exceptions & Waiver Process** -- How to request justified exceptions
7. **Related Standards** -- Cross-references to other AEEF standards and external references
8. **Revision History** -- Version tracking

## Applicability

These standards apply to:

- All production code that is generated, modified, or influenced by AI coding assistants
- All development environments where AI tools are authorized for use
- All teams and individual contributors who use AI tools as part of their development workflow
- Both greenfield and brownfield projects

These standards do NOT apply to:

- Experimental or research code in isolated sandbox environments (though adoption is RECOMMENDED)
- Personal learning and training activities
- AI-generated code that is used solely as reference material and is rewritten manually

## Governance

The PRD-STD series is governed by the [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/) framework. Standards are:

- **Reviewed** quarterly by the AEEF Standards Committee
- **Updated** as AI tool capabilities evolve and new risk patterns emerge
- **Versioned** using semantic versioning (Major.Minor.Patch)
- **Communicated** to all affected teams at least 30 days before enforcement of new requirements

Organizations SHOULD designate an AEEF Standards Champion within each engineering team to facilitate adoption, answer questions, and report compliance status.

## Getting Started

For teams new to the PRD-STD series:

1. Begin with a gap analysis against Level 1 standards (PRD-STD-002, PRD-STD-004, PRD-STD-008)
2. Configure CI/CD pipelines to enforce automated checks per [PRD-STD-007](/production/standards/PRD-STD-007-quality-gates/)
3. Train reviewers on the AI-specific review checklist in [PRD-STD-002](/production/standards/PRD-STD-002-code-review/)
4. Establish vulnerability SLAs per [PRD-STD-004](/production/standards/PRD-STD-004-security-scanning/)
5. Progress to Level 2 and Level 3 standards as maturity increases

For detailed implementation guidance and assessment tools, see the [Maturity Model](/pillars/maturity/) and the [Production Efficiency Overview](/production/).

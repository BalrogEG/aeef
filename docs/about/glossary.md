---
title: "Glossary of Terms"
sidebar_position: 3
description: "Definitions of key terms used throughout the AEEF Standards."
---

# Glossary of Terms

This glossary defines key terms used throughout the AEEF Standards to ensure consistent understanding across all stakeholders — engineering, security, legal, management, and executive leadership. Terms are listed alphabetically. Where a term has specific meaning within AEEF that differs from its general industry usage, the AEEF-specific definition takes precedence within the context of this framework.

:::info Usage Convention
Terms defined in this glossary are used consistently throughout all AEEF documents. When a glossary term appears for the first time in a section, it MAY be hyperlinked to this glossary for reader convenience.
:::

## A

### Acceptable Use Policy (AUP)
A documented policy that defines how AI tools MAY and MUST NOT be used within the organization. The AUP covers data classification (what information may be shared with AI services), approved tools, prohibited activities, and consequences for policy violations. An AUP is a minimum requirement for [Level 2](../maturity/level-2-exploratory.md) maturity.

### Adaptive Governance
A governance model in which controls automatically adjust their intensity based on contextual factors such as code criticality, developer certification level, historical quality data, and predicted risk. Adaptive governance is a characteristic of [Level 5](../maturity/level-5-ai-first.md) organizations. Contrast with static governance, where all code is subject to identical controls regardless of context.

### AI-Assisted Commit
A source code commit in which AI tools were used during the development process, including code generation, code completion, test generation, documentation generation, or code refactoring. AI-assisted commits are tracked through code provenance mechanisms.

### AI-Assisted Development
The practice of using artificial intelligence tools — including code generation models, code completion assistants, chat-based coding assistants, and automated testing tools — to augment human software engineering activities. AEEF governs AI-assisted development across the entire software development lifecycle.

### AI-First Workflow
An engineering workflow designed from first principles with AI assistance as the default mode of operation, rather than a traditional workflow retrofitted with AI tools. In an AI-first workflow, the question is "Why would a human do this without AI?" rather than "How can AI help with this task?" AI-first workflows are a defining characteristic of [Level 5](../maturity/level-5-ai-first.md) maturity.

### AI Governance Board
A cross-functional body responsible for setting, reviewing, and enforcing AI-assisted development standards within an organization. The board typically includes representatives from engineering, security, legal, compliance, and product management. Establishment of an AI Governance Board is a requirement for [Level 3](../maturity/level-3-defined.md) maturity.

### AI-Related Incident
A production incident whose root cause analysis identifies AI-generated or AI-assisted code as a contributing factor. AI-related incidents are tracked as a key risk metric in the [KPI Framework](../kpi/risk-metrics.md).

## B

### Baseline
A set of measurements taken before or at the beginning of AI-assisted development governance implementation, used as the reference point for measuring improvement. Baselines MUST be established before process changes are implemented to avoid measurement bias.

## C

### Code Provenance
The documented origin and history of source code, specifically including whether the code was human-written, AI-generated, AI-assisted, or a combination. Code provenance tracking enables organizations to measure AI-specific quality and risk metrics, and is a requirement beginning at [Level 3](../maturity/level-3-defined.md) maturity.

### Code Provenance Tracking
The technical mechanisms used to record and query code provenance information. Methods include commit hooks that tag AI-assisted commits, IDE plugin telemetry that records AI tool usage per code block, and developer self-declaration. Automated methods are preferred over self-declaration for accuracy.

### Cost per Feature
A [financial metric](../kpi/financial-metrics.md) measuring the average fully-loaded cost (personnel, tools, infrastructure, overhead) to deliver one completed feature or equivalent work unit. Used to track whether AI-assisted development reduces unit delivery costs.

## D

### Data Classification
The categorization of organizational data by sensitivity level to determine what MAY and MUST NOT be shared with external AI services. Typical classification levels include Public, Internal, Confidential, and Restricted. Data classification rules for AI tools are a minimum requirement for [Level 2](../maturity/level-2-exploratory.md) maturity.

### Developer Experience (DevEx)
A qualitative measure of developer satisfaction with AI-assisted development tools, workflows, and organizational support. Measured through standardized surveys covering tool satisfaction, workflow integration, training adequacy, code confidence, and organizational support. See [Productivity Metrics](../kpi/productivity-metrics.md) for measurement details.

## F

### Feature Throughput
The number of completed features (or equivalent work units) delivered per engineer per time period. A key [productivity metric](../kpi/productivity-metrics.md) used to measure whether AI tools translate into increased per-engineer output.

## G

### Governance Gate
A defined checkpoint in the software development lifecycle where AI-assisted work is reviewed for compliance with organizational standards. Governance gates may be manual (human review) or automated (CI/CD pipeline checks). At [Level 3](../maturity/level-3-defined.md), governance gates are documented and enforced. At [Level 4](../maturity/level-4-managed.md), they are automated within CI/CD pipelines.

### Governance Theater
A pejorative term for governance processes that exist on paper but do not provide meaningful quality or risk control. Indicators include governance gates that approve 100% of submissions without modification, policies that are published but not enforced, and metrics that are collected but never acted upon.

## H

### Headcount Avoidance
A [financial metric](../kpi/financial-metrics.md) measuring the additional work capacity gained from AI-assisted development without proportional headcount increase. Expressed as FTE equivalents — the number of additional full-time engineers that would have been required to achieve current output levels at pre-AI productivity rates.

### Human Hardening
The deliberate, critical review and improvement of AI-generated code by a human developer before it is accepted into the codebase. Human hardening goes beyond standard code review — it specifically examines AI-generated code for patterns known to be problematic: hardcoded secrets, insecure defaults, missing error handling, inconsistent abstraction, and architectural misalignment. Human hardening is REQUIRED at all maturity levels.

## I

### Idea-to-Prototype Time
A [productivity metric](../kpi/productivity-metrics.md) measuring the elapsed calendar time from formal concept approval to the availability of a working prototype. Used to assess whether AI tools accelerate the early stages of feature development.

## K

### KPI (Key Performance Indicator)
A quantifiable measure used to evaluate the success of AI-assisted development across productivity, risk, and financial dimensions. The AEEF [KPI Framework](../kpi/index.md) defines specific KPIs, measurement methods, and targets for each maturity level.

## M

### Maturity Level
One of five defined stages in the [AEEF Maturity Model](../maturity/index.md) representing an organization's capability in AI-assisted development governance. Levels progress from Level 1 (Uncontrolled) through Level 5 (AI-First). Organizations MUST advance sequentially; skipping levels is not permitted.

### Maturity Model
A framework that defines a staged progression of organizational capability. The AEEF Maturity Model specifically addresses AI-assisted software engineering capability across dimensions of governance, tooling, security, training, metrics, and culture.

## P

### Policy-as-Code
The practice of encoding governance policies as machine-readable, version-controlled configuration that is enforced automatically through CI/CD pipelines and developer tooling. Policy-as-code is a characteristic of [Level 4](../maturity/level-4-managed.md) organizations, replacing manual policy enforcement with automated controls.

### Prompt Engineering
The skill of crafting effective inputs (prompts) to AI coding tools to produce high-quality, relevant, and secure code output. Effective prompt engineering includes providing sufficient context, specifying constraints, defining expected output format, and iteratively refining prompts based on output quality. Prompt engineering training is a component of the AEEF training curriculum beginning at [Level 3](../maturity/level-3-defined.md).

## R

### Rework Percentage
A [risk metric](../kpi/risk-metrics.md) measuring the proportion of AI-assisted code that requires revision within 30 days of being merged. Rework includes bug fixes, security patches, performance corrections, and refactoring. High rework percentages indicate that AI-generated code quality is insufficient, offsetting initial productivity gains.

### RFC 2119 Language
The use of specific keywords (MUST, SHALL, SHOULD, RECOMMENDED, MAY, OPTIONAL) as defined in RFC 2119 to indicate requirement levels in standards documents. Within AEEF: **MUST/SHALL** indicates an absolute requirement; **SHOULD/RECOMMENDED** indicates a strong recommendation that may be deviated from with documented justification; **MAY/OPTIONAL** indicates a truly optional item.

### Risk-Tiered Review
A governance approach in which the intensity of human review, security scanning, and approval processes varies based on the risk level of the code being reviewed. High-risk code (security-critical, data-handling, infrastructure) receives enhanced scrutiny, while low-risk code follows a streamlined process. Risk-tiered review is a requirement for [Level 4](../maturity/level-4-managed.md) maturity.

### ROI (Return on Investment)
A [financial metric](../kpi/financial-metrics.md) calculated as (Total Benefits - Total Costs) / Total Costs for AI-assisted development investment. The AEEF ROI model includes productivity savings, headcount avoidance, outsourcing reduction, and quality improvement as benefits, against tool licensing, training, governance overhead, and risk costs.

## S

### Security Findings Rate
A [risk metric](../kpi/risk-metrics.md) measuring the density of security vulnerabilities identified in AI-assisted code, expressed as findings per thousand lines of code (KLOC). This rate is compared against human-only code to produce a vulnerability ratio indicating whether AI tools increase or decrease security risk.

### Severity-Weighted Incident Score
A composite metric that weights AI-related production incidents by their severity level. SEV1 (critical) incidents receive higher weight than SEV4 (cosmetic) incidents, providing a more nuanced view of risk impact than raw incident counts.

### Shadow IT
The use of AI tools, services, or accounts that are not approved, provisioned, or monitored by the organization. Shadow IT is a defining characteristic of [Level 1](../maturity/level-1-uncontrolled.md) maturity and represents a significant governance and security risk.

## T

### Technical Debt Ratio
A [risk metric](../kpi/risk-metrics.md) measuring AI-attributed technical debt as a proportion of the total technical debt backlog. AI-specific technical debt patterns include inconsistent abstraction, duplicate logic, over-engineering, missing error handling, and test gaps.

### Threat Model
A structured analysis of potential security threats specific to AI-assisted development. AI-specific threat vectors include prompt injection, training data poisoning, model manipulation, data exfiltration through AI services, and supply chain attacks through AI-suggested dependencies. An AI-specific threat model is a requirement for [Level 3](../maturity/level-3-defined.md) maturity.

## V

### Vibe Coding
An informal term describing the practice of accepting AI-generated code suggestions without critical review, understanding, or validation. Vibe coding relies on the developer's intuitive sense ("vibe") that the code "looks right" rather than systematic verification. Vibe coding is explicitly prohibited under AEEF standards — all AI-generated code MUST undergo [human hardening](#human-hardening) before acceptance.

### Vulnerability Ratio
The ratio of security findings per KLOC in AI-assisted code compared to human-only code. A ratio of 1.0 indicates parity; ratios above 1.0 indicate that AI-assisted code has a higher vulnerability density than human-only code. Research indicates a baseline vulnerability ratio of approximately 2.74x for unmanaged AI-generated code.

## W

### Weighted Scoring
A measurement approach that assigns different weights to items based on their severity or impact. Used in the AEEF for severity-weighted incident scoring, where critical incidents receive higher weight than minor incidents, providing a more meaningful aggregate risk measure.

---

:::tip Proposing New Terms
As the AI-assisted development field evolves, new terminology emerges regularly. To propose additions to this glossary, see the [Contributing](./contributing.md) guide. Glossary additions follow a streamlined review process.
:::

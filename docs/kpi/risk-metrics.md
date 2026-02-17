---
title: "Risk Metrics"
sidebar_position: 3
description: "Risk indicators for monitoring AI-assisted development safety."
---

# Risk Metrics

Risk metrics monitor the safety, quality, and security implications of AI-assisted development. These metrics are the essential counterbalance to [Productivity Metrics](./productivity-metrics.md) — without them, an organization cannot determine whether AI-driven speed gains come at the expense of code quality, security posture, or system reliability. Given that research shows AI co-authored code carries **1.7x more issues** and a **2.74x higher vulnerability rate** compared to human-only code, risk measurement is not optional — it is a governance imperative.

:::danger Non-Negotiable Measurement
Risk metrics MUST be implemented before or concurrently with productivity metrics. An organization that measures productivity without measuring risk is optimizing for speed while blind to the hazards that speed creates. This pattern is the single most common failure mode in AI-assisted development adoption.
:::

## KPI-R1: AI-Related Incident Rate

### Definition

AI-Related Incident Rate measures the number of production incidents that are attributed — fully or partially — to AI-generated or AI-assisted code, per quarter. This metric is the ultimate lagging indicator of AI code quality: it measures real-world impact on users and systems.

### Measurement Method

- **Counting rule:** An incident is attributed to AI-generated code when the root cause analysis (RCA) identifies AI-assisted code as a contributing factor. Partial attribution counts as 0.5 incidents.
- **Severity classification:** Incidents are classified using standard severity levels (SEV1-SEV4) to enable severity-weighted analysis
- **Unit:** Incidents per quarter, with severity-weighted alternative
- **Aggregation:** Quarterly, organization-wide and per product/service
- **Attribution method:** Code provenance tracking links production code to its AI-assisted origin. Without provenance tracking, attribution relies on RCA investigation, which is less reliable.

### Severity-Weighted Scoring

| Severity | Description | Weight | Example |
|---|---|---|---|
| **SEV1** | Complete service outage or data breach affecting customers | 10 | AI-generated authentication bypass deployed to production |
| **SEV2** | Major feature degradation or security vulnerability actively exploited | 5 | AI-generated SQL query causes data corruption under load |
| **SEV3** | Minor feature issue or potential security exposure | 2 | AI-generated API endpoint returns incorrect error codes |
| **SEV4** | Cosmetic issue or non-impacting defect | 1 | AI-generated UI component renders incorrectly in edge case |

The **Severity-Weighted Incident Score** is calculated as: Sum of (incident count x severity weight) per quarter.

### Targets by Maturity Level

| Maturity Level | Raw Count Target | Severity-Weighted Target | Notes |
|---|---|---|---|
| Level 2 | Measurement begins | N/A | Establishing attribution capability |
| Level 3 | < 5 per quarter | < 20 weighted points | Governance gates should prevent most issues |
| Level 4 | < 2 per quarter | < 8 weighted points | Automated scanning catches remaining issues |
| Level 5 | < 1 per quarter | < 3 weighted points | Predictive risk management prevents issues proactively |

:::warning Zero Is Suspicious
An organization reporting zero AI-related incidents is likely under-attributing rather than operating flawlessly. This typically indicates inadequate code provenance tracking or RCA processes that do not investigate AI contribution. Organizations SHOULD validate zero-incident reports with provenance coverage audits.
:::

## KPI-R2: Security Findings Rate

### Definition

Security Findings Rate measures the density of security vulnerabilities identified in AI-assisted code, expressed as findings per 1,000 lines of AI-assisted code (KLOC). This metric is compared against the equivalent rate for human-only code to produce a **vulnerability ratio** that directly measures whether AI tools are increasing or decreasing the organization's security risk.

### Measurement Method

- **Numerator:** Total security findings (SAST, DAST, SCA, manual review) in code tagged as AI-assisted
- **Denominator:** Thousands of lines of AI-assisted code (KLOC) in the same period
- **Vulnerability Ratio:** AI findings rate divided by human-only findings rate. A ratio of 1.0 means parity; above 1.0 means AI code is more vulnerable.
- **Unit:** Findings per KLOC (absolute); ratio (relative)
- **Aggregation:** Monthly, segmented by finding severity (Critical, High, Medium, Low)
- **Tool requirements:** SAST/DAST tools MUST include AI-specific scanning rules (see [Level 3 requirements](../maturity/level-3-defined.md))

### Severity-Based Findings Targets

| Finding Severity | Level 3 Target (ratio) | Level 4 Target (ratio) | Level 5 Target (ratio) | Remediation SLA |
|---|---|---|---|---|
| **Critical** | <= 2.0x baseline | <= 1.5x baseline | <= 1.0x baseline | 24 hours |
| **High** | <= 2.5x baseline | <= 1.5x baseline | <= 1.0x baseline | 7 days |
| **Medium** | <= 3.0x baseline | <= 2.0x baseline | <= 1.0x baseline | 30 days |
| **Low** | No target | <= 2.5x baseline | <= 1.5x baseline | 90 days |

### Common AI-Specific Vulnerability Patterns

Organizations SHOULD configure scanning tools to prioritize these AI-generated vulnerability patterns:

| Vulnerability Pattern | Description | CWE Reference |
|---|---|---|
| Hardcoded credentials | AI suggests placeholder secrets that reach production | CWE-798 |
| Insecure default configurations | AI generates permissive configurations (e.g., CORS allow-all) | CWE-1188 |
| SQL injection susceptibility | AI-generated database queries lack parameterization | CWE-89 |
| Path traversal | AI-generated file handling does not sanitize paths | CWE-22 |
| Missing input validation | AI-generated endpoints accept unvalidated input | CWE-20 |
| Insecure deserialization | AI suggests deserialization without type checking | CWE-502 |
| Dependency confusion | AI suggests packages with names similar to internal packages | CWE-427 |
| Outdated cryptographic algorithms | AI suggests deprecated algorithms from training data | CWE-327 |

## KPI-R3: Rework Percentage

### Definition

Rework Percentage measures the proportion of AI-assisted code that requires revision within 30 days of being merged. Rework includes bug fixes, security patches, performance corrections, and refactoring of AI-generated code. This metric captures the "hidden cost" of AI-assisted development — code that appears to be delivered quickly but generates downstream correction work.

### Measurement Method

- **Numerator:** Lines of AI-assisted code that are modified within 30 days of initial merge (excluding planned refactoring and feature enhancements)
- **Denominator:** Total lines of AI-assisted code merged in the measurement period
- **Unit:** Percentage
- **Aggregation:** Monthly, with a rolling 3-month average for trend analysis
- **Segmentation:** SHOULD be segmented by rework reason (bug fix, security patch, performance, refactoring) and by originating team/developer
- **Comparison baseline:** Compare AI-assisted code rework rate against human-only code rework rate

### Targets by Maturity Level

| Maturity Level | AI-Assisted Rework Target | Comparison to Human Baseline | Notes |
|---|---|---|---|
| Level 2 | Measurement begins | N/A | Establishing tracking capability |
| Level 3 | <= 20% | <= 1.5x human baseline | Governance reduces but does not eliminate rework |
| Level 4 | <= 15% | <= 1.2x human baseline | Certified developers and automated scanning improve quality |
| Level 5 | <= 8% | <= 1.0x human baseline (parity) | AI-first workflows produce code at human quality levels |

:::info Rework Is Not Always Bad
Not all rework indicates a quality problem. Rework due to changing requirements, planned refactoring, or evolving architectural patterns is normal. The metric SHOULD distinguish between **defect-driven rework** (indicating quality issues) and **evolution-driven rework** (indicating healthy iteration). Only defect-driven rework counts against the target.
:::

### Root Cause Analysis

When rework percentage exceeds targets, the following root cause categories SHOULD be investigated:

| Root Cause Category | Indicators | Remediation |
|---|---|---|
| **Inadequate prompt engineering** | AI output misaligns with requirements | Enhanced prompt engineering training |
| **Insufficient human review** | Reviewers approve AI code without critical examination | Review process reinforcement, reviewer training |
| **AI tool limitation** | Systematic patterns of incorrect output for specific task types | Tool configuration adjustment or task exclusion |
| **Missing context** | AI lacks project-specific knowledge for accurate generation | RAG implementation, context management improvement |
| **Unclear requirements** | Requirements are ambiguous; AI and human interpretations diverge | Requirements process improvement (upstream fix) |

## KPI-R4: Technical Debt Ratio

### Definition

Technical Debt Ratio measures AI-attributed technical debt as a proportion of the total technical debt backlog. Technical debt includes code quality issues, architectural inconsistencies, missing tests, incomplete documentation, and deferred refactoring that are specifically attributable to AI-generated code patterns.

### Measurement Method

- **Numerator:** Technical debt items in the backlog attributed to AI-generated code
- **Denominator:** Total technical debt items in the backlog
- **Unit:** Percentage
- **Aggregation:** Monthly snapshot
- **Attribution method:** Technical debt items are tagged with an AI-attribution flag during creation or triage. Automated static analysis tools (SonarQube, CodeClimate) MAY auto-tag debt items identified in AI-assisted code segments.
- **Debt categories:** SHOULD be classified by type (code quality, architecture, testing, documentation, security)

### Targets by Maturity Level

| Maturity Level | Target | Notes |
|---|---|---|
| Level 2 | Measurement begins | Establishing debt tracking capability |
| Level 3 | <= 15% of total backlog | AI debt is present but contained |
| Level 4 | <= 10% of total backlog | Improved code quality reduces debt generation |
| Level 5 | <= 5% of total backlog | AI-first workflows produce architecturally coherent code |

### AI-Specific Technical Debt Patterns

Organizations SHOULD monitor for these AI-specific technical debt patterns:

| Debt Pattern | Description | Detection Method |
|---|---|---|
| **Inconsistent abstraction** | AI generates code at different abstraction levels than surrounding codebase | Architecture review, static analysis |
| **Duplicate logic** | AI regenerates existing functionality rather than reusing established patterns | Duplicate code detection tools |
| **Over-engineering** | AI generates unnecessarily complex solutions for simple problems | Code complexity metrics (cyclomatic complexity) |
| **Missing error handling** | AI-generated happy-path code lacks robust error handling | Coverage analysis, fault injection testing |
| **Stale patterns** | AI suggests patterns from training data that are deprecated in the current codebase | Linting rules, pattern matching |
| **Test gaps** | AI generates implementation code without corresponding tests | Coverage analysis per commit |

## Risk Dashboard Design

Organizations at [Level 4](../maturity/level-4-managed.md) and above MUST maintain an integrated risk dashboard. The RECOMMENDED dashboard layout includes:

### Executive View
- Severity-weighted incident score (current quarter vs. previous quarter)
- Security findings ratio trend (6-month view)
- Overall risk status (green/yellow/red based on threshold breaches)

### Governance Board View
- All four risk KPIs with trend lines
- Breakdown by team and product
- Top 5 risk items requiring action
- Correlation analysis between risk metrics and productivity metrics

### Team View
- Team-specific risk KPIs
- Individual code quality trends (anonymized where required)
- Rework items requiring attention
- Security findings assigned to team

## Escalation and Response

When risk metrics breach defined thresholds, the following escalation MUST be followed:

| Condition | Action | Responsible |
|---|---|---|
| Any single SEV1 AI-related incident | Immediate executive notification; RCA within 48 hours | CISO + VP Engineering |
| Security findings ratio exceeds 3.0x baseline | Emergency governance board review; consider restricting AI usage for affected code area | AI Governance Board |
| Rework percentage exceeds 25% for two consecutive months | Root cause investigation; targeted training or tool adjustment | Engineering Management |
| Technical debt ratio exceeds 20% | Dedicated debt reduction sprint; review AI coding guidelines | Team Leads |

## Cross-References

- [KPI Framework Overview](./index.md) — framework architecture and balanced measurement guidance
- [Productivity Metrics](./productivity-metrics.md) — productivity counterpart that MUST be balanced against risk
- [Financial Metrics](./financial-metrics.md) — cost implications of risk metrics (rework costs, incident costs)
- [Level 3: Defined](../maturity/level-3-defined.md) — minimum maturity level for comprehensive risk measurement
- [Glossary](../about/glossary.md) — definitions of risk-related terms

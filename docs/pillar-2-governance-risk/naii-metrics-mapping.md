---
title: "NAII Metrics Mapping"
sidebar_position: 14
description: "Mapping between AEEF KPI Framework and SDAIA National AI Index (NAII) dimensions for aligned reporting."
---

# NAII Metrics Mapping

The Saudi Data and Artificial Intelligence Authority (SDAIA) publishes the National AI Index (NAII), which measures the Kingdom's AI readiness and progress across multiple dimensions. This document maps AEEF KPI Framework metrics to NAII dimensions, enabling organizations to report AI engineering outcomes in a format that contributes to national-level AI measurement.

## Applicability

Apply this mapping when any of the following are true:

1. The organization operates in Saudi Arabia and contributes data to national AI readiness assessments.
2. Leadership requires reporting aligned to Saudi national AI strategy metrics.
3. The organization participates in SDAIA programs, government tenders, or national AI initiatives that reference NAII dimensions.

## NAII Dimension Mapping

The following table maps NAII dimensions to AEEF KPI Framework metrics. Organizations SHOULD use this mapping to structure internal reporting in a way that can be aggregated for national-level assessment.

### Data Dimension

| NAII Indicator | Description | AEEF KPI | AEEF Source | Measurement Method |
|---|---|---|---|---|
| Data governance maturity | Quality of data management practices | Data classification compliance rate | [Pillar 2 Data Classification](./index.md) | % of AI projects with completed data classification |
| Data quality and readiness | Availability of high-quality data for AI | Context preparation quality score | [Workflow Optimization](../pillar-3-productivity/workflow-optimization.md) | Average context quality rating in AI-assisted workflows |
| Data privacy compliance | PDPL and privacy regulation adherence | Privacy incident rate | [KSA Regulatory Profile](./ksa-regulatory-profile.md) | Number of PDPL-related incidents per quarter |

### Technology Dimension

| NAII Indicator | Description | AEEF KPI | AEEF Source | Measurement Method |
|---|---|---|---|---|
| AI tool adoption | Breadth and depth of AI tool usage | AI-Assisted Commit Ratio | [Productivity Metrics](../kpi/productivity-metrics.md) | % of commits involving AI assistance |
| Infrastructure readiness | Availability of AI-capable infrastructure | Tool availability and uptime | [PRD-STD-012 Inference Reliability](/production/standards/PRD-STD-012-inference-reliability-cost-controls/) | AI tool SLO compliance rate |
| Integration maturity | AI integration into engineering workflows | Feature Throughput per Engineer | [Productivity Metrics](../kpi/productivity-metrics.md) | Features delivered per engineer per sprint |
| Security posture | Cybersecurity maturity for AI systems | Security Findings Rate | [Risk Metrics](../kpi/risk-metrics.md) | AI-specific vulnerabilities per 1K LOC |

### Human Capabilities Dimension

| NAII Indicator | Description | AEEF KPI | AEEF Source | Measurement Method |
|---|---|---|---|---|
| AI skills workforce | Proportion of workforce with AI skills | AEEF certification rate | [Training & Skill Development](../pillar-5-organizational-enablement/training-skill-development.md) | % of engineers with AEEF Foundation+ certification |
| Training investment | Investment in AI skills development | Training hours per engineer per year | [Training & Skill Development](../pillar-5-organizational-enablement/training-skill-development.md) | Total AI training hours / headcount |
| Talent development | Growth of AI-capable talent pipeline | Skill level progression rate | [Training & Skill Development](../pillar-5-organizational-enablement/training-skill-development.md) | Average skill matrix improvement per 6-month cycle |
| Saudi national AI capability | Saudization of AI engineering roles | Saudi national AI certification rate | [Training & Skill Development](../pillar-5-organizational-enablement/training-skill-development.md#workforce-localization-saudi-arabia) | % of Saudi nationals at Practitioner+ level |

### Responsible AI Dimension

| NAII Indicator | Description | AEEF KPI | AEEF Source | Measurement Method |
|---|---|---|---|---|
| Ethics compliance | Adherence to SDAIA AI Ethics Principles | Ethics self-assessment score | [SDAIA Ethics Traceability](./sdaia-ethics-traceability.md) | Average score across 12 ethics principles |
| Risk management maturity | Effectiveness of AI risk controls | AI-Related Incident Rate | [Risk Metrics](../kpi/risk-metrics.md) | Production incidents per quarter attributed to AI |
| Governance framework | Strength of AI governance structures | Governance gate compliance rate | [PRD-STD-007 Quality Gates](/production/standards/PRD-STD-007-quality-gates/) | % of AI-assisted deployments passing all gates |
| Transparency and accountability | Audit trail and provenance practices | Code provenance coverage | [Code Provenance](./code-provenance.md) | % of AI-assisted code with complete provenance metadata |

### Innovation and Economic Impact Dimension

| NAII Indicator | Description | AEEF KPI | AEEF Source | Measurement Method |
|---|---|---|---|---|
| Productivity impact | AI contribution to engineering productivity | Idea-to-Prototype Time | [Productivity Metrics](../kpi/productivity-metrics.md) | % reduction from baseline |
| Economic value | Financial return on AI investment | Engineering ROI | [Financial Metrics](../kpi/financial-metrics.md) | Net value per dollar invested in AI tooling |
| Cost efficiency | Cost reduction through AI adoption | Cost per Feature | [Financial Metrics](../kpi/financial-metrics.md) | Average fully-loaded cost to deliver a feature |
| Capacity expansion | Ability to do more with existing resources | Headcount Avoidance Ratio | [Financial Metrics](../kpi/financial-metrics.md) | Work capacity gained without headcount increase |

## Reporting Alignment

### NAII-Compatible Reporting Template

Organizations SHOULD produce a quarterly NAII-aligned report using the following structure:

| Report Section | Content | AEEF Data Source |
|---|---|---|
| Executive Summary | Overall AI maturity level and quarter-over-quarter trend | [Maturity Assessment](../pillar-5-organizational-enablement/maturity-assessment.md) |
| Data Readiness | Data governance compliance, classification coverage, privacy incidents | Pillar 2 metrics |
| Technology Adoption | Tool usage rates, infrastructure uptime, integration depth | Productivity metrics + PRD-STD-012 |
| Workforce Development | Certification rates, training completion, skill progression, Saudization | Pillar 5 metrics |
| Responsible AI | Ethics scores, incident rates, governance compliance, provenance coverage | Risk metrics + ethics self-assessment |
| Economic Impact | ROI, cost per feature, productivity gains, capacity expansion | Financial metrics |

### Reporting Cadence

| Report | Audience | Frequency | NAII Alignment |
|---|---|---|---|
| Operational dashboard | Engineering leadership | Weekly | Subset of technology and productivity metrics |
| Management report | VP Engineering, CTO | Monthly | Technology + workforce + responsible AI dimensions |
| Governance report | AI Governance Board | Quarterly | All NAII dimensions |
| Executive summary | C-suite, Board | Quarterly | All NAII dimensions with business impact focus |
| NAII contribution | SDAIA (if requested) | Annually | Full NAII-aligned data package |

## Workforce Metrics for NAII

The following additional workforce development indicators support NAII reporting and are not covered by standard AEEF KPIs. Organizations operating in Saudi Arabia SHOULD track these:

| Metric | Definition | Target | NAII Dimension |
|---|---|---|---|
| AI literacy rate | % of total workforce (engineering + non-engineering) completing AI literacy training | >= 80% within 12 months | Human Capabilities |
| Cross-functional AI adoption | Number of non-engineering functions using AI-assisted workflows | >= 3 functions | Innovation |
| AI research contributions | Publications, conference presentations, or open-source contributions related to AI engineering | Increasing annually | Innovation |
| University partnership count | Active partnerships with Saudi universities for AI talent development | >= 1 | Human Capabilities |

## Related Documents

- [KPI Framework](../kpi/index.md)
- [Productivity Metrics](../kpi/productivity-metrics.md)
- [Risk Metrics](../kpi/risk-metrics.md)
- [Financial Metrics](../kpi/financial-metrics.md)
- [KSA Regulatory Profile](./ksa-regulatory-profile.md)
- [SDAIA Ethics Traceability](./sdaia-ethics-traceability.md)
- [Training & Skill Development](../pillar-5-organizational-enablement/training-skill-development.md)

## External Sources

- SDAIA National AI Index (NAII): https://sdaia.gov.sa/en/SDAIA/about/Files/NAII.pdf
- SDAIA National Strategy for Data & AI: https://sdaia.gov.sa/en/SDAIA/SdaiaStrategies/Pages/NationalStrategyForDataAndAI.aspx

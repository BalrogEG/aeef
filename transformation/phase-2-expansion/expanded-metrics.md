---
title: "Expanded Metrics & KPI Dashboard"
sidebar_position: 5
description: "Expanding measurement to track AI-assisted development at scale."
---

# Expanded Metrics & KPI Dashboard

This section defines the expanded metrics and KPI dashboard required as AI-assisted development scales across the organization. Where [Phase 1: Measurement Baseline](/transformation/phase-1-foundation/measurement-baseline/) established team-level baselines for pilot teams, Phase 2 expands measurement to cover multiple teams, organizational-level indicators, governance effectiveness, and trend analysis. The dashboard is the primary tool for data-driven decision-making throughout the remainder of the transformation.

## Team-Level KPIs

Team-level KPIs track the performance and health of individual teams using AI-assisted development. These extend the baseline metrics with AI-specific indicators.

### Development Performance

| KPI | Definition | Target | Collection Frequency |
|---|---|---|---|
| Velocity delta | Percentage change in sprint velocity vs. baseline | +10-30% after ramp-up period | Per sprint |
| Cycle time delta | Percentage change in commit-to-deploy time vs. baseline | -10-20% | Per sprint |
| AI-assisted PR ratio | Percentage of PRs containing AI-assisted code | Informational (no target) | Per sprint |
| PR review time delta | Change in average review time for AI-assisted PRs vs. baseline | No degradation | Per sprint |
| Rework rate | Percentage of PRs requiring revision after initial review | Baseline or better | Per sprint |

### Quality and Security

| KPI | Definition | Target | Collection Frequency |
|---|---|---|---|
| Defect density delta | Change in defects/1,000 LOC vs. baseline | No increase | Per release |
| AI-attributed defects | Defects traced to AI-generated code (via attribution) | < 10% of total defects | Per release |
| Vulnerability density delta | Change in security findings/1,000 LOC vs. baseline | No increase | Per release |
| Gate pass rate | Percentage of PRs that pass all CI/CD governance gates on first attempt | > 85% | Weekly |
| Mean time to remediate | Average time from finding discovery to resolution | Baseline or better | Per release |

### Developer Experience

| KPI | Definition | Target | Collection Frequency |
|---|---|---|---|
| AI tool satisfaction | Developer satisfaction with AI tools (1-5 scale) | >= 3.5 | Monthly survey |
| Perceived productivity | Self-assessed productivity impact (1-5 scale) | >= 3.5 | Monthly survey |
| Governance friction | Perceived burden of governance processes (1-5 scale; lower is better) | `<= 2.5` | Monthly survey |
| Training effectiveness | Self-assessed preparedness for AI-assisted work | >= 4.0 | Post-training survey |
| Confidence trend | Developer confidence in AI tool usage over time | Increasing | Monthly survey |

## Organizational-Level KPIs

Organizational KPIs aggregate team-level data and add metrics that only become meaningful at scale.

### Adoption KPIs

| KPI | Definition | Target | Collection Frequency |
|---|---|---|---|
| Adoption rate | Percentage of engineering teams using AI tools under governance | Phase 2: 30-50%; Phase 3: 90%+ | Monthly |
| Active user rate | Percentage of provisioned developers actively using AI tools weekly | > 80% | Weekly |
| Training completion rate | Percentage of targeted developers who have completed training | 100% before tool access | Monthly |
| Governance compliance rate | Percentage of AI-assisted PRs with complete attribution and gate passage | > 95% | Weekly |

### Business Impact KPIs

| KPI | Definition | Target | Collection Frequency |
|---|---|---|---|
| Aggregate velocity improvement | Weighted average velocity improvement across all AI-assisted teams | +15% after 6 months | Monthly |
| Cost per developer hour | Total AI tool costs / total AI-assisted development hours | Decreasing trend | Monthly |
| Time to market impact | Change in average feature delivery time | -10-20% | Quarterly |
| Quality cost avoidance | Estimated cost of defects avoided based on quality improvements | Increasing trend | Quarterly |

### Risk KPIs

| KPI | Definition | Target | Collection Frequency |
|---|---|---|---|
| Security incident rate | AI-attributable security incidents per quarter | Zero Critical; < 2 High | Quarterly |
| Policy violation rate | Governance policy violations per 100 developers | Decreasing trend | Monthly |
| Exception rate | Active governance exceptions as percentage of teams | < 15% | Monthly |
| Risk register health | Percentage of identified risks with active mitigations | 100% | Monthly |

## Dashboard Design

### Dashboard Architecture

The KPI dashboard MUST be structured in three tiers:

**Tier 1: Executive Summary** — A single-page view showing organizational-level KPIs, trend lines, and RAG (Red/Amber/Green) status indicators. Designed for Steering Committee and executive consumption.

**Tier 2: Team Detail** — Drill-down views for each team showing team-level KPIs, sprint-over-sprint trends, and comparison to organizational averages. Designed for Engineering Managers and Tech Leads.

**Tier 3: Operational Detail** — Detailed views showing individual metric data, pipeline analytics, and audit logs. Designed for the Metrics Analyst, Platform Engineering, and Governance Lead.

### Dashboard Requirements

- **Automated data collection** — All quantitative metrics MUST be collected automatically from source systems (VCS, CI/CD, SAST, project management). Manual data entry is acceptable only for survey-based metrics.
- **Real-time where possible** — Pipeline and security metrics SHOULD update in near real-time. Sprint metrics update per sprint. Survey metrics update per collection cycle.
- **Historical trending** — All metrics MUST display historical trend data going back to the baseline period. Trend lines SHOULD include rolling averages to smooth natural variation.
- **Alerting** — The dashboard MUST integrate with alerting systems to notify relevant stakeholders when KPIs cross threshold boundaries.
- **Access control** — Dashboard access MUST be role-appropriate. Individual developer metrics MUST NOT be visible outside the developer's direct management chain.

### Recommended Tooling

| Tool Category | Examples | Notes |
|---|---|---|
| Dashboard platform | Grafana, Datadog, Tableau, Power BI | Choose based on existing organizational tooling |
| Data aggregation | Custom ETL scripts, Airflow, dbt | Aggregate data from multiple source systems |
| Survey platform | Google Forms, SurveyMonkey, Culture Amp | For developer experience metrics |
| Alerting | PagerDuty, Opsgenie, Slack webhooks | Integrate with existing incident management |

## Reporting Frequency

| Report | Frequency | Audience | Content |
|---|---|---|---|
| Sprint metrics snapshot | Per sprint (bi-weekly) | Team leads, Engineering Managers | Team-level KPIs for the sprint |
| Monthly adoption report | Monthly | Steering Committee | Organizational KPIs, adoption rates, risk status |
| Quarterly business impact report | Quarterly | Executive leadership | Business impact KPIs, ROI analysis, strategic recommendations |
| Annual transformation report | Annually | Board/C-suite | Full transformation progress, maturity assessment, forward plan |

## Trend Analysis

### Trend Analysis Requirements

The Metrics Analyst MUST perform the following trend analyses:

1. **Velocity trend analysis** — Track velocity improvement over time, segmented by team tenure with AI tools. Early-adopter teams SHOULD show stabilized improvement; newer teams SHOULD show a learning curve followed by improvement.

2. **Quality trend analysis** — Monitor defect density and vulnerability density trends. Any sustained upward trend (3+ consecutive data points) MUST trigger an investigation and be reported to the Steering Committee.

3. **Adoption curve analysis** — Track the adoption rate over time against the planned trajectory. Identify teams that are lagging and investigate root causes (training gaps, tool issues, resistance, project characteristics).

4. **Correlation analysis** — Identify correlations between AI usage patterns and outcomes. For example: Do teams that use the prompt library more frequently show better quality outcomes? Does higher training assessment scores correlate with fewer policy violations?

5. **Sentiment trend analysis** — Track developer satisfaction, perceived productivity, and governance friction over time. Declining satisfaction SHOULD trigger investigation before it impacts adoption rates.

### Anomaly Detection

The dashboard SHOULD be configured with anomaly detection for:
- Sudden drops in gate pass rates (may indicate tool issues or model changes)
- Spikes in vulnerability density (may indicate new AI failure patterns)
- Unusual usage patterns (may indicate policy violations or tool misuse)
- Divergence between teams (may indicate inconsistent governance application)

Expanded metrics and the KPI dashboard are the nervous system of the transformation. Without them, the organization is making decisions based on anecdote and intuition. With them, every phase gate decision, governance refinement, and resource allocation is grounded in evidence. The metrics infrastructure built here in Phase 2 carries directly into [Phase 3](/transformation/phase-3-enterprise-scale/) and supports the [Continuous Improvement](/transformation/phase-3-enterprise-scale/continuous-improvement/) and [Maturity Certification](/transformation/phase-3-enterprise-scale/maturity-certification/) processes.

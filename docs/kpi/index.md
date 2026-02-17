---
title: "KPI Framework"
sidebar_position: 1
description: "Measurable outcomes framework for AI-assisted engineering across productivity, risk, and financial dimensions."
---

# KPI Framework

The AEEF KPI Framework ensures that AI-assisted engineering delivers measurable, auditable outcomes. Without rigorous measurement, AI adoption remains a collection of tactical experiments rather than a strategic capability. With 92% of US developers using AI tools daily, the imperative is not whether to adopt AI but whether that adoption is generating value — and this framework provides the instrumentation to answer that question definitively. Benchmark claim evidence and confidence ratings are maintained in the [Research Evidence & Assumption Register](../about/research-evidence.md).

## Why Measurement Matters

The case for measurement is compelling and urgent:

- **AI co-authored code carries 1.7x more issues** and a **2.74x higher vulnerability rate** compared to human-only code. Without risk metrics, organizations cannot detect whether AI is introducing more risk than it mitigates.
- **Productivity gains from AI tools are frequently overstated** based on anecdotal developer feedback. Rigorous productivity metrics reveal whether perceived speed translates to actual throughput improvement.
- **AI tool licensing represents a significant investment** — enterprise AI coding assistants cost $20-40+ per developer per month. Without financial metrics, organizations cannot determine whether this investment generates positive ROI.

Organizations that fail to measure AI-assisted development outcomes operate on faith rather than evidence. The KPI Framework transforms AI adoption from an article of faith into a data-driven capability.

## Framework Architecture

The KPI Framework is organized across three complementary dimensions. Each dimension addresses a distinct stakeholder concern, and together they provide a comprehensive view of AI-assisted development effectiveness.

| Dimension | Primary Question | Key Stakeholders | Link |
|---|---|---|---|
| **[Productivity](./productivity-metrics.md)** | Is AI making us faster and more effective? | Engineering leadership, product management | [Detail](./productivity-metrics.md) |
| **[Risk](./risk-metrics.md)** | Is AI introducing unacceptable risk? | Security, compliance, legal, QA | [Detail](./risk-metrics.md) |
| **[Financial](./financial-metrics.md)** | Is AI delivering positive business value? | CFO, VP Engineering, procurement | [Detail](./financial-metrics.md) |

:::info Balanced Measurement
No single dimension is sufficient on its own. An organization that shows productivity gains but ignores risk metrics may be trading speed for security. An organization that tracks risk but not productivity cannot demonstrate value. An organization that measures both but not financial impact cannot justify continued investment. All three dimensions MUST be measured concurrently.
:::

## Summary of Key Metrics

The following table provides a high-level summary of all core KPIs. Detailed definitions, measurement methods, targets, and examples are provided in each dimension's dedicated page.

### Productivity Metrics Summary

| KPI | Definition | Target (Level 3) | Target (Level 5) |
|---|---|---|---|
| Idea-to-Prototype Time | Elapsed time from concept approval to working prototype | 30% reduction from baseline | 50% reduction from baseline |
| AI-Assisted Commit Ratio | Percentage of commits involving AI assistance | >= 40% | >= 75% |
| Feature Throughput per Engineer | Features delivered per engineer per sprint | 20% improvement from baseline | 40% improvement from baseline |
| Code Review Cycle Time | Elapsed time from PR creation to merge | 25% reduction from baseline | 50% reduction from baseline |
| Developer Experience Score | Developer satisfaction with AI tools and workflows | >= 3.5 / 5.0 | >= 4.5 / 5.0 |

### Risk Metrics Summary

| KPI | Definition | Target (Level 3) | Target (Level 5) |
|---|---|---|---|
| AI-Related Incident Rate | Production incidents attributed to AI-generated code per quarter | < 5 per quarter | < 1 per quarter |
| Security Findings Rate | AI-specific vulnerabilities per 1,000 lines of AI-assisted code | <= 2.0x human baseline | <= 1.0x human baseline |
| Rework Percentage | Percentage of AI-assisted code requiring revision within 30 days | <= 20% | <= 8% |
| Technical Debt Ratio | AI-attributed technical debt as a proportion of total backlog | <= 15% of backlog | <= 5% of backlog |

### Financial Metrics Summary

| KPI | Definition | Target (Level 3) | Target (Level 5) |
|---|---|---|---|
| Cost per Feature | Average fully-loaded cost to deliver a feature | Baseline established | >= 25% reduction |
| Headcount Avoidance Ratio | Work capacity gained without proportional headcount increase | Measurable | >= 20% effective capacity gain |
| Outsourcing Reduction | Reduction in external development spend attributable to AI | Baseline established | >= 30% reduction |
| Tool Licensing Cost Ratio | AI tool costs as a percentage of engineering budget | <= 3% of engineering budget | <= 2% with higher ROI |
| Engineering ROI | Net value generated per dollar invested in AI tooling | >= 2:1 | >= 5:1 |

## Implementation Guidance

### Step 1: Establish Baselines

Before setting targets, organizations MUST establish baseline measurements for each KPI. Baselines SHOULD be calculated from at least three months of pre-AI or current-state data. For organizations already using AI tools, the baseline SHOULD capture the current unoptimized state before governance improvements are applied.

:::warning Baseline Integrity
Baselines MUST be established before implementing process changes. Retroactively constructing baselines introduces bias. If historical data is unavailable, organizations SHOULD run a 90-day measurement period before setting improvement targets.
:::

### Step 2: Set Maturity-Appropriate Targets

KPI targets MUST be aligned with the organization's current and target [maturity level](../maturity/index.md). Setting Level 5 targets for a Level 2 organization creates unrealistic expectations and undermines confidence in the measurement program.

| Maturity Level | Measurement Expectation |
|---|---|
| [Level 1](../maturity/level-1-uncontrolled.md) | No measurement — establishing measurement capability is part of the transition to Level 2 |
| [Level 2](../maturity/level-2-exploratory.md) | Basic adoption metrics; productivity measured anecdotally |
| [Level 3](../maturity/level-3-defined.md) | All core KPIs defined, baselines established, targets set, reported monthly |
| [Level 4](../maturity/level-4-managed.md) | Automated data collection, integrated dashboards, trend analysis, management action loop |
| [Level 5](../maturity/level-5-ai-first.md) | Predictive analytics, anomaly detection, business outcome correlation, continuous experimentation |

### Step 3: Automate Data Collection

Manual data collection is error-prone, expensive, and unsustainable. Organizations SHOULD prioritize automating KPI data collection as early as possible.

Recommended data sources by metric type:

| Data Source | Metrics Supported |
|---|---|
| Source control system (Git) | Commit ratios, code provenance, review cycle time |
| CI/CD pipeline | Build success rates, deployment frequency, scanning results |
| Project management tools | Feature throughput, cycle time, rework tracking |
| SAST/DAST tools | Security findings, vulnerability rates |
| AI tool telemetry | Usage frequency, acceptance rates, tool performance |
| Developer surveys | Experience scores, satisfaction, qualitative feedback |
| Financial systems | Cost per feature, licensing costs, headcount data |

### Step 4: Report and Act

Data without action is waste. The KPI Framework MUST be connected to decision-making processes:

1. **Operational level** (weekly) — Team leads review KPIs for their teams and address immediate issues
2. **Management level** (monthly) — Engineering leadership reviews cross-team KPIs and makes resource allocation decisions
3. **Governance level** (quarterly) — The AI Governance Board reviews all three dimensions and makes strategic decisions about policy, tooling, and investment
4. **Executive level** (quarterly) — C-suite receives a consolidated report linking AI engineering KPIs to business outcomes

### Step 5: Iterate and Refine

The KPI Framework is not static. Organizations SHOULD review and refine their metrics on a semi-annual basis:

- **Add metrics** when new risks or opportunities emerge (e.g., new AI tool capabilities, new regulatory requirements)
- **Retire metrics** that no longer provide actionable insight
- **Adjust targets** based on achieved performance — targets SHOULD always be ambitious but achievable
- **Improve measurement methods** as automation capabilities mature

## Anti-Patterns to Avoid

| Anti-Pattern | Description | Remedy |
|---|---|---|
| **Metric Overload** | Tracking too many KPIs dilutes focus and creates reporting fatigue | Limit to 3-5 KPIs per dimension; add metrics only when they will drive action |
| **Vanity Metrics** | Measuring adoption rate without quality or risk creates false confidence | Always pair productivity metrics with risk metrics |
| **Lagging-Only Measurement** | Tracking only outcomes (incidents, defects) rather than leading indicators (training completion, review depth) | Include leading indicators that predict future outcomes |
| **Comparison Without Context** | Comparing KPIs across teams without accounting for technology stack, domain complexity, or team maturity | Normalize comparisons using complexity and context factors |
| **Target Rigidity** | Setting targets once and never updating them as conditions change | Review and adjust targets semi-annually |

## Cross-References

- [Maturity Model](../maturity/index.md) — KPI targets are aligned with maturity levels
- [Productivity Metrics](./productivity-metrics.md) — detailed definitions and measurement methods
- [Risk Metrics](./risk-metrics.md) — detailed definitions and severity-based targets
- [Financial Metrics](./financial-metrics.md) — detailed definitions and ROI calculation model
- [Glossary](../about/glossary.md) — definitions of measurement terms used in this framework

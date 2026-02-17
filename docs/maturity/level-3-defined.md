---
title: "Level 3: Defined"
sidebar_position: 4
description: "Characteristics and transition guidance for Level 3 maturity — defined AI workflows."
---

# Level 3: Defined

Level 3 represents the critical inflection point in the AEEF Maturity Model. At this level, AI-assisted development transitions from an experiment to a **governed organizational capability**. Formal standards are documented and enforced, a standardized toolchain is deployed across all engineering teams, mandatory training ensures consistent skill levels, and security scanning addresses AI-specific risks. Level 3 is the **minimum acceptable maturity level** for enterprises operating in regulated industries or handling sensitive data.

:::info The Governance Threshold
Level 3 is where organizations cross the threshold from reactive risk management to proactive governance. Below Level 3, AI adoption creates more risk than it mitigates. At Level 3 and above, the organization has the controls necessary to capture AI's productivity benefits while managing its risks systematically.
:::

## Characteristics of Level 3 Organizations

### Governance
- Comprehensive AI-assisted development standards are published, versioned, and accessible to all staff
- An AI Governance Board operates with cross-functional membership (engineering, security, legal, product, compliance)
- Governance gates are embedded in the SDLC — AI-assisted work is subject to defined checkpoints at design, code review, and deployment
- Data classification and acceptable use policies are enforced through technical controls, not just written policy
- Code provenance tracking is operational — AI-assisted code is distinguishable from human-only code in the repository
- Regular policy review cadence (at least quarterly) ensures standards evolve with the technology landscape

### Tooling
- A standardized AI toolchain is deployed organization-wide via managed IDE configurations
- Enterprise licensing eliminates all personal AI tool accounts
- AI tools are integrated with the developer environment but not yet with CI/CD pipelines in an automated fashion
- Tool configuration standards define approved models, context boundaries, and data handling rules
- A change management process governs tool updates, model version changes, and new tool evaluations

### Security
- AI-specific scanning rules are integrated into SAST and DAST pipelines
- An AI-specific threat model has been published covering prompt injection, data exfiltration, model manipulation, and supply chain risks
- Security review criteria specifically address AI-generated code patterns (e.g., hardcoded secrets, insecure defaults, vulnerable dependency suggestions)
- Vulnerability findings are tracked with an AI-attribution field to measure AI-specific risk rates
- Penetration testing scope includes AI-related attack vectors

### Training
- A formal, role-based training curriculum covers all engineering staff
- Core modules include: prompt engineering, [human hardening](../about/glossary.md), AI code review, security awareness, and ethical considerations
- Training completion is tracked and reported to management
- New hire onboarding includes AI-assisted development orientation
- Training materials are updated at least semi-annually

### Metrics
- The [KPI Framework](../kpi/index.md) is operational with defined metrics across productivity, risk, and financial dimensions
- Baseline measurements have been established for all core KPIs
- Metrics are reported to the AI Governance Board on a regular cadence (monthly RECOMMENDED)
- Targets have been set for each KPI, aligned with organizational objectives
- Data collection is partially automated but may still require manual aggregation

### Culture
- AI-assisted development is viewed as an organizational standard, not an individual choice
- Cross-team knowledge sharing occurs through formal channels (communities of practice, internal tech talks, documented patterns)
- Engineering leadership actively promotes best practices and recognizes AI skill development
- Resistance to AI adoption has been addressed through training, communication, and demonstrated results
- A feedback loop exists between developers and the governance team to refine standards based on practical experience

## Assessment Checklist

Organizations MUST evaluate themselves against the following checklist. Achieving **ten or more** items confirms Level 3 status.

- [ ] Comprehensive AI-assisted development standards are published and version-controlled
- [ ] An AI Governance Board meets regularly with cross-functional representation
- [ ] Governance gates exist at defined SDLC checkpoints for AI-assisted work
- [ ] A standardized AI toolchain is deployed to all engineering teams
- [ ] No personal AI tool accounts are in use for production work
- [ ] Data classification and acceptable use are enforced through technical controls
- [ ] Code provenance tracking is operational in the source control system
- [ ] AI-specific scanning rules are active in SAST/DAST pipelines
- [ ] An AI-specific threat model has been published and reviewed
- [ ] A formal, role-based training curriculum has been delivered to all engineering staff
- [ ] Training completion rates are tracked and reported
- [ ] The [KPI Framework](../kpi/index.md) is operational with baseline measurements established
- [ ] KPI targets are defined and reported to the governance board regularly
- [ ] Human review is mandatory for all AI-assisted code and enforced via process controls
- [ ] A feedback mechanism allows developers to propose improvements to AI standards

## Key Performance Thresholds at Level 3

Organizations at Level 3 SHOULD be achieving the following KPI thresholds. Failure to meet these thresholds indicates that governance implementation may be superficial.

| KPI | Level 3 Threshold | Measurement Source |
|---|---|---|
| AI tool adoption rate | >= 60% of engineering staff | License usage data |
| Training completion | >= 90% of engineering staff | LMS records |
| Code review compliance | 100% of AI-assisted PRs reviewed by human | PR analytics |
| AI-specific security scanning | 100% of repositories | CI/CD pipeline logs |
| Code provenance coverage | >= 80% of commits accurately tagged | Source control metadata |
| KPI reporting cadence | Monthly or better | Governance board minutes |
| Policy acknowledgment | 100% of engineering staff | HR/compliance records |

## Common Challenges at Level 3

### Governance Fatigue
Teams may experience the introduction of governance gates as bureaucratic overhead, particularly if gates are poorly designed or create excessive friction. Governance processes MUST be designed to add value (catching real issues) rather than just adding steps.

:::warning Avoiding Governance Theater
A governance gate that approves 100% of submissions without modification is not providing value — it is governance theater. Level 3 organizations SHOULD track gate rejection and revision rates. A healthy gate rejects or requests changes on 10-20% of submissions.
:::

### Tool Configuration Drift
Even with a standardized toolchain, individual developers or teams may customize AI tool configurations in ways that undermine organizational standards (e.g., disabling safety filters, using unapproved models). Configuration management SHOULD include automated compliance verification.

### Metric Gaming
When KPIs are tied to performance evaluation, teams may optimize for metrics rather than outcomes. For example, artificially inflating AI-assisted commit ratios by tagging human code as AI-assisted, or splitting features to improve throughput numbers. Metric validation and cross-referencing across KPI dimensions mitigate this risk.

### Training Decay
Training delivered once becomes stale quickly in the fast-moving AI landscape. Organizations MUST plan for ongoing skill development, not just initial training delivery. Refresher training at six-month intervals is RECOMMENDED.

## Transition Roadmap: Level 3 to Level 4

The transition from Level 3 to Level 4 shifts the focus from **establishing** governance to **measuring and optimizing** it. At Level 4, governance is not just documented — it is data-driven, automated, and continuously refined. The typical timeline is **4-6 months**.

### Workstream 1: Automated Governance (Months 1-3)

1. **Integrate governance gates into CI/CD pipelines** so that policy compliance is verified automatically rather than through manual review
2. **Implement risk-tiered review processes** — high-risk code (security-critical, data-handling, infrastructure) receives enhanced review while low-risk code follows a streamlined path
3. **Automate code provenance tracking** using commit hooks, IDE plugins, or AI tool telemetry
4. **Deploy policy-as-code** for AI tool configuration, ensuring that tool settings are managed through version-controlled configuration files rather than manual setup

### Workstream 2: Advanced Analytics (Months 2-4)

1. **Build integrated KPI dashboards** that aggregate productivity, risk, and financial metrics into a unified view
2. **Implement automated data collection** for all KPIs, eliminating manual aggregation
3. **Establish statistical baselines** with trend analysis capability — not just point-in-time measurements but trajectory tracking
4. **Create management review processes** that translate KPI data into actionable decisions (e.g., resource allocation, tool investment, training priorities)

### Workstream 3: Security Maturation (Months 1-4)

1. **Implement risk-tiered security scanning** — different scanning intensity based on code criticality and AI involvement level
2. **Integrate AI-specific findings into vulnerability management workflows** with SLA-driven remediation timelines
3. **Conduct red team exercises** targeting AI-specific attack vectors
4. **Establish a security champion program** embedding AI security expertise within each development team

### Workstream 4: Developer Certification (Months 3-5)

1. **Design a multi-tier certification program** for AI-assisted development (e.g., Foundation, Practitioner, Expert)
2. **Map certification levels to role requirements** — define which roles MUST hold which certification tier
3. **Develop assessment mechanisms** that verify practical competence, not just knowledge retention
4. **Integrate certification status into staffing and project assignment processes**

### Workstream 5: Financial Measurement (Months 3-6)

1. **Implement cost-per-feature tracking** with the ability to compare AI-assisted and traditional development costs
2. **Establish headcount avoidance measurement** linking AI productivity gains to hiring plan adjustments
3. **Track AI tool licensing ROI** by correlating tool costs with measured productivity improvements
4. **Develop executive-facing financial dashboards** as defined in the [Financial Metrics](../kpi/financial-metrics.md) framework

### Prerequisites for Level 4 Certification

The organization MUST satisfy **all** of the following before claiming Level 4 maturity:

- [ ] Governance gates are automated within CI/CD pipelines
- [ ] Risk-tiered review processes route AI-assisted code based on criticality
- [ ] Integrated KPI dashboards are operational with automated data collection
- [ ] Management reviews KPI data on a defined cadence and takes documented actions
- [ ] AI-specific security scanning follows risk-tiered intensity levels
- [ ] A developer certification program is operational with tracked completion
- [ ] Financial metrics demonstrate measurable ROI from AI-assisted development
- [ ] All core KPIs show sustained positive trends over at least two consecutive quarters

## Related Resources

- [Maturity Model Overview](./index.md) — comparison across all five levels
- [Level 2: Exploratory](./level-2-exploratory.md) — the level this organization has transitioned from
- [Level 4: Managed](./level-4-managed.md) — the target state for this transition
- [KPI Framework](../kpi/index.md) — the metrics framework that must be fully operational at Level 3
- [Risk Metrics](../kpi/risk-metrics.md) — risk KPIs that Level 3 organizations must actively track

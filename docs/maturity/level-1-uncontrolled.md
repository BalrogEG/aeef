---
title: "Level 1: Uncontrolled"
sidebar_position: 2
description: "Characteristics and transition guidance for Level 1 maturity — uncontrolled AI usage."
---

# Level 1: Uncontrolled

Level 1 represents the most common — and most dangerous — state of AI adoption in enterprise software engineering. At this level, AI tools are used without governance, visibility, or organizational standards. Individual developers adopt and experiment with AI coding assistants on their own initiative, creating an environment of unmanaged risk that leadership may not even be aware of.

:::danger Critical Risk Level
Organizations operating at Level 1 are exposed to the full spectrum of AI-assisted development risks: intellectual property leakage, security vulnerabilities at 2.74x the baseline rate, license compliance violations, and ungoverned code provenance. Transition to Level 2 SHOULD be treated as an urgent priority.
:::

## Characteristics of Level 1 Organizations

Level 1 organizations exhibit a consistent pattern of characteristics across governance, tooling, culture, and risk management.

### Governance
- No formal policy exists regarding AI tool usage in software development
- No approved or prohibited tool list has been established
- No data classification rules govern what code or data may be shared with AI services
- Legal and IP implications of AI-generated code have not been assessed
- No one in the organization has explicit accountability for AI engineering governance

### Tooling
- Developers select and configure AI tools individually
- Personal accounts and API keys are used rather than enterprise licenses
- Multiple competing tools are in use across teams with no standardization
- No integration exists between AI tools and the CI/CD pipeline
- Shadow IT is prevalent — management may not know which tools are in use

### Security
- No AI-specific security scanning is performed on generated code
- Vulnerability rates in AI-assisted code are unknown and unmeasured
- No threat model includes AI-specific attack vectors (prompt injection, training data poisoning, model manipulation)
- Code provenance is not tracked — it is impossible to distinguish AI-generated from human-written code

### Culture
- AI tool usage is driven by individual curiosity rather than organizational strategy
- No training or onboarding exists for AI-assisted development practices
- "Vibe coding" — accepting AI suggestions without critical review — is common
- Developers may be reluctant to disclose AI usage due to stigma or policy ambiguity

### Metrics
- No KPIs track AI-assisted development outcomes
- Productivity impact of AI tools is anecdotal, not measured
- Risk impact of AI tools is unknown
- No baseline data exists for comparison

## Warning Signs and Risk Indicators

The following indicators SHOULD trigger an immediate assessment if observed. Any single indicator confirms Level 1 status:

| Risk Indicator | Severity | Observable Signal |
|---|---|---|
| Developers using personal ChatGPT/Copilot accounts for production code | **Critical** | Billing records, browser history, or self-reporting in surveys |
| Proprietary source code pasted into public AI services | **Critical** | DLP alerts, network monitoring, or code appearing in AI training data |
| AI-generated code deployed without any human review | **High** | Commit patterns showing large blocks of unfamiliar code, no PR reviews |
| No organizational policy on AI tool usage | **High** | Policy repository search returns no results |
| Security vulnerabilities traced to AI-generated patterns | **High** | SAST/DAST findings correlated with AI adoption timeline |
| Legal has not assessed AI code ownership implications | **Medium** | No legal memo or policy on file |
| Developers cannot identify which code in production is AI-generated | **Medium** | No tagging, labeling, or provenance tracking in place |
| Multiple AI tools in use with no evaluation or comparison | **Medium** | Survey reveals 3+ different tools across teams |
| No training provided on effective AI-assisted development | **Low** | Training catalog contains no AI-related courses |
| Management unaware of the extent of AI tool adoption | **Low** | Leadership survey shows disconnect from developer survey |

## Assessment Checklist

Organizations MUST evaluate themselves against the following checklist. If **seven or more** items are checked, the organization is confirmed at Level 1. If **four to six** items are checked, the organization is in a transitional state between Level 1 and Level 2.

- [ ] There is no written policy governing AI tool usage in software development
- [ ] Developers use personal accounts for AI coding assistants (not enterprise-licensed)
- [ ] No approved list of AI tools exists; developers choose their own
- [ ] Proprietary code or internal data has been (or could be) shared with external AI services without data classification review
- [ ] No security scanning specifically targets AI-generated code patterns
- [ ] Code reviews do not include any AI-specific review criteria
- [ ] The organization cannot determine what percentage of its codebase was AI-assisted
- [ ] No training on AI-assisted development has been provided to engineering staff
- [ ] Legal counsel has not reviewed the intellectual property implications of AI-generated code
- [ ] No metrics or KPIs track the productivity or risk impact of AI tool usage
- [ ] No individual or team has been assigned accountability for AI engineering governance
- [ ] AI tools are not integrated into the CI/CD pipeline or SDLC workflow
- [ ] Incident response procedures do not include AI-specific scenarios
- [ ] Third-party/vendor code reviews do not assess AI tool usage by contractors

:::info Self-Assessment Integrity
This checklist SHOULD be completed independently by multiple stakeholders (engineering, security, legal, management) and results compared. Discrepancies between groups often reveal the most critical gaps.
:::

## Risks of Remaining at Level 1

Organizations that remain at Level 1 face compounding risks:

### Intellectual Property Exposure
Code entered into public AI services may be used to train future models, potentially exposing proprietary algorithms, business logic, or trade secrets. Once shared, this data cannot be recalled.

### Security Vulnerability Accumulation
With AI co-authored code showing a 2.74x higher vulnerability rate, unmonitored AI usage creates a growing attack surface. Without AI-specific scanning, these vulnerabilities accumulate undetected in the codebase.

### Regulatory Non-Compliance
Emerging regulations (EU AI Act, US Executive Order on AI, industry-specific mandates) increasingly require organizations to demonstrate governance over AI systems. Level 1 organizations cannot satisfy these requirements.

### Talent Risk
Without standards, experienced developers may resist AI adoption while junior developers over-rely on it. Both extremes create quality and retention risks.

### Technical Debt Acceleration
AI-generated code that passes superficial review but lacks architectural coherence creates technical debt at an accelerated rate. This debt compounds as more AI-generated code enters the codebase without [human hardening](../about/glossary.md).

## Transition Roadmap: Level 1 to Level 2

The transition from Level 1 to Level 2 is the most critical transition in the maturity model. It establishes the foundation upon which all subsequent advancement depends. The typical timeline is **4-8 weeks** for the initial policy and awareness phase, with ongoing refinement thereafter.

### Phase 1: Discovery and Assessment (Weeks 1-2)

1. **Conduct an AI usage survey** across all engineering teams to establish baseline awareness of tools in use, frequency of use, and types of tasks assisted
2. **Inventory all AI tools** currently in use, including free tiers, browser extensions, and IDE plugins
3. **Engage legal counsel** to begin an initial assessment of IP and licensing implications
4. **Brief executive leadership** on the current state and associated risks

### Phase 2: Initial Policy (Weeks 3-4)

1. **Draft an interim AI usage policy** covering at minimum:
   - Data classification rules (what MAY and MUST NOT be shared with AI services)
   - Approved tools for initial use (recommend limiting to 1-2 vetted options)
   - Mandatory human review requirements for all AI-assisted code
   - Incident reporting procedures for suspected data leakage
2. **Communicate the policy** to all engineering staff with mandatory acknowledgment
3. **Designate an AI governance owner** — an individual or team accountable for policy enforcement and evolution

### Phase 3: Pilot Establishment (Weeks 5-8)

1. **Select 2-3 pilot teams** representing different technology stacks and risk profiles
2. **Provision enterprise licenses** for approved AI tools, retiring personal accounts
3. **Establish basic monitoring** — at minimum, track which teams are using which tools and at what frequency
4. **Begin collecting baseline metrics** as defined in the [KPI Framework](../kpi/index.md)
5. **Schedule monthly review cadence** for the pilot teams to share learnings

### Prerequisites for Level 2 Certification

The organization MUST satisfy **all** of the following before claiming Level 2 maturity:

- [ ] A written AI usage policy is published and acknowledged by all engineering staff
- [ ] At least one AI tool has been formally evaluated and approved for use
- [ ] An AI governance owner has been designated with clear accountability
- [ ] Legal has completed an initial IP and licensing assessment
- [ ] At least one pilot team is operating under the new policy
- [ ] Basic usage monitoring is in place (tools, teams, frequency)
- [ ] A data classification rule governs what may be shared with AI services

:::tip Quick Win
The single highest-impact action for a Level 1 organization is establishing a data classification policy for AI tools. This addresses the most critical risk (IP leakage) and can typically be accomplished within one week by adapting existing data handling policies.
:::

## Related Resources

- [Maturity Model Overview](./index.md) — comparison across all five levels
- [Level 2: Exploratory](./level-2-exploratory.md) — the target state for this transition
- [KPI Framework](../kpi/index.md) — metrics to measure transition progress
- [Risk Metrics](../kpi/risk-metrics.md) — risk indicators that Level 1 organizations must begin tracking
- [Glossary](../about/glossary.md) — definitions of key terms used in this document

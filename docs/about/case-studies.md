---
title: "Case Studies"
sidebar_position: 6
description: "Real-world adoption scenarios showing how different organizations applied AEEF standards."
---

# Case Studies

These case studies illustrate how organizations of different sizes and stages applied AEEF standards. Each case follows a consistent format: starting state, approach, results, and lessons learned.

:::info Composite Scenarios
These cases are composite scenarios based on common adoption patterns observed across multiple organizations. They represent realistic, representative situations rather than specific named companies.
:::

---

## Case Study 1: SaaS Startup (8 Engineers)

### Background

| Attribute | Detail |
|---|---|
| **Company type** | B2B SaaS — project management tool |
| **Team size** | 8 engineers (5 backend, 2 frontend, 1 DevOps) |
| **Stack** | TypeScript, Next.js, PostgreSQL, Vercel |
| **AI adoption state** | Level 1 (Uncontrolled) — 6 of 8 developers using AI tools individually |
| **Trigger** | Enterprise prospect required a "vendor AI usage policy" during security review |

### Starting State

- Developers used a mix of Copilot (3), Cursor (2), and ChatGPT web (1)
- No written AI policy, no PR metadata, no security scanning
- One developer had accidentally pasted a database connection string into ChatGPT three months earlier (discovered during the security review)
- No tracking of which code was AI-generated
- Maturity assessment: **Level 1 — Uncontrolled**

### Approach: 2-Week Sprint

The CTO used the [Startup Quick-Start](/pillars/startup-quick-start) as the playbook.

**Week 1:**
| Day | Action | Time | Owner |
|-----|--------|------|-------|
| Mon | Standardized on Cursor Pro ($20/dev/month) for all developers | 1hr | CTO |
| Mon | Created `.cursorrules` from [Starter Config](/production/tutorials/starter-configs) template | 30min | CTO |
| Tue | Installed [CI/CD Pipeline Starter](/production/tutorials/ci-cd-pipeline-starter) (Semgrep + Trivy + npm audit) | 45min | DevOps |
| Tue | Added [PR template](/production/tutorials/starter-configs#githubpull_request_templatemd--pr-template-with-ai-metadata) with AI disclosure fields | 10min | DevOps |
| Wed | Enabled GitHub branch protection (1 review required, CI must pass) | 15min | CTO |
| Wed | Rotated the leaked database credentials from the ChatGPT incident | 30min | DevOps |
| Thu | Customized the [one-page Acceptable Use Policy](/production/tutorials/policy-templates#acceptable-use-policy) | 45min | CTO |
| Fri | Held a 30-minute team meeting to present the policy and new workflow | 30min | CTO |

**Week 2:**
| Day | Action | Time | Owner |
|-----|--------|------|-------|
| Mon-Thu | Team worked under new standards; CTO monitored PRs for compliance | Ongoing | All |
| Fri | First AI retro — discussed friction points and adjusted `.cursorrules` | 30min | All |

### Results After 30 Days

| Metric | Before | After |
|---|---|---|
| **Written AI policy** | None | 1-page policy, signed by all developers |
| **PR AI disclosure rate** | 0% | 92% (one developer kept forgetting, resolved by week 3) |
| **Security scans in CI** | None | 100% of PRs scanned (Semgrep + Trivy) |
| **Security findings caught pre-merge** | Unknown | 3 Critical, 7 High findings caught in first month |
| **Enterprise prospect outcome** | Blocked | Passed security review; contract signed |
| **Team satisfaction** | N/A | 4.1/5.0 ("more structured but not burdensome") |
| **Maturity level** | Level 1 | Level 2 (Exploratory) |

### Cost

| Item | Monthly Cost |
|---|---|
| Cursor Pro (8 devs x $20) | $160 |
| Semgrep (free tier — under 10 devs) | $0 |
| GitHub Actions (within free tier) | $0 |
| **Total** | **$160/month** |

### Lessons Learned

1. **The PR template was the highest-impact change** — it forced developers to think about AI usage for every PR, even when they chose "AI-Usage: none"
2. **`.cursorrules` dramatically improved AI output quality** — developers reported fewer "fight the AI" moments after adding project context
3. **Security scanning caught real problems** — 3 critical findings in the first month were AI-generated code with hardcoded error messages that leaked internal paths
4. **One page is enough** — the team appreciated that the policy was short and actionable, not a 30-page document

---

## Case Study 2: Mid-Size Fintech (45 Engineers)

### Background

| Attribute | Detail |
|---|---|
| **Company type** | B2B fintech — payment processing platform |
| **Team size** | 45 engineers across 6 teams |
| **Stack** | Go (backend), React/TypeScript (frontend), PostgreSQL, Kubernetes |
| **AI adoption state** | Level 1-2 (mixed) — some teams governed, most not |
| **Trigger** | SOC 2 Type II audit finding: "no documented controls for AI-assisted code generation" |

### Starting State

- 3 of 6 teams actively using Copilot, 1 team using Cursor
- 2 teams banned AI tools entirely (compliance concern)
- No organization-wide AI policy
- CI/CD existed but had no AI-specific quality gates
- SAST existed (Snyk) but didn't target AI-specific patterns
- SOC 2 auditors flagged the gap as a finding requiring remediation
- Maturity assessment: **Level 1.5 (between Uncontrolled and Exploratory)**

### Approach: 90-Day Transformation (Modified Phase 1-2)

The VP of Engineering adapted AEEF's [Transformation Track](/transformation/) with a compressed timeline, skipping the full enterprise governance structure in favor of a leaner approach.

**Month 1: Foundation**
- Formed a 3-person "AI Standards Working Group" (senior engineer from each tech stack + security engineer)
- Ran the [Self-Assessment Checklist](/pillars/maturity/level-1-uncontrolled#assessment-checklist) — scored 9 of 14 items, confirming Level 1
- Drafted organization-wide AI Acceptable Use Policy (adapted from [policy template](/production/tutorials/policy-templates))
- Drafted Data Classification Policy for AI tools (critical for fintech — payment data must never enter AI tools)
- Standardized on two approved tools: GitHub Copilot Business (all teams) + Claude Code (senior engineers)
- Deployed GitHub Copilot Business with content exclusion for `pkg/payment/`, `pkg/auth/`, and `pkg/crypto/`

**Month 2: CI/CD Integration**
- Added Semgrep to all CI pipelines with custom rule for AI-common Go patterns (unchecked errors, SQL interpolation)
- Deployed PR template with AI metadata fields across all 12 repositories
- Established branch protection requiring: 2 reviews, CI pass, AI disclosure
- Created team-specific `CLAUDE.md` and `.github/copilot-instructions.md` per repository
- Held training workshop (2 hours) for all 45 engineers covering AEEF basics and tool configuration
- Lifted the AI ban for the 2 holdout teams (they now had governance)

**Month 3: Measurement and Refinement**
- Deployed a metrics dashboard tracking: AI-assisted PR ratio, defect rate by AI usage, security findings trend
- Conducted first monthly AI standards review
- Prepared SOC 2 remediation evidence package documenting all controls
- Ran second maturity assessment — scored 3 of 14 Level 1 items (down from 9)

### Results After 90 Days

| Metric | Before | After |
|---|---|---|
| **Teams using AI tools** | 4 of 6 (ungoverned) | 6 of 6 (governed) |
| **Written AI policies** | None | 3 policies (Acceptable Use, Data Classification, Incident Response) |
| **PR AI disclosure rate** | 0% | 97% |
| **Security scan coverage** | SAST only (Snyk) | SAST (Snyk + Semgrep) + dependency audit + secret scanning |
| **Critical findings pre-merge (monthly)** | ~2 (caught randomly) | ~8 (caught systematically) |
| **Escaped defects to production** | ~4/month | ~2/month |
| **SOC 2 finding status** | Open | Remediated with evidence package |
| **Developer velocity (story points)** | Baseline | +18% (measured after 60 days) |
| **Maturity level** | Level 1.5 | Level 2 (Exploratory), approaching Level 3 |

### Cost

| Item | Monthly Cost |
|---|---|
| GitHub Copilot Business (45 x $19) | $855 |
| Claude Code usage (~10 active users) | ~$300 |
| Semgrep Team (free tier — under 50 devs) | $0 |
| Working group time (3 people, ~20% for 3 months) | ~$30,000 (one-time, staff time) |
| **Ongoing monthly** | **~$1,155/month** |

### Lessons Learned

1. **The SOC 2 finding was a blessing** — it gave the VP of Engineering the executive mandate and urgency to drive adoption
2. **Lifting the AI ban increased team morale** — the two holdout teams were frustrated seeing peers use AI while they couldn't. Governance gave them permission.
3. **Custom Semgrep rules for Go were high-value** — AI-generated Go code frequently had unchecked errors and unsafe string formatting in SQL. Custom rules caught these patterns before review.
4. **Data classification was the hardest part** — in fintech, deciding exactly which code directories contain "payment-adjacent" logic required careful analysis
5. **90 days was tight but achievable** — compressing the full 6-month transformation to 90 days worked because the company already had CI/CD, code review culture, and security tooling. They only needed the AI-specific layer.

---

## Case Study 3: Enterprise Consulting Firm (200+ Engineers)

### Background

| Attribute | Detail |
|---|---|
| **Company type** | Technology consulting — builds custom software for enterprise clients |
| **Team size** | 200+ engineers across 20+ project teams |
| **Stack** | Multi-stack: Java/Spring, .NET, React, Python, Go |
| **AI adoption state** | Level 1 (Uncontrolled) — widespread unsanctioned use |
| **Trigger** | Client contract required disclosure of AI tool usage in delivered code |

### Starting State

- Internal survey revealed 78% of engineers using AI tools without any governance
- 15+ different AI tools in use across teams
- Client contracts increasingly including AI disclosure clauses
- Legal counsel flagged IP ownership concerns for AI-generated client deliverables
- No training, no policy, no measurement
- Maturity assessment: **Level 1 — Uncontrolled**

### Approach: Full AEEF Transformation (6 Months)

This organization followed the [Transformation Track](/transformation/) more closely due to scale and client obligations.

**Phase 1 (Weeks 1-4): Foundation**
- Executive sponsor: CTO with direct board reporting
- Formed Steering Committee (CTO, CISO, General Counsel, VP Delivery)
- Legal completed IP assessment — determined AI-generated code ownership required client-by-client policy
- Standardized on two tools: GitHub Copilot Enterprise + Claude Code
- Created 3 pilot teams (Java, React, Python — one per major stack)
- Developed training curriculum covering AEEF standards + client obligation awareness
- Established baseline metrics across pilot teams

**Phase 2 (Months 1-3): Structured Expansion**
- Rolled out to 12 of 20+ teams
- Created stack-specific `.cursorrules` and `CLAUDE.md` templates
- Deployed uniform CI pipeline with Semgrep, Trivy, and dependency scanning
- Created client-facing "AI Usage Disclosure Template" for project deliverables
- Established Community of Practice with bi-weekly knowledge sharing sessions
- Implemented PR metadata with additional field: `Client-AI-Disclosure-Required: yes/no`

**Phase 3 (Months 3-6): Enterprise Scale**
- Full rollout to all 20+ teams
- Created client-specific AI policies (some clients approved, some restricted, two prohibited)
- Achieved Level 3 maturity certification (internal)
- Published "AI-Assisted Development Standards" as part of the company's quality management system
- Integrated AI governance into project kickoff checklist and SOW templates

### Results After 6 Months

| Metric | Before | After |
|---|---|---|
| **Governed AI usage** | 0% | 100% of engineers under policy |
| **Approved tools** | 15+ unsanctioned | 2 standardized, governed |
| **Client AI disclosures** | None (contractual risk) | 100% of applicable projects |
| **Security findings caught pre-merge** | Unknown | ~40/month across all teams |
| **Developer velocity** | Baseline | +26% (measured across 15 teams) |
| **Client satisfaction (AI-related)** | 2 complaints about undisclosed AI | 0 complaints in months 4-6 |
| **Training completion** | 0% | 94% of all engineers |
| **Maturity level** | Level 1 | Level 3 (Defined) |

### Lessons Learned

1. **Client AI disclosure was the killer feature** — this alone justified the transformation investment because it protected client relationships and prevented contractual violations
2. **Multi-stack organizations need stack-specific templates** — a single `.cursorrules` file doesn't work when you have Java, .NET, and Python teams with different patterns
3. **The Community of Practice was the best scaling mechanism** — bi-weekly sessions where teams shared prompts and anti-patterns created rapid cross-pollination
4. **Legal should be involved from Day 1** — IP ownership for AI-generated code in client-work contexts is complex and requires early resolution
5. **6 months was realistic at this scale** — the phased approach prevented overwhelm and allowed each phase to build on proven results

---

## Choosing Your Path

| If You're Like... | Start With | Expected Timeline |
|---|---|---|
| **Case Study 1** (small startup, no governance) | [Startup Quick-Start](/pillars/startup-quick-start) | 1-2 weeks |
| **Case Study 2** (mid-size, some governance, compliance trigger) | [Apply-Ready Rollout Kit](/production/standards/apply-ready-rollout-kit) + [Phase 1](/transformation/phase-1-foundation/) | 60-90 days |
| **Case Study 3** (large org, multi-team, client obligations) | [Full Transformation Track](/transformation/) | 4-6 months |

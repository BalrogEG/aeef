---
title: "Startup Quick-Start Guide"
sidebar_position: 0
description: "Get your startup using AI-assisted development safely in one week — no enterprise budget required."
---

# Startup Quick-Start Guide

You have a small team, no governance committee, and you need to ship. This guide strips AEEF down to exactly what a startup needs to adopt AI-assisted development responsibly — today, not after six months of planning.

:::tip This Page Is Your Starting Point
If you have fewer than 20 engineers, start here — not at the [Transformation Track](/transformation/). You can grow into the full framework later.
:::

## Who This Is For

| Team Size | Read This | Then Go To |
|-----------|-----------|------------|
| **Solo founder** | Day-1 Checklist below | [Solo Developer Path](#solo-developer-5-things-today) |
| **2-5 engineers** | Day-1 Checklist + Week-1 Checklist | [Small Team Path](#small-team-2-5-engineers-11-things-this-week) |
| **6-20 engineers** | Full Quick-Start | [Growing Team Path](#growing-team-6-20-engineers-30-day-plan) |
| **20+ engineers** | You're enterprise-adjacent | [Transformation Track](/transformation/) |

## Your Startup Roles Mapped to AEEF

In a startup, one person wears many hats. Here's how AEEF's 11 enterprise roles map to a small team:

| AEEF Enterprise Role | In a Startup (2-5 people) | In a Startup (6-20 people) |
|---|---|---|
| CTO / VP Engineering | Founder or Tech Lead | CTO or Tech Lead |
| Security Engineer | Same person as Tech Lead | Senior engineer (part-time) |
| Platform Engineer | Same person as any developer | DevOps-inclined developer |
| Development Manager | Tech Lead or founder | Engineering Manager |
| QA Lead | Every developer | Dedicated QA or senior dev |
| Compliance Officer | Founder (just document decisions) | CTO or ops lead |
| Product Manager | Founder | Product Manager |
| Scrum Master | Whoever runs standups | Any team member |
| Solution Architect | Tech Lead | Senior engineer |
| Developer | Everyone | Developers |
| Executive | Founder | CEO/CTO |

**The key insight:** In a startup, accountability matters more than role titles. Assign the checklist items below to named people — even if one person covers five roles.

---

## Solo Developer: 5 Things Today

If you're a solo developer or founder writing code with AI, do these five things right now:

### 1. Create a project context file (10 minutes)

Create a `CLAUDE.md` (for Claude Code) or `.cursorrules` (for Cursor) in your repo root. This single file dramatically improves AI output quality.

Copy the starter from [Starter Config Files](/production/tutorials/starter-configs).

### 2. Never paste secrets or customer data into AI (0 minutes)

Make it a habit: never paste `.env` contents, API keys, customer PII, or database connection strings into any AI tool. Add `.env` files to your `.gitignore` and disable AI suggestions for `.env` file types.

### 3. Review every line before committing (0 minutes — it's a mindset)

Treat AI output like code from an unreliable contractor. Read every line. If you can't explain it, don't commit it. See [Core Principles](/roles/developer/#core-principles-for-ai-augmented-development).

### 4. Add basic security scanning to your CI (15 minutes)

Add one GitHub Actions workflow that catches the worst problems. Copy the minimal pipeline from [CI/CD Starter Pipeline](/production/tutorials/ci-cd-pipeline-starter).

### 5. Keep a decision log (5 minutes setup, ongoing)

Create a `docs/decisions/` directory. When you make an architectural decision with AI assistance, drop a short markdown note. This is your audit trail and your future self's best friend.

```markdown
<!-- docs/decisions/001-auth-approach.md -->
# ADR-001: JWT Authentication
**Date:** 2026-02-18
**Status:** Accepted
**Context:** Need user auth for API. AI suggested JWT with refresh tokens.
**Decision:** Using jose library for JWT, 15min access / 7d refresh tokens.
**AI involvement:** Claude generated initial implementation, I reviewed and adjusted token expiry.
```

**Total time: ~30 minutes. You're now ahead of 90% of solo developers using AI.**

---

## Small Team (2-5 Engineers): 11 Things This Week

Everything from the solo developer list, plus:

### 6. Agree on one AI tool (30 minutes)

Don't let everyone use different tools. Pick one primary tool and standardize:

| Budget | Recommended Stack |
|--------|------------------|
| $0/month | Claude Code (free tier) + GitHub Copilot Free |
| $20-50/month per dev | Cursor Pro ($20/dev) or GitHub Copilot Individual ($10/dev) |
| $40-100/month per dev | Claude Code Max + Cursor Pro |

See [Free-Tier Tool Comparison](/production/tool-guides/free-tier-comparison) for full breakdown.

### 7. Add AI fields to your PR template (10 minutes)

Create `.github/pull_request_template.md` with AI metadata fields. Copy from [Starter Config Files](/production/tutorials/starter-configs).

This takes 10 minutes and gives you traceability of AI-assisted changes from day one.

### 8. Set up branch protection (10 minutes)

In your GitHub repo settings, require:
- At least 1 PR review before merge (even on a 2-person team, review each other's code)
- Status checks must pass (once you have CI)

This enforces that no AI-generated code goes to `main` without human review.

### 9. Write a one-page AI policy (30 minutes)

Not a 50-page governance document. One page covering:
- Which AI tools are approved
- What data you MUST NOT share with AI (customer data, secrets, proprietary algorithms)
- All AI-assisted code requires PR review
- If in doubt, ask the team

Use the [Acceptable Use Policy Template](/production/tutorials/policy-templates#acceptable-use-policy) as your starting point.

### 10. Hold a 30-minute AI retro every 2 weeks

Add to your sprint retro or hold separately:
- What AI-assisted work went well?
- What AI-generated code caused problems?
- Any prompts or patterns worth sharing?

This replaces the enterprise "Community of Practice" and "Center of Excellence" with something that actually fits a small team.

### 11. Set up a lightweight role-agent workflow (60-90 minutes)

If your team wants multiple AI agents (for example product, developer, QA, and security), do not wait for enterprise orchestration platforms.

Implement a lightweight version now:

- Create agent IDs and role-owner mapping
- Define one contract file per agent (allowed/forbidden actions)
- Use handoff templates between agents
- Require AI metadata in PRs (`AI-Usage`, `AI-Prompt-Ref`, `Agent-IDs`, `AI-Risk-Notes`)

Follow the full setup guide: [Small-Team Multi-Agent Starter](/production/tutorials/small-team-multi-agent-starter).

**Total time: ~3-4 hours for the team. You now have active AI governance, including baseline multi-agent controls.**

---

## Growing Team (6-20 Engineers): 30-Day Plan

You have the resources to do this properly without enterprise overhead.

### Week 1: Foundation

| Day | Action | Owner | Time |
|-----|--------|-------|------|
| Mon | Complete all 10 items from the small team checklist | CTO/Tech Lead | 2h |
| Tue | Set up CI pipeline with SAST + dependency scanning | DevOps dev | 2h |
| Wed | Create shared prompt library repo or directory | Senior dev | 1h |
| Thu | Run the [Self-Assessment Checklist](/pillars/startup-self-assessment) | CTO | 1h |
| Fri | Assign standards ownership (see matrix below) | CTO | 30min |

### Week 2: Standards Adoption

Adopt these three standards first — they cover the highest-risk areas:

1. **[PRD-STD-002: Code Review](/production/standards/PRD-STD-002-code-review/)** — All AI code gets reviewed
2. **[PRD-STD-004: Security Scanning](/production/standards/PRD-STD-004-security-scanning/)** — Automated scanning in CI
3. **[PRD-STD-008: Dependency Compliance](/production/standards/PRD-STD-008-dependency-compliance/)** — License and vulnerability checks

### Week 3: Workflow Integration

- Configure tool-specific rules files (`.cursorrules`, `CLAUDE.md`, `copilot-instructions.md`) per project
- Add quality gates to CI (test coverage threshold, security scan pass)
- Add role-agent registry, contracts, and handoff templates for AI workflows that span multiple roles
- Start tracking: defects found in AI-assisted PRs vs non-AI PRs

### Week 4: Measure and Iterate

- Review metrics from Week 3
- Identify which standards to adopt next (usually PRD-STD-001 Prompt Engineering and PRD-STD-003 Testing)
- Plan for next month

### Startup Standards Ownership Matrix

| Standard | Owner (6-20 person team) |
|---|---|
| PRD-STD-001 Prompt Engineering | Any senior developer |
| PRD-STD-002 Code Review | Tech Lead |
| PRD-STD-003 Testing | QA lead or senior dev |
| PRD-STD-004 Security Scanning | DevOps/platform dev |
| PRD-STD-005 Documentation | Rotating ownership |
| PRD-STD-006 Technical Debt | Tech Lead |
| PRD-STD-007 Quality Gates | DevOps/platform dev |
| PRD-STD-008 Dependencies | DevOps/platform dev |
| PRD-STD-009 Autonomous Agent Governance | Tech Lead (or Solution Architect) |

---

## What You Can Skip (For Now)

These AEEF components are important for enterprises but overkill for early-stage startups:

| Component | Why You Can Defer | When to Adopt |
|-----------|-------------------|---------------|
| Formal Maturity Certification | You need to ship, not certify | When you have 20+ engineers or enterprise customers |
| Steering Committee | Your standup covers this | When you have 3+ engineering teams |
| Formal phase gates with go/no-go | Decision speed matters more | When you're deploying to regulated environments |
| AI Product Lifecycle (PRD-STD-010-012) | Only needed if shipping AI products | When you're building ML/AI-powered features |
| Autonomous Agent Governance (PRD-STD-009) | You can defer enterprise orchestrator tooling, but still implement lightweight role-agent contracts and handoffs now | Adopt full orchestrator automation when workflows span multiple repos or teams |
| KSA/SAMA/SDAIA regulatory profiles | Region-specific compliance | When operating in Saudi Arabia |
| Center of Excellence | You ARE the center of excellence | When you have 50+ engineers |

## What You MUST NOT Skip

Regardless of team size, these are non-negotiable:

1. **Human review of all AI-generated code** — No exceptions. Ever.
2. **No secrets in AI tools** — One leak can kill a startup.
3. **Basic security scanning in CI** — Free tools exist. No excuse.
4. **A written AI policy** — Even one page. If you get hacked and can't show you had basic controls, you're liable.
5. **If using multiple AI agents, define contracts and handoffs** — without this, accountability breaks quickly.

---

## Scaling Up: When to Adopt Full AEEF

You should transition to the full [Transformation Track](/transformation/) when:

- You have more than 20 engineers
- You're pursuing SOC 2, ISO 27001, or similar certifications
- You have enterprise customers requiring security questionnaires
- You're in a regulated industry (fintech, healthcare, defense)
- You've had a security incident related to AI-generated code
- Multiple teams are using AI tools with no coordination

The good news: if you followed this Quick-Start, you've already completed most of Phase 1's deliverables. You'll enter the Transformation Track at Phase 2, not Phase 1.

## Next Steps

- [Starter Config Files](/production/tutorials/starter-configs) — Copy-paste ready configurations
- [CI/CD Pipeline Starter](/production/tutorials/ci-cd-pipeline-starter) — GitHub Actions workflow
- [Small-Team Multi-Agent Starter](/production/tutorials/small-team-multi-agent-starter) — Build role-based agents with framework-aligned controls
- [Free-Tier Tool Comparison](/production/tool-guides/free-tier-comparison) — Pick your tools
- [End-to-End Tutorial](/production/tutorials/first-ai-pr-tutorial) — Walk through your first governed AI PR
- [FAQ & Troubleshooting](/pillars/faq) — Common questions and problems

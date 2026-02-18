---
title: "Self-Assessment Guide"
sidebar_position: 2
description: "Assess your organization's AI-assisted development maturity and get a personalized action plan."
---

# Self-Assessment Guide

This guide helps you assess your current state and generates a personalized action plan. Work through the checklist honestly — the value is in identifying gaps, not in achieving a high score.

**Time required:** 15-20 minutes
**Who should complete this:** CTO, Tech Lead, or Engineering Manager. For best results, have 2-3 people complete it independently and compare answers.

---

## How to Use This Assessment

1. Go through each section and check the boxes that are TRUE for your organization
2. Count your checks in each section
3. Use the scoring guide at the bottom to determine your maturity level
4. Follow the personalized action plan for your level

---

## Section 1: Governance (Max 8 points)

Score 1 point for each item that is true:

- [ ] We have a written policy on AI tool usage for software development
- [ ] The policy specifies which AI tools are approved for use
- [ ] The policy defines what data/code MUST NOT be shared with AI tools
- [ ] All engineers have acknowledged (signed/read) the policy
- [ ] Someone is specifically accountable for AI governance (named person)
- [ ] Legal has reviewed IP implications of AI-generated code
- [ ] We review and update AI policies at least quarterly
- [ ] We have an incident response plan for AI-related issues

**Your score: ___ / 8**

---

## Section 2: Tooling & Configuration (Max 8 points)

- [ ] All developers use organization-approved AI tool(s) (not personal accounts)
- [ ] AI tool configurations are committed to version control (`.cursorrules`, `CLAUDE.md`, etc.)
- [ ] Security-sensitive files/directories are excluded from AI tool context
- [ ] Secret-containing file types (`.env`) are excluded from AI suggestions
- [ ] AI tools are standardized across teams (everyone uses the same tool)
- [ ] Tool configurations include project architecture and coding conventions
- [ ] Tool configurations include explicit "do not" security rules
- [ ] AI tool versions are consistent across the team (within one minor version)

**Your score: ___ / 8**

---

## Section 3: Code Review (Max 8 points)

- [ ] All code changes go through pull request review before merging
- [ ] PRs include AI usage disclosure (which tool, level of assistance)
- [ ] Code review explicitly checks for AI-specific issues (hallucinated APIs, outdated patterns)
- [ ] Reviewers verify they understand every line of AI-generated code
- [ ] We have an AI-specific review checklist or guidelines
- [ ] Security-critical code changes require review by a senior/security engineer
- [ ] Branch protection enforces review requirements (cannot bypass)
- [ ] We track whether defects correlate with AI-assisted vs. non-AI code

**Your score: ___ / 8**

---

## Section 4: Security & CI/CD (Max 8 points)

- [ ] SAST (static analysis) runs on every PR
- [ ] Dependency vulnerability scanning runs on every PR
- [ ] CI checks must pass before merging (blocking, not advisory)
- [ ] Secret detection scanning is in place
- [ ] We track security findings specifically in AI-generated code
- [ ] License compliance checking is automated
- [ ] Quality gates include test coverage thresholds
- [ ] We have a process for handling security findings (SLAs for fix timelines)

**Your score: ___ / 8**

---

## Section 5: Testing (Max 6 points)

- [ ] We have minimum test coverage requirements for new code
- [ ] AI-generated tests are reviewed for quality (not just accepted as-is)
- [ ] We test edge cases that AI commonly misses (null, empty, boundary, concurrent)
- [ ] Integration tests cover AI-generated code paths, not just unit tests
- [ ] We have regression tests that catch AI-introduced regressions
- [ ] Test quality is part of code review (not just coverage percentage)

**Your score: ___ / 6**

---

## Section 6: Knowledge & Training (Max 6 points)

- [ ] We provide training on effective AI-assisted development
- [ ] Developers know how to write structured prompts (not just "write code for X")
- [ ] We share effective prompts and patterns across the team
- [ ] New team members receive AI tool onboarding
- [ ] We discuss AI-related learnings in retrospectives or team meetings
- [ ] We maintain a shared prompt library or knowledge base

**Your score: ___ / 6**

---

## Section 7: Measurement (Max 6 points)

- [ ] We track developer productivity metrics (cycle time, throughput)
- [ ] We can compare metrics before and after AI adoption
- [ ] We track defect rates in AI-assisted vs. non-AI code
- [ ] We measure developer satisfaction with AI tools
- [ ] We report AI adoption metrics to leadership
- [ ] We use metrics to make decisions about tool and process changes

**Your score: ___ / 6**

---

## Scoring Guide

Add up your scores from all 7 sections:

**Total score: ___ / 50**

| Score | Maturity Level | What It Means |
|---|---|---|
| **0-7** | **Level 1: Uncontrolled** | AI tools are used without governance. You're exposed to significant risk. |
| **8-18** | **Level 2: Exploratory** | Basic governance exists but is incomplete. Key gaps remain. |
| **19-30** | **Level 3: Defined** | Solid governance with documented standards. Ready for optimization. |
| **31-42** | **Level 4: Managed** | Comprehensive governance with measurement and continuous improvement. |
| **43-50** | **Level 5: AI-First** | Mature, self-improving AI-assisted engineering. Industry-leading. |

---

## Your Action Plan

### If You Scored 0-7 (Level 1: Uncontrolled)

**Your situation:** AI tools are in use without governance. This is the most common state and the most urgent to address.

**Do this week:**
1. Complete the [Startup Quick-Start](/pillars/startup-quick-start) Solo Developer or Small Team checklist
2. Write a [one-page Acceptable Use Policy](/production/tutorials/policy-templates#acceptable-use-policy)
3. Install [CI/CD Pipeline Starter](/production/tutorials/ci-cd-pipeline-starter)
4. Add [PR template](/production/tutorials/starter-configs#githubpull_request_templatemd--pr-template-with-ai-metadata) with AI disclosure

**Target:** Reach Level 2 within 2-4 weeks.

### If You Scored 8-18 (Level 2: Exploratory)

**Your situation:** You have some governance but it's incomplete. Focus on the sections where you scored lowest.

**Do this month:**
1. Close gaps in your lowest-scoring section first
2. Commit AI tool configurations to version control ([Starter Configs](/production/tutorials/starter-configs))
3. Add security scanning to CI if not already present
4. Start measuring: PR cycle time, defect rate, developer satisfaction
5. Adopt [PRD-STD-002](/production/standards/PRD-STD-002-code-review/) (Code Review) and [PRD-STD-004](/production/standards/PRD-STD-004-security-scanning/) (Security Scanning) formally

**Target:** Reach Level 3 within 2-3 months.

### If You Scored 19-30 (Level 3: Defined)

**Your situation:** Solid foundation. Now focus on measurement, optimization, and filling remaining gaps.

**Do this quarter:**
1. Implement the remaining PRD-STD standards (especially Documentation and Technical Debt)
2. Build a metrics dashboard for AI-assisted development outcomes
3. Establish a regular review cadence (monthly AI standards review)
4. Create a shared prompt library for your team
5. Begin cross-team knowledge sharing

**Target:** Reach Level 4 within 3-6 months.

### If You Scored 31-42 (Level 4: Managed)

**Your situation:** Comprehensive governance with active measurement. Focus on optimization and automation.

**Do this quarter:**
1. Automate governance checks that are currently manual
2. Implement advanced prompt engineering standards ([Phase 3](/transformation/phase-3-enterprise-scale/advanced-prompt-engineering))
3. Pursue maturity certification if applicable
4. Evaluate whether AI-first workflows are appropriate for any processes
5. Share your practices with the broader community (blog, talks, contributions)

**Target:** Reach Level 5 within 6-12 months.

### If You Scored 43-50 (Level 5: AI-First)

**Your situation:** Industry-leading AI-assisted engineering. Focus on continuous improvement and thought leadership.

**Ongoing:**
1. Contribute back to the AEEF framework with lessons learned
2. Mentor other organizations in AI adoption
3. Experiment with emerging AI capabilities (agents, multi-model workflows)
4. Continuously validate that governance keeps pace with tool evolution

---

## Section Gap Analysis

For a more targeted action plan, look at your per-section scores:

| Section | Score | Priority |
|---|---|---|
| Governance | _/8 | If < 4: **Critical** — no foundation for anything else |
| Tooling | _/8 | If < 4: **High** — tool chaos undermines all other efforts |
| Code Review | _/8 | If < 4: **High** — your last line of defense against AI mistakes |
| Security & CI/CD | _/8 | If < 4: **High** — vulnerabilities are accumulating undetected |
| Testing | _/6 | If < 3: **Medium** — defects will escape to production |
| Knowledge | _/6 | If < 3: **Medium** — team effectiveness is limited |
| Measurement | _/6 | If < 3: **Low** (initially) — measure after you've established basics |

**Rule of thumb:** Fix any section scoring below 50% before advancing to the next maturity level.

---

## Repeating the Assessment

Run this assessment:
- **Immediately** when starting AEEF adoption (baseline)
- **Monthly** during active transformation
- **Quarterly** during steady-state operations
- **After any significant change** (new tool adoption, team restructuring, security incident)

Track your scores over time to demonstrate progress to leadership and identify areas that are stalling.

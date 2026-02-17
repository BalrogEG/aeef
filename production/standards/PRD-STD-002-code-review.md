---
title: "PRD-STD-002: Code Review Standards"
sidebar_position: 3
description: "Mandatory code review standards for AI-generated code."
---

# PRD-STD-002: Code Review Standards

**Standard ID:** PRD-STD-002
**Version:** 1.0
**Status:** Active
**Compliance Level:** Level 1 (Foundation)
**Effective Date:** 2025-01-15
**Last Reviewed:** 2026-01-15

## 1. Purpose

This standard defines the mandatory code review process for AI-generated code. Code review is the single most critical control against the quality and security risks associated with AI-assisted development. With AI co-authored code exhibiting 1.7x more issues and 2.74x higher vulnerability rates, human review is an essential safeguard that MUST NOT be bypassed or abbreviated.

AI coding assistants generate code that is often syntactically correct and superficially plausible but may contain subtle logic errors, security vulnerabilities, performance anti-patterns, or architectural misalignments that require trained human judgment to detect. This standard ensures that every line of AI-generated code receives adequate scrutiny before reaching production.

## 2. Scope

This standard applies to:

- All code that is generated, modified, refactored, or substantially influenced by AI coding assistants
- All pull requests, merge requests, and code submissions that contain AI-assisted code
- All engineers acting as reviewers for AI-assisted code
- All repositories and projects where AI tools are authorized for use

This standard applies regardless of the AI tool used, the programming language, or the perceived simplicity of the change.

## 3. Definitions

| Term | Definition |
|---|---|
| **AI-Generated Code** | Code that was produced, in whole or in part, by an AI coding assistant, including completions, generations, and refactorings |
| **Qualified Reviewer** | An engineer who meets the reviewer qualification requirements defined in Section 4.1 |
| **AI-Specific Review** | Review activities that specifically target known AI code generation failure modes |
| **Approval Threshold** | The number and seniority of reviewer approvals required before code can be merged |
| **Escalation** | The process of raising a review to a higher-authority reviewer when specific criteria are triggered |

## 4. Requirements

### 4.1 Reviewer Qualifications

:::danger MANDATORY
**REQ-002-01:** Reviewers of AI-generated code MUST have at least 12 months of professional experience in the relevant programming language and framework.

**REQ-002-02:** Reviewers MUST have completed AEEF AI code review training, or equivalent training approved by the organization, covering common AI code generation failure modes.

**REQ-002-03:** The code author MUST NOT be the sole reviewer of their own AI-assisted code.
:::

:::warning RECOMMENDED
**REQ-002-04:** Organizations SHOULD maintain a roster of qualified reviewers per technology stack and domain area.

**REQ-002-05:** Reviewers SHOULD rotate periodically to prevent review fatigue and distribute knowledge.
:::

### 4.2 Review Process

:::danger MANDATORY
**REQ-002-06:** All AI-generated code MUST undergo human code review before merging into any shared branch (main, develop, release).

**REQ-002-07:** Pull requests containing AI-generated code MUST be explicitly tagged or labeled to indicate AI involvement (e.g., `ai-assisted` label).

**REQ-002-08:** Reviewers MUST use the AI-Specific Review Checklist (Section 5) for all AI-assisted pull requests.

**REQ-002-09:** Review comments MUST be documented in the version control system and preserved as part of the project record.
:::

:::warning RECOMMENDED
**REQ-002-10:** AI-assisted pull requests SHOULD be limited to 400 lines of changed code to ensure thorough review. Larger changes SHOULD be split into smaller, reviewable units.

**REQ-002-11:** Reviewers SHOULD spend a minimum of 5 minutes per 100 lines of AI-generated code. Speed reviews are ineffective against subtle AI-introduced defects.
:::

### 4.3 Approval Thresholds

:::danger MANDATORY
**REQ-002-12:** AI-assisted code changes MUST receive approval from at least one qualified reviewer before merging.

**REQ-002-13:** Changes to security-sensitive code (authentication, authorization, cryptography, PII handling) that involve AI generation MUST receive approval from at least two qualified reviewers, one of whom MUST have security domain expertise.

**REQ-002-14:** Changes to critical infrastructure code (database schemas, deployment configurations, CI/CD pipelines) that involve AI generation MUST receive approval from at least two qualified reviewers.
:::

### 4.4 Escalation Criteria

:::danger MANDATORY
**REQ-002-15:** A review MUST be escalated to a senior engineer or architect when any of the following conditions are detected:

- AI-generated code modifies authentication, authorization, or cryptographic functions
- AI-generated code introduces a new external dependency
- AI-generated code modifies data persistence logic or database schemas
- AI-generated code contains patterns that the reviewer does not fully understand
- AI-generated code modifies regulatory or compliance-sensitive functionality
- The reviewer identifies potential security vulnerabilities

**REQ-002-16:** Escalated reviews MUST be resolved before the code is merged. Escalation MUST NOT be bypassed by any team member, including managers and leads.
:::

## 5. Implementation Guidance

### AI-Specific Review Checklist

The following checklist MUST be used for all AI-assisted code reviews. Each item MUST be explicitly verified by the reviewer.

| # | Category | Review Item | Priority |
|---|---|---|---|
| 1 | **Correctness** | Logic matches the intended specification, not just the prompt | Critical |
| 2 | **Correctness** | Edge cases are handled (null, empty, boundary values, overflow) | Critical |
| 3 | **Correctness** | Error handling is complete and follows project conventions | Critical |
| 4 | **Correctness** | No hallucinated APIs, methods, or library functions (verify they exist) | Critical |
| 5 | **Security** | No hardcoded credentials, secrets, or API keys | Critical |
| 6 | **Security** | Input validation is present and sufficient for all external inputs | Critical |
| 7 | **Security** | No SQL injection, XSS, path traversal, or command injection vectors | Critical |
| 8 | **Security** | Authentication and authorization checks are correct and complete | Critical |
| 9 | **Security** | Cryptographic functions use approved algorithms and libraries | Critical |
| 10 | **Performance** | No unnecessary allocations, copies, or O(n^2+) operations on large datasets | High |
| 11 | **Performance** | Database queries are efficient (no N+1 queries, proper indexing assumed) | High |
| 12 | **Architecture** | Code follows project architecture patterns and conventions | High |
| 13 | **Architecture** | No unnecessary coupling or dependency introduction | High |
| 14 | **Architecture** | Code is placed in the correct module/package/directory | Medium |
| 15 | **Maintainability** | Code is readable and understandable without AI context | High |
| 16 | **Maintainability** | No duplicated logic that should be extracted to shared functions | Medium |
| 17 | **Maintainability** | Naming conventions are consistent with the project | Medium |
| 18 | **Testing** | Adequate test coverage for AI-generated code paths | High |
| 19 | **Testing** | Tests validate behavior, not just implementation details | Medium |
| 20 | **Dependencies** | No new dependencies introduced without justification | Medium |
| 21 | **Dependencies** | Imported libraries are compatible with project license | Medium |

### Common AI Code Generation Failure Modes

Reviewers should be especially vigilant for these known failure modes:

1. **Hallucinated APIs** -- AI generates calls to functions or methods that do not exist in the specified library version
2. **Outdated patterns** -- AI uses deprecated APIs or insecure patterns from older training data
3. **Subtle logic errors** -- Code that appears correct but fails on edge cases the AI was not explicitly told about
4. **Cargo-cult patterns** -- AI reproduces patterns from training data that are inappropriate for the current context
5. **Missing error handling** -- AI often generates the "happy path" and omits comprehensive error handling
6. **Over-engineering** -- AI may generate unnecessarily complex solutions for simple problems
7. **License-contaminated code** -- AI may reproduce code from open-source projects with incompatible licenses

### Review Documentation Template

```markdown
## AI Code Review Summary
- **PR:** #[number]
- **Reviewer:** [name]
- **AI Tool Used:** [tool name]
- **Checklist Completed:** Yes/No
- **Escalation Required:** Yes/No
- **Items Found:** [count]
- **Verdict:** Approved / Changes Requested / Escalated
```

## 6. Exceptions & Waiver Process

There are NO exceptions to the requirement for human code review of AI-generated production code (REQ-002-06). This is an absolute requirement.

Limited exceptions MAY be granted for:

- **Approval threshold requirements** (REQ-002-12 through REQ-002-14) in emergency hotfix scenarios, provided a post-merge review is completed within 24 hours
- **Labeling requirements** (REQ-002-07) during a 90-day transition period for newly adopted AI tools

Emergency exceptions MUST be documented and reported to the engineering standards committee within 48 hours.

## 7. Related Standards

- [PRD-STD-001: Prompt Engineering Standards](/production/standards/PRD-STD-001-prompt-engineering/) -- Better prompts produce more reviewable code
- [PRD-STD-003: Testing Requirements](/production/standards/PRD-STD-003-testing-requirements/) -- Testing validates what review cannot catch
- [PRD-STD-004: Security Scanning](/production/standards/PRD-STD-004-security-scanning/) -- Automated scanning complements manual review
- [PRD-STD-007: Quality Gates](/production/standards/PRD-STD-007-quality-gates/) -- Review approval as a merge gate
- [AI Code Review Assistants](/production/tool-guides/ai-code-review/) -- AI tools that augment human review
- [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/) -- Organizational risk framework

## 8. Revision History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-01-15 | AEEF Standards Committee | Initial release |
| 1.0.1 | 2026-01-15 | AEEF Standards Committee | Expanded review checklist from 15 to 21 items; added failure modes section |

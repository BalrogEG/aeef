---
title: "Human-in-the-Loop Review Processes"
sidebar_position: 3
description: "Mandatory human review processes for all AI-generated code and artifacts."
---

# Human-in-the-Loop Review Processes

Every piece of AI-generated code MUST pass through human review before entering any protected branch or production environment. AI tools are accelerators, not replacements for human judgment. Given that AI co-authored code exhibits 1.7x more issues than human-authored code, the human-in-the-loop review process is the primary quality safeguard in the AEEF framework.

This section defines reviewer qualifications, review checklists specific to AI-generated code, approval workflows, and escalation procedures.

## Foundational Principle

:::danger
No AI-generated code, configuration, infrastructure definition, or test artifact SHALL be merged into a protected branch without explicit human approval by a qualified reviewer. Automated merge bots MUST NOT bypass this requirement, even when all CI checks pass.
:::

## Reviewer Qualifications

Not every developer is qualified to review AI-generated code. Reviewing AI output requires specific skills beyond standard code review competency.

### Qualification Tiers

| Tier | Qualifications | May Review |
|---|---|---|
| **Tier 1 Reviewer** | Completed AEEF AI review training; 1+ year experience in the relevant technology stack; active contributor to the codebase | Low-risk changes: documentation, test updates, cosmetic changes, non-functional refactors |
| **Tier 2 Reviewer** | Tier 1 qualifications + 3+ years in the technology stack; demonstrated expertise in code security; completed secure coding training within the past 12 months | Standard-risk changes: business logic, API endpoints, data model changes, service integrations |
| **Tier 3 Reviewer** | Tier 2 qualifications + architecture board membership or designated security champion; deep expertise in the specific domain (auth, payments, data pipelines) | High-risk changes: authentication/authorization flows, payment processing, PII handling, infrastructure-as-code, cryptographic implementations |

### Reviewer Training Requirements

- All reviewers MUST complete the organization's AI-Assisted Code Review training module before being granted review privileges
- Training MUST be refreshed annually or whenever the organization adopts a new AI tool
- Training MUST cover: common AI code generation failure modes, hallucination patterns, security vulnerabilities typical in AI-generated code, and the AEEF review checklist
- Reviewers SHOULD participate in periodic calibration sessions where they review pre-seeded AI-generated code with known defects

## AI-Specific Review Checklist

Standard code review practices remain necessary but are insufficient for AI-generated code. The following checklist addresses failure modes unique to AI outputs.

### Mandatory Review Checklist

| # | Check Item | Category | Severity |
|---|---|---|---|
| 1 | **Verify the code solves the stated problem** -- AI often generates plausible code that addresses a slightly different problem than intended | Correctness | Critical |
| 2 | **Check for hallucinated APIs, methods, or libraries** -- AI models fabricate function signatures, library methods, and configuration options that do not exist | Correctness | Critical |
| 3 | **Validate all import statements and dependencies** -- Confirm every imported module exists and is at the correct version | Correctness | High |
| 4 | **Check for hardcoded secrets, credentials, or tokens** -- AI models may generate placeholder secrets that look real or embed training data | Security | Critical |
| 5 | **Verify input validation and sanitization** -- AI-generated code frequently omits or incorrectly implements input validation | Security | Critical |
| 6 | **Check for SQL injection, XSS, and injection vulnerabilities** -- AI-generated code is 2.74x more likely to contain such vulnerabilities | Security | Critical |
| 7 | **Validate error handling completeness** -- AI often generates "happy path" code with incomplete or generic error handling | Reliability | High |
| 8 | **Check for resource leaks** -- Unclosed connections, file handles, streams, and similar resources | Reliability | High |
| 9 | **Verify concurrency safety** -- Race conditions, deadlocks, and thread-safety issues in multi-threaded contexts | Reliability | High |
| 10 | **Assess algorithmic complexity** -- AI may generate correct but inefficient algorithms (e.g., O(n^2) where O(n) is achievable) | Performance | Medium |
| 11 | **Check for unnecessary code and dead paths** -- AI tends to generate more code than necessary, including unused functions or unreachable branches | Maintainability | Medium |
| 12 | **Verify architectural conformance** -- Confirm the code follows the project's established architecture patterns and layer boundaries | Architecture | High |
| 13 | **Validate test correctness** -- AI-generated tests may pass trivially, test implementation details rather than behavior, or contain tautological assertions | Testing | High |
| 14 | **Check for license-encumbered patterns** -- AI may reproduce code patterns from copyleft-licensed training data | Legal/IP | High |
| 15 | **Confirm the prompt/context reference is attached** -- The PR or commit MUST reference the prompt template used for generation | Process | Medium |

:::tip
Print or bookmark this checklist. Use it as a gate -- do not approve any AI-generated code until every Critical and High severity item has been explicitly verified.
:::

### Supplementary Checks by Domain

**For API/Backend Code:**
- [ ] Authentication and authorization checks are present on all endpoints
- [ ] Rate limiting considerations are addressed
- [ ] Request/response schemas match the API contract

**For Frontend Code:**
- [ ] No XSS vectors through dangerouslySetInnerHTML or equivalent
- [ ] Accessibility (a11y) requirements are met
- [ ] State management follows established patterns

**For Infrastructure-as-Code:**
- [ ] No overly permissive IAM policies or security group rules
- [ ] Encryption at rest and in transit is configured
- [ ] Resource naming follows organizational conventions

**For Database Migrations:**
- [ ] Migration is reversible (has a rollback script)
- [ ] No data loss scenarios in the migration path
- [ ] Performance impact on large tables has been assessed

## Approval Workflows

### Standard Approval Flow

```
Developer generates code with AI
        |
        v
Developer self-reviews against checklist (items 1-15)
        |
        v
Developer opens Pull Request with:
  - AI-assisted label applied
  - Prompt reference linked
  - Self-review attestation completed
        |
        v
Automated checks run (CI/CD, SAST, linting)
        |
        v
Qualified reviewer assigned based on risk tier
        |
        v
Reviewer completes AI-specific checklist review
        |
        +---> Approved: Merge permitted
        |
        +---> Changes Requested: Developer iterates
        |
        +---> Escalated: Routed to higher-tier reviewer
```

### Approval Requirements by Risk Level

| Risk Level | Minimum Approvals | Reviewer Tier Required | Additional Requirements |
|---|---|---|---|
| **Low** | 1 approval | Tier 1 or higher | Automated checks must pass |
| **Standard** | 2 approvals (at least 1 Tier 2) | Tier 2 or higher | Automated checks + SAST scan clean |
| **High** | 2 approvals (at least 1 Tier 3) | Tier 3 required | Automated checks + SAST + manual security review + architecture sign-off |

### Risk Classification Criteria

Changes SHALL be classified as **High Risk** when they involve:
- Authentication, authorization, or session management
- Payment processing or financial transactions
- Personally identifiable information (PII) or protected health information (PHI)
- Cryptographic operations
- Infrastructure-as-code changes to production environments
- Database schema changes affecting data integrity

Changes SHALL be classified as **Standard Risk** when they involve:
- Business logic in application services
- API endpoint creation or modification
- Data access layer changes
- Integration with external services
- Configuration changes

All other changes MAY be classified as **Low Risk**.

## Escalation Procedures

### When to Escalate

A reviewer MUST escalate when:

1. The reviewer is uncertain whether the AI-generated code is correct or secure
2. The code involves a domain outside the reviewer's expertise
3. The AI-generated code introduces a new architectural pattern not previously used in the codebase
4. Static analysis tools flag issues the reviewer cannot fully assess
5. The code interacts with regulated data and the reviewer lacks compliance training

### Escalation Path

| Level | Escalation Target | Response SLA |
|---|---|---|
| **Level 1** | Senior engineer or tech lead within the team | 1 business day |
| **Level 2** | Security champion or architecture board member | 2 business days |
| **Level 3** | CISO office or compliance team | 3 business days |

### Escalation Documentation

Every escalation MUST include:
- The original pull request link
- The specific checklist items that triggered escalation
- The reviewer's assessment of potential risk
- The AI tool and prompt used to generate the code

## Metrics and Continuous Improvement

Teams SHOULD track the following metrics to continuously improve the review process:

- **AI code review rejection rate** -- Percentage of AI-generated PRs requiring changes (target: trending downward over time)
- **Defect escape rate** -- Defects in AI-generated code found after merge (target: below organizational baseline)
- **Review cycle time** -- Time from PR creation to final approval for AI-generated code
- **Escalation frequency** -- Number of escalations per sprint (high frequency may indicate training gaps)
- **Checklist item hit rate** -- Which checklist items most frequently catch issues (informs training priorities)

These metrics SHALL be reviewed monthly by engineering leadership and used to refine reviewer training, update checklists, and adjust prompt engineering practices. See [Engineering Quality Standards](./engineering-quality-standards.md) for broader quality metrics and [AI Output Verification](./ai-output-verification.md) for automated verification that complements human review.

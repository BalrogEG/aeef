---
title: "Apply-Ready Rollout Kit"
sidebar_position: 2
description: "Execution-ready checklist, prompts, and role ownership for PRD-STD adoption."
---

# Apply-Ready Rollout Kit

This kit translates the PRD-STD series into an execution plan your team can run immediately.

## 30/60/90-Day Rollout

| Window | Objective | Done Criteria |
|---|---|---|
| Day 0-30 | Lock Level 1 controls | PRD-STD-002, PRD-STD-004, PRD-STD-008 checks active in CI and enforced on every PR |
| Day 31-60 | Standardize team workflows | PRD-STD-001, PRD-STD-003, PRD-STD-007 implemented with reusable templates and gate thresholds |
| Day 61-90 | Stabilize sustainability controls | PRD-STD-005 and PRD-STD-006 integrated into planning, reviews, and reporting |

## Minimum Enforcement Checklist

- [ ] AI-authored PRs require human review (`PRD-STD-002`)
- [ ] SAST/SCA scan runs on every PR (`PRD-STD-004`, `PRD-STD-008`)
- [ ] Test coverage and regression checks run in CI (`PRD-STD-003`, `PRD-STD-007`)
- [ ] Prompt references captured in PR template (`PRD-STD-001`, `PRD-STD-005`)
- [ ] Technical debt register updated on exceptions (`PRD-STD-006`)

## Ready-Made Prompts by Standard

### PRD-STD-001 Prompt Engineering

```text
You are a senior <language/framework> engineer working in an existing production codebase.
Task: Implement <feature>.
Context:
- Existing interfaces: <paste>
- Architecture constraints: <paste>
Constraints:
- Follow <coding standard> and <framework version>
- Do not introduce new dependencies unless justified
- Include error handling and structured logs
Output:
1) implementation plan
2) code patch
3) test plan
4) assumptions + risks
```

### PRD-STD-002 Code Review

```text
Act as an AI-code reviewer.
Review this diff for correctness, maintainability, and hidden regressions.
Return findings in this format:
severity | file | issue | evidence | fix
Include sections:
- logic correctness
- edge cases
- API contract changes
- backward compatibility
If no critical/high issues exist, state: "No blocking findings."
```

### PRD-STD-003 Testing Requirements

```text
Given this feature and diff, generate a risk-based test matrix.
Output:
1) unit tests
2) integration tests
3) regression tests
4) negative/error-path tests
For each test include: purpose, input, expected output, and failure signal.
Prioritize tests that detect AI-specific failure modes (hallucinated APIs, missing validation, silent error handling).
```

### PRD-STD-004 Security Scanning

```text
Perform a secure-code review of this patch.
Focus on OWASP Top 10 risks, authN/authZ, input validation, injection, secret handling, and insecure defaults.
Return:
severity | CWE/OWASP mapping | file | issue | remediation
Then provide a "must-fix-before-merge" list.
```

### PRD-STD-005 Documentation

```text
Create implementation documentation for this change.
Output in order:
1) change summary
2) architecture impact
3) operational impact
4) rollback plan
5) AI prompt references used
Keep concise and production-usable.
```

### PRD-STD-006 Technical Debt

```text
Evaluate this implementation for technical debt.
Classify debt as: design, testing, security, maintainability, observability.
Return:
- debt item
- impact
- risk level
- remediation action
- target sprint
Flag items that should block release.
```

### PRD-STD-007 Quality Gates

```text
Given current CI results and this diff, decide release readiness.
Use gates:
- build
- tests
- security
- performance
- documentation
Return: PASS/FAIL per gate, with blocking reasons and exact remediation steps.
```

### PRD-STD-008 Dependency Compliance

```text
Review dependency changes in this PR.
For each new/updated dependency provide:
- license
- compatibility risk
- known vulnerabilities
- transitive risk
- approval decision (approve/reject)
Recommend safer alternatives when rejecting.
```

## Role Ownership Matrix

| Standard | Primary Owner | Secondary Owner |
|---|---|---|
| PRD-STD-001 | Developer | Development Manager |
| PRD-STD-002 | Tech Lead / Developer | QA Lead |
| PRD-STD-003 | QA Lead | Developer |
| PRD-STD-004 | Security Engineer | Platform Engineer |
| PRD-STD-005 | Developer | Product Manager |
| PRD-STD-006 | Development Manager | CTO |
| PRD-STD-007 | Platform Engineer | QA Lead |
| PRD-STD-008 | Security Engineer | Compliance Officer |

## First Week Execution Script

1. Select one active service and run the Level 1 checklist.
2. Add PR template fields: `AI-Usage`, `AI-Prompt-Ref`, `AI-Risk-Notes`.
3. Enable SAST/SCA checks with blocking thresholds for Critical and High findings.
4. Run the code review and testing prompts above on three recent PRs.
5. Create baseline metrics: defect density, escaped defects, security findings, lead time.

## Related Assets

- [Standards & Guidelines](/production/standards/)
- `prompt-library/README.md`
- [Role Guides](/roles/)

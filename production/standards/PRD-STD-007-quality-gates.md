---
title: "PRD-STD-007: Performance & Quality Gates"
sidebar_position: 8
description: "Quality gate requirements for AI-assisted development."
---

# PRD-STD-007: Performance & Quality Gates

**Standard ID:** PRD-STD-007
**Version:** 1.0
**Status:** Active
**Compliance Level:** Level 2 (Managed)
**Effective Date:** 2025-01-15
**Last Reviewed:** 2026-01-15

## 1. Purpose

This standard defines the quality gates that AI-assisted development outputs must pass before deployment. Quality gates are automated and semi-automated checkpoints in the CI/CD pipeline that enforce compliance with AEEF standards. They transform standards from documentation into executable policy, ensuring that non-compliant code cannot reach production regardless of human oversight failures.

Given that AI-generated code carries elevated defect and vulnerability rates, quality gates are an essential defense-in-depth control. They complement human code review ([PRD-STD-002](/production/standards/PRD-STD-002-code-review/)) by providing consistent, automated enforcement that does not suffer from reviewer fatigue or time pressure.

## 2. Scope

This standard applies to:

- All CI/CD pipelines that build, test, and deploy code containing AI-generated components
- All deployment targets (development, staging, production)
- All project types (applications, libraries, services, infrastructure-as-code)

## 3. Definitions

| Term | Definition |
|---|---|
| **Quality Gate** | An automated checkpoint in the CI/CD pipeline that evaluates code against defined criteria and blocks progression if criteria are not met |
| **Blocking Gate** | A quality gate that halts the pipeline on failure; code cannot proceed until the gate passes |
| **Advisory Gate** | A quality gate that reports findings but does not halt the pipeline; used for metrics and trend analysis |
| **Gate Criteria** | The specific, measurable conditions that must be satisfied to pass a quality gate |
| **Gate Override** | A documented exception that allows code to bypass a blocking gate; requires authorized approval |

## 4. Requirements

### 4.1 Build Gates

:::danger MANDATORY
**REQ-007-01:** All projects containing AI-generated code MUST implement automated build gates in the CI/CD pipeline.

**REQ-007-02:** Build gates MUST enforce the following criteria as blocking checks:

| Build Gate Criteria | Threshold | Action on Failure |
|---|---|---|
| Compilation / Build Success | 100% success | Block merge |
| Linting (code style) | Zero errors | Block merge |
| Type checking (where applicable) | Zero errors | Block merge |
| Code formatting | Compliant | Block merge |
| Cyclomatic complexity | No function > 15 | Block merge |
| File length | No file > 500 lines | Advisory (warn) |
| Function length | No function > 50 lines | Advisory (warn) |

**REQ-007-03:** Linting rules MUST include AI-specific checks where tooling supports them (e.g., flagging hallucinated imports, detecting deprecated API usage).
:::

:::warning RECOMMENDED
**REQ-007-04:** Build gates SHOULD include architecture fitness function checks to verify AI-generated code conforms to project architecture rules (e.g., layer dependency constraints, module boundary enforcement).

**REQ-007-05:** Build times SHOULD be monitored and maintained under 10 minutes for the complete build gate pipeline to avoid developer productivity impact.
:::

### 4.2 Test Gates

:::danger MANDATORY
**REQ-007-06:** Test gates MUST enforce the following criteria as blocking checks:

| Test Gate Criteria | Threshold | Action on Failure |
|---|---|---|
| All unit tests pass | 100% pass rate | Block merge |
| Unit test line coverage | >= 80% for AI-generated code | Block merge |
| Unit test branch coverage | >= 70% for AI-generated code | Block merge |
| All integration tests pass | 100% pass rate | Block merge |
| No test regressions | Zero new failures | Block merge |

**REQ-007-07:** Coverage thresholds MUST be calculated specifically for files and directories containing AI-generated code, not averaged across the entire codebase. AI-generated code MUST NOT hide behind high coverage in human-written code.

**REQ-007-08:** Test gates MUST reject pull requests where AI-generated code is added without corresponding test additions.
:::

:::warning RECOMMENDED
**REQ-007-09:** Mutation testing gates SHOULD be implemented for critical paths, requiring a minimum mutation score of 70% per [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements/).

**REQ-007-10:** Test execution time SHOULD be monitored, and test suites SHOULD complete within 15 minutes for the full test gate.
:::

### 4.3 Security Gates

:::danger MANDATORY
**REQ-007-11:** Security gates MUST enforce the following criteria as blocking checks:

| Security Gate Criteria | Threshold | Action on Failure |
|---|---|---|
| SAST scan | Zero Critical/High findings | Block merge |
| Secret detection | Zero detected secrets | Block merge |
| Dependency vulnerability scan | Zero Critical vulnerabilities | Block merge |
| License compliance | No disallowed licenses | Block merge |
| SAST scan (Medium findings) | Tracked, not blocking | Advisory (logged) |

**REQ-007-12:** Security gates MUST be non-bypassable through normal developer workflows. Gate overrides MUST require security team approval.

**REQ-007-13:** Security gate configurations MUST be managed as code in a protected repository that requires security team approval for changes.
:::

:::warning RECOMMENDED
**REQ-007-14:** Organizations SHOULD implement DAST scanning as an advisory gate in staging deployment pipelines.

**REQ-007-15:** Security gates SHOULD include checks for AI-specific vulnerability patterns (hallucinated security functions, deprecated crypto, incomplete input validation).
:::

### 4.4 Performance Gates

:::danger MANDATORY
**REQ-007-16:** Projects with defined performance budgets MUST implement performance gates that enforce:

| Performance Gate Criteria | Threshold | Action on Failure |
|---|---|---|
| API response time (P95) | <= defined budget | Block deploy to production |
| Memory usage | <= defined budget | Block deploy to production |
| Bundle size (web applications) | <= defined budget + 5% | Advisory (warn) |
| Database query time (P95) | <= defined budget | Block deploy to production |
:::

:::warning RECOMMENDED
**REQ-007-17:** Performance benchmarks SHOULD be run automatically on staging deployments before production promotion.

**REQ-007-18:** Performance regression detection SHOULD compare against a rolling baseline, not just absolute thresholds, to catch gradual degradation from accumulated AI-generated code.
:::

### 4.5 Deployment Gates

:::danger MANDATORY
**REQ-007-19:** Deployment to production MUST require all of the following gates to pass:

| Deployment Gate Criteria | Requirement |
|---|---|
| All build gates | Passed |
| All test gates | Passed |
| All security gates | Passed |
| Code review approval | Minimum approvals met per [PRD-STD-002](/production/standards/PRD-STD-002-code-review/) |
| Performance gates (if applicable) | Passed |
| AI-assisted code labeled | All AI code identified per [PRD-STD-005](/production/standards/PRD-STD-005-documentation/) |
| Change management approval | Required for production (if organizational policy) |

**REQ-007-20:** Production deployments MUST include automated rollback capability. If post-deployment health checks fail within the configured observation window, automatic rollback MUST be triggered.

**REQ-007-21:** Deployment gate status MUST be visible in the pull request / merge request interface so that all stakeholders can verify gate compliance before approving.
:::

## 5. Implementation Guidance

### Complete Gate Summary Table

| Gate Category | Gate | Type | Threshold | Standard Reference |
|---|---|---|---|---|
| Build | Compilation | Blocking | Success | PRD-STD-007 |
| Build | Linting | Blocking | Zero errors | PRD-STD-007 |
| Build | Type checking | Blocking | Zero errors | PRD-STD-007 |
| Build | Complexity | Blocking | CC `<= 15` | PRD-STD-007 |
| Test | Unit tests pass | Blocking | 100% | PRD-STD-003 |
| Test | Line coverage | Blocking | >= 80% | PRD-STD-003 |
| Test | Branch coverage | Blocking | >= 70% | PRD-STD-003 |
| Test | Integration tests | Blocking | 100% | PRD-STD-003 |
| Security | SAST | Blocking | Zero Crit/High | PRD-STD-004 |
| Security | Secrets | Blocking | Zero | PRD-STD-004 |
| Security | Dependencies | Blocking | Zero Critical | PRD-STD-004, PRD-STD-008 |
| Security | Licenses | Blocking | Approved only | PRD-STD-008 |
| Performance | Response time | Blocking | `<= budget` | PRD-STD-007 |
| Deploy | Review approval | Blocking | Min approvals | PRD-STD-002 |
| Deploy | Health check | Blocking | Pass | PRD-STD-007 |

### Gate Override Process

When a blocking gate must be overridden (emergency scenarios only):

1. The engineer documents the specific gate failure and business justification
2. An authorized approver (engineering lead for non-security gates; security team for security gates) reviews and approves the override
3. The override is logged in an audit trail with timestamp, approver, justification, and planned remediation
4. A follow-up ticket is created for remediation within 48 hours (security) or one sprint (non-security)
5. Override frequency is tracked and reported monthly; excessive overrides indicate misconfigured gates

### CI/CD Pipeline Example

```yaml
# Simplified quality gate pipeline structure
stages:
  - build-gates:
      - compile
      - lint
      - type-check
      - complexity-check
  - test-gates:
      - unit-tests
      - coverage-check
      - integration-tests
  - security-gates:
      - sast-scan
      - secret-detection
      - dependency-scan
      - license-check
  - performance-gates:  # staging only
      - benchmark-suite
      - regression-check
  - deploy-gates:
      - review-approval-check
      - gate-summary-report
      - deploy (with rollback)
```

## 6. Exceptions & Waiver Process

Exceptions MAY be granted for:

- **Performance gates** for projects that do not have defined performance budgets -- teams SHOULD define budgets within 90 days of adopting this standard
- **Complexity thresholds** for generated code that is inherently complex (e.g., state machines, parsers) -- requires architect approval and documented justification
- **Coverage thresholds** per the exceptions defined in [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements/)

No exceptions are available for security gates (REQ-007-11 through REQ-007-13) or the requirement for deployment gates (REQ-007-19).

## 7. Related Standards

- [PRD-STD-002: Code Review Standards](/production/standards/PRD-STD-002-code-review/) -- Review approval as a deployment gate
- [PRD-STD-003: Testing Requirements](/production/standards/PRD-STD-003-testing-requirements/) -- Test coverage thresholds enforced by test gates
- [PRD-STD-004: Security Scanning](/production/standards/PRD-STD-004-security-scanning/) -- Security scanning requirements enforced by security gates
- [PRD-STD-008: Dependency Compliance](/production/standards/PRD-STD-008-dependency-compliance/) -- License and vulnerability checks enforced by security gates
- [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/) -- Risk management framework

## 8. Revision History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-01-15 | AEEF Standards Committee | Initial release |
| 1.0.1 | 2026-01-15 | AEEF Standards Committee | Added complete gate summary table; expanded gate override process |

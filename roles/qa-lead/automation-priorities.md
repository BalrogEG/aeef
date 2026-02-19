---
title: "Automation Priorities"
sidebar_position: 5
description: "Prioritizing test automation for AI-augmented development."
---

# Automation Priorities

AI-assisted development accelerates code production, which means your manual testing capacity becomes a bottleneck faster than before. Automation is not optional in an AI-augmented environment -- it is the only way to maintain quality at the velocity AI enables. This section defines what to automate first, how to select tools, and how to integrate AI-specific automation into your CI/CD pipeline. It supports [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/) and complements the testing strategy defined in [Testing Strategy](/roles/qa-lead/testing-strategy).

## The Automation Imperative

### Why Automation Is More Urgent Now

In pre-AI development, the ratio of code production to testing capacity was manageable with a mix of manual and automated testing. AI changes this equation:

| Factor | Pre-AI | Post-AI | Automation Implication |
|--------|--------|---------|----------------------|
| Code volume per sprint | Baseline | 1.3-1.5x baseline | 30-50% more code to test |
| Defect density | Baseline | 1.7x baseline in AI code | More defects to catch per unit of code |
| Vulnerability rate | Baseline | 2.74x baseline in AI code | Security testing cannot be manual |
| PR review frequency | Baseline | 1.3-1.5x baseline | Automated checks must run before human review |
| Test creation speed | Limited by human writing speed | AI can generate tests rapidly | Test quality validation becomes the bottleneck |

**The conclusion:** Without proportionally increased automation, quality will degrade as AI-assisted teams produce more code.

## What to Automate First

### Priority 1: Security Scanning (Implement Immediately)

**Why first:** The 2.74x vulnerability rate makes this the highest-risk automation gap.

**What to automate:**

| Tool Type | Purpose | When to Run | Recommended Tools |
|-----------|---------|-------------|-------------------|
| **Secret detection** | Prevent hardcoded credentials from reaching version control | Pre-commit hook + CI | gitleaks, trufflehog, detect-secrets |
| **SAST** | Detect code-level vulnerability patterns | Every PR | Semgrep, SonarQube, CodeQL |
| **Dependency scanning** | Detect vulnerable or malicious dependencies | Every PR + nightly | Snyk, Dependabot, npm audit |
| **Container scanning** | Detect vulnerable base images and configurations | Every build | Trivy, Grype |

**Implementation checklist:**
- [ ] Pre-commit hooks installed on all developer machines
- [ ] SAST runs on every PR and blocks merge for critical/high findings
- [ ] Dependency scanning runs nightly and alerts on new vulnerabilities
- [ ] Secret detection runs in CI even if pre-commit hooks pass
- [ ] All tools configured with rules tuned for AI-specific vulnerability patterns

### Priority 2: Code Quality Gates (Week 1-2)

**Why second:** Prevents the most common AI code quality issues from reaching review.

**What to automate:**

| Check | Purpose | Configuration |
|-------|---------|---------------|
| **Linting** | Style consistency, common error detection | Per-language linter with team-specific rules |
| **Type checking** | Catch type errors in AI-generated code | TypeScript strict mode, mypy, etc. |
| **Complexity threshold** | Prevent overly complex AI-generated solutions | Max cyclomatic complexity per function (recommend 15) |
| **Test coverage enforcement** | Ensure new code has minimum test coverage | Coverage gate per [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements) requirements |
| **Dead code detection** | Catch unreferenced AI-generated code | Static analysis tool with dead code rules |
| **Duplication detection** | Catch AI-generated duplicate logic | CPD, jscpd, or equivalent with 5% threshold |

### Priority 3: Integration Testing (Week 2-4)

**Why third:** AI-generated code often works in isolation but fails in integration.

**What to automate:**

| Test Type | Purpose | Implementation |
|-----------|---------|----------------|
| **API contract tests** | Verify implementations match API contracts | Pact, Dredd, or custom contract validators |
| **Database migration tests** | Verify AI-generated migrations are safe and reversible | Automated migration up/down test in CI |
| **Authentication/authorization tests** | Verify every endpoint has proper access controls | Automated test suite that hits every endpoint with unauthenticated, unauthorized, and authorized requests |
| **Cross-service integration tests** | Verify services interact correctly | Docker Compose or Kubernetes-based integration test environment |

### Priority 4: Architecture Compliance (Month 2)

**Why fourth:** Prevents long-term codebase degradation from AI-generated architectural violations.

**What to automate:**

| Check | Purpose | Tooling |
|-------|---------|---------|
| **Dependency direction** | Verify code respects architectural layers | ArchUnit, NetArchTest, custom |
| **Import restrictions** | Prevent unauthorized cross-module imports | ESLint import rules, custom linter rules |
| **API surface area monitoring** | Detect unintended API expansion | Custom script that compares API surface to approved contract |
| **Database query analysis** | Detect N+1 queries and unbounded queries | Query analysis in CI or monitoring |

### Priority 5: Performance Testing (Month 2-3)

**Why fifth:** AI-generated code may have performance issues not visible in functional testing.

**What to automate:**

| Test Type | Purpose | When to Run |
|-----------|---------|-------------|
| **Load testing** | Verify performance under expected load | Nightly or weekly |
| **Stress testing** | Find breaking points | Weekly |
| **Endurance testing** | Detect memory leaks and resource exhaustion | Weekly |
| **API latency benchmarks** | Catch performance regressions | Every PR (lightweight) + nightly (full) |

## Tool Selection Criteria

When selecting automation tools, evaluate against these criteria:

| Criterion | Weight | Question |
|-----------|--------|----------|
| **AI-pattern awareness** | 25% | Does the tool have rules specifically for AI-generated code patterns? |
| **CI/CD integration** | 20% | Does it integrate smoothly with your CI/CD platform (GitHub Actions, GitLab CI, Jenkins, etc.)? |
| **Speed** | 20% | Can it run within acceptable PR check times (< 10 minutes for security, < 15 for full suite)? |
| **Configurability** | 15% | Can you add custom rules for your specific defect patterns? |
| **False positive rate** | 10% | Does it produce few enough false positives that developers trust the results? |
| **Cost** | 10% | Is the pricing sustainable at your organization's scale? |

:::warning
A tool that is too slow or produces too many false positives will be circumvented. Developers will find ways to bypass checks that consistently waste their time. Choose tools that are fast and accurate, and tune them to minimize false positives -- even if it means accepting some false negatives initially.
:::

## CI/CD Integration Architecture

### Pipeline Design

Design your CI/CD pipeline with AI-specific quality gates:

```
PR Created
  |
  v
[Stage 1: Fast Checks - < 3 minutes]
  - Linting
  - Type checking
  - Secret detection
  - Dependency vulnerability check
  |
  v
[Stage 2: Security Analysis - < 10 minutes]
  - SAST scan
  - Complexity analysis
  - Dead code detection
  - Duplication check
  |
  v
[Stage 3: Test Execution - < 15 minutes]
  - Unit tests with coverage
  - Coverage threshold enforcement
  - Integration tests (critical path)
  |
  v
[Stage 4: Architecture Checks - < 5 minutes]
  - Dependency direction verification
  - API contract validation
  - Import restriction enforcement
  |
  v
[Human Review]
  - All automated checks pass
  - Reviewer focuses on logic, design, and business correctness
  |
  v
[Merge]
```

### Pipeline Stage Requirements

| Stage | Must Pass to Proceed | Blocking Severity |
|-------|---------------------|-------------------|
| Fast Checks | Yes | Any failure blocks |
| Security Analysis | Yes | Critical/High block; Medium/Low are warnings |
| Test Execution | Yes | Any test failure blocks; coverage below threshold blocks |
| Architecture Checks | Configurable | Strict mode blocks; advisory mode warns |

### Nightly Pipeline (Extended Checks)

Run these checks nightly because they are too slow for every PR:

- Full mutation testing suite
- Comprehensive integration test suite
- Load and performance testing
- Full dependency tree vulnerability analysis
- Dead code analysis across the full codebase

## Measuring Automation Effectiveness

Track these metrics to ensure your automation investment is delivering value:

| Metric | Target | How to Measure |
|--------|--------|---------------|
| **Defect detection by automation** | > 60% of all defects caught by automated checks | Tag defects by detection source |
| **Time from PR to feedback** | < 15 minutes for full pipeline | CI/CD analytics |
| **False positive rate** | < 5% across all tools | Track overridden or dismissed findings |
| **Pipeline reliability** | > 99% success rate (excluding legitimate failures) | CI/CD analytics |
| **Coverage trend** | Increasing or stable | Coverage tracking over time |
| **Security findings trend** | Decreasing (indicating prevention is working) | SAST/DAST finding counts over time |

## Automation Roadmap

| Timeline | Focus | Outcome |
|----------|-------|---------|
| **Week 1** | Secret detection + SAST in CI | Critical security automation in place |
| **Week 2** | Code quality gates (linting, typing, complexity) | Quality floor established |
| **Week 3-4** | Integration testing automation | Integration confidence |
| **Month 2** | Architecture compliance + dependency scanning | Structural quality protection |
| **Month 3** | Performance testing + mutation testing | Deep quality validation |
| **Ongoing** | Custom rule development, tool tuning, false positive reduction | Continuous optimization |

For the testing strategy context, see [Testing Strategy](/roles/qa-lead/testing-strategy). For the defect patterns these automations should target, see [Defect Analysis](/roles/qa-lead/defect-analysis). For the management perspective on quality automation investment, see [Quality & Risk Oversight](/roles/development-manager/quality-risk-oversight).

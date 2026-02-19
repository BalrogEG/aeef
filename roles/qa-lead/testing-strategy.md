---
title: "Testing Strategy Adaptation"
sidebar_position: 2
description: "Adapting testing strategy for AI-generated code."
---

# Testing Strategy Adaptation

AI-generated code requires an adapted testing strategy that addresses new failure modes, increased code volume, and the specific patterns of defects that AI introduces. This section defines the additional test types, coverage requirements, and validation approaches needed to maintain quality when AI tools accelerate code production. It implements [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/) and [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements) in the context of AI-assisted development.

## Why Standard Testing Is Not Enough

Traditional testing strategies were designed for human-written code with human failure modes: typos, logic errors from fatigue, knowledge gaps, and time pressure shortcuts. AI-generated code fails differently:

| Human Code Failure Mode | AI Code Failure Mode | Testing Implication |
|------------------------|---------------------|---------------------|
| Typos and syntax errors | Syntactically perfect but logically wrong | Need semantic validation, not just compilation |
| Obvious shortcuts under time pressure | Subtly incorrect logic that looks correct | Need adversarial testing with edge cases |
| Missing edge cases due to oversight | Missing edge cases due to training data gaps | Need systematic boundary testing |
| Security gaps from lack of knowledge | Security gaps from pattern-matching insecure training examples | Need AI-specific security test suites |
| Inconsistent style from different developers | Inconsistent patterns from different prompts | Need architectural consistency testing |

## Adapted Testing Pyramid

The traditional testing pyramid (many unit tests, fewer integration tests, fewer E2E tests) remains valid, but each layer needs augmentation for AI-generated code.

### Layer 1: Unit Tests (Augmented)

**Standard requirements:**
- Minimum 80% line coverage for new code per [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements)
- All public methods have at least one test

**AI-specific additions:**

| Addition | Purpose | Implementation |
|----------|---------|----------------|
| **Boundary value tests** | Catch AI's tendency to miss edge cases | Require tests for min, max, zero, null, empty, and boundary values |
| **Negative tests** | Verify error handling (AI often generates happy-path only) | Require at least one test per error path |
| **Type coercion tests** | Catch AI's assumptions about type handling | Test with unexpected types where the language allows |
| **Assertion quality checks** | Prevent meaningless tests that always pass | Automated check: tests must contain specific assertions, not just "no exception thrown" |

### Layer 2: Integration Tests (Augmented)

**Standard requirements:**
- All API endpoints have integration tests
- All database interactions are tested
- External service integrations have contract tests

**AI-specific additions:**

| Addition | Purpose | Implementation |
|----------|---------|----------------|
| **Cross-module consistency tests** | Verify AI-generated modules interact correctly | Test data flow across module boundaries |
| **Authentication/authorization tests** | Catch missing auth checks (common AI omission) | Every endpoint tested with unauthenticated, unauthorized, and authorized requests |
| **Error propagation tests** | Verify errors propagate correctly through the stack | Test that errors from AI-generated lower layers surface correctly |
| **Contract violation tests** | Verify API implementations match their contracts | Compare API behavior against OpenAPI/Swagger specs |

### Layer 3: Security Tests (New Layer)

AI-generated code warrants a dedicated security testing layer:

| Test Type | Focus | Tooling |
|-----------|-------|---------|
| **SAST (Static Analysis)** | Code-level vulnerability patterns | Semgrep, SonarQube, Checkmarx |
| **DAST (Dynamic Analysis)** | Runtime vulnerability detection | OWASP ZAP, Burp Suite |
| **Dependency scanning** | Vulnerable or malicious dependencies | Snyk, Dependabot, npm audit |
| **Secret detection** | Hardcoded credentials in AI-generated code | git-secrets, trufflehog, gitleaks |
| **SQL injection testing** | Parameterized query verification | SQLMap, custom test suite |
| **Input validation testing** | Boundary and malicious input handling | Custom test suite based on OWASP Top 10 |

### Layer 4: Architecture Tests (New Layer)

Prevent AI-generated code from violating architectural boundaries:

| Test Type | Purpose | Implementation |
|-----------|---------|----------------|
| **Dependency direction tests** | Verify that code respects layer boundaries | ArchUnit (Java), NetArchTest (.NET), custom for other languages |
| **Pattern compliance tests** | Verify AI code follows established patterns | Custom validators against canonical examples |
| **API surface area tests** | Detect unintended API expansion | Compare API surface area against approved contract |
| **Complexity threshold tests** | Prevent AI from generating overly complex solutions | Cyclomatic complexity checks in CI |

## Coverage Requirements

### Coverage Targets by Risk Level

Align coverage requirements with the risk classification from [Velocity & Quality Trade-offs](/roles/product-manager/velocity-quality-tradeoffs):

| Risk Level | Line Coverage | Branch Coverage | Mutation Score | Security Test Coverage |
|-----------|-------------|----------------|---------------|----------------------|
| Critical | >= 90% | >= 85% | >= 70% | 100% of OWASP Top 10 |
| High | >= 85% | >= 80% | >= 60% | Key vulnerability categories |
| Medium | >= 80% | >= 75% | >= 50% | Standard SAST/DAST |
| Low | >= 75% | >= 70% | >= 40% | Standard SAST |

### Mutation Testing

Mutation testing is especially valuable for AI-generated code because it detects tests that pass without actually validating behavior (a common pattern in AI-generated tests).

**Implementation:**
1. Use a mutation testing framework (Pitest for Java, Stryker for JavaScript/TypeScript, mutmut for Python)
2. Set mutation score thresholds per risk level (see table above)
3. Run mutation testing nightly (too slow for every PR in most codebases)
4. Focus mutation testing on AI-generated code modules first

## Validation Approaches

### Property-Based Testing

Property-based testing is particularly effective for validating AI-generated code because it tests properties rather than specific examples:

**Example:** Instead of testing that `sort([3,1,2])` returns `[1,2,3]`, test that:
- The output has the same length as the input
- Every element in the output was in the input
- Each element is less than or equal to the next

This catches classes of bugs that example-based testing misses, especially the "plausible but wrong" pattern common in AI code.

### Metamorphic Testing

Test relationships between inputs and outputs rather than specific values. If AI-generated code correctly handles one input, does the relationship between related inputs hold?

**Example:** If `calculateDiscount(100, 10%)` returns 90, then `calculateDiscount(200, 10%)` should return 180 (linear relationship). Metamorphic testing can catch bugs where the AI implements the discount calculation slightly wrong but in a way that produces plausible-looking results.

### Specification-Based Testing

Derive tests directly from specifications rather than from the code:

1. Write acceptance criteria before implementation (see [User Stories for AI](/roles/product-manager/user-stories-ai))
2. Generate tests from acceptance criteria, independently of the AI-generated implementation
3. Run specification-based tests against the implementation
4. Any failure indicates the implementation deviates from the specification

:::tip
Specification-based testing is the most reliable way to validate AI-generated code because it is independent of the generation process. The tests are derived from what the code should do, not from what the code does do.
:::

## Test Quality Metrics

Track these metrics to ensure your testing strategy is effective:

| Metric | Target | Warning Sign |
|--------|--------|-------------|
| **Defect detection rate** | > 85% of defects found before production | Increasing escaped defects |
| **Mutation score** | Per risk level table above | Declining scores over time |
| **Test assertion density** | > 2 assertions per test on average | Tests with 0-1 assertions |
| **False positive rate** | < 5% of test failures are false positives | Developer fatigue with test suite |
| **Test execution time** | < 15 minutes for full suite | Developers skip tests due to slow runs |

For the AI test generation perspective, see [AI-Generated Test Coverage](/roles/qa-lead/ai-test-coverage). For defect pattern analysis, see [Defect Pattern Analysis](/roles/qa-lead/defect-analysis). For automation prioritization, see [Automation Priorities](/roles/qa-lead/automation-priorities).

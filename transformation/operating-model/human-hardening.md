---
title: "Human Hardening"
sidebar_position: 4
description: "Human review, refinement, and hardening of AI-generated outputs."
---

# Human Hardening

The Human Hardening stage is the third stage of the [Operating Model Lifecycle](/transformation/operating-model/) and the most critical quality control point in AI-assisted development. All AI-generated outputs MUST undergo thorough human review, code refactoring, security analysis, performance optimization, and quality assurance before proceeding to the [Governance Gate](/transformation/operating-model/governance-gate/). This stage exists because AI-generated code — however impressive at first glance — carries 1.7x more issues and a 2.74x higher vulnerability rate than human-authored code. Human hardening is not a rubber stamp; it is a deliberate, skilled engineering activity that transforms a prototype into production-quality software.

## Code Refactoring

### Refactoring Objectives

AI-generated code frequently exhibits patterns that require human refinement:

| Issue Pattern | Description | Refactoring Action |
|---|---|---|
| **Over-engineering** | AI generates unnecessarily complex solutions for simple problems | Simplify; remove unnecessary abstractions |
| **Naming inconsistency** | AI uses generic or inconsistent variable/function names | Align with organizational naming conventions |
| **Dead code** | AI generates unused functions, imports, or variables | Remove all dead code |
| **Duplication** | AI generates code that duplicates existing codebase functionality | Replace with calls to existing implementations |
| **Anti-patterns** | AI uses patterns that conflict with organizational standards | Refactor to approved patterns |
| **Missing error handling** | AI omits error handling or uses overly broad catch blocks | Add specific, appropriate error handling |
| **Hardcoded values** | AI embeds configuration values directly in code | Extract to configuration files or environment variables |

### Refactoring Checklist

Before marking refactoring as complete, the developer MUST verify:

- [ ] Code follows organizational style guide and naming conventions
- [ ] No dead code, unused imports, or commented-out blocks remain
- [ ] No duplication of existing codebase functionality
- [ ] Error handling is specific and appropriate for each failure mode
- [ ] Configuration values are externalized
- [ ] Code is no more complex than the problem requires
- [ ] All AI-generated comments are accurate (AI sometimes generates plausible but incorrect comments)
- [ ] Function and method sizes are within organizational limits (typically < 30 lines)
- [ ] Dependencies introduced by AI are validated (they exist, are maintained, and meet licensing requirements)

## Security Analysis

Security analysis during human hardening is the primary defense against the elevated vulnerability rate in AI-generated code. This analysis MUST be performed by a developer with security awareness training, and SHOULD be reviewed by the Security team for Risk Tier 3 and above.

### Security Review Checklist

The following security checks MUST be performed on all AI-generated code:

#### Input Validation and Injection

- [ ] All user inputs are validated and sanitized before use
- [ ] Database queries use parameterized statements (no string concatenation)
- [ ] HTML output is properly escaped to prevent XSS
- [ ] File paths are validated to prevent path traversal
- [ ] Command execution uses parameterized APIs (no shell injection vectors)
- [ ] XML parsing is configured to prevent XXE attacks
- [ ] Deserialization is restricted to expected types

#### Authentication and Authorization

- [ ] Authentication logic does not leak information (timing attacks, user enumeration)
- [ ] Authorization checks are present on all protected endpoints
- [ ] Session management follows organizational standards
- [ ] Passwords are hashed with approved algorithms (bcrypt, argon2) with appropriate parameters
- [ ] Tokens are generated with sufficient entropy and appropriate expiration

#### Data Protection

- [ ] Sensitive data is not logged or included in error messages
- [ ] Encryption uses current, approved algorithms and key lengths
- [ ] TLS is enforced for all external communications
- [ ] Secrets are not hardcoded (API keys, passwords, connection strings)
- [ ] Data at rest encryption is applied where required by data classification

#### Common AI Vulnerability Patterns

AI tools are known to produce the following vulnerability patterns with elevated frequency:

| Vulnerability | AI Tendency | What to Look For |
|---|---|---|
| SQL injection | Uses string interpolation instead of parameterized queries | Any SQL query constructed with `+`, `f""`, or template literals |
| Insecure defaults | Uses permissive defaults (e.g., CORS `*`, debug mode on) | Configuration settings that are too open |
| Missing authentication | Generates endpoints without authentication middleware | New endpoints without auth decorators/middleware |
| Deprecated APIs | Uses deprecated or insecure API versions | Method calls flagged by IDE or linter as deprecated |
| Insufficient input validation | Trusts input data without validation | Functions that process external input without validation |
| Predictable randomness | Uses `Math.random()` or similar for security-sensitive operations | Random value generation for tokens, IDs, or crypto |

## Performance Optimization

AI-generated code often prioritizes correctness and readability over performance. Human hardening MUST include performance evaluation for code on performance-sensitive paths.

### Performance Review Criteria

| Criterion | Check | Action if Failed |
|---|---|---|
| **Algorithmic complexity** | Verify time and space complexity are appropriate for expected data volumes | Optimize algorithm or add pagination/batching |
| **Database query efficiency** | Check for N+1 queries, missing indexes, unnecessary joins | Optimize queries; add eager loading or caching |
| **Memory management** | Check for memory leaks, unnecessary data copies, unbounded collections | Add resource cleanup, pagination, streaming |
| **Concurrency** | Check for race conditions, deadlocks, thread safety issues | Add synchronization or use concurrent data structures |
| **I/O efficiency** | Check for unnecessary network calls, file operations, or serialization | Batch operations; add caching; reduce I/O |

### When Full Performance Review Is Required

- Code on hot paths (called > 100 times per second)
- Code processing large data sets (> 10,000 records)
- Code with latency-sensitive user-facing interactions
- Background jobs or batch processing code
- Code that introduces new external service calls

## Quality Assurance Procedures

### Test Development

AI-generated code MUST be accompanied by comprehensive tests. The testing strategy for AI-assisted code includes:

| Test Type | Requirement | Who Creates |
|---|---|---|
| Unit tests | REQUIRED for all AI-generated code | AI-generated (initial) + human review and augmentation |
| Integration tests | REQUIRED for code that interacts with external systems | Human-written (AI MAY assist) |
| Edge case tests | REQUIRED — AI-generated tests often miss edge cases | Human-written |
| Security tests | REQUIRED for security-sensitive code | Human-written with security expertise |
| Performance tests | RECOMMENDED for performance-sensitive code | Human-written |

### Test Quality Criteria

Tests for AI-generated code MUST meet higher quality standards than typical unit tests because they serve as the primary validation that the AI's output is correct:

- **Assertion quality** — Tests MUST contain meaningful assertions that verify behavior, not just that code runs without exceptions
- **Edge case coverage** — Tests MUST cover boundary conditions, null/empty inputs, error conditions, and concurrent access scenarios
- **Independence** — Tests MUST be independent of each other and of external state
- **Readability** — Test names MUST clearly describe what is being tested and what the expected behavior is
- **Coverage threshold** — AI-generated code MUST achieve the same or higher code coverage as the organizational standard (typically >= 80% line coverage)

### Documentation Requirements

The following documentation MUST be completed during human hardening:

- [ ] Inline code comments are accurate and explain "why," not "what"
- [ ] Public API documentation (JSDoc, Javadoc, docstrings) is complete and accurate
- [ ] README or wiki documentation is updated for any new features or configuration
- [ ] AI attribution metadata is present on all AI-assisted files and commits
- [ ] Any deviations from the original Business Intent are documented and communicated to stakeholders

### Hardening Completion Criteria

Human hardening is complete when ALL of the following criteria are met:

- [ ] All refactoring checklist items are verified
- [ ] All security review checklist items are verified
- [ ] Performance review is complete (for applicable code paths)
- [ ] All tests pass with required coverage
- [ ] Documentation is complete
- [ ] AI attribution metadata is in place
- [ ] The code is ready for peer review as part of the standard PR process
- [ ] The developer is confident the code meets production quality standards

Human hardening is where engineering discipline meets AI acceleration. The exploration stage generates raw material quickly; hardening transforms it into production-quality software. Skipping or rushing this stage negates the safety mechanisms of the entire AEEF framework. The time invested in hardening is what allows the organization to deploy AI-assisted code with the same confidence as human-authored code — and the data collected through [Expanded Metrics](/transformation/phase-2-expansion/expanded-metrics/) proves it.

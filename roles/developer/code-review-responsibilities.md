---
title: "Code Review Responsibilities"
sidebar_position: 4
description: "Code review responsibilities when working with AI-generated code."
---

# Code Review Responsibilities

Code review is the single most important quality gate for AI-generated code. Research shows that AI co-authored code has 1.7x more issues and a 2.74x higher vulnerability rate than human-authored code. These statistics do not mean AI tools are unsuitable for production work -- they mean that review rigor must increase to match the volume and speed of AI output. This section defines your responsibilities as both an author and reviewer of AI-assisted code, aligning with [PRD-STD-002](/production/standards/PRD-STD-002-code-review) and [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/).

## The Reviewer's Mindset for AI Code

When reviewing AI-generated code, adopt a fundamentally different mindset than when reviewing human-written code.

**Human-written code** tends to have errors of fatigue, oversight, or knowledge gaps. The logic structure is usually sound because the developer reasoned through it step by step.

**AI-generated code** tends to have errors of plausibility -- it looks correct, follows patterns, and passes a casual reading. But it may contain subtle logic errors, security vulnerabilities, or inappropriate assumptions that are harder to spot precisely because the surface quality is high.

:::warning
The greatest danger of AI-generated code is not obviously broken code -- it is code that looks perfectly reasonable but encodes incorrect assumptions, incomplete edge case handling, or insecure patterns. Train your eye for plausible but wrong code.
:::

## What to Look For

### 1. Logic Correctness

AI models excel at pattern matching but can struggle with complex business logic. Verify:

- **Boundary conditions.** Does the code handle zero, null, empty, maximum, and negative values correctly?
- **State transitions.** Are all valid state transitions handled? Are invalid transitions rejected?
- **Conditional logic.** Are all branches of if/else and switch statements correct? AI sometimes generates conditions that look right but have subtle inversions.
- **Loop behavior.** Check for off-by-one errors, infinite loop potential, and correct termination conditions.
- **Error propagation.** Are errors caught, logged, and propagated appropriately? AI often generates catch blocks that swallow exceptions silently.

### 2. Security

AI-generated code has a 2.74x higher vulnerability rate. Apply these checks on every review per [PRD-STD-005](/production/standards/PRD-STD-004-security-scanning):

- **Input validation.** Is all user input validated and sanitized before use?
- **SQL injection.** Are parameterized queries used consistently? AI sometimes generates string concatenation for queries.
- **Authentication and authorization.** Are access checks present and correct? AI may generate endpoints without auth middleware.
- **Secrets handling.** Are API keys, passwords, or tokens hardcoded? AI frequently generates placeholder credentials that developers forget to replace.
- **Dependency security.** Has the AI suggested importing packages with known vulnerabilities or unmaintained packages?

### 3. Architectural Consistency

AI does not inherently understand your system's architecture. Verify:

- **Pattern adherence.** Does the code follow your team's established patterns (repository pattern, service layer, etc.)?
- **Dependency direction.** Does the code respect architectural boundaries (e.g., controllers should not directly access repositories)?
- **Naming conventions.** Are class names, method names, and variable names consistent with the codebase?
- **File organization.** Is the code placed in the correct directory and module?

### 4. Test Quality

AI-generated tests deserve special scrutiny because they may pass while testing nothing meaningful:

- **Assertion quality.** Do tests make meaningful assertions, or do they just verify that no exception was thrown?
- **Edge case coverage.** Are boundary conditions and error paths tested?
- **Test independence.** Are tests isolated from each other? AI sometimes generates tests with shared mutable state.
- **Mock correctness.** Do mocks accurately represent the behavior of the real dependencies?

See [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements) for full testing standards and the [QA Lead Guide: AI Test Coverage](/roles/qa-lead/ai-test-coverage) for test quality assessment.

## Common Pitfalls in AI-Generated Code

| Pitfall | Description | How to Catch It |
|---------|-------------|----------------|
| **Hallucinated APIs** | AI generates calls to functions or methods that do not exist | Verify every external call against documentation or source code |
| **Stale patterns** | AI uses deprecated APIs or outdated library versions | Check that imports and method calls match your current dependency versions |
| **Overly permissive error handling** | Broad try/catch blocks that swallow errors | Inspect every catch block for appropriate logging and re-throwing |
| **Phantom validation** | Code that appears to validate input but has logical gaps | Trace the validation path with adversarial inputs |
| **Copy-paste drift** | AI generates code similar to another module but with subtle differences | Diff against the reference implementation to verify intentional deviations |
| **Confidence without correctness** | Well-commented, well-structured code that implements the wrong algorithm | Verify the algorithm against requirements, not just the code against itself |
| **Missing concurrency handling** | Code that works in tests but fails under concurrent access | Identify shared state and verify thread-safety or serialization |

## Red Flags That Require Immediate Attention

The following patterns should trigger a pause in the review and a conversation with the author:

1. **Disabled security controls.** Comments like `// TODO: add authentication later` or bypassed validation.
2. **Hardcoded credentials.** Any string that looks like an API key, password, connection string, or token.
3. **Unrestricted file system access.** Code that reads from or writes to arbitrary paths without sanitization.
4. **Raw SQL queries.** String concatenation in database queries, especially with user input.
5. **Disabled tests.** AI sometimes generates `@Ignore` or `skip` annotations on tests that fail.
6. **Unexplained complexity.** Code that is significantly more complex than the problem requires, suggesting the AI went down a wrong path.
7. **Network calls to unknown endpoints.** AI may generate calls to external services or APIs that are not part of your architecture.

## Approval Criteria

Before approving a PR containing AI-generated code, verify all of the following:

- [ ] The author has confirmed they reviewed and understand all AI-generated code
- [ ] All automated checks (linting, type checking, tests, security scanning) pass
- [ ] The code correctly implements the ticket requirements
- [ ] No security red flags are present
- [ ] The code follows established architectural patterns
- [ ] Tests provide meaningful coverage of the new code
- [ ] Documentation is accurate and complete
- [ ] No sensitive data is exposed in the code or comments
- [ ] The code does not introduce unnecessary dependencies

## Escalation Triggers

Escalate to your [Development Manager](/roles/development-manager/) or technical lead when you encounter:

| Trigger | Escalation Action |
|---------|------------------|
| Security vulnerability that may exist in other AI-generated code | Trigger a broader security audit per [PRD-STD-005](/production/standards/PRD-STD-004-security-scanning) |
| Systematic pattern of low-quality AI output from a tool | Report to the tool evaluation process per [Tooling Decisions](/roles/development-manager/tooling-decisions) |
| Developer consistently committing unreviewed AI code | Address through [Performance Management](/roles/development-manager/performance-management) |
| AI-generated code that touches regulated or compliance-sensitive areas | Engage compliance team before merging |
| Architectural decisions made by AI that diverge from team standards | Discuss in architecture review forum |

## Reviewer Efficiency Tips

Reviewing AI-generated code is mentally taxing because of the plausibility problem. Use these techniques to maintain effectiveness:

1. **Review in short sessions.** Limit review sessions to 30-45 minutes. Take breaks between reviews.
2. **Use a checklist.** Do not rely on memory. Use the checklists in this section and in [PRD-STD-002](/production/standards/PRD-STD-002-code-review).
3. **Start with tests.** Read the tests first to understand the intended behavior, then verify the implementation matches.
4. **Focus on boundaries.** Pay extra attention to function inputs, outputs, error handling, and integration points.
5. **Ask "why" not just "what."** For each piece of AI-generated code, ask whether the approach is correct, not just whether the syntax is valid.

:::info
For team-level review process design and quality dashboard configuration, see [Quality & Risk Oversight](/roles/development-manager/quality-risk-oversight) in the Development Manager Guide.
:::

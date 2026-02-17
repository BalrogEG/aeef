---
title: "Prompt Engineering Rigor"
sidebar_position: 2
description: "Standards for crafting effective, repeatable, and auditable prompts for AI-assisted development."
---

# Prompt Engineering Rigor

Prompt engineering rigor ensures that interactions with AI development tools are structured, repeatable, auditable, and produce consistent results. Unstructured prompting leads to inconsistent outputs, wasted iteration cycles, and code that fails to meet organizational standards. This section defines mandatory standards for prompt templates, context management, constraint specification, prompt version control, and prompt library governance.

## Why Prompt Discipline Matters

Research consistently demonstrates that prompt quality directly correlates with output quality. Teams that adopt structured prompting practices report:

- 40-60% reduction in AI output rejection rates
- Significantly fewer security vulnerabilities in generated code
- Higher first-pass code review approval rates
- Better knowledge transfer between team members

:::warning
Ad-hoc, unstructured prompting is the primary vector through which AI tools introduce defects, security vulnerabilities, and architectural drift into codebases. Treating prompts as engineering artifacts -- versioned, reviewed, and maintained -- is a mandatory practice under AEEF.
:::

## Prompt Template Standards

### Template Structure

All prompts used for code generation, refactoring, or architectural exploration MUST follow the organization's standard template structure. Templates ensure that critical context is never omitted.

**Mandatory template sections:**

| Section | Purpose | Required |
|---|---|---|
| **Role/Persona** | Defines the AI's operational context and expertise level | MUST |
| **Task Description** | Clear, unambiguous statement of what is being requested | MUST |
| **Constraints** | Technical constraints, coding standards, forbidden patterns | MUST |
| **Context** | Relevant code, architecture decisions, dependencies | MUST |
| **Output Format** | Expected structure of the response (code, explanation, both) | SHOULD |
| **Examples** | Input/output examples demonstrating expected behavior | RECOMMENDED |
| **Negative Examples** | Patterns or approaches to explicitly avoid | RECOMMENDED |

### Example: Code Generation Prompt Template

```markdown
## Role
You are a senior backend engineer working in a Java 21 / Spring Boot 3.2
codebase that follows hexagonal architecture. The team uses JUnit 5 for
testing and follows Google Java Style Guide.

## Task
Generate a REST controller for the User Registration feature that:
- Accepts POST requests at /api/v2/users
- Validates input using Jakarta Bean Validation
- Delegates to the UserRegistrationService (already exists in the domain layer)
- Returns 201 Created with Location header on success
- Returns 400 Bad Request with RFC 7807 Problem Detail on validation failure

## Constraints
- Do NOT use field injection; use constructor injection only
- Do NOT include any business logic in the controller
- Do NOT generate the service layer; it already exists
- All exceptions MUST be handled via @ControllerAdvice (already configured)
- Method MUST be annotated with @Operation for OpenAPI documentation

## Context
Existing service interface:
[paste UserRegistrationService interface here]

Existing DTO pattern example:
[paste example DTO here]

## Output Format
Provide the controller class only. Include imports. Add inline comments
only where the implementation choice is non-obvious.
```

### Example: Debugging Prompt Template

```markdown
## Role
You are a senior engineer debugging a production issue in a Python 3.12
FastAPI application deployed on Kubernetes.

## Problem
[Describe the observed behavior, expected behavior, and error messages]

## Stack Trace / Logs
[Paste relevant stack traces, log excerpts, or error output]

## What Has Been Tried
[List diagnostic steps already taken and their results]

## Constraints
- Do NOT suggest solutions that require Python version changes
- Do NOT suggest replacing the ORM (SQLAlchemy 2.0 is mandatory)
- Focus on root cause analysis before suggesting fixes

## Output Format
1. Root cause analysis (most likely to least likely)
2. Recommended fix with code
3. Test case to verify the fix
```

### Example: Refactoring Prompt Template

```markdown
## Role
You are a senior engineer performing a refactoring to improve testability
and reduce cyclomatic complexity.

## Target Code
[Paste the function or class to be refactored]

## Refactoring Goals
- Reduce cyclomatic complexity from [current] to below [target]
- Extract pure functions where possible
- Maintain identical external behavior (all existing tests must pass)

## Constraints
- Do NOT change the public API signature
- Do NOT introduce new dependencies
- Preserve all existing error handling behavior
- Follow [link to style guide] conventions

## Output Format
1. Refactored code
2. Brief explanation of each change and why it improves the code
3. Any new test cases needed to cover extracted functions
```

## Context Management

Effective context management is critical because AI model output quality degrades when context is incomplete, contradictory, or excessive.

### Context Window Discipline

- Developers MUST provide sufficient context for the AI to produce correct output, including relevant interfaces, type definitions, and architectural constraints
- Developers MUST NOT dump entire codebases into context; curate only the relevant modules and interfaces
- When context exceeds the model's effective window, developers MUST decompose the task into smaller sub-tasks with focused context
- Context SHOULD be organized from most important to least important, as models attend more reliably to content at the beginning and end of context windows

### Required Context Elements

For code generation tasks, the following context elements MUST be provided:

1. **Language and framework versions** (e.g., "Python 3.12, Django 5.0")
2. **Architectural pattern** (e.g., "hexagonal architecture," "CQRS")
3. **Relevant interfaces and type signatures** that the generated code must implement or interact with
4. **Coding standards reference** or inline specification of critical conventions
5. **Security requirements** relevant to the generated code

:::tip
Maintain a per-project "AI context document" that captures the standing context every developer should include when prompting for that project. Version this document alongside the codebase.
:::

## Constraint Specification

Constraints are the most impactful section of any prompt. Under-constrained prompts produce plausible but non-conformant code.

### Constraint Categories

| Category | Examples | Priority |
|---|---|---|
| **Security Constraints** | "No raw SQL queries," "All inputs must be parameterized" | MUST include |
| **Architectural Constraints** | "No direct database access from controllers," "Use repository pattern" | MUST include |
| **Style Constraints** | "Follow PEP 8," "Use named exports only" | SHOULD include |
| **Dependency Constraints** | "Do not add new dependencies," "Use only stdlib" | MUST include when applicable |
| **Performance Constraints** | "O(n) time complexity maximum," "No N+1 queries" | SHOULD include when applicable |
| **Negative Constraints** | "Do NOT use eval()," "Do NOT use any deprecated APIs" | RECOMMENDED |

Negative constraints (explicitly stating what NOT to do) are often more effective than positive constraints alone, as AI models are prone to generating commonly-seen patterns even when they violate project standards.

## Prompt Version Control

Prompts are engineering artifacts and MUST be treated with the same rigor as source code.

### Version Control Requirements

- Reusable prompts MUST be stored in the project's prompt library directory (RECOMMENDED path: `prompts/` at repository root)
- Prompts MUST be versioned using semantic versioning: `MAJOR.MINOR.PATCH`
  - **MAJOR**: Changes that alter the fundamental behavior or output structure
  - **MINOR**: Added constraints or context that refine output quality
  - **PATCH**: Typo corrections, formatting, clarifications with no behavioral impact
- Changes to shared prompts MUST go through the same code review process as source code changes
- Prompt changelogs SHOULD be maintained to track the rationale for changes

### Prompt Metadata

Each versioned prompt MUST include the following metadata header:

```yaml
# prompt-meta:
#   id: code-gen/rest-controller
#   version: 2.1.0
#   author: jane.smith
#   last-validated: 2026-01-15
#   target-models: [claude-opus-4, gpt-4o]
#   domain: backend/api
#   tags: [rest, controller, spring-boot]
```

## Prompt Libraries

Organizations MUST maintain a curated prompt library that serves as the canonical source of approved, tested prompts.

### Library Governance

- The prompt library MUST have a designated maintainer or maintainer team
- New prompts MUST be validated against at least two representative use cases before inclusion
- Prompts MUST be tested against the organization's approved AI models and their outputs verified
- Deprecated prompts MUST be marked with a deprecation notice and a pointer to the replacement
- The library SHOULD be organized by domain (backend, frontend, infrastructure, testing, security)

### Library Structure (RECOMMENDED)

```
prompts/
  backend/
    code-gen/
      rest-controller.v2.1.0.md
      repository-impl.v1.3.0.md
    refactoring/
      reduce-complexity.v1.0.0.md
    debugging/
      performance-issue.v1.1.0.md
  frontend/
    ...
  testing/
    unit-test-gen.v3.0.0.md
    integration-test-gen.v2.0.0.md
  security/
    auth-flow-review.v1.2.0.md
  _deprecated/
    ...
```

## Anti-Patterns

:::danger
The following prompt engineering anti-patterns MUST be avoided:

- **Vague tasking**: "Write me a service" without specifying interfaces, constraints, or context
- **Context dumping**: Pasting thousands of lines of code without curation
- **Missing constraints**: Omitting security, architectural, or style constraints
- **Prompt chaining without validation**: Feeding AI output from one prompt into another without human review between steps
- **Ignoring model limitations**: Using prompts validated on one model with a different model without re-validation
:::

## Integration with Review Processes

All AI-generated code submitted for review MUST include a reference to the prompt (or prompt template) used to generate it. Reviewers MUST have access to the prompt to evaluate whether the output correctly satisfies the stated requirements. See [Human-in-the-Loop Review Processes](./human-in-the-loop.md) for the full review workflow.

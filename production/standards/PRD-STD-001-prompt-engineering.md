---
title: "PRD-STD-001: Prompt Engineering Standards"
sidebar_position: 2
description: "Standards for structured prompt engineering in production development."
---

# PRD-STD-001: Prompt Engineering Standards

**Standard ID:** PRD-STD-001
**Version:** 1.0
**Status:** Active
**Compliance Level:** Level 2 (Managed)
**Effective Date:** 2025-01-15
**Last Reviewed:** 2026-01-15

## 1. Purpose

This standard defines requirements for prompt engineering in production development environments. Unstructured, ad-hoc prompting leads to inconsistent AI outputs, increased defect rates, and wasted iteration cycles. By establishing structured prompt engineering practices, organizations can improve the quality and predictability of AI-generated code, reduce rework, and create repeatable patterns that scale across teams.

Research indicates that well-structured prompts with explicit constraints produce code with significantly fewer defects than unconstrained natural-language requests. This standard codifies those practices into enforceable requirements.

## 2. Scope

This standard applies to:

- All prompts used to generate, modify, or refactor production code via AI coding assistants
- All AI tools used in production development, including IDE-integrated assistants (GitHub Copilot, Cursor, Claude Code), chat-based interfaces, and API-based code generation
- All engineers, contractors, and contributors who use AI tools in production workflows

This standard does NOT apply to prompts used exclusively for learning, experimentation, or non-production prototyping in isolated environments.

## 3. Definitions

| Term | Definition |
|---|---|
| **Prompt** | A natural-language instruction or set of instructions provided to an AI coding assistant to generate, modify, or explain code |
| **System Prompt** | A persistent prompt that establishes context, role, and constraints for an AI session |
| **Prompt Template** | A reusable prompt structure with parameterized fields for specific use cases |
| **Context Block** | A section of a prompt that provides relevant code, documentation, or architectural context |
| **Constraint Specification** | Explicit limitations or requirements declared within a prompt (e.g., language version, framework, security requirements) |
| **Prompt Library** | A curated, version-controlled collection of approved prompt templates |

## 4. Requirements

### 4.1 Prompt Structure

:::danger MANDATORY
**REQ-001-01:** All prompts for production code generation MUST include, at minimum: (a) a clear objective statement, (b) relevant context, and (c) explicit constraints or requirements.

**REQ-001-02:** Prompts MUST specify the target programming language, framework version, and any relevant coding standards or style guides.

**REQ-001-03:** Prompts MUST NOT include credentials, API keys, personally identifiable information (PII), or other sensitive data. Engineers MUST use placeholder values and reference environment variables instead.

**REQ-001-04:** Prompts for security-sensitive code (authentication, authorization, cryptography, input validation) MUST explicitly state security requirements and reference applicable security standards (e.g., OWASP Top 10).
:::

:::warning RECOMMENDED
**REQ-001-05:** Prompts SHOULD include examples of expected input/output behavior when the desired behavior is non-trivial.

**REQ-001-06:** Prompts SHOULD specify error handling expectations, including which exceptions to catch, logging requirements, and fallback behavior.

**REQ-001-07:** Prompts SHOULD reference the project's architecture patterns (e.g., "follow the repository pattern used in `src/repositories/`") rather than relying on AI to infer patterns.
:::

### 4.2 Context Management

:::danger MANDATORY
**REQ-001-08:** Engineers MUST provide relevant existing code context (interfaces, types, adjacent functions) when requesting AI to generate code that integrates with an existing codebase.

**REQ-001-09:** Engineers MUST verify that the context provided to AI tools does not include proprietary code from third-party vendors whose licenses prohibit sharing with AI services.
:::

:::warning RECOMMENDED
**REQ-001-10:** Engineers SHOULD use progressive disclosure--starting with high-level architecture context and narrowing to specific implementation details--for complex code generation tasks.

**REQ-001-11:** Engineers SHOULD include relevant test cases or acceptance criteria in the prompt context to guide AI-generated implementations.
:::

### 4.3 Constraint Specification

:::danger MANDATORY
**REQ-001-12:** Prompts for production code MUST specify performance constraints when the code operates in a performance-sensitive path (e.g., "response time MUST be under 200ms at P99").

**REQ-001-13:** Prompts MUST specify compatibility requirements, including minimum supported versions of runtimes, browsers, or operating systems.
:::

:::warning RECOMMENDED
**REQ-001-14:** Prompts SHOULD specify complexity constraints (e.g., "avoid nested loops deeper than 3 levels," "prefer O(n) solutions") when relevant.

**REQ-001-15:** Prompts SHOULD explicitly state what the AI should NOT do (negative constraints), particularly for patterns that are known to be problematic in the project.
:::

### 4.4 Version Control and Prompt Library

:::danger MANDATORY
**REQ-001-16:** Organizations MUST maintain a version-controlled prompt library for recurring code generation tasks (e.g., CRUD operations, API endpoints, data migrations).

**REQ-001-17:** Prompt templates in the library MUST be reviewed and approved by at least one senior engineer before inclusion.

**REQ-001-18:** The prompt library MUST be accessible to all engineers within the organization.
:::

:::warning RECOMMENDED
**REQ-001-19:** Organizations SHOULD track prompt effectiveness metrics (acceptance rate, defect rate, iteration count) to continuously improve prompt templates.

**REQ-001-20:** Teams SHOULD conduct periodic prompt reviews (at least quarterly) to retire ineffective templates and add new ones based on emerging patterns.
:::

## 5. Implementation Guidance

### Prompt Template Structure

A well-structured prompt template for production code generation follows this pattern:

```
## Role
You are a [language/framework] developer working on [project type].

## Context
- Project: [project description]
- Architecture: [relevant patterns]
- Existing code: [relevant interfaces/types]

## Task
[Clear, specific description of what to generate]

## Constraints
- Language: [language and version]
- Framework: [framework and version]
- Style: [coding standard reference]
- Performance: [requirements if applicable]
- Security: [requirements if applicable]

## Expected Behavior
- Input: [example input]
- Output: [example output]
- Error cases: [expected error handling]

## Do NOT
- [Specific anti-patterns to avoid]
```

### Prompt Library Organization

Organize the prompt library by category:

```
prompts/
  api/
    rest-endpoint.md
    graphql-resolver.md
  data/
    migration.md
    repository.md
  testing/
    unit-test.md
    integration-test.md
  security/
    auth-middleware.md
    input-validation.md
```

### Checklist for Prompt Quality

Before submitting a prompt for production code generation, verify:

- [ ] Objective is clearly stated in one or two sentences
- [ ] Target language and framework version are specified
- [ ] Relevant existing code is included as context
- [ ] Constraints (performance, security, compatibility) are explicit
- [ ] No sensitive data (credentials, PII) is included
- [ ] Error handling expectations are defined
- [ ] Negative constraints ("do not") are stated where applicable
- [ ] Expected behavior examples are provided for non-trivial tasks

## 6. Exceptions & Waiver Process

Exceptions to this standard MAY be granted in the following circumstances:

- **Trivial code generation** (e.g., simple utility functions under 10 lines) MAY use abbreviated prompts, provided the output is reviewed per [PRD-STD-002](/production/standards/PRD-STD-002-code-review/)
- **IDE inline completions** (single-line or multi-line autocomplete) are exempt from prompt structure requirements, but MUST still comply with REQ-001-03 (no sensitive data)

To request a waiver, submit a request to the engineering standards committee with:

1. The specific requirement(s) to be waived
2. Justification for the exception
3. Proposed alternative controls
4. Duration of the waiver (maximum 6 months, renewable)

## 7. Related Standards

- [PRD-STD-002: Code Review Standards](/production/standards/PRD-STD-002-code-review/) -- All AI-generated code MUST be reviewed regardless of prompt quality
- [PRD-STD-005: Documentation Requirements](/production/standards/PRD-STD-005-documentation/) -- Prompt documentation and knowledge preservation
- [PRD-STD-007: Quality Gates](/production/standards/PRD-STD-007-quality-gates/) -- Automated enforcement of code quality
- [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/) -- Organizational risk framework
- [Context Window Management](/production/best-practices/context-window-management/) -- Best practices for context optimization
- [Iterative Refinement](/production/best-practices/iterative-refinement/) -- Patterns for refining AI outputs

## 8. Revision History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-01-15 | AEEF Standards Committee | Initial release |
| 1.0.1 | 2026-01-15 | AEEF Standards Committee | Annual review; no substantive changes |

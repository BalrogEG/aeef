---
title: "Advanced Prompt Engineering Standards"
sidebar_position: 3
description: "Enterprise-grade prompt engineering standards and patterns."
---

# Advanced Prompt Engineering Standards

This section defines advanced prompt engineering standards including complex prompt architectures, chain-of-thought patterns, domain-specific prompt libraries, and prompt quality assurance processes. In [Phase 1](/transformation/phase-1-foundation/developer-training/), developers learned foundational prompting skills. In Phase 3, the organization formalizes advanced techniques that maximize code quality, minimize vulnerability introduction, and create reusable intellectual property. Advanced prompt engineering is what separates organizations that use AI tools from organizations that use them effectively.

## Complex Prompt Architectures

Advanced prompt engineering moves beyond single-shot prompts to structured architectures that consistently produce higher-quality output.

### System-Context-Instruction-Constraint (SCIC) Architecture

The SCIC architecture is the RECOMMENDED standard for complex code generation prompts:

| Component | Purpose | Example |
|---|---|---|
| **System** | Establishes the AI's role and behavioral constraints | "You are a senior TypeScript developer following strict security practices. You never use `any` type. You always validate input." |
| **Context** | Provides relevant codebase context, patterns, and conventions | "This project uses NestJS with TypeORM. Authentication uses JWT with refresh tokens. Error handling follows the Result pattern." |
| **Instruction** | Specifies the exact task to be performed | "Create a service method that processes payment refunds, including validation, database transaction, and event emission." |
| **Constraint** | Defines boundaries, requirements, and quality criteria | "The method MUST: handle partial refunds, use database transactions, emit domain events, include error handling for gateway failures, and have JSDoc comments." |

### Multi-Step Decomposition Pattern

For complex tasks, prompts SHOULD be decomposed into a sequence of focused steps rather than a single monolithic prompt:

1. **Architecture prompt** — Ask for the high-level design and interface definitions
2. **Implementation prompt** — Implement each component, providing the architecture as context
3. **Test prompt** — Generate tests based on the implementation, specifying edge cases to cover
4. **Review prompt** — Ask the AI to review its own output for common issues (security, error handling, edge cases)
5. **Documentation prompt** — Generate documentation from the final implementation

Each step SHOULD reference the output of the previous step as context. This approach produces higher-quality output because each step has a focused scope and the review step catches errors from earlier steps.

### Constraint-Driven Generation

Constraint-driven prompts explicitly state what the output MUST and MUST NOT contain. This pattern is particularly effective for security-sensitive code:

```
Generate a user authentication endpoint that:
MUST:
- Use parameterized queries for all database operations
- Hash passwords with bcrypt (minimum 12 rounds)
- Return consistent error messages (no information leakage)
- Include rate limiting logic
- Log authentication attempts (without logging passwords)

MUST NOT:
- Store passwords in plaintext
- Include user enumeration vectors
- Use string concatenation for SQL queries
- Return stack traces in error responses
- Store session data in local memory
```

## Chain-of-Thought Patterns

Chain-of-thought (CoT) prompting asks the AI to reason through the problem step by step before generating code. This technique significantly improves output quality for complex logic.

### When to Use Chain-of-Thought

CoT prompting is RECOMMENDED for:
- Algorithmic code with complex business logic
- Code that must handle multiple edge cases
- Security-sensitive code where reasoning about threats matters
- Integration code that must coordinate multiple systems
- Debugging and root cause analysis

### CoT Prompt Template

```
Before writing any code, analyze the following requirements step by step:

1. Identify the core problem being solved
2. List all edge cases and error conditions
3. Identify security considerations
4. Design the function signature and data flow
5. Then implement the solution

Requirements: [specific requirements here]
```

### Self-Verification Pattern

After generating code, prompt the AI to verify its own output:

```
Review the code you just generated and check for:
1. Off-by-one errors in loops and array operations
2. Null/undefined reference risks
3. Missing error handling for external calls
4. SQL injection or other injection vulnerabilities
5. Race conditions in concurrent operations
6. Memory leaks or resource cleanup issues

List any issues found and provide corrected code.
```

This self-verification pattern catches approximately 30-40% of errors that would otherwise require human detection during code review.

## Domain-Specific Prompt Libraries

Building on the prompt library established in [Phase 2: Knowledge Sharing](/transformation/phase-2-expansion/knowledge-sharing/), Phase 3 develops domain-specific prompt libraries that encode organizational knowledge and standards.

### Library Categories

| Category | Description | Examples |
|---|---|---|
| **Security patterns** | Prompts for generating security-critical code with built-in protections | Authentication flows, input validation, encryption utilities, authorization checks |
| **Architecture patterns** | Prompts for generating code that follows organizational architecture standards | Service layer patterns, repository patterns, event-driven patterns, API design |
| **Testing patterns** | Prompts for comprehensive test generation | Unit test templates, integration test scaffolds, property-based test generators |
| **Migration patterns** | Prompts for database and API migrations | Schema migrations, data transformations, backward-compatible API changes |
| **Compliance patterns** | Prompts that embed regulatory requirements | HIPAA-compliant data handling, PCI-DSS payment processing, GDPR data management |

### Domain-Specific Prompt Development Process

1. **Identification** — Team Champions and Prompt Engineering Specialists identify recurring code generation tasks within their domain
2. **Drafting** — A domain expert drafts the prompt, incorporating organizational standards and constraints
3. **Testing** — The prompt is tested against at least 10 representative scenarios across different AI tools
4. **Review** — The prompt and its outputs are reviewed by a Tech Lead and a Security reviewer
5. **Documentation** — The prompt is documented with usage guidelines, expected outputs, and known limitations
6. **Publication** — The prompt is added to the organizational prompt library with appropriate categorization
7. **Maintenance** — Prompts are retested quarterly and after every major model update

### Prompt Versioning

Domain-specific prompts MUST be versioned with the following metadata:

```yaml
prompt_id: SEC-AUTH-001
version: 2.1.0
title: "JWT Authentication Service Generation"
domain: security
language: typescript
framework: nestjs
model_tested: [gpt-4, claude-3.5]
last_tested: 2026-01-15
author: security-team
status: verified
breaking_changes: "v2.0 - Updated to require refresh token rotation"
```

## Prompt Quality Assurance Processes

As prompts become organizational intellectual property, they require quality assurance processes comparable to code quality processes.

### Prompt QA Pipeline

Every prompt added to the organizational library MUST pass through a QA pipeline:

| Stage | Check | Criteria |
|---|---|---|
| **Syntax review** | Prompt structure follows SCIC architecture | All four components present and well-formed |
| **Output quality test** | Generated code is correct and functional | Passes automated tests in 8/10 runs |
| **Security test** | Generated code passes SAST scanning | Zero Critical or High findings in 9/10 runs |
| **Consistency test** | Outputs are consistent across multiple runs | Core structure matches in 8/10 runs |
| **Cross-model test** | Prompt works across approved AI tools | Meets quality criteria on all approved tools |
| **Edge case test** | Prompt handles unusual inputs gracefully | Degrades gracefully rather than producing unsafe code |
| **Documentation review** | Usage guidelines are clear and complete | Reviewed by someone outside the authoring team |

### Prompt Effectiveness Metrics

The following metrics MUST be tracked for all organizational prompts:

| Metric | Definition | Target |
|---|---|---|
| **Usage frequency** | Number of times the prompt is used per month | Informational |
| **Success rate** | Percentage of uses that produce usable output without major revision | > 80% |
| **Defect rate** | Defects traced to code generated by this prompt | < 2% of defects |
| **User rating** | Average user satisfaction rating | >= 4.0/5.0 |
| **Revision rate** | Percentage of uses requiring significant manual revision | < 30% |

### Prompt Retirement Criteria

A prompt SHOULD be retired (archived, not deleted) when:
- Its success rate drops below 60% for two consecutive measurement periods
- The technology or framework it targets is deprecated by the organization
- A significantly improved replacement prompt is published
- A model update fundamentally changes the prompt's behavior and it cannot be effectively updated

Advanced prompt engineering is a discipline, not a trick. The standards defined here ensure that organizational prompt practices evolve systematically, producing consistently high-quality output while managing the security risks inherent in AI-generated code. These standards support the [AI-First Workflows](/transformation/phase-3-enterprise-scale/ai-first-workflows/) that make AI assistance the default operating mode.

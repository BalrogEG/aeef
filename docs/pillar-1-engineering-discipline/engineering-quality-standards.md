---
title: "Engineering Quality Standards"
sidebar_position: 5
description: "Quality standards specific to AI-augmented engineering workflows."
---

# Engineering Quality Standards

This section defines the quality standards that all AI-augmented engineering outputs MUST meet before integration into the codebase. These standards establish measurable thresholds for code complexity, documentation, test coverage, architectural conformance, and technical debt. They serve as the definitive quality gates in the CI/CD pipeline and the benchmarks against which [AI Output Verification](./ai-output-verification.md) and [Human-in-the-Loop Review](./human-in-the-loop.md) processes evaluate AI-generated code.

## Why Elevated Standards for AI-Generated Code

AI code generation tools optimize for plausible, functional output. They do not inherently optimize for maintainability, architectural consistency, or long-term codebase health. Without explicit quality gates, AI-assisted development accelerates the accumulation of technical debt, architectural drift, and maintenance burden. The standards in this section compensate for these tendencies by establishing firm, measurable boundaries.

:::info
These standards apply to all code entering the codebase, whether AI-generated or human-authored. However, AI-generated code is subject to **stricter enforcement** because of its statistically higher defect and vulnerability rates.
:::

## Complexity Thresholds

Code complexity directly correlates with defect density, testing difficulty, and maintenance cost. AI-generated code frequently exceeds reasonable complexity thresholds because models tend to produce monolithic solutions rather than well-decomposed components.

### Mandatory Complexity Limits

| Metric | Maximum for AI-Generated Code | Maximum for Human-Authored Code | Measurement Tool |
|---|---|---|---|
| **Cyclomatic Complexity (per function)** | 10 | 15 | SonarQube, radon, lizard, ESLint complexity rule |
| **Cognitive Complexity (per function)** | 12 | 18 | SonarQube |
| **Function Length (lines)** | 40 | 60 | Linter configuration |
| **File Length (lines)** | 300 | 500 | Linter configuration |
| **Parameter Count (per function)** | 4 | 5 | Linter configuration |
| **Nesting Depth (maximum)** | 3 | 4 | Linter configuration |
| **Class Coupling (afferent + efferent)** | 10 | 15 | SonarQube, JDepend |

### Complexity Violation Protocol

- Code that exceeds any complexity threshold MUST NOT be merged without remediation
- If a legitimate business reason requires exceeding a threshold, a **complexity waiver** MUST be filed and approved by a Tier 2 or higher reviewer as defined in [Human-in-the-Loop](./human-in-the-loop.md)
- Waivers MUST include: the reason the threshold cannot be met, the risk assessment, and a remediation plan with a deadline
- Waivers are valid for a maximum of one quarter and MUST be re-evaluated at the next architectural review

:::warning
AI tools SHOULD be prompted to generate code below these complexity thresholds by including explicit constraints in the prompt. See [Prompt Engineering Rigor](./prompt-engineering-rigor.md) for constraint specification standards.
:::

## Documentation Requirements

AI-generated code often includes minimal, generic, or misleading documentation. Documentation standards ensure that maintainers can understand the intent and behavior of the code without relying on the original AI session context.

### Mandatory Documentation Elements

| Element | Requirement | Applies To |
|---|---|---|
| **Function/Method Docstrings** | MUST be present on all public and protected functions. MUST describe purpose, parameters, return values, exceptions, and side effects. | All code |
| **Class/Module Header** | MUST describe the responsibility of the class or module and its role in the architecture. | All classes and modules |
| **Inline Comments** | MUST be present where the implementation choice is non-obvious. MUST NOT merely restate the code. | Complex logic, workarounds, performance optimizations |
| **API Documentation** | MUST include OpenAPI/Swagger annotations or equivalent for all public API endpoints. | API code |
| **Architecture Decision Records (ADRs)** | MUST be created when AI-generated code introduces a new pattern, library, or architectural approach. | Architectural changes |
| **Prompt Reference** | MUST reference the prompt template or session ID used to generate the code. | All AI-generated code |

### Documentation Anti-Patterns

The following documentation patterns are common in AI-generated code and MUST be rejected during review:

- **Restating the code**: `// increment i by 1` above `i++`
- **Generic descriptions**: `// This function handles the logic` without specificity
- **Hallucinated references**: Documentation referencing classes, methods, or configurations that do not exist
- **Stale documentation**: Comments that describe behavior different from the actual implementation
- **Missing error documentation**: Omitting description of error conditions and exception behavior

## Test Coverage Minimums

Test coverage requirements for AI-generated code are intentionally elevated above standard baselines. These thresholds are enforced in the CI/CD pipeline as automated gates.

### Coverage Requirements

| Metric | AI-Generated Code | Human-Authored Code | Enforcement |
|---|---|---|---|
| **Line Coverage** | 90% minimum | 80% minimum | CI gate -- blocks merge |
| **Branch Coverage** | 85% minimum | 75% minimum | CI gate -- blocks merge |
| **Function/Method Coverage** | 95% minimum | 85% minimum | CI gate -- blocks merge |
| **Mutation Score** | 70% minimum | Not required | CI gate for Tier 2/3 risk |

For detailed coverage measurement methodology and mutation testing requirements, see [AI Output Verification & Validation](./ai-output-verification.md).

:::tip
When prompting AI tools for code generation, include the coverage requirements in the prompt constraints. For example: "Generate code with corresponding unit tests achieving at least 90% line coverage and 85% branch coverage."
:::

## Architectural Conformance

AI-generated code MUST conform to the project's established architectural patterns. AI tools are not aware of an organization's architectural decisions unless explicitly informed, and they frequently generate code that violates layer boundaries, introduces unauthorized dependencies, or bypasses established patterns.

### Conformance Requirements

| Requirement | Description | Enforcement |
|---|---|---|
| **Layer Boundary Compliance** | Code MUST respect defined architectural layers (e.g., controllers MUST NOT directly access repositories in a hexagonal architecture). | ArchUnit, Dependency Cruiser, custom lint rules |
| **Dependency Direction** | Dependencies MUST flow in the approved direction (e.g., domain MUST NOT depend on infrastructure). | ArchUnit, Dependency Cruiser |
| **Pattern Consistency** | New code MUST use established patterns (e.g., if the project uses the Repository pattern, AI-generated data access MUST use a Repository, not raw queries). | Code review + architectural fitness functions |
| **No Unauthorized Dependencies** | AI-generated code MUST NOT introduce new third-party dependencies without explicit approval. New dependencies require a lightweight evaluation covering: license, maintenance status, security history, and size impact. | Dependency lockfile diff review in PR |
| **Naming Conventions** | Classes, functions, variables, and files MUST follow the project's naming conventions. | Linter rules |
| **Configuration Patterns** | Configuration MUST use the project's established configuration mechanisms (e.g., environment variables, config files) and MUST NOT hardcode values. | Code review + secret scanning |

### Architectural Fitness Functions

Teams SHOULD implement automated architectural fitness functions that run in CI and validate conformance continuously:

```
// Example: ArchUnit test (Java)
@ArchTest
static final ArchRule controllers_should_not_access_repositories =
    noClasses()
        .that().resideInAPackage("..controller..")
        .should().accessClassesThat()
        .resideInAPackage("..repository..");

@ArchTest
static final ArchRule domain_should_not_depend_on_infrastructure =
    noClasses()
        .that().resideInAPackage("..domain..")
        .should().dependOnClassesThat()
        .resideInAPackage("..infrastructure..");
```

## Technical Debt Limits

AI-assisted development can rapidly accelerate technical debt accumulation if not actively managed. The following standards establish firm limits on debt introduction.

### Technical Debt Thresholds

| Metric | Maximum Allowable | Measurement |
|---|---|---|
| **SonarQube Technical Debt Ratio** | 5% for AI-generated files | SonarQube |
| **New Code Smells per PR** | 0 Critical, 0 Major | SonarQube, CodeClimate |
| **TODO/FIXME/HACK Comments** | 0 in AI-generated code (resolve before merge) | Grep/lint rule |
| **Duplicated Code** | 0% duplication in new AI-generated code against existing codebase; less than 3% within the PR | SonarQube, jscpd, CPD |
| **Deprecated API Usage** | 0 new usages of deprecated APIs | Compiler warnings, lint rules |

### Debt Management Protocol

- AI-generated code that introduces technical debt beyond the thresholds above MUST NOT be merged
- If AI-generated code reveals or interacts with existing technical debt, a separate ticket MUST be created to address the pre-existing debt
- Quarterly technical debt audits MUST include analysis of AI-generated code contributions to total debt
- The ratio of AI-originated debt to total new debt SHOULD be tracked as a leading indicator

## Quality Gate Checklist

The following checklist consolidates all quality gates into a single reference. Every item MUST pass before AI-generated code is merged.

| # | Quality Gate | Threshold | Automated |
|---|---|---|---|
| 1 | All unit tests pass | 100% pass rate | Yes |
| 2 | Line coverage meets minimum | `>= 90%` | Yes |
| 3 | Branch coverage meets minimum | `>= 85%` | Yes |
| 4 | Function coverage meets minimum | `>= 95%` | Yes |
| 5 | Mutation score meets minimum (Tier 2/3) | `>= 70%` | Yes |
| 6 | SAST scan clean | 0 Critical/High | Yes |
| 7 | Dependency vulnerability scan clean | 0 Critical | Yes |
| 8 | Cyclomatic complexity within limits | `<= 10` per function | Yes |
| 9 | Cognitive complexity within limits | `<= 12` per function | Yes |
| 10 | No new code smells (Critical/Major) | 0 | Yes |
| 11 | No code duplication | `< 3%` within PR | Yes |
| 12 | No TODO/FIXME/HACK comments | 0 | Yes |
| 13 | Documentation present and correct | All public APIs documented | Partial (lint + review) |
| 14 | Architectural conformance validated | All fitness functions pass | Yes |
| 15 | No unauthorized new dependencies | 0 unapproved additions | Partial (lockfile diff) |
| 16 | Regression suite passes | 100% pass rate | Yes |
| 17 | Human review completed | Approved by qualified reviewer | No (manual) |
| 18 | Prompt reference attached | PR includes prompt/session reference | Partial (label check) |

:::danger
CI/CD pipelines MUST be configured to enforce gates 1-16 automatically. Gates 17-18 are enforced through branch protection rules requiring human approval. No bypass mechanism SHALL exist for AI-generated code outside the emergency procedures defined by the engineering director.
:::

## Continuous Improvement

Quality standards are living documents. They MUST be reviewed and updated based on:

- Defect trend analysis from [Incident Response](../pillar-2-governance-risk/incident-response.md) post-mortems
- Emerging research on AI code generation quality
- Changes in AI tooling capabilities
- Organizational maturity in AI-assisted development

Standards review cadence: **quarterly**, conducted by the engineering quality lead in collaboration with the architecture board.

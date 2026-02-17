---
title: "When NOT to Use AI Code Generation"
sidebar_position: 5
description: "Guidelines for identifying scenarios where AI code generation is inappropriate."
---

# When NOT to Use AI Code Generation

Knowing when not to use AI code generation is as important as knowing how to use it effectively. AI coding assistants are powerful tools, but they are not universally appropriate. There are domains, scenarios, and code categories where AI generation introduces unacceptable risk, produces unreliable results, or is simply less efficient than manual coding.

This guide identifies those scenarios and provides a structured decision framework for evaluating whether AI assistance is appropriate for a given task.

## Core Principle

AI coding assistants are pattern-matching systems trained on existing code. They excel when the task closely matches patterns in their training data. They struggle or fail when the task requires genuine novelty, precise domain expertise, formal correctness guarantees, or reasoning about security properties that are context-dependent.

**The fundamental question is not "can the AI generate this code?" but "can I confidently verify the AI's output for this specific task?"** If you cannot verify correctness with high confidence, AI generation is inappropriate.

## Scenarios Where AI Should NOT Be Used

### 1. Security-Critical Code Paths

AI-generated code has a 2.74x higher vulnerability rate. For code that directly implements security controls, the risk of subtle vulnerabilities is unacceptable.

**Do NOT use AI for:**
- Authentication logic (login flows, session management, token validation)
- Authorization and access control (permission checks, role-based access)
- Cryptographic implementations (encryption, decryption, key derivation, signing)
- Input sanitization for injection prevention (SQL injection, XSS, command injection)
- Certificate validation and TLS configuration
- Security-critical middleware and interceptors

**Why:** AI may generate code that appears secure but contains subtle flaws--using insecure defaults, omitting important checks, or implementing deprecated cryptographic patterns from training data. These flaws can be extremely difficult to detect during code review.

**Alternative:** Write security-critical code manually, leveraging well-tested security libraries. Have the code reviewed by a security specialist per [PRD-STD-002](/production/standards/PRD-STD-002-code-review/).

### 2. Novel Algorithm Development

AI excels at reproducing known patterns but cannot innovate. For genuinely novel algorithms, AI outputs will be a poor fit.

**Do NOT use AI for:**
- Research algorithms that do not exist in public codebases
- Custom optimization algorithms specific to your problem domain
- Novel data structures designed for specific performance characteristics
- Original machine learning model architectures
- Proprietary business logic algorithms that represent competitive advantage

**Why:** AI will generate code based on the closest match in its training data, which may be structurally or semantically different from what you need. The result often looks plausible but is fundamentally wrong for your use case.

**Alternative:** Develop novel algorithms through traditional engineering, using AI only for boilerplate and scaffolding around the core algorithm.

### 3. Regulatory and Compliance-Sensitive Code

Code that is subject to regulatory requirements demands deterministic, auditable, and precisely documented logic.

**Do NOT use AI for:**
- Financial calculation logic subject to accounting standards (GAAP, IFRS)
- Healthcare data processing subject to HIPAA
- Privacy-related logic subject to GDPR, CCPA, or similar regulations
- Payment processing logic subject to PCI DSS
- Code that will be submitted for regulatory review or certification
- Tax calculation engines subject to jurisdictional rules

**Why:** Regulatory code requires precise adherence to specific rules, often with detailed audit trails. AI-generated code may introduce subtle deviations that are difficult to detect but create compliance violations. Furthermore, regulatory auditors may not accept AI-generated code without additional verification procedures.

**Alternative:** Write regulatory code manually from the regulatory specification. Use AI only for non-regulated supporting code (e.g., UI, logging).

### 4. High-Assurance Systems

Systems where failure has severe consequences (safety, financial, environmental) require engineering rigor that AI cannot provide.

**Do NOT use AI for:**
- Safety-critical systems (medical devices, automotive controls, aviation)
- Infrastructure control systems (power grid, water treatment, industrial automation)
- Financial trading systems where bugs cause direct financial loss
- Systems requiring formal verification or mathematical proof of correctness
- Code that must comply with standards like DO-178C, IEC 62304, or ISO 26262

**Why:** High-assurance systems require formal methods, exhaustive testing, and certification processes that are fundamentally incompatible with probabilistic AI code generation.

**Alternative:** Follow established safety-critical development processes (formal specification, formal verification, certified toolchains).

### 5. Deep Domain Expertise Code

Code that requires specialized domain knowledge beyond what is well-represented in AI training data.

**Do NOT use AI for:**
- Specialized scientific computing (unless using well-known libraries)
- Domain-specific protocol implementations
- Code that requires understanding of specific hardware or embedded systems
- Legacy system integration requiring knowledge of undocumented proprietary systems

**Why:** AI may hallucinate APIs, misunderstand domain constraints, or apply generic patterns where domain-specific expertise is needed.

## Decision Matrix

Use this matrix to evaluate whether AI assistance is appropriate for a given task:

| Factor | Low Risk (AI Appropriate) | Medium Risk (AI with Caution) | High Risk (Avoid AI) |
|---|---|---|---|
| **Security Impact** | No direct security implications | Processes user data; defense-in-depth present | Implements security controls directly |
| **Regulatory Exposure** | No regulatory requirements | Tangential to regulated systems | Directly subject to regulation |
| **Novelty** | Well-known patterns and libraries | Moderate customization of known patterns | Novel algorithms or data structures |
| **Verification Difficulty** | Easy to verify with unit tests | Requires integration testing and review | Requires formal verification or audit |
| **Domain Complexity** | General-purpose programming | Moderate domain knowledge needed | Deep specialized domain expertise |
| **Failure Impact** | Low (cosmetic, non-critical) | Medium (user-facing, recoverable) | High (safety, financial, compliance) |
| **Auditability Requirement** | None | Desirable | Mandatory with complete lineage |

**Scoring:**
- If any factor is "High Risk" -- Do NOT use AI for this task
- If two or more factors are "Medium Risk" -- Use AI with extreme caution, enhanced review, and senior oversight
- If all factors are "Low Risk" -- AI assistance is appropriate; follow standard AEEF practices

## Partial AI Assistance

In many "do not use AI" scenarios, AI can still provide value in supporting roles:

| Task Category | AI Can Help With | AI Must NOT Do |
|---|---|---|
| Security-critical code | Test generation, documentation, boilerplate scaffolding | Core security logic |
| Regulatory code | UI/UX around regulatory functions, data formatting | Calculation logic, compliance rules |
| Novel algorithms | Scaffolding, utility functions, tests | Core algorithm implementation |
| High-assurance systems | Documentation, tooling scripts, non-critical utilities | Safety-critical logic |

This partial-assistance model captures some AI velocity benefits while keeping high-risk code under human authorship.

## Team Decision Process

When it is unclear whether AI is appropriate for a task, follow this escalation process:

1. **Individual engineer assessment** -- Apply the decision matrix above. If the result is clear, proceed accordingly.
2. **Peer discussion** -- If the result is ambiguous, discuss with a team member. Two engineers applying the matrix independently should agree.
3. **Tech lead escalation** -- If there is disagreement, escalate to the tech lead for a decision.
4. **Architecture review** -- For system-level decisions about where AI may and may not be used, include the decision in an Architecture Decision Record per [PRD-STD-005](/production/standards/PRD-STD-005-documentation/).

## Organizational Boundaries

Organizations SHOULD maintain a formal list of code categories and modules where AI generation is prohibited. This list should be:

- Documented in the project's contributing guidelines
- Enforced through labeling and code review per [PRD-STD-002](/production/standards/PRD-STD-002-code-review/)
- Reviewed quarterly as AI tool capabilities evolve
- Aligned with the organization's risk framework per [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/)

## Common Mistakes

1. **Overconfidence in AI security code:** "The AI generated authentication code that looks right to me" is not sufficient verification. Security code requires specialist review.

2. **Using AI for unfamiliar domains:** If you lack the expertise to verify AI's output in a specialized domain, the AI's output is unverifiable regardless of how plausible it appears.

3. **Ignoring the 2.74x vulnerability rate:** The statistical risk of AI-generated security vulnerabilities is well-documented. Acknowledge and plan for this elevated risk.

4. **Assuming AI understands regulations:** AI has no awareness of regulatory requirements. It generates code that patterns match, not code that complies.

5. **Gradual scope creep:** Starting with AI for safe tasks and gradually letting it generate increasingly risky code without reassessing. Regularly reapply the decision matrix.

For related guidance, see [PRD-STD-004: Security Scanning](/production/standards/PRD-STD-004-security-scanning/) and [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/).

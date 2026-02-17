---
title: "Best Practices"
sidebar_position: 1
description: "Best practices for effective AI-assisted development."
---

# Best Practices

This section provides proven best practices for maximizing the effectiveness and safety of AI-assisted development in production environments. While the [Standards & Guidelines](/production/standards/) define mandatory and recommended requirements, best practices go further by sharing techniques and patterns derived from organizations that have successfully scaled AI-assisted engineering.

## Why Best Practices Matter

Compliance with AEEF standards establishes a quality floor, but best practices help teams reach a quality ceiling. The difference between a team that merely meets PRD-STD requirements and one that excels at AI-assisted development is often the adoption of effective working patterns. Teams that invest in best practices consistently report:

- **Higher acceptance rates** for AI-generated code, reducing iteration and rework cycles
- **Better knowledge retention** as engineers maintain a deeper understanding of AI-generated codebases
- **Fewer security and quality incidents** because engineers know when and how to leverage AI effectively
- **More sustainable velocity** because engineers avoid AI-assisted patterns that create long-term maintenance burden

## Best Practice Areas

### 1. Effective AI Pair Programming

**[AI Pair Programming](/production/best-practices/ai-pair-programming/)**

AI pair programming is the most common mode of AI-assisted development, where engineers interact with AI coding assistants in an iterative, conversational manner. This guide covers:

- Conversation structure patterns for different types of development tasks
- Context management strategies to keep AI outputs relevant and accurate
- Iterative refinement techniques for progressively improving AI outputs
- When to take over from AI and write code manually
- Session patterns for different project phases (greenfield, maintenance, debugging)

This practice directly supports [PRD-STD-001: Prompt Engineering](/production/standards/PRD-STD-001-prompt-engineering/) by demonstrating how structured prompting works in real development workflows.

### 2. Context Window Management

**[Context Window Management](/production/best-practices/context-window-management/)**

The context window is the most critical and most constrained resource when working with AI coding assistants. How engineers prepare and manage context directly determines the quality of AI outputs. This guide covers:

- Preparation strategies for assembling the right context before starting an AI session
- Techniques for including relevant code without overwhelming the context window
- Progressive disclosure patterns for complex tasks that exceed single-context capacity
- Context reset techniques when AI outputs begin to degrade

Effective context management is a force multiplier: the same prompt with better context produces dramatically better code.

### 3. Iterative Refinement Patterns

**[Iterative Refinement](/production/best-practices/iterative-refinement/)**

AI coding assistants rarely produce perfect code on the first attempt. Iterative refinement is the process of systematically improving AI outputs through structured feedback. This guide covers:

- Feedback loop patterns for different types of corrections (behavioral, structural, stylistic)
- Constraint tightening techniques for progressively narrowing AI behavior
- Progressive specification for complex tasks that cannot be fully specified upfront
- Convergence strategies for knowing when AI output is "good enough" versus when to switch to manual coding
- Anti-patterns that lead to infinite refinement loops

### 4. When NOT to Use AI Code Generation

**[When NOT to Use AI](/production/best-practices/when-not-to-use-ai/)**

Knowing when to put down the AI tool is as important as knowing how to use it effectively. There are domains and scenarios where AI code generation is inappropriate, risky, or counterproductive. This guide covers:

- Security-critical code paths where AI-generated code poses unacceptable risk
- Novel algorithm development where AI training data provides no relevant guidance
- Regulatory and compliance-sensitive code that requires deterministic, auditable logic
- High-assurance systems where formal verification or certification is required
- A decision matrix for evaluating whether AI assistance is appropriate for a given task

This practice is essential for compliance with [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/) and helps organizations avoid the most dangerous failure modes of AI-assisted development.

## How to Use These Best Practices

Best practices are RECOMMENDED, not MANDATORY. They complement the formal standards but do not carry RFC 2119 enforcement. However, organizations pursuing Level 3 (Optimized) compliance in the [Maturity Model](/pillars/maturity/) SHOULD demonstrate adoption of all best practices.

For each best practice, we recommend:

1. **Read the full guide** to understand the principles and patterns
2. **Pilot with a team** by adopting the practice on a single project for 2-4 weeks
3. **Gather feedback** from the pilot team on what works and what needs adaptation
4. **Adapt to your context** by customizing patterns for your specific technology stack and team culture
5. **Roll out broadly** once the practice is validated in your environment
6. **Measure impact** using the metrics framework from [Pillar 4: Measurement & Metrics](/pillars/pillar-3-productivity/)

## Relationship to Standards

| Best Practice | Primary Standards Supported | Key Benefit |
|---|---|---|
| AI Pair Programming | PRD-STD-001 (Prompts), PRD-STD-002 (Review) | Structured collaboration improves code quality |
| Context Window Management | PRD-STD-001 (Prompts), PRD-STD-003 (Testing) | Better context produces more testable, reviewable code |
| Iterative Refinement | PRD-STD-001 (Prompts), PRD-STD-006 (Tech Debt) | Systematic refinement reduces technical debt from AI code |
| When NOT to Use AI | PRD-STD-004 (Security), PRD-STD-008 (Dependencies) | Risk-appropriate tool selection prevents high-severity incidents |

## Contributing

Best practices are a living resource. Engineering teams are encouraged to propose new best practices or improvements to existing ones based on their experience with AI-assisted development. Proposals should include:

- A description of the practice and when it applies
- Evidence of effectiveness (metrics, case studies, team feedback)
- Practical guidance that other teams can follow
- Known limitations or contexts where the practice may not apply

Submit proposals through the AEEF Standards Committee review process described in [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/).

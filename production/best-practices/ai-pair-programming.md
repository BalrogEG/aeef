---
title: "Effective AI Pair Programming"
sidebar_position: 2
description: "Techniques for effective pair programming with AI assistants."
---

# Effective AI Pair Programming

AI pair programming is the dominant interaction pattern for AI-assisted development. Unlike traditional pair programming between two humans, AI pair programming requires the engineer to serve simultaneously as the driver (guiding the AI), the navigator (reviewing AI outputs), and the quality gatekeeper (deciding what to accept). This guide provides proven techniques for making AI pair programming sessions productive, efficient, and safe.

## Conversation Structure

The structure of your conversation with an AI coding assistant dramatically affects output quality. Unstructured, stream-of-consciousness prompting produces inconsistent results. Structured conversations produce predictable, high-quality code.

### The CRAFT Framework

Use the CRAFT framework for structuring AI pair programming conversations:

| Step | Action | Example |
|---|---|---|
| **C** - Context | Provide the architectural and codebase context | "This is a Node.js Express API using TypeORM with PostgreSQL. We follow a clean architecture with controllers, services, and repositories." |
| **R** - Requirements | State the specific requirements clearly | "I need a user registration endpoint that validates email format, checks for duplicates, hashes the password with bcrypt, and returns a JWT." |
| **A** - Assumptions | State the assumptions the AI should work with | "Assume the User entity and UserRepository already exist. Use the existing JwtService for token generation." |
| **F** - Format | Specify the expected output format | "Generate the service method and controller endpoint separately. Include error handling for duplicate emails and invalid input." |
| **T** - Tests | Define how the output will be validated | "Include unit tests for the service method covering success, duplicate email, and invalid email scenarios." |

### Conversation Patterns by Task Type

Different development tasks benefit from different conversation patterns:

**Feature Implementation (New Code)**
1. Start with architecture context and design constraints
2. Request interface/type definitions first
3. Request implementation second
4. Request tests third
5. Review and refine at each step

**Bug Fix**
1. Describe the observed behavior vs. expected behavior
2. Provide the relevant code section
3. Share error messages, stack traces, and logs
4. Ask for analysis before requesting a fix
5. Verify the fix addresses root cause, not just symptoms

**Refactoring**
1. Provide the current code and explain why it needs refactoring
2. Specify the target architecture or pattern
3. State what must NOT change (behavioral contracts, public APIs)
4. Request refactoring in small, reviewable steps
5. Verify behavior preservation at each step

**Code Review Assistance**
1. Share the code to be reviewed
2. Provide project conventions and standards
3. Ask for specific categories of feedback (security, performance, maintainability)
4. Use AI findings as starting points for your own analysis, not as final verdicts

## Context Management

Context management is the most impactful skill in AI pair programming. See [Context Window Management](/production/best-practices/context-window-management/) for detailed strategies. Key principles:

- **Lead with the most relevant code.** The AI weights earlier context more heavily in many implementations.
- **Include interfaces, not implementations.** When the AI needs to generate code that integrates with existing systems, provide the interfaces and types, not the full implementations.
- **Prune aggressively.** Remove code that is not relevant to the current task. Irrelevant context dilutes the AI's attention.
- **Refresh context for long sessions.** After extended sessions, restate the key context to prevent drift.

## Iterative Refinement During Sessions

Rarely does AI-generated code meet all requirements on the first attempt. Effective pair programming involves systematic refinement:

### The Review-Refine-Accept Loop

```
Generate --> Review --> [Accept | Refine | Reject]
                           |         |
                           |    Provide specific
                           |    feedback, then
                           |    regenerate
                           |
                      Integrate into
                      codebase
```

**Review:** Examine every line of AI output. Check for:
- Correctness against requirements
- Edge case handling
- Error handling completeness
- Security implications
- Architectural alignment
- Style and convention compliance

**Refine:** When output needs improvement, provide specific feedback:
- Bad: "This doesn't work, try again"
- Good: "The error handling is incomplete. Add a try-catch around the database call and handle ConnectionError and TimeoutError separately. Log the error and return a 503 status."

**Accept or Reject:** Accept code that meets your quality bar. Reject and rewrite manually if:
- Three refinement attempts have not converged on a correct solution
- The AI is introducing regressions with each iteration
- The code is in a security-critical path and you are not confident in AI's ability to get it right

See [Iterative Refinement](/production/best-practices/iterative-refinement/) for advanced refinement patterns.

## When to Take Over

Knowing when to stop using AI and write code manually is a critical judgment skill. Take over from AI when:

| Signal | Action |
|---|---|
| AI output is regressing after multiple refinements | Write the code manually using AI's best attempt as reference |
| You spend more time reviewing and fixing than it would take to write | Write from scratch |
| The code involves security-critical logic | Write manually per [When NOT to Use AI](/production/best-practices/when-not-to-use-ai/) |
| AI consistently misunderstands the requirement despite clear prompting | The task may require domain knowledge the AI lacks |
| AI is producing "almost right" code that requires subtle corrections | The corrections indicate the task is in the AI's uncertainty zone |
| You don't understand what the AI generated | Never accept code you don't understand |

The most dangerous situation is accepting AI code that appears correct but that you have not fully verified. If you cannot explain every line of the generated code, you SHOULD NOT accept it.

## Session Patterns

### Short Sessions (< 30 minutes)
Best for: Individual functions, bug fixes, utility code, test generation.
Pattern: Single CRAFT prompt, one or two refinement cycles, then move on.

### Medium Sessions (30-120 minutes)
Best for: Feature implementation, component development, refactoring.
Pattern: Multiple CRAFT prompts building on each other. Refresh context every 30-45 minutes. Save intermediate outputs.

### Long Sessions (> 120 minutes)
Best for: Architecture exploration, large feature development, system migration.
Pattern: Break into phases. Start a new conversation or context for each phase. Document decisions as you go per [PRD-STD-005](/production/standards/PRD-STD-005-documentation/). Avoid context degradation by resetting periodically.

## Anti-Patterns to Avoid

1. **The Rubber Stamp:** Accepting AI output without thorough review. This violates [PRD-STD-002](/production/standards/PRD-STD-002-code-review/) and is the primary source of AI-related defects.

2. **The Infinite Loop:** Endlessly refining AI output hoping for perfection. Set a refinement budget (typically 3 attempts) and fall back to manual coding.

3. **The Context Dump:** Pasting an entire codebase into the context window. This overwhelms the AI and produces worse results than carefully curated context.

4. **The Assumption:** Assuming AI understands your project's conventions, architecture, or business rules without explicitly stating them.

5. **The Shortcut:** Using AI to generate code in areas where you lack expertise, hoping it "just works." AI amplifies expertise; it does not replace it.

6. **The Solo Show:** Using AI without any peer review, even for seemingly simple changes. Every AI-assisted change benefits from a second pair of human eyes.

## Measuring Effectiveness

Track these metrics to measure and improve AI pair programming effectiveness:

- **Acceptance rate:** Percentage of AI suggestions accepted without modification (target: 40-60%)
- **Iteration count:** Average number of refinement cycles per task (target: 1-3)
- **Takeover rate:** Percentage of tasks where AI is abandoned in favor of manual coding (expected: 10-20%)
- **Post-merge defect rate:** Defects found in AI-assisted code after merge (compare to non-AI baseline)
- **Session productivity:** Story points or tasks completed per session (compare to non-AI baseline)

These metrics support the [Pillar 4: Measurement & Metrics](/pillars/pillar-3-productivity/) framework and help teams continuously refine their AI pair programming practices.

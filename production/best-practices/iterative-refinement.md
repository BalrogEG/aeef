---
title: "Iterative Refinement Patterns"
sidebar_position: 4
description: "Patterns for iteratively refining AI-generated code."
---

# Iterative Refinement Patterns

AI coding assistants rarely produce production-ready code on the first attempt. Iterative refinement--the process of systematically improving AI outputs through structured feedback--is a core skill for effective AI-assisted development. The difference between productive refinement and unproductive thrashing is technique. This guide describes proven patterns for efficiently converging on high-quality code from AI-generated starting points.

## Principles of Effective Refinement

Before diving into patterns, understand these foundational principles:

1. **Be specific, not general.** "Fix the error handling" is a poor refinement prompt. "Add a try-catch around the database call on line 23, catch ConnectionError and TimeoutError separately, log the error with context, and return a 503 response" is effective.

2. **One concern per refinement.** Address one category of issue at a time (correctness, then performance, then style). Attempting to fix everything at once overwhelms the AI and produces worse results.

3. **Set a refinement budget.** Decide upfront how many refinement cycles you will attempt before falling back to manual coding. Three attempts is a reasonable default. If the AI is not converging by attempt three, the task may not be suitable for AI assistance.

4. **Preserve what works.** When refining, explicitly tell the AI what to keep. "The algorithm logic is correct. Change only the error handling" prevents regressions in already-accepted sections.

5. **Verify each iteration.** Do not stack refinement requests without verifying intermediate results. Each refinement can introduce new issues, so review incrementally.

## Feedback Loop Patterns

### Pattern 1: The Correction Loop

Use when: AI output has specific, identifiable errors.

```
Attempt 1: [AI generates code]
You: "The code has two issues: (1) the null check on line 12 should use
strict equality (===), and (2) the error message on line 18 should include
the user ID for debugging. Please fix only these two issues."
Attempt 2: [AI generates corrected code]
You: [Review and accept or refine further]
```

**Key technique:** Reference specific line numbers and describe the exact change needed. Avoid vague instructions like "fix the bugs."

### Pattern 2: The Comparison Loop

Use when: You need the AI to match an existing pattern or convention.

```
You: "Here is how we handle validation in our project: [example code].
The code you generated uses a different pattern. Please rewrite the
validation logic to match our existing pattern while keeping the
business logic unchanged."
```

**Key technique:** Always provide the reference example in the same refinement prompt. Do not assume the AI remembers examples from earlier in the conversation.

### Pattern 3: The Test-Driven Loop

Use when: You can express the desired behavior through test cases.

```
You: "The generated function fails this test case:
  Input: findUsers({role: 'admin', active: true})
  Expected: Returns only active admin users
  Actual: Returns all admin users regardless of active status
Please fix the filtering logic to pass this test case."
```

**Key technique:** Provide concrete input/output pairs. Test-driven refinement is the most efficient pattern because it gives the AI an unambiguous specification for what "correct" means.

### Pattern 4: The Constraint Addition Loop

Use when: Initial output is functionally correct but does not meet non-functional requirements.

```
Attempt 1: [AI generates working code]
You: "The code is functionally correct. Now add the following constraints:
1. The function must handle concurrent calls safely (use a mutex)
2. Memory allocation must not exceed 1MB for any single call
3. Timeout after 5 seconds with a descriptive error"
```

**Key technique:** Acknowledge what is correct before adding constraints. This prevents the AI from changing working logic unnecessarily.

## Constraint Tightening

Constraint tightening is the process of progressively narrowing the AI's output by adding constraints over successive iterations. This is particularly effective for complex tasks where specifying all constraints upfront would overwhelm both the prompt and the AI.

### The Funnel Approach

```
Iteration 1: "Generate a user authentication service"
  -> Broad output, likely correct at a high level

Iteration 2: "Good structure. Now add: bcrypt for password hashing,
JWT with RS256 for tokens, rate limiting at 5 attempts per minute"
  -> Narrowed to specific security requirements

Iteration 3: "Token generation looks good. Refine: tokens must expire
in 15 minutes, refresh tokens in 7 days, store refresh tokens in Redis
with automatic cleanup"
  -> Narrowed to specific business rules

Iteration 4: "Now add input validation: email must be RFC 5322 compliant,
password must be 12+ characters with complexity requirements per NIST
SP 800-63B guidelines"
  -> Narrowed to specific validation rules
```

Each iteration accepts the previous output as a foundation and adds a new layer of constraints. This approach is more effective than specifying everything upfront because:

- The AI produces a reasonable architecture first, then refines details
- Each iteration is small enough for the AI to implement accurately
- You can review and course-correct at each step

### When Constraint Tightening Fails

Constraint tightening can fail when:
- New constraints are incompatible with the existing implementation (requires architectural changes)
- The accumulated constraints exceed the AI's ability to track simultaneously
- The AI begins making regressions to accommodate new constraints

When this happens, switch to progressive specification (next section) or start over with all constraints specified upfront.

## Progressive Specification

Progressive specification breaks a complex task into independent sub-tasks, each fully specified and generated separately, then assembled manually.

### When to Use Progressive Specification

- The task is too complex for a single AI session
- The task has interdependent components that are each substantial
- Previous attempts at iterative refinement have not converged
- The task spans multiple architectural layers (frontend, backend, database)

### Progressive Specification Workflow

```
Sub-Task 1: Define the data model and types
  -> Generate, review, accept
  -> Save as context for subsequent sub-tasks

Sub-Task 2: Implement the data access layer
  -> Provide accepted data model as context
  -> Generate, review, accept

Sub-Task 3: Implement the business logic layer
  -> Provide accepted data model and repository interfaces as context
  -> Generate, review, accept

Sub-Task 4: Implement the API/controller layer
  -> Provide accepted service interfaces as context
  -> Generate, review, accept

Assembly: Integrate all accepted components
  -> Wire together manually or with a focused AI session
  -> Test the integrated system
```

This approach produces higher-quality code than attempting to generate the entire stack in one session because each sub-task has focused context and clear boundaries.

## Convergence Strategies

### Knowing When You Have Converged

Accept AI output when all of the following are true:

- [ ] The code meets all functional requirements (passes tests or acceptance criteria)
- [ ] The code meets all stated constraints (performance, security, style)
- [ ] You understand every line of the code and can explain it to a colleague
- [ ] The code follows project conventions and architecture patterns
- [ ] The code passes the review checklist in [PRD-STD-002](/production/standards/PRD-STD-002-code-review/)

### Knowing When to Abandon Refinement

Abandon AI refinement and switch to manual coding when:

| Signal | Iteration Count | Action |
|---|---|---|
| Regressions in each iteration | After 2 iterations | Use best AI attempt as reference, write manually |
| No progress toward requirements | After 3 iterations | The task may not be suitable for AI |
| AI contradicts its own output | Any iteration | Reset context per [Context Window Management](/production/best-practices/context-window-management/) |
| Security-critical code path | Any iteration | Consider manual coding per [When NOT to Use AI](/production/best-practices/when-not-to-use-ai/) |
| More time refining than writing | Any iteration | Write manually |

### The 80/20 Rule

For most tasks, AI can get you to 80% quality in the first 1-2 iterations. The remaining 20% often takes as much effort to refine as it would to write manually. A pragmatic strategy is:

1. Use AI to generate the initial implementation (0% to 80%)
2. Accept the AI output as a starting point
3. Manually refine the remaining 20% (edge cases, error handling, style adjustments)

This approach captures the velocity benefit of AI while avoiding the diminishing returns of extended refinement cycles.

## Anti-Patterns

### The Infinite Refinement Loop
Endlessly refining without a convergence threshold. Set a fixed iteration budget before you start.

### The Vague Feedback
"This isn't quite right, can you try again?" gives the AI no information about what to change. Always specify what is wrong and what you want instead.

### The Kitchen Sink Refinement
"Fix the bugs, add error handling, improve performance, follow our style guide, and add tests" in a single refinement. One concern per iteration produces better results.

### The Regression Accumulator
Not reviewing each iteration's output before requesting the next refinement. Each iteration can introduce regressions in previously correct code.

### The Context Amnesia
Not restating important constraints in refinement prompts. The AI may "forget" earlier constraints when processing new instructions, especially in long conversations.

For related guidance, see [PRD-STD-001: Prompt Engineering](/production/standards/PRD-STD-001-prompt-engineering/) and [AI Pair Programming](/production/best-practices/ai-pair-programming/).

---
title: "Context Window Management"
sidebar_position: 3
description: "Managing AI context windows for optimal code generation."
---

# Context Window Management

The context window is the single most important variable in AI-assisted code generation quality. The context window is the total amount of text (code, comments, prompts, conversation history) that an AI model can process at once. How you fill that window--what you include, what you exclude, and in what order--determines whether the AI produces accurate, relevant code or generates plausible-looking nonsense.

This guide provides strategies for managing AI context windows effectively across different tools, task types, and project scales.

## Understanding Context Windows

### How Context Windows Work

AI coding assistants process a fixed-size context window that includes everything visible to the model: your prompt, any files or code snippets you provide, the conversation history, and the model's own previous outputs. When the context window is full, older content is dropped or truncated.

| AI Tool | Approximate Context Window | Practical Implication |
|---|---|---|
| GitHub Copilot (inline) | ~6,000 tokens (current file + neighbors) | Best for single-file, localized tasks |
| Cursor | ~100,000-200,000 tokens | Can process multiple files; good for cross-file tasks |
| Claude Code | ~200,000 tokens | Can process large codebases; suitable for architectural tasks |
| ChatGPT / GPT-4 | ~128,000 tokens | Good for substantial code generation with context |

**Key principle:** A larger context window does not automatically mean better results. Context quality matters more than context quantity. An AI with 200K tokens of irrelevant code will produce worse output than the same AI with 10K tokens of precisely relevant code.

## Preparation Strategies

Effective context management starts before you open the AI tool. Preparation reduces wasted iterations and improves first-attempt quality.

### Pre-Session Context Checklist

Before starting an AI-assisted development session, assemble:

- [ ] **Interface definitions** -- Types, interfaces, and contracts that the generated code must conform to
- [ ] **Adjacent code** -- Functions and classes that the generated code will call or be called by
- [ ] **Architectural patterns** -- Examples of how similar problems are solved in the project (1-2 examples, not all)
- [ ] **Constraints** -- Style guides, performance requirements, security requirements
- [ ] **Test cases or acceptance criteria** -- What "done" looks like for this task
- [ ] **Anti-patterns** -- Patterns to explicitly avoid (known bad approaches from previous AI sessions)

### The Context Priority Pyramid

Not all context is equally valuable. Prioritize what goes into the context window using this pyramid:

```
            /  Constraints  \         Always include
           /   & Standards   \
          /    Interfaces &    \      Include for integration tasks
         /      Types           \
        /    Adjacent Code       \    Include when relevant
       /     (1-2 examples)       \
      /    Architecture Patterns    \  Include for new components
     /      (1 example max)          \
    /  Background / Project Overview   \  Include for greenfield only
```

Items at the top of the pyramid are high-value and should always be included. Items at the bottom are lower-value and should only be included when context space permits.

## Relevant Code Inclusion

### What to Include

**Always include:**
- The exact function signatures, types, and interfaces that the generated code must implement or consume
- Import statements that establish the available APIs
- Error types and exception hierarchies used in the module
- Constants and configuration values referenced by the code

**Include when relevant:**
- One well-written example of a similar function in the same project (the "reference implementation")
- Relevant test cases that define expected behavior
- Database schema or API contracts when generating data access code

**Never include:**
- Entire files when only a few functions are relevant (extract the relevant portions)
- Multiple examples of the same pattern (one example is sufficient; more is noise)
- Build configurations, CI/CD files, or infrastructure code (unless that is the task)
- Code from unrelated modules or services

### Extracting Relevant Context

Instead of copying entire files, extract the relevant portions:

**Bad practice:** Pasting a 500-line file to provide context for a 20-line function.

**Good practice:**
```
Here is the relevant interface and an example implementation:

// From src/repositories/base.ts (lines 15-30)
interface Repository<T> {
  findById(id: string): Promise<T | null>;
  findAll(filter: Filter<T>): Promise<T[]>;
  create(entity: T): Promise<T>;
  update(id: string, entity: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
}

// Example implementation from src/repositories/user.repository.ts (lines 10-25)
class UserRepository implements Repository<User> {
  // [key methods only]
}
```

This approach gives the AI exactly what it needs--the interface contract and a single example--without consuming context window space on irrelevant code.

## Progressive Disclosure

For complex tasks that exceed the practical context window, use progressive disclosure: break the task into phases, each with its own focused context.

### Phase-Based Context Strategy

**Phase 1: Design**
- Context: Architecture overview, requirements, constraints
- Output: Interface definitions, data models, component structure
- Action: Review and approve the design before proceeding

**Phase 2: Core Implementation**
- Context: Approved designs from Phase 1, relevant existing code
- Output: Core business logic implementation
- Action: Review, test, and refine

**Phase 3: Integration**
- Context: Approved implementation from Phase 2, integration points, API contracts
- Output: Integration code, API handlers, data access layers
- Action: Review with integration tests

**Phase 4: Error Handling and Edge Cases**
- Context: Approved code from Phase 2-3, error handling patterns, edge case list
- Output: Error handling, input validation, edge case handling
- Action: Review with comprehensive test suite

This approach ensures each phase has focused, high-quality context rather than a diluted view of everything at once.

### Context Handoff Between Phases

When transitioning between phases, carry forward:
- The approved outputs from the previous phase (interfaces, implementations)
- Any decisions or constraints that were established
- Specific feedback or refinements from your review

Do NOT carry forward:
- Full conversation history from previous phases (summarize instead)
- Rejected alternatives or failed attempts
- Explanatory text from the AI that was useful once but is no longer needed

## Context Reset Techniques

Context degradation is a common problem in long AI sessions. Signs of degradation include:
- AI starts contradicting its earlier outputs
- Generated code no longer matches project conventions established earlier in the session
- AI "forgets" constraints that were specified earlier
- Output quality drops noticeably

### When to Reset Context

- After 45-60 minutes of continuous interaction
- When the AI begins producing outputs that contradict earlier agreements
- When switching to a fundamentally different task within the same project
- When the conversation history has grown beyond 50% of the context window

### How to Reset Effectively

1. **Save your progress:** Copy all accepted code, decisions, and approved designs to files
2. **Start a new session:** Begin a fresh conversation with the AI
3. **Reload essential context:** Provide the current state (approved code, interfaces, constraints) without the full conversation history
4. **Summarize, don't replay:** Instead of replaying the entire previous conversation, summarize key decisions in 2-3 sentences
5. **Verify continuity:** Ask the AI to confirm its understanding of the current state before proceeding

### Context Reset Template

```
## Context Reset

### Project
[1-2 sentence project description]

### Current State
[What has been completed so far -- list the approved artifacts]

### Key Decisions Made
- [Decision 1]
- [Decision 2]

### Current Task
[What needs to be done next]

### Constraints
[Carry forward all constraints from the original session]
```

## Tool-Specific Context Management

### GitHub Copilot
- **Strategy:** Keep the current file well-organized; Copilot reads the current file and adjacent open files
- **Tip:** Open relevant interface files in adjacent tabs; close irrelevant files
- **Limitation:** Cannot provide explicit prompts; relies entirely on code context

### Cursor
- **Strategy:** Use the `@file` and `@codebase` references to explicitly include relevant files
- **Tip:** Create a `.cursorrules` file with project conventions that persists across sessions
- **Limitation:** Large codebase indexing may not capture all relevant patterns

### Claude Code
- **Strategy:** Use the `/add` command to include specific files; provide architectural context in the system prompt
- **Tip:** Use CLAUDE.md project files for persistent context across sessions
- **Limitation:** Very large conversations can still cause degradation; reset periodically

## Measuring Context Effectiveness

Track these signals to evaluate whether your context management is effective:

- **First-attempt acceptance rate:** Higher rates indicate better context quality
- **Refinement cycles needed:** Fewer cycles indicate the AI understood the task correctly from context alone
- **Hallucination rate:** AI inventing non-existent APIs suggests missing or incorrect context
- **Convention compliance:** AI matching project conventions suggests good pattern context

When these metrics are poor, the most likely culprit is context management, not the AI model itself. Improving context is the highest-leverage improvement most engineers can make in their AI-assisted workflow.

For related guidance, see [PRD-STD-001: Prompt Engineering](/production/standards/PRD-STD-001-prompt-engineering/) and [AI Pair Programming](/production/best-practices/ai-pair-programming/).

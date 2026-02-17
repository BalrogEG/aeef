---
title: "Daily Workflows with AI"
sidebar_position: 2
description: "Structuring your daily development workflow with AI assistance."
---

# Daily Workflows with AI

Integrating AI tools into your development workflow is not about replacing your engineering process -- it is about augmenting each phase with intelligent assistance while maintaining the rigor defined in [Pillar 1: Engineering Discipline](/pillars/pillar-1-engineering-discipline/). This section provides a structured approach to daily workflows that maximizes AI leverage while preserving code quality and security.

## A Typical Day: AI-Augmented Developer Timeline

The following timeline illustrates how an experienced developer integrates AI assistance throughout a standard workday. Adapt the timing to your schedule, but preserve the sequence and the quality checkpoints.

| Time | Phase | Activity | AI Role | Human Role |
|------|-------|----------|---------|------------|
| 9:00 - 9:30 | **Morning Planning** | Review tickets, plan approach, set context | Summarize ticket context, suggest implementation approaches | Select approach, identify risks, define success criteria |
| 9:30 - 10:00 | **Context Loading** | Open codebase, review recent changes, load AI context | Analyze recent diffs, map dependencies | Verify AI understanding, correct misconceptions |
| 10:00 - 12:00 | **Deep Coding Session 1** | Implement features, write tests | Generate code scaffolds, suggest implementations, write tests | Review every suggestion, verify logic, ensure security |
| 12:00 - 12:30 | **Mid-Day Review** | Self-review morning code, run tests | Identify potential issues in written code | Judge quality, fix issues, decide what stays |
| 13:30 - 15:00 | **Deep Coding Session 2** | Continue implementation, refactor, debug | Assist with debugging, suggest refactors | Maintain architectural consistency, validate changes |
| 15:00 - 16:00 | **Review Cycle** | Review PRs from teammates | Summarize PR changes, flag potential issues | Apply judgment, verify AI flags, provide human feedback |
| 16:00 - 16:30 | **Documentation** | Update docs, write commit messages, log decisions | Draft documentation, generate summaries | Verify accuracy, add context AI cannot know |
| 16:30 - 17:00 | **End-of-Day Wrap** | Push code, update tickets, plan tomorrow | Generate status updates, suggest next steps | Confirm accuracy, prioritize next day |

## Phase 1: Morning Planning with AI

Begin each day by establishing context -- both for yourself and for your AI tools.

**Step 1: Ticket Review.** Open your sprint board and review your assigned stories. For each ticket, use AI to quickly summarize the requirements and identify related code areas.

**Step 2: Approach Design.** Before writing any code, describe the implementation approach to your AI tool and ask it to identify potential issues. This is not about getting the AI to design your system -- it is about using it as a sounding board.

**Step 3: Risk Identification.** Ask the AI to enumerate edge cases, potential failure modes, and areas where the implementation might interact with existing code in unexpected ways. Cross-reference with [PRD-STD-007](/production/standards/PRD-STD-007-quality-gates) risk categories.

:::tip
Spending 15 minutes on AI-assisted planning can save hours of rework. The most common mistake developers make is jumping straight into code generation without establishing context.
:::

## Phase 2: Context Loading

AI tools perform dramatically better when they have rich context. Invest time loading context before you start coding.

**Effective context loading includes:**

- Opening relevant files in your IDE so the AI can reference them
- Providing architectural constraints ("we use repository pattern," "this service must be stateless")
- Sharing coding standards ("follow the existing naming convention in this module")
- Referencing related tickets or past implementations ("similar to how we handled X in PR #1234")

**Common context loading mistakes:**

- Assuming the AI remembers yesterday's session (it usually does not)
- Providing too little context, resulting in generic or incorrect suggestions
- Providing too much context, overwhelming the model and degrading output quality
- Failing to correct AI misunderstandings before they propagate into code

## Phase 3: Deep Coding Sessions

This is where AI provides the most visible productivity gains -- and where the greatest risks emerge. Structure your coding sessions with deliberate quality checkpoints.

### The Generate-Review-Commit Cycle

Never commit AI-generated code without completing a full review cycle. Follow this pattern:

1. **Prompt.** Write a clear, specific prompt for the code you need (see [Prompt Engineering](/roles/developer/prompt-engineering))
2. **Generate.** Let the AI produce a candidate implementation
3. **Read.** Read every line of the generated code as if you were reviewing a PR from a junior developer
4. **Verify.** Check for correctness, security issues (see [Security Awareness](/roles/developer/security-awareness)), and adherence to team conventions
5. **Test.** Run existing tests and write new ones for the generated code
6. **Refine.** Iterate on the prompt or manually edit the code until it meets your standards
7. **Commit.** Only commit code you fully understand and can defend in a code review

:::warning
The 1.7x issue rate in AI-generated code is largely attributable to developers skipping steps 3-6. Resist the temptation to accept AI suggestions without thorough review, especially under time pressure. See [PRD-STD-002](/production/standards/PRD-STD-002-code-review).
:::

### When AI Excels During Coding Sessions

- **Boilerplate and scaffolding.** CRUD operations, data models, API route handlers, configuration files
- **Test generation.** Unit test scaffolds, edge case enumeration, mock setup
- **Pattern application.** Applying known patterns to new contexts (e.g., "create a repository class like UserRepository but for Orders")
- **Documentation.** Docstrings, inline comments, README sections

### When to Override AI and Code Manually

- **Complex business logic.** Multi-step workflows with nuanced rules that require deep domain understanding
- **Security-critical code.** Authentication flows, encryption, access control (always verify AI suggestions against [PRD-STD-005](/production/standards/PRD-STD-004-security-scanning))
- **Performance-critical paths.** Hot loops, query optimization, memory management
- **Novel algorithms.** Anything without well-established patterns in training data

## Phase 4: Review Cycle

Dedicate at least one hour daily to reviewing code -- both your own AI-assisted code and your teammates' PRs.

**Self-review checklist for AI-assisted code:**

- [ ] I can explain every line of this code to a teammate
- [ ] I have verified the logic against the ticket requirements
- [ ] I have checked for hardcoded values, magic numbers, and assumptions
- [ ] I have run the full test suite and all tests pass
- [ ] I have checked for security issues per [PRD-STD-005](/production/standards/PRD-STD-004-security-scanning)
- [ ] The code follows our team's style guide and architectural patterns
- [ ] I have not leaked any sensitive data into AI prompts

**When reviewing teammates' AI-assisted PRs,** apply the full review criteria from [Code Review Responsibilities](/roles/developer/code-review-responsibilities).

## Phase 5: Documentation

AI can dramatically accelerate documentation, but accuracy verification is critical.

**Use AI for:**
- Generating initial drafts of docstrings and API documentation
- Summarizing complex code changes for commit messages
- Creating changelog entries from a set of commits
- Drafting architecture decision records (ADRs)

**Always verify:**
- Technical accuracy of AI-generated documentation
- Completeness -- AI often misses edge cases and limitations
- Tone and audience appropriateness
- References to other documentation or standards

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Is Dangerous | What to Do Instead |
|-------------|--------------------|--------------------|
| **Copy-paste coding** | Accepting AI output without reading it | Read every line, understand every decision |
| **Context amnesia** | Starting each AI session from scratch | Maintain a context document or use persistent session features |
| **Over-reliance** | Using AI for tasks you should deeply understand | Build skills manually first, then use AI to accelerate |
| **Prompt laziness** | Writing vague prompts and accepting vague code | Invest in precise, context-rich prompts (see [Prompt Engineering](/roles/developer/prompt-engineering)) |
| **Review fatigue** | Rubber-stamping AI code after a long day | Take breaks, use checklists, pair-review critical sections |

## Measuring Your Workflow Effectiveness

Track these personal metrics weekly to calibrate your AI-assisted workflow:

- **AI acceptance rate:** What percentage of AI suggestions do you accept vs. reject? A healthy range is 40-70%. Below 40% suggests poor prompting; above 70% suggests insufficient review.
- **Rework rate:** How often does AI-assisted code require changes after PR review? Target under 15%.
- **Time-to-first-commit:** Has AI reduced the time from ticket start to first meaningful commit? Track the trend over time.
- **Defect introduction rate:** Are you introducing more or fewer bugs than before AI adoption? This should decrease over time as your AI collaboration skills improve.

Share these metrics with your [Development Manager](/roles/development-manager/) during one-on-ones to support the team-level metrics described in [Metrics That Matter](/roles/development-manager/metrics-that-matter).

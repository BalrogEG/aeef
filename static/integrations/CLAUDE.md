# AEEF Standards — AI Coding Rules

> Drop this file into the root of your repository as `CLAUDE.md` (for Claude Code) or adapt for your AI coding tool.
> It enforces the AI-Accelerated Enterprise Engineering Framework (AEEF) during AI-assisted development sessions.
> Full framework: https://aaee.buildstudio.app

## You Are the Accountable Engineer

AI generates suggestions. You decide what ships. Treat every AI output as a first draft from a junior developer — review every line before accepting.

## Mandatory Rules (MUST follow)

### Code Quality
- NEVER accept AI-generated code without reading and understanding every line.
- NEVER commit code you cannot fully explain to a peer reviewer.
- All AI-generated code MUST pass existing linting, type-checking, and formatting rules before commit.
- AI-generated functions MUST NOT exceed a cyclomatic complexity of 15.
- AI-generated code MUST follow existing project architecture and patterns — do not introduce new patterns without explicit approval.

### Security (Non-Negotiable)
- NEVER include secrets, API keys, credentials, or tokens in prompts.
- NEVER include real personal data (PII), customer data, or production data in prompts.
- NEVER disable security scanning, linting, or pre-commit hooks.
- All AI-generated code MUST pass SAST and dependency scanning before merge.
- Flag any AI-generated code that handles authentication, authorization, encryption, or financial transactions for enhanced security review.

### Testing
- AI-generated code MUST have corresponding tests. Write tests first when possible.
- AI-generated tests MUST contain meaningful assertions — not just "assert true".
- Minimum coverage: 80% line coverage, 70% branch coverage for AI-generated code.
- Run the full test suite before committing AI-generated code.

### Attribution and Provenance
- Mark AI-assisted commits clearly (e.g., `AI-Assisted: yes` in commit metadata or PR template).
- Reference the prompt or technique used when it aids reviewability.
- Keep AI-generated changes in atomic, focused commits — do not mix AI and human changes in a single commit.

### Data Classification
- Before including ANY project context in prompts, verify the data classification level.
- PUBLIC data: may be used freely with approved AI tools.
- INTERNAL data: may be used with approved AI tools only.
- CONFIDENTIAL data: may only be used with self-hosted or on-premises AI tools.
- RESTRICTED data: MUST NOT be used in any AI tool prompts.

## Prompt Engineering Standards

### Structure Every Prompt
Use this structure for non-trivial prompts:

```
Role: [What role should the AI assume]
Context: [Relevant project context, architecture, constraints]
Task: [Specific task to accomplish]
Constraints: [Quality requirements, patterns to follow, things to avoid]
Output Format: [Expected format of the response]
```

### Context Preparation
- Include relevant type definitions, interfaces, and schemas.
- Reference existing patterns in the codebase for the AI to follow.
- Specify the target framework, language version, and key dependencies.
- Include error handling patterns used in the project.

### What AI Excels At (Use It Here)
- Boilerplate and scaffolding code
- Test generation from existing implementations
- Documentation drafts
- Pattern application (applying known patterns to new contexts)
- Code refactoring (with clear instructions)
- Dependency analysis and migration

### When to Code Manually (Do NOT Rely on AI)
- Complex business logic with nuanced domain rules
- Security-critical code (auth, crypto, access control)
- Performance-critical hot paths
- Novel algorithms without established patterns
- Architecture decisions and system design

## Review Checklist for AI-Generated Code

Before accepting any AI-generated code, verify:

- [ ] I have read and understand every line
- [ ] The code follows existing project patterns and conventions
- [ ] No hardcoded values, magic numbers, or unexplained constants
- [ ] Error handling is present and follows project patterns
- [ ] No unnecessary dependencies introduced
- [ ] No security vulnerabilities (injection, XSS, SSRF, etc.)
- [ ] Tests exist and test meaningful behavior
- [ ] No sensitive data or credentials in the code
- [ ] Performance is acceptable for the use case
- [ ] The code is maintainable — a teammate could understand it without context

## Workflow: Generate-Review-Commit

1. **Prompt** — Write a clear, specific prompt with context and constraints.
2. **Generate** — Let the AI produce a candidate.
3. **Read** — Read every line as if reviewing a junior developer's PR.
4. **Verify** — Check correctness, security, and convention adherence.
5. **Test** — Run existing tests and write new ones for the generated code.
6. **Refine** — Iterate the prompt or manually edit until quality standards are met.
7. **Commit** — Only commit code you fully understand and can defend in review.

## Project-Specific Rules

> Add your project-specific rules below. Examples:
>
> - Use React Server Components by default; Client Components only when needed
> - All API endpoints must use Zod for input validation
> - Database queries must use the repository pattern
> - All dates must use dayjs, not native Date
> - Follow the existing error hierarchy in src/errors/

<!-- Add your project-specific rules here -->

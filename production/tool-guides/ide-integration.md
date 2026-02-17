---
title: "IDE Integration Patterns"
sidebar_position: 2
description: "Patterns for integrating AI assistants into development environments."
---

# IDE Integration Patterns

IDE-integrated AI coding assistants are the primary interface through which engineers interact with AI during development. The choice of tool, its configuration, and how it is standardized across teams directly impacts code quality, security posture, and compliance with AEEF standards. This guide covers setup, configuration, and team standardization for the three most widely adopted AI coding assistants: GitHub Copilot, Cursor, and Claude Code.

## GitHub Copilot

### Overview

GitHub Copilot is the most widely adopted AI coding assistant, available as an extension for VS Code, JetBrains IDEs, Neovim, and Visual Studio. It provides inline code completions, chat-based code generation, and workspace-level understanding.

### Recommended Configuration

**Organization-Level Settings (GitHub Copilot Business/Enterprise):**

| Setting | Recommended Value | Rationale |
|---|---|---|
| Code referencing | **Enabled** (with filter) | Enables detection of code matching public repositories; supports [PRD-STD-008](/production/standards/PRD-STD-008-dependency-compliance/) license compliance |
| Suggestions matching public code | **Block** | Prevents verbatim reproduction of publicly licensed code |
| Allow/Deny list | **Configured** | Exclude security-critical directories from Copilot context per [When NOT to Use AI](/production/best-practices/when-not-to-use-ai/) |
| Telemetry | **Per organizational policy** | Review data handling against [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/) |
| Copilot for pull requests | **Enabled** | Supports [PRD-STD-002](/production/standards/PRD-STD-002-code-review/) code review process |

**Individual Editor Settings (VS Code `settings.json`):**

```json
{
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": false,
    "env": false,
    "dotenv": false
  },
  "github.copilot.advanced": {
    "length": 500,
    "temperature": "",
    "top_p": ""
  }
}
```

**Key configuration notes:**
- Disable Copilot for `.env` files and other secret-containing file types to prevent credential leakage per [PRD-STD-004](/production/standards/PRD-STD-004-security-scanning/)
- Use the organization's content exclusion settings to prevent Copilot from reading or suggesting code in security-critical modules
- Enable the code referencing feature to identify when suggestions match public code

### Copilot Custom Instructions

Create a `.github/copilot-instructions.md` file in your repository to provide project-specific context:

```markdown
## Project Context
This is a [language/framework] project following [architecture pattern].

## Coding Standards
- Follow [style guide reference]
- Use [error handling pattern]
- All database access through repository pattern

## Security Requirements
- All user input must be validated using [validation library]
- Never use string concatenation for SQL queries
- All API endpoints require authentication middleware

## Do NOT
- Do not suggest code for files in src/security/ or src/crypto/
- Do not suggest hardcoded configuration values
- Do not import deprecated packages: [list]
```

## Cursor

### Overview

Cursor is an AI-first IDE (fork of VS Code) with deep codebase understanding, multi-file editing, and an integrated chat interface with file references. It is particularly effective for tasks that span multiple files and require architectural awareness.

### Recommended Configuration

**Workspace-Level Settings:**

| Setting | Recommended Value | Rationale |
|---|---|---|
| Codebase indexing | **Enabled** | Allows Cursor to understand project structure for better suggestions |
| Privacy mode | **Per organizational policy** | Review data handling against Pillar 2 |
| Model selection | **Latest available** | Newer models generally produce better code |
| Auto-apply | **Disabled** | Engineers should review before applying; supports PRD-STD-002 |
| Terminal command suggestions | **Enabled with review** | Useful but must be reviewed before execution |

**The `.cursorrules` File:**

Cursor supports a `.cursorrules` file in the project root that provides persistent context across all AI interactions. This is the most powerful standardization mechanism for Cursor:

```
You are a senior developer working on a TypeScript Node.js project.

## Architecture
- Clean architecture: controllers -> services -> repositories
- All database access through TypeORM repositories
- Express.js for HTTP handling with middleware pattern

## Standards
- TypeScript strict mode enabled
- ESLint with our custom config (extends @company/eslint-config)
- All functions must have JSDoc comments
- Error handling: use custom AppError class hierarchy
- Logging: use the injected Logger service, never console.log

## Security Rules
- Never generate code for files in src/auth/ or src/crypto/
- All user input validated with class-validator decorators
- SQL: use TypeORM query builder, never raw queries
- API responses: never expose internal IDs or stack traces

## Testing
- Jest for unit tests, Supertest for integration tests
- Minimum 80% coverage for all new code
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies, not internal modules
```

### Cursor-Specific Best Practices

- **Use `@file` references** to explicitly include relevant files in context rather than relying on automatic codebase search
- **Use Composer mode** for multi-file changes; use Chat for single-file tasks
- **Review diffs carefully** -- Cursor's multi-file edits can make changes across many files; review each file's changes individually
- **Commit `.cursorrules`** to version control so all team members share the same AI context

## Claude Code

### Overview

Claude Code is a terminal-based AI coding assistant with extended context windows (200K+ tokens) and agentic capabilities. It can read files, search codebases, run commands, and make edits autonomously. It is particularly effective for large-scale refactoring, architectural tasks, and complex multi-step development.

### Recommended Configuration

**The `CLAUDE.md` File:**

Claude Code reads a `CLAUDE.md` file from the project root for persistent project context:

```markdown
# Project: [Name]

## Architecture
[Describe the project architecture, key patterns, and conventions]

## Tech Stack
- Language: [e.g., TypeScript 5.x]
- Framework: [e.g., Next.js 14]
- Database: [e.g., PostgreSQL via Prisma]
- Testing: [e.g., Vitest + Testing Library]

## Coding Standards
[Key conventions, style preferences, naming patterns]

## Boundaries
- DO NOT modify files in src/auth/ or src/security/ without explicit instruction
- DO NOT run destructive commands (drop database, rm -rf, force push)
- DO NOT commit directly; always create branches

## Common Tasks
- Running tests: `npm test`
- Running linter: `npm run lint`
- Building: `npm run build`
```

**Environment Configuration:**

| Setting | Recommended Value | Rationale |
|---|---|---|
| Allowed tools | **Configured per project** | Restrict which commands Claude Code can run |
| Auto-approve | **Disabled for production repos** | All actions should be reviewed; supports PRD-STD-002 |
| Git integration | **Branch creation only** | Prevent direct commits to protected branches |

### Claude Code Best Practices

- **Use for architectural tasks** that benefit from large context windows (cross-cutting refactors, migration tasks)
- **Review all file changes** before accepting -- Claude Code can modify many files in a single operation
- **Use the `/add` command** to include specific files rather than relying solely on automatic file discovery
- **Commit `CLAUDE.md`** to version control for team standardization

## Team Standardization

### Configuration-as-Code

All AI tool configurations SHOULD be committed to version control:

```
repository/
  .github/
    copilot-instructions.md     # GitHub Copilot custom instructions
  .cursorrules                   # Cursor project rules
  CLAUDE.md                      # Claude Code project context
  .vscode/
    settings.json                # Shared VS Code settings (Copilot config)
    extensions.json              # Recommended extensions
```

### Standardization Checklist

- [ ] AI tool configurations are committed to version control
- [ ] Security-sensitive directories are excluded from AI context
- [ ] Secret-containing file types are excluded from AI suggestions
- [ ] Code referencing / public code matching is configured per license policy
- [ ] Custom instructions include project architecture and conventions
- [ ] Custom instructions include explicit "do not" rules for security-critical areas
- [ ] All team members use the same tool version (within one minor version)
- [ ] Tool configurations are reviewed quarterly alongside standard reviews

### Onboarding New Team Members

When onboarding engineers to a team using AI tools:

1. **Install the standard tool** per the team's configuration
2. **Verify configuration** by checking that exclusion rules and custom instructions are loaded
3. **Complete AEEF AI code review training** per [PRD-STD-002](/production/standards/PRD-STD-002-code-review/)
4. **Pair with an experienced AI user** for the first week to learn team-specific patterns
5. **Review the Best Practices** section, starting with [AI Pair Programming](/production/best-practices/ai-pair-programming/)

### Tool Migration

When migrating between AI tools or upgrading to new versions:

1. **Audit current configurations** and document all customizations
2. **Map configurations** to the new tool's equivalent settings
3. **Test in a non-production environment** before rolling out
4. **Communicate changes** to the team at least one week before migration
5. **Provide migration support** for the first two weeks after switch-over

## Privacy and Data Handling

All AI tools transmit code to external servers for processing. Organizations MUST evaluate and document:

- What code data is transmitted and to which endpoints
- Data retention policies of the tool vendor
- Whether code is used for model training (and how to opt out)
- Compliance with organizational data classification policies
- Compliance with customer contractual obligations regarding code handling

See [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/) for the complete data handling assessment framework.

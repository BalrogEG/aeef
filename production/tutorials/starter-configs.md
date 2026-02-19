---
title: "Starter Config Files"
sidebar_position: 1
description: "Copy-paste ready configuration files for AI-assisted development tools."
---

# Starter Config Files

These are ready-to-use configuration files you can copy into your project right now. Each file is annotated with comments explaining what it does and how to customize it for your stack.

## CLAUDE.md — Claude Code Project Context

Create this file at the root of your repository. Claude Code reads it automatically to understand your project.

### TypeScript / Node.js Starter

```markdown
# Project: [Your Project Name]

## Tech Stack
- Language: TypeScript 5.x (strict mode)
- Runtime: Node.js 22 LTS
- Framework: Express.js / Next.js (pick one, delete the other)
- Database: PostgreSQL via Prisma
- Testing: Vitest + Testing Library
- Package manager: npm

## Architecture
- Clean architecture: controllers → services → repositories
- All database access through Prisma client (no raw SQL)
- Error handling: custom AppError class hierarchy in src/errors/
- Logging: structured JSON via pino logger

## Coding Standards
- ESLint + Prettier enforced in CI
- Functions must be < 50 lines; extract helpers if longer
- Use named exports, not default exports
- Prefer `const` over `let`; never use `var`
- Error messages must be user-friendly (no stack traces in responses)

## Security Rules — CRITICAL
- NEVER read or modify files in src/auth/ or src/crypto/ without explicit instruction
- NEVER hardcode secrets, API keys, or credentials
- NEVER use string interpolation for SQL (use Prisma parameterized queries)
- NEVER disable TypeScript strict checks or ESLint rules
- ALL user input must be validated with zod schemas before use
- ALL API endpoints require authentication middleware unless explicitly public

## Common Commands
- Run tests: `npm test`
- Run linter: `npm run lint`
- Run dev server: `npm run dev`
- Build: `npm run build`
- Run migrations: `npx prisma migrate dev`

## Git Rules
- NEVER commit directly to main
- ALWAYS create feature branches: `feat/description` or `fix/description`
- NEVER force push
- NEVER run destructive commands (rm -rf, DROP TABLE, etc.)
```

### Python / FastAPI Starter

```markdown
# Project: [Your Project Name]

## Tech Stack
- Language: Python 3.12+
- Framework: FastAPI
- Database: PostgreSQL via SQLAlchemy 2.0 (async)
- Testing: pytest + pytest-asyncio
- Package manager: uv
- Linting: ruff

## Architecture
- Layered: routers → services → repositories
- All database access through SQLAlchemy repository classes
- Dependency injection via FastAPI's Depends()
- Pydantic v2 models for all request/response schemas

## Coding Standards
- Type hints required on all function signatures
- Docstrings on public functions (Google style)
- Max function length: 40 lines
- Use pathlib for file paths, not os.path
- Use f-strings for formatting (but NEVER for SQL)

## Security Rules — CRITICAL
- NEVER read or modify files in app/auth/ or app/security/ without explicit instruction
- NEVER use string formatting for SQL queries
- NEVER store secrets in code — use environment variables via pydantic-settings
- ALL user input validated through Pydantic models
- ALL endpoints require auth dependency unless explicitly public

## Common Commands
- Run tests: `uv run pytest`
- Run linter: `uv run ruff check .`
- Run dev server: `uv run uvicorn app.main:app --reload`
- Run migrations: `uv run alembic upgrade head`

## Git Rules
- NEVER commit directly to main
- ALWAYS create feature branches
- NEVER force push or run destructive commands
```

### Go Starter

```markdown
# Project: [Your Project Name]

## Tech Stack
- Language: Go 1.23+
- Framework: Chi router (net/http based)
- Database: PostgreSQL via pgx
- Testing: Go standard testing + testify
- Build: Go modules

## Architecture
- Clean architecture: handlers → services → repositories
- All database access through repository interfaces
- Context propagation for cancellation and timeouts
- Structured logging via slog

## Coding Standards
- Follow Effective Go and Go Code Review Comments
- All exported functions must have doc comments
- Errors are values — handle them, don't ignore them
- Use table-driven tests
- No init() functions unless absolutely necessary

## Security Rules — CRITICAL
- NEVER modify files in internal/auth/ or internal/crypto/
- NEVER use fmt.Sprintf for SQL queries — use parameterized queries
- NEVER store secrets in code
- ALL HTTP input must be validated before use
- ALL endpoints require auth middleware unless explicitly public

## Common Commands
- Run tests: `go test ./...`
- Run linter: `golangci-lint run`
- Build: `go build ./cmd/server`
- Run: `go run ./cmd/server`
```

---

## .cursorrules — Cursor Project Rules

Create this file at the root of your repository. Cursor reads it automatically.

### Universal Starter (Customize the Tech Stack Section)

```text
You are a senior software engineer working in an established production codebase.

## Tech Stack
- [REPLACE with your language, framework, database, etc.]

## Architecture
- [REPLACE with your architecture pattern, e.g., "Clean architecture with controllers, services, repositories"]
- [REPLACE with key patterns, e.g., "Repository pattern for all database access"]

## Coding Standards
- Follow existing patterns in the codebase — consistency over novelty
- Keep functions short and focused (< 40 lines)
- Use descriptive variable names — no single-letter variables except loop counters
- Handle all errors explicitly — never swallow exceptions silently
- Write code that is easy to test

## Security Rules (Non-Negotiable)
- Never generate code that handles files in auth/ security/ or crypto/ directories
- Never hardcode secrets, API keys, passwords, or connection strings
- Never use string concatenation or interpolation for database queries
- All user input must be validated before processing
- Never disable security checks, linting rules, or type checking

## Output Expectations
- When generating code, follow the existing project structure and naming conventions
- Include error handling in all generated code
- When asked to implement a feature, propose the approach first, then implement
- When asked to fix a bug, explain the root cause before providing the fix
- Always consider edge cases and null/undefined handling

## Testing
- Generate tests alongside implementation when asked
- Use the project's existing test framework and patterns
- Test both happy path and error cases
- Mock external dependencies, not internal modules

## What NOT to Do
- Do not suggest installing new dependencies without justification
- Do not refactor code that isn't part of the current task
- Do not change public API signatures without flagging it
- Do not generate placeholder or TODO comments — implement fully or say you can't
```

---

## .github/copilot-instructions.md — GitHub Copilot Custom Instructions

```markdown
## Project Context
This is a [LANGUAGE/FRAMEWORK] project following [ARCHITECTURE PATTERN].

## Coding Standards
- Follow the existing code style in this repository
- Use [ERROR_HANDLING_PATTERN] for all error handling
- All database access through [ORM/LIBRARY] — never raw queries with string interpolation
- Prefer explicit types over inference where it improves readability

## Security Requirements
- All user input must be validated using [VALIDATION_LIBRARY]
- Never use string concatenation for SQL queries
- All API endpoints require authentication middleware
- Never include hardcoded credentials or secrets

## Do NOT
- Do not suggest code for files in src/auth/ or src/security/
- Do not suggest hardcoded configuration values
- Do not import deprecated packages
- Do not disable ESLint/linting rules in suggestions
```

---

## .github/pull_request_template.md — PR Template with AI Metadata

```markdown
## Summary
<!-- Brief description of what this PR does -->

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Refactoring
- [ ] Documentation
- [ ] CI/CD / infrastructure

## AI Assistance Disclosure
<!-- Required per AEEF PRD-STD-002 -->

**AI-Usage:** <!-- none | assisted | generated — choose one -->
**AI-Tool:** <!-- e.g., Claude Code, Cursor, GitHub Copilot, ChatGPT, None -->
**AI-Prompt-Ref:** <!-- Brief description of prompts used, or "N/A" -->
**AI-Risk-Notes:** <!-- Any concerns about AI-generated sections, or "None" -->

## Changes
<!-- List the key changes made -->
-
-
-

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing performed
- [ ] No tests needed (explain why)

## Security Checklist
- [ ] No secrets or credentials in code
- [ ] User input is validated
- [ ] No SQL injection vectors
- [ ] No new dependencies with known vulnerabilities
- [ ] Auth/authz checks in place for new endpoints

## Reviewer Notes
<!-- Anything the reviewer should pay special attention to -->
```

---

## .gitignore Additions for AI Safety

Add these to your existing `.gitignore`:

```gitignore
# AI tool local state (do NOT commit)
.claude/
.cursor/
.copilot/

# Environment and secrets (NEVER commit)
.env
.env.local
.env.*.local
*.pem
*.key

# AI conversation logs (may contain sensitive context)
ai-logs/
.ai-history/
```

---

## VS Code Settings for AI Tool Safety

Add to `.vscode/settings.json`:

```json
{
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": true,
    "env": false,
    "dotenv": false,
    "properties": false
  },
  "files.exclude": {
    "**/.env*": false
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/.env*": true
  }
}
```

---

## Quick Setup Script

Run this in your project root to create all config files at once:

```bash
# Create directories
mkdir -p .github docs/decisions .vscode

# Create PR template
curl -o .github/pull_request_template.md \
  https://raw.githubusercontent.com/your-org/aeef-starters/main/pr-template.md

# Or manually: copy the PR template from above into .github/pull_request_template.md

# Create .gitignore additions
echo "
# AI tool local state
.claude/
.cursor/
.copilot/
# Environment and secrets
.env
.env.local
.env.*.local
" >> .gitignore

# Create first decision record
cat > docs/decisions/000-use-aeef-standards.md << 'EOF'
# ADR-000: Adopt AEEF Standards for AI-Assisted Development
**Date:** $(date +%Y-%m-%d)
**Status:** Accepted
**Decision:** This project follows AEEF standards for AI-assisted development.
**Reference:** https://aeef.ai/pillars/startup-quick-start
EOF

echo "Setup complete. Now create your CLAUDE.md or .cursorrules from the starters above."
```

## Next Steps

- [CI/CD Pipeline Starter](/production/tutorials/ci-cd-pipeline-starter) — Add automated security scanning
- [First AI PR Tutorial](/production/tutorials/first-ai-pr-tutorial) — Walk through a real example
- [Policy Templates](/production/tutorials/policy-templates) — Acceptable use and data classification

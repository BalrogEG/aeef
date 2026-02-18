---
title: "Python Prompt Templates"
sidebar_position: 1
description: "Production-ready prompt templates for AI-assisted Python development."
---

# Python Prompt Templates

Language-specific prompts for Python development. These templates account for Python's common AI-generated pitfalls: unsafe string formatting in SQL, missing type hints, incorrect async patterns, and insecure deserialization.

## Feature Implementation

```text
You are a senior Python engineer working in an existing production codebase.

**Context:**
- Python 3.12+, strict type hints (mypy strict mode)
- Framework: [FastAPI / Django / Flask — pick one]
- Database: [SQLAlchemy 2.0 async / Django ORM / raw asyncpg]
- Testing: pytest + pytest-asyncio
- Linting: ruff
- Package manager: uv

**Task:** Implement [DESCRIBE FEATURE].

**Requirements:**
[LIST SPECIFIC REQUIREMENTS]

**Constraints:**
- All functions must have type hints (parameters and return types)
- Use Pydantic v2 models for all data validation
- Use parameterized queries — NEVER use f-strings or .format() for SQL
- Handle exceptions explicitly — no bare `except:` clauses
- Use `pathlib.Path` for file operations, not `os.path`
- Use `logging` module with structured context, not print()
- Follow existing project patterns in [DESCRIBE RELEVANT MODULES]

**Output:**
1. Implementation plan (bullet points)
2. Code with full type hints
3. Test file with pytest fixtures
4. Any migration needed (if database changes)
```

## Security Review

```text
Review this Python code for security vulnerabilities.

**Focus areas:**
1. SQL injection (f-strings, .format(), % formatting in queries)
2. Command injection (subprocess, os.system, os.popen)
3. Path traversal (user input in file paths without sanitization)
4. Insecure deserialization (pickle, yaml.load without SafeLoader)
5. SSRF (user-controlled URLs in requests/httpx calls)
6. Hardcoded secrets (API keys, passwords, connection strings)
7. Missing input validation (especially in FastAPI/Flask route handlers)
8. Insecure random (random module used for security purposes instead of secrets)

**For each finding, return:**
| Severity | CWE | File:Line | Issue | Fix |

**Common Python AI pitfalls to check:**
- AI often generates `yaml.load()` instead of `yaml.safe_load()`
- AI often uses `subprocess.run(f"cmd {user_input}", shell=True)`
- AI often generates `eval()` or `exec()` for dynamic behavior
- AI often uses `os.path.join(base, user_input)` without path traversal check
```

## Bug Fix

```text
**Observed behavior:** [WHAT HAPPENS]
**Expected behavior:** [WHAT SHOULD HAPPEN]
**Error output:**
```
[PASTE TRACEBACK]
```

**Relevant code:**
```python
[PASTE CODE]
```

**Environment:** Python [VERSION], [FRAMEWORK], [OS]

**Instructions:**
1. Analyze the root cause — explain WHY it fails, not just WHERE
2. Check for these common Python issues:
   - Mutable default arguments (def f(items=[]))
   - Late binding closures in loops
   - asyncio event loop issues (mixing sync/async)
   - Import circularity
   - GIL-related concurrency bugs
3. Provide the fix as a minimal diff
4. Explain what could prevent this in the future (test, lint rule, type hint)
```

## Test Generation

```text
Generate pytest tests for the following Python code:

```python
[PASTE CODE]
```

**Requirements:**
- Use pytest fixtures for setup/teardown
- Use `pytest.mark.parametrize` for multiple input scenarios
- Mock external dependencies with `unittest.mock.patch` or `pytest-mock`
- Test async functions with `pytest.mark.asyncio`
- Include these test categories:
  1. Happy path (valid inputs, expected outputs)
  2. Edge cases (empty inputs, None, boundary values, Unicode)
  3. Error cases (invalid input, missing dependencies, network errors)
  4. Type safety (wrong types passed to typed functions)

**Pattern:**
```python
class TestFunctionName:
    """Tests for function_name."""

    def test_happy_path_description(self):
        # Arrange
        ...
        # Act
        ...
        # Assert
        ...
```

**Do NOT:**
- Do not test private methods directly
- Do not assert on mock call counts unless behavior depends on it
- Do not use `time.sleep()` in tests — use async patterns or freezegun
```

## Refactoring

```text
Refactor the following Python code. Current issues: [DESCRIBE ISSUES].

```python
[PASTE CODE]
```

**Target state:**
- [DESCRIBE DESIRED ARCHITECTURE/PATTERN]

**Rules:**
- Preserve all existing behavior (this is a refactor, not a rewrite)
- Preserve the public API — callers should not need to change
- Add type hints to all refactored functions
- Break into smaller functions (max 30 lines each)
- Replace any bare `except:` with specific exception types
- Replace any `# type: ignore` with proper typing
- Use dataclasses or Pydantic models instead of raw dicts for structured data

**Output:**
1. List of changes with rationale
2. Refactored code
3. Any tests that need updating
```

## Code Review

```text
Review this Python PR diff for production readiness.

```diff
[PASTE DIFF]
```

**Check for:**
1. **Correctness:** Logic errors, off-by-one, missing edge cases
2. **Type safety:** Missing or incorrect type hints, Any usage
3. **Python-specific issues:**
   - Mutable default arguments
   - Incorrect use of `is` vs `==` for value comparison
   - Missing `__all__` for public API modules
   - f-string expressions that could raise (e.g., f"{obj.attr}" when obj could be None)
4. **Performance:** N+1 queries, unnecessary list copies, blocking I/O in async context
5. **Security:** Per Python security checklist above
6. **Testing:** Are new code paths covered? Are edge cases tested?

**Return format:**
severity | file:line | issue | suggested fix
```

## Common Python Anti-Patterns AI Generates

Reference this list when reviewing AI-generated Python code:

| Anti-Pattern | Example | Correct Alternative |
|---|---|---|
| Mutable default | `def f(items=[])` | `def f(items: list | None = None)` |
| Bare except | `except:` | `except SpecificError:` |
| Unsafe YAML | `yaml.load(data)` | `yaml.safe_load(data)` |
| Shell injection | `subprocess.run(f"ls {path}", shell=True)` | `subprocess.run(["ls", path])` |
| SQL injection | `f"SELECT * FROM users WHERE id = {user_id}"` | `cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))` |
| Eval usage | `eval(user_expression)` | Use `ast.literal_eval()` or a safe parser |
| Insecure random | `random.randint(0, 999999)` for tokens | `secrets.token_urlsafe(32)` |
| Sync in async | `requests.get()` inside `async def` | `httpx.AsyncClient().get()` |
| Global state | Module-level mutable singletons | Dependency injection |
| Print debugging | `print(f"DEBUG: {value}")` | `logger.debug("value=%s", value)` |

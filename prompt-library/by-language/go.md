---
title: "Go Prompt Templates"
sidebar_position: 3
description: "Production-ready prompt templates for AI-assisted Go development."
---

# Go Prompt Templates

Language-specific prompts for Go development. These templates account for Go's common AI-generated pitfalls: ignored errors, goroutine leaks, unsafe concurrent map access, and improper context handling.

## Feature Implementation

```text
You are a senior Go engineer working in an existing production codebase.

**Context:**
- Go 1.23+
- Router: [Chi / Gin / stdlib net/http — pick one]
- Database: [pgx / sqlx / GORM — pick one]
- Testing: stdlib testing + testify
- Logging: slog (structured)

**Task:** Implement [DESCRIBE FEATURE].

**Requirements:**
[LIST SPECIFIC REQUIREMENTS]

**Constraints:**
- ALWAYS handle errors — never use `_` for error returns unless documented why
- ALWAYS pass context.Context as the first parameter for I/O operations
- ALWAYS use parameterized queries — never fmt.Sprintf for SQL
- Use the standard library where possible — justify any external dependency
- Use interfaces for dependencies (enables testing)
- Keep functions under 40 lines
- Use table-driven tests
- Follow Go Code Review Comments: https://go.dev/wiki/CodeReviewComments

**Output:**
1. Interface definitions (if new)
2. Implementation
3. Table-driven tests
4. Any needed mocks (interface-based)
```

## Security Review

```text
Review this Go code for security vulnerabilities.

**Focus areas:**
1. SQL injection (fmt.Sprintf or string concat in queries)
2. Command injection (os/exec with user input)
3. Path traversal (filepath.Join with user input without cleaning)
4. SSRF (user-controlled URLs in http.Get/Post)
5. Race conditions (shared state without sync primitives)
6. Goroutine leaks (goroutines without cancellation via context)
7. Improper error handling (errors ignored or swallowed)
8. Unsafe type assertions (type assertion without ok check)
9. Hardcoded secrets
10. Insecure TLS configuration (InsecureSkipVerify: true)

**For each finding, return:**
| Severity | CWE | File:Line | Issue | Fix |

**Common Go AI pitfalls to check:**
- AI often generates `defer rows.Close()` before checking `err` from the query
- AI often uses `fmt.Sprintf("SELECT ... WHERE id = '%s'", id)` for SQL
- AI often forgets to check the `ok` value in type assertions
- AI often creates goroutines without context cancellation
- AI often uses `sync.Mutex` when `sync.RWMutex` is appropriate
- AI often ignores the error return from `json.NewEncoder().Encode()`
```

## Bug Fix

```text
**Observed behavior:** [WHAT HAPPENS]
**Expected behavior:** [WHAT SHOULD HAPPEN]
**Error output:**
```
[PASTE ERROR/PANIC/STACK TRACE]
```

**Relevant code:**
```go
[PASTE CODE]
```

**Go version:** [VERSION]

**Instructions:**
1. Analyze the root cause
2. Check for these common Go issues:
   - Nil pointer dereference (unchecked interface or pointer)
   - Data race (use `go test -race` results if available)
   - Goroutine leak (goroutine started but never exits)
   - Context deadline exceeded (upstream timeout too short)
   - defer ordering issues (deferred functions in wrong order)
   - Slice mutation (modifying a slice that shares backing array)
   - Channel deadlock (unbuffered channel with no receiver)
3. Provide the fix as a minimal diff
4. If the bug is a race condition, explain the sequence of events
```

## Test Generation

```text
Generate Go tests for the following code:

```go
[PASTE CODE]
```

**Requirements:**
- Use table-driven tests with descriptive test case names
- Use testify/assert for assertions (or stdlib if testify not available)
- Use interface-based mocks (not monkey patching)
- Test both success and error paths
- Include:
  1. Happy path
  2. Error propagation (verify errors are returned, not swallowed)
  3. Edge cases: nil input, empty slices, zero values, context cancellation
  4. Concurrent safety (if applicable — use -race flag)

**Pattern:**
```go
func TestFunctionName(t *testing.T) {
    tests := []struct {
        name     string
        input    InputType
        want     OutputType
        wantErr  bool
    }{
        {
            name:  "valid input returns expected result",
            input: InputType{...},
            want:  OutputType{...},
        },
        {
            name:    "invalid input returns error",
            input:   InputType{},
            wantErr: true,
        },
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            got, err := FunctionName(tt.input)
            if tt.wantErr {
                assert.Error(t, err)
                return
            }
            assert.NoError(t, err)
            assert.Equal(t, tt.want, got)
        })
    }
}
```

**Do NOT:**
- Do not use init() in tests
- Do not test unexported functions directly
- Do not use time.Sleep for synchronization — use channels or sync primitives
- Do not skip error return checks even in tests
```

## Refactoring

```text
Refactor the following Go code. Current issues: [DESCRIBE ISSUES].

```go
[PASTE CODE]
```

**Target state:**
- [DESCRIBE DESIRED PATTERN]

**Rules:**
- Preserve the public API (exported functions and types)
- Accept interfaces, return structs
- Use functional options pattern for complex configuration
- Extract side effects behind interfaces for testability
- Use context.Context for cancellation and deadlines
- Replace any `interface{}` / `any` with proper generics if Go 1.18+
- Keep error messages lowercase (Go convention)
- Keep functions under 40 lines
- Add godoc comments to all exported symbols

**Output:**
1. List of changes with rationale
2. Updated interfaces
3. Refactored implementation
4. Updated tests
```

## Common Go Anti-Patterns AI Generates

| Anti-Pattern | Example | Correct Alternative |
|---|---|---|
| Ignored error | `result, _ := doThing()` | `result, err := doThing(); if err != nil { return err }` |
| SQL injection | `fmt.Sprintf("SELECT * WHERE id='%s'", id)` | `db.QueryRow("SELECT * WHERE id=$1", id)` |
| Unchecked assertion | `val := x.(string)` | `val, ok := x.(string); if !ok { ... }` |
| Goroutine leak | `go func() { http.Get(url) }()` | Pass context, select on `ctx.Done()` |
| Defer before error check | `rows, err := db.Query(...); defer rows.Close()` | Check `err` first, then defer |
| Bare panic | `panic("something went wrong")` | Return error instead |
| Global state | `var db *sql.DB` at package level | Dependency injection via struct fields |
| Race condition | Concurrent map read/write | `sync.RWMutex` or `sync.Map` |
| Empty error message | `return fmt.Errorf("")` | `return fmt.Errorf("operation failed: %w", err)` |
| Missing context | `func DoWork()` | `func DoWork(ctx context.Context)` |

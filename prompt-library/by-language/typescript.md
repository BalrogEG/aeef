---
title: "TypeScript Prompt Templates"
sidebar_position: 2
description: "Production-ready prompt templates for AI-assisted TypeScript development."
---

# TypeScript Prompt Templates

Language-specific prompts for TypeScript development. These templates account for TypeScript's common AI-generated pitfalls: `any` type usage, missing null checks, incorrect generic constraints, and unsafe type assertions.

## Feature Implementation

```text
You are a senior TypeScript engineer working in an existing production codebase.

**Context:**
- TypeScript 5.x with strict mode enabled (strict: true in tsconfig)
- Runtime: Node.js 22 / Bun / Browser (pick one)
- Framework: [Next.js / Express / NestJS / none — pick one]
- Testing: [Vitest / Jest] + Testing Library (if React)
- Package manager: [npm / pnpm / bun]

**Task:** Implement [DESCRIBE FEATURE].

**Requirements:**
[LIST SPECIFIC REQUIREMENTS]

**Constraints:**
- NEVER use `any` type — use `unknown` and narrow with type guards if needed
- NEVER use non-null assertions (`!`) — use proper null checks
- NEVER use type assertions (`as`) unless absolutely necessary and documented with a comment explaining why
- Use `readonly` for data that should not be mutated
- Use discriminated unions over type assertions for variant types
- Prefer `interface` for object shapes, `type` for unions and computed types
- All async functions must handle errors — no unhandled promise rejections
- Follow existing patterns in [DESCRIBE RELEVANT FILES]

**Output:**
1. Interface/type definitions first
2. Implementation with full type safety
3. Unit tests
4. Any breaking changes to existing types (if applicable)
```

## Security Review

```text
Review this TypeScript code for security vulnerabilities.

**Focus areas:**
1. Prototype pollution (object spread from user input, lodash merge)
2. XSS (innerHTML, dangerouslySetInnerHTML, unsanitized template literals in DOM)
3. Command injection (child_process.exec with user input)
4. Path traversal (user input in file paths)
5. Unsafe JSON parsing (JSON.parse without validation)
6. Missing input validation (req.body, req.params, req.query used directly)
7. SSRF (user-controlled URLs in fetch/axios)
8. Regex DoS (ReDoS from user-controlled regex patterns)
9. Type-safety bypasses (`as any`, `@ts-ignore`, `as unknown as X`)

**For each finding, return:**
| Severity | CWE | File:Line | Issue | Fix |

**Common TypeScript AI pitfalls to check:**
- AI often uses `as` to bypass type errors instead of fixing the types
- AI often generates `JSON.parse(input)` without try-catch or schema validation
- AI often creates `eval()` or `new Function()` for dynamic behavior
- AI often uses `innerHTML` instead of `textContent` for user-provided content
- AI often ignores null/undefined in optional chains without fallback
```

## Bug Fix

```text
**Observed behavior:** [WHAT HAPPENS]
**Expected behavior:** [WHAT SHOULD HAPPEN]
**Error output:**
```
[PASTE ERROR/STACK TRACE]
```

**Relevant code:**
```typescript
[PASTE CODE]
```

**TypeScript config notes:** strict mode [enabled/disabled], target [ES2022/ESNext]

**Instructions:**
1. Analyze the root cause — explain WHY, not just WHERE
2. Check for these common TypeScript issues:
   - Incorrect type narrowing (type guard doesn't narrow properly)
   - Promise handling (missing await, unhandled rejection)
   - Closure capturing (`let` vs `const` in loops)
   - Optional chaining returning `undefined` instead of expected value
   - Enum value comparison issues (string vs numeric)
   - Module resolution issues (ESM vs CJS interop)
3. Provide the fix as a minimal diff
4. If the root cause is a type issue, fix the types rather than adding `as` assertions
```

## Test Generation

```text
Generate tests for the following TypeScript code using [Vitest / Jest]:

```typescript
[PASTE CODE]
```

**Requirements:**
- Full type safety in tests — no `any` in test code either
- Use `describe` / `it` structure with clear descriptions
- Mock dependencies using [vi.mock / jest.mock] — mock modules, not implementations
- Test async code with `async/await`, not callbacks
- Include:
  1. Happy path with various valid inputs
  2. Edge cases: empty arrays, empty strings, null/undefined, 0, NaN
  3. Error cases: invalid input types, network failures, timeouts
  4. Type narrowing tests (if using discriminated unions)

**Pattern:**
```typescript
describe('functionName', () => {
  it('should [expected behavior] when [condition]', () => {
    // Arrange
    const input = ...;

    // Act
    const result = functionName(input);

    // Assert
    expect(result).toEqual(expected);
  });
});
```

**Do NOT:**
- Do not use `any` in test code
- Do not test TypeScript types at runtime (types are erased)
- Do not use `@ts-ignore` or `@ts-expect-error` in tests unless testing type errors
- Do not mock internal private methods
```

## Refactoring

```text
Refactor the following TypeScript code. Current issues: [DESCRIBE ISSUES].

```typescript
[PASTE CODE]
```

**Target state:**
- [DESCRIBE DESIRED PATTERN]

**Rules:**
- Preserve the public API — callers should not need to change
- Replace all `any` with proper types
- Replace all `as` assertions with type guards or proper narrowing
- Use generics where patterns repeat with different types
- Use `readonly` for all properties that should not be mutated
- Use discriminated unions for state machines and variant types
- Extract magic numbers and strings into named constants
- Max function length: 30 lines
- Preserve behavior exactly — write tests first if they don't exist

**Output:**
1. List of changes with rationale
2. Updated type definitions
3. Refactored implementation
4. Updated tests
```

## Common TypeScript Anti-Patterns AI Generates

| Anti-Pattern | Example | Correct Alternative |
|---|---|---|
| Using `any` | `function f(data: any)` | `function f(data: unknown)` with type guard |
| Non-null assertion | `user!.name` | `if (user) { user.name }` or nullish coalescing |
| Unsafe assertion | `value as string` | Type guard: `if (typeof value === 'string')` |
| Implicit `any` | `function f(data) {}` | `function f(data: InputType) {}` |
| Ignoring errors | `.catch(() => {})` | `.catch((err) => { logger.error(err); throw err; })` |
| String enum abuse | `enum Status { Active = "ACTIVE" }` | `const Status = { Active: "ACTIVE" } as const` |
| Prototype pollution | `Object.assign(target, userInput)` | Validate and pick known keys |
| innerHTML XSS | `el.innerHTML = userInput` | `el.textContent = userInput` |
| Unvalidated JSON | `const data = JSON.parse(body)` | Parse then validate with zod/valibot schema |
| Floating promises | `asyncFunction()` (no await) | `await asyncFunction()` or `void asyncFunction()` with error handling |
| Mutable exports | `export let config = {}` | `export const config: Readonly<Config> = {}` |

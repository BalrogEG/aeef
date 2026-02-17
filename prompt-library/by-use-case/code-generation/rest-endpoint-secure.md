# Prompt: Secure REST Endpoint Skeleton

- Title: Secure REST Endpoint Skeleton
- Description: Generate a minimal REST endpoint with validation, authorization check, and structured error handling.
- Category: code-generation, typescript, backend
- Status: draft
- Author: aeef-core
- Date: 2026-02-17
- Effectiveness rating: pending

## Prompt Text

```text
You are generating production-grade TypeScript API code.
Constraints:
1) Use explicit input validation.
2) Enforce authorization before business logic.
3) Use parameterized data access only.
4) Return structured error responses (RFC 7807 style).
5) Include unit tests for success, validation error, unauthorized, and service failure paths.
Provide only code and test files.
```

## Example Output

- `src/api/user/createUserHandler.ts`
- `src/api/user/createUserHandler.test.ts`

## Known Limitations

- May over-generate abstractions for simple handlers.
- Needs project-specific auth middleware alignment.

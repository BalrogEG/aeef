---
title: "Express.js Prompt Templates"
sidebar_position: 2
description: "Prompt templates for AI-assisted Express.js API development."
---

# Express.js Prompt Templates

Framework-specific prompts for Express.js development. These templates account for common AI pitfalls: missing error middleware, unhandled async errors, security header omissions, and improper middleware ordering.

## Feature Implementation (API Endpoint)

```text
You are a senior Express.js engineer working in a production API.

**Context:**
- Express 5.x / 4.x (specify version) with TypeScript
- Architecture: controllers → services → repositories
- Database: [Prisma / TypeORM / Knex — pick one]
- Auth: JWT via middleware
- Validation: zod
- Logging: pino

**Task:** Implement [DESCRIBE ENDPOINT/FEATURE].

**Requirements:**
[LIST SPECIFIC REQUIREMENTS]

**Constraints:**
- Route handler must be async and properly wrapped for error handling
- Validate all input (body, params, query) with zod before processing
- Return consistent error format: { error: { code: string, message: string } }
- Include proper HTTP status codes (201 for creation, 204 for deletion, etc.)
- Log request context (requestId, userId) in all log entries
- Do not put business logic in controllers — delegate to service layer

**Output:**
1. Route definition (router file)
2. Controller function
3. Service method
4. Validation schemas (zod)
5. Tests for controller and service
```

## Middleware Implementation

```text
Create Express middleware for [DESCRIBE PURPOSE].

**Pattern to follow:**
```typescript
import { RequestHandler, ErrorRequestHandler } from 'express';

// Regular middleware
export function middlewareName(options: Options): RequestHandler {
  return (req, res, next) => {
    // logic
    next(); // or next(error)
  };
}

// Error middleware (4 params)
export function errorMiddleware(): ErrorRequestHandler {
  return (err, req, res, next) => {
    // error handling
    res.status(err.status || 500).json({ error: { code: err.code, message: err.message } });
  };
}
```

**Constraints:**
- Always call `next()` or send a response — never leave the request hanging
- Error middleware must have exactly 4 parameters (err, req, res, next)
- Async middleware must wrap in try-catch or use an async wrapper
- Do not mutate `req` or `res` objects beyond standard Express patterns
```

## Common Express AI Pitfalls

| Pitfall | What AI Does Wrong | Correct Approach |
|---|---|---|
| Async errors | No try-catch in async handlers | Wrap with async error handler or use express 5.x |
| Error middleware | 3-param function | Must have exactly 4 params: `(err, req, res, next)` |
| Middleware order | `app.use(auth)` after route definitions | Auth middleware before protected routes |
| Missing helmet | No security headers | `app.use(helmet())` early in middleware chain |
| CORS config | `cors({ origin: '*' })` | Whitelist specific origins |
| Body parsing | No size limits on `express.json()` | `express.json({ limit: '1mb' })` |
| Error leaking | Sends full error stack to client | Only send safe error messages in production |
| Trust proxy | Missing behind reverse proxy | `app.set('trust proxy', 1)` for correct `req.ip` |

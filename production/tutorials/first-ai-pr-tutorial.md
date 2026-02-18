---
title: "Tutorial: Your First AI-Governed PR"
sidebar_position: 3
description: "End-to-end walkthrough of creating, reviewing, and merging an AI-assisted pull request under AEEF standards."
---

# Tutorial: Your First AI-Governed PR

This tutorial walks you through creating a real pull request using AI assistance, following AEEF standards. By the end, you'll have hands-on experience with the full workflow: prompting, reviewing, testing, and merging AI-assisted code.

**Time required:** 30-45 minutes
**Prerequisites:** A GitHub repository with the [CI/CD Pipeline Starter](/production/tutorials/ci-cd-pipeline-starter) and [PR template](/production/tutorials/starter-configs#githubpull_request_templatemd--pr-template-with-ai-metadata) installed.

---

## The Task

We'll implement a simple but realistic feature: a **rate limiter middleware** for an Express.js API. This is a good example because:
- It's a real production concern
- It has security implications (AI might get it wrong)
- It requires tests
- It's small enough to complete in 30 minutes

:::info Using a Different Stack?
The principles are the same for any language/framework. Adapt the code examples to your stack — the AEEF workflow (prompt → review → test → PR) is universal.
:::

---

## Step 1: Write a Structured Prompt

Don't just type "write a rate limiter." Use the CRAFT framework from [AI Pair Programming](/production/best-practices/ai-pair-programming/):

```text
**Context:**
This is a Node.js Express API using TypeScript. We use middleware for
cross-cutting concerns. The project uses pino for logging and Redis
for shared state. Error responses follow the format:
{ "error": { "code": string, "message": string } }

**Requirements:**
Implement a rate limiter middleware that:
1. Limits requests per IP address
2. Uses a sliding window algorithm
3. Returns 429 Too Many Requests when limit is exceeded
4. Supports configurable window (seconds) and max requests
5. Works with Redis for multi-instance deployments
6. Falls back gracefully if Redis is unavailable (allow traffic, log warning)

**Assumptions:**
- Redis client is available via `req.app.locals.redis` (ioredis instance)
- Logger is available via `req.app.locals.logger` (pino instance)
- Existing middleware pattern: export a factory function that returns RequestHandler

**Format:**
1. The middleware factory function (src/middleware/rate-limiter.ts)
2. Types/interfaces in a separate file (src/middleware/rate-limiter.types.ts)
3. Unit tests (src/middleware/__tests__/rate-limiter.test.ts)

**Constraints:**
- Do NOT introduce new dependencies (use ioredis which is already installed)
- Follow existing error response format
- Include JSDoc comments on the exported function
- Handle Redis connection errors gracefully — never crash the server
```

### Why This Prompt Works

| CRAFT Element | What It Does | Without It |
|---|---|---|
| **Context** | AI knows the stack, patterns, conventions | AI guesses your stack, uses wrong patterns |
| **Requirements** | Specific, testable acceptance criteria | AI builds something vaguely related |
| **Assumptions** | AI knows what exists, doesn't reinvent | AI creates its own Redis client, logger, etc. |
| **Format** | AI structures output how you need it | You spend time reorganizing AI output |
| **Constraints** | Prevents common AI mistakes | AI installs `express-rate-limit` npm package instead of building what you asked for |

---

## Step 2: Review the AI Output

Here's a realistic example of what AI might generate. Let's review it critically.

### Generated Code: `src/middleware/rate-limiter.ts`

```typescript
import { RequestHandler } from 'express';
import { RateLimiterOptions } from './rate-limiter.types';

/**
 * Creates a rate limiter middleware using Redis sliding window.
 * Falls back to allowing all traffic if Redis is unavailable.
 */
export function createRateLimiter(options: RateLimiterOptions): RequestHandler {
  const { windowSeconds = 60, maxRequests = 100 } = options;

  return async (req, res, next) => {
    const redis = req.app.locals.redis;
    const logger = req.app.locals.logger;
    const key = `rate-limit:${req.ip}`;

    // Fallback: if Redis is unavailable, allow the request
    if (!redis) {
      logger?.warn('Rate limiter: Redis unavailable, allowing request');
      return next();
    }

    try {
      const now = Date.now();
      const windowStart = now - windowSeconds * 1000;

      // Sliding window: add current timestamp, remove expired entries
      const pipeline = redis.pipeline();
      pipeline.zremrangebyscore(key, 0, windowStart);
      pipeline.zadd(key, now, `${now}`);
      pipeline.zcard(key);
      pipeline.expire(key, windowSeconds);

      const results = await pipeline.exec();
      const requestCount = results?.[2]?.[1] as number;

      if (requestCount > maxRequests) {
        res.status(429).json({
          error: {
            code: 'RATE_LIMITED',
            message: `Too many requests. Limit: ${maxRequests} per ${windowSeconds}s`,
          },
        });
        return;
      }

      // Set rate limit headers
      res.set('X-RateLimit-Limit', String(maxRequests));
      res.set('X-RateLimit-Remaining', String(maxRequests - requestCount));
      res.set('X-RateLimit-Reset', String(Math.ceil((windowStart + windowSeconds * 1000) / 1000)));

      next();
    } catch (err) {
      // Redis error: allow the request, don't crash
      logger?.warn({ err }, 'Rate limiter: Redis error, allowing request');
      next();
    }
  };
}
```

### Review Checklist (What to Look For)

Go through this checklist for every piece of AI-generated code:

#### Correctness
- [x] Does it implement a sliding window? **Yes** — uses Redis sorted sets with timestamps
- [x] Does it return 429 when limit exceeded? **Yes**
- [x] Is the window calculation correct? **Check carefully** — `windowStart = now - windowSeconds * 1000` is correct
- [ ] Is the `requestCount` check correct? **ISSUE FOUND** — it uses `>` but should use `>=` because the current request was already added via `zadd` before the count

#### Security (Per PRD-STD-004)
- [x] Is `req.ip` safe to use as a key? **Acceptable** for basic use, but note: behind a proxy, `req.ip` may be the proxy IP unless `trust proxy` is set
- [x] Can the key be injected? **No** — `req.ip` is controlled by Express, not user input directly
- [x] Is there a denial-of-service vector? **Note:** Each request creates a sorted set entry — memory grows with traffic. This is expected for sliding window but should have a TTL. **TTL is set** via `expire`.

#### Error Handling
- [x] Does it handle Redis being unavailable? **Yes** — falls back to allowing traffic
- [x] Does it handle Redis errors? **Yes** — try/catch with fallback
- [x] Does it crash if `logger` is undefined? **Yes, safe** — uses optional chaining `logger?.warn`

#### Architectural Alignment
- [x] Follows factory function pattern? **Yes**
- [x] Uses existing error response format? **Yes**
- [x] Uses existing Redis and logger instances? **Yes**

### Fixes Needed

After review, you identified one bug and one improvement:

**Bug:** Change `requestCount > maxRequests` to `requestCount > maxRequests` — actually, re-read: the `zadd` adds the entry BEFORE `zcard` counts. So if limit is 100, after 100 requests `zcard` returns 100, and `100 > 100` is false — the 101st request returns 101 > 100 = true. This is actually correct. **No fix needed.**

Wait — re-examine. The pipeline executes: remove old entries, add new entry, count. So the count includes the current request. If maxRequests is 100, the 100th request gets count=100, 100 > 100 is false (allowed). The 101st gets count=101, 101 > 100 is true (blocked). The user gets 100 requests. **This is correct.**

**Improvement:** Add `req.ip` proxy note as a code comment:

```typescript
// Note: req.ip depends on Express 'trust proxy' setting.
// Ensure app.set('trust proxy', true) if behind a reverse proxy.
const key = `rate-limit:${req.ip}`;
```

:::tip Real-World Review
Notice how careful review caught a potential issue (the `>` vs `>=`) that turned out to be correct after deeper analysis. This is exactly why human review matters — AI code often has subtle boundary conditions that require careful thinking.
:::

---

## Step 3: Generate and Review Tests

Ask the AI to generate tests, referencing the implementation:

```text
Generate unit tests for the rate limiter middleware above.
Use Vitest with the following patterns:
- Mock Redis using a manual mock (not a library)
- Test: allows requests under the limit
- Test: blocks requests over the limit with 429
- Test: falls back when Redis is unavailable
- Test: falls back on Redis error
- Test: sets rate limit headers
Use AAA pattern (Arrange, Act, Assert).
```

### Generated Tests (Abbreviated)

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createRateLimiter } from '../rate-limiter';

// Mock Redis pipeline
function createMockRedis(requestCount: number) {
  const pipeline = {
    zremrangebyscore: vi.fn().mockReturnThis(),
    zadd: vi.fn().mockReturnThis(),
    zcard: vi.fn().mockReturnThis(),
    expire: vi.fn().mockReturnThis(),
    exec: vi.fn().mockResolvedValue([
      [null, 0],           // zremrangebyscore result
      [null, 1],           // zadd result
      [null, requestCount], // zcard result
      [null, 1],           // expire result
    ]),
  };
  return { pipeline: vi.fn(() => pipeline), _pipeline: pipeline };
}

function createMockReqRes(redis: any) {
  const req = {
    ip: '127.0.0.1',
    app: { locals: { redis, logger: { warn: vi.fn() } } },
  } as any;
  const res = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
    set: vi.fn(),
  } as any;
  const next = vi.fn();
  return { req, res, next };
}

describe('createRateLimiter', () => {
  it('allows requests under the limit', async () => {
    const redis = createMockRedis(5);
    const middleware = createRateLimiter({ maxRequests: 100, windowSeconds: 60 });
    const { req, res, next } = createMockReqRes(redis);

    await middleware(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.set).toHaveBeenCalledWith('X-RateLimit-Limit', '100');
    expect(res.set).toHaveBeenCalledWith('X-RateLimit-Remaining', '95');
  });

  it('blocks requests over the limit with 429', async () => {
    const redis = createMockRedis(101);
    const middleware = createRateLimiter({ maxRequests: 100, windowSeconds: 60 });
    const { req, res, next } = createMockReqRes(redis);

    await middleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(429);
    expect(res.json).toHaveBeenCalledWith({
      error: {
        code: 'RATE_LIMITED',
        message: 'Too many requests. Limit: 100 per 60s',
      },
    });
    expect(next).not.toHaveBeenCalled();
  });

  it('falls back when Redis is unavailable', async () => {
    const middleware = createRateLimiter({ maxRequests: 100, windowSeconds: 60 });
    const { req, res, next } = createMockReqRes(null);

    await middleware(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it('falls back on Redis error', async () => {
    const redis = createMockRedis(0);
    redis._pipeline.exec.mockRejectedValue(new Error('Connection refused'));
    const middleware = createRateLimiter({ maxRequests: 100, windowSeconds: 60 });
    const { req, res, next } = createMockReqRes(redis);

    await middleware(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(req.app.locals.logger.warn).toHaveBeenCalled();
  });
});
```

### Test Review Checklist

- [x] Tests cover happy path (under limit)
- [x] Tests cover rejection (over limit)
- [x] Tests cover Redis unavailable fallback
- [x] Tests cover Redis error fallback
- [x] Tests verify response headers
- [x] Mocks are reasonable and don't test implementation details excessively
- [ ] **Missing:** Test for boundary case (exactly at limit) — add this manually

---

## Step 4: Create the Pull Request

Now commit your changes and create a PR with proper AI disclosure:

```bash
git checkout -b feat/rate-limiter
git add src/middleware/rate-limiter.ts \
        src/middleware/rate-limiter.types.ts \
        src/middleware/__tests__/rate-limiter.test.ts
git commit -m "feat: add Redis-backed sliding window rate limiter

Implements per-IP rate limiting with configurable window and threshold.
Falls back to allowing traffic when Redis is unavailable.

AI-assisted: Implementation generated with Claude Code, reviewed and
modified (added proxy trust comment, verified boundary conditions)."
git push -u origin feat/rate-limiter
```

Create the PR using the template:

```markdown
## Summary
Adds rate limiter middleware using Redis sliding window algorithm.
Per-IP limiting with configurable window and max requests.

## Type of Change
- [x] New feature

## AI Assistance Disclosure
**AI-Usage:** assisted
**AI-Tool:** Claude Code
**AI-Prompt-Ref:** Used CRAFT-structured prompt for implementation + test generation.
**AI-Risk-Notes:** Verified boundary condition (count > maxRequests vs >=).
  Confirmed correct. Added trust proxy documentation comment manually.

## Changes
- Added `src/middleware/rate-limiter.ts` — rate limiter factory function
- Added `src/middleware/rate-limiter.types.ts` — TypeScript interfaces
- Added `src/middleware/__tests__/rate-limiter.test.ts` — 5 unit tests

## Testing
- [x] Unit tests added/updated
- [ ] Integration tests added/updated (not needed for middleware unit)
- [x] Manual testing performed (tested with curl against local server)
- [ ] No tests needed

## Security Checklist
- [x] No secrets or credentials in code
- [x] User input is validated (IP is from Express, not user-supplied)
- [x] No SQL injection vectors (Redis commands, not SQL)
- [x] No new dependencies with known vulnerabilities
- [x] Auth/authz checks in place for new endpoints (N/A — middleware)

## Reviewer Notes
Pay attention to the Redis pipeline execution order — the count includes
the current request (zadd happens before zcard). This is intentional.
```

---

## Step 5: Review the CI Results

When you push the PR, the CI pipeline from the [CI/CD Pipeline Starter](/production/tutorials/ci-cd-pipeline-starter) runs automatically:

| Check | Expected Result |
|---|---|
| Security Scan (Semgrep) | Pass — no OWASP issues in this code |
| Dependency Audit | Pass — no new dependencies added |
| Test Suite | Pass — all 5 tests pass |
| AI Disclosure Check | Pass — PR body includes AI-Usage and AI-Tool fields |

If any check fails, fix the issue and push again. The PR should not be merged until all checks pass.

---

## Step 6: Code Review (As the Reviewer)

If you're reviewing someone else's AI-assisted PR, look for these AI-specific patterns:

### AI-Specific Review Checklist

| Check | What to Look For |
|---|---|
| **Hallucinated APIs** | Does the code call functions that don't exist in the libraries used? |
| **Outdated patterns** | Is the code using deprecated APIs or old syntax? |
| **Over-engineering** | Did AI add unnecessary abstractions, options, or error handling? |
| **Missing edge cases** | Does the code handle null, undefined, empty strings, max values? |
| **Copy-paste artifacts** | Are there comments like "// TODO" or "// your code here"? |
| **Security gaps** | Does it validate input? Handle auth? Avoid injection? |
| **Test quality** | Do tests actually verify behavior, or just assert that mock was called? |

---

## What You Just Practiced

This tutorial covered the complete AEEF-governed AI development workflow:

| Step | AEEF Standard | What You Did |
|---|---|---|
| Structured prompting | PRD-STD-001 | Used CRAFT framework |
| Critical code review | PRD-STD-002 | Line-by-line review with checklist |
| Test generation and review | PRD-STD-003 | Generated and verified tests |
| Security review | PRD-STD-004 | Checked for OWASP issues |
| PR documentation | PRD-STD-005 | AI disclosure in PR template |
| CI/CD enforcement | PRD-STD-007 | Automated quality gates |

## Next Steps

- Apply this workflow to your next real feature
- Share the CRAFT prompt template with your team
- Read [Code Review Responsibilities](/roles/developer/code-review-responsibilities) for the full AI-specific review guide
- Try the [Prompt Library](/production/standards/apply-ready-rollout-kit#ready-made-prompts-by-standard) for other task types

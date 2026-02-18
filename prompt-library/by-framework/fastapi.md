---
title: "FastAPI Prompt Templates"
sidebar_position: 3
description: "Prompt templates for AI-assisted FastAPI development."
---

# FastAPI Prompt Templates

Framework-specific prompts for FastAPI development. These templates account for common AI pitfalls: blocking sync calls in async endpoints, incorrect dependency injection, missing response models, and improper Pydantic usage.

## Feature Implementation (API Endpoint)

```text
You are a senior FastAPI engineer working in a production API.

**Context:**
- FastAPI 0.110+ with Python 3.12
- Database: SQLAlchemy 2.0 async with asyncpg
- Auth: JWT via OAuth2PasswordBearer dependency
- Validation: Pydantic v2
- Logging: structlog

**Task:** Implement [DESCRIBE ENDPOINT/FEATURE].

**Requirements:**
[LIST SPECIFIC REQUIREMENTS]

**Constraints:**
- ALL endpoints must have explicit `response_model` — no returning raw dicts
- ALL path/query params validated via Pydantic or FastAPI's type system
- Use `Depends()` for auth, database sessions, and shared logic
- Use async database operations — never call sync SQLAlchemy in async endpoints
- Return proper status codes: `status_code=201` for creation, `204` for deletion
- Document with docstrings (FastAPI uses them for OpenAPI docs)
- Handle errors with `HTTPException` — do not let raw exceptions reach the client

**Output:**
1. Pydantic schemas (request + response models)
2. Router with endpoint definitions
3. Service/repository functions
4. Dependency functions
5. Tests with httpx.AsyncClient
```

## Dependency Injection Pattern

```text
Create a FastAPI dependency for [DESCRIBE PURPOSE].

**Pattern:**
```python
from fastapi import Depends, HTTPException, status

async def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: AsyncSession = Depends(get_db),
) -> User:
    """Dependency that extracts and validates the current user from JWT."""
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("sub")
        if user_id is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
    except JWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)

    user = await db.get(User, user_id)
    if user is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
    return user
```

**Constraints:**
- Dependencies must be async if they do I/O
- Use `yield` dependencies for resource cleanup (DB sessions)
- Type annotate all dependency parameters and return types
- Raise `HTTPException` with specific status codes, not generic 500
```

## Common FastAPI AI Pitfalls

| Pitfall | What AI Does Wrong | Correct Approach |
|---|---|---|
| Sync in async | Uses `requests` library in async endpoint | Use `httpx.AsyncClient` |
| Missing response_model | Returns raw dict | Always specify `response_model=SchemaName` |
| Pydantic v1 syntax | Uses `class Config:` and `.dict()` | Pydantic v2: `model_config` and `.model_dump()` |
| Background tasks | Heavy work in request handler | Use `BackgroundTasks` or task queue |
| Session leak | No `yield` in DB dependency | `async with session_maker() as session: yield session` |
| No error handling | Lets exceptions propagate | Catch and raise `HTTPException` |
| Wrong status codes | Returns 200 for everything | Use `status.HTTP_201_CREATED`, etc. |
| Missing CORS | No CORS middleware | Add `CORSMiddleware` with specific origins |

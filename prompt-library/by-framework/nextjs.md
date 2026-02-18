---
title: "Next.js Prompt Templates"
sidebar_position: 1
description: "Prompt templates for AI-assisted Next.js development (App Router)."
---

# Next.js Prompt Templates

Framework-specific prompts for Next.js (App Router) development. These templates account for common AI pitfalls with Next.js: incorrect client/server boundary, leaked server data, improper caching, and SSR hydration mismatches.

## Feature Implementation (Server Component)

```text
You are a senior Next.js engineer. The project uses the App Router (not Pages Router).

**Context:**
- Next.js 15+ with App Router
- TypeScript strict mode
- Database: Prisma / Drizzle (pick one)
- Styling: Tailwind CSS
- Auth: NextAuth.js v5 / Clerk (pick one)

**Task:** Implement [DESCRIBE FEATURE].

**Critical Rules:**
- Components are Server Components by default — only add 'use client' when needed
- NEVER import server-only code (database, env vars, secrets) in client components
- NEVER pass sensitive data as props to client components
- Use Next.js built-in fetch with cache options instead of client-side fetching
- Server Actions for mutations — not API routes for form submissions
- Use `loading.tsx`, `error.tsx`, and `not-found.tsx` for UI states

**Output:**
1. File structure (which files to create/modify)
2. Server components
3. Client components (only if interactive behavior required)
4. Server actions (if mutations needed)
5. Types
```

## API Route Handler

```text
Create a Next.js Route Handler (app/api/...) for [DESCRIBE ENDPOINT].

**Requirements:**
[LIST REQUIREMENTS]

**Pattern:**
```typescript
// app/api/[resource]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Validate auth
  // Validate input (searchParams)
  // Business logic
  // Return NextResponse.json()
}
```

**Constraints:**
- Validate all input with zod schemas
- Check authentication/authorization before any business logic
- Return proper HTTP status codes (not always 200)
- Use `NextResponse.json()` with explicit status codes
- Handle errors with try-catch, return structured error responses
- Do NOT expose internal error details to the client
```

## Common Next.js AI Pitfalls

| Pitfall | What AI Does Wrong | Correct Approach |
|---|---|---|
| Server/client boundary | Adds `'use client'` to everything | Default to server components; only add `'use client'` for interactivity |
| Data fetching | Uses `useEffect` + `fetch` for initial data | Fetch in server components directly |
| Environment variables | Uses `process.env.SECRET` in client code | Only `NEXT_PUBLIC_*` in client; secrets stay server-side |
| Caching | Ignores cache options on fetch | Use `{ cache: 'force-cache' }` or `{ next: { revalidate: 60 } }` |
| Mutations | Creates API routes for form submissions | Use Server Actions with `'use server'` |
| Metadata | Hardcodes `<title>` in components | Export `metadata` or `generateMetadata` from `page.tsx` |
| Error handling | No error boundaries | Create `error.tsx` alongside `page.tsx` |
| Loading states | Manual loading state management | Create `loading.tsx` for Suspense-based loading |

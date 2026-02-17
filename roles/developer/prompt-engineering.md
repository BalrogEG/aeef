---
title: "Prompt Engineering for Developers"
sidebar_position: 3
description: "Practical prompt engineering techniques for developers."
---

# Prompt Engineering for Developers

The quality of AI-generated code is directly proportional to the quality of the prompts you write. This section provides practical, battle-tested prompt engineering techniques organized by development task. These techniques align with [Pillar 1: Engineering Discipline](/pillars/pillar-1-engineering-discipline/) and complement the workflow practices described in [Daily Workflows](/roles/developer/daily-workflows).

## The Anatomy of an Effective Prompt

Every effective code generation prompt contains four elements. Omitting any element degrades output quality.

| Element | Purpose | Example |
|---------|---------|---------|
| **Context** | Tell the AI about your codebase, stack, and constraints | "We use TypeScript with Express.js, PostgreSQL, and the repository pattern" |
| **Task** | State exactly what you need generated | "Create a service method that processes refund requests" |
| **Constraints** | Define boundaries and requirements | "Must validate refund amount against original order, log all attempts, throw typed errors" |
| **Format** | Specify output structure and style | "Follow the existing pattern in OrderService.ts, include JSDoc comments, export the function" |

:::tip
Think of prompting as writing a very detailed ticket for a capable but context-free contractor. The more specific your requirements, the less rework you will need.
:::

## Code Generation Prompts

### Example 1: Service Layer Method

**Prompt:**
```
Context: TypeScript Express.js API using repository pattern. We have
OrderRepository with findById(id) and update(order) methods. The Order
entity has fields: id, status, totalAmount, refundedAmount, items[].

Task: Create a RefundService.processRefund(orderId, amount, reason) method.

Constraints:
- Validate that the order exists and is in "completed" status
- Validate that refund amount does not exceed (totalAmount - refundedAmount)
- Update the order's refundedAmount and set status to "partially_refunded"
  or "fully_refunded" based on remaining balance
- Create a RefundRecord entity and persist it
- Throw OrderNotFoundError, InvalidOrderStatusError, or RefundAmountExceededError
  for validation failures

Format: Follow the pattern in OrderService.ts. Include JSDoc. Use async/await.
Return the created RefundRecord.
```

**Why this works:** The prompt provides the entity schema, names the repository methods, specifies all validation rules, defines exact error types, and points to an existing pattern. The AI has everything it needs to produce a near-final implementation.

**Annotation:** Notice that the constraints section enumerates every validation rule. Without this, AI will often generate overly permissive code that accepts invalid input -- a common source of the 1.7x issue rate in AI-generated code.

### Example 2: Database Migration

**Prompt:**
```
Context: PostgreSQL database managed via Knex.js migrations. Current schema
has a "users" table with columns: id (uuid, pk), email (varchar 255, unique),
created_at (timestamp).

Task: Create a migration that adds a user_preferences JSONB column with a
default value and creates a GIN index for query performance.

Constraints:
- Column should be NOT NULL with default '{}'
- Index name should follow our convention: idx_{table}_{column}
- Migration must be reversible (include down function that drops both
  index and column)
- Use Knex.js migration API, not raw SQL

Format: Export up() and down() functions. Include a comment explaining
the GIN index choice.
```

**Why this works:** Specifies the exact migration framework, current schema state, naming conventions, and reversibility requirements. The format instruction ensures the output matches the project's migration file structure.

### Example 3: React Component

**Prompt:**
```
Context: React 18 with TypeScript. We use Tailwind CSS for styling,
React Query for data fetching, and Zod for validation. Component
library follows the pattern in src/components/ with separate files
for component, types, and hooks.

Task: Create a PaginatedTable component that displays tabular data
with server-side pagination.

Constraints:
- Generic over row type T
- Props: columns (Column<T>[]), queryKey, fetchFn, pageSize (default 20)
- Show loading skeleton during fetch
- Handle empty state and error state
- Accessible: proper ARIA table roles, keyboard navigation for pagination
- Responsive: horizontal scroll on mobile

Format: Separate into PaginatedTable.tsx (component), types.ts (interfaces),
and usePaginatedData.ts (hook). Use Tailwind classes only. No inline styles.
```

**Why this works:** Specifies the exact tech stack, file organization pattern, generics requirement, accessibility needs, and responsive behavior. The AI can produce three well-structured files that integrate with the existing codebase.

## Debugging Prompts

### Example 4: Runtime Error Diagnosis

**Prompt:**
```
Context: Node.js Express API. The following endpoint intermittently
returns 500 errors under load. It works fine in development with
single requests.

Code:
[paste the relevant function]

Error log:
[paste the error trace]

Task: Analyze this code for concurrency issues, race conditions,
or resource leaks that could explain intermittent failures under load.

Constraints:
- Focus on shared state, connection pool exhaustion, and promise handling
- Consider that we use a PostgreSQL connection pool with max 20 connections
- Do not suggest rewriting the entire function; identify the specific
  lines causing the issue

Format: List each identified issue with: (1) the specific line(s),
(2) why it fails under load, (3) the minimal fix.
```

**Annotation:** Debugging prompts should always include the error trace, specify the failure conditions (intermittent, under load), and constrain the AI from rewriting everything. The format instruction ensures actionable output rather than a lecture on concurrency.

### Example 5: Logic Error Investigation

**Prompt:**
```
Context: Python financial calculation module. The calculate_compound_interest
function is returning values that are slightly off from expected results.
The discrepancy increases with longer time periods.

Code:
[paste function]

Expected: calculate_compound_interest(1000, 0.05, 12, 10) should return 1647.01
Actual: returns 1643.62

Task: Identify the mathematical or floating-point error in this calculation.

Constraints:
- Compare against the standard compound interest formula: A = P(1 + r/n)^(nt)
- Check for operator precedence issues
- Check for floating-point precision issues with intermediate calculations

Format: Show the step-by-step calculation where the divergence occurs
and provide the corrected code.
```

## Refactoring Prompts

### Example 6: Extract and Simplify

**Prompt:**
```
Context: Java Spring Boot service. The following method is 180 lines long,
has a cyclomatic complexity of 23, and handles three different concerns:
validation, transformation, and persistence.

Code:
[paste the method]

Task: Refactor this method using the Single Responsibility Principle.
Extract into separate methods or classes as appropriate.

Constraints:
- Preserve all existing behavior (no functional changes)
- Maintain the same public API (method signature unchanged)
- Extracted methods should be testable in isolation
- Follow our naming convention: validate*, transform*, persist*
- Keep each extracted method under 20 lines

Format: Show the refactored code with brief comments explaining each
extraction decision. List any new classes or interfaces introduced.
```

**Annotation:** Refactoring prompts must explicitly state "preserve all existing behavior." Without this constraint, AI tools frequently "improve" business logic during refactoring, introducing subtle bugs. Always run your full test suite after AI-assisted refactoring, per [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements).

## Documentation Prompts

### Example 7: API Documentation

**Prompt:**
```
Context: REST API endpoint for our e-commerce platform. The endpoint
handles order creation with complex validation rules.

Code:
[paste the controller and service methods]

Task: Generate OpenAPI 3.0 YAML documentation for this endpoint.

Constraints:
- Include all request body fields with types, required flags, and descriptions
- Document all response codes (200, 400, 401, 403, 422) with example bodies
- Include the validation rules as field-level descriptions
- Document rate limiting headers (X-RateLimit-Limit, X-RateLimit-Remaining)

Format: OpenAPI 3.0 YAML. Use $ref for reusable schemas. Include
realistic example values (not "string" or "123").
```

## Prompt Anti-Patterns

Avoid these common mistakes that degrade AI output quality:

| Anti-Pattern | Example | Why It Fails | Better Approach |
|-------------|---------|-------------|-----------------|
| **Vague request** | "Write a function to handle users" | No constraints, no context, no format | Specify what "handle" means, what fields, what errors |
| **Kitchen sink** | 2000-word prompt covering 10 features | Overloads the model, produces shallow output | Break into focused single-responsibility prompts |
| **Missing error handling** | "Create a REST endpoint for orders" | AI will generate the happy path only | Explicitly list error cases and validation rules |
| **No existing pattern reference** | "Write a service class" | AI will use generic patterns, not your patterns | Reference a specific existing file as a template |
| **Implicit security requirements** | "Create a login endpoint" | AI may skip rate limiting, input sanitization, etc. | Enumerate security requirements explicitly per [PRD-STD-005](/production/standards/PRD-STD-004-security-scanning) |

## Building Your Prompt Library

Over time, build a personal and team-shared library of effective prompts.

1. **Save prompts that produce good results.** Store them in a shared repository alongside your code.
2. **Parameterize reusable prompts.** Replace specific names with placeholders for reuse across similar tasks.
3. **Version your prompts.** As AI tools evolve, prompts that worked last month may need adjustment.
4. **Share with your team.** Contribute to your organization's prompt library as described in [PRD-STD-001](/production/standards/PRD-STD-001-prompt-engineering).

:::warning
Never include secrets, API keys, customer data, or proprietary business logic in your prompts. See [Security Awareness](/roles/developer/security-awareness) for detailed guidance on secure prompt practices.
:::

## Measuring Prompt Effectiveness

Track these indicators to improve your prompting skills over time:

- **First-attempt acceptance rate:** How often is the AI's first output usable with minor edits? Target 50-60%.
- **Iteration count:** How many prompt refinements before acceptable output? Target 1-2 iterations.
- **Review findings:** How many issues are found during code review of AI-generated code? Fewer issues indicate better prompting.

For the team-level view of prompt effectiveness, see [Metrics That Matter](/roles/development-manager/metrics-that-matter).

---
title: "User Stories for AI-Assisted Development"
sidebar_position: 5
description: "Writing effective user stories for AI-augmented teams."
---

# User Stories for AI-Assisted Development

The way you write user stories directly impacts how effectively AI tools can assist with implementation. Vague, ambiguous stories that work fine when a developer can ask clarifying questions during development produce poor results when an AI tool generates code based on the literal text. This section provides guidance on writing stories that maximize AI effectiveness while ensuring quality through explicit acceptance criteria.

## Why Story Quality Matters More Now

In traditional development, an ambiguous user story is a communication problem between humans. Developers read the story, infer the intent, ask questions, and fill in the gaps with domain knowledge. The feedback loop is tight -- a developer who misunderstands the story discovers this quickly through conversation.

With AI-assisted development, the feedback loop has an additional step: the developer translates the story into a prompt for the AI tool. If the story is ambiguous, the prompt will be ambiguous, and the AI will generate code that confidently implements the wrong thing. The subtle incorrectness may not be caught until much later.

**The chain:** Story -> Developer understanding -> AI prompt -> Generated code -> Review -> Production

Every ambiguity in the story is amplified through this chain. Investing in story clarity pays compounding returns.

## Writing Stories for AI-Augmented Teams

### Enhanced Story Structure

Augment the standard user story format with AI-relevant details:

```
TITLE: [Concise feature description]

AS A [user role]
I WANT TO [action/capability]
SO THAT [business value]

CONTEXT:
- Related existing functionality: [references]
- Technical constraints: [architecture, performance, security requirements]
- Data model: [relevant entities and relationships]
- Integration points: [APIs, services, databases involved]

ACCEPTANCE CRITERIA:
1. [Specific, testable criterion with exact expected behavior]
2. [Include boundary conditions]
3. [Include error conditions]
4. [Include security requirements explicitly]
5. [Include performance expectations if relevant]

AI IMPLEMENTATION NOTES:
- Patterns to follow: [reference existing implementations]
- Patterns to avoid: [known problematic approaches]
- Security considerations: [specific to this feature]
```

### Example: Well-Written AI-Optimized Story

```
TITLE: Add order cancellation endpoint

AS A customer
I WANT TO cancel my order within 30 minutes of placement
SO THAT I can correct ordering mistakes without contacting support

CONTEXT:
- Related: OrderService.createOrder() in src/services/OrderService.ts
- Constraints: Must update inventory, trigger refund, send notification
- Data model: Order (id, status, items[], totalAmount, createdAt),
  OrderItem (id, orderId, productId, quantity, price)
- Integration: PaymentService.refund(), InventoryService.restoreStock(),
  NotificationService.sendEmail()

ACCEPTANCE CRITERIA:
1. POST /api/orders/{orderId}/cancel returns 200 with updated order
2. Only orders with status "confirmed" and createdAt within 30 minutes
   can be cancelled; returns 422 with error code ORDER_NOT_CANCELLABLE otherwise
3. Order status changes to "cancelled"
4. Each item's quantity is restored to inventory via InventoryService
5. Full refund is initiated via PaymentService; if refund fails,
   order status reverts to "confirmed" and response includes error detail
6. Cancellation confirmation email sent to customer
7. All database changes are in a single transaction; partial failure
   rolls back completely
8. Endpoint requires authenticated user who owns the order;
   returns 403 for other users
9. Rate limited to 5 cancellation attempts per user per hour
10. Response time under 2 seconds for 95th percentile

AI IMPLEMENTATION NOTES:
- Follow the pattern in OrderService.createOrder() for transaction handling
- Use the existing RefundService pattern (not PaymentService directly)
- Do NOT use string concatenation for the time comparison; use date library
- Security: validate orderId format, authenticate user, authorize ownership
```

### Contrast: Poorly-Written Story

```
TITLE: Cancel orders

AS A user
I WANT TO cancel orders
SO THAT I can cancel them

ACCEPTANCE CRITERIA:
1. User can cancel an order
2. Order is cancelled
3. Refund is processed
```

This story would produce AI-generated code that:
- May not validate the time window
- May not handle partial failure scenarios
- May not include authentication or authorization
- May not follow existing patterns
- May not handle edge cases (already cancelled, already shipped, etc.)

## Acceptance Criteria for AI-Generated Code

Standard acceptance criteria define **what** the feature should do. For AI-augmented teams, add criteria that address **how** the implementation should be structured.

### Quality-Focused Acceptance Criteria

Include these quality criteria explicitly when the feature is medium or high risk:

| Criteria Type | Example | Purpose |
|--------------|---------|---------|
| **Pattern adherence** | "Must follow the repository pattern used in UserRepository" | Ensures AI follows established architecture |
| **Error handling** | "All external service calls must have timeout and retry logic" | Prevents AI from generating optimistic-only code |
| **Security** | "All input parameters must be validated using Zod schemas" | Prevents AI from skipping input validation |
| **Testing** | "Unit tests must cover all error paths and boundary conditions" | Prevents AI from generating happy-path-only tests |
| **Performance** | "Database queries must use indexed columns; no N+1 queries" | Prevents AI from generating naive query patterns |
| **Logging** | "All state transitions must be logged with correlation ID" | Ensures observability in generated code |

### The "Not Criteria" Technique

Explicitly state what the implementation should NOT do. AI tools respond well to negative constraints:

```
NOT CRITERIA:
- Do NOT create a new database table; use the existing orders table
- Do NOT implement a custom retry mechanism; use the existing RetryService
- Do NOT hardcode the 30-minute window; use a configuration value
- Do NOT return detailed error messages to the client; log details server-side
```

## Story Decomposition for AI Effectiveness

AI tools work best on focused, well-scoped tasks. Decompose large stories into smaller ones that each map to a clear AI task:

### Decomposition Strategy

| Epic | Stories for AI-Augmented Team |
|------|-------------------------------|
| "Order Management System" | 1. Create Order data model and repository (AI-suitable: high) |
| | 2. Implement order creation endpoint (AI-suitable: high) |
| | 3. Implement order status validation rules (AI-suitable: medium) |
| | 4. Implement order cancellation with refund (AI-suitable: medium) |
| | 5. Implement payment integration error handling (AI-suitable: low) |
| | 6. Add order audit logging and compliance (AI-suitable: low) |

### Sizing Guidelines for AI-Augmented Stories

| Story Size | Guideline | AI Suitability Notes |
|-----------|-----------|---------------------|
| **Small (1-3 points)** | Single endpoint, single concern, clear pattern | Ideal for AI; high first-attempt quality |
| **Medium (5-8 points)** | Multiple related endpoints or complex single endpoint | Good for AI with structured decomposition |
| **Large (13+ points)** | Should be decomposed further | Too large for effective AI assistance; AI loses context |

:::tip
If a story cannot be described in a prompt that fits comfortably in a single screen, it is too large for effective AI assistance. Decompose it until each piece can be clearly described in 10-15 lines of prompt text.
:::

## Refinement Session Adjustments

When refining stories for an AI-augmented team, add these discussion points:

1. **AI suitability assessment.** What percentage of this story is AI-suitable? Tag the story.
2. **Pattern reference.** What existing code should the AI follow? Note specific file paths.
3. **Risk classification.** What is the risk level per [Velocity & Quality Trade-offs](/roles/product-manager/velocity-quality-tradeoffs)?
4. **Quality criteria completeness.** Are error handling, security, and testing criteria explicit?
5. **Negative constraints.** Are there "not criteria" that should be added?

Involve developers in refinement -- they understand which implementation details matter for effective AI prompting. Also involve the [QA Lead](/roles/qa-lead/) to ensure acceptance criteria are testable and comprehensive.

For estimation of AI-augmented stories, see [Estimation in an AI World](/roles/scrum-master/estimation-ai-world). For quality-focused review of AI-generated implementations, see [Code Review Responsibilities](/roles/developer/code-review-responsibilities).

---
title: "Code Provenance & Attribution"
sidebar_position: 2
description: "Tracking the origin and generation context of AI-assisted code."
---

# Code Provenance & Attribution

Code provenance establishes a complete, auditable record of the origin, generation context, and modification history of AI-generated code. In an environment where AI tools participate in code creation, organizations MUST be able to answer fundamental questions: Who generated this code? What tool was used? What prompt produced it? What human review and modifications occurred? This traceability is essential for regulatory compliance, incident investigation, intellectual property management, and organizational learning.

## Why Code Provenance Matters

Without provenance tracking, AI-generated code becomes an opaque artifact with unknown lineage. This creates risks across multiple dimensions:

- **Incident Response**: When a production defect is traced to AI-generated code, the investigation requires understanding the generation context to determine root cause and prevent recurrence (see [Incident Response](./incident-response.md))
- **Regulatory Compliance**: Frameworks such as SOC 2 and ISO 27001 require evidence of change management controls. Provenance metadata provides this evidence (see [Compliance & Regulatory Alignment](./compliance-regulatory.md))
- **Intellectual Property**: Provenance records are essential for demonstrating that code was generated through legitimate means and does not infringe on third-party IP (see [Intellectual Property Management](./intellectual-property.md))
- **Quality Improvement**: Analyzing provenance data enables organizations to identify which tools, prompts, and practices produce the highest quality outputs

:::info
Code provenance is not merely a documentation exercise. It is a control mechanism that supports governance, legal defense, and engineering improvement. All AI-generated code MUST have complete provenance metadata.
:::

## Attribution Standards

### Commit-Level Attribution

Every commit containing AI-generated code MUST include attribution metadata in the commit message. The following format is REQUIRED:

```
feat(user-registration): add registration endpoint

Implements POST /api/v2/users with input validation and
error handling per RFC 7807.

AI-Attribution:
  tool: claude-opus-4
  model-version: claude-opus-4-20250514
  prompt-ref: prompts/backend/code-gen/rest-controller.v2.1.0
  session-id: sess_abc123def456
  generation-date: 2026-02-15T14:30:00Z
  human-modifications: moderate
  reviewer: jane.smith

Ticket: PROJ-1234
```

### Attribution Field Definitions

| Field | Description | Required |
|---|---|---|
| `tool` | The AI tool used (e.g., claude-opus-4, github-copilot, cursor) | MUST |
| `model-version` | The specific model version or identifier | MUST |
| `prompt-ref` | Path or ID referencing the prompt template or session log | MUST |
| `session-id` | Unique identifier for the AI interaction session | SHOULD |
| `generation-date` | ISO 8601 timestamp of when the code was generated | MUST |
| `human-modifications` | Degree of human modification: `none`, `minor`, `moderate`, `substantial` | MUST |
| `reviewer` | Username of the primary human reviewer | MUST |

### Modification Classification

The `human-modifications` field MUST be classified as follows:

| Classification | Definition |
|---|---|
| **none** | AI output used as-is with no changes (formatting changes excluded) |
| **minor** | Cosmetic changes: variable renaming, comment adjustments, import reordering |
| **moderate** | Logic adjustments, added error handling, modified control flow, added validation |
| **substantial** | Significant rewriting where AI output served primarily as a starting point or scaffold |

:::warning
Code classified as `none` or `minor` human modifications receives the highest scrutiny during review, as it represents the most direct AI influence on the codebase. See [Human-in-the-Loop](../pillar-1-engineering-discipline/human-in-the-loop.md) for review requirements.
:::

## Generation Metadata Schema

Beyond commit-level attribution, organizations MUST maintain structured generation metadata for AI-assisted code. This metadata SHOULD be stored in a dedicated metadata file or repository-level database.

### Metadata Schema (JSON)

```json
{
      "$schema": "https://aaee.buildstudio.app/schemas/ai-provenance.schema.json",
  "provenance": {
    "id": "prov-20260215-143000-abc123",
    "generation": {
      "tool": "claude-opus-4",
      "model_version": "claude-opus-4-20250514",
      "provider": "anthropic",
      "generation_timestamp": "2026-02-15T14:30:00Z",
      "prompt_template_ref": "prompts/backend/code-gen/rest-controller.v2.1.0",
      "prompt_hash": "sha256:a1b2c3d4e5f6...",
      "session_id": "sess_abc123def456",
      "temperature": 0.0,
      "context_files": [
        "src/main/java/com/example/domain/UserRegistrationService.java",
        "src/main/java/com/example/api/dto/CreateUserRequest.java"
      ]
    },
    "output": {
      "files_generated": [
        "src/main/java/com/example/api/UserRegistrationController.java"
      ],
      "lines_generated": 87,
      "language": "java",
      "commit_sha": "a1b2c3d4e5f6789..."
    },
    "review": {
      "reviewer": "jane.smith",
      "review_date": "2026-02-15T16:45:00Z",
      "review_tier": 2,
      "human_modifications": "moderate",
      "modifications_description": "Added rate limiting annotation, improved error messages, added missing validation for email format",
      "checklist_completed": true,
      "approval_status": "approved"
    },
    "compliance": {
      "data_classification": "internal",
      "ip_review_required": false,
      "security_scan_passed": true,
      "sast_tool": "semgrep",
      "sast_findings": 0
    }
  }
}
```

### Metadata Storage Requirements

- Provenance metadata MUST be stored in a durable, tamper-evident store
- Metadata retention MUST follow the [Retention & Audit Evidence Policy](./retention-audit-policy.md) (minimum 3 years for provenance metadata)
- Metadata MUST be searchable by: tool, model version, author, reviewer, date range, file path, and project
- Access to provenance metadata MUST be controlled and auditable

## Audit Trail Requirements

### What Must Be Captured

The audit trail for AI-generated code MUST capture the complete lifecycle:

| Lifecycle Phase | Audit Data | Retention |
|---|---|---|
| **Generation** | Tool, model, prompt, context, timestamp, developer | 3 years minimum |
| **Self-Review** | Developer attestation that self-review checklist was completed | 3 years minimum |
| **Peer Review** | Reviewer identity, review comments, decision, timestamp | 3 years minimum |
| **Escalation** (if applicable) | Escalation reason, escalation target, resolution | 3 years minimum |
| **Merge** | Merge approver, merge timestamp, target branch | 3 years minimum |
| **Deployment** | Deployment timestamp, environment, deployer, deployment artifact hash | 3 years minimum |
| **Incident** (if applicable) | Incident ID, root cause linkage, corrective action | 5 years minimum |

### Audit Trail Integrity

- Audit records MUST be immutable once written -- append-only storage is REQUIRED
- Audit records MUST NOT be modifiable by the developer who generated the code
- Audit trail systems MUST maintain their own access logs
- Periodic audit trail integrity checks SHOULD be performed (RECOMMENDED: monthly)

## Commit Annotation Standards

### Git Trailers

In addition to the AI-Attribution block in commit messages, the following git trailers MUST be used:

```
AI-Tool: claude-opus-4
AI-Model-Version: claude-opus-4-20250514
AI-Prompt-Ref: prompts/backend/code-gen/rest-controller.v2.1.0
AI-Human-Modifications: moderate
AI-Reviewed-By: jane.smith
```

These trailers enable programmatic querying of AI-generated commits using `git log --grep` and support automated reporting.

### Pull Request Labels and Tags

- All pull requests containing AI-generated code MUST carry the `ai-assisted` label
- Pull requests where more than 50% of changed lines are AI-generated SHOULD additionally carry the `ai-primary` label
- CI/CD pipelines MUST detect these labels and apply the elevated verification requirements defined in [AI Output Verification](../pillar-1-engineering-discipline/ai-output-verification.md)

### File-Level Annotation (RECOMMENDED)

For projects that require granular tracking, a file-level annotation comment MAY be used at the top of AI-generated files:

```java
// AI-GENERATED: claude-opus-4 | 2026-02-15 | prompt-ref: rest-controller.v2.1.0
// Human-Modified: moderate | Reviewer: jane.smith
```

This annotation is RECOMMENDED for files that are predominantly AI-generated and provides immediate visibility when browsing the codebase.

## Reporting and Analytics

Organizations SHOULD build reporting capabilities on top of provenance data to enable:

- **AI adoption metrics**: Percentage of code that is AI-generated, by team and project
- **Quality correlation**: Defect rates correlated with AI tool, model version, and prompt template
- **Review efficiency**: Time-to-review for AI-generated vs. human-authored code
- **Tool effectiveness**: Which AI tools and prompts produce the highest first-pass approval rates
- **Risk trending**: Changes in the volume and risk profile of AI-generated code over time

These reports SHOULD be reviewed monthly by engineering leadership and used to inform prompt library updates, tool selection decisions, and training priorities. See [Engineering Quality Standards](../pillar-1-engineering-discipline/engineering-quality-standards.md) for the quality metrics that complement provenance analytics.

## Tooling Integration

Provenance capture SHOULD be automated wherever possible to reduce developer burden and ensure completeness:

- **IDE plugins** SHOULD automatically populate AI-Attribution commit trailers based on the AI tool session
- **CI/CD pipelines** SHOULD validate that provenance metadata is present and correctly formatted on AI-labeled PRs
- **Repository hooks** SHOULD reject commits tagged as AI-assisted that lack required attribution fields
- **Dashboard tools** SHOULD aggregate provenance data for reporting and trend analysis

:::tip
Start with commit-level attribution (the minimum requirement) and incrementally automate metadata capture. Perfect provenance tracking from day one is less important than consistent, enforced attribution that improves over time.
:::

---
title: "Incident Response for AI-Generated Defects"
sidebar_position: 6
description: "Incident response procedures specific to defects originating from AI-generated code."
---

# Incident Response for AI-Generated Defects

When AI-generated code causes production incidents, the response process MUST account for the unique characteristics of AI outputs. Traditional incident response identifies what went wrong and how to fix it. Incident response for AI-generated defects MUST additionally determine why the AI produced the defective output, why the validation pipeline did not catch it, and how to prevent the same class of defect from recurring through both prompt improvement and process strengthening. This section defines incident classification, root cause analysis procedures, corrective action requirements, and post-mortem templates specific to AI-originated defects.

## Incident Classification

### Severity Levels

AI-generated defects are classified using the same severity framework as all production incidents, with additional metadata to track AI-specific dimensions.

| Severity | Definition | Examples | Initial Response SLA | Resolution SLA |
|---|---|---|---|---|
| **SEV-1 (Critical)** | Complete service outage, data breach, data loss, or financial impact exceeding $100K | AI-generated auth bypass allowing unauthorized access; AI code causing data corruption; AI-generated payment logic processing incorrect amounts | 15 minutes to acknowledge; war room within 30 minutes | Mitigated within 4 hours; fully resolved within 24 hours |
| **SEV-2 (Major)** | Significant degradation of service, security vulnerability actively exploitable, or financial impact between $10K-$100K | AI-generated code causing memory leaks leading to service degradation; AI code exposing PII in logs; AI-generated API returning incorrect data for specific inputs | 30 minutes to acknowledge; incident lead assigned within 1 hour | Mitigated within 8 hours; fully resolved within 48 hours |
| **SEV-3 (Moderate)** | Partial service impact affecting a subset of users, non-critical security finding, or cosmetic data integrity issue | AI-generated code failing for edge case inputs; AI code with performance degradation under load; AI-generated UI rendering incorrectly on specific browsers | 2 hours to acknowledge | Resolved within 7 calendar days |
| **SEV-4 (Minor)** | Minimal user impact, cosmetic issues, or non-security defects with available workarounds | AI-generated code with incorrect error messages; AI code with minor logging gaps; AI-generated documentation inaccuracies | 1 business day to acknowledge | Resolved within 30 calendar days |

### AI-Specific Classification Dimensions

In addition to severity, every AI-related incident MUST be classified along the following dimensions:

| Dimension | Options | Purpose |
|---|---|---|
| **Defect Origin** | `ai-generated`, `ai-modified`, `ai-adjacent` (human code interacting with AI code) | Tracks whether the defect originated directly from AI output or from the interaction between AI and human code |
| **Failure Mode** | `hallucination`, `logic-error`, `security-vulnerability`, `performance`, `integration`, `data-handling`, `configuration` | Categorizes the type of AI failure for trend analysis |
| **Validation Gap** | `test-gap`, `review-gap`, `scan-gap`, `prompt-gap`, `process-gap` | Identifies which validation layer should have caught the defect |
| **AI Tool** | Tool name and model version | Enables vendor-specific trend analysis |

## Root Cause Analysis for AI Defects

### RCA Methodology

Root cause analysis for AI-generated defects MUST go deeper than traditional RCA. A standard RCA identifies the code defect and the process gap that allowed it. An AI-specific RCA MUST additionally investigate the **generation context** and the **validation pipeline**.

### Five-Layer RCA Framework

Every AI-related incident MUST be analyzed across all five layers:

**Layer 1: The Defect**
- What is the specific code defect?
- What is the observable impact?
- What is the exact code change that introduced the defect?

**Layer 2: The Generation Context**
- What AI tool and model version generated the code?
- What prompt or prompt template was used?
- Was the prompt properly constrained per [Prompt Engineering Rigor](../pillar-1-engineering-discipline/prompt-engineering-rigor.md) standards?
- Was adequate context provided to the AI tool?
- Did the AI hallucinate APIs, behaviors, or patterns?

**Layer 3: The Validation Pipeline**
- Did automated tests exist for the defective behavior? If not, why?
- Did SAST scanning detect the issue? If not, why?
- Did mutation testing identify a test gap? If not, was mutation testing applied?
- Were the coverage thresholds defined in [Engineering Quality Standards](../pillar-1-engineering-discipline/engineering-quality-standards.md) met?
- Were all verification requirements from [AI Output Verification](../pillar-1-engineering-discipline/ai-output-verification.md) executed?

**Layer 4: The Human Review**
- Was the code reviewed by a qualified reviewer per [Human-in-the-Loop](../pillar-1-engineering-discipline/human-in-the-loop.md) standards?
- Was the AI-specific review checklist completed?
- Was the change classified at the correct risk tier?
- Were there signs the reviewer missed, and why?

**Layer 5: The Process and Environment**
- Were AEEF standards followed? If not, what was the deviation?
- Were there organizational or time pressures that contributed to the gap?
- Are there systemic issues (training gaps, tooling limitations, process ambiguity) that enabled this incident?

:::warning
RCA MUST NOT stop at "the AI generated bad code." The AI generating imperfect code is expected and already accounted for in the framework. The RCA must determine why the defense-in-depth layers (testing, scanning, review) failed to catch the defect before production.
:::

## Corrective Actions

### Corrective Action Categories

Every AI-related incident MUST produce corrective actions in at least two of the following categories:

| Category | Examples | Owner |
|---|---|---|
| **Immediate Fix** | Patch the specific defect; revert the change; deploy hotfix | On-call engineer / incident lead |
| **Prompt Improvement** | Update the prompt template to include the missing constraint; add negative examples; update context requirements | Prompt library maintainer |
| **Test Improvement** | Add tests for the specific failure mode; add property-based tests; increase boundary testing; add mutation testing for the affected area | Owning team |
| **Scanning Rule Addition** | Add or update SAST rules to detect the vulnerability pattern; update secret detection patterns; add architectural fitness functions | Security / platform team |
| **Review Process Update** | Add a checklist item; update reviewer training; adjust risk classification criteria | Engineering leadership |
| **Training Update** | Add the incident as a case study in reviewer training; update AI security training materials | Training team |
| **Tool Configuration** | Update AI tool configuration, model selection, or access controls | Platform team |

### Corrective Action Tracking

- Every corrective action MUST have an assigned owner and a due date
- Corrective actions MUST be tracked in the organization's issue tracker with the `ai-incident-ca` label
- Corrective action completion MUST be verified by someone other than the assignee
- Open corrective actions MUST be reviewed weekly by the engineering manager until closed
- Corrective action effectiveness MUST be evaluated at the 30-day and 90-day marks

## Post-Mortem Template

Every SEV-1 and SEV-2 AI-related incident MUST produce a written post-mortem. SEV-3 incidents SHOULD produce a post-mortem. The following template MUST be used.

### AI Incident Post-Mortem Template

```markdown
# AI Incident Post-Mortem: [Incident ID]

## Summary
- **Date/Time Detected**: [ISO 8601 timestamp]
- **Date/Time Resolved**: [ISO 8601 timestamp]
- **Duration**: [total duration]
- **Severity**: [SEV-1/SEV-2/SEV-3/SEV-4]
- **Defect Origin**: [ai-generated/ai-modified/ai-adjacent]
- **Failure Mode**: [hallucination/logic-error/security-vulnerability/etc.]
- **Validation Gap**: [test-gap/review-gap/scan-gap/prompt-gap/process-gap]
- **Impact**: [User impact, financial impact, data impact]

## Timeline
| Time | Event |
|------|-------|
| [timestamp] | [event description] |
| ... | ... |

## AI Generation Context
- **AI Tool**: [tool name]
- **Model Version**: [model version]
- **Prompt Template Used**: [reference or "ad-hoc"]
- **Prompt Constraints Provided**: [list key constraints that were/were not included]
- **Context Provided**: [summary of context provided to the AI]
- **Human Modification Level**: [none/minor/moderate/substantial]
- **Provenance Record**: [link to provenance metadata]

## Five-Layer Root Cause Analysis

### Layer 1: The Defect
[Describe the specific code defect and its observable impact]

### Layer 2: The Generation Context
[Analyze why the AI produced this defective output]

### Layer 3: The Validation Pipeline
[Analyze which automated checks should have caught this and why they did not]

### Layer 4: The Human Review
[Analyze the review process and identify gaps]

### Layer 5: The Process and Environment
[Analyze systemic factors]

## Root Cause Statement
[One-paragraph summary of the root cause, written in factual, non-blaming language]

## Corrective Actions

| # | Action | Category | Owner | Due Date | Status |
|---|--------|----------|-------|----------|--------|
| 1 | [action] | [category] | [owner] | [date] | [status] |
| 2 | [action] | [category] | [owner] | [date] | [status] |
| ... | ... | ... | ... | ... | ... |

## Lessons Learned
- [Key takeaway 1]
- [Key takeaway 2]
- [Key takeaway 3]

## Metrics Impact
- **MTTR (Mean Time to Resolve)**: [duration]
- **Users Affected**: [count or percentage]
- **Financial Impact**: [estimated amount]
- **SLA Compliance**: [met/missed for which SLAs]
```

## Incident Response Workflow

### Standard Response Flow for AI-Related Incidents

```
Incident Detected
    |
    v
Is the affected code AI-generated? (Check provenance metadata)
    |
    +---> No: Follow standard incident response process
    |
    +---> Yes: Continue AI-specific IR process
            |
            v
        Classify severity (SEV-1 through SEV-4)
        Classify AI dimensions (origin, failure mode, validation gap)
            |
            v
        Immediate mitigation (revert, hotfix, feature flag disable)
            |
            v
        Notify stakeholders per severity SLA
        Include AI-specific classification in notification
            |
            v
        Conduct Five-Layer RCA
            |
            v
        Produce post-mortem (mandatory for SEV-1/SEV-2)
            |
            v
        Define and assign corrective actions (minimum 2 categories)
            |
            v
        Track corrective actions to completion
            |
            v
        Verify effectiveness at 30-day and 90-day marks
            |
            v
        Update organizational knowledge base and training materials
```

## Trend Analysis and Organizational Learning

### Monthly Incident Analysis

Engineering leadership MUST conduct monthly analysis of AI-related incidents to identify trends:

- **By failure mode**: Which types of AI failures are most common?
- **By AI tool**: Are certain tools or model versions producing more defects?
- **By validation gap**: Which validation layers are most frequently failing to catch defects?
- **By team**: Are certain teams experiencing more AI-related incidents, suggesting training needs?
- **By prompt template**: Are specific prompt templates associated with higher defect rates?

### Quarterly Process Review

Every quarter, the incident trend analysis MUST feed into a process review that evaluates:

- Whether [Engineering Quality Standards](../pillar-1-engineering-discipline/engineering-quality-standards.md) thresholds need adjustment
- Whether [AI Output Verification](../pillar-1-engineering-discipline/ai-output-verification.md) scanning rules need updates
- Whether [Human-in-the-Loop](../pillar-1-engineering-discipline/human-in-the-loop.md) reviewer training and checklists need revision
- Whether [Prompt Engineering Rigor](../pillar-1-engineering-discipline/prompt-engineering-rigor.md) templates need improvement
- Whether AI tool configurations or approvals need to change

:::tip
The incident database is the organization's most valuable feedback mechanism for improving AI-assisted development practices. Treat every incident as a learning opportunity, not a failure. The goal is continuous improvement of the defense-in-depth system, not zero incidents.
:::

## Integration with Compliance

AI-related incident records are compliance artifacts. They demonstrate that the organization identifies, responds to, and learns from defects in AI-generated code. Incident records MUST be maintained and available for audit per the retention requirements in [Compliance & Regulatory Alignment](./compliance-regulatory.md) and [Code Provenance & Attribution](./code-provenance.md).

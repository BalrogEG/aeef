---
title: "PRD-STD-011: Model & Data Governance"
sidebar_position: 12
description: "Governance requirements for datasets, model lineage, rights, evaluation integrity, and reproducibility."
---

# PRD-STD-011: Model & Data Governance

**Standard ID:** PRD-STD-011  
**Version:** 1.0  
**Status:** Active  
**Compliance Level:** Level 2 (Managed)  
**Effective Date:** 2026-02-18  
**Last Reviewed:** 2026-02-18

## 1. Purpose

This standard defines mandatory governance controls for data and model lifecycle integrity in AI-powered products. It ensures organizations can verify data rights, dataset quality, model lineage, evaluation integrity, and reproducibility for production AI behavior.

Without formal model/data governance, AI quality and risk controls become non-auditable and non-repeatable, creating legal, operational, and trust exposure.

## 2. Scope

This standard applies to:

- All datasets used for training, tuning, retrieval, evaluation, and safety testing of production AI features
- All model versions, prompt/runtime configurations, and guardrail policies used in production AI behavior
- Internal and third-party model providers when outputs influence product behavior

## 3. Definitions

| Term | Definition |
|---|---|
| **Dataset Lineage** | End-to-end trace of source, transformations, versions, and usage for a dataset |
| **Data Card** | Structured documentation for a dataset, including source, rights, quality, and limitations |
| **Model Card** | Structured documentation for a model version including intended use, limitations, and evaluation performance |
| **Evaluation Leakage** | Contamination between train/tuning data and evaluation sets that invalidates test results |
| **Reproducibility Pack** | Versioned artifacts needed to reproduce model behavior and release decisions |

## 4. Requirements

### 4.1 Data Inventory and Rights Controls

:::danger MANDATORY
**REQ-011-01:** Organizations MUST maintain a dataset inventory for production AI features with source, owner, legal basis/rights status, classification, and retention policy.

**REQ-011-02:** Datasets MUST NOT be used for production AI behavior unless rights, licensing, and usage restrictions are documented and approved by designated governance owners.

**REQ-011-03:** Restricted or regulated data usage MUST comply with [Pillar 2 data classification controls](/pillars/pillar-2-governance-risk/) and applicable legal obligations.
:::

### 4.2 Dataset Quality and Freshness

:::danger MANDATORY
**REQ-011-04:** Production-bound datasets MUST pass quality checks for completeness, duplication, labeling validity (where applicable), and critical segment coverage.

**REQ-011-05:** Teams MUST define dataset freshness SLAs by risk tier and monitor SLA compliance.

**REQ-011-06:** Data quality/freshness breaches affecting Tier 2 or Tier 3 features MUST trigger release blocking or corrective mitigation before scale-up.
:::

### 4.3 Evaluation Integrity

:::danger MANDATORY
**REQ-011-07:** Evaluation datasets MUST be versioned and isolated from training/tuning data to prevent leakage.

**REQ-011-08:** Release decisions MUST include segment-level evaluation results for critical cohorts and known failure modes.

**REQ-011-09:** Any material change to model, prompt, retrieval strategy, or safety policy MUST trigger re-evaluation against current benchmark sets before production expansion.
:::

### 4.4 Model Documentation and Lineage

:::danger MANDATORY
**REQ-011-10:** Each production model/prompt/runtime release MUST include:
- model/prompt/runtime version identifiers
- data references and evaluation set versions
- decision record and approvers
- limitations and prohibited uses

**REQ-011-11:** Teams MUST maintain model cards and data cards for Tier 2 and Tier 3 AI features.

**REQ-011-12:** Release artifacts MUST be stored in a tamper-evident system and retained per audit evidence policy.
:::

### 4.5 Reproducibility and Change Control

:::danger MANDATORY
**REQ-011-13:** Production AI releases MUST provide a reproducibility pack sufficient to recreate release-evaluation outcomes.

**REQ-011-14:** Model/data changes MUST follow documented change control with rollback references and ownership.

**REQ-011-15:** Third-party model/provider updates that materially alter behavior MUST be treated as production changes and requalified through release gates.
:::

## 5. Implementation Guidance

### Minimum Model/Data Governance Artifacts

1. Dataset inventory with rights and retention metadata
2. Data card template and completed cards for in-scope datasets
3. Model card template and completed cards for production model versions
4. Evaluation registry (versioned datasets, metrics, and decisions)
5. Reproducibility pack index (code/config/data references)
6. Governance approval workflow for data and model changes

### Example Data Card Fields

```yaml
dataset_id: recsys-interactions-v2026-02-10
owner: recommendations-platform
source: first-party interaction logs
rights_status: approved
classification: internal
retention: 365d
quality_checks:
  completeness: pass
  duplicate_rate: 0.8%
  label_validation: pass
freshness_sla: 7d
limitations:
  - under-representation in low-activity cohorts
```

### Minimum Operational Metrics

Track at least:

- dataset freshness SLA compliance rate
- evaluation leakage incidents
- model/data change failure rate
- coverage parity across critical segments
- reproducibility success rate for sampled releases

## 6. Exceptions & Waiver Process

Waivers are limited to temporary procedural exceptions and MUST include compensating controls and expiration (maximum 30 days).

No waivers are permitted for:

- undocumented data rights for production datasets
- missing evaluation isolation controls
- missing lineage for production model versions
- untracked third-party model changes affecting production behavior

## 7. Related Standards

- [PRD-STD-010: AI Product Safety & Trust Controls](/production/standards/PRD-STD-010-ai-product-safety-trust/)
- [PRD-STD-007: Performance & Quality Gates](/production/standards/PRD-STD-007-quality-gates/)
- [Code Provenance & Attribution](/pillars/pillar-2-governance-risk/code-provenance/)
- [Retention & Audit Evidence Policy](/pillars/pillar-2-governance-risk/retention-audit-policy/)
- [AI Product Lifecycle](/transformation/ai-product-lifecycle/)

## 8. Revision History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-02-18 | AEEF Standards Committee | Initial release |

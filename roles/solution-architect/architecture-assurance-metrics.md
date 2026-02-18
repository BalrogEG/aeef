---
title: "Architecture Assurance Metrics"
sidebar_position: 5
description: "Metrics for validating architecture conformance in role-agent workflows."
---

# Architecture Assurance Metrics

Architecture assurance metrics convert architecture intent into measurable controls. Without these metrics, multi-agent delivery drifts quickly.

## Core Metrics

| Metric | Target | Warning Threshold | Owner |
|---|---|---|---|
| Agent handoff completeness | >= 98% | < 95% | Solution Architect |
| Architecture conformance pass rate | >= 95% | < 90% | Solution Architect + Tech Leads |
| Governance gate first-pass rate | >= 85% | < 75% | Governance Lead |
| Unauthorized action attempts | 0 | > 0 | Platform + Security |
| Traceability coverage | 100% of AI-assisted changes | < 98% | Compliance |

## Diagnostic Metrics

- Average rework cycles per agent handoff
- Architecture drift findings per sprint
- Ratio of high-risk work with complete evidence packages
- Exception count and age by team and service

## Weekly Review Template

1. Review failed architecture conformance checks.
2. Classify each failure: contract gap, training gap, tooling gap, or policy gap.
3. Assign corrective actions with owner and due date.
4. Confirm whether any issue requires standards update.

## Quarterly Architecture Assurance Review

Quarterly reviews SHOULD include:

- trend analysis of conformance and rejection rates
- top recurring failure patterns by role
- policy changes required for emerging agent capabilities
- updated architecture context packs for critical systems

Tie this cadence to [Post-Implementation Review](/transformation/operating-model/post-implementation-review/).

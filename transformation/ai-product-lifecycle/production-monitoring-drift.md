---
title: "Production Monitoring & Drift Management"
sidebar_position: 3
description: "Operational telemetry, alerting, and drift response for AI product features."
---

# Production Monitoring & Drift Management

AI feature quality can degrade after release due to data drift, behavior drift, or changing user patterns. Monitoring MUST detect this early.

## Telemetry Requirements

Minimum production telemetry:

- Request volume and success/error rates
- Latency percentiles and timeout rates
- Quality proxy metrics (acceptance, correction, escalation)
- Safety incidents and policy violations
- Segment-level performance for critical cohorts

## Drift Types

| Drift Type | Signal | Response |
|---|---|---|
| Data drift | Input distribution changes materially | Re-evaluate model on fresh sample |
| Concept drift | Target behavior or business rules changed | Update rubric/model/prompt and revalidate |
| Behavioral drift | Output style/quality degrades without infra failure | Trigger incident triage and rollback decision |

## Alert Policy

- Define warning and critical thresholds per metric.
- Critical alerts MUST route to on-call owner within 5 minutes.
- Repeated warnings over 7 days SHOULD trigger formal review.

## Drift Response Runbook

1. Detect and classify drift severity.
2. Evaluate blast radius (users, revenue, compliance exposure).
3. Apply mitigation: rollback, feature-flag reduction, or safe-mode fallback.
4. Re-evaluate candidate fix against current data.
5. Publish incident note and corrective action.

## Monitoring Ownership

| Responsibility | Owner |
|---|---|
| Metric definition and SLOs | Product + Engineering |
| Dashboards and alerts | Platform/Observability |
| Drift triage | AI feature on-call |
| Governance reporting | CoE + Security |


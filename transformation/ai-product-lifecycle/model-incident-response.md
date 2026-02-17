---
title: "Model Incident Response & Recovery"
sidebar_position: 4
description: "Incident workflow for harmful or high-impact AI behavior in production."
---

# Model Incident Response & Recovery

AI incidents are production incidents where model behavior causes or materially contributes to harm, policy breach, business loss, or unacceptable user impact.

## Severity Model

| Severity | Example | Target Response |
|---|---|---|
| SEV-1 | High-impact harmful output at scale, regulatory risk | Immediate containment |
| SEV-2 | Significant user-facing degradation or repeated unsafe outputs | Contain within same business day |
| SEV-3 | Localized quality failure with bounded impact | Fix in normal incident cycle |

## Immediate Response

1. Stop or reduce blast radius (rollback, disable endpoint, reduce audience).
2. Preserve evidence (request IDs, traces, model version, prompt/runtime config).
3. Notify required stakeholders (engineering, product, security, legal if needed).
4. Publish initial customer/internal status update.

## Root Cause Dimensions

Classify cause across these dimensions:

- Data quality or distribution shift
- Prompt/policy regression
- Model version regression
- Guardrail failure
- Evaluation gap (issue should have been caught pre-release)

## Corrective Action Requirements

Every SEV-1/SEV-2 incident MUST produce:

- Timeline with decision points
- Root cause statement
- Verified corrective action
- Preventive control update (evaluation, monitoring, guardrail, or process)

## Recovery Gate

Before restoring full traffic:

- Fix validated on representative incident scenarios
- Monitoring thresholds tightened for 7 days
- Product + engineering + governance sign-off recorded


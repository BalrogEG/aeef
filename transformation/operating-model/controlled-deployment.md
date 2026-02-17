---
title: "Controlled Deployment"
sidebar_position: 6
description: "Controlled deployment strategies for AI-assisted development outputs."
---

# Controlled Deployment

The Controlled Deployment stage is the fifth stage of the [Operating Model Lifecycle](/transformation/operating-model/). It defines deployment strategies for AI-assisted code entering production, including canary releases, feature flags, monitoring requirements, and rollback procedures. AI-assisted code that has passed the [Governance Gate](/transformation/operating-model/governance-gate/) is approved for production — but approval does not mean "deploy everywhere immediately." Controlled deployment ensures that even code that passes all governance checks is introduced to production incrementally, with monitoring that can detect issues the governance process did not catch, and rollback procedures that can undo the deployment quickly if problems emerge.

## Canary Releases

### Canary Strategy for AI-Assisted Code

Canary releases expose new code to a small subset of production traffic before full rollout. For AI-assisted code, canary deployments are RECOMMENDED for all Tier 2+ deployments and REQUIRED for all Tier 3 and Tier 4 deployments.

### Canary Configuration

| Parameter | Tier 1-2 | Tier 3 | Tier 4 |
|---|---|---|---|
| Initial canary percentage | 10-25% (RECOMMENDED) | 5-10% (REQUIRED) | 1-5% (REQUIRED) |
| Canary observation period | 30 minutes minimum | 2 hours minimum | 24 hours minimum |
| Success criteria evaluation | Automated | Automated + manual review | Automated + manual review + Security sign-off |
| Rollout increment | 25% per step | 10-20% per step | 10% per step |
| Full rollout timeline | 1-4 hours | 4-24 hours | 24-72 hours |

### Canary Success Criteria

The following metrics MUST be monitored during the canary period. If any metric breaches its threshold, the canary MUST be automatically rolled back.

| Metric | Threshold for Rollback | Monitoring Source |
|---|---|---|
| Error rate | > 1.5x baseline error rate | APM / error tracking |
| Latency (p95) | > 2x baseline p95 latency | APM |
| Latency (p99) | > 3x baseline p99 latency | APM |
| CPU/Memory utilization | > 80% (or > 1.5x baseline) | Infrastructure monitoring |
| Business metric anomaly | > 10% deviation from expected | Business analytics |
| Exception rate | Any new exception type not seen in baseline | Error tracking |

### Progressive Rollout Process

```
Canary (5-25%) ──[observe]──> Stage 2 (25-50%) ──[observe]──> Stage 3 (50-75%) ──[observe]──> Full (100%)
     │                              │                               │                           │
     └─ Rollback if               └─ Rollback if                 └─ Rollback if              └─ Monitor
        thresholds breached          thresholds breached             thresholds breached         post-deploy
```

## Feature Flags

Feature flags provide an additional layer of control by allowing AI-assisted features to be toggled on or off without redeployment.

### Feature Flag Requirements

| Requirement | Description |
|---|---|
| **Flag naming convention** | `ai-[feature-name]-[ticket-id]` (e.g., `ai-payment-refund-PROJ-1234`) |
| **Default state** | All AI-assisted feature flags MUST default to OFF in production |
| **Gradual rollout support** | Feature flag system MUST support percentage-based rollout |
| **Kill switch** | Every feature flag MUST support immediate deactivation (< 1 minute propagation) |
| **Audit trail** | All flag state changes MUST be logged with who, when, and why |
| **Cleanup** | Feature flags MUST be removed within 30 days of full rollout; stale flags are technical debt |

### Feature Flag Decision Matrix

| Scenario | Feature Flag Required | Rationale |
|---|---|---|
| New user-facing feature | REQUIRED | Enables rapid disable if user-facing issues emerge |
| Backend logic change (Tier 1-2) | RECOMMENDED | Provides safety valve for non-visible changes |
| Backend logic change (Tier 3-4) | REQUIRED | Higher risk demands fine-grained control |
| Database schema migration | NOT APPLICABLE | Use database migration tooling instead |
| Configuration change | NOT APPLICABLE | Use configuration management instead |
| Bug fix with narrow scope | OPTIONAL | May not warrant feature flag overhead |

## Monitoring

### Monitoring Requirements

All deployments of AI-assisted code MUST have monitoring that covers:

#### Application-Level Monitoring

| Monitor | Requirement | Alert Threshold |
|---|---|---|
| Error rate | REQUIRED | > 1.5x baseline for > 5 minutes |
| Response time (p50, p95, p99) | REQUIRED | p95 > 2x baseline for > 5 minutes |
| Throughput | REQUIRED | < 80% of baseline for > 10 minutes |
| Business metrics | REQUIRED for customer-facing features | > 10% deviation for > 15 minutes |
| Custom health checks | RECOMMENDED | Any health check failure |

#### Infrastructure-Level Monitoring

| Monitor | Requirement | Alert Threshold |
|---|---|---|
| CPU utilization | REQUIRED | > 80% sustained for > 10 minutes |
| Memory utilization | REQUIRED | > 85% sustained for > 10 minutes |
| Disk I/O | RECOMMENDED | > 90% sustained for > 5 minutes |
| Network errors | RECOMMENDED | Any increase above baseline |

#### Security-Specific Monitoring

| Monitor | Requirement | Alert Threshold |
|---|---|---|
| Authentication failures | REQUIRED for auth-related changes | > 2x baseline |
| Authorization denials | REQUIRED for authz-related changes | > 2x baseline |
| Unusual data access patterns | RECOMMENDED for data-related changes | Anomaly detection trigger |
| WAF/IDS alerts | REQUIRED for externally-facing changes | Any new alert pattern |

### Monitoring Duration

| Risk Tier | Enhanced Monitoring Duration | Rationale |
|---|---|---|
| Tier 1 | 24 hours post-deployment | Standard observation period |
| Tier 2 | 48 hours post-deployment | Additional observation for moderate risk |
| Tier 3 | 7 days post-deployment | Extended observation for elevated risk |
| Tier 4 | 14 days post-deployment | Maximum observation for highest risk |

After the enhanced monitoring period, the deployment transitions to standard operational monitoring.

## Rollback Procedures

### Rollback Decision Authority

| Severity | Who Can Authorize Rollback | Response Time |
|---|---|---|
| Automated threshold breach | Automated (no human needed) | Immediate |
| Engineer-identified issue | On-call engineer or Tech Lead | < 15 minutes to decision |
| Security concern | Security on-call or CISO | < 30 minutes to decision |
| Business impact | Engineering Director + Product Owner | < 1 hour to decision |

### Rollback Execution

1. **Automated rollback** — If canary success criteria are breached, the deployment system MUST automatically revert to the previous version. No human intervention should be required for automated rollback.
2. **Manual rollback** — If an issue is detected after full rollout, the on-call engineer executes the rollback procedure:
   - Disable the feature flag (if applicable) — immediate effect
   - Revert to the previous deployment version — typically < 5 minutes
   - Verify the rollback resolved the issue — confirm metrics return to baseline
   - Notify the development team and Governance Lead
3. **Data rollback** — If the deployment included data migrations that need reversal, the database migration rollback procedure MUST be followed. Data rollbacks are significantly more complex and MUST be planned during [Human Hardening](/transformation/operating-model/human-hardening/).

### Post-Rollback Actions

After any rollback of AI-assisted code:

1. **Incident documentation** — Document the issue that triggered the rollback, the impact, and the timeline
2. **Root cause analysis** — Conduct a root cause analysis to determine whether the issue was AI-related, hardening-related, or deployment-related
3. **Governance review** — The Governance Lead MUST review the incident to determine if governance processes need strengthening
4. **Re-deployment plan** — Before re-deploying, a remediation plan MUST be approved that addresses the root cause

## Deployment Checklist

Before initiating any deployment of AI-assisted code, the deploying engineer MUST verify:

### Pre-Deployment

- [ ] Governance Gate approval obtained and current (not expired)
- [ ] Deployment plan reviewed and approved
- [ ] Feature flags configured and defaulted to OFF
- [ ] Monitoring and alerting configured for new code paths
- [ ] Rollback procedure documented and tested
- [ ] On-call engineer aware of the deployment
- [ ] Deployment window is within approved change windows (not during freeze periods)
- [ ] Database migrations (if any) have been tested and have rollback scripts

### During Deployment

- [ ] Canary deployed to target percentage
- [ ] Canary success criteria monitoring active
- [ ] No alert thresholds breached during observation period
- [ ] Progressive rollout proceeding per plan
- [ ] Communication channel open for real-time issues

### Post-Deployment

- [ ] Full rollout complete
- [ ] All monitoring confirms normal operation
- [ ] Enhanced monitoring period initiated (duration per risk tier)
- [ ] Feature flags enabled for target audience
- [ ] Deployment recorded in the deployment log with AI attribution
- [ ] [Post-Implementation Review](/transformation/operating-model/post-implementation-review/) scheduled (for standard and large initiatives)

Controlled deployment is the final technical safeguard before AI-assisted code serves production traffic. The canary strategies, feature flags, monitoring, and rollback procedures defined here ensure that the organization can confidently deploy AI-assisted code — knowing that if something unexpected occurs, the impact is limited and the recovery is rapid.

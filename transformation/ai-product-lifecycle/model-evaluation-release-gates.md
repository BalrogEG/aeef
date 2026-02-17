---
title: "Model Evaluation & Release Gates"
sidebar_position: 2
description: "Pre-release quality, risk, and go/no-go criteria for AI-powered features."
---

# Model Evaluation & Release Gates

Every AI-powered product feature MUST pass explicit release gates before production rollout.

## Evaluation Pack Requirements

Each release candidate MUST include:

- Intended use, non-goals, and risk tier
- Evaluation dataset definition and sampling method
- Offline metrics by critical segment
- Known failure modes and mitigations
- Human fallback or override plan

## Required Gate Checks

| Gate | Minimum Requirement | Blocker |
|---|---|---|
| Quality gate | Meets defined quality thresholds for target use cases | Yes |
| Safety gate | No unresolved severe harmful-output scenarios | Yes |
| Reliability gate | Latency and error budgets within SLO target | Yes |
| Governance gate | Documentation, approvals, and evidence complete | Yes |
| Rollback readiness | Version rollback plan tested | Yes |

## Risk-Tiered Standards

| Tier | Example | Required Rigor |
|---|---|---|
| Tier 1 (Low) | Non-critical summarization | Standard offline eval + canary |
| Tier 2 (Medium) | User-facing recommendations | Segment-level eval + shadow testing |
| Tier 3 (High) | Decision support in regulated workflows | Extended eval set, formal sign-off, human fallback mandatory |

## Release Decision Template

Use the following decision format:

```text
AI Release Decision: APPROVE | CONDITIONAL | REJECT
Feature: <name>
Version: <model/prompt/runtime version>
Risk Tier: <1|2|3>
Quality Result: <pass/fail + metrics>
Safety Result: <pass/fail + critical issues>
Reliability Result: <pass/fail + SLO evidence>
Approvers: <product owner, tech lead, security/governance>
Date: <ISO 8601>
```

## Deployment Pattern

- Start with canary or limited audience rollout
- Compare against control baseline where possible
- Auto-halt rollout on threshold breach


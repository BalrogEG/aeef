---
title: "Observability for Quality Gates"
sidebar_position: 4
description: "Metrics and alerting for AI-assisted delivery gate health."
---

# Observability for Quality Gates

## Core Metrics

- Gate pass/fail rate by repository
- Time-to-feedback for CI pipelines
- Security finding volume by severity
- Coverage drift by service
- Reopen rate for post-merge defects

## Alerting Baselines

- Critical vulnerability in main branch: immediate page
- Gate fail rate >20% for 3 days: team alert
- Coverage drop >5% week-over-week: manager alert

## Weekly Review Cadence

1. Review top gate failures and recurring causes.
2. Identify automation improvements.
3. Escalate policy violations to security and engineering management.

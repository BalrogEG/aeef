---
title: "Platform / DevOps Engineer Guide"
sidebar_position: 1
description: "Guide for platform engineers operationalizing AI-assisted delivery controls."
---

# Platform / DevOps Engineer Guide

Platform teams convert standards into enforceable delivery workflows. In AI-assisted development, that means reliable CI guardrails, approved tooling, and measurable release quality.

## What This Guide Covers

| Section | Outcome |
|---|---|
| [Pipeline Guardrails](/roles/platform-engineer/pipeline-guardrails) | CI stages that enforce quality and security standards |
| [Tooling Provisioning](/roles/platform-engineer/tooling-provisioning) | Controlled rollout of approved AI tools and credentials |
| [Observability for Quality Gates](/roles/platform-engineer/observability-quality-gates) | Dashboards and alerts for gate failures and drift |

## Primary Standards

- [PRD-STD-007: Performance & Quality Gates](/production/standards/PRD-STD-007-quality-gates/)
- [PRD-STD-004: Security Scanning](/production/standards/PRD-STD-004-security-scanning/)
- [PRD-STD-008: Dependency & License Compliance](/production/standards/PRD-STD-008-dependency-compliance/)

## First 30 Days

1. Enable mandatory CI gates for build, tests, SAST, and SCA.
2. Standardize AI tooling setup for developer environments.
3. Publish weekly gate-failure trends to engineering leadership.

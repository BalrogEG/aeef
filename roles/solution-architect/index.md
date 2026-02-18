---
title: "Solution Architect Guide"
sidebar_position: 1
description: "Guide for solution architects designing role-based AI agent systems within enterprise architecture."
---

# Solution Architect Guide

As a solution architect, you are accountable for ensuring AI-assisted delivery scales without architectural drift. In this framework, your role is to define architecture guardrails, design role-agent boundaries, and enforce governance so every agent-driven contribution remains traceable, secure, and aligned to target-state architecture.

## What This Guide Covers

| Section | Outcome |
|---|---|
| [Reference Architecture](/roles/solution-architect/reference-architecture) | A practical blueprint for embedding role-based AI agents into enterprise systems |
| [Agent Contracts and Handoffs](/roles/solution-architect/agent-contracts-handoffs) | Standard contracts that keep each role-specific agent inside architectural boundaries |
| [Governance Enforcement](/roles/solution-architect/governance-enforcement) | Governance gates and decision rights that prevent uncontrolled agent behavior |
| [Architecture Assurance Metrics](/roles/solution-architect/architecture-assurance-metrics) | Operational metrics that reveal architecture drift, control failures, and remediation needs |

## Primary Standards

- [PRD-STD-005: Documentation Requirements](/production/standards/PRD-STD-005-documentation/)
- [PRD-STD-007: Performance & Quality Gates](/production/standards/PRD-STD-007-quality-gates/)
- [PRD-STD-009: Autonomous & Multi-Agent Governance](/production/standards/PRD-STD-009-autonomous-agent-governance/)

## First 30 Days

1. Define a role-agent catalog covering all roles in [Role Guides Overview](/roles/).
2. Publish architecture context packs and approved integration patterns for all delivery teams.
3. Implement governance checks for agent identity, execution scope, and handoff evidence in CI/CD.
4. Establish monthly architecture conformance reviews with CTO, Platform, Security, and Compliance.

## Collaboration Map

| Role | Shared Responsibility |
|---|---|
| [CTO](/roles/cto/) | Enterprise architecture direction and policy authority |
| [Platform Engineer](/roles/platform-engineer/) | CI/CD enforcement of architecture and governance controls |
| [Security Engineer](/roles/security-engineer/) | Agent runtime hardening, security review, and risk acceptance |
| [Compliance Officer](/roles/compliance-officer/) | Audit evidence design and regulatory defensibility |
| [Development Manager](/roles/development-manager/) | Team-level adoption and review capacity alignment |

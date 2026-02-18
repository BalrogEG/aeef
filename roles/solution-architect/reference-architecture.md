---
title: "Reference Architecture"
sidebar_position: 2
description: "Reference architecture for role-specific AI agents in enterprise delivery workflows."
---

# Reference Architecture

A role-specific AI agent model must be architecture-first. Agents are execution components, not policy owners. Policies, boundaries, and decision rights remain human-owned.

## Required Architecture Layers

| Layer | Purpose | Owner |
|---|---|---|
| Intent Layer | Captures business intent, scope, and risk tier | Product Manager + Solution Architect |
| Orchestration Layer | Routes work between role-specific agents and human checkpoints | Platform Engineer |
| Execution Layer | Runs role-specific agents within constrained scopes | Role owners |
| Governance Layer | Enforces policy, approvals, and risk controls | Governance Lead + Security |
| Evidence Layer | Stores traceability artifacts, approvals, and audit records | Compliance Officer |

## Role-Agent Topology

Each role SHOULD have one primary agent profile with a narrow charter:

- `developer-agent`: implementation and unit-test drafting
- `qa-agent`: risk-based test matrix and regression proposals
- `security-agent`: secure-code findings and remediation checks
- `platform-agent`: pipeline and gate policy updates
- `product-agent`: story hardening and acceptance criteria quality
- `scrum-agent`: sprint risk and capacity recalibration
- `dev-manager-agent`: quality and enablement oversight synthesis
- `cto-agent`: architecture and tooling strategy options
- `executive-agent`: board-level risk and ROI synthesis
- `compliance-agent`: audit evidence completeness checks
- `solution-architect-agent`: cross-agent architecture conformance and handoff integrity

## Non-Negotiable Constraints

1. Agents MUST NOT merge code directly into protected branches.
2. Agents MUST execute with least privilege and scoped credentials.
3. Agents MUST attach prompt and output references to each handoff.
4. Agents MUST route through [Governance Gate](/transformation/operating-model/governance-gate/) before production.

## Architecture Review Cadence

| Review | Frequency | Participants |
|---|---|---|
| Agent contract review | Bi-weekly | Solution Architect, Platform, Security |
| Pattern drift review | Monthly | Solution Architect, CTO, Tech Leads |
| Governance evidence review | Monthly | Compliance, Security, Platform |
| Executive risk review | Quarterly | Executive, CTO, Compliance |

For governance controls, use [PRD-STD-009](/production/standards/PRD-STD-009-autonomous-agent-governance/).

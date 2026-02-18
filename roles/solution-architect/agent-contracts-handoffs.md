---
title: "Agent Contracts and Handoffs"
sidebar_position: 3
description: "How to define role-agent contracts and enforce controlled handoffs."
---

# Agent Contracts and Handoffs

A role-specific agent model fails when contracts are implicit. Every agent requires an explicit contract defining what it can read, write, decide, and escalate.

## Contract Template

Each agent contract MUST define:

- `agent-id`: stable unique identifier
- `role-owner`: accountable human role
- `allowed-inputs`: approved artifact types and sources
- `allowed-outputs`: permitted output formats
- `forbidden-actions`: explicit prohibited actions
- `required-checks`: mandatory quality/security/compliance checks
- `handoff-targets`: approved downstream agents or human reviewers
- `escalation-path`: named approvers for exceptions

## Example Handoff Chain

1. `product-agent` refines story and risk tier.
2. `solution-architect-agent` validates architecture fit and constraints.
3. `developer-agent` produces implementation proposal.
4. `qa-agent` and `security-agent` run parallel reviews.
5. `platform-agent` validates CI/CD gate compatibility.
6. Human reviewers approve per [PRD-STD-002](/production/standards/PRD-STD-002-code-review/).

## Handoff Quality Requirements

| Requirement | Description |
|---|---|
| Traceable source | Every output links to source artifacts and prompt references |
| Structured output | Outputs follow a schema or template to reduce ambiguity |
| Confidence annotation | Agent states certainty and known assumptions |
| Risk annotation | Agent flags potential architecture/security/compliance impact |
| Explicit next action | Handoff names the next owner and expected decision |

## Failure Modes to Prevent

- Agent output with missing source references
- Cross-role decisions made without authorized human approver
- Architecture decisions made by implementation agents
- Orchestration loops with no explicit termination condition

Use [Code Provenance & Attribution](/pillars/pillar-2-governance-risk/code-provenance/) to keep handoffs auditable.

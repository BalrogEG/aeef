---
title: "PRD-STD-009: Autonomous & Multi-Agent Governance"
sidebar_position: 10
description: "Governance requirements for autonomous and multi-agent AI workflows in software delivery."
---

# PRD-STD-009: Autonomous & Multi-Agent Governance

**Standard ID:** PRD-STD-009  
**Version:** 1.0  
**Status:** Active  
**Compliance Level:** Level 2 (Managed)  
**Effective Date:** 2026-02-18  
**Last Reviewed:** 2026-02-18

## 1. Purpose

This standard defines mandatory governance controls for autonomous and multi-agent AI workflows in software engineering. It extends the PRD-STD series from AI-assisted single-session usage to orchestrated agent execution where agents can plan, edit, and propose changes across multiple steps.

Without explicit controls, multi-agent workflows increase risk of architecture drift, policy bypass, hidden decision chains, and weak accountability. PRD-STD-009 ensures autonomous capabilities operate within enforceable boundaries, with clear human ownership and auditable evidence.

## 2. Scope

This standard applies to:

- Any AI workflow where one or more agents can execute multi-step actions with limited autonomy
- Agent-driven tasks that can modify code, infrastructure, configuration, tests, or delivery workflows
- Orchestrated role-agent handoffs (for example: product -> developer -> QA -> security)
- All environments where agent outputs can affect production-bound artifacts

This standard does not replace existing requirements in PRD-STD-001 through PRD-STD-008. It adds controls specific to autonomous and multi-agent operation.

## 3. Definitions

| Term | Definition |
|---|---|
| **Autonomous Agent** | An AI agent that can execute multiple actions without human intervention between each action |
| **Role-Agent** | An agent profile scoped to one organizational role with a defined contract |
| **Agent Contract** | A formal specification of allowed inputs, outputs, permissions, and escalation paths |
| **Orchestrator** | The control layer routing work among role-agents and enforcing policy checkpoints |
| **Handoff Artifact** | Structured output transferred from one role-agent to another or to a human approver |
| **Agent Run Record** | Execution log containing agent identity, prompt reference, actions, outputs, and timestamps |

## 4. Requirements

### 4.1 Identity, Ownership, and Scope

:::danger MANDATORY
**REQ-009-01:** Every autonomous or role-agent execution MUST use a unique `agent-id` mapped to a named human owner role.

**REQ-009-02:** Every agent MUST execute under a documented agent contract that defines:
- allowed inputs and data sources
- allowed outputs
- forbidden actions
- required checks
- escalation path and approvers

**REQ-009-03:** Agents MUST operate under least-privilege access. Agent credentials MUST NOT grant direct protected-branch merge privileges.

**REQ-009-04:** Agents MUST NOT create, approve, and merge the same change path without human intervention.
:::

### 4.2 Orchestration and Handoff Controls

:::danger MANDATORY
**REQ-009-05:** Multi-agent workflows MUST use an orchestrator that enforces stage order, role boundaries, and stop conditions.

**REQ-009-06:** Every handoff between agents (or agent to human) MUST include a structured handoff artifact containing:
- source references
- assumptions
- risk annotation
- next owner decision request

**REQ-009-07:** Autonomous execution loops MUST enforce a maximum iteration threshold and MUST fail closed on threshold breach.

**REQ-009-08:** Architecture-impacting decisions (patterns, boundaries, major dependencies) MUST be approved by a human reviewer at Tier 2 or higher.
:::

:::warning RECOMMENDED
**REQ-009-09:** Organizations SHOULD maintain reusable handoff schemas to reduce ambiguity and improve traceability.
:::

### 4.3 Governance, Security, and Human Approval

:::danger MANDATORY
**REQ-009-10:** All agent-produced production-bound changes MUST pass [PRD-STD-002](/production/standards/PRD-STD-002-code-review/) human approval requirements.

**REQ-009-11:** Security and dependency controls in [PRD-STD-004](/production/standards/PRD-STD-004-security-scanning/) and [PRD-STD-008](/production/standards/PRD-STD-008-dependency-compliance/) MUST apply equally to agent-generated outputs.

**REQ-009-12:** Governance gate evidence for Tier 3 and Tier 4 work MUST include agent run records and handoff artifacts.

**REQ-009-13:** Agents MUST NOT process Restricted data unless tool deployment and controls satisfy [Pillar 2 data classification requirements](/pillars/pillar-2-governance-risk/).
:::

### 4.4 Traceability and Audit Evidence

:::danger MANDATORY
**REQ-009-14:** Each agent run MUST produce an auditable run record including agent identity, model/tool version, prompt reference, action summary, and output references.

**REQ-009-15:** Pull requests involving agent output MUST include fields for `AI-Usage`, `AI-Prompt-Ref`, `Agent-IDs`, and `AI-Risk-Notes`.

**REQ-009-16:** Agent run records and handoff artifacts MUST be retained according to [Retention & Audit Evidence Policy](/pillars/pillar-2-governance-risk/retention-audit-policy/).
:::

### 4.5 Runtime Safeguards

:::danger MANDATORY
**REQ-009-17:** Agent runtimes MUST enforce policy-deny defaults for unapproved actions.

**REQ-009-18:** Manual override of agent policy controls MUST require an approved waiver with expiration and compensating controls.

**REQ-009-19:** Any unauthorized action attempt by an agent MUST generate a security event and trigger review by Security and Platform owners.
:::

## 5. Implementation Guidance

### Minimum Control Stack

Teams implementing autonomous/multi-agent workflows SHOULD deploy the following baseline controls:

1. **Agent Registry** — source of truth for `agent-id`, role owner, contract version, and status.
2. **Contract Validation** — pre-run checks that block execution when contract fields are missing.
3. **Policy Engine** — centralized allow/deny rules for actions and data access.
4. **Run Ledger** — immutable execution records for every agent run.
5. **Handoff Templates** — required format for cross-role output transfer.
6. **Gate Integration** — CI checks that validate traceability fields and governance evidence.

### Example Agent Contract Fields

```yaml
agent_id: solution-architect-agent
role_owner: solution-architect
contract_version: 1.0.0
allowed_inputs:
  - architecture-decision-record
  - service-topology-diagram
allowed_outputs:
  - architecture-conformance-report
forbidden_actions:
  - merge-to-protected-branch
  - approve-own-output
required_checks:
  - architecture-pattern-validation
  - traceability-metadata-check
escalation:
  approver_role: cto
```

### Minimum Operational Metrics

Track at least:

- agent handoff completeness rate
- governance gate first-pass rate for agent-assisted submissions
- unauthorized action attempt count
- architecture conformance pass rate
- waiver count and expiration compliance

## 6. Exceptions & Waiver Process

Waivers are allowed only for non-security procedural controls and MUST include business justification, compensating controls, and expiration (maximum 90 days).

No waivers are permitted for:

- missing human approval of production-bound changes
- agent processing of Restricted data without approved environment controls
- bypassing security scans for agent-generated outputs
- allowing agents to self-approve and merge into protected branches

## 7. Related Standards

- [PRD-STD-001: Prompt Engineering Standards](/production/standards/PRD-STD-001-prompt-engineering/)
- [PRD-STD-002: Code Review Standards](/production/standards/PRD-STD-002-code-review/)
- [PRD-STD-004: Security Scanning](/production/standards/PRD-STD-004-security-scanning/)
- [PRD-STD-007: Performance & Quality Gates](/production/standards/PRD-STD-007-quality-gates/)
- [PRD-STD-008: Dependency & License Compliance](/production/standards/PRD-STD-008-dependency-compliance/)
- [Code Provenance & Attribution](/pillars/pillar-2-governance-risk/code-provenance/)
- [Operating Model Lifecycle](/transformation/operating-model/)

## 8. Revision History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2026-02-18 | AEEF Standards Committee | Initial release |

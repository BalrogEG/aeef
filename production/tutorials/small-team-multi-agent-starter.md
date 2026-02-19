---
title: "Small-Team Multi-Agent Starter"
sidebar_position: 2
description: "Step-by-step setup for role-based AI agents in small teams, aligned with AEEF controls."
---

# Small-Team Multi-Agent Starter

This tutorial shows exactly how a small team can create and run role-based AI agents without enterprise overhead, while staying compliant with AEEF controls.

If you are a startup or team with fewer than 20 engineers, this is the practical path to make multi-agent work reliable, traceable, and safe.

## Outcome

In about 90 minutes, you will have:

- a project-level agent registry
- role-based agent contracts with boundaries
- handoff templates between agents
- PR metadata and CI checks linked to agent output
- a lightweight operating cadence for continuous governance

## Control Baseline (Do Not Skip)

| Control | Why It Exists | AEEF Reference |
|---|---|---|
| Human approval before merge | Prevent silent AI regressions | [PRD-STD-002](/production/standards/PRD-STD-002-code-review/) |
| Security/dependency scans on agent output | Block unsafe generated code | [PRD-STD-004](/production/standards/PRD-STD-004-security-scanning/), [PRD-STD-008](/production/standards/PRD-STD-008-dependency-compliance/) |
| Agent identity + contracts | Define permissions and ownership | [PRD-STD-009](/production/standards/PRD-STD-009-autonomous-agent-governance/) |
| Traceability fields in PRs | Preserve auditability | [PRD-STD-005](/production/standards/PRD-STD-005-documentation/), [PRD-STD-009](/production/standards/PRD-STD-009-autonomous-agent-governance/) |

## Step 1: Create the Agent Workspace

Create a small folder structure in your repo:

```bash
mkdir -p ai/agents ai/contracts ai/handoffs ai/prompts ai/runs
```

Your structure should look like:

```text
ai/
  agents/
    registry.yaml
  contracts/
    product-agent.yaml
    developer-agent.yaml
    qa-agent.yaml
    security-agent.yaml
  handoffs/
    product-to-dev.md
    dev-to-qa.md
    qa-to-human-approver.md
  prompts/
    product-agent.md
    developer-agent.md
    qa-agent.md
    security-agent.md
  runs/
    README.md
```

## Step 2: Define the Minimum Agent Set

Start with four agents. This is enough for most small-team workflows.

| Agent ID | Role Owner (Human) | Main Responsibility | Cannot Do |
|---|---|---|---|
| `product-agent` | Product owner or founder | Draft scoped stories and acceptance criteria | Edit production code |
| `developer-agent` | Senior developer | Propose implementation changes | Merge protected branch |
| `qa-agent` | QA lead or developer | Produce risk-based tests and verification notes | Approve its own source changes |
| `security-agent` | Tech lead or security champion | Perform security review and hardening guidance | Bypass scan failures |

## Step 3: Create the Agent Registry

Create `ai/agents/registry.yaml`:

```yaml
version: 1
project: your-project-name
owners:
  product-owner: "Founder or PM Name"
  tech-lead: "Tech Lead Name"
  qa-owner: "QA Owner Name"
agents:
  - agent_id: product-agent
    role_owner: product-owner
    contract: ai/contracts/product-agent.yaml
    status: active
  - agent_id: developer-agent
    role_owner: tech-lead
    contract: ai/contracts/developer-agent.yaml
    status: active
  - agent_id: qa-agent
    role_owner: qa-owner
    contract: ai/contracts/qa-agent.yaml
    status: active
  - agent_id: security-agent
    role_owner: tech-lead
    contract: ai/contracts/security-agent.yaml
    status: active
```

## Step 4: Define Agent Contracts

Each agent needs an explicit contract. Start with this template and customize per role.

Create `ai/contracts/developer-agent.yaml`:

```yaml
agent_id: developer-agent
contract_version: 1.0.0
role_owner: tech-lead
allowed_inputs:
  - approved-user-story
  - existing-code-context
  - architecture-constraints
allowed_outputs:
  - code-patch
  - implementation-notes
  - test-suggestions
forbidden_actions:
  - merge-to-main
  - disable-ci-checks
  - introduce-secrets
required_checks:
  - lint-pass
  - test-pass
  - sast-scan-pass
handoff_required: dev-to-qa
escalation:
  approver_role: tech-lead
  triggers:
    - architecture-change
    - auth-or-crypto-change
    - critical-security-finding
```

Use the same structure for the other three files:

- `ai/contracts/product-agent.yaml`
- `ai/contracts/qa-agent.yaml`
- `ai/contracts/security-agent.yaml`

Adjust `allowed_outputs`, `forbidden_actions`, and `triggers` by role.

## Step 5: Create Handoff Templates

Handoffs are mandatory for agent-to-agent and agent-to-human transitions.

Create `ai/handoffs/dev-to-qa.md`:

```markdown
# Handoff: Developer Agent to QA Agent

## Change Summary
- What changed:
- Files touched:
- Why this approach:

## Evidence
- Prompt reference:
- Contract version:
- Test evidence:
- Security scan result:

## Risks and Assumptions
- Known risks:
- Assumptions:
- Open questions:

## Decision Request
- Validate behavior against acceptance criteria
- Confirm no regression on critical paths
```

Minimum required fields for every handoff:

- source references
- assumptions
- risk annotation
- next owner decision request

## Step 6: Add Role-Specific Prompts

Create one prompt file per agent in `ai/prompts/`.

Example `ai/prompts/qa-agent.md`:

```text
Act as qa-agent for this repository.
Use only approved artifacts from handoff inputs.
Validate:
- acceptance criteria coverage
- error-path handling
- regression risk for edited modules
Do not modify architecture, dependencies, or auth controls.
Return:
1) test matrix
2) blocking findings
3) release recommendation (pass/fail/conditional)
```

Keep prompts short, role-scoped, and explicit about forbidden actions.

## Step 7: Integrate with PR and CI

Use the PR template from [Starter Config Files](/production/tutorials/starter-configs/) and ensure these fields are mandatory:

- `AI-Usage`
- `AI-Prompt-Ref`
- `Agent-IDs`
- `AI-Risk-Notes`

In CI, enforce these checks on every PR:

1. build and tests
2. SAST
3. dependency/license scan
4. PR field presence for AI metadata

This aligns with [PRD-STD-007](/production/standards/PRD-STD-007-quality-gates/), [PRD-STD-004](/production/standards/PRD-STD-004-security-scanning/), and [PRD-STD-008](/production/standards/PRD-STD-008-dependency-compliance/).

## Step 8: Define the Daily Workflow

Run this sequence for each feature:

1. `product-agent` drafts scoped story + acceptance criteria.
2. Human owner approves scope.
3. `developer-agent` proposes patch and notes.
4. `qa-agent` validates tests and regression risk.
5. `security-agent` reviews security impact.
6. Human reviewer approves PR and merges.

Non-negotiable rule: no agent can create, approve, and merge the same change path.

## Step 9: Keep Governance Active (Small-Team Cadence)

Run a 30-minute review every two weeks:

1. sample 3 recent AI-assisted PRs
2. verify contract/handoff completeness
3. count blocked findings by severity
4. update prompts and contracts based on failures
5. close expired waivers and exceptions

Track these minimum metrics:

- handoff completeness rate
- first-pass governance gate rate
- security findings per AI-assisted PR
- percentage of PRs with complete AI metadata

## Common Startup Mistakes

- creating too many agents on day 1
- giving agents broad permissions without contracts
- skipping handoff artifacts because the team is small
- allowing agent-generated code to merge without human review
- failing to update prompts after repeated defects

## Adoption Path

Use this order:

1. Start here and implement four agents in one repository.
2. Expand to a second repo only after two weeks of stable metrics.
3. Adopt full orchestrator automation after your team demonstrates consistent compliance with [PRD-STD-009](/production/standards/PRD-STD-009-autonomous-agent-governance/).

For startup-specific rollout context, pair this guide with [Startup Quick-Start](/pillars/startup-quick-start/).

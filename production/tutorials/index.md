---
title: "Tutorials & Quick Start"
sidebar_position: 0
description: "Hands-on tutorials, starter configs, and step-by-step guides for adopting AEEF standards."
---

# Tutorials & Quick Start

These tutorials provide hands-on, step-by-step guidance for adopting AEEF standards. Start here if you want to get running quickly rather than reading through the full standards first.

## Getting Started

| Tutorial | Time | What You'll Do |
|----------|------|----------------|
| [Starter Config Files](/production/tutorials/starter-configs) | 15 min | Copy-paste AI tool configs into your project (CLAUDE.md, .cursorrules, PR template) |
| [CI/CD Pipeline Starter](/production/tutorials/ci-cd-pipeline-starter) | 15 min | Add automated security scanning and quality gates to your repo |
| [Your First AI-Governed PR](/production/tutorials/first-ai-pr-tutorial) | 30 min | End-to-end walkthrough: prompt, review, test, and merge AI-assisted code |
| [Small-Team Multi-Agent Starter](/production/tutorials/small-team-multi-agent-starter) | 90 min | Build role-based AI agents with contracts, handoffs, and governance controls |
| [Policy Templates](/production/tutorials/policy-templates) | 20 min | Create your AI acceptable use policy and data classification rules |

## Who Should Start Here

- **Startups and small teams** — Start with [Startup Quick-Start](/pillars/startup-quick-start), then use [Small-Team Multi-Agent Starter](/production/tutorials/small-team-multi-agent-starter) to operationalize role-based agents
- **Individual developers** — Go directly to [Starter Config Files](/production/tutorials/starter-configs) and [Your First AI-Governed PR](/production/tutorials/first-ai-pr-tutorial)
- **DevOps / Platform engineers** — Start with [CI/CD Pipeline Starter](/production/tutorials/ci-cd-pipeline-starter)
- **Managers and leads** — Read [Policy Templates](/production/tutorials/policy-templates) first

## Relationship to Standards

These tutorials implement the same requirements defined in the [Production Standards](/production/standards/), but in a practical, "do this now" format rather than a formal specification. Once you've completed the tutorials, you'll have a working foundation that covers:

- PRD-STD-001 (Prompt Engineering) — via starter config files
- PRD-STD-002 (Code Review) — via PR template and branch protection
- PRD-STD-003 (Testing) — via CI pipeline test gates
- PRD-STD-004 (Security Scanning) — via CI pipeline security scan
- PRD-STD-007 (Quality Gates) — via full CI pipeline
- PRD-STD-008 (Dependency Compliance) — via CI pipeline dependency audit
- PRD-STD-009 (Autonomous & Multi-Agent Governance) — via the small-team multi-agent setup flow

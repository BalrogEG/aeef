---
title: "Development Manager Guide"
sidebar_position: 1
description: "Guide for development managers leading AI-augmented teams."
---

# Development Manager Guide

As a development manager, you are the critical link between organizational AI strategy and ground-level engineering practice. Your decisions about team enablement, quality oversight, tooling, and performance management directly determine whether your teams capture the productivity benefits of AI-assisted development or fall prey to the well-documented risks -- 1.7x more issues and 2.74x higher vulnerability rates in AI co-authored code. This guide gives you the frameworks, metrics, and decision models to lead confidently.

## Your Unique Position

The development manager sits at the intersection of four forces that are being reshaped by AI-assisted engineering:

| Force | How AI Changes It | Your Response |
|-------|------------------|---------------|
| **Productivity** | Individual output can increase 30-50%, but variance increases too | Establish baselines, track the right metrics, avoid gaming |
| **Quality** | Code volume increases but defect density may rise | Strengthen review processes, invest in automated quality gates |
| **Team Dynamics** | Skill differentiation shifts; junior developers gain speed, seniors gain leverage | Redesign roles and expectations, address skill anxiety |
| **Governance** | New risks require new controls | Implement [PRD-STD-006](/production/standards/PRD-STD-007-quality-gates) at the team level |

## What This Guide Covers

| Section | What You Will Learn | Key Decisions It Supports |
|---------|-------------------|--------------------------|
| [Team Enablement](/roles/development-manager/team-enablement) | Training plans, tool provisioning, cultural readiness | How to roll out AI tools to your team safely and effectively |
| [Quality & Risk Oversight](/roles/development-manager/quality-risk-oversight) | Review processes, risk indicators, escalation procedures | How to maintain quality as code velocity increases |
| [Metrics That Matter](/roles/development-manager/metrics-that-matter) | Productivity, quality, and team health indicators | What to measure, what targets to set, what to report up |
| [Tooling Decisions](/roles/development-manager/tooling-decisions) | Evaluation rubrics, pilot criteria, vendor management | Which tools to adopt, when to change, how to sunset |
| [Performance Management](/roles/development-manager/performance-management) | Revised competencies, evaluation criteria, recognition | How to evaluate and develop people in an AI-augmented world |

## Prerequisites

Before implementing the practices in this guide, ensure:

- **Organizational alignment exists.** Your [CTO](/roles/cto/) or VP Engineering has endorsed AI-assisted development and [PRD-STD-001](/production/standards/PRD-STD-001-prompt-engineering) defines approved tools. If not, start with the [CTO Guide: Technology Strategy](/roles/cto/technology-strategy).
- **Budget is allocated.** AI tools require per-seat licensing, training time, and potentially infrastructure investment. See [Investment & ROI Framework](/roles/executive/investment-roi) for the business case.
- **Security guardrails are in place.** [PRD-STD-005](/production/standards/PRD-STD-004-security-scanning) requirements are implemented at the infrastructure level (secret scanning, approved tool configurations, data handling agreements). Work with your security team if these are not yet established.

## Core Responsibilities in the AI Era

Your core management responsibilities have not changed, but the execution details have shifted significantly.

### 1. Enabling Without Mandating

AI adoption works best when developers feel empowered, not forced. Your role is to remove barriers, provide resources, and create psychological safety around experimentation -- not to mandate AI usage quotas.

**Do:**
- Provide access to approved tools on day one
- Allocate dedicated learning time (minimum 2 hours/week during the first month)
- Celebrate both successful AI usage and thoughtful AI avoidance
- Share the [Developer Guide](/roles/developer/) with your team

**Do not:**
- Set quotas for AI-generated code percentage
- Penalize developers who prefer manual coding for certain tasks
- Compare individual AI usage rates across team members

### 2. Quality as a First-Class Concern

With AI accelerating code production, quality oversight must scale proportionally. This means investing in automated checks, strengthening review processes, and monitoring quality metrics more closely than before.

Key actions:
- Implement the quality dashboard described in [Quality & Risk Oversight](/roles/development-manager/quality-risk-oversight)
- Ensure every PR with AI-generated code receives the enhanced review per [PRD-STD-002](/production/standards/PRD-STD-002-code-review)
- Track defect density trends (not just absolute numbers) as AI adoption increases
- Establish escalation triggers that are documented and followed

### 3. Developing AI-Augmented Engineers

The skill profile for effective developers is changing. See [Performance Management](/roles/development-manager/performance-management) for the revised competency framework and the [Developer Guide: Skill Development](/roles/developer/skill-development) for the progression path you should encourage your team to follow.

### 4. Managing Up

Your [Executive](/roles/executive/) leadership and [CTO](/roles/cto/) need clear signal on how AI adoption is progressing. Use the [Metrics That Matter](/roles/development-manager/metrics-that-matter) framework to provide data-driven updates. Avoid hype and under-reporting equally.

## Relationship to Other Roles

| Role | How You Interact | Key Shared Concerns |
|------|-----------------|---------------------|
| [Developer](/roles/developer/) | Direct management, coaching, review oversight | Quality, skill development, daily workflow effectiveness |
| [Scrum Master](/roles/scrum-master/) | Process co-design, impediment resolution | Sprint velocity changes, estimation recalibration, team health |
| [Product Manager](/roles/product-manager/) | Capacity communication, trade-off negotiation | Velocity expectations, quality trade-offs, feature feasibility |
| [CTO](/roles/cto/) | Strategy alignment, tool decisions, architecture governance | Tool selection, architectural standards, technical risk |
| [QA Lead](/roles/qa-lead/) | Quality standards co-ownership, defect analysis | Testing strategy adaptation, defect patterns, automation priorities |
| [Executive](/roles/executive/) | Progress reporting, risk escalation, investment justification | Metrics, ROI evidence, risk indicators |

## Getting Started

If you are beginning your AI enablement journey, follow this sequence:

1. **Week 1:** Read [Team Enablement](/roles/development-manager/team-enablement) and design your rollout plan
2. **Week 2:** Implement the tooling provisioning process from [Tooling Decisions](/roles/development-manager/tooling-decisions)
3. **Week 3:** Establish the quality dashboard from [Quality & Risk Oversight](/roles/development-manager/quality-risk-oversight)
4. **Week 4:** Set up the metrics framework from [Metrics That Matter](/roles/development-manager/metrics-that-matter)
5. **Month 2:** Begin performance conversations using [Performance Management](/roles/development-manager/performance-management) revised criteria

:::info
This guide focuses on team-level management. For organization-wide strategy, see the [CTO Guide](/roles/cto/). For executive-level governance, see the [Executive Guide](/roles/executive/).
:::

---
title: "Developer Guide"
sidebar_position: 1
description: "Complete guide for developers working with AI-assisted development tools."
---

# Developer Guide

As a software developer in the age of AI-assisted engineering, your role has not diminished -- it has evolved. With 92% of US developers now using AI tools daily, the question is no longer whether to use these tools but how to use them effectively and responsibly. AI co-authored code carries measurable risks (1.7x more issues, 2.74x higher vulnerability rate), which means that your professional judgment, domain expertise, and quality instincts are more important than ever. This guide provides the complete framework for navigating that reality.

## What This Guide Covers

This guide is organized into five focused sections, each addressing a critical dimension of AI-augmented development.

| Section | What You Will Learn | Time to Read |
|---------|-------------------|--------------|
| [Daily Workflows](/roles/developer/daily-workflows) | How to structure your day for maximum AI leverage while maintaining quality | 10 min |
| [Prompt Engineering](/roles/developer/prompt-engineering) | Practical techniques for generating, debugging, refactoring, and documenting code with AI | 15 min |
| [Code Review Responsibilities](/roles/developer/code-review-responsibilities) | What to look for in AI-generated code, red flags, and escalation triggers | 12 min |
| [Security Awareness](/roles/developer/security-awareness) | AI-specific vulnerability patterns, data leakage risks, and secure practices | 12 min |
| [Skill Development](/roles/developer/skill-development) | Progression path from beginner to expert, competency matrix, and certification | 10 min |

## Prerequisites

Before diving into this guide, you should have a foundational understanding of the following:

- **Core development skills.** You write production code in at least one language and are comfortable with version control, testing, and CI/CD pipelines. This guide does not teach programming fundamentals.
- **Basic AI tool familiarity.** You have used at least one AI coding assistant (e.g., GitHub Copilot, Cursor, Claude Code, ChatGPT) in any capacity. You do not need to be proficient -- that is what this guide teaches.
- **Organizational context.** You understand your team's development workflow (e.g., Scrum, Kanban) and have access to your organization's approved AI tools. See [PRD-STD-001](/production/standards/PRD-STD-001-prompt-engineering) for the list of sanctioned tools.

:::warning
If your organization has not yet approved specific AI tools for production use, consult your [Development Manager](/roles/development-manager/) or [CTO](/roles/cto/) before proceeding. Using unsanctioned tools may violate [PRD-STD-006](/production/standards/PRD-STD-007-quality-gates) governance requirements.
:::

## Skill Level Expectations

This guide is written for developers across a range of experience levels. Each section uses progressive depth -- start with the fundamentals, then advance to expert practices as your confidence grows.

| Level | Experience | What to Focus On |
|-------|-----------|-----------------|
| **Beginner** | 0-1 months with AI tools | Daily Workflows, basic Prompt Engineering, Security Awareness fundamentals |
| **Intermediate** | 1-3 months with AI tools | Advanced Prompt Engineering, full Code Review Responsibilities, Skill Development planning |
| **Advanced** | 3-6 months with AI tools | All sections at depth, mentoring others, contributing to organizational prompt libraries |
| **Expert** | 6+ months, cross-tool proficiency | Defining team standards, evaluating new tools, driving continuous improvement |

See the [Skill Development](/roles/developer/skill-development) section for the full competency matrix and certification path.

## Core Principles for AI-Augmented Development

Before exploring specific practices, internalize these five principles. They are derived from [Pillar 1: Engineering Discipline](/pillars/pillar-1-engineering-discipline/) and form the foundation for everything in this guide.

1. **You are the accountable engineer.** AI generates suggestions; you make decisions. Every line of AI-generated code that enters production is your responsibility, just as if you had typed it yourself. There is no "the AI did it" defense.

2. **Verify, then trust.** AI output should be treated like code from an enthusiastic but unreliable junior developer. It may be brilliant, it may be subtly wrong, and it almost certainly has not considered your full system context. Always review before committing.

3. **Context is king.** The quality of AI output is directly proportional to the quality of context you provide. Invest in writing clear prompts, maintaining good documentation, and structuring your codebase for AI readability.

4. **Security is non-negotiable.** AI tools can introduce vulnerabilities, leak sensitive data, and suggest insecure patterns with high confidence. Follow [PRD-STD-005](/production/standards/PRD-STD-004-security-scanning) without exception.

5. **Continuous calibration.** Your relationship with AI tools will evolve as both you and the tools improve. Regularly reassess your workflows, update your prompts, and share learnings with your team. See [Pillar 4: Continuous Improvement](/pillars/pillar-4-operating-model/).

## Key Standards References

Throughout this guide, you will encounter references to the following AEEF Standards. Bookmark these for quick access.

- [PRD-STD-001: AI Usage Policy](/production/standards/PRD-STD-001-prompt-engineering) -- Defines approved tools, acceptable use cases, and prohibited activities
- [PRD-STD-002: Code Review Standards](/production/standards/PRD-STD-002-code-review) -- Establishes review requirements for all code, with additional checks for AI-generated code
- [PRD-STD-003: Testing Standards](/production/standards/PRD-STD-003-testing-requirements) -- Sets coverage requirements and test quality expectations
- [PRD-STD-005: Security Standards](/production/standards/PRD-STD-004-security-scanning) -- Defines security requirements and vulnerability management processes

## Getting Started

If you are new to AI-assisted development, follow this recommended reading order:

1. Read [Daily Workflows](/roles/developer/daily-workflows) to understand how AI fits into your existing routines
2. Work through [Prompt Engineering](/roles/developer/prompt-engineering) with your IDE open -- practice the examples in real time
3. Study [Code Review Responsibilities](/roles/developer/code-review-responsibilities) before your next PR review
4. Complete the [Security Awareness](/roles/developer/security-awareness) section before writing any production code with AI assistance
5. Map your growth using the [Skill Development](/roles/developer/skill-development) competency matrix

If you are already experienced with AI tools, start with [Code Review Responsibilities](/roles/developer/code-review-responsibilities) and [Security Awareness](/roles/developer/security-awareness) to ensure your practices align with AEEF Standards, then use the [Skill Development](/roles/developer/skill-development) section to identify gaps in your expertise.

:::info
This guide focuses on the developer's perspective. For team-level concerns (tool provisioning, training budgets, quality dashboards), see the [Development Manager Guide](/roles/development-manager/). For sprint process changes, see the [Scrum Master Guide](/roles/scrum-master/).
:::

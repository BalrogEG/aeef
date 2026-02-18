---
title: "Tool Guides"
sidebar_position: 1
description: "Guides for integrating AI development tools."
---

# Tool Guides

This section provides practical guides for integrating AI development tools into your engineering workflow. While the [Standards & Guidelines](/production/standards/) define what must be done and the [Best Practices](/production/best-practices/) describe how to work effectively with AI, the Tool Guides address the specific tools that teams use to implement those standards.

## Why Tool Guides Matter

AI-assisted development tools vary significantly in their capabilities, configurations, and integration patterns. A tool that is misconfigured or misused can undermine even the best-designed standards. Conversely, well-configured tools can automate standard enforcement and make compliance the path of least resistance.

These guides ensure that:

- Teams standardize on consistent tool configurations across the organization
- Tool capabilities are aligned with AEEF standard requirements
- Engineers understand both the strengths and limitations of their tools
- Integration patterns support, rather than bypass, quality and security controls

## Tool Guide Categories

### 1. IDE Integration Patterns

**[IDE Integration](/production/tool-guides/ide-integration/)**

IDE-integrated AI assistants are the primary interface for AI-assisted development. This guide covers setup, configuration, and team standardization for:

- **GitHub Copilot** -- The most widely adopted AI coding assistant, integrated into VS Code, JetBrains IDEs, and Neovim
- **Cursor** -- An AI-first IDE with deep codebase understanding and multi-file editing capabilities
- **Claude Code** -- A terminal-based AI coding assistant with extended context windows and agentic capabilities

The guide includes recommended configurations that align with [PRD-STD-001: Prompt Engineering](/production/standards/PRD-STD-001-prompt-engineering/) and team-level standardization approaches.

### 2. AI Code Review Tools

**[AI Code Review](/production/tool-guides/ai-code-review/)**

AI-powered code review tools can augment human reviewers by identifying patterns that are easy to miss during manual review. This guide covers:

- Tool capabilities and what they can (and cannot) reliably detect
- Limitations that require human judgment to supplement
- Integration patterns with existing code review workflows (GitHub, GitLab, Azure DevOps)
- How AI review tools support, but do not replace, the human review requirements in [PRD-STD-002](/production/standards/PRD-STD-002-code-review/)

### 3. Automated Testing with AI

**[Automated Testing with AI](/production/tool-guides/automated-testing-ai/)**

AI tools can generate test cases, create test data, and analyze coverage gaps. This guide covers:

- AI test generation capabilities and how to validate AI-generated tests
- Test data creation tools for realistic, privacy-safe test datasets
- Coverage analysis tools that identify untested AI-generated code paths
- Limitations of AI-generated tests and why human review remains essential per [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements/)

### 4. Security Scanning Tools

**[Security Scanning Tools](/production/tool-guides/security-scanning-tools/)**

Security scanning is a mandatory requirement per [PRD-STD-004](/production/standards/PRD-STD-004-security-scanning/). This guide covers:

- SAST tools with configurations optimized for AI-generated code patterns
- DAST tools for runtime security testing of applications containing AI-generated components
- SCA tools for dependency vulnerability monitoring and license compliance
- AI-specific security configurations that target the unique vulnerability patterns of AI-generated code
- False positive management strategies

### 5. Open-Source Onboarding & Expert Network

**[Open-Source Onboarding & Expert Network](/production/tool-guides/open-source-onboarding-expert-network/)**

For teams publishing AEEF as an open-source framework, adoption quality depends on contributor onboarding before coding starts. This guide covers:

- GitHub-first onboarding flow before AI-assisted implementation
- "Before-you-vibecode" readiness checklist tied to PRD-STD controls
- GitHub-native expert join form for domain specialists
- Intake workflow and SLA model for reviewing expert applications
- KPIs for measuring onboarding and community effectiveness

## Tool Selection Criteria

When selecting AI development tools, evaluate against these criteria:

| Criterion | Description | AEEF Relevance |
|---|---|---|
| **Enterprise Security** | Data handling, SOC 2 compliance, encryption at rest/in transit | Pillar 2: Governance & Risk |
| **Configurability** | Ability to enforce organizational standards and restrict behavior | PRD-STD-001, PRD-STD-007 |
| **Auditability** | Logging and traceability of AI interactions | PRD-STD-005, Pillar 2 |
| **Integration** | Compatibility with existing CI/CD, VCS, and project management tools | PRD-STD-007 |
| **Team Management** | Centralized configuration, license management, usage reporting | All standards |
| **Privacy** | Code data handling policies, opt-out options, data retention | Pillar 2: Governance & Risk |

## Tool Configuration Philosophy

The AEEF framework recommends a "secure by default, customizable by exception" approach to tool configuration:

1. **Start restrictive.** Begin with conservative configurations that prioritize safety and quality over speed.
2. **Standardize across teams.** Configuration drift between teams creates inconsistent quality. Use shared configuration files (e.g., `.cursorrules`, `copilot-instructions.md`).
3. **Enforce through automation.** Where possible, encode standards into tool configurations and CI/CD gates per [PRD-STD-007](/production/standards/PRD-STD-007-quality-gates/), rather than relying on manual compliance.
4. **Review and adapt.** Tool configurations should be reviewed quarterly alongside standard reviews. As tools evolve, configurations should be updated to leverage new safety and quality features.
5. **Document decisions.** When a configuration choice represents a trade-off (e.g., allowing AI access to certain file types), document the decision and rationale.

## Getting Started

For teams new to AI development tools:

1. **Choose your primary AI coding assistant** -- Select from the IDE integration options based on your technology stack and organizational requirements
2. **Configure using this guide** -- Follow the IDE integration guide for initial setup
3. **Set up security scanning** -- This is a Level 1 (Foundation) requirement and should be configured immediately
4. **Add AI code review** -- Augment your human review process with AI review tools
5. **Configure test generation** -- Use AI testing tools to help meet coverage requirements in [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements/)
6. **Enable community onboarding** -- Publish the open-source onboarding and expert intake workflow to scale contributor quality

For each tool category, the guides provide specific tool recommendations, configuration templates, and integration instructions. Start with the guide most relevant to your immediate needs and expand from there.

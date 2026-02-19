---
title: "Open-Source Onboarding & Expert Network"
sidebar_position: 5
description: "GitHub-first onboarding and expert community intake for applying AEEF before AI coding sessions."
---

# Open-Source Onboarding & Expert Network

This guide defines how to make AEEF easy to adopt as an open-source framework. The objective is simple:

- Any contributor can connect to the framework on GitHub before starting AI-assisted coding.
- Experts can apply to join the framework community through a structured form.

## Why This Matters

Most quality and governance failures happen before coding starts: missing context, unclear standards, and inconsistent contributor expectations. A GitHub-first onboarding path removes these gaps by forcing alignment before implementation.

## GitHub-First Entry Point

Every public framework repository SHOULD expose this onboarding path in the top-level `README.md`:

1. Read [Production Standards](/production/standards/).
2. Start with [Apply-Ready Rollout Kit](/production/standards/apply-ready-rollout-kit/).
3. **Download and install the AI coding rules file** for your tool (see below).
4. Follow `CONTRIBUTING.md` for workflow and quality gates.
5. Open a scoped issue before starting implementation.
6. Submit PR with evidence of standard compliance.

## AI Coding Tool Integration Files

The AEEF provides ready-to-use configuration files that encode framework standards directly into your AI coding tools. Drop these files into your project root **before** starting any AI-assisted development session.

### Available Files

| File | AI Tool | Description | Download |
|---|---|---|---|
| **CLAUDE.md** | Claude Code | Claude Code reads this file automatically and follows AEEF standards during every session | [Download](pathname:///integrations/CLAUDE.md) |
| **.cursorrules** | Cursor | Cursor reads this file and applies AEEF rules to all AI code suggestions | [Download](pathname:///integrations/.cursorrules) |
| **copilot-instructions.md** | GitHub Copilot | Place in `.github/` directory. Adapt from CLAUDE.md content. | Use CLAUDE.md as source |

### What These Files Enforce

- Security rules: no secrets or PII in prompts, mandatory scanning ([PRD-STD-004](/production/standards/PRD-STD-004-security-scanning/))
- Code quality: complexity limits, pattern adherence, no magic numbers ([PRD-STD-007](/production/standards/PRD-STD-007-quality-gates/))
- Testing: mandatory tests with meaningful assertions, coverage targets ([PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements/))
- Attribution: clear AI commit marking, atomic commits ([Code Provenance](/pillars/pillar-2-governance-risk/code-provenance))
- Data classification: classification-based prompt restrictions ([Pillar 2](/pillars/pillar-2-governance-risk/))
- Prompt structure: Role/Context/Task/Constraints/Output ([PRD-STD-001](/production/standards/PRD-STD-001-prompt-engineering/))
- Review checklist: 10-point verification before accepting AI code ([PRD-STD-002](/production/standards/PRD-STD-002-code-review/))

### Quick Setup

```bash
# Claude Code
curl -o CLAUDE.md https://aeef.ai/integrations/CLAUDE.md

# Cursor
curl -o .cursorrules https://aeef.ai/integrations/.cursorrules

# GitHub Copilot (adapt from CLAUDE.md)
mkdir -p .github && cp CLAUDE.md .github/copilot-instructions.md
```

After downloading, customize the **Project-Specific Rules** section at the bottom of each file with your project's conventions, then commit to your repository.

## Before-You-Vibecode Checklist

Contributors MUST complete the following checklist before starting AI-assisted coding on any AEEF-governed project:

- [ ] Read the [About AEEF](/pillars/about/) overview (15 min).
- [ ] Downloaded and installed the AI coding rules file for your tool (5 min).
- [ ] Verified your project's data classification level — know what can and cannot go into AI prompts.
- [ ] Confirmed your AI tool is on the organization's approved list.
- [ ] Mapped the requested change to at least one PRD-STD requirement.
- [ ] Identified testing requirements from [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements/).
- [ ] Confirmed security and dependency controls ([PRD-STD-004](/production/standards/PRD-STD-004-security-scanning/), [PRD-STD-008](/production/standards/PRD-STD-008-dependency-compliance/)).
- [ ] Defined acceptance criteria and rollback plan.
- [ ] Selected reviewer role (engineer, QA, security, architect).

:::warning
Skipping this checklist and going straight to AI-assisted coding is the most common cause of quality and security issues. The time invested here prevents hours of rework later.
:::

## Open-Source Framework

The AEEF is an open-source framework. Organizations and individuals are free to:

- **Adopt** the framework for internal use without restriction
- **Adapt** the framework to specific organizational, regional, or industry contexts
- **Contribute** improvements, extensions, and corrections back to the framework
- **Reference** the framework in policies, contracts, and regulatory submissions
- **Build** tooling, training, and services on top of the framework

The framework source is hosted on GitHub. All standards, guides, templates, and integration files are version-controlled and open for contribution. See the [Contributing Guide](/pillars/about/contributing) for the formal process.

## Expert Join Form (GitHub Native)

Use a GitHub Issue Form to intake experts who want to contribute to framework governance and implementation support.

- Template file: `.github/ISSUE_TEMPLATE/expert-join.yml`
- Suggested label: `expert-network`
- Suggested triage SLA: first response within 3 business days

### Who We're Looking For

| Domain | Example Expertise | How You Can Contribute |
|---|---|---|
| **AI/ML Engineering** | Prompt engineering, model evaluation, AI safety, agent architectures | Standards refinement, best practices, tool guides |
| **Security Engineering** | AppSec, threat modeling, SAST/DAST, supply chain security | Security standards, vulnerability patterns, scanning guidance |
| **Governance & Compliance** | ISO 42001, SOC 2, GDPR, PDPL, EU AI Act, SAMA CSF | Compliance mappings, audit checklists, regulatory profiles |
| **Enterprise Architecture** | Solution architecture, platform engineering, DevOps | Operating model guidance, toolchain integration |
| **Regional Expertise** | KSA regulations, Middle East government, sector-specific requirements | Regional profiles, cultural adaptation, regulatory alignment |
| **Training & Education** | Curriculum design, certification programs, skill assessment | Training materials, learning paths, assessment frameworks |
| **Research** | AI code quality, productivity measurement, risk quantification | Evidence base, benchmark data, research validation |

### Required Form Fields

- Full name and contact channel
- Primary role and domain expertise
- Standards areas the expert can support
- Prior governance/compliance experience
- Availability and collaboration preference
- Brief statement of intended contribution
- Links to relevant work or publications (optional)

:::info
Expert enrollment is open to individuals worldwide. There is no cost to join. The AEEF values diverse perspectives from different industries, regions, and organization sizes.
:::

## Expert Intake Workflow

1. Applicant submits the `Expert Network Application` issue form on GitHub.
2. Maintainer triages eligibility and routes to the relevant domain (3 business day SLA).
3. Maintainer requests clarification if needed.
4. Approved experts are added to contributor roster and relevant working groups.
5. Rejected applications receive clear reason and re-apply guidance.

### Expert Network Benefits

- **Shape industry standards** — Direct influence on the framework
- **Early access** — Review draft standards before public release
- **Network** — Connect with peers across AI engineering, security, and governance
- **Recognition** — Contributors acknowledged in [Version History](/pillars/about/version-history)
- **Standards Committee path** — Sustained contributors may be nominated for Committee membership

## Governance and Metrics

Track adoption and community health with these operational KPIs:

| Metric | Definition | Target |
|---|---|---|
| Pre-coding checklist completion rate | % of new contributors completing readiness checklist before first AI-assisted PR | >= 90% |
| Integration file adoption rate | % of active repositories with CLAUDE.md or .cursorrules in place | >= 80% |
| First-PR quality pass rate | % of first AI-assisted PRs passing review without security or quality rework | >= 70% |
| Expert application response time | Business days from application to decision | <= 3 days (first response) |
| Active expert contributor ratio | % of enrolled experts with activity in the last quarter | >= 50% |

## Implementation References

- AI coding rules: [CLAUDE.md](pathname:///integrations/CLAUDE.md), [.cursorrules](pathname:///integrations/.cursorrules)
- Expert form definition: `.github/ISSUE_TEMPLATE/expert-join.yml`
- Repository onboarding rules: `CONTRIBUTING.md`
- Contributing guide: [Contributing to These Standards](/pillars/about/contributing)
- Production standards index: [Standards & Guidelines](/production/standards/)

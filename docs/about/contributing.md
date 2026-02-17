---
title: "Contributing to These Standards"
sidebar_position: 2
description: "How to contribute to the AEEF Standards."
---

# Contributing to These Standards

The AEEF Standards are a living document that evolves with the rapidly changing landscape of AI-assisted development. New AI capabilities emerge monthly, research findings continuously update our understanding of AI-generated code quality and risk, and implementation experience across diverse organizations generates practical refinements. Contributions from practitioners, researchers, and governance professionals are essential to keeping these standards relevant and authoritative.

## Contribution Philosophy

The AEEF welcomes contributions that improve the framework's clarity, accuracy, completeness, and practical applicability. The following principles guide the contribution process:

1. **Evidence-based.** Proposed changes SHOULD be supported by research findings, empirical data, or documented implementation experience. Opinion-based changes require broader community consensus before adoption.

2. **Practitioner-informed.** Standards that cannot be practically implemented are not useful standards. Contributions from organizations that have implemented AEEF recommendations carry significant weight.

3. **Backwards-compatible where possible.** Changes SHOULD avoid invalidating work that organizations have already completed to achieve a given maturity level. When breaking changes are necessary, transition guidance MUST be provided.

4. **Inclusive.** The framework SHOULD be applicable across organization sizes (from startups to large enterprises), technology stacks, industry verticals, and geographic regions. Contributions that improve applicability across these dimensions are particularly valued.

5. **Clear and precise.** RFC 2119 language (MUST, SHALL, SHOULD, RECOMMENDED, MAY) MUST be used consistently and intentionally. Every normative statement should be testable — an organization should be able to determine unambiguously whether it satisfies the requirement.

## Types of Contributions

### Standards Proposals

Standards proposals introduce new requirements, modify existing requirements, or retire obsolete requirements. These are the most impactful and most carefully reviewed contributions.

**Examples:**
- Adding a new KPI to the [KPI Framework](../kpi/index.md)
- Modifying the assessment checklist for a [maturity level](../maturity/index.md)
- Introducing governance requirements for a new AI tool category (e.g., autonomous coding agents)
- Updating security scanning requirements based on new vulnerability research

### Guidance Enhancements

Guidance enhancements improve the explanatory content, examples, and practical guidance without changing normative requirements. These contributions are valuable for improving adoption and clarity.

**Examples:**
- Adding a practical example to a KPI definition
- Expanding a transition roadmap with additional implementation details
- Adding cross-references between related sections
- Clarifying ambiguous language in existing guidance

### Corrections

Corrections fix errors in fact, logic, or language without changing the intent of the standards.

**Examples:**
- Fixing incorrect cross-references or broken links
- Correcting factual errors in cited research or statistics
- Fixing formatting issues, typos, or grammatical errors
- Resolving internal inconsistencies between sections

### Glossary Additions

Additions to the [Glossary](./glossary.md) define new terms or refine existing definitions as the AI-assisted development vocabulary evolves.

## Proposal Process

### Step 1: Pre-Proposal Discussion

Before submitting a formal proposal, contributors SHOULD engage in pre-proposal discussion to validate the need, gather initial feedback, and avoid duplicating work already in progress.

Pre-proposal discussion channels:
- **Standards discussion forum** — Post a brief description of the proposed change and its rationale
- **Monthly standards call** — Present the proposal concept during the open discussion segment
- **Direct engagement** — Contact a Standards Committee member for initial feedback

### Step 2: Formal Proposal Submission

Formal proposals MUST include the following elements:

| Element | Description | Required? |
|---|---|---|
| **Title** | Concise description of the proposed change | REQUIRED |
| **Category** | Standards Proposal, Guidance Enhancement, Correction, or Glossary Addition | REQUIRED |
| **Affected Sections** | List of AEEF sections that the proposal modifies | REQUIRED |
| **Problem Statement** | Clear description of the gap, error, or improvement opportunity | REQUIRED |
| **Proposed Change** | Specific text changes, including both removed and added content | REQUIRED |
| **Rationale** | Justification for the change, including evidence or experience | REQUIRED |
| **Impact Assessment** | Analysis of how the change affects organizations at various maturity levels | REQUIRED for Standards Proposals |
| **Transition Guidance** | Guidance for organizations that must adapt to the change | REQUIRED for breaking changes |
| **Supporting Evidence** | Research citations, empirical data, or documented implementation experience | RECOMMENDED |
| **Alternative Approaches** | Other approaches considered and why they were rejected | RECOMMENDED |

:::info Proposal Template
A standardized proposal template is available in the AEEF repository. Using the template ensures that all required elements are addressed and facilitates efficient review.
:::

### Step 3: Review Process

All proposals undergo a structured review process. The review stages and timelines differ based on the contribution category:

#### For Corrections

| Stage | Duration | Outcome |
|---|---|---|
| Technical review by one Standards Committee member | 5 business days | Accept, reject, or request clarification |
| Publication | 5 business days | Correction published in next patch release |

#### For Glossary Additions and Guidance Enhancements

| Stage | Duration | Outcome |
|---|---|---|
| Technical review by two Standards Committee members | 10 business days | Accept, reject, or request revision |
| Community comment period | 15 business days | Open for feedback from all stakeholders |
| Final decision by Standards Committee | 5 business days | Accept (with optional modifications), defer, or reject |
| Publication | Next minor release | Change included in next scheduled release |

#### For Standards Proposals

| Stage | Duration | Outcome |
|---|---|---|
| Initial screening by Standards Committee chair | 5 business days | Proceed to review, return for revision, or reject |
| Technical review by three Standards Committee members | 20 business days | Detailed technical assessment |
| Community comment period | 30 business days | Open for feedback from all stakeholders |
| Implementation impact review | 15 business days | Assessment by at least two implementing organizations |
| Standards Committee vote | 10 business days | Accept (requires 2/3 majority), defer, or reject |
| Publication | Next major or minor release | Change included in next scheduled release |

:::warning Proposal Rejection
Rejection is not a judgment on the contributor's expertise. Common rejection reasons include: insufficient evidence, scope too narrow for framework-level standardization, conflict with existing standards, or premature standardization of an evolving practice. Contributors are encouraged to address reviewer feedback and resubmit.
:::

## Review Criteria

Reviewers evaluate proposals against the following criteria:

| Criterion | Weight | Description |
|---|---|---|
| **Relevance** | High | Does this address a real need in AI-assisted development governance? |
| **Evidence** | High | Is the proposal supported by research, data, or documented experience? |
| **Clarity** | High | Is the proposed text clear, unambiguous, and testable? |
| **Practicality** | High | Can organizations realistically implement this requirement? |
| **Consistency** | Medium | Does the proposal align with existing AEEF principles and structure? |
| **Completeness** | Medium | Does the proposal fully address the identified gap or issue? |
| **Impact** | Medium | Does the benefit justify the implementation cost for adopting organizations? |
| **Backwards Compatibility** | Medium | Does the proposal minimize disruption to existing implementations? |

## Governance Structure

### Standards Committee

The AEEF Standards Committee is responsible for the integrity, evolution, and governance of the framework. The committee comprises:

- **Chair** — Responsible for overall standards governance, meeting facilitation, and publication decisions
- **Technical Members** (5-7) — Subject matter experts in software engineering, AI/ML, security, and governance
- **Industry Representatives** (2-3) — Practitioners from organizations implementing AEEF at various maturity levels
- **Observer Members** — Representatives from regulatory bodies, academic institutions, or AI tool vendors (non-voting)

Committee members serve two-year terms with staggered rotation to ensure continuity. The committee meets monthly, with additional ad hoc sessions for urgent matters.

### Decision Making

- **Corrections:** Approved by any single committee member (technical review only)
- **Glossary and Guidance:** Approved by majority vote of the technical members
- **Standards Proposals:** Approved by two-thirds supermajority of the full committee (technical + industry members)
- **Framework Structure Changes:** Approved by two-thirds supermajority plus chair approval

### Conflict of Interest

Committee members MUST disclose any conflicts of interest related to proposals under review. Conflicts include employment by an AI tool vendor whose product is specifically referenced, financial interest in consulting services related to AEEF implementation, or authorship of research cited as evidence. Members with disclosed conflicts MAY participate in discussion but MUST recuse from voting.

## Release Process

The AEEF follows semantic versioning:

- **Major releases** (e.g., v2.0) — Significant structural changes, new maturity levels, or breaking changes to existing standards. Published annually or as warranted.
- **Minor releases** (e.g., v1.1) — New standards, KPI additions, and non-breaking enhancements. Published quarterly.
- **Patch releases** (e.g., v1.0.1) — Corrections, typo fixes, and clarifications. Published as needed.

See the [Version History](./version-history.md) for all published releases.

## Contributor Recognition

Contributors are recognized in the [Version History](./version-history.md) for accepted proposals. Significant contributors may be invited to participate in Standards Committee activities as observer members or, for sustained contributions, as nominated committee members.

## Getting Started

To begin contributing:

1. Review the existing standards thoroughly to understand the framework's scope, style, and conventions
2. Identify a specific gap, error, or improvement opportunity
3. Engage in pre-proposal discussion to validate the approach
4. Submit a formal proposal following the process outlined above
5. Participate constructively in the review process

:::tip First Contribution
For first-time contributors, Corrections and Glossary Additions are recommended as entry points. These contributions have a simpler review process and help new contributors become familiar with the standards governance workflow before tackling Standards Proposals.
:::

## Code of Conduct

All contributors MUST adhere to the following standards of professional conduct:

- Provide constructive, evidence-based feedback
- Respect diverse perspectives and implementation contexts
- Maintain confidentiality of unpublished proposals during review
- Disclose conflicts of interest promptly and completely
- Focus on the standards, not the contributor — review the proposal, not the person

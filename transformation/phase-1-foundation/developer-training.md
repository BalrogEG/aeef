---
title: "Developer Training & Onboarding"
sidebar_position: 4
description: "Structured training programs for AI-assisted development."
---

# Developer Training & Onboarding

This section outlines the training curriculum and onboarding process for developers beginning to use AI-assisted development tools. Training is a mandatory prerequisite for AI tool access — no developer SHALL receive tool credentials until they have completed the curriculum and passed the assessment. The curriculum covers foundational concepts, prompt engineering basics, understanding AI limitations, security-conscious usage, and hands-on exercises with real-world scenarios. This training program aligns with the competency requirements defined in [Pillar 1: Engineering Discipline](/pillars/pillar-1-engineering-discipline/).

## Curriculum Overview

The training curriculum consists of eight modules delivered over a two-week period. Each module includes instructional content, hands-on exercises, and knowledge checks. The total estimated time commitment is 20-24 hours.

### Module Structure

| Module | Title | Duration | Delivery Method |
|---|---|---|---|
| 1 | Foundations of AI-Assisted Development | 2 hours | Instructor-led |
| 2 | Understanding AI Capabilities and Limitations | 2.5 hours | Instructor-led |
| 3 | Prompt Engineering Fundamentals | 3 hours | Instructor-led + Lab |
| 4 | Security-Conscious AI Usage | 3 hours | Instructor-led + Lab |
| 5 | AI-Assisted Code Review and Quality | 2.5 hours | Lab-based |
| 6 | AI-Assisted Testing and Debugging | 2.5 hours | Lab-based |
| 7 | Workflow Integration and Productivity | 2 hours | Lab-based |
| 8 | Governance, Ethics, and Organizational Policy | 2.5 hours | Instructor-led + Assessment |

## Module Details

### Module 1: Foundations of AI-Assisted Development

**Learning Objectives:**
- Explain how large language models generate code and their underlying mechanisms
- Describe the current state of AI-assisted development tooling and its trajectory
- Articulate why the organization is adopting AI-assisted development and the expected outcomes
- Identify the AEEF framework structure and how it governs AI usage

**Topics Covered:**
- How LLMs work at a conceptual level (training data, token prediction, context windows)
- Current landscape of AI development tools
- Organizational rationale for adoption
- Overview of the AEEF framework and its pillars
- The 1.7x issue rate and 2.74x vulnerability rate — why governance matters

### Module 2: Understanding AI Capabilities and Limitations

**Learning Objectives:**
- Identify tasks where AI assistance provides the most value
- Recognize common failure modes in AI-generated code
- Explain hallucination, confabulation, and stale knowledge risks
- Apply critical evaluation to AI-generated outputs

**Topics Covered:**
- High-value use cases: boilerplate generation, test writing, documentation, refactoring
- Low-value or dangerous use cases: security-critical code, novel algorithms, architecture decisions
- Common failure patterns: subtle logic errors, insecure defaults, outdated API usage, plausible but incorrect code
- The "automation complacency" risk — why experienced developers still miss AI-introduced bugs

### Module 3: Prompt Engineering Fundamentals

**Learning Objectives:**
- Write effective prompts that produce higher-quality code output
- Apply structured prompt patterns (context-instruction-constraints)
- Iterate on prompts to improve output quality
- Use context management strategies to work within token limitations

**Hands-On Exercises:**
1. Write prompts for a CRUD API endpoint and compare outputs with and without structured context
2. Refine a poorly-written prompt through three iterations, measuring quality improvement
3. Practice the "show, don't tell" technique by providing example code patterns
4. Implement a function using AI assistance with explicit constraint specification

### Module 4: Security-Conscious AI Usage

**Learning Objectives:**
- Apply data classification rules to AI prompt content
- Identify and prevent data leakage scenarios
- Configure AI tools according to approved security settings
- Recognize security vulnerabilities in AI-generated code

**Hands-On Exercises:**
1. Classify a series of code snippets and determine which MAY be included in AI prompts
2. Review AI-generated code samples and identify injected vulnerabilities (SQL injection, XSS, insecure deserialization)
3. Practice anonymizing sensitive data before prompt inclusion
4. Walk through the incident reporting process for a simulated data leakage event

This module directly reinforces the [Baseline Security Policies](/transformation/phase-1-foundation/baseline-security-policies/) and MUST be co-developed with the Security Lead.

### Module 5: AI-Assisted Code Review and Quality

**Learning Objectives:**
- Apply enhanced code review techniques for AI-generated code
- Use AI tools to assist in reviewing human-written code
- Identify code quality issues specific to AI-generated output (naming conventions, unnecessary complexity, dead code)
- Apply the "trust but verify" principle systematically

**Hands-On Exercises:**
1. Review three AI-generated pull requests and identify all issues (at least 5 planted issues per PR)
2. Use AI assistance to review a human-written module and evaluate the tool's feedback quality
3. Practice writing review comments that distinguish between AI-generated and human-written concerns

### Module 6: AI-Assisted Testing and Debugging

**Learning Objectives:**
- Generate meaningful unit tests using AI assistance
- Use AI tools to identify and diagnose bugs
- Evaluate the quality and coverage of AI-generated tests
- Supplement AI-generated tests with human-designed edge cases

**Hands-On Exercises:**
1. Generate tests for an existing module and evaluate coverage gaps
2. Use AI to diagnose a bug in a provided codebase, then verify the AI's diagnosis
3. Identify edge cases that AI-generated tests missed and write supplementary tests

### Module 7: Workflow Integration and Productivity

**Learning Objectives:**
- Integrate AI tools into daily development workflows efficiently
- Manage context switching between AI-assisted and manual coding
- Use AI tools for documentation generation and maintenance
- Establish personal productivity patterns that leverage AI strengths

**Hands-On Exercises:**
1. Complete a feature implementation using AI assistance end-to-end, tracking time and quality
2. Generate and refine documentation for an existing undocumented module
3. Practice the "AI draft, human refine" workflow for a real-world task

### Module 8: Governance, Ethics, and Organizational Policy

**Learning Objectives:**
- Explain the organization's AI Acceptable Use Policy and compliance requirements
- Apply AI attribution and metadata requirements in daily work
- Describe the [Operating Model Lifecycle](/transformation/operating-model/) and the developer's role in each stage
- Identify ethical considerations in AI-assisted development (bias, licensing, attribution)

**Topics Covered:**
- Review of the Acceptable Use Policy
- AI attribution metadata requirements per [Pillar 1](/pillars/pillar-1-engineering-discipline/)
- Intellectual property and licensing considerations for AI-generated code
- Ethical considerations: bias in training data, environmental impact, workforce implications
- The governance gate process and developer responsibilities

## Assessment Criteria

### Knowledge Assessment

A written assessment MUST be completed after Module 8 with a minimum passing score of 80%. The assessment covers:

- Data classification and security policy knowledge (25% of questions)
- Prompt engineering principles (25% of questions)
- AI limitations and failure modes (20% of questions)
- Governance and policy compliance (15% of questions)
- Code review for AI-generated output (15% of questions)

### Practical Assessment

Developers MUST complete a practical exercise where they:

1. Receive a coding task with specific requirements and constraints
2. Use AI tools to generate an initial implementation
3. Review, refactor, and harden the AI-generated code
4. Submit the final code with documentation of their review process

The practical assessment is evaluated on code quality, security, identification of AI-introduced issues, and adherence to organizational standards.

## Ongoing Education Requirements

Training does not end with initial onboarding. The following ongoing education requirements apply:

- **Quarterly refresher sessions** (1 hour) covering new tool features, updated policies, and lessons learned from incidents
- **Annual recertification** requiring completion of an updated assessment
- **Community participation** — Developers SHOULD participate in the [Knowledge Sharing](/transformation/phase-2-expansion/knowledge-sharing/) communities of practice established in Phase 2
- **Prompt library contributions** — Developers SHOULD contribute effective prompts to the organizational prompt library at least quarterly

Training completion records MUST be maintained and reported to the Steering Committee as part of [Phase 1](/transformation/phase-1-foundation/) deliverables.

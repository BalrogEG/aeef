---
title: "Skill Development Path"
sidebar_position: 6
description: "Career development path for AI-augmented developers."
---

# Skill Development Path

AI-assisted development is not a single skill -- it is a constellation of competencies that range from basic tool usage to strategic AI-first architecture design. This section provides a structured progression path, a competency matrix for self-assessment, and guidance on learning resources and certification. It aligns with [Pillar 5: Organizational Alignment](/pillars/pillar-5-organizational-enablement/) and the performance expectations defined in [Performance Management](/roles/development-manager/performance-management).

## Progression Levels

The AEEF framework defines four proficiency levels for AI-augmented development. Each level builds on the previous one and typically requires 3-12 months of deliberate practice to advance.

### Level 1: Foundation (Beginner)

**Profile:** You have started using AI tools but rely on basic prompts and often accept output without thorough review. You are still building mental models for when AI helps versus when it hinders.

**Key competencies:**
- Can use at least one AI coding assistant for basic code generation
- Understands the Generate-Review-Commit cycle from [Daily Workflows](/roles/developer/daily-workflows)
- Knows how to sanitize prompts to avoid data leakage (see [Security Awareness](/roles/developer/security-awareness))
- Can identify obviously incorrect AI output (compilation errors, missing imports)
- Follows the basic security checklist for AI-generated code

**Typical behaviors:**
- Accepts or rejects AI suggestions as whole units; rarely modifies them
- Uses simple, one-sentence prompts
- Sometimes commits AI code without full review under time pressure
- Does not yet have a systematic approach to when to use AI vs. code manually

**Development focus:** Build the habit of reviewing every AI suggestion. Practice writing multi-element prompts using the structure in [Prompt Engineering](/roles/developer/prompt-engineering). Complete the security awareness training.

### Level 2: Proficient (Intermediate)

**Profile:** You use AI tools effectively for a range of development tasks. You write structured prompts, review output carefully, and know when AI is likely to produce good versus poor results.

**Key competencies:**
- Writes structured prompts with context, task, constraints, and format elements
- Consistently reviews AI output for logic errors, security issues, and architectural fit
- Can debug AI-generated code effectively
- Uses AI for test generation with appropriate quality assessment
- Contributes to team prompt libraries
- Understands the limitations of current AI tools

**Typical behaviors:**
- Modifies and combines AI suggestions rather than accepting them wholesale
- Uses AI for boilerplate but codes complex logic manually
- Reviews AI-generated PRs with the checklist from [Code Review Responsibilities](/roles/developer/code-review-responsibilities)
- Tracks personal metrics (acceptance rate, rework rate)

**Development focus:** Expand your prompting techniques for advanced scenarios (refactoring, debugging, architecture). Begin mentoring Level 1 developers. Study the [Maturity Model](/pillars/maturity/) to understand organizational context.

### Level 3: Advanced

**Profile:** You are a go-to resource for AI-assisted development on your team. You design workflows, create reusable prompt templates, and identify opportunities for AI-driven improvement that others miss.

**Key competencies:**
- Designs end-to-end AI-assisted workflows for complex features
- Creates and maintains team prompt libraries and templates
- Evaluates AI tools and provides structured feedback for tooling decisions (see [Tooling Decisions](/roles/development-manager/tooling-decisions))
- Mentors other developers on effective AI usage
- Identifies and addresses systematic quality issues in AI-generated code
- Understands the architectural implications of AI-assisted development (see [Architecture Considerations](/roles/cto/architecture-considerations))

**Typical behaviors:**
- Combines multiple AI tools for different stages of development
- Designs prompts that produce near-production-ready code on first attempt
- Leads code review calibration sessions focused on AI-generated code
- Contributes to organizational standards and best practices

**Development focus:** Deepen architectural thinking about AI-augmented systems. Begin contributing to organizational strategy for AI adoption. Develop cross-functional communication skills.

### Level 4: Expert

**Profile:** You shape the organization's approach to AI-assisted engineering. You define standards, evaluate emerging tools and techniques, and drive continuous improvement across teams.

**Key competencies:**
- Defines organizational standards for AI-assisted development
- Evaluates and recommends AI tools at the enterprise level
- Designs training programs for developers at all levels
- Contributes to industry knowledge (conference talks, publications, open-source)
- Understands AI model capabilities and limitations at a technical level
- Can advise on build-vs-buy decisions for AI tooling (see [Build vs. Buy](/roles/cto/build-vs-buy))

**Typical behaviors:**
- Sets the direction for AI-assisted development practices across the organization
- Creates frameworks and playbooks used by multiple teams
- Participates in tooling evaluation and vendor selection
- Bridges the gap between technical implementation and organizational strategy

## Competency Matrix

Use this matrix for self-assessment and development planning. Rate yourself on each competency from 1 (no experience) to 5 (expert).

| Competency Area | Level 1 Target | Level 2 Target | Level 3 Target | Level 4 Target |
|----------------|---------------|---------------|---------------|---------------|
| **Prompt Design** | Basic single-prompt usage (2) | Multi-element structured prompts (3) | Template creation and optimization (4) | Organizational prompt strategy (5) |
| **Output Review** | Catches obvious errors (2) | Catches subtle logic and security issues (3) | Defines review standards for team (4) | Designs review processes for org (5) |
| **Security Practices** | Follows checklist (2) | Applies checks proactively (3) | Identifies novel vulnerability patterns (4) | Defines security standards for AI code (5) |
| **Testing with AI** | Generates basic tests (2) | Assesses AI test quality critically (3) | Designs AI testing strategies (4) | Sets organizational test standards (5) |
| **Tool Proficiency** | One tool, basic features (2) | One tool, advanced features (3) | Multiple tools, comparative expertise (4) | Tool evaluation and selection (5) |
| **Workflow Integration** | Uses AI ad hoc (2) | Integrated into daily workflow (3) | Designs workflows for team (4) | Designs workflows for organization (5) |
| **Mentoring** | N/A (1) | Can explain own practices (2) | Actively mentors teammates (4) | Designs training programs (5) |
| **Architectural Thinking** | Follows patterns (2) | Understands AI impact on architecture (3) | Designs AI-aware architectures (4) | Defines architectural standards (5) |

## Learning Resources

### Recommended Learning Path

**Months 1-3 (Foundation to Proficient):**
1. Complete your organization's AI tool onboarding
2. Read and practice all sections of this Developer Guide
3. Pair with an Advanced or Expert developer for at least 5 coding sessions
4. Complete the security awareness module and pass the assessment
5. Review 10+ PRs containing AI-generated code using the review checklist

**Months 4-6 (Proficient to Advanced):**
1. Create 5 reusable prompt templates and contribute to the team library
2. Lead a team session on prompt engineering techniques
3. Complete an AI/ML fundamentals course to understand model capabilities
4. Evaluate at least one new AI tool and write a structured assessment
5. Mentor a Level 1 developer through the Foundation stage

**Months 7-12 (Advanced to Expert track):**
1. Design and implement a team-level AI-assisted workflow improvement
2. Present findings at an internal tech talk or external meetup
3. Contribute to organizational standards documentation
4. Participate in tool evaluation and selection processes
5. Complete an advanced prompt engineering or AI engineering course

### Resource Categories

| Category | Examples | Purpose |
|----------|---------|---------|
| **Internal** | Team prompt libraries, past PR reviews, architecture decision records | Organization-specific context |
| **Courses** | AI pair programming workshops, prompt engineering courses, security training | Structured skill building |
| **Community** | Developer forums, AI-assisted coding communities, conference talks | Peer learning and emerging practices |
| **Practice** | Coding challenges with AI, hackathons, side projects | Hands-on skill development |

## Certification Path

The AEEF framework defines a certification path that validates AI-assisted development competency.

| Certification | Level Required | Assessment Method | Validity |
|--------------|---------------|-------------------|----------|
| **AEEF Foundation** | Level 1 complete | Online assessment + code review exercise | 1 year |
| **AEEF Practitioner** | Level 2 complete | Practical exam + portfolio review | 2 years |
| **AEEF Advanced Practitioner** | Level 3 complete | Peer assessment + project demonstration | 2 years |
| **AEEF Expert** | Level 4 demonstrated | Board review + organizational impact evidence | 3 years |

:::tip
Certification is not just about personal development. It provides your [Development Manager](/roles/development-manager/) with evidence for [Performance Management](/roles/development-manager/performance-management) decisions and helps your organization track adoption progress for [Board-Ready Metrics](/roles/executive/board-ready-metrics).
:::

## Tracking Your Progress

1. **Monthly self-assessment.** Rate yourself on the competency matrix and identify one area for focused improvement.
2. **Quarterly goals.** Set specific, measurable skill development goals aligned with your current level.
3. **Annual review.** Formally assess your level progression and update your development plan.
4. **Continuous sharing.** Document and share your learnings with your team to contribute to [Pillar 4: Continuous Improvement](/pillars/pillar-4-operating-model/).

---
title: "Training & Skill Development"
sidebar_position: 2
description: "Structured programs for developing AI-assisted development skills across the organization."
---

# Training & Skill Development

AI-assisted development is a skill, not an instinct. Giving developers access to AI tools without training is like giving a team a new programming language and expecting production code by Monday. This section defines the training curricula, skill assessment frameworks, learning paths, and certification programs that build AI-assisted development capabilities systematically across all engineering roles.

## Training Philosophy

The AEEF training approach is built on four principles:

1. **Progressive Depth**: Training moves from literacy to proficiency to mastery, with each level building on the previous one
2. **Role-Specific**: Different roles require different skills; one-size-fits-all training wastes time and misses critical needs
3. **Practice-Based**: AI-assisted development is a practical skill. Training MUST include hands-on exercises, not just theory
4. **Continuously Updated**: AI tools evolve rapidly. Training materials MUST be reviewed and updated quarterly

:::info
Training is not a one-time event. It is a continuous program. Organizations MUST budget for ongoing training, not just initial onboarding. The AI tools and best practices that are current today will be outdated within 12 months.
:::

## Skill Assessment Framework

Before designing training, organizations MUST assess current skill levels to identify gaps and prioritize investment.

### AI-Assisted Development Skill Matrix

| Skill Domain | Beginner (1) | Competent (2) | Proficient (3) | Expert (4) |
|-------------|-------------|---------------|-----------------|------------|
| **AI Tool Operation** | Can access and use basic features | Uses all standard features effectively | Configures tools for optimal performance | Evaluates and customizes tools for team needs |
| **Prompt Engineering** | Writes basic prompts with simple instructions | Constructs structured prompts with context | Designs multi-step prompts with constraints and examples | Creates reusable prompt templates, mentors others |
| **Context Preparation** | Includes minimal context | Selects relevant code and documentation | Curates optimal context packs for different scenarios | Designs context strategies for the team |
| **Output Evaluation** | Accepts/rejects based on obvious errors | Evaluates correctness, style, and edge cases | Assesses security, performance, and architectural fit | Defines evaluation criteria for the team |
| **Iterative Refinement** | Makes one attempt, then codes manually | Refines 2-3 times with improved prompts | Systematically refines using the [DCRI model](../pillar-3-productivity/workflow-optimization.md) | Optimizes refinement workflows for efficiency |
| **Quality & Security** | Aware that AI code needs review | Applies standard review practices to AI code | Applies enhanced review for [AI-specific risks](../pillar-2-governance-risk/index.md) | Designs quality gates and review processes |
| **Workflow Design** | Uses AI ad-hoc, no consistent pattern | Follows team workflow patterns | Designs and improves workflow patterns | Architects organizational workflow standards |
| **Mentoring & Teaching** | N/A | Can explain basic AI tool usage | Mentors team members in AI-assisted practices | Trains across the organization, contributes to curriculum |

### Assessment Process

1. **Self-Assessment**: Developers complete the skill matrix self-assessment (15 minutes)
2. **Peer Validation**: AI Champions validate self-assessments through brief observation (optional but RECOMMENDED)
3. **Gap Analysis**: Compare individual assessments to role-level expectations
4. **Training Prescription**: Assign learning path modules based on identified gaps

**Assessment Cadence:**
- Initial assessment: During onboarding or program launch
- Reassessment: Every 6 months
- Targeted assessment: After completing a training module or certification

## Training Curricula

### Tier 1: AI Literacy Fundamentals (All Engineering Staff)

**Duration**: 4 hours (can be split across 2 sessions)
**Format**: Instructor-led with hands-on exercises
**Prerequisites**: None

**Curriculum:**

| Module | Duration | Content |
|--------|----------|---------|
| 1.1 AI-Assisted Development Landscape | 45 min | What AI tools do, how they work (conceptually), industry adoption trends, organizational strategy |
| 1.2 Quality and Risk Awareness | 45 min | Documented quality risks (1.7x issues, 2.74x vulnerabilities), why review matters, the AEEF quality framework |
| 1.3 Hands-On Tool Introduction | 90 min | Basic tool usage, simple code generation, accepting/rejecting suggestions, basic prompting |
| 1.4 Organizational Standards | 60 min | Approved tools, prompt repository, workflow standards, quality gates, where to get help |

### Tier 2: Practitioner Skills (All Developers)

**Duration**: 12 hours (delivered over 2-3 weeks)
**Format**: Blended (instructor-led workshops + self-paced exercises + pair programming)
**Prerequisites**: Tier 1 completion

**Curriculum:**

| Module | Duration | Content |
|--------|----------|---------|
| 2.1 Prompt Engineering | 2 hours | Structured prompting, context inclusion, constraint specification, prompt patterns |
| 2.2 Context Preparation | 2 hours | Context types, preparation checklist, context packs, context window management |
| 2.3 The DCRI Workflow | 2 hours | Task decomposition, context preparation, iterative refinement, integration practices |
| 2.4 Output Evaluation | 2 hours | Code review for AI output, security checks, quality assessment, common AI failure modes |
| 2.5 Test Generation | 2 hours | AI-assisted test creation, assertion validation, coverage analysis, test strategy design |
| 2.6 Practical Workshop | 2 hours | End-to-end feature development using AI-assisted workflow, peer review |

### Tier 3: Advanced Practitioner (Senior Engineers, AI Champions)

**Duration**: 8 hours (delivered over 2 weeks)
**Format**: Workshop-based with real project exercises
**Prerequisites**: Tier 2 completion + 3 months of AI-assisted development experience

**Curriculum:**

| Module | Duration | Content |
|--------|----------|---------|
| 3.1 Advanced Prompt Design | 2 hours | Multi-step prompts, chain-of-thought, few-shot patterns, domain-specific prompting |
| 3.2 Workflow Architecture | 2 hours | Designing team workflows, automation library development, prompt repository curation |
| 3.3 Quality Gate Design | 2 hours | Designing AI-specific quality gates, static analysis configuration, security scanning |
| 3.4 Mentoring & Knowledge Transfer | 2 hours | Teaching AI-assisted development, peer coaching, community of practice facilitation |

### Tier 4: Leadership & Strategy (Engineering Managers, CoE Staff)

**Duration**: 6 hours
**Format**: Seminar with case studies
**Prerequisites**: Tier 1 completion + management role

**Curriculum:**

| Module | Duration | Content |
|--------|----------|---------|
| 4.1 Managing AI-Augmented Teams | 2 hours | [Estimation changes](../pillar-4-operating-model/estimation-planning.md), capacity planning, performance evaluation |
| 4.2 Change Management | 2 hours | [Change management strategies](../pillar-4-operating-model/change-management.md), resistance management, communication |
| 4.3 Metrics & ROI | 2 hours | [Metrics framework](../pillar-3-productivity/metrics-measurement.md), ROI calculation, stakeholder reporting |

## Learning Paths

### Path A: Developer (IC)

```
Tier 1 → Tier 2 → [3 months practice] → Tier 3 (optional) → Ongoing quarterly updates
```

### Path B: Engineering Manager

```
Tier 1 → Tier 4 → Tier 2 (abbreviated, hands-on awareness) → Ongoing quarterly updates
```

### Path C: AI Champion

```
Tier 1 → Tier 2 → [3 months practice] → Tier 3 → Champion-specific coaching → Ongoing monthly CoP
```

### Path D: QA Engineer

```
Tier 1 → Tier 2 (with QA-specific exercises) → [3 months practice] → Tier 3 Module 3.3 → Ongoing updates
```

### Path E: New Hire Onboarding

```
Tier 1 (Week 1) → Tier 2 (Weeks 2-4) → Buddy pairing with AI Champion (Months 1-3)
```

:::tip
New hires who have AI-assisted development experience from previous roles SHOULD take a placement assessment and may skip Tier 1 if they score at the Competent level or above on the skill matrix. They MUST still complete the Organizational Standards module (1.4) regardless of prior experience.
:::

## Certification Program

### Certification Levels

| Level | Name | Requirements | Validity |
|-------|------|-------------|----------|
| **Foundation** | AEEF AI-Assisted Developer | Tier 1 + Tier 2 completion + skills assessment at Competent (2) or above | 1 year |
| **Practitioner** | AEEF AI-Assisted Development Practitioner | Foundation + 6 months experience + skills assessment at Proficient (3) or above | 1 year |
| **Expert** | AEEF AI-Assisted Development Expert | Practitioner + Tier 3 completion + demonstrated contribution to prompt repository and workflows | 2 years |
| **Champion** | AEEF AI Champion | Expert + Tier 3 Module 3.4 + active Champion role for 6+ months | 2 years |

### Certification Maintenance

- Foundation and Practitioner certifications require annual renewal through a brief reassessment and completion of quarterly update modules
- Expert and Champion certifications require biennial renewal plus demonstrated ongoing contribution
- Certifications automatically expire if the holder does not complete required renewal activities
- Expired certifications can be reinstated through reassessment without repeating full training

:::warning
Certification MUST NOT be used as a gatekeeping mechanism that prevents developers from using AI tools. All developers with Tier 1 training may use approved AI tools. Certification is a recognition of skill level, not a prerequisite for tool access.
:::

## Training Delivery Standards

### Instructor Requirements

- Tier 1 and Tier 2 training MAY be delivered by AI Champions who have completed Tier 3
- Tier 3 training MUST be delivered by CoE staff or certified external trainers
- Tier 4 training MUST be delivered by CoE leadership or senior engineering leadership
- All instructors MUST have active, hands-on experience with AI-assisted development (not just theoretical knowledge)

### Training Environment

- All hands-on training MUST use the organization's approved AI tools in a sandboxed training environment
- Training environments MUST NOT have access to production code or data
- Training exercises SHOULD use realistic but fictional codebases that represent the organization's technology stack
- Training environments MUST be available for self-study after formal sessions

### Training Effectiveness Measurement

Training effectiveness MUST be measured and reported to the [CoE](./center-of-excellence.md):

| Metric | Target | Method |
|--------|--------|--------|
| Training completion rate | 95% within first 6 months | LMS tracking |
| Knowledge assessment pass rate | 85% first attempt | Post-training assessment |
| Skill level improvement | Average +1 level within 3 months | Skill matrix reassessment |
| Developer satisfaction with training | 4.0+ out of 5.0 | Post-training survey |
| On-the-job application rate | 80% using learned techniques within 2 weeks | Follow-up survey + telemetry |

## Continuous Learning

Beyond formal training, organizations MUST support continuous learning:

- **Monthly AI Tool Updates**: Brief sessions (30 minutes) covering new features, updated best practices, and lessons learned
- **Community of Practice**: Regular forums where developers share techniques, prompts, and experiences
- **External Learning Budget**: Allocate budget for developers to attend AI-related conferences and courses
- **Internal Knowledge Base**: Maintain a searchable repository of AI-assisted development tips, tricks, and case studies, linked to the [prompt repository](../pillar-3-productivity/index.md)
- **Pair Programming with AI**: Encourage regular pair programming sessions where developers collaborate on AI-assisted tasks, learning from each other's approaches

## Workforce Localization (Saudi Arabia)

Organizations operating in Saudi Arabia SHOULD track AI engineering skill development metrics aligned with national workforce localization (Nitaqat) targets and Vision 2030 workforce development goals. This section defines workforce development metrics and requirements for Saudi AI engineering programs.

### Saudization Alignment

AI-assisted engineering represents a strategic skill domain for Saudi workforce development. Organizations SHOULD treat AI engineering capability as a priority area for Saudi national development, aligned with SDAIA's goal of training 45,000+ data and AI professionals.

### Workforce Development Metrics

| Metric | Definition | Target | Measurement Method |
|---|---|---|---|
| Saudi national AI certification rate | Percentage of Saudi national engineers achieving AEEF Practitioner level or above | >= 80% of Saudi engineering staff within 6 months | Certification records cross-referenced with HR nationality data |
| Saudi AI Champion ratio | Percentage of AI Champions who are Saudi nationals | Proportional to workforce Saudization ratio, minimum 50% | Champion registry with nationality tracking |
| Saudi training completion rate | Saudi nationals completing Tier 2 or above training | >= 95% within 12 months of program launch | LMS completion records |
| Saudi leadership pipeline | Saudi nationals in AI CoE leadership or senior AI engineering roles | Increasing annually; target >= 60% of CoE leadership within 3 years | Organizational chart; role assignment records |
| Knowledge transfer completion | Percentage of expatriate AI specialists with active knowledge transfer plans | 100% of expatriate AI specialists | Knowledge transfer plan documentation |

### Knowledge Transfer Requirements

Expatriate AI specialists MUST have documented knowledge transfer plans for Saudi national counterparts:

1. Each expatriate AI specialist MUST be paired with at least one Saudi national counterpart for knowledge transfer.
2. Knowledge transfer plans MUST include specific skills, timeline, milestones, and assessment criteria.
3. Transfer progress MUST be reviewed quarterly by the CoE or engineering leadership.
4. Knowledge transfer completion MUST be a factor in expatriate performance evaluation.
5. Critical AI engineering knowledge MUST NOT be concentrated exclusively in expatriate staff.

### Partnership with Saudi Educational Institutions

Organizations SHOULD build AI engineering talent pipelines through partnerships with Saudi institutions:

- **University partnerships**: Establish internship and co-op programs with Saudi universities offering computer science, data science, and AI programs (e.g., KAUST, KSU, KFUPM, Princess Nourah University).
- **SDAIA training alignment**: Align internal training programs with SDAIA's national AI training initiatives to enable mutual recognition of certifications.
- **Hackathons and competitions**: Sponsor or participate in Saudi AI engineering competitions to identify and recruit talent.
- **Graduate programs**: Create structured graduate development programs that combine AEEF training tiers with mentorship from experienced AI Champions.

:::tip
Workforce localization metrics SHOULD be reported as part of the organization's contribution to the [SDAIA National AI Index](../pillar-2-governance-risk/naii-metrics-mapping.md) Human Capabilities dimension.
:::

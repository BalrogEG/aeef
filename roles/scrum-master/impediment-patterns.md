---
title: "Impediment Patterns & Solutions"
sidebar_position: 5
description: "Common impediments in AI-augmented teams and how to resolve them."
---

# Impediment Patterns & Solutions

AI-augmented development introduces impediment categories that traditional agile coaching does not cover. Tool access issues, quality concerns with AI output, skill gaps in prompt engineering, and team dynamics shifts all create new obstacles that scrum masters must be prepared to address. This section catalogs the most common patterns and provides proven resolution strategies, supporting [Pillar 4: Continuous Improvement](/pillars/pillar-4-operating-model/) through systematic impediment identification and resolution.

## Impediment Category Map

AI-related impediments cluster into five categories. Understanding the category helps you identify the right resolution owner and approach.

| Category | Frequency | Typical Impact | Resolution Owner |
|----------|-----------|---------------|-----------------|
| **Tool Access & Reliability** | High (especially early) | Blocks individual developers | IT/DevOps + Development Manager |
| **Quality & Trust Concerns** | High (ongoing) | Slows team adoption, creates rework | QA Lead + Development Manager |
| **Skill & Knowledge Gaps** | High (early), Medium (ongoing) | Reduces AI effectiveness, creates frustration | Development Manager + Senior Developers |
| **Process & Workflow Friction** | Medium | Slows delivery, causes confusion | Scrum Master + Team |
| **Team Dynamics & Culture** | Medium (early), Low (ongoing) | Damages collaboration, morale, retention | Scrum Master + Development Manager |

## Tool Access & Reliability Impediments

### Pattern 1: Delayed Tool Provisioning

**Symptoms:** Developers waiting days or weeks for AI tool access. Team members using personal accounts or unapproved tools.

**Root cause:** IT provisioning processes not updated for AI tools; licensing not pre-purchased; security review backlog.

**Resolution:**
1. Escalate to [Development Manager](/roles/development-manager/) immediately -- this is the most damaging early impediment
2. Implement the provisioning timeline from [Team Enablement](/roles/development-manager/team-enablement) (target: 3-day turnaround)
3. Pre-purchase licenses for the full team before kickoff
4. Create a fast-track security review process for pre-approved tools per [PRD-STD-001](/production/standards/PRD-STD-001-prompt-engineering)

### Pattern 2: Tool Unreliability

**Symptoms:** AI tool outages during business hours, slow response times, inconsistent output quality.

**Root cause:** Cloud service reliability issues; network configuration problems; tool provider infrastructure limitations.

**Resolution:**
1. Log every outage with timestamp and duration
2. Report to vendor through official support channels
3. Evaluate SLA commitments against actual availability
4. Identify backup workflows for tool-down scenarios (manual coding plans)
5. If persistent, escalate to [CTO](/roles/cto/) for vendor evaluation per [Tooling Decisions](/roles/development-manager/tooling-decisions)

### Pattern 3: Configuration Restrictions

**Symptoms:** AI tool works for some developers but not others. Features blocked by corporate firewall or security policies. IDE integration fails.

**Root cause:** Security policies not yet updated for AI tools; inconsistent developer environment configurations.

**Resolution:**
1. Document the working configuration from successful team members
2. Work with IT/Security to create an approved configuration template
3. Create a troubleshooting guide for common setup issues
4. Schedule a team setup session where everyone configures tools together

## Quality & Trust Concerns

### Pattern 4: Low Confidence in AI Output

**Symptoms:** Developers spending as much time reviewing AI code as writing it manually. High rejection rate of AI suggestions. Team questioning whether AI tools are worth the effort.

**Root cause:** Insufficient prompt engineering skills; unrealistic quality expectations; tool mismatch for codebase or language.

**Resolution:**
1. Assess prompt quality -- poor prompts produce poor output (see [Prompt Engineering](/roles/developer/prompt-engineering))
2. Run a prompt improvement workshop with examples from the team's own codebase
3. Set realistic expectations: AI output is a first draft, not a final product
4. Track the acceptance rate over time; improvement indicates growing proficiency
5. If output quality remains low after prompt optimization, evaluate alternative tools per [Tooling Decisions](/roles/development-manager/tooling-decisions)

### Pattern 5: Review Bottleneck

**Symptoms:** PR queue grows faster than it is reviewed. Stories marked "done" but awaiting merge. Developers context-switching between generation and review.

**Root cause:** Code generation outpacing review capacity. Insufficient review time allocated in sprint planning.

**Resolution:**
1. Rebalance sprint capacity per [Sprint Adaptation](/roles/scrum-master/sprint-adaptation)
2. Implement review pairing (assign reviewers during planning, not after PR creation)
3. Set a maximum PR queue depth -- when reached, all generation pauses until reviews catch up
4. Consider "review first" mornings where the first hour of each day is dedicated to reviews
5. Escalate to [Development Manager](/roles/development-manager/) if structural capacity issues persist

### Pattern 6: Hidden Quality Erosion

**Symptoms:** Sprint velocity looks good but escaped defects are increasing. Technical debt metrics rising. Customer complaints about new feature reliability.

**Root cause:** Superficial reviews of AI-generated code. "Looks good to me" culture. Test coverage not enforced.

**Resolution:**
1. Implement mandatory quality gates per [Quality & Risk Oversight](/roles/development-manager/quality-risk-oversight)
2. Run a code review calibration session (team reviews the same PR independently, then compares findings)
3. Enforce test coverage thresholds in CI per [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements)
4. Make quality metrics visible in standup and retrospective
5. Celebrate quality catches, not just speed

## Skill & Knowledge Gaps

### Pattern 7: Uneven AI Proficiency

**Symptoms:** Some developers are highly productive with AI while others struggle. Team velocity variance increases. Resentment or comparison between team members.

**Root cause:** Different learning speeds; unequal access to mentoring; varying levels of interest or willingness.

**Resolution:**
1. Pair Level 1 developers with Level 3+ developers for structured learning sessions
2. Protect dedicated learning time per [Team Enablement](/roles/development-manager/team-enablement)
3. Share effective prompts through a team prompt library (reduces the proficiency gap)
4. Avoid comparing individual AI usage metrics publicly
5. Track team-level metrics, not individual performance against each other

### Pattern 8: AI-Induced Skill Atrophy Concern

**Symptoms:** Senior developers worry about losing fundamental skills. Junior developers never learn to code without AI. Team avoids manual coding even when appropriate.

**Root cause:** Over-reliance on AI tools. Insufficient emphasis on foundational skills development.

**Resolution:**
1. Include "AI-free" tasks in each sprint to maintain manual coding skills
2. Require junior developers to solve problems manually before using AI on the same problem (for learning)
3. Ensure code review includes "can you explain this" conversations
4. Track the [Skill Development](/roles/developer/skill-development) competency matrix to ensure fundamentals are not degrading

## Process & Workflow Friction

### Pattern 9: Unclear AI Usage Expectations

**Symptoms:** Developers unsure when to use AI, when to code manually, what to disclose in PRs. Inconsistent practices across team members.

**Root cause:** AI usage policy not translated into concrete team-level guidelines.

**Resolution:**
1. Create team working agreements for AI tool usage
2. Reference [PRD-STD-001](/production/standards/PRD-STD-001-prompt-engineering) and create team-specific interpretations
3. Define PR template fields for AI disclosure
4. Discuss edge cases in retrospectives

### Pattern 10: Estimation Inaccuracy

**Symptoms:** Stories consistently over- or under-estimated. Sprint commitments missed or significantly exceeded. Product manager frustrated by unpredictable delivery.

**Root cause:** Traditional estimation models not adjusted for AI acceleration variability.

**Resolution:**
1. Implement the estimation techniques from [Estimation in an AI World](/roles/scrum-master/estimation-ai-world)
2. Use the AI suitability scoring system to differentiate story types
3. Track estimation accuracy by AI suitability category
4. Run monthly calibration exercises

## Team Dynamics & Culture

### Pattern 11: AI Anxiety

**Symptoms:** Team members expressing job security concerns. Reduced engagement. Resistance to AI tool usage. Conversations about career relevance.

**Root cause:** Uncertainty about how AI changes their role and career prospects. Insufficient communication from leadership.

**Resolution:**
1. Facilitate honest conversations about AI's impact on roles (see [Performance Management](/roles/development-manager/performance-management))
2. Emphasize the "human in the loop" principle -- AI is a tool, not a replacement
3. Share industry data showing increased demand for AI-skilled developers
4. Ensure [Performance Management](/roles/development-manager/performance-management) criteria reward AI-augmented skills
5. Monitor the [Team Health Indicators](/roles/scrum-master/team-health-indicators) anxiety score

### Pattern 12: AI Culture Divide

**Symptoms:** Team splits into "AI enthusiasts" and "AI skeptics." Collaboration decreases. Knowledge sharing stops across the divide.

**Root cause:** Insufficient facilitation of shared learning. Lack of psychological safety to express concerns.

**Resolution:**
1. Pair enthusiasts and skeptics on stories to build mutual understanding
2. Create structured knowledge-sharing forums (not just informal chat)
3. Validate both perspectives -- enthusiasm and caution are both valuable
4. Use retrospective formats that surface different viewpoints equitably
5. Focus team identity on outcomes and quality, not tool usage

:::warning
Unresolved team dynamics impediments will compound over time and can lead to attrition. Address these early, even if they seem less urgent than tool access or quality issues. A team that does not trust the process will not follow the process.
:::

## Impediment Resolution Tracking

Track all AI-related impediments in a dedicated register:

| Field | Purpose |
|-------|---------|
| Date identified | Timeline tracking |
| Category | Pattern classification |
| Description | Specific impediment |
| Impact | Blocked/Slowed/Annoying |
| Resolution owner | Who is responsible |
| Resolution date | When resolved |
| Root cause | What caused it |
| Prevention measure | How to prevent recurrence |

Review this register monthly and look for patterns. If the same category keeps appearing, the resolution is addressing symptoms, not root causes. Escalate persistent patterns to your [Development Manager](/roles/development-manager/) and [CTO](/roles/cto/).

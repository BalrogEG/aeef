---
title: "Ceremony Adjustments"
sidebar_position: 4
description: "Adjusting agile ceremonies for AI-augmented teams."
---

# Ceremony Adjustments

Every agile ceremony needs adaptation when a team adopts AI-assisted development. The changes are not dramatic -- they are targeted adjustments that surface AI-specific information, address new team dynamics, and ensure that quality and learning keep pace with accelerated delivery. This section provides specific, actionable adjustments for each ceremony, aligned with [Pillar 4: Continuous Improvement](/pillars/pillar-4-operating-model/).

## Daily Standup Adjustments

### Modified Format

Replace the traditional three-question format with a four-question format during the first 3 months of AI adoption:

| Question | Purpose | Time |
|----------|---------|------|
| "What did I complete yesterday?" | Standard progress tracking | 30 sec |
| "What am I working on today?" | Standard planning | 30 sec |
| "Are there any blockers?" | Standard impediment surfacing | 30 sec |
| "Any AI observations?" | Surface tool issues, quality concerns, or learning moments | 30 sec |

The fourth question explicitly creates space for AI-related observations that might otherwise go unmentioned. After 3 months, this question can be merged into the standard blocker/progress questions as the team develops the habit of surfacing AI-related information naturally.

### What to Listen For

As the scrum master, listen for these signals during standup:

| Signal | What It Might Mean | Your Action |
|--------|-------------------|-------------|
| "I spent a lot of time rewriting AI output" | Poor prompt quality or unsuitable task for AI | Facilitate a prompt improvement conversation; see [Prompt Engineering](/roles/developer/prompt-engineering) |
| "I'm still waiting on review for my PR" | Review queue building up; generation outpacing review | Rebalance; assign additional reviewer; see [Sprint Adaptation](/roles/scrum-master/sprint-adaptation) |
| "The AI kept generating the wrong pattern" | Tool limitation or insufficient context | Log as impediment; may need tool evaluation or team knowledge sharing |
| "I'm not sure the AI code is correct but tests pass" | Insufficient test quality or review confidence | Facilitate pair review session; engage [QA Lead](/roles/qa-lead/) |
| "I just used AI for everything today, it was great" | Possible over-reliance or insufficient review | Check quality metrics; have a private conversation about review rigor |

### Standup Anti-Patterns to Address

- **AI show-and-tell.** Standup devolves into sharing cool AI tricks. Keep it brief; save extended discussions for dedicated sharing sessions.
- **AI shaming.** Team members who code manually feel pressured to justify not using AI. Protect autonomy.
- **AI excusing.** "The AI generated a bug" used to avoid accountability. Reinforce that developers own their output regardless of how it was generated.

## Sprint Planning Adjustments

### Pre-Planning Preparation

Add these steps to your pre-planning routine:

1. **AI suitability pre-assessment.** Before planning, review the top candidate stories and tag them with estimated AI suitability (High/Medium/Low). This accelerates the planning conversation.
2. **Review capacity update.** Calculate the team's review capacity (not just development capacity). Ensure the sprint plan does not generate more code than the team can review. See [Sprint Adaptation](/roles/scrum-master/sprint-adaptation) for capacity formulas.
3. **Tool status check.** Confirm all AI tools are functioning and licenses are active. Tool outages during a sprint cause unexpected impediments.

### Planning Techniques

**Technique 1: AI Suitability-Weighted Planning Poker**

Modify planning poker to include AI suitability:
1. The product manager presents the story
2. Team members silently estimate both the traditional effort AND the AI suitability score
3. Reveal estimates simultaneously
4. Discuss divergences in both dimensions -- disagreement about AI suitability is especially valuable
5. Calculate the adjusted estimate using the technique from [Estimation in an AI World](/roles/scrum-master/estimation-ai-world)

**Technique 2: Generation-Validation Split**

For larger stories, break the estimate into generation and validation components during planning. This makes the review overhead visible and prevents it from being forgotten.

Example story card:
```
Story: Create user notification service
Estimate: 8 points total
  - Generation (coding + tests): 3 points
  - Validation (review + security + integration): 5 points
AI Suitability: 4/5
```

### Sprint Goal Framing

When framing the sprint goal, account for AI learning and improvement:

- **Delivery goal:** "Deliver the order management API with full test coverage"
- **Quality goal:** "Maintain defect density at or below the sprint 4 baseline"
- **Learning goal:** "Team completes prompt engineering workshop, module 3" (first 3 months only)

Including a quality goal and learning goal alongside the delivery goal reinforces that speed without quality is not success.

## Sprint Demo Adjustments

### Demo Structure

When demoing AI-augmented work to stakeholders:

1. **Lead with value.** Show the working feature, the customer impact, the business outcome. AI is the means, not the message.
2. **Show quality evidence.** Display test coverage, security scan results, and code review metrics. This builds confidence that AI acceleration is not compromising quality.
3. **Share one learning.** Include one brief (2-minute) insight about how AI contributed to or challenged the sprint work. This educates stakeholders and builds organizational knowledge.
4. **Avoid tool demos.** Unless specifically requested, do not demo the AI tool itself. Focus on the product, not the process.

### Stakeholder Questions to Prepare For

| Question | Suggested Response Framework |
|----------|------------------------------|
| "How much of this was AI-generated?" | "AI assisted throughout, but every line was reviewed and validated by our engineers. We measure quality, not origin." |
| "Can we go even faster now?" | "We are seeing [X%] improvement in throughput. We are also investing in quality assurance to ensure sustainable acceleration." See [Velocity & Quality Trade-offs](/roles/product-manager/velocity-quality-tradeoffs). |
| "Are we at risk with AI-generated code?" | "We apply enhanced review processes per our standards. Our defect metrics show [trend]. See [Quality & Risk Oversight](/roles/development-manager/quality-risk-oversight)." |

## Retrospective Adjustments

### AI-Focused Retrospective Formats

Run an AI-focused retrospective at least monthly during the first quarter of adoption, then quarterly thereafter.

**Format 1: The AI Partnership Review**

Divide a whiteboard or digital board into four quadrants:
1. **AI Amplified** -- Where did AI make us genuinely better?
2. **AI Complicated** -- Where did AI create more work or confusion?
3. **AI Missed** -- Where could AI have helped but we did not use it (or could not)?
4. **Human Essential** -- Where was human judgment clearly the right choice?

This format normalizes both the benefits and limitations of AI tools, creating a balanced team perspective.

**Format 2: The Quality Balance**

Focus on the quality dimension of AI-assisted development:
1. Each team member shares one quality win (caught an AI issue, wrote better tests, etc.)
2. Each team member shares one quality concern (something that worried them, a near-miss, etc.)
3. Team identifies the top 3 quality improvements to make next sprint
4. Team identifies the top 3 quality practices that are working well and should continue

**Format 3: The Confidence Check**

Focus on team health and skill development:
1. Anonymous confidence vote: "How confident are you in your AI-assisted development skills?" (1-5)
2. Discuss: "What would increase your confidence by one point?"
3. Identify specific actions: training, pairing, practice exercises
4. Feed results into the [Team Health Indicators](/roles/scrum-master/team-health-indicators) tracking

### Retrospective Topics by Adoption Phase

| Phase | Key Retro Topics |
|-------|-----------------|
| Month 1 | Tool usability, learning progress, initial quality observations, anxiety levels |
| Month 2-3 | Workflow optimization, prompt effectiveness, review process tuning, estimation accuracy |
| Month 4-6 | Sustainable practices, cross-team sharing, advanced techniques, long-term quality trends |
| Month 7+ | Continuous optimization, new tool evaluation, teaching others, industry benchmarking |

:::info
Share retrospective insights (anonymized) with your [Development Manager](/roles/development-manager/) to inform [Team Enablement](/roles/development-manager/team-enablement) decisions, and with other scrum masters to accelerate organizational learning.
:::

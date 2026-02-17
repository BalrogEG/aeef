---
title: "Performance Management"
sidebar_position: 6
description: "Performance management in AI-augmented engineering teams."
---

# Performance Management

AI-assisted development fundamentally changes what "good performance" looks like for software engineers. The developer who writes 200 lines of clean, well-tested code per day using AI is not necessarily outperforming the one who writes 50 lines of critical algorithm code by hand. Traditional metrics like code output, velocity points, and bug counts need reinterpretation. This section provides a revised performance framework that recognizes the new skills and behaviors required for AI-augmented engineering, aligned with [Pillar 5: Organizational Alignment](/pillars/pillar-5-organizational-enablement/).

## Revised Competency Framework

The following competency areas should replace or augment your existing engineering competency model for roles that involve AI-assisted development.

### Core Technical Competencies (Unchanged)

These fundamentals remain essential regardless of AI tool usage:

- Software design and architecture
- Data structures and algorithms
- Testing and quality assurance
- System debugging and troubleshooting
- Domain knowledge and business understanding

:::warning
AI tools make it possible for developers to produce code beyond their understanding. Ensure that performance evaluations assess comprehension, not just output. A developer who generates a microservice architecture with AI but cannot explain the trade-offs has a performance gap, not an achievement.
:::

### AI-Augmented Competencies (New)

Add these competencies to your evaluation framework:

| Competency | Definition | Beginner Indicators | Proficient Indicators | Expert Indicators |
|-----------|-----------|---------------------|----------------------|-------------------|
| **Prompt Effectiveness** | Ability to communicate requirements to AI tools clearly and precisely | Simple prompts, high iteration count | Structured prompts, 1-2 iterations | Template-quality prompts, first-attempt success |
| **AI Output Evaluation** | Ability to assess AI-generated code for correctness, security, and fit | Catches obvious errors | Catches subtle logic and security issues | Identifies systemic AI patterns and weaknesses |
| **Workflow Integration** | Effectiveness of AI integration into daily development workflow | Uses AI sporadically | Systematic AI usage with clear workflow | Designs AI workflows for the team |
| **Security Vigilance** | Awareness and mitigation of AI-specific security risks | Follows the checklist | Proactively identifies risks beyond the checklist | Defines security standards for AI code |
| **Knowledge Sharing** | Contributing to collective AI-assisted development knowledge | Asks good questions | Contributes to prompt library, shares tips | Mentors others, creates training content |
| **Tool Adaptability** | Ability to learn and evaluate new AI tools effectively | Proficient with one tool | Proficient with 2-3 tools, provides feedback | Evaluates tools, shapes tool strategy |

Map these competencies to the four skill levels defined in [Skill Development](/roles/developer/skill-development).

## Evaluation Criteria

### What to Evaluate

| Dimension | What Good Looks Like | Red Flags |
|-----------|---------------------|-----------|
| **Code Quality** | AI-assisted code meets team quality standards; low defect rate; clean reviews | Consistently high defect rate in AI-assisted code; rubber-stamps AI output |
| **Productivity** | Delivering more value (not just more code); cycle time improving | Volume increase with proportional quality decrease; gaming metrics |
| **Judgment** | Knows when to use AI and when to code manually; appropriate tool selection | Uses AI for everything indiscriminately; refuses to use AI for anything |
| **Collaboration** | Shares AI knowledge, contributes to prompt libraries, helps others improve | Hoards effective prompts; dismisses colleagues' AI approaches |
| **Growth** | Progressing on the competency matrix; actively learning | Stagnant skill level; not engaging with training or practice |
| **Responsibility** | Reviews AI code thoroughly; flags concerns; follows security practices | Commits unreviewed code; dismisses review feedback; bypasses security checks |

### What NOT to Evaluate

Do not use the following as performance indicators:

- **AI usage frequency.** Some tasks are better done manually. Penalizing low AI usage discourages good judgment.
- **Lines of code generated.** This incentivizes volume over value.
- **Number of AI suggestions accepted.** A high acceptance rate may indicate insufficient review.
- **Speed of AI-assisted task completion.** Fast is only valuable when it is also correct and secure.
- **Comparison to AI non-users.** Different developers have different optimal workflows. Comparing AI users to non-users is not meaningful.

## Career Conversations

### Reframing the Narrative

AI adoption triggers career anxiety for many developers. Address this directly in career conversations:

**For junior developers:** "AI tools give you the ability to be productive faster, but the fundamentals still matter. Your growth path is about building understanding -- not just building output. We will invest in your skill development alongside AI proficiency."

**For mid-level developers:** "Your value is shifting from 'writing code' to 'engineering solutions.' AI handles the routine work; your judgment, design skills, and domain knowledge are what make the output valuable. The [Skill Development](/roles/developer/skill-development) path shows how this translates to career growth."

**For senior developers:** "Your role in mentoring, architecture, and quality oversight is more important than ever. AI amplifies both good and bad engineering practices. You are the force multiplier that ensures AI makes the team better, not just faster."

### Growth Conversations by Level

| Developer Level | Career Focus | AI-Related Growth Goals |
|----------------|-------------|------------------------|
| Junior (0-2 yrs) | Build fundamentals, learn to evaluate AI output | Reach Level 2 on competency matrix within 6 months |
| Mid-Level (2-5 yrs) | Deepen domain expertise, start mentoring | Reach Level 3, contribute to prompt library, lead AI code review sessions |
| Senior (5-8 yrs) | Architecture, technical leadership, team impact | Reach Level 3-4, evaluate tools, define team AI practices |
| Staff+ (8+ yrs) | Organizational impact, strategy influence | Level 4, influence organizational AI strategy per [CTO Guide](/roles/cto/) |

## Recognition

### Behaviors to Recognize and Reward

- **Quality catches.** Developer identifies and prevents an AI-generated vulnerability from reaching production.
- **Knowledge multiplication.** Developer creates a prompt template that improves the entire team's output quality.
- **Honest limitation discovery.** Developer identifies a scenario where AI tools produce consistently poor results and documents the finding.
- **Effective mentoring.** Developer helps a colleague advance one level on the competency matrix.
- **Process improvement.** Developer suggests a workflow change that measurably improves team metrics.

### Recognition Formats

| Format | Frequency | Audience |
|--------|-----------|----------|
| Verbal acknowledgment in standup | As it happens | Team |
| Written recognition in team channel | Weekly | Team + org |
| Performance review documentation | Quarterly | Developer + manager |
| Nomination for organizational awards | As warranted | Organization |
| Conference talk or publication sponsorship | As warranted | Industry |

## Performance Review Adjustments

### Review Cycle Considerations

During the first year of AI adoption, consider these adjustments to your standard review cycle:

1. **Increase check-in frequency.** Move from quarterly to monthly performance conversations during the first 6 months of AI adoption. Reduce back to quarterly once patterns stabilize.
2. **Weight learning over output.** During the first 3 months, weight growth and learning metrics higher than productivity metrics.
3. **Adjust expectations.** There is a natural productivity dip during the first 2-4 weeks of AI tool adoption as developers learn new workflows. Do not penalize this transition period.
4. **Include AI competencies.** Add the AI-augmented competencies to your formal review template starting with the first review cycle after AI adoption begins.

:::info
Coordinate performance management changes with your [Scrum Master](/roles/scrum-master/) to ensure that sprint expectations are aligned with individual development goals. The [Sprint Adaptation](/roles/scrum-master/sprint-adaptation) section addresses how to account for learning time in sprint capacity.
:::

For the organizational perspective on performance management in AI-augmented teams, see [Organizational Design](/roles/cto/org-design) in the CTO Guide. For executive-level reporting on team development, see [Board-Ready Metrics](/roles/executive/board-ready-metrics).

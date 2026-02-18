---
title: "Cross-Team Knowledge Sharing"
sidebar_position: 4
description: "Programs for sharing AI-assisted development learnings across teams."
---

# Cross-Team Knowledge Sharing

This section covers structured knowledge sharing programs that accelerate AI-assisted development adoption across the organization. When pilot teams learn effective practices in isolation, the organization scales linearly. When those learnings are systematically shared, adoption scales exponentially. Knowledge sharing programs include communities of practice, internal showcases, shared prompt libraries, lessons-learned repositories, and mentoring programs. These programs MUST be operational by Week 7 of [Phase 2](/transformation/phase-2-expansion/) and continue through [Phase 3](/transformation/phase-3-enterprise-scale/) and beyond.

## Communities of Practice

A Community of Practice (CoP) for AI-assisted development is the primary organizational structure for knowledge sharing. It brings together practitioners across teams who share an interest in improving AI-assisted engineering practices.

### Community Charter

The AI-Assisted Development Community of Practice MUST be formally chartered with:

- **Purpose** — Share best practices, troubleshoot challenges, and collectively improve AI-assisted development quality and productivity across the organization
- **Membership** — Open to all developers with AI tool access; Team Champions (see [Phase 2 overview](/transformation/phase-2-expansion/)) MUST participate
- **Leadership** — The Knowledge Sharing Lead facilitates; two rotating co-chairs are elected from members every 6 months
- **Cadence** — Bi-weekly meetings (1 hour), alternating between structured sessions and open discussion
- **Communication** — Dedicated Slack/Teams channel, shared wiki space, and recorded sessions

### Meeting Formats

| Meeting Type | Frequency | Format | Duration |
|---|---|---|---|
| **Structured session** | Bi-weekly (alternating) | Presentation + discussion on a specific topic | 60 minutes |
| **Open forum** | Bi-weekly (alternating) | Q&A, troubleshooting, and experience sharing | 60 minutes |
| **Deep dive workshop** | Monthly | Hands-on session on advanced techniques | 90 minutes |
| **Retrospective** | Quarterly | Review community impact and plan next quarter | 60 minutes |

### Suggested Topic Calendar (First Quarter)

| Session | Topic | Format |
|---|---|---|
| Week 2 | "What pilot teams learned: top 5 lessons" | Structured presentation |
| Week 4 | Open forum: challenges in first month of expansion | Open discussion |
| Week 6 | "Effective prompts for [primary language] development" | Deep dive workshop |
| Week 8 | Open forum: code review patterns for AI-generated code | Open discussion |
| Week 10 | "Measuring AI impact: what our dashboards tell us" | Structured presentation |
| Week 12 | Quarterly retrospective and planning | Retrospective |

## Internal Showcases

Internal showcases provide a forum for teams to demonstrate successful AI-assisted development outcomes to a broader audience, including engineering leadership and stakeholders.

### Showcase Format

- **Frequency** — Monthly, 90-minute sessions
- **Audience** — All engineering staff, engineering leadership, and interested stakeholders
- **Structure**:
  1. Opening: Metrics update from the Knowledge Sharing Lead (10 minutes)
  2. Team presentations: 2-3 teams present case studies (20 minutes each)
  3. Q&A and discussion (20 minutes)
  4. Closing: Upcoming initiatives and call for next month's presenters (10 minutes)

### Case Study Template

Teams presenting at showcases SHOULD follow this structure:

1. **Context** — What was the project? What problem were they solving?
2. **Approach** — How did they use AI assistance? What prompts or patterns worked?
3. **Results** — Quantitative impact (velocity, quality, time saved) with comparison to baselines
4. **Challenges** — What did not work? What did they learn?
5. **Recommendations** — What would they do differently? What should other teams try?

Showcase recordings MUST be stored in the organization's knowledge management system and indexed for searchability.

## Prompt Libraries

A shared prompt library is a curated repository of effective prompts, organized by use case, language, and framework. It transforms individual developer knowledge into organizational intellectual property.

### Library Structure

The prompt library MUST be organized as follows:

```
prompt-library/
  ├── by-language/
  │   ├── python/
  │   ├── typescript/
  │   ├── java/
  │   └── go/
  ├── by-use-case/
  │   ├── code-generation/
  │   ├── test-generation/
  │   ├── code-review/
  │   ├── documentation/
  │   ├── refactoring/
  │   └── debugging/
  ├── by-framework/
  │   ├── react/
  │   ├── spring-boot/
  │   └── django/
  └── templates/
      ├── system-prompts/
      └── meta-prompts/
```

### Prompt Entry Requirements

Each prompt library entry MUST include:

| Field | Description | Required |
|---|---|---|
| Title | Descriptive name | Yes |
| Description | What the prompt does and when to use it | Yes |
| Category | Language, use case, and framework tags | Yes |
| Prompt text | The full prompt, including any system/context prompts | Yes |
| Example output | A representative example of the prompt's output | Yes |
| Effectiveness rating | Community rating (1-5) based on usage | Yes (after first review) |
| Author | Original contributor | Yes |
| Date | Date added or last updated | Yes |
| Known limitations | Scenarios where the prompt performs poorly | RECOMMENDED |
| Variations | Alternative versions for different contexts | RECOMMENDED |

### Library Governance

- **Contributions** — Any developer with AI tool access MAY submit prompts for inclusion
- **Review** — All submitted prompts MUST be reviewed by at least one Team Champion or Tech Lead before inclusion
- **Quality threshold** — Prompts MUST demonstrate consistent quality output across at least 5 independent tests before being rated as "verified"
- **Deprecation** — Prompts that become ineffective due to model changes SHOULD be archived, not deleted
- **Versioning** — The prompt library MUST be version-controlled (e.g., in a Git repository) with change history

## Lessons-Learned Repositories

Lessons learned from AI-assisted development — both successes and failures — MUST be systematically captured and made searchable.

### Collection Process

1. **Continuous capture** — Developers SHOULD log lessons learned as they occur using a lightweight form (title, description, category, impact)
2. **Sprint retrospectives** — AI-related lessons MUST be a standing agenda item in team retrospectives
3. **Incident post-mortems** — All AI-related incidents MUST include lessons learned in their post-mortem reports
4. **Quarterly synthesis** — The Knowledge Sharing Lead MUST synthesize individual lessons into thematic reports quarterly

### Categorization

| Category | Examples |
|---|---|
| **Effective patterns** | Prompts that consistently produce high-quality output; workflow techniques that save time |
| **Anti-patterns** | AI usage patterns that consistently produce poor results or create problems |
| **Failure modes** | Specific types of errors or vulnerabilities that AI tools introduce |
| **Governance learnings** | Insights about what governance processes work well and where friction exists |
| **Tool-specific** | Learnings about specific tool behaviors, updates, or quirks |

## Mentoring Programs

Mentoring accelerates adoption by pairing experienced AI-assisted developers with teams or individuals who are newer to the practice.

### Mentoring Structure

| Program | Mentor | Mentee | Duration | Commitment |
|---|---|---|---|---|
| **Team onboarding mentoring** | Pilot team developer | New expansion team (entire team) | 4 weeks | 2 hours/week |
| **Peer mentoring** | Team Champion | Individual developers on the same team | Ongoing | 1 hour/week |
| **Advanced techniques** | Expert practitioner | Experienced developers seeking advanced skills | 8 weeks | 1 hour/week |

### Mentor Responsibilities

Mentors MUST:
- Be available for scheduled and ad-hoc questions during the mentoring period
- Review at least 3 AI-assisted pull requests from their mentees and provide feedback
- Share relevant prompt library entries and lessons learned
- Report participation and outcomes to the Knowledge Sharing Lead

### Mentor Recognition

Organizations SHOULD formally recognize mentor contributions through:
- Acknowledgment in internal showcases
- Consideration in performance reviews (mentoring as a leadership competency)
- Community of Practice recognition awards (quarterly)

## Measuring Knowledge Sharing Effectiveness

| Metric | Target | Collection Method |
|---|---|---|
| Community of Practice attendance | >70% of Team Champions attend regularly | Meeting attendance records |
| Prompt library growth | 10+ new verified prompts per month | Library repository analytics |
| Showcase participation | >50% of engineering staff attend at least 1 per quarter | Event attendance |
| Lessons learned captured | >5 per team per quarter | Repository analytics |
| Mentor satisfaction | >4.0/5.0 from mentees | Survey |
| Time to proficiency for new teams | Decreasing trend over time | Onboarding metrics |

Knowledge sharing is the multiplier that transforms a phased rollout into an organizational capability. The structures defined here provide the scaffolding; the value comes from active, genuine participation by practitioners who are invested in collective improvement.

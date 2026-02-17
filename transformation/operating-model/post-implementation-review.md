---
title: "Post-Implementation Review"
sidebar_position: 7
description: "Review and learning after deployment of AI-assisted development outputs."
---

# Post-Implementation Review

The Post-Implementation Review (PIR) is the sixth and final stage of the [Operating Model Lifecycle](/transformation/operating-model/). It captures lessons learned, measures outcomes against the business intent defined in [Stage 1](/transformation/operating-model/business-intent/), identifies improvement opportunities, and feeds insights back into the AI-assisted development process. The PIR closes the feedback loop that makes the AEEF a self-improving system. Without it, the organization deploys code but never learns whether it achieved its goals or how the process could be improved. PIRs are REQUIRED for all standard and large initiatives; lightweight PIRs are RECOMMENDED for small tasks.

## Outcomes Measurement

### Measuring Against Business Intent

The primary purpose of the PIR is to determine whether the initiative achieved the outcomes defined in the [Business Intent Document](/transformation/operating-model/business-intent/). Every success criterion defined in Stage 1 MUST be evaluated.

| Evaluation | Criteria | Action |
|---|---|---|
| **Met** | Success criterion achieved within defined timeline | Document as achieved; capture contributing factors |
| **Partially met** | Success criterion partially achieved or achieved outside timeline | Document gap; analyze root cause; determine if further action is needed |
| **Not met** | Success criterion not achieved | Document failure; conduct root cause analysis; determine corrective action |
| **Not measurable** | Insufficient data to evaluate criterion | Document data gap; improve measurement for future initiatives |

### Measurement Timeline

Not all outcomes are immediately measurable. The PIR SHOULD be conducted in two phases:

| Phase | Timing | Focus |
|---|---|---|
| **Technical PIR** | 1-2 weeks after deployment | Code quality, security findings, operational stability, deployment smoothness |
| **Business PIR** | 4-8 weeks after deployment | Business outcomes, user adoption, performance against KPIs |

### Outcomes Measurement Template

| Success Criterion | Target | Actual | Status | Notes |
|---|---|---|---|---|
| [Criterion from Business Intent] | [Target value] | [Measured value] | Met / Partially Met / Not Met | [Analysis] |

## Lessons Learned

### Lesson Categories

Lessons learned MUST be captured across four dimensions:

#### 1. AI Effectiveness Lessons

| Question | Purpose |
|---|---|
| How effective was AI assistance for this initiative? | Assess overall AI value |
| Which tasks benefited most from AI? Which benefited least? | Identify optimal AI use cases |
| What prompt patterns were most effective? | Feed into the [Prompt Library](/transformation/phase-2-expansion/knowledge-sharing/) |
| Where did AI-generated code require the most hardening effort? | Improve hardening focus areas |
| Were there any AI-generated issues not caught until production? | Identify governance gaps |

#### 2. Process Lessons

| Question | Purpose |
|---|---|
| Did the time box for AI exploration feel appropriate? | Calibrate future time boxes |
| Was the hardening effort proportional to the exploration effort? | Validate hardening expectations |
| Did the governance gate process work smoothly? | Identify governance friction |
| Was the deployment strategy appropriate for the risk level? | Validate deployment approach |
| Were there any process steps that felt unnecessary or missing? | Refine the operating model |

#### 3. Quality Lessons

| Question | Purpose |
|---|---|
| What was the defect rate for this initiative vs. baseline? | Track quality trends |
| Were security findings during hardening typical or unusual? | Identify emerging patterns |
| Was test coverage adequate to catch issues? | Validate testing strategy |
| Did any production issues stem from AI-generated code? | Measure AI quality impact |

#### 4. Team Lessons

| Question | Purpose |
|---|---|
| Did the team feel well-prepared for AI-assisted development? | Assess training effectiveness |
| Were there skill gaps that affected outcomes? | Identify training needs |
| How did team collaboration change with AI tools? | Understand team dynamics |
| What would the team do differently next time? | Capture practical insights |

### Lesson Documentation Format

Each lesson MUST be documented with sufficient context for others to benefit:

```markdown
### Lesson: [Title]

**Category:** AI Effectiveness / Process / Quality / Team
**Initiative:** [Name and ID]
**Date:** [Date]
**Severity:** High / Medium / Low

**Observation:**
[What happened or was observed]

**Impact:**
[How this affected the initiative's outcome]

**Root Cause:**
[Why this happened]

**Recommendation:**
[What should be done differently in the future]

**Action Item:**
[Specific action, owner, and timeline]
```

## Improvement Recommendations

### Generating Recommendations

Each PIR MUST produce at least two actionable improvement recommendations. Recommendations SHOULD be specific, measurable, and assignable:

| Recommendation Type | Example | Owner |
|---|---|---|
| **Process improvement** | "Add a dependency validation step to the hardening checklist" | Governance Lead |
| **Training improvement** | "Add a module on handling async patterns in AI-generated code" | Training Lead |
| **Tool improvement** | "Configure AI tool to prefer parameterized queries by default" | Platform Engineering |
| **Prompt improvement** | "Create a domain-specific prompt for payment processing code" | Prompt Engineering Specialist |
| **Governance improvement** | "Reduce Tier 2 governance review turnaround from 2 days to 1 day" | Governance Lead |
| **Metric improvement** | "Add AI-attributed defect tracking to the sprint dashboard" | Metrics Analyst |

### Recommendation Prioritization

Recommendations MUST be prioritized using the impact/effort framework from [Continuous Improvement](/transformation/phase-3-enterprise-scale/continuous-improvement/):

| Priority | Impact | Effort | Action |
|---|---|---|---|
| **Quick win** | High | Low | Implement within 2 weeks |
| **Strategic** | High | High | Schedule for next quarter's improvement backlog |
| **Fill-in** | Low | Low | Include in the next batch improvement cycle |
| **Consider** | Low | High | Evaluate whether the ROI justifies the effort |

## Feedback Integration

### Where PIR Outputs Go

PIR outputs MUST be integrated into the following organizational processes:

| Output | Destination | Responsible |
|---|---|---|
| Lessons learned | Lessons-Learned Repository per [Knowledge Sharing](/transformation/phase-2-expansion/knowledge-sharing/) | PIR facilitator |
| Effective prompts | Organizational Prompt Library | Initiative developers |
| Process improvements | Continuous Improvement backlog | AI Engineering Excellence team |
| Training recommendations | Training curriculum update queue | Training Lead |
| Governance recommendations | Governance review agenda | Governance Lead |
| Metrics recommendations | Dashboard improvement backlog | Metrics Analyst |
| Tool recommendations | Tool evaluation pipeline | Platform Engineering Lead |

### Feedback Loop Verification

The AI Engineering Excellence team MUST verify quarterly that PIR recommendations are being actioned:

- **Recommendation tracking** — All recommendations are tracked in the improvement backlog with status updates
- **Implementation rate** — Target: > 70% of recommendations implemented within 90 days
- **Impact verification** — Implemented recommendations are measured for actual impact
- **Stale recommendation review** — Recommendations older than 90 days without action are reviewed and either prioritized or closed with justification

## PIR Meeting Structure

### Participants

| Role | Attendance | Purpose |
|---|---|---|
| Initiative Tech Lead | REQUIRED | Present technical findings |
| Initiative developers | REQUIRED | Share hands-on experience |
| Product Owner | REQUIRED (Business PIR) | Evaluate business outcomes |
| Security reviewer (if involved) | RECOMMENDED | Share security observations |
| Governance Lead | RECOMMENDED | Assess governance effectiveness |
| Team Champion | RECOMMENDED | Capture insights for the community |

### Agenda (60-90 minutes)

| Time | Activity | Facilitator |
|---|---|---|
| 10 min | Review business intent and success criteria | Product Owner |
| 15 min | Present outcomes measurement results | Tech Lead |
| 20 min | Discuss lessons learned (all four dimensions) | Facilitator (rotating role) |
| 15 min | Generate improvement recommendations | All |
| 10 min | Prioritize recommendations and assign owners | Tech Lead |
| 10 min | Summarize action items and next steps | Facilitator |

### PIR Ground Rules

- **Blameless** — The PIR focuses on process and outcomes, not individual performance
- **Evidence-based** — Claims are supported by data from metrics, logs, or documented observations
- **Forward-looking** — The focus is on what to improve, not what went wrong
- **Time-boxed** — PIRs MUST NOT exceed 90 minutes; extended discussion is taken offline
- **Documented** — The PIR report is published within 3 business days of the meeting

The Post-Implementation Review completes the Operating Model Lifecycle and connects it back to the beginning. The insights captured here improve future [Business Intent](/transformation/operating-model/business-intent/) definitions, refine [AI Exploration](/transformation/operating-model/ai-exploration/) practices, sharpen [Human Hardening](/transformation/operating-model/human-hardening/) checklists, and calibrate [Governance Gate](/transformation/operating-model/governance-gate/) criteria. This feedback loop is what transforms the AEEF from a static framework into a living, improving system.

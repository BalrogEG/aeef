---
title: "Stakeholder Expectation Setting"
sidebar_position: 3
description: "Setting realistic stakeholder expectations with AI-augmented teams."
---

# Stakeholder Expectation Setting

AI-assisted development creates a communication challenge: stakeholders hear "AI" and expect immediate, dramatic acceleration. The reality is more nuanced -- productivity gains are real but variable, quality requires deliberate investment, and the learning curve means benefits accumulate over months, not days. This section provides frameworks for communicating these realities to different stakeholder audiences without dampening enthusiasm or over-promising results.

## The Expectation Gap

Most stakeholders have a mental model of AI-assisted development that differs from reality:

| Stakeholder Expectation | Reality | The Gap |
|------------------------|---------|---------|
| "AI will double our engineering output immediately" | 20-40% improvement after 2-3 months of learning | Timeline and magnitude |
| "AI-generated code is as good as human code" | 1.7x more issues; 2.74x higher vulnerability rate without enhanced review | Quality assumptions |
| "We can reduce headcount since AI does the work" | AI augments developers; review and judgment needs increase | Role misunderstanding |
| "Every feature should be faster now" | Acceleration varies from 0% to 60% depending on task type | Uniformity assumption |
| "The productivity gains are permanent and growing" | Gains plateau after initial adoption; returns diminish | Growth trajectory |

Your job is to close these gaps before they create unrealistic commitments or disappointment.

## Communication Frameworks by Audience

### Communicating to Executives / Board

**Key message:** "AI-assisted development is delivering measurable productivity improvements within a governance framework that manages quality and security risks."

**Narrative structure:**
1. **Investment summary:** What we have invested in tools, training, and process changes
2. **Results to date:** Specific productivity metrics with quality metrics alongside (never present speed without quality)
3. **Risk posture:** How we are managing the known risks per [PRD-STD-006](/production/standards/PRD-STD-007-quality-gates)
4. **Forward outlook:** Expected trajectory with confidence ranges
5. **Decision points:** Upcoming investment decisions or escalations that need executive input

**Data to include:**
- Cycle time trend (before and after AI adoption)
- Throughput trend with quality overlay
- Security findings trend
- Team health composite score
- ROI progress against the [Investment & ROI Framework](/roles/executive/investment-roi)

:::warning
Never present productivity gains without quality context. A slide showing "40% throughput increase" without showing the defect trend is misleading and will create expectations that cannot be sustained if quality issues emerge later.
:::

### Communicating to Business Stakeholders

**Key message:** "We can deliver more value per quarter, with better quality confidence, but delivery timelines are ranges, not fixed points."

**Narrative structure:**
1. **What has changed:** Our engineering team is using AI tools that accelerate certain types of work
2. **What it means for your priorities:** Features in [specific category] can be delivered faster; features in [other category] take the same time
3. **How to work with us:** Provide clear, detailed requirements; expect range-based timelines; participate in prototype reviews
4. **What to expect next quarter:** Specific feature commitments with confidence levels

**Talking points for common questions:**

| Question | Suggested Response |
|----------|-------------------|
| "Can you deliver my feature sooner now?" | "Potentially. It depends on the nature of the work. Let us assess AI suitability and give you a revised range." |
| "Why isn't everything faster?" | "AI accelerates pattern-based work significantly but has less impact on novel logic, security-critical code, and complex integrations." |
| "Should I be worried about quality?" | "No. We have enhanced our review and testing processes specifically for AI-assisted code. Our quality metrics are [stable/improving]." |
| "Can you take on more scope?" | "We can explore that. Let us prototype the additional scope to validate feasibility before committing." |

### Communicating to Engineering Peers (Other Teams)

**Key message:** "Here is what we have learned, including what worked and what did not, so you can adopt more effectively."

**Share openly:**
- Velocity data by story type
- Quality metrics including defect patterns
- Tool evaluations and recommendations
- Prompt libraries and effective patterns
- Impediment log and resolution strategies

### Communicating Variable Velocity

Variable velocity is the concept most stakeholders struggle to understand. Use these techniques:

**Technique 1: The Weather Forecast Analogy**

"Think of our delivery forecast like a weather forecast. We can tell you it is going to be warm this week, but not the exact temperature each day. AI makes our average delivery faster, but any individual sprint might be above or below that average. We plan with ranges, not precise points."

**Technique 2: The Traffic Analogy**

"Getting to the airport is faster at 6 AM than at 5 PM, but you cannot predict exactly how long the drive will take. AI is like moving your commute earlier -- faster on average, but the specific trip time varies. We commit to arriving before the flight leaves (range), not at an exact time (point estimate)."

**Technique 3: The Portfolio View**

Show a visual of your quarterly plan with three scenarios:

| Feature | Conservative | Expected | Optimistic |
|---------|-------------|----------|------------|
| Feature A | Delivered | Delivered | Delivered |
| Feature B | Delivered | Delivered | Delivered |
| Feature C | In progress | Delivered | Delivered |
| Feature D | Not started | In progress | Delivered |
| Feature E | Not started | Not started | In progress |

"We are confident in A and B. C and D are in our expected range. E is a stretch goal."

## Managing Unrealistic Expectations

### When Stakeholders Push for More

If a stakeholder insists on treating AI acceleration as guaranteed:

1. **Acknowledge the desire.** "I understand you want to commit to the aggressive timeline."
2. **Present the data.** "Our team's actual acceleration has been [X%] with [Y%] variance. The aggressive timeline assumes [Z%] acceleration with zero variance."
3. **Offer the range.** "I can commit to [conservative date] with high confidence, [expected date] with moderate confidence, and note [optimistic date] as possible but uncertain."
4. **Propose a checkpoint.** "Let us commit to the first milestone and reassess the timeline based on actual progress."

### When Quality Concerns Arise

If a stakeholder questions the quality of AI-assisted work:

1. **Share the data.** "Our defect metrics show [trend]. We are [at/below/above] our pre-AI baseline."
2. **Explain the process.** "Every AI-generated code undergoes enhanced review per our [AEEF Standards](/production/standards/). The review process is more rigorous than before, not less."
3. **Reference the framework.** "Our quality governance follows [PRD-STD-002](/production/standards/PRD-STD-002-code-review) for code review and [PRD-STD-003](/production/standards/PRD-STD-003-testing-requirements) for testing. These standards were specifically designed for AI-assisted development."

## Expectation Setting Calendar

Build stakeholder communication into your regular cadence:

| Timing | Activity | Audience | Content |
|--------|----------|----------|---------|
| Sprint end | Demo + metrics | Business stakeholders, engineering peers | Features delivered, quality metrics, next sprint preview |
| Monthly | Progress update | Executives, business stakeholders | Roadmap progress, velocity trends, risk posture |
| Quarterly | Planning review | All stakeholders | Quarterly results, next quarter plan with ranges, investment asks |
| As needed | Escalation | Executives | Significant velocity change, quality concern, or tool issue |

:::tip
Over-communicate early in the AI adoption journey. Set expectations before they form themselves. It is much easier to frame the narrative proactively than to correct misconceptions reactively.
:::

For the quality-velocity trade-off analysis that supports these conversations, see [Velocity & Quality Trade-offs](/roles/product-manager/velocity-quality-tradeoffs). For executive-specific metrics, see [Board-Ready Metrics](/roles/executive/board-ready-metrics).

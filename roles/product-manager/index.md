---
title: "Product Manager Guide"
sidebar_position: 1
description: "Guide for product managers working with AI-augmented engineering teams."
---

# Product Manager Guide

AI-assisted development is transforming what your engineering teams can deliver and how fast they can deliver it. As a product manager, you need to understand these changes not to manage the technical details but to recalibrate your planning, adjust your stakeholder communications, and make smarter trade-off decisions. The teams you partner with may be delivering 20-40% more throughput, but that speed comes with new quality dynamics -- AI co-authored code has 1.7x more issues and 2.74x higher vulnerability rates, which means your definition of "done" and your quality expectations need updating.

## Why This Matters for Product Managers

You may think AI-assisted development is an engineering concern. It is not -- it directly impacts your world:

| Product Management Area | How AI Changes It |
|------------------------|------------------|
| **Roadmap planning** | Faster delivery means you can commit to more, but variable velocity makes commitments less certain |
| **Stakeholder expectations** | Leadership expects AI to make everything faster; reality is more nuanced |
| **Quality decisions** | You must actively choose the quality-velocity balance, not leave it to engineering defaults |
| **User stories** | How you write stories affects how well AI tools can assist with implementation |
| **Feature feasibility** | Some features that were "too expensive" are now feasible; some that seem easy have hidden complexity |

## What This Guide Covers

| Section | What You Will Learn | Key Decision It Supports |
|---------|-------------------|--------------------------|
| [Roadmap Planning](/roles/product-manager/roadmap-planning) | How accelerated timelines change planning horizons and feasibility assessments | Which features to commit to and when |
| [Stakeholder Expectations](/roles/product-manager/stakeholder-expectations) | How to communicate variable velocity and quality considerations | Setting realistic expectations with executives and customers |
| [Velocity & Quality Trade-offs](/roles/product-manager/velocity-quality-tradeoffs) | When speed creates hidden costs and how to balance acceleration | Making informed quality-velocity decisions |
| [User Stories for AI](/roles/product-manager/user-stories-ai) | Writing stories that maximize AI effectiveness and ensure quality | Improving story quality for AI-augmented teams |

## Core Concepts

### The Productivity-Quality Equation

AI-assisted development does not simply make teams faster. It changes the relationship between speed and quality:

- **Without AI:** Quality is primarily a function of developer skill and review rigor. Speed is limited by writing speed.
- **With AI:** Quality is primarily a function of review rigor and prompt quality. Speed is limited by review capacity.

This means that **you, as the product manager, have more influence over the quality-velocity balance than before.** When you push for speed, you are implicitly reducing review time. When you insist on quality, you are investing in the reviews that catch the 1.7x issue rate. Understanding this dynamic is essential for every planning and prioritization conversation.

### Variable Velocity

Pre-AI velocity was relatively stable -- your team delivered roughly the same amount per sprint, with occasional variations. AI-augmented velocity is inherently more variable:

- Stories with high AI suitability (standard patterns, boilerplate) complete much faster than before
- Stories with low AI suitability (novel logic, security-critical code) complete at roughly the same speed
- The mix of story types determines the sprint's actual velocity

This means you need range-based planning rather than point-estimate planning. See [Roadmap Planning](/roles/product-manager/roadmap-planning) for specific techniques.

## Key Relationships

| Role | How You Interact | What to Know |
|------|-----------------|-------------|
| [Development Manager](/roles/development-manager/) | Capacity discussions, quality trade-offs, tool investment | They manage the team's AI adoption; ask them for [Metrics That Matter](/roles/development-manager/metrics-that-matter) data |
| [Scrum Master](/roles/scrum-master/) | Sprint planning, estimation, ceremony participation | They are recalibrating estimation techniques; see [Estimation in an AI World](/roles/scrum-master/estimation-ai-world) |
| [Developer](/roles/developer/) | Story refinement, feasibility discussions, demo reviews | They are learning new workflows; respect their learning curve |
| [Executive](/roles/executive/) | Roadmap communication, expectation management | They want faster delivery; help them understand the quality equation |
| [QA Lead](/roles/qa-lead/) | Quality standards, acceptance criteria, defect triage | They are adapting testing strategies; involve them in quality decisions |

## Getting Started

1. Read [Velocity & Quality Trade-offs](/roles/product-manager/velocity-quality-tradeoffs) first -- this is the conceptual foundation
2. Update your planning approach using [Roadmap Planning](/roles/product-manager/roadmap-planning)
3. Prepare your stakeholder communication strategy from [Stakeholder Expectations](/roles/product-manager/stakeholder-expectations)
4. Begin writing AI-optimized user stories using [User Stories for AI](/roles/product-manager/user-stories-ai)

:::info
You do not need to become a technical expert in AI tools. You need to understand how AI changes delivery dynamics so you can make better product decisions. This guide gives you exactly that -- the PM perspective on AI-assisted engineering.
:::

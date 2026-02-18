---
title: "Threat Modeling AI-Assisted Code"
sidebar_position: 3
description: "Practical threat modeling for rapid AI-generated changes."
---

# Threat Modeling AI-Assisted Code

## Lightweight Model (10 Minutes)

1. Identify trust boundaries touched by the change.
2. List attacker entry points (API, UI, async jobs, third-party callbacks).
3. Map failure impact (data leak, privilege escalation, service disruption).
4. Define one preventive control and one detective control per high-risk path.
5. Add verification tests before merge.

## AI-Specific Threat Patterns

- Hallucinated library calls with insecure defaults
- Missing input constraints from generated handlers
- Broken permission checks due to copied patterns
- Hidden data exposure in debug logging

## Deliverable

Add a short threat note in the PR:

- Threat surface changed
- Top risks
- Controls added
- Residual risks accepted

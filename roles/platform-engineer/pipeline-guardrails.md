---
title: "Pipeline Guardrails"
sidebar_position: 2
description: "CI/CD controls that enforce PRD-STD gates automatically."
---

# Pipeline Guardrails

## Reference Gate Sequence

1. Build and lint
2. Unit and integration tests
3. Coverage threshold validation
4. Security scans (SAST + SCA)
5. Dependency license checks
6. Release readiness report

## Blocking Policy

- Fail pipeline on Critical/High security issues.
- Fail pipeline when test coverage drops below team baseline.
- Fail pipeline when prohibited licenses are detected.

## Operational Guidance

- Keep false-positive suppression centrally governed.
- Time-box non-blocking checks to protect feedback speed.
- Include gate summaries in PR comments for transparency.

---
title: "Research Evidence & Assumption Register"
sidebar_position: 2
description: "Evidence sources, confidence ratings, and validation requirements for AEEF benchmark claims."
---

# Research Evidence & Assumption Register

AEEF uses a mix of external research, regulatory texts, and implementation assumptions. This page separates what is externally evidenced from what must be validated within each organization.

## How to Use This Page

- Treat this page as the source of truth for framework-level claims used across AEEF.
- For any KPI target used in your organization, replace framework defaults with your own baseline measurement within 90 days.
- Re-validate external sources at least quarterly.

## Evidence Quality Scale

| Grade | Meaning |
|---|---|
| **A** | Primary source (official standard, regulator, peer-reviewed publication, or original dataset) |
| **B** | Vendor or industry report with published methodology |
| **C** | Directional claim requiring local validation before use in governance decisions |

## Key Claim Register

| Claim in AEEF v1.0 | Evidence Status | Grade | Required Action |
|---|---|---|---|
| "92% of US developers use AI coding tools" | Supported by GitHub developer survey reporting 92% US developer usage at publication time | B | Re-check annually against current survey data |
| "AI co-authored code has 1.7x more issues" | No stable public primary citation currently pinned in AEEF | C | Replace with organization-specific defect baseline until externally verified |
| "AI co-authored code has 2.74x higher vulnerability rate" | Present in vendor security reporting; methodology must be reviewed before policy use | B/C | Use as directional risk signal only; calibrate with internal security metrics |
| AI governance obligations are increasing (EU/US/sectoral) | Supported by formal regulatory and standards publications | A | Maintain legal review cadence and jurisdiction mapping |

## Source Library

### Adoption and Productivity

- GitHub Blog: *Survey reveals AI's impact on the developer experience*  
  https://github.blog/news-insights/research/survey-reveals-ais-impact-on-the-developer-experience/
- Stack Overflow Developer Survey 2024 (AI tools section)  
  https://survey.stackoverflow.co/2024/technology#1-ai-search-and-developer-tools
- Perry et al. (2022), Microsoft Research/GitHub Copilot controlled experiment (developer productivity)  
  https://arxiv.org/abs/2211.03622

### Security and Code Risk

- Pearce et al. (CACM), *Asleep at the Keyboard? Assessing the Security of GitHub Copilot's Code Contributions*  
  https://cacm.acm.org/research/asleep-at-the-keyboard-assessing-the-security-of-github-copilots-code-contributions/
- Pearce et al. preprint (method details)  
  https://arxiv.org/abs/2108.09293
- CodeRabbit state report announcement (vendor dataset; requires local validation before policy thresholds)  
  https://www.businesswire.com/news/home/20250612710368/en/CodeRabbit-Releases-First-State-of-AI-Code-Quality-Report

### Governance, Risk, and Compliance

- NIST AI Risk Management Framework 1.0  
  https://www.nist.gov/itl/ai-risk-management-framework
- EU AI Act (Regulation (EU) 2024/1689)  
  https://eur-lex.europa.eu/eli/reg/2024/1689/oj
- ISO/IEC 42001 (AI management system standard overview)  
  https://www.iso.org/standard/81230.html

## Governance Rules for Claims

1. AEEF policy controls MUST NOT rely exclusively on Grade C claims.
2. KPI thresholds used for executive reporting MUST be tied to internal baseline data.
3. Any external claim older than 18 months SHOULD be marked for revalidation.
4. Security claims from vendor reports MUST be treated as directional unless independently replicated.

## Quarterly Validation Checklist

- [ ] Re-run source checks for all Grade B/C claims.
- [ ] Confirm links are still accessible and current.
- [ ] Replace stale adoption/security multipliers with newer evidence where available.
- [ ] Update cross-references in: `docs/about/index.md`, `docs/pillar-1-engineering-discipline/index.md`, `docs/pillar-2-governance-risk/index.md`, `docs/kpi/index.md`, and `transformation/index.md`.


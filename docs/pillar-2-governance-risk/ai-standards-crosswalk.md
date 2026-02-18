---
title: "AI Standards Crosswalk"
sidebar_position: 7
description: "Crosswalk between AEEF and major AI engineering, security, and compliance frameworks."
---

# AI Standards Crosswalk

This crosswalk compares AEEF with major AI engineering and governance frameworks that organizations commonly use for policy and audit programs. It is intended to identify where AEEF is already strong, where adapters are required, and which controls should be implemented first.

**Assessment date:** February 18, 2026

## Framework Scope and AEEF Coverage

| Framework | Primary Focus | Current AEEF Coverage | Remaining Gap | Priority |
|---|---|---|---|---|
| ISO/IEC 42001:2023 | AI management system (AIMS) requirements | Strong governance process coverage in Pillar 2 and transformation tracks | Clause-level certification evidence package and internal audit cadence | High |
| ISO/IEC 23894:2023 | AI risk management guidance | Strong security and risk controls in [Security Risk Framework](./security-risk-framework.md) | Explicit risk treatment register format aligned to 23894 vocabulary | Medium |
| NIST AI RMF 1.0 | Govern/Map/Measure/Manage lifecycle | Strong policy + measurement baseline in Pillar 2 and KPI framework | Formal RMF function-to-control traceability matrix | Medium |
| NIST SP 800-218 (SSDF) | Secure software development practices | Strong SDLC controls across PRD-STD-002/003/004/007/008 | Explicit SSDF practice-level evidence mapping | Medium |
| OWASP Top 10 for LLM Applications | LLM app-layer threats | Partial coverage through prompt governance and secure coding standards | Direct mapping for LLM-specific controls (prompt injection, output handling, agent misuse) | High |
| EU AI Act (Regulation (EU) 2024/1689) | Legal obligations for AI systems in EU | Baseline governance controls exist | Article-by-article legal mapping and role-specific operational controls | High |
| KSA PDPL + NCA controls + DGA controls | Saudi legal/privacy/cyber/government obligations | Baseline governance model exists | Regional profile implementation and audit evidence model | High |

## Where AEEF Is Already Strong

1. Change governance and human review controls.
2. Provenance, audit retention, and gate-based deployment control.
3. Secure SDLC controls: SAST/SCA/secrets scanning and remediation SLAs.
4. Policy and maturity model structure that supports adaptation by profile.

## Priority Enhancements Introduced

This release adds profile-oriented governance extensions in the following pages:

1. [ISO 42001 Certification Readiness](./iso-42001-certification-readiness.md)
2. [KSA Regulatory Profile](./ksa-regulatory-profile.md)
3. [Government (Middle East) Profile](./government-middle-east-profile.md)

## Implementation Sequence

1. Implement ISO 42001 readiness controls and evidence model.
2. Apply KSA profile for PDPL/NCA/DGA alignment.
3. Apply government profile overlay for public-sector delivery.
4. Add legal-jurisdiction overlays (for example EU AI Act detailed controls) as needed by deployment geography.

## Evidence and Source Anchors

- ISO/IEC 42001 overview: https://www.iso.org/standard/81230.html
- ISO/IEC 42006 overview: https://www.iso.org/standard/44522.html
- ISO/IEC 23894 overview: https://www.iso.org/standard/77304.html
- NIST AI RMF: https://www.nist.gov/itl/ai-risk-management-framework
- NIST SSDF SP 800-218: https://csrc.nist.gov/pubs/sp/800/218/final
- OWASP LLM Top 10: https://owasp.org/www-project-top-10-for-large-language-model-applications/
- EU AI Act (official text): https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng


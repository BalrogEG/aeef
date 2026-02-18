---
title: "KSA Regulatory Profile"
sidebar_position: 9
description: "Saudi Arabia profile overlay for AEEF: PDPL, NCA controls, DGA controls, and sector-specific security obligations."
---

# KSA Regulatory Profile

This profile adapts AEEF to Saudi Arabia requirements for privacy, cybersecurity, and government digital controls. It is designed as an overlay on top of core AEEF controls, not a replacement.

## Applicability

Apply this profile when any of the following are true:

1. Data subjects, systems, or operations are in Saudi Arabia.
2. Delivery is for Saudi government or government-linked entities.
3. Contracts require Saudi cybersecurity or data residency compliance.

## KSA Baseline Sources

### Privacy and Data Protection

- Saudi Data and Artificial Intelligence Authority (SDAIA) Personal Data Protection Law (PDPL) knowledge center and regulations.

### Cybersecurity Controls

- National Cybersecurity Authority (NCA) Essential Cybersecurity Controls (ECC), version 2-2024.
- NCA Cloud Cybersecurity Controls (CCC), version 2-2024.
- NCA Digital Cybersecurity Controls (DCC-1:2022).
- NCA Cybersecurity Controls for Sensitive Systems (CSCC-1:2019).

### Government Digital Controls

- Digital Government Authority (DGA) IT Governance Controls for Digital Government, version 2.0 (published October 17, 2024).

### Sector Overlay (as applicable)

- Saudi Central Bank (SAMA) Cyber Security Framework (for financial-sector implementations).

## KSA Overlay Control Set

| KSA Control ID | Control Requirement | AEEF Integration Point |
|---|---|---|
| KSA-01 | Classify all AI prompt/context data by Saudi data sensitivity and legal constraints before use in AI tools | [Pillar 2 Overview](./index.md), [Prompt Governance](./index.md#2-prompt-governance) |
| KSA-02 | Enforce data residency and cross-border transfer checks for AI tooling and telemetry | [Compliance & Regulatory Alignment](./compliance-regulatory.md) |
| KSA-03 | Maintain KSA-approved AI tool list with legal/security sign-off and annual revalidation | [Pillar 2 Overview](./index.md), [Retention & Audit Evidence Policy](./retention-audit-policy.md) |
| KSA-04 | Map AI-assisted SDLC controls to NCA ECC/CCC/DCC/CSCC obligations and retain audit evidence | [Code Provenance & Attribution](./code-provenance.md) |
| KSA-05 | Add DGA control mapping for government projects and track compliance exceptions | [Incident Response](./incident-response.md), [Compliance & Regulatory Alignment](./compliance-regulatory.md) |
| KSA-06 | Require Arabic + English versions for policy and runbook artifacts on government-facing services | [PRD-STD-005 Documentation](/production/standards/PRD-STD-005-documentation/) |
| KSA-07 | Apply sector overlay controls (for example SAMA CSF) where contract or regulator requires | [Security Risk Framework](./security-risk-framework.md) |

## PDPL + GDPR Dual-Jurisdiction Guidance

For organizations serving both EU and KSA jurisdictions:

1. Treat GDPR and PDPL requirements as cumulative when both may apply.
2. Use the stricter obligation where obligations differ.
3. Maintain a jurisdictional data-flow inventory and legal basis registry.
4. Include transfer and localization controls in tool onboarding reviews.

## PSSI Integration

Some organizations use **PSSI** terminology (Information Systems Security Policy) for internal policy architecture. In this profile, PSSI is handled as an internal control wrapper:

1. PSSI MUST incorporate this KSA profile as a mandatory annex for Saudi operations.
2. PSSI control identifiers SHOULD trace to AEEF and KSA control IDs.
3. PSSI exceptions MUST follow the same waiver and audit rules defined in AEEF governance.

## KSA Audit Readiness Checklist

- [ ] KSA legal scope register is current.
- [ ] AI tool inventory includes KSA approval status and hosting location.
- [ ] Cross-border transfer assessment exists for all in-scope toolchains.
- [ ] NCA control mapping matrix is documented and evidence-backed.
- [ ] Government projects include DGA mapping and exception tracking.
- [ ] Sector overlay controls (for example SAMA) are explicitly assessed.

## External Sources

- SDAIA PDPL knowledge center: https://dgp.sdaia.gov.sa/wps/portal/pdp/knowledgecenter/
- NCA ECC: https://nca.gov.sa/en/regulatory-documents/controls-list/ecc/
- NCA CCC: https://nca.gov.sa/en/regulatory-documents/controls-list/ccc/
- NCA DCC: https://nca.gov.sa/en/regulatory-documents/controls-list/317/
- NCA CSCC: https://nca.gov.sa/en/pages/cscc.html
- DGA IT Governance Controls v2.0: https://dga.gov.sa/en/regulatory-documents/IT-governance-controls-in-digital-government
- SAMA Cyber Security Framework: https://rulebook.sama.gov.sa/en/cyber-security-framework-2


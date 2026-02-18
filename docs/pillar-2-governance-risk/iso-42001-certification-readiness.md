---
title: "ISO 42001 Certification Readiness"
sidebar_position: 8
description: "Practical path to align AEEF implementation with ISO/IEC 42001 AI management system certification expectations."
---

# ISO 42001 Certification Readiness

This guide defines how to adapt AEEF for ISO/IEC 42001 certification readiness. It does not replace accredited audit guidance; it structures AEEF controls and evidence so an organization can prepare for formal certification assessment.

## Scope

- **Primary standard:** ISO/IEC 42001:2023 (AIMS requirements)
- **Certification context:** ISO/IEC 42006 (requirements for certification bodies assessing AIMS)
- **Supporting risk guidance:** ISO/IEC 23894:2023

## AEEF-to-ISO 42001 Mapping (Clause Family Level)

| ISO 42001 Clause Family | AEEF Control Areas | Primary Evidence |
|---|---|---|
| Context of the organization | Risk tiering, scope definition, regulatory applicability | Governance charter, risk registry, scope statement |
| Leadership | Governance board roles and accountability | Governance RACI, meeting minutes, approval records |
| Planning | Risk treatment planning, objectives, compliance targets | Risk treatment plans, KPI targets, roadmap |
| Support | Training, competence, documentation controls | Training records, role qualifications, document controls |
| Operation | SDLC gates, prompt governance, review and security controls | PR records, scan artifacts, provenance metadata |
| Performance evaluation | KPI framework and compliance audit mechanisms | KPI dashboards, internal audit reports, trend analysis |
| Improvement | Incident response, corrective actions, standards updates | CAPA records, postmortems, version history |

## Minimum Certification Evidence Pack

Organizations SHOULD maintain the following package in an auditable repository:

1. AIMS scope and applicability statement.
2. AI governance policy set (acceptable use, data classification, provenance, incident response).
3. Risk register and treatment plans for AI-assisted SDLC risks.
4. Competence and training evidence for developers, reviewers, and security champions.
5. Operational evidence from a representative sample of AI-assisted pull requests.
6. KPI and audit reports demonstrating operating effectiveness.
7. Corrective action records for incidents and audit findings.

## Control Additions Required on Top of Baseline AEEF

1. **AIMS control ownership ledger** with named control owners and review cadence.
2. **Internal audit schedule** (at least quarterly sampling for high-risk teams).
3. **Management review package** (at least quarterly) summarizing risk, incidents, and KPI drift.
4. **Certification-ready nonconformity workflow** with severity, root cause, remediation owner, and due date.

## 90-Day Readiness Plan

### Days 1-30: Scoping and Control Assignment

- Define certification scope boundaries (teams, systems, toolchains, jurisdictions).
- Assign owners for each control family.
- Build initial evidence index.

### Days 31-60: Evidence Hardening

- Run first internal audit sample.
- Close critical evidence gaps.
- Validate retention and traceability controls.

### Days 61-90: Mock Assessment

- Conduct internal mock assessment against clause families.
- Log nonconformities and corrective actions.
- Prepare management review and certification readiness briefing.

## Audit-Readiness Checklist

- [ ] Scope and context formally approved.
- [ ] Control ownership and review cadence documented.
- [ ] Risk treatment plans complete for in-scope AI risks.
- [ ] Training and competence evidence current.
- [ ] Operational control evidence demonstrates real execution (not policy-only).
- [ ] Internal audits performed and findings tracked to closure.
- [ ] Management review has occurred with recorded decisions.

## Related AEEF Documents

- [Compliance & Regulatory Alignment](./compliance-regulatory.md)
- [Code Provenance & Attribution](./code-provenance.md)
- [Retention & Audit Evidence Policy](./retention-audit-policy.md)
- [Security Risk Framework](./security-risk-framework.md)

## External Sources

- ISO/IEC 42001 overview: https://www.iso.org/standard/81230.html
- ISO/IEC 42006 overview: https://www.iso.org/standard/44522.html
- ISO/IEC 23894 overview: https://www.iso.org/standard/77304.html

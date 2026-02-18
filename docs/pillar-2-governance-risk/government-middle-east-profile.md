---
title: "Government (Middle East) Profile"
sidebar_position: 10
description: "Public-sector adaptation profile for Middle East government delivery, including branching strategy and control overlays."
---

# Government (Middle East) Profile

This profile adapts AEEF for public-sector delivery in Middle East jurisdictions. It is intentionally conservative: government systems often carry legal, national security, and citizen trust implications that require stricter controls than commercial systems.

## Design Principles

1. **Sovereignty first**: hosting, identity, and audit records align with national requirements.
2. **Human accountability**: high-impact decisions remain attributable to named human roles.
3. **Explainability and traceability**: decisions and AI-assisted implementation history are auditable.
4. **Controlled adoption**: risk-tiered rollout by service criticality.

## Government Overlay Controls

| GOV-ME Control ID | Requirement | Typical Evidence |
|---|---|---|
| GOV-ME-01 | Government systems MUST use approved sovereign hosting and data residency patterns | Hosting architecture records, contract clauses |
| GOV-ME-02 | High-impact AI-assisted changes MUST include enhanced review with domain, security, and policy representation | PR approvals, review logs |
| GOV-ME-03 | Procurement of AI tools MUST include legal, security, and data processing terms aligned to public-sector obligations | Procurement checklist, DPA, security annex |
| GOV-ME-04 | Public-facing services MUST maintain transparency artifacts: purpose, scope, limitations, and escalation channels | Service transparency record, support documentation |
| GOV-ME-05 | Incident reporting and escalation for government services MUST include regulator-ready evidence bundles | Incident timelines, provenance package, corrective actions |
| GOV-ME-06 | Critical public services SHOULD maintain service continuity fallback paths independent of external AI providers | DR plans, continuity test results |
| GOV-ME-07 | Government AI programs MUST include Arabic as the primary language for all citizen-facing transparency artifacts, governance documentation, and training materials. See [KSA Regulatory Profile — Arabic Language Requirements](./ksa-regulatory-profile.md#arabic-language-requirements). | Arabic artifact inventory, translation verification records |
| GOV-ME-08 | Change management programs for government AI adoption MUST incorporate cultural context guidance addressing hierarchical decision-making, relationship-driven trust, and Vision 2030 alignment. See [Culture & Mindset — Saudi Organizational Context](../pillar-5-organizational-enablement/culture-mindset.md#saudi-organizational-context). | Change management plan with cultural adaptation section, stakeholder engagement records |

## Government Assurance Package

For each in-scope system, maintain:

1. Service criticality and impact tier.
2. Jurisdiction-specific regulatory mapping.
3. Data residency and transfer posture.
4. AI toolchain approval and supplier risk record.
5. Evidence index for audits and regulator requests.

## Branching and Delivery Strategy

Default model is a **single AEEF core** with profile overlays:

1. `core` controls apply to all teams.
2. `ksa-regulated` overlay applies where Saudi legal/security obligations apply.
3. `government-me` overlay applies to public-sector programs.

### When to Create a Dedicated Government Branch

Create a dedicated branch only if all are true:

1. Normative divergence exceeds 30% of applicable controls.
2. Release cadence must differ materially from core (for example regulator-gated release windows).
3. Contractual obligations prevent shared baseline updates without prior approval.

If these criteria are not met, keep one core with profile overlays to avoid governance drift.

## Rollout Plan for Government Programs

### Phase 1: Baseline (0-60 days)

- Apply core AEEF controls and KSA profile where applicable.
- Classify systems by criticality and jurisdiction.

### Phase 2: Assurance Hardening (60-120 days)

- Enable government overlay controls.
- Build assurance package and perform internal mock audit.

### Phase 3: Operationalization (120+ days)

- Integrate controls in CI/CD and procurement workflow.
- Start quarterly governance review with government stakeholders.

## Open Jurisdiction Adapter Pattern

Use the same profile design for other Middle East jurisdictions:

1. Define jurisdiction source list (laws, cybersecurity controls, digital government controls).
2. Map requirements to AEEF controls and identify gaps.
3. Publish profile-specific overlay controls and evidence checklist.
4. Keep common controls in core to minimize duplicate maintenance.

## Related Documents

- [AI Standards Crosswalk](./ai-standards-crosswalk.md)
- [KSA Regulatory Profile](./ksa-regulatory-profile.md)
- [ISO 42001 Certification Readiness](./iso-42001-certification-readiness.md)
- [Compliance & Regulatory Alignment](./compliance-regulatory.md)
- [SDAIA Ethics Traceability](./sdaia-ethics-traceability.md)
- [SDAIA Risk Framework Alignment](./sdaia-risk-framework-alignment.md)
- [SAMA CSF Integration](./sama-csf-integration.md)
- [NAII Metrics Mapping](./naii-metrics-mapping.md)
- [Culture & Mindset](../pillar-5-organizational-enablement/culture-mindset.md)


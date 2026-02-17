---
title: "Retention & Audit Evidence Policy"
sidebar_position: 3
description: "Normative retention policy for AI governance records and audit evidence."
---

# Retention & Audit Evidence Policy

This policy defines the minimum retention periods for AI governance records. It is the normative source for retention across AEEF. If another page conflicts with this policy, this page prevails.

## Policy Objective

Retention requirements exist to support:

- Regulatory audits
- Security and incident investigations
- Legal defense and e-discovery
- Longitudinal quality and risk analysis

## Core Rules

1. AI provenance and governance metadata MUST be retained for at least **3 years**.
2. Incident records for SEV-1/SEV-2 AI-related events MUST be retained for at least **5 years**.
3. If legal/regulatory requirements exceed this policy, the longer duration applies.
4. Records under legal hold MUST NOT be deleted until hold release.

## Minimum Retention Matrix

| Record Type | Minimum Retention | Notes |
|---|---|---|
| AI attribution metadata (commit/PR/review/deploy linkage) | 3 years | Includes tool, model version, reviewer, and decision trail |
| AI prompt metadata (hash, timestamp, user, tool) | 3 years | Prompt content may be redacted for sensitive systems |
| AI prompt content (when stored) | 90 days default, up to 12 months by risk tier | Store only where policy allows and data classification permits |
| Governance gate pass/fail records | 3 years | Must include evidence references |
| Access provisioning/revocation logs | 3 years | Includes approver and reason |
| Tool configuration and policy change logs | 3 years | Immutable history required |
| Exception and waiver records | 3 years after expiry | Includes approvals and mitigation plan |
| AI-related incident records (SEV-3+) | 3 years | Includes corrective actions |
| AI-related incident records (SEV-1/SEV-2) | 5 years | Includes full root cause package |

## Storage and Integrity Requirements

- Audit records MUST be immutable (append-only or equivalent controls).
- Storage systems MUST have access logging and role-based access controls.
- Integrity checks SHOULD run monthly.
- Backup and restore tests SHOULD run quarterly.

## Disposal Requirements

- Deletion MUST be automated and policy-driven.
- Deletion events MUST be logged.
- Secure deletion controls MUST align with the organization's data handling standard.

## Ownership and Review Cadence

| Responsibility | Owner | Cadence |
|---|---|---|
| Policy ownership | Governance Lead + Security Lead | Annual review |
| Compliance evidence sampling | Internal Audit | Quarterly |
| Exception oversight | Steering Committee | Monthly |

## Cross-References

- [Code Provenance & Attribution](./code-provenance.md)
- [Compliance & Regulatory Alignment](./compliance-regulatory.md)
- [Incident Response for AI-Generated Defects](./incident-response.md)
- [Phase 2 Governance Implementation](/transformation/phase-2-expansion/governance-implementation/)


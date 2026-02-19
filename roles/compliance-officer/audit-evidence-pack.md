---
title: "Audit Evidence Pack"
sidebar_position: 3
description: "Standardized evidence set for AI-assisted development audits."
---

# Audit Evidence Pack

Use this pack as the minimum evidence baseline for internal and external audits of AI-assisted delivery controls.

## Required Artifact Set

| Artifact | Required Fields | Source |
|---|---|---|
| Change records | PR/commit id, `AI-Usage`, `AI-Prompt-Ref`, `Agent-IDs`, owner, date | Git platform |
| Review approvals | approver, approval timestamp, checklist completion, exceptions | PR system |
| Security scan logs | tool, version, findings by severity, pass/fail, run id | CI/CD |
| Vulnerability remediation log | finding id, severity, detected date, SLA due date, closure date, owner | Security tracker |
| Dependency and license report | dependency name/version, license, decision, reviewer | SCA tool |
| Incident records | incident id, impact, root cause, corrective actions, owner | Incident system |
| Waiver register | control id, justification, approver, compensating controls, expiry date | Governance register |

## Packaging Structure

Use a predictable quarterly structure:

```text
audit-evidence/
  2026-Q1/
    01-change-records/
    02-review-approvals/
    03-security-scans/
    04-vulnerability-remediation/
    05-dependency-license/
    06-incidents/
    07-waivers/
    manifest.md
```

## File Naming Convention

- `YYYY-MM-DD_<artifact-type>_<system-id>.json`
- Example: `2026-02-19_security-scan_pr-4187.json`

Every file MUST include:

- UTC timestamp
- source system identifier
- owner role
- integrity marker (checksum or immutable storage reference)

## Evidence Templates

### 1) Change Record Template

```markdown
# Change Evidence Record
- Change ID:
- Repository:
- Branch:
- Merge Date (UTC):
- Owner:
- AI-Usage: none | assisted | generated
- AI-Prompt-Ref:
- Agent-IDs:
- Linked Review ID:
- Linked CI Run IDs:
- Linked Incident/Exception IDs:
```

### 2) Vulnerability Remediation Template

```csv
finding_id,severity,detected_utc,sla_due_utc,status,closed_utc,owner,waiver_id,notes
```

### 3) Waiver Record Template

```markdown
# Waiver Record
- Waiver ID:
- Control ID:
- Business Justification:
- Compensating Controls:
- Approver:
- Approved Date (UTC):
- Expiry Date (UTC):
- Renewal Allowed: yes/no
- Closure Evidence:
```

## Packaging Cadence

- Weekly: control operation snapshot (new evidence only)
- Monthly: trend analysis and unresolved risk summary
- Quarterly: signed evidence package with executive summary

## Audit Acceptance Criteria

An evidence package is accepted only if all are true:

- complete for the period (no missing artifact categories)
- timestamped and traceable to system-of-record
- linked to an owner and a control objective
- exceptions include documented rationale and expiry
- SLA-sensitive findings include due/closed timestamps
- random sample (minimum 10 records) is reproducible from source systems

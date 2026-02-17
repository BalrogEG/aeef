---
title: "Governance Gate"
sidebar_position: 5
description: "Formal governance review before production deployment."
---

# Governance Gate

The Governance Gate is the fourth stage of the [Operating Model Lifecycle](/transformation/operating-model/) and the formal checkpoint where AI-assisted development outputs are reviewed against organizational standards, security requirements, compliance mandates, and quality thresholds before deployment approval. No AI-assisted code SHALL reach production without passing the Governance Gate. This stage operationalizes the governance framework defined in [Phase 2: Governance Implementation](/transformation/phase-2-expansion/governance-implementation/) and enforced through the [CI/CD Pipeline](/transformation/phase-2-expansion/cicd-pipeline-integration/).

:::danger MANDATORY REQUIREMENT
**No AI-assisted code is permitted in production without passing the Governance Gate.** This requirement applies to all code, regardless of risk tier, team, or urgency. Emergency hotfixes follow an expedited governance path (defined below) but do NOT bypass governance entirely. Violations of this requirement are treated as Critical policy violations per the [Organization-Wide Policy](/transformation/phase-3-enterprise-scale/organization-wide-policy/).
:::

## Review Criteria

The Governance Gate evaluates AI-assisted work against five mandatory criteria categories. ALL categories MUST pass for the gate to approve deployment.

### 1. Code Quality Criteria

| Criterion | Requirement | Evidence |
|---|---|---|
| All automated tests pass | 100% pass rate | CI/CD test results |
| Code coverage meets threshold | >= organizational standard (typically 80%) | Coverage report |
| Static analysis findings resolved | Zero Critical or High findings | SAST scan report |
| Code review completed | At least 1 approving review from AI-trained reviewer | PR approval record |
| Refactoring complete | All [Human Hardening](/transformation/operating-model/human-hardening/) checklist items verified | Hardening checklist in PR |

### 2. Security Criteria

| Criterion | Requirement | Evidence |
|---|---|---|
| SAST scan clean | Zero Critical or High findings | SAST report |
| SCA scan clean | Zero Critical findings; High findings reviewed and accepted | SCA report |
| Secrets scan clean | Zero findings | Secrets scan report |
| Security review complete (Tier 3+) | Security reviewer sign-off | Security review record |
| Data classification compliance | No Restricted data in prompts or code | DLP logs and developer attestation |

### 3. Compliance Criteria

| Criterion | Requirement | Evidence |
|---|---|---|
| AI attribution metadata present | All AI-assisted code has attribution metadata | Automated metadata check |
| Licensing compliance | No restricted licenses in new dependencies | License scan report |
| Regulatory requirements met | Applicable regulatory checks passed | Compliance checklist |
| Policy compliance | No active policy violations for the team | Governance compliance dashboard |

### 4. Documentation Criteria

| Criterion | Requirement | Evidence |
|---|---|---|
| API documentation complete | All new/modified public APIs documented | Documentation review |
| Change documentation | Change description with scope and impact | PR description and/or change ticket |
| Viability assessment on file | AI Exploration viability assessment documented | Viability assessment artifact |
| Deployment plan documented | Deployment steps, rollback plan, monitoring setup | Deployment checklist |

### 5. Risk Criteria

| Criterion | Requirement | Evidence |
|---|---|---|
| Risk tier confirmed | Current risk tier assignment is accurate | Risk assessment record |
| Risk-appropriate governance applied | Governance level matches risk tier | Governance records |
| New risks identified and registered | Any risks discovered during hardening are added to the risk register | Risk register entry |
| Residual risk accepted | Remaining risks are within organizational risk appetite | Risk acceptance record (Tier 3+) |

## Approval Process

The approval process varies by risk tier to balance rigor with speed:

### Tier 1 (Low Risk) — Automated Approval

- All criteria are evaluated automatically by the CI/CD pipeline
- If all automated checks pass and a qualified reviewer has approved the PR, the gate passes automatically
- No manual governance review is required
- Audit trail is maintained automatically

### Tier 2 (Moderate Risk) — Automated + Tech Lead

- All automated checks must pass
- Tech Lead explicitly confirms that hardening is complete
- No additional governance review required unless flagged by automated checks
- Audit trail is maintained automatically

### Tier 3 (Elevated Risk) — Automated + Security + Governance

- All automated checks must pass
- Security reviewer has reviewed and approved
- Governance Lead reviews the complete evidence package and provides approval
- Approval is recorded in the governance audit trail
- Typical turnaround: 1-2 business days

### Tier 4 (High Risk) — Full Governance Review

- All automated checks must pass
- Security reviewer has reviewed and approved
- Governance Lead reviews the complete evidence package
- CISO provides final approval
- Risk acceptance is formally documented
- Typical turnaround: 2-5 business days

:::danger MANDATORY REQUIREMENT
**Tier 4 governance reviews MUST NOT be expedited without CISO authorization.** The additional review time for Tier 4 work is a deliberate control. Pressure to skip or rush Tier 4 review MUST be escalated to the Steering Committee.
:::

## Required Evidence Package

For Tier 3 and Tier 4 reviews, the submitting team MUST provide a governance evidence package containing:

1. **Business Intent Document** — The original business intent with success criteria
2. **Viability Assessment** — AI exploration viability assessment results
3. **Hardening Checklist** — Completed human hardening checklist with all items verified
4. **CI/CD Pipeline Results** — Full pipeline execution results showing all gates passed
5. **Security Scan Reports** — SAST, SCA, and secrets scan results
6. **Code Review Record** — PR review history showing approving review from qualified reviewer
7. **Deployment Plan** — Deployment steps, rollback procedure, and monitoring plan
8. **Risk Assessment** — Current risk tier with any new risks identified during development

## Rejection Handling

When the Governance Gate rejects a submission, the following process applies:

### Rejection Process

1. **Rejection notification** — The submitting team receives a detailed rejection notice specifying which criteria failed and why
2. **Remediation guidance** — The rejecting reviewer provides specific, actionable guidance for addressing each failure
3. **Remediation timeline** — A timeline for remediation is agreed upon (typically 2-5 business days for standard issues)
4. **Remediation work** — The team addresses the identified issues, returning to [Human Hardening](/transformation/operating-model/human-hardening/) as needed
5. **Re-submission** — The team re-submits with evidence that all identified issues are resolved
6. **Re-review** — The governance reviewer verifies remediation (focused on previously failed criteria)

### Common Rejection Reasons

| Reason | Frequency | Typical Remediation |
|---|---|---|
| Unresolved SAST findings | High | Fix identified vulnerabilities; re-scan |
| Missing AI attribution metadata | Medium | Add attribution metadata to all AI-assisted files |
| Insufficient test coverage | Medium | Write additional tests to meet coverage threshold |
| Missing security review (Tier 3+) | Medium | Request and complete security review |
| Inadequate error handling | Medium | Add specific error handling per hardening checklist |
| Licensing issues in dependencies | Low | Replace problematic dependencies or obtain legal approval |

### Rejection Metrics

The Governance Lead MUST track rejection metrics:
- **Rejection rate** — Percentage of submissions rejected on first attempt (target: < 15%)
- **Rejection reasons** — Categorized reasons to identify systemic issues
- **Remediation time** — Average time from rejection to successful re-submission
- **Repeat rejections** — Submissions rejected more than once (indicates inadequate hardening)

## Waiver Process

In exceptional circumstances, specific governance criteria MAY be waived. Waivers are not bypasses — they are documented, time-limited exceptions with compensating controls.

### Waiver Requirements

- **Justification** — A clear, documented business justification for why the criterion cannot be met
- **Compensating controls** — Alternative controls that mitigate the risk of the waived criterion
- **Time limit** — Every waiver MUST have an expiration date (maximum 90 days)
- **Approval** — Waivers for Tier 1-2 criteria require Governance Lead approval; Tier 3-4 criteria require CISO approval
- **Tracking** — All waivers are recorded in the Exception Register and reviewed monthly

:::danger MANDATORY REQUIREMENT
**Security criteria waivers require CISO approval regardless of risk tier.** No waiver MAY be granted for: secrets in code, Restricted data in AI prompts, or deployment without any automated testing. These are absolute requirements with no exception path.
:::

### Emergency Governance Path

For genuine production emergencies requiring immediate deployment:

1. The Engineering Director and Security Lead jointly authorize the emergency deployment
2. Automated pipeline checks MUST still pass (no bypass of automated gates)
3. A full governance review MUST be conducted within 24 hours of the emergency deployment
4. The emergency and its justification MUST be documented in the governance audit trail
5. The Steering Committee MUST be informed at the next meeting

The Governance Gate is the organization's quality and security conscience. It exists not to slow teams down but to ensure that the speed AI provides does not come at the cost of the standards that protect customers, data, and the organization's reputation. When governance is well-implemented, it becomes a source of confidence, not friction — teams that pass the gate know their code is ready for production.

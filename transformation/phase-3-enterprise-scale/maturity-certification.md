---
title: "Maturity Assessment & Certification"
sidebar_position: 6
description: "Formal maturity assessment and certification processes."
---

# Maturity Assessment & Certification

This section defines the formal maturity assessment and certification process for AI-assisted engineering. Certification provides an objective, evidence-based evaluation of each team's and the organization's capability in AI-assisted development. It validates that the investment in the transformation has produced genuine, measurable capability — not just tool adoption. The certification process draws on the governance framework from [Phase 2](/transformation/phase-2-expansion/governance-implementation/), the metrics infrastructure from [Expanded Metrics](/transformation/phase-2-expansion/expanded-metrics/), and the standards established across all three phases of the transformation.

## Assessment Methodology

### Assessment Approach

The maturity assessment uses a structured evaluation methodology with three components:

1. **Evidence review** — Examination of artifacts, metrics, and documentation against defined criteria
2. **Practitioner interviews** — Structured interviews with developers, Tech Leads, and managers to assess understanding and application of standards
3. **Process observation** — Direct observation of AI-assisted development practices, code reviews, and governance processes

### Assessment Scope

Assessments are conducted at two levels:

| Level | Scope | Frequency | Assessors |
|---|---|---|---|
| **Team assessment** | Individual engineering team | Semi-annually | 1 internal assessor + 1 peer team representative |
| **Organizational assessment** | Enterprise-wide aggregation | Annually | 2 internal assessors + 1 external assessor (RECOMMENDED) |

### Assessment Process

| Step | Duration | Activities |
|---|---|---|
| **1. Preparation** | 1 week | Assessor reviews team metrics, documentation, and artifacts; schedules interviews |
| **2. Evidence collection** | 1 week | Assessor gathers and reviews required evidence (see Evidence Requirements below) |
| **3. Interviews** | 2-3 days | Structured interviews with 3-5 team members at different levels |
| **4. Process observation** | 2-3 days | Observe code reviews, sprint ceremonies, governance processes |
| **5. Scoring** | 2-3 days | Assessor scores against criteria and prepares report |
| **6. Review** | 1 day | Findings shared with team lead for factual accuracy check |
| **7. Report delivery** | 1 day | Final report delivered with certification level and recommendations |

## Evidence Requirements

Each assessment MUST include evidence from the following categories:

### Documentation Evidence

| Evidence Item | Description | Required |
|---|---|---|
| Team Acceptable Use Policy acknowledgments | Signed AUP for all team members | REQUIRED |
| Training completion records | Proof that all team members completed required training | REQUIRED |
| AI attribution metadata compliance | Sample of recent commits showing proper attribution | REQUIRED |
| Code review records | Sample of 10+ AI-assisted PR reviews showing review quality | REQUIRED |
| Prompt library contributions | Team contributions to the organizational prompt library | RECOMMENDED |
| Lessons learned submissions | Team submissions to the lessons-learned repository | RECOMMENDED |

### Metrics Evidence

| Evidence Item | Description | Required |
|---|---|---|
| Velocity trend data | Sprint velocity data showing trend since baseline | REQUIRED |
| Defect density data | Defect density trend since baseline | REQUIRED |
| Vulnerability density data | Security finding trend since baseline | REQUIRED |
| Gate pass rate data | CI/CD governance gate pass/fail rates | REQUIRED |
| Developer satisfaction survey results | Most recent survey scores for the team | REQUIRED |
| AI-attributed defect tracking | Data on defects traced to AI-generated code | RECOMMENDED |

### Process Evidence

| Evidence Item | Description | Required |
|---|---|---|
| Governance compliance | Evidence that governance gates are followed consistently | REQUIRED |
| Exception handling | Records of any governance exceptions with proper documentation | REQUIRED (if applicable) |
| Risk tier assignment | Evidence that the team's projects have appropriate risk tier assignments | REQUIRED |
| Community participation | Attendance and participation records for CoP and showcases | RECOMMENDED |
| Continuous improvement | Evidence of improvement actions taken based on feedback | RECOMMENDED |

## Scoring Criteria

The assessment evaluates six domains, each scored on a 1-5 maturity scale.

### Maturity Scale

| Level | Name | Description |
|---|---|---|
| **1** | Initial | AI tools are used ad hoc with no consistent process or governance |
| **2** | Developing | Basic processes are in place but inconsistently applied; governance is reactive |
| **3** | Defined | Processes are documented, consistently applied, and governed; metrics are collected |
| **4** | Managed | Processes are measured and controlled; decisions are data-driven; continuous improvement is active |
| **5** | Optimizing | Processes are continuously refined; AI-first workflows are embedded; the team contributes to organizational improvement |

### Assessment Domains

| Domain | Weight | Key Criteria |
|---|---|---|
| **Governance Compliance** | 25% | Adherence to governance framework, gate compliance, audit trail completeness, exception handling |
| **Code Quality** | 20% | Defect density trend, AI-attributed defect rate, code review thoroughness, test coverage |
| **Security Practices** | 20% | Vulnerability density trend, data classification compliance, security review practices, incident handling |
| **Developer Competency** | 15% | Training completion, prompt engineering skill, understanding of AI limitations, critical evaluation of AI output |
| **Process Maturity** | 10% | Workflow integration, AI attribution practices, metrics collection, Community participation |
| **Continuous Improvement** | 10% | Feedback contribution, improvement action participation, A/B test involvement, knowledge sharing |

### Scoring Rubric Example: Governance Compliance

| Score | Criteria |
|---|---|
| **1** | No governance framework applied; AI tools used without oversight |
| **2** | Governance framework exists but compliance is inconsistent; some gates are skipped |
| **3** | Governance framework consistently applied; all gates are followed; exceptions are documented |
| **4** | Governance is data-driven; gate effectiveness is measured; false positives are tracked and reduced |
| **5** | Governance is continuously refined; the team proactively identifies governance improvements; exception rate near zero |

## Certification Levels

Based on the weighted assessment score, teams and organizations are awarded one of four certification levels:

| Certification Level | Score Range | Description |
|---|---|---|
| **Not Certified** | 1.0 - 1.9 | Does not meet minimum standards for AI-assisted development; remediation required |
| **Bronze: Foundational** | 2.0 - 2.9 | Meets basic requirements; processes are in place but need strengthening |
| **Silver: Proficient** | 3.0 - 3.9 | Solid, consistent practices; governance is effective; metrics-driven |
| **Gold: Advanced** | 4.0 - 4.5 | High maturity across all domains; strong continuous improvement; contributing to organizational excellence |
| **Platinum: Exemplary** | 4.6 - 5.0 | Best-in-class practices; active innovator; model for other teams |

### Minimum Requirements by Level

- **Bronze** — All Governance Compliance and Security Practices criteria score >= 2; no domain scores 1
- **Silver** — All domains score >= 2; Governance and Security score >= 3; training 100% complete
- **Gold** — All domains score >= 3; at least 3 domains score >= 4; active in continuous improvement
- **Platinum** — All domains score >= 4; active contributor to organizational prompt library and knowledge sharing

### Certification Outcome Actions

| Certification | Action |
|---|---|
| **Not Certified** | Mandatory remediation plan within 30 days; re-assessment within 90 days; governance restrictions may apply |
| **Bronze** | Improvement plan recommended; reassessment in 6 months |
| **Silver** | Target level for Phase 3 completion; eligible for self-service governance |
| **Gold** | Eligible for reduced governance oversight (automated gates sufficient); team members eligible to become assessors |
| **Platinum** | Recognized as center of excellence; team members eligible to mentor other teams and contribute to standards |

## Renewal Process

Certification is not permanent. It MUST be renewed to ensure sustained capability:

- **Team certification** — Valid for 12 months; renewal requires re-assessment
- **Organizational certification** — Valid for 12 months; renewal requires full organizational assessment
- **Renewal simplification** — Teams maintaining Gold or Platinum status MAY undergo a streamlined renewal (evidence review only, no interviews) if no significant process changes have occurred
- **Downgrade triggers** — A team's certification MAY be downgraded between renewal periods if: a Critical security incident occurs, sustained quality degradation is observed (3+ months), or systematic governance violations are identified

### Annual Renewal Calendar

| Month | Activity |
|---|---|
| Month 1-2 | Team self-assessments using the certification rubric |
| Month 2-3 | Internal assessor reviews and interviews |
| Month 3-4 | Scoring and report preparation |
| Month 4 | Certification decisions and communication |
| Month 5-6 | Remediation activities for teams below target |
| Month 7 | Re-assessment for remediated teams |

Maturity certification is the accountability mechanism that ensures the transformation delivers lasting value. Without it, practices naturally degrade over time as teams face deadline pressure and staff turnover. With it, excellence in AI-assisted engineering becomes a measured, recognized, and sustained organizational capability.

---
title: "PRD-STD-004: Security Scanning"
sidebar_position: 5
description: "Security scanning requirements for AI-generated code."
---

# PRD-STD-004: Security Scanning

**Standard ID:** PRD-STD-004
**Version:** 1.0
**Status:** Active
**Compliance Level:** Level 1 (Foundation)
**Effective Date:** 2025-01-15
**Last Reviewed:** 2026-01-15

## 1. Purpose

This standard defines mandatory security scanning requirements for AI-generated code. AI coding assistants have been shown to produce code with a 2.74x higher vulnerability rate compared to traditionally written code. This elevated risk stems from multiple factors: AI models trained on code that includes known vulnerabilities, hallucinated security constructs that appear valid but are not, use of deprecated cryptographic algorithms, and incomplete input validation.

Automated security scanning is a critical control that MUST be applied to all AI-generated code. This standard establishes the types of scanning required, the tools and configurations expected, and the timelines for vulnerability remediation.

## 2. Scope

This standard applies to:

- All production code generated, modified, or substantially influenced by AI coding assistants
- All dependencies introduced by AI-generated code
- All deployment artifacts that include AI-generated code
- CI/CD pipelines that build and deploy AI-assisted projects

This standard addresses Static Application Security Testing (SAST), Dynamic Application Security Testing (DAST), Software Composition Analysis (SCA), and secret detection.

## 3. Definitions

| Term | Definition |
|---|---|
| **SAST** | Static Application Security Testing -- analysis of source code for security vulnerabilities without executing the program |
| **DAST** | Dynamic Application Security Testing -- analysis of running applications for security vulnerabilities |
| **SCA** | Software Composition Analysis -- analysis of third-party dependencies for known vulnerabilities and license issues |
| **Secret Detection** | Automated scanning for credentials, API keys, tokens, and other secrets in source code |
| **Vulnerability SLA** | The maximum time allowed between vulnerability detection and remediation, based on severity |
| **False Positive** | A scanning result that incorrectly identifies a vulnerability where none exists |
| **CVSS** | Common Vulnerability Scoring System -- a standardized framework for rating vulnerability severity |
| **Security Owner** | A named person accountable for security decisions in teams without a dedicated security function |

## 4. Requirements

### 4.1 Static Application Security Testing (SAST)

:::danger MANDATORY
**REQ-004-01:** All AI-generated code MUST undergo SAST scanning before merging into any shared branch.

**REQ-004-02:** SAST scanning MUST be integrated into the CI/CD pipeline and executed automatically on every pull request that contains AI-generated code.

**REQ-004-03:** SAST tools MUST be configured to detect, at minimum, the OWASP Top 10 vulnerability categories:
1. Broken Access Control
2. Cryptographic Failures
3. Injection
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable and Outdated Components
7. Identification and Authentication Failures
8. Software and Data Integrity Failures
9. Security Logging and Monitoring Failures
10. Server-Side Request Forgery (SSRF)

**REQ-004-04:** Pull requests with Critical or High SAST findings MUST NOT be merged until findings are resolved or formally accepted as false positives with documented justification.
:::

:::warning RECOMMENDED
**REQ-004-05:** Organizations SHOULD configure SAST tools with custom rules that target known AI code generation failure modes (e.g., hallucinated security functions, deprecated crypto algorithms).

**REQ-004-06:** SAST scanning SHOULD include semantic analysis, not just pattern matching, to detect context-dependent vulnerabilities in AI-generated code.
:::

### 4.2 Dynamic Application Security Testing (DAST)

:::danger MANDATORY
**REQ-004-07:** Applications containing AI-generated code that are exposed to external traffic MUST undergo DAST scanning at least once per release cycle.

**REQ-004-08:** DAST scanning MUST cover all API endpoints and web interfaces that include AI-generated code.
:::

:::warning RECOMMENDED
**REQ-004-09:** Organizations SHOULD integrate DAST scanning into staging environment deployment pipelines for continuous dynamic analysis.

**REQ-004-10:** DAST configurations SHOULD include authenticated scanning to test authorization and access control in AI-generated endpoints.
:::

### 4.3 Software Composition Analysis (SCA) and Dependency Scanning

:::danger MANDATORY
**REQ-004-11:** All dependencies introduced by AI-generated code MUST be scanned for known vulnerabilities before merging.

**REQ-004-12:** SCA scanning MUST be integrated into the CI/CD pipeline and executed on every build.

**REQ-004-13:** Dependencies with Critical (CVSS 9.0+) known vulnerabilities MUST NOT be introduced into the codebase. There are no exceptions.

**REQ-004-14:** SCA tools MUST analyze transitive dependencies, not just direct dependencies.
:::

:::warning RECOMMENDED
**REQ-004-15:** Organizations SHOULD maintain a Software Bill of Materials (SBOM) for all projects containing AI-generated code.

**REQ-004-16:** SCA results SHOULD be correlated with runtime analysis to prioritize vulnerabilities that are actually reachable in the application.
:::

### 4.4 Secret Detection

:::danger MANDATORY
**REQ-004-17:** Secret detection scanning MUST be executed on all commits and pull requests containing AI-generated code.

**REQ-004-18:** Detected secrets MUST be treated as Critical severity and remediated within 24 hours. The compromised credential MUST be rotated immediately.

**REQ-004-19:** Pre-commit hooks for secret detection SHOULD be installed on all developer workstations where AI coding tools are used.
:::

### 4.5 Vulnerability Remediation SLAs

:::danger MANDATORY
**REQ-004-20:** All vulnerabilities detected in AI-generated code MUST be remediated within the following timelines, measured from the time of detection:

| Severity | CVSS Score | Remediation SLA | Escalation |
|---|---|---|---|
| **Critical** | 9.0 - 10.0 | **24 hours** | Immediate notification to security team (or Security Owner) and engineering lead |
| **High** | 7.0 - 8.9 | **7 days** | Notification to engineering lead within 24 hours |
| **Medium** | 4.0 - 6.9 | **30 days** | Tracked in sprint backlog |
| **Low** | 0.1 - 3.9 | **90 days** | Tracked in backlog |

**REQ-004-21:** Organizations MUST track vulnerability remediation SLA compliance and report metrics monthly.

**REQ-004-22:** SLA violations for Critical and High severity vulnerabilities MUST be reported to the security team (or Security Owner) and engineering leadership within 24 hours of the SLA expiration.
:::

:::warning RECOMMENDED
**REQ-004-23:** Organizations SHOULD aim to remediate vulnerabilities faster than the SLA maximums. Target 50% of the SLA window as a stretch goal.
:::

## 5. Implementation Guidance

### Scanning Pipeline Configuration

A recommended scanning pipeline for AI-assisted projects:

```
Pull Request Created
  |
  ├── SAST Scan (blocking)
  |     └── Fail on Critical/High findings
  |
  ├── SCA Scan (blocking)
  |     └── Fail on Critical vulnerabilities
  |
  ├── Secret Detection (blocking)
  |     └── Fail on any detected secrets
  |
  └── License Check (blocking)
        └── Fail on disallowed licenses

Post-Merge / Staging Deployment
  |
  └── DAST Scan (non-blocking, reported)
```

### False Positive Management

False positives are a significant challenge with AI-generated code because scanning tools may not recognize AI-specific patterns. To manage false positives effectively:

1. **Document every false positive determination** with the rationale and the reviewer's identity
2. **Maintain a suppressions file** that is version-controlled and reviewed quarterly
3. **Never suppress a finding without security team review** (or Security Owner review in small teams) for Critical and High findings
4. **Re-evaluate suppressions** when SAST/SCA tools are updated, as false positive status may change
5. **Track false positive rate** as a metric to evaluate and tune scanning tool configurations

### AI-Specific Scanning Considerations

AI-generated code presents unique scanning challenges:

- **Hallucinated security functions:** AI may generate calls to security functions that do not exist or do not behave as expected. SAST tools SHOULD be configured to flag unknown security-related function calls.
- **Deprecated patterns:** AI may use deprecated cryptographic algorithms (e.g., MD5 for hashing, SHA-1 for signatures) from older training data. Configure rules to flag these explicitly.
- **Incomplete validation:** AI often generates input validation that covers common cases but misses edge cases. Manual review per [PRD-STD-002](/production/standards/PRD-STD-002-code-review/) complements automated scanning.

## 6. Exceptions & Waiver Process

Exceptions to scanning requirements are strictly limited:

- **DAST scanning** (REQ-004-07) MAY be waived for internal-only applications with no external exposure, provided SAST and SCA scanning are in place
- **Remediation SLAs** MAY be extended by up to 50% for Medium and Low severity findings when the affected component is scheduled for replacement within the current quarter

No exceptions are available for SAST scanning (REQ-004-01), SCA scanning (REQ-004-11), secret detection (REQ-004-17), or Critical vulnerability SLAs (REQ-004-20).

Waiver requests MUST be submitted to the security team (or Security Owner in teams without a dedicated security function) with documented justification and compensating controls.

## 7. Related Standards

- [PRD-STD-002: Code Review Standards](/production/standards/PRD-STD-002-code-review/) -- Manual review complements automated scanning
- [PRD-STD-008: Dependency Compliance](/production/standards/PRD-STD-008-dependency-compliance/) -- License and supply chain requirements for dependencies
- [PRD-STD-007: Quality Gates](/production/standards/PRD-STD-007-quality-gates/) -- Security scanning as a merge gate
- [Security Scanning Tools](/production/tool-guides/security-scanning-tools/) -- Tool-specific configuration guidance
- [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/) -- Organizational security risk framework

## 8. Revision History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-01-15 | AEEF Standards Committee | Initial release |
| 1.0.1 | 2026-01-15 | AEEF Standards Committee | Added AI-specific scanning considerations; clarified false positive management |

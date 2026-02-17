---
title: "Security Risk Framework"
sidebar_position: 4
description: "Framework for identifying and mitigating security risks in AI-generated code."
---

# Security Risk Framework

AI-generated code has been shown to contain a 2.74x higher security vulnerability rate compared to human-authored code. This is not a minor variance -- it represents a fundamental shift in the threat landscape for organizations adopting AI-assisted development. This section provides a comprehensive security risk framework that includes threat modeling for AI outputs, vulnerability classification, scanning requirements, remediation protocols, and risk-based SLAs. It complements the verification techniques in [AI Output Verification](../pillar-1-engineering-discipline/ai-output-verification.md) and the review processes in [Human-in-the-Loop](../pillar-1-engineering-discipline/human-in-the-loop.md).

## Threat Model for AI-Generated Code

AI-generated code introduces threat vectors that differ from those in traditional software development. The following threat model identifies the primary categories of security risk specific to AI outputs.

### AI-Specific Threat Categories

| Threat Category | Description | Likelihood | Impact |
|---|---|---|---|
| **Injection Vulnerabilities** | AI generates code vulnerable to SQL injection, XSS, command injection, or LDAP injection due to missing or incorrect input sanitization | High | Critical |
| **Authentication/Authorization Gaps** | AI generates endpoints or functions without proper auth checks, or with incomplete role-based access control | High | Critical |
| **Hallucinated Security APIs** | AI references security functions, cryptographic methods, or configuration options that do not exist or behave differently than described | Medium | Critical |
| **Insecure Defaults** | AI generates code with overly permissive configurations: open CORS, debug mode enabled, verbose error messages, weak cipher suites | High | High |
| **Hardcoded Secrets** | AI generates placeholder credentials, API keys, or tokens that appear realistic and may be deployed inadvertently | Medium | Critical |
| **Outdated Security Patterns** | AI generates code using deprecated cryptographic algorithms, obsolete authentication patterns, or retired security libraries based on training data age | Medium | High |
| **Insufficient Error Handling** | AI generates "happy path" code that leaks information through stack traces, exposes internal state, or fails open rather than failing closed | High | Medium |
| **Resource Exhaustion** | AI generates code without proper rate limiting, pagination, input size validation, or timeout handling, enabling denial-of-service | Medium | High |
| **Deserialization Vulnerabilities** | AI generates insecure deserialization patterns that enable remote code execution | Medium | Critical |
| **Training Data Leakage** | AI output includes fragments of sensitive data from training data (e.g., actual API keys, internal URLs, credentials from training corpora) | Low | Critical |

### OWASP Top 10 Mapping for AI-Generated Code

The OWASP Top 10 vulnerabilities are especially relevant to AI-generated code. The following mapping identifies which OWASP categories are most frequently introduced by AI tools and the required controls.

| OWASP Category | AI Risk Level | Common AI Generation Pattern | Required Control |
|---|---|---|---|
| **A01: Broken Access Control** | Critical | Missing authorization checks on generated endpoints | Manual review checklist item + automated auth testing |
| **A02: Cryptographic Failures** | High | Use of weak algorithms (MD5, SHA1), hardcoded keys, missing encryption | SAST rules + crypto library allow-list |
| **A03: Injection** | Critical | Unparameterized queries, unsanitized template rendering | SAST + parameterized query enforcement |
| **A04: Insecure Design** | High | Missing rate limits, no input validation, trust boundary violations | Architecture review for Tier 2/3 changes |
| **A05: Security Misconfiguration** | High | Debug mode, verbose errors, permissive CORS, default credentials | Configuration scanning + hardened defaults |
| **A06: Vulnerable Components** | Medium | AI suggests outdated or vulnerable dependencies | Dependency scanning (Snyk, Dependabot) |
| **A07: Auth Failures** | High | Weak password policies, missing MFA hooks, session mismanagement | Security review checklist + automated testing |
| **A08: Data Integrity Failures** | Medium | Missing signature verification, insecure deserialization | SAST + manual review |
| **A09: Logging Failures** | Medium | Missing audit logging, logging sensitive data | Logging standards enforcement |
| **A10: SSRF** | Medium | AI generates HTTP clients without URL validation | SAST rules + allow-list enforcement |

## Vulnerability Scanning Requirements

### Mandatory Scanning Tools and Configuration

All AI-generated code MUST pass through the following scanning layers before merging into any protected branch:

| Scan Type | Tool Examples | When Run | Threshold |
|---|---|---|---|
| **Static Application Security Testing (SAST)** | Semgrep, CodeQL, SonarQube, Checkmarx | Every PR; every commit to protected branches | Zero Critical/High findings |
| **Software Composition Analysis (SCA)** | Snyk, OWASP Dependency-Check, Dependabot | Every PR that modifies dependencies | Zero Critical findings; High findings require documented risk acceptance |
| **Secret Detection** | GitLeaks, TruffleHog, detect-secrets | Every commit (pre-commit hook + CI) | Zero findings |
| **Infrastructure-as-Code Scanning** | Checkov, tfsec, KICS | Every PR modifying IaC files | Zero Critical/High findings |
| **Container Image Scanning** | Trivy, Snyk Container, Grype | Every container build | Zero Critical findings |
| **Dynamic Application Security Testing (DAST)** | OWASP ZAP, Burp Suite (automated) | Pre-release for Tier 2/3 changes | Zero Critical/High findings |

### Scanning Configuration for AI-Generated Code

- SAST tools SHOULD be configured with **AI-specific rulesets** that target the most common AI generation vulnerability patterns listed in the threat model above
- Secret detection MUST be configured with low false-negative tolerance -- it is better to flag false positives than to miss real secrets
- Scanning results for AI-generated code MUST NOT be suppressed or marked as false positives without written justification reviewed by a security champion
- Teams SHOULD contribute new detection rules back to the scanning tools when novel AI-generated vulnerability patterns are discovered

:::danger
Disabling or bypassing security scanning for AI-generated code is a critical policy violation. No exception process exists for SAST and secret detection scanning. Emergency procedures for other scan types require CISO approval.
:::

## Risk Assessment Matrix

The following risk matrix guides prioritization of security findings in AI-generated code:

| Likelihood / Impact | **Critical Impact** | **High Impact** | **Medium Impact** | **Low Impact** |
|---|---|---|---|---|
| **Very Likely** | P0 -- Immediate | P0 -- Immediate | P1 -- Urgent | P2 -- Standard |
| **Likely** | P0 -- Immediate | P1 -- Urgent | P2 -- Standard | P3 -- Scheduled |
| **Possible** | P1 -- Urgent | P2 -- Standard | P3 -- Scheduled | P4 -- Backlog |
| **Unlikely** | P2 -- Standard | P3 -- Scheduled | P4 -- Backlog | P4 -- Backlog |

### Risk Priority Definitions

| Priority | Definition | Action Required |
|---|---|---|
| **P0 -- Immediate** | Exploitable vulnerability with critical business impact | Stop all work. Fix immediately. No deployment until resolved. Security team notified within 1 hour. |
| **P1 -- Urgent** | Significant vulnerability requiring prompt remediation | Fix within 24 hours. Block merge/deployment until resolved. Security team notified within 4 hours. |
| **P2 -- Standard** | Moderate vulnerability with limited exploitability or impact | Fix within 7 calendar days. May merge to non-production branches with documented risk acceptance. |
| **P3 -- Scheduled** | Low-severity vulnerability or defense-in-depth improvement | Fix within 30 calendar days. Track in sprint backlog. |
| **P4 -- Backlog** | Minimal risk; improvement opportunity | Schedule in future sprint. Track in backlog. |

## Remediation SLAs

### SLA Requirements by Priority

| Priority | Detection-to-Fix SLA | Detection-to-Deploy SLA | Escalation Trigger |
|---|---|---|---|
| **P0** | 4 hours | 8 hours | Automatic escalation to CISO at detection |
| **P1** | 24 hours | 48 hours | Escalation if not fixed within 12 hours |
| **P2** | 7 calendar days | 14 calendar days | Escalation if not fixed within 5 days |
| **P3** | 30 calendar days | 45 calendar days | Monthly review |
| **P4** | 90 calendar days | Next scheduled release | Quarterly review |

### SLA Compliance Tracking

- SLA compliance MUST be tracked and reported monthly to engineering leadership
- Teams with SLA compliance below 90% MUST produce a remediation plan within one sprint
- Chronic SLA non-compliance (below 90% for three consecutive months) SHALL trigger a review of the team's AI tool access and development processes
- SLA clock starts at the time of detection, not at the time of triage

## Security Review Integration Points

Security review MUST be integrated at multiple points in the AI-assisted development lifecycle, not solely as a pre-deployment gate.

### Pre-Generation Security Controls

- Prompts for security-sensitive code (authentication, authorization, cryptography, data handling) MUST include explicit security constraints per [Prompt Engineering Rigor](../pillar-1-engineering-discipline/prompt-engineering-rigor.md)
- Developers MUST reference the relevant OWASP category when generating code in a security-sensitive domain
- AI tools MUST NOT be used to generate cryptographic implementations; use established, audited cryptographic libraries instead

### Post-Generation Security Controls

- All security scanning as defined in the Vulnerability Scanning Requirements section above
- Manual security review by a security champion for all Tier 3 (High Risk) changes
- Penetration testing for new attack surface introduced by AI-generated code (RECOMMENDED: quarterly for critical applications)

### Production Security Monitoring

- AI-generated code deployed to production SHOULD be monitored with enhanced alerting during the first 30 days
- Runtime application self-protection (RASP) or web application firewall (WAF) rules SHOULD be updated when new attack surface is deployed
- Security incident correlation SHOULD include AI provenance data to enable trend analysis by generation source

## Security Training Requirements

- All developers using AI tools MUST complete security training that addresses AI-specific vulnerability patterns (annual requirement)
- Security champions MUST receive advanced training on AI-generated code threat modeling (annual requirement)
- Training materials MUST be updated when new AI-specific vulnerability patterns are discovered
- Training effectiveness SHOULD be measured through periodic security assessments using AI-generated code samples with seeded vulnerabilities

For incident response procedures when security vulnerabilities in AI-generated code are discovered in production, see [Incident Response for AI-Generated Defects](./incident-response.md). For compliance implications of security findings, see [Compliance & Regulatory Alignment](./compliance-regulatory.md).

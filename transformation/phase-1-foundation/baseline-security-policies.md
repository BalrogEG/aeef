---
title: "Baseline Security Policies"
sidebar_position: 3
description: "Minimum security policies for AI-assisted development adoption."
---

# Baseline Security Policies

This section defines the minimum security policies required before AI-assisted development tools are introduced to any team. Given that AI co-authored code exhibits a 2.74x higher vulnerability rate than human-authored code, these policies are not optional safeguards — they are mandatory prerequisites. This document addresses data classification for prompts and code context, approved tool configurations, access controls, acceptable use boundaries, and data leakage prevention. These policies MUST be approved by the CISO and Legal before any AI tool is deployed, consistent with [Pillar 2: Security-First AI](/pillars/pillar-2-governance-risk/).

## Data Classification for AI Prompts

All data used in AI tool prompts — including code snippets, comments, error messages, and natural language descriptions — MUST be classified according to the organization's data classification scheme. The following classifications apply specifically to AI prompt contexts:

### Classification Levels

| Classification | Description | AI Tool Usage | Examples |
|---|---|---|---|
| **Public** | Information available to the general public | MAY be used freely in any approved AI tool | Open-source code, public documentation, generic algorithms |
| **Internal** | Non-sensitive business information | MAY be used in approved AI tools with standard configurations | Internal utility code, non-sensitive business logic, development patterns |
| **Confidential** | Sensitive business or customer information | MUST only be used in tools with enterprise data agreements and no-retention policies | Proprietary algorithms, customer data schemas, API designs for unreleased products |
| **Restricted** | Highly sensitive regulated data | MUST NOT be used in any AI tool prompt, regardless of configuration | PII, PHI, PCI data, cryptographic keys, credentials, secrets |

### Classification Rules

1. Developers MUST classify the data they include in AI prompts BEFORE submitting the prompt.
2. When classification is uncertain, the developer MUST treat the data as the next higher classification level.
3. Code comments that contain customer names, account identifiers, or business-specific terminology MUST be removed or anonymized before inclusion in prompts.
4. Stack traces and error logs MUST be reviewed for embedded credentials or PII before inclusion.

## Approved Tool Configurations

Every approved AI tool MUST be deployed with the following minimum configurations. These configurations SHALL be enforced centrally by Platform Engineering and MUST NOT be overridden by individual developers.

### Mandatory Configuration Requirements

- **Telemetry opt-out**: All optional telemetry and data sharing features MUST be disabled.
- **Data retention**: The tool MUST be configured for zero data retention where available, or the minimum retention period offered by the vendor.
- **Training opt-out**: Code and prompts MUST NOT be used for model training. This MUST be confirmed in the vendor agreement and enforced in tool configuration.
- **Network controls**: AI tool traffic MUST route through the organization's network security controls (proxy, DLP, firewall).
- **Approved model versions**: Only model versions that have been assessed and approved by the Security team MAY be used. Automatic model upgrades MUST be disabled.
- **Context window limitations**: Where configurable, the maximum context window SHOULD be limited to reduce the risk of inadvertent data exposure.

### Configuration Audit

Platform Engineering MUST audit tool configurations quarterly. Any deviation from approved configurations SHALL be treated as a security incident and remediated within 24 hours.

## Access Controls

### Identity and Authentication

- Access to AI development tools MUST be provisioned through the organization's Identity Provider (IdP) using Single Sign-On (SSO).
- Multi-factor authentication (MFA) MUST be required for all AI tool access.
- Service accounts for AI tools in CI/CD pipelines MUST use short-lived tokens with the minimum required permissions.

### Authorization and Role-Based Access

| Role | Access Level | Approval Required |
|---|---|---|
| Pilot Developer | Standard AI tool access with approved configurations | Training completion + Manager approval |
| Tech Lead | Standard access + prompt library management | Training completion + Director approval |
| Platform Engineer | Administrative access for configuration management | Security Lead approval |
| Security Reviewer | Audit log access and configuration review | CISO approval |

### Access Lifecycle

- Access MUST be provisioned only after the developer has completed the [Developer Training](/transformation/phase-1-foundation/developer-training/) curriculum and passed the assessment.
- Access MUST be reviewed quarterly and revoked when no longer required (role change, offboarding).
- Access MUST be revoked immediately upon any security policy violation, pending investigation.

## Acceptable Use Policy Template

All developers with AI tool access MUST sign an Acceptable Use Policy. The policy MUST include the following sections:

### Required Policy Sections

1. **Purpose and Scope** — Defines that the policy applies to all use of AI-assisted development tools in the course of organizational work, including personal devices if used for work.

2. **Permitted Uses** — AI tools MAY be used for:
   - Code generation and completion for approved projects
   - Code explanation and documentation
   - Test generation
   - Bug identification and debugging assistance
   - Code refactoring suggestions

3. **Prohibited Uses** — AI tools MUST NOT be used for:
   - Processing Restricted-classified data (PII, PHI, PCI, credentials)
   - Generating code for security-critical functions without human review (authentication, authorization, cryptography)
   - Circumventing code review or governance processes
   - Generating content that violates intellectual property rights
   - Any purpose unrelated to assigned work

4. **Developer Responsibilities** — Developers MUST:
   - Classify data before including it in prompts
   - Review all AI-generated code before committing
   - Report any suspected data leakage or security incidents immediately
   - Maintain the AI attribution metadata required by [Pillar 1: Engineering Discipline](/pillars/pillar-1-engineering-discipline/)

5. **Consequences of Violation** — Policy violations MAY result in access revocation, disciplinary action, or termination depending on severity.

6. **Acknowledgment** — Signed acknowledgment by the developer with date.

## Data Leakage Prevention

### Technical Controls

1. **DLP integration** — AI tool network traffic MUST be routed through Data Loss Prevention (DLP) systems configured to detect and block Restricted-classified data patterns (SSNs, credit card numbers, API keys).
2. **Prompt logging** — All prompts sent to AI tools SHOULD be logged (with appropriate access controls on the logs) for security audit purposes. Prompt logs MUST be retained for a minimum of 90 days.
3. **Egress monitoring** — Network egress to AI tool endpoints MUST be monitored for anomalous data volumes that could indicate bulk data exfiltration.
4. **Pre-commit hooks** — Git pre-commit hooks MUST be configured to scan for credentials, secrets, and Restricted-classified data patterns before code is committed.

### Process Controls

1. **Prompt review for sensitive projects** — For projects classified as Confidential or above, prompts SHOULD be reviewed by a second developer before submission during the first 30 days of adoption.
2. **Incident response integration** — AI-related data leakage MUST be included in the organization's incident response plan with defined severity levels and response procedures.
3. **Regular awareness reinforcement** — Quarterly reminders of data classification requirements and prohibited uses MUST be delivered to all developers with AI tool access.

### Data Leakage Incident Severity Levels

| Severity | Description | Response Time | Examples |
|---|---|---|---|
| Critical | Restricted data sent to AI tool | Immediate (< 1 hour) | Credentials, PII, PHI submitted in prompts |
| High | Confidential data sent to non-approved tool | < 4 hours | Proprietary code sent to unauthorized AI service |
| Medium | Internal data sent with improper configuration | < 24 hours | Code sent while telemetry was enabled |
| Low | Policy violation with no data exposure | < 72 hours | Use of unapproved model version |

These baseline security policies form the foundation for all subsequent governance as the organization progresses through [Phase 2](/transformation/phase-2-expansion/) and [Phase 3](/transformation/phase-3-enterprise-scale/). They MUST be reviewed and updated at each phase gate to reflect lessons learned and evolving threat landscapes.

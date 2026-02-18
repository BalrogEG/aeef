---
title: "Secure Coding Guardrails"
sidebar_position: 2
description: "Minimum secure coding controls for AI-assisted development."
---

# Secure Coding Guardrails

## Mandatory Guardrails

- Enforce input validation for all external inputs.
- Require explicit authN/authZ checks before business logic.
- Block use of hardcoded secrets or tokens.
- Require parameterized queries for data access.
- Require structured error handling that avoids sensitive leakage.

## PR Security Checklist

- [ ] Input validation present and tested
- [ ] Authentication and authorization paths covered
- [ ] No insecure cryptographic defaults
- [ ] No secrets in code, logs, or tests
- [ ] Security scan status is passing

## Escalation Triggers

Escalate to the security lead when:

- Critical vulnerabilities are found
- A dependency has an actively exploited CVE
- AI-generated code bypasses existing security middleware

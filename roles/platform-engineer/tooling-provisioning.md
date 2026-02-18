---
title: "Tooling Provisioning"
sidebar_position: 3
description: "Provisioning model for approved AI tools and integrations."
---

# Tooling Provisioning

## Provisioning Model

- Maintain an approved tool catalog and versions.
- Provide role-based access (developer, reviewer, security).
- Enforce SSO and MFA for AI tool access.
- Define data handling policy per tool.

## Onboarding Checklist

- [ ] Tool access approved
- [ ] Data policy acknowledged
- [ ] Prompt attribution fields configured in PR template
- [ ] Secure defaults enabled in IDE integrations
- [ ] Initial training completed

## Deprovisioning Requirements

- Remove access within 24 hours of role change/offboarding.
- Revoke API keys and rotate shared tokens.
- Archive audit logs per retention policy.

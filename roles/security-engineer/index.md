---
title: "Security Engineer Guide"
sidebar_position: 1
description: "Guide for security engineers governing AI-assisted software delivery."
---

# Security Engineer Guide

AI-assisted development increases delivery speed and expands security risk exposure. This guide helps security engineers enforce practical controls without blocking engineering throughput.

## What This Guide Covers

| Section | Outcome |
|---|---|
| [Secure Coding Guardrails](/roles/security-engineer/secure-coding-guardrails) | Standardized secure coding checks for AI-generated code |
| [Threat Modeling AI Code](/roles/security-engineer/threat-modeling-ai-code) | Lightweight threat modeling integrated into PR workflow |
| [Vulnerability Response SLAs](/roles/security-engineer/vulnerability-response-slas) | Severity-based remediation workflow with clear ownership |

## Primary Standards

- [PRD-STD-004: Security Scanning](/production/standards/PRD-STD-004-security-scanning/)
- [PRD-STD-008: Dependency & License Compliance](/production/standards/PRD-STD-008-dependency-compliance/)
- [PRD-STD-002: Code Review](/production/standards/PRD-STD-002-code-review/)

## First 30 Days

1. Define mandatory AppSec gates for all AI-assisted PRs.
2. Align scan thresholds with severity-based SLAs.
3. Publish an approved secure-prompt pack in `prompt-library/by-role/security-engineer/`.

---
title: "Policy Templates"
sidebar_position: 4
description: "Ready-to-customize policy templates for AI governance, acceptable use, and data classification."
---

# Policy Templates

These are ready-to-customize policy templates. Fill in the bracketed fields, get sign-off from your leadership, and you have a governance foundation. Each template includes a "Startup Version" (1 page) and a "Full Version" (detailed).

---

## Acceptable Use Policy

### Startup Version (1 Page)

```markdown
# AI Tool Acceptable Use Policy
**[Company Name]** | Effective: [Date] | Version: 1.0

## Approved Tools
The following AI coding tools are approved for use with company code:
- [Tool 1, e.g., GitHub Copilot]
- [Tool 2, e.g., Cursor]
- [Tool 3, e.g., Claude Code]

Using any other AI tool with company code requires written approval from [CTO/Tech Lead name].

## What You CAN Do
- Use approved tools for code generation, debugging, refactoring, and test writing
- Use AI for documentation, comments, and commit messages
- Use AI for learning and exploring new libraries or patterns
- Share non-sensitive code snippets with AI tools for assistance

## What You MUST NOT Do
- Share customer data, PII, or personal information with any AI tool
- Paste API keys, passwords, tokens, or connection strings into AI tools
- Share proprietary algorithms or trade secrets that are core competitive advantages
- Use AI-generated code without reviewing every line before committing
- Disable security scanning or linting to get AI-generated code to pass CI
- Use AI tools to generate code for security-critical modules
  ([LIST SPECIFIC DIRECTORIES, e.g., src/auth/, src/crypto/])

## Review Requirement
All AI-assisted code changes MUST go through pull request review before merging to
main/production branches. The PR must disclose AI tool usage using the team's PR
template.

## Incident Reporting
If you accidentally share sensitive data with an AI tool, immediately notify
[CTO/Tech Lead name] and [security contact if applicable]. Prompt reporting reduces
risk — there are no penalties for honest mistakes reported quickly.

## Acknowledgment
By using AI tools for [Company Name] development, you agree to follow this policy.

Signed: _________________ Date: _________
```

### Full Version

```markdown
# AI Coding Tool Acceptable Use Policy
**[Company Name]** | Effective: [Date] | Version: 1.0
**Policy Owner:** [Name, Title]
**Approved By:** [Name, Title]
**Review Cycle:** Quarterly

## 1. Purpose
This policy defines the acceptable use of AI coding assistants for software
development at [Company Name]. It establishes boundaries that protect
intellectual property, customer data, and code quality while enabling
engineers to benefit from AI-assisted productivity.

## 2. Scope
This policy applies to:
- All employees, contractors, and third-party developers writing code for
  [Company Name]
- All environments: local development, staging, and production
- All AI tools: IDE extensions, web-based assistants, terminal tools, and
  API-based integrations

## 3. Approved Tools
| Tool | Version | Tier | Approved Use Cases |
|------|---------|------|--------------------|
| [Tool 1] | [Version] | [Free/Pro/Business] | [Code generation, review, testing] |
| [Tool 2] | [Version] | [Tier] | [Specific use cases] |

Tools not on this list MUST NOT be used with company code. Requests to
evaluate new tools should be submitted to [approval authority].

## 4. Data Classification for AI Tools

### PERMITTED (May share with approved AI tools)
- Open-source code and public documentation
- Non-sensitive application code (CRUD operations, UI components, utilities)
- Error messages and stack traces (with sensitive data redacted)
- General architecture questions (without revealing proprietary details)

### RESTRICTED (Must not share with AI tools)
- Customer data, PII, or data subject to GDPR/CCPA
- API keys, passwords, tokens, secrets, or connection strings
- Proprietary algorithms that are core competitive advantages
- Code from security-critical modules: [LIST DIRECTORIES]
- Internal security audit findings or vulnerability details
- Unreleased product features or roadmap details
- Data subject to NDA or customer contractual restrictions

### PROHIBITED (Never share, regardless of tool)
- Production database contents or exports
- Customer financial data or payment information
- Authentication credentials for production systems
- Encryption keys or certificates

## 5. Code Review Requirements
- All AI-assisted code MUST be reviewed via pull request before merging
- Pull requests MUST disclose AI tool usage using the standard PR template
- Reviewers MUST apply AI-specific review criteria per PRD-STD-002
- AI-generated code in security-sensitive areas requires review by [security
  engineer / senior developer]

## 6. Prohibited Practices
- Using AI tools to bypass or circumvent security controls
- Accepting AI-generated code without understanding every line
- Using AI tools to generate code in languages or frameworks where the
  developer lacks proficiency to review the output
- Disabling or modifying CI/CD security checks to accommodate AI output
- Using personal AI tool accounts for company development (use company-
  provisioned accounts only)

## 7. Incident Reporting
Report the following immediately to [security contact]:
- Accidental sharing of restricted or prohibited data with AI tools
- Discovery of AI-generated code in production that bypassed review
- AI tool suggesting code that contains embedded credentials or secrets
- Suspected data breach related to AI tool usage

Reporting timeline: within 4 business hours of discovery.
No punitive action for good-faith reporting of accidental violations.

## 8. Compliance and Enforcement
- Violations will be addressed through [existing HR/management process]
- Repeated violations may result in AI tool access revocation
- Policy compliance will be audited quarterly
- Exceptions require written approval from [policy owner]

## 9. Policy Updates
This policy is reviewed quarterly. Changes are communicated via [channel].
Material changes require acknowledgment from all covered personnel.
```

---

## Data Classification Policy for AI Tools

```markdown
# Data Classification Policy for AI Coding Tools
**[Company Name]** | Effective: [Date]

## Classification Levels

### Level 1: PUBLIC — Safe for AI Tools
Data that is publicly available or non-sensitive.

**Examples:**
- Open-source library usage patterns
- Public API documentation
- Generic coding patterns and algorithms
- Non-proprietary configuration templates
- Published error codes and documentation

**AI Tool Rule:** May be freely shared with any approved AI tool.

### Level 2: INTERNAL — Safe with Approved Tools Only
Internal code and data that is not publicly available but poses low risk
if exposed.

**Examples:**
- Application business logic (non-core)
- Internal API schemas
- Test data (synthetic, not from production)
- Development configuration files (without secrets)
- Architecture documentation

**AI Tool Rule:** May be shared with approved AI tools only. Must not use
personal or free-tier accounts that may use data for training.

### Level 3: CONFIDENTIAL — Do NOT Share with AI Tools
Sensitive data that could cause harm if exposed.

**Examples:**
- Customer data, PII, or user-generated content
- API keys, tokens, passwords, secrets
- Proprietary algorithms and trade secrets
- Security vulnerability details
- Financial data and projections
- Data under NDA or contractual restrictions

**AI Tool Rule:** MUST NOT be shared with any AI tool under any
circumstances. If accidentally shared, follow incident reporting
procedures immediately.

### Level 4: RESTRICTED — Never Leave Secure Environment
Highly sensitive data with regulatory or legal restrictions.

**Examples:**
- Production database credentials
- Encryption keys and certificates
- Payment processing data (PCI-DSS scope)
- Healthcare data (HIPAA scope)
- Data subject to legal hold

**AI Tool Rule:** MUST NOT be shared with any AI tool. MUST NOT be
stored on developer machines. Access through secure, audited channels only.

## Quick Reference Card

| Classification | Share with AI? | Examples |
|---|---|---|
| PUBLIC | Yes, any tool | Open-source code, public docs |
| INTERNAL | Approved tools only | Business logic, internal APIs |
| CONFIDENTIAL | NEVER | Customer data, secrets, IP |
| RESTRICTED | NEVER | Production creds, PCI/HIPAA data |

## Developer Checklist Before Using AI

Before pasting code or data into an AI tool, ask:
- [ ] Does this contain any customer data or PII?
- [ ] Does this contain API keys, passwords, or secrets?
- [ ] Is this code from a security-critical module?
- [ ] Is this data subject to a customer NDA?
- [ ] Would I be comfortable if this appeared publicly?

If you answered YES to any of the first four questions, DO NOT share with AI tools.
```

---

## AI Incident Response Template

```markdown
# AI-Related Incident Response Playbook
**[Company Name]** | Version: 1.0

## Incident Categories

### Category 1: Data Leakage to AI Tool
**Trigger:** Sensitive data (secrets, customer data, PII) was shared with an
AI tool.

**Response Steps:**
1. IMMEDIATE: Rotate any exposed credentials (API keys, tokens, passwords)
2. IMMEDIATE: Document exactly what was shared and with which tool
3. WITHIN 1 HOUR: Notify [security contact] and [CTO/management]
4. WITHIN 4 HOURS: Check if the AI tool vendor has a data deletion process
5. WITHIN 24 HOURS: Conduct root cause analysis — how did this happen?
6. WITHIN 1 WEEK: Implement preventive controls (file exclusions, training)

### Category 2: Vulnerability in AI-Generated Code (Pre-Production)
**Trigger:** Security scan or code review finds a vulnerability in AI-generated
code before it reaches production.

**Response Steps:**
1. Fix the vulnerability per normal development process
2. Document the finding in the team's AI retro notes
3. Check for similar patterns in other recent AI-assisted PRs
4. If it's a recurring pattern, add it to the AI review checklist

### Category 3: Vulnerability in AI-Generated Code (Production)
**Trigger:** A production vulnerability is traced back to AI-generated code.

**Response Steps:**
1. IMMEDIATE: Follow standard incident response (contain, mitigate)
2. WITHIN 4 HOURS: Determine blast radius — what data/systems were affected
3. WITHIN 24 HOURS: Identify the PR that introduced the vulnerability
4. WITHIN 24 HOURS: Review how it passed code review — what was missed?
5. WITHIN 1 WEEK: Update review checklists and CI scanning rules
6. WITHIN 2 WEEKS: Brief the team on lessons learned

### Category 4: AI Tool Compliance Violation
**Trigger:** Unapproved AI tool used, or approved tool used outside policy
boundaries.

**Response Steps:**
1. Document the violation and assess potential data exposure
2. If data was sent to unapproved tool: treat as Category 1
3. Discuss with the individual — focus on education, not punishment
4. Review whether the policy needs updating (was the violation reasonable?)
5. If systemic: conduct team training session

## Incident Report Template

| Field | Value |
|---|---|
| Date/Time: | |
| Reporter: | |
| Category: | 1 / 2 / 3 / 4 |
| AI Tool Involved: | |
| Data/Code Affected: | |
| Severity: | Critical / High / Medium / Low |
| Immediate Actions Taken: | |
| Root Cause: | |
| Corrective Actions: | |
| Preventive Actions: | |
| Review Date: | |
```

---

## AI Tool Evaluation Scorecard

```markdown
# AI Tool Evaluation Scorecard

## Tool Under Evaluation
| Field | Value |
|---|---|
| Tool Name: | |
| Version: | |
| Vendor: | |
| Tier Evaluated: | Free / Pro / Business / Enterprise |
| Evaluator: | |
| Date: | |

## Scoring (1-5, where 5 = excellent)

### Functionality
| Criterion | Score | Notes |
|---|---|---|
| Code completion quality | /5 | |
| Chat/instruction quality | /5 | |
| Multi-file awareness | /5 | |
| Codebase understanding | /5 | |
| Test generation quality | /5 | |
| **Subtotal** | /25 | |

### Security & Privacy
| Criterion | Score | Notes |
|---|---|---|
| Data handling transparency | /5 | |
| Opt-out of training data | /5 | |
| File/directory exclusion | /5 | |
| Admin controls available | /5 | |
| SOC 2 / security certifications | /5 | |
| **Subtotal** | /25 | |

### Integration
| Criterion | Score | Notes |
|---|---|---|
| IDE compatibility | /5 | |
| CI/CD integration | /5 | |
| Custom instructions support | /5 | |
| API availability | /5 | |
| Team configuration management | /5 | |
| **Subtotal** | /25 | |

### Cost & Value
| Criterion | Score | Notes |
|---|---|---|
| Free tier adequacy | /5 | |
| Price per developer (paid) | /5 | |
| Price predictability | /5 | |
| Enterprise discount availability | /5 | |
| ROI vs. alternatives | /5 | |
| **Subtotal** | /25 | |

### **TOTAL SCORE** | /100 | |

## Recommendation
- [ ] Approve for immediate use
- [ ] Approve with conditions: ___
- [ ] Defer pending: ___
- [ ] Do not approve. Reason: ___
```

---

## Code Review Checklist (AI-Specific)

```markdown
# AI-Assisted Code Review Checklist

Use this checklist in addition to your standard code review process when
reviewing PRs that disclose AI assistance.

## AI-Specific Checks
- [ ] PR discloses AI tool used and level of assistance
- [ ] Reviewer has verified they understand ALL generated code
- [ ] No hallucinated APIs (functions that don't exist in the codebase or libraries)
- [ ] No outdated library usage (deprecated APIs, old syntax patterns)
- [ ] No hardcoded values that should be configurable
- [ ] No placeholder comments (TODO, FIXME, "your code here")
- [ ] Error handling is complete (not just happy path)
- [ ] Edge cases are handled (null, empty, boundary values)

## Security Checks
- [ ] No secrets or credentials in code
- [ ] User input is validated before use
- [ ] No SQL/command/path injection vectors
- [ ] Authentication/authorization checks in place
- [ ] Sensitive data is not logged or exposed in errors

## Quality Checks
- [ ] Tests cover new code paths (not just mock verification)
- [ ] Code follows existing project patterns and conventions
- [ ] No unnecessary abstractions or over-engineering
- [ ] No unused imports, variables, or dead code
- [ ] Documentation updated if public API changed
```

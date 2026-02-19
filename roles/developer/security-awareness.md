---
title: "Security Awareness"
sidebar_position: 5
description: "Security awareness for developers using AI coding tools."
---

# Security Awareness

AI coding tools introduce a new class of security risks that traditional security training does not address. With AI co-authored code showing a 2.74x higher vulnerability rate, every developer must understand not only the vulnerabilities that AI can introduce into your code but also the data leakage risks inherent in using AI tools themselves. This section aligns with [PRD-STD-004](/production/standards/PRD-STD-004-security-scanning) and extends [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/) with AI-specific security guidance.

## Two Dimensions of AI Security Risk

AI security risks fall into two distinct categories, and you must address both.

**Dimension 1: Risks IN the code.** AI generates code that contains vulnerabilities -- injection flaws, broken authentication, insecure deserialization, and more. These risks exist in the output.

**Dimension 2: Risks FROM the tool.** Using AI tools can leak sensitive data -- source code, customer information, API keys, and proprietary logic. These risks exist in the input.

## Common AI Vulnerability Patterns

The following vulnerability categories appear disproportionately in AI-generated code. Learn to recognize them.

### Injection Vulnerabilities

AI models frequently generate code that concatenates user input into queries, commands, or templates rather than using parameterized approaches.

**SQL Injection:**
```python
# AI-GENERATED (DANGEROUS)
query = f"SELECT * FROM users WHERE email = '{email}'"
cursor.execute(query)

# CORRECT
query = "SELECT * FROM users WHERE email = %s"
cursor.execute(query, (email,))
```

**Command Injection:**
```python
# AI-GENERATED (DANGEROUS)
os.system(f"convert {input_file} {output_file}")

# CORRECT
subprocess.run(["convert", input_file, output_file], check=True)
```

AI generates injection-vulnerable code because its training data contains both secure and insecure patterns. The insecure patterns are often simpler and more common in tutorials, making them statistically likely to be suggested.

### Broken Authentication and Authorization

AI tools frequently generate endpoints and functions without proper access controls:

- API routes missing authentication middleware
- Functions that check authentication but not authorization (verifying identity but not permissions)
- Role checks that use client-provided role claims without server-side verification
- Session management with predictable tokens or insufficient expiration

:::warning
Always verify that every AI-generated endpoint includes authentication and authorization checks. AI will happily generate a fully functional CRUD API with zero access controls if you do not explicitly request them.
:::

### Insecure Defaults

AI tends to generate code with permissive defaults:

- CORS configured with `Access-Control-Allow-Origin: *`
- Debug mode enabled in production configurations
- Logging that includes sensitive fields (passwords, tokens, PII)
- File upload handlers without size limits or type validation
- TLS/SSL verification disabled (`verify=False`)

### Hardcoded Secrets

This is one of the most common AI security issues. AI models frequently generate placeholder credentials that look realistic:

```javascript
// AI-GENERATED (DANGEROUS)
const API_KEY = "sk-proj-abc123def456";
const DB_PASSWORD = "supersecretpassword";

// CORRECT
const API_KEY = process.env.API_KEY;
const DB_PASSWORD = process.env.DB_PASSWORD;
```

**Always scan AI-generated code for:**
- Strings that match API key patterns (prefixed with `sk-`, `pk_`, `AKIA`, etc.)
- Base64-encoded strings that might be credentials
- Connection strings with embedded passwords
- JWT tokens or session identifiers

### Insecure Cryptography

AI may suggest outdated or weak cryptographic approaches:

- MD5 or SHA1 for password hashing (use bcrypt, scrypt, or Argon2)
- ECB mode for block ciphers (use GCM or CBC with proper IV handling)
- Custom encryption schemes instead of established libraries
- Insufficient key lengths or hardcoded initialization vectors

## Data Leakage Risks

Every interaction with an AI tool involves sending data to the model. Understand what you are sharing and the associated risks.

### What NOT to Include in AI Prompts

| Data Category | Risk Level | Example | Alternative |
|--------------|-----------|---------|-------------|
| **API keys and secrets** | Critical | Pasting a .env file for context | Describe the environment variable names without values |
| **Customer PII** | Critical | Using real customer data in examples | Use synthetic data or anonymized samples |
| **Proprietary algorithms** | High | Sharing your competitive advantage for optimization | Describe the interface, not the implementation |
| **Internal infrastructure details** | High | IP addresses, server names, network topology | Use generic descriptions ("the database server") |
| **Source code of security controls** | High | Authentication/authorization implementations | Describe the requirement, not the existing implementation |
| **Compliance-sensitive code** | Medium | Code subject to regulatory audit | Check with your compliance team first |

### Secure Prompt Practices

Follow these practices to minimize data leakage:

1. **Sanitize before prompting.** Remove real credentials, customer data, and infrastructure details before pasting code into AI tools.
2. **Use approved tools only.** Only use AI tools sanctioned by [PRD-STD-001](/production/standards/PRD-STD-001-prompt-engineering). Approved tools have data handling agreements in place.
3. **Prefer local models for sensitive code.** When available, use locally-hosted AI models for security-critical or compliance-sensitive code.
4. **Review telemetry settings.** Understand what data your AI tool sends to the provider. Disable training data sharing where possible.
5. **Never paste production logs.** Logs often contain PII, tokens, and system details. Sanitize thoroughly or create synthetic examples.

:::info
Your organization's approved tools and their data handling policies are documented in [PRD-STD-001](/production/standards/PRD-STD-001-prompt-engineering). If you are unsure whether a specific piece of data is safe to share with an AI tool, ask your [Development Manager](/roles/development-manager/) or security team.
:::

## Secrets Management

AI-assisted development increases the risk of secrets ending up in code. Implement these defenses:

### Pre-Commit Hooks

Configure pre-commit hooks to scan for secrets before they reach version control:

- **git-secrets** -- AWS credential patterns
- **detect-secrets** -- General-purpose secret detection
- **trufflehog** -- Entropy-based and pattern-based detection
- **gitleaks** -- Comprehensive secret scanning

These tools should be configured as mandatory pre-commit checks per [PRD-STD-005](/production/standards/PRD-STD-004-security-scanning).

### Environment Variable Discipline

- Never hardcode configuration values, even in development
- Use `.env.example` files with placeholder values (not real secrets) checked into version control
- Use a secrets manager (Vault, AWS Secrets Manager, Azure Key Vault) for production
- Rotate any secret that has ever appeared in a commit, even if the commit was reverted

### AI-Specific Secret Risks

- **Prompt history.** Some AI tools store prompt history. If you pasted a secret, it may be retained.
- **Code completion context.** AI tools often send surrounding code as context. If a secret is nearby in the file, it may be transmitted.
- **Model training.** Unless explicitly opted out, your prompts may be used to train future model versions.

## Security Review Checklist for AI-Generated Code

Use this checklist on every PR that contains AI-generated code:

- [ ] No hardcoded secrets, credentials, or tokens
- [ ] All user input is validated and sanitized
- [ ] SQL queries use parameterized statements
- [ ] API endpoints have appropriate authentication and authorization
- [ ] CORS is configured with specific origins, not wildcards
- [ ] Error messages do not leak implementation details
- [ ] Logging does not include sensitive data
- [ ] File operations validate paths to prevent traversal attacks
- [ ] Cryptographic operations use current, strong algorithms
- [ ] Dependencies are from trusted sources with no known vulnerabilities
- [ ] No disabled security controls (SSL verification, CSRF protection, etc.)

## Incident Response

If you discover a security issue in AI-generated code that has reached production:

1. **Report immediately** to your security team and [Development Manager](/roles/development-manager/)
2. **Assess blast radius** -- has the vulnerability been exploited? What data was exposed?
3. **Patch and deploy** -- fix the vulnerability following your standard incident process
4. **Conduct root cause analysis** -- determine why the vulnerability passed code review
5. **Update practices** -- add the pattern to your team's review checklist and share the learning
6. **Scan for similar patterns** -- the same AI tool likely generated similar vulnerabilities elsewhere

For team-level security oversight, see [Quality & Risk Oversight](/roles/development-manager/quality-risk-oversight). For organizational risk governance, see [Risk & Governance Executive Summary](/roles/executive/risk-governance-summary).

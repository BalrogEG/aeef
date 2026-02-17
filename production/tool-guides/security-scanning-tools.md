---
title: "Security Scanning Tools"
sidebar_position: 5
description: "Security scanning tools for AI-generated code."
---

# Security Scanning Tools

Security scanning is a mandatory requirement for all AI-generated code per [PRD-STD-004: Security Scanning](/production/standards/PRD-STD-004-security-scanning/). AI-generated code carries a 2.74x higher vulnerability rate than traditionally written code, making automated security analysis an essential defense layer. This guide covers the specific tools, configurations, and integration patterns needed to implement effective security scanning for AI-assisted development.

## Tool Categories

Security scanning for AI-generated code requires four categories of tools, each addressing different vulnerability types:

| Category | What It Detects | When It Runs | AEEF Requirement |
|---|---|---|---|
| **SAST** (Static Application Security Testing) | Source code vulnerabilities without execution | Every PR / commit | REQ-004-01 (Mandatory) |
| **DAST** (Dynamic Application Security Testing) | Runtime vulnerabilities in deployed applications | Per release cycle (staging) | REQ-004-07 (Mandatory for external apps) |
| **SCA** (Software Composition Analysis) | Vulnerable dependencies, license issues | Every build | REQ-004-11 (Mandatory) |
| **Secret Detection** | Hardcoded credentials, API keys, tokens | Every commit (pre-commit + CI) | REQ-004-17 (Mandatory) |

## SAST Tools

### Recommended SAST Tools

| Tool | Languages | AI-Specific Strengths | Integration |
|---|---|---|---|
| **Semgrep** | 30+ languages | Custom rules for AI patterns; fast; developer-friendly | CLI, CI/CD, IDE |
| **SonarQube / SonarCloud** | 30+ languages | Comprehensive rule set; technical debt tracking | CI/CD, IDE, PR decoration |
| **CodeQL (GitHub)** | 10+ languages | Deep semantic analysis; data flow tracking | GitHub Actions native |
| **Snyk Code** | 10+ languages | Real-time scanning; AI-powered fix suggestions | CI/CD, IDE, PR checks |
| **Checkmarx** | 25+ languages | Enterprise-grade; compliance reporting | CI/CD, IDE, SDLC integration |
| **Bandit** | Python | Python-specific security checks | CI/CD, pre-commit |
| **Brakeman** | Ruby/Rails | Rails-specific security analysis | CI/CD |

### AI-Specific SAST Configuration

Standard SAST configurations are necessary but not sufficient for AI-generated code. Add these AI-specific rules:

**1. Hallucinated Security Function Detection**

AI may generate calls to security functions that do not exist or do not behave as expected:

```yaml
# Semgrep rule example: detect potential hallucinated crypto functions
rules:
  - id: ai-hallucinated-crypto
    patterns:
      - pattern: crypto.$FUNC(...)
      - metavariable-regex:
          metavariable: $FUNC
          regex: ^(secureHash|safeEncrypt|validateToken|signSecure)$
    message: "Potentially hallucinated crypto function. Verify this function exists in the crypto module."
    severity: ERROR
```

**2. Deprecated API Detection**

AI frequently suggests deprecated APIs from older training data:

```yaml
# Semgrep rule: detect deprecated crypto algorithms
rules:
  - id: ai-deprecated-crypto
    patterns:
      - pattern-either:
          - pattern: crypto.createHash("md5")
          - pattern: crypto.createHash("sha1")
          - pattern: hashlib.md5(...)
          - pattern: MessageDigest.getInstance("MD5")
    message: "Deprecated hash algorithm. AI-generated code frequently uses outdated crypto. Use SHA-256 or better."
    severity: ERROR
```

**3. Incomplete Input Validation**

AI often generates partial validation that misses critical cases:

```yaml
# Semgrep rule: detect SQL queries without parameterization
rules:
  - id: ai-sql-string-concat
    patterns:
      - pattern: |
          $QUERY = "..." + $INPUT + "..."
      - metavariable-regex:
          metavariable: $QUERY
          regex: .*(SELECT|INSERT|UPDATE|DELETE|DROP).*
    message: "String concatenation in SQL query. AI-generated code frequently lacks proper parameterization."
    severity: ERROR
```

### SAST Integration Pattern

```yaml
# GitHub Actions example
name: SAST Security Scan
on: [pull_request]

jobs:
  semgrep:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Semgrep
        uses: returntocorp/semgrep-action@v1
        with:
          config: >-
            p/default
            p/owasp-top-ten
            p/security-audit
            .semgrep/ai-specific-rules.yml
        env:
          SEMGREP_APP_TOKEN: ${{ secrets.SEMGREP_APP_TOKEN }}

  sonarcloud:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

## DAST Tools

### Recommended DAST Tools

| Tool | Type | Best For | Integration |
|---|---|---|---|
| **OWASP ZAP** | Open source | General web application scanning | CI/CD, standalone |
| **Burp Suite Enterprise** | Commercial | Comprehensive web application security | CI/CD, scheduled scans |
| **Nuclei** | Open source | Template-based vulnerability scanning | CI/CD, CLI |
| **StackHawk** | Commercial | Developer-friendly DAST in CI/CD | CI/CD native |

### DAST Configuration for AI-Generated Endpoints

When AI generates API endpoints, configure DAST scans to:

1. **Test all AI-generated endpoints.** Maintain a list of endpoints that were generated or modified by AI and ensure DAST coverage includes them.
2. **Include authenticated scanning.** AI-generated endpoints may have authorization flaws that are only detectable with authenticated sessions.
3. **Test with malicious payloads.** Standard fuzzing plus specific payloads for common AI mistakes: SQL injection variants, XSS with various encodings, path traversal sequences.
4. **Validate error responses.** AI-generated error handlers may leak internal details (stack traces, database errors, internal paths).

## SCA Tools

### Recommended SCA Tools

| Tool | Capabilities | Integration | License Scanning |
|---|---|---|---|
| **Snyk** | Vulnerability detection, fix PRs, license compliance | CI/CD, IDE, CLI | Yes |
| **GitHub Dependabot** | Vulnerability alerts, automated updates | GitHub native | Limited |
| **Mend (WhiteSource)** | Vulnerability, license, custom policies | CI/CD, IDE | Yes |
| **Grype** | Vulnerability scanning for containers and filesystems | CI/CD, CLI | No |
| **FOSSA** | License compliance, SBOM, policy enforcement | CI/CD | Yes (primary focus) |
| **Trivy** | Vulnerabilities, misconfigurations, secrets, licenses | CI/CD, CLI | Yes |

### SCA Configuration for AI-Introduced Dependencies

AI tools frequently introduce new dependencies. Configure SCA tools to:

1. **Alert on new dependencies.** Flag any pull request that adds a new direct dependency for additional scrutiny per [PRD-STD-008](/production/standards/PRD-STD-008-dependency-compliance/).
2. **Block prohibited licenses.** Configure the tool to fail CI on licenses not on the approved list (see PRD-STD-008 license categories).
3. **Check transitive dependencies.** AI may suggest a lightweight direct dependency that pulls in dozens of transitive dependencies with their own vulnerabilities and licenses.
4. **Monitor continuously.** Dependencies that are clean today may have vulnerabilities disclosed tomorrow. Continuous monitoring with daily scans is required.

### SCA Pipeline Integration

```yaml
# GitHub Actions example
name: Dependency Security
on: [pull_request, schedule]

jobs:
  snyk-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Snyk to check for vulnerabilities
        uses: snyk/actions/node@master
        with:
          args: --severity-threshold=critical --fail-on=all
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}

  license-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Check licenses
        run: npx license-checker --failOn "GPL-2.0;GPL-3.0;AGPL-3.0;SSPL-1.0"
```

## Secret Detection

### Recommended Secret Detection Tools

| Tool | Integration | Pre-commit Support | CI/CD Support |
|---|---|---|---|
| **GitLeaks** | CLI, CI/CD, pre-commit | Yes | Yes |
| **TruffleHog** | CLI, CI/CD | Yes | Yes |
| **GitHub Secret Scanning** | GitHub native | N/A | Yes (push protection) |
| **detect-secrets (Yelp)** | CLI, pre-commit | Yes | Yes |
| **GitGuardian** | SaaS, CI/CD, pre-commit | Yes | Yes |

### Secret Detection Configuration

AI-generated code is particularly prone to including hardcoded values that resemble or are actual secrets. Configure secret detection at two levels:

**Pre-commit (local, blocking):**
```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/gitleaks/gitleaks
    rev: v8.18.0
    hooks:
      - id: gitleaks
```

**CI/CD (server-side, blocking):**
```yaml
# GitHub Actions
name: Secret Detection
on: [pull_request]
jobs:
  gitleaks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: gitleaks/gitleaks-action@v2
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

## False Positive Management

False positives are an ongoing challenge with security scanning tools, and AI-generated code can increase false positive rates because scanning tools may not recognize AI-specific patterns.

### False Positive Management Process

1. **Triage all findings.** Every finding must be evaluated; auto-dismissal is not permitted for Critical or High severity.
2. **Document suppression decisions.** When a finding is determined to be a false positive, document the rationale, the reviewer's identity, and the date.
3. **Use inline suppressions sparingly.** Prefer centralized suppression configuration files over inline comments that may be copy-pasted to other locations.
4. **Review suppressions quarterly.** Tool updates may change false positive status. Suppressed findings should be re-evaluated.
5. **Track false positive rate.** If the rate exceeds 30% for a tool, reconfigure or evaluate alternative tools.

### Suppression File Example

```yaml
# .gitleaks-baseline.json or equivalent
# Each suppression must include justification
suppressions:
  - finding: "generic-api-key"
    file: "src/config/example.config.ts"
    reason: "Example configuration with placeholder values, not real credentials"
    reviewer: "jsmith"
    date: "2025-06-15"
```

## Vulnerability Remediation SLA Tracking

Per [PRD-STD-004](/production/standards/PRD-STD-004-security-scanning/), all vulnerabilities must be remediated within defined SLAs:

| Severity | SLA | Tracking Approach |
|---|---|---|
| Critical (CVSS 9.0+) | 24 hours | Immediate alert to security team + engineering lead; tracked in incident management |
| High (CVSS 7.0-8.9) | 7 days | Tracked in sprint backlog with priority label |
| Medium (CVSS 4.0-6.9) | 30 days | Tracked in backlog |
| Low (CVSS 0.1-3.9) | 90 days | Tracked in backlog |

### SLA Dashboard Metrics

Track and report monthly:

- Total open vulnerabilities by severity
- SLA compliance rate (percentage remediated within SLA)
- Mean time to remediation (MTTR) by severity
- Vulnerability introduction rate from AI-generated code vs. manually written code
- False positive rate per tool

These metrics support [Pillar 4: Measurement & Metrics](/pillars/pillar-3-productivity/) and provide visibility into the security posture of AI-assisted development.

For related guidance, see [PRD-STD-004: Security Scanning](/production/standards/PRD-STD-004-security-scanning/), [PRD-STD-008: Dependency Compliance](/production/standards/PRD-STD-008-dependency-compliance/), and [PRD-STD-007: Quality Gates](/production/standards/PRD-STD-007-quality-gates/).

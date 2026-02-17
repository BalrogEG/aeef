---
title: "CI/CD Pipeline Integration"
sidebar_position: 3
description: "Integrating AI-assisted development into CI/CD pipelines."
---

# CI/CD Pipeline Integration

This section defines how to integrate AI code quality checks, security scanning, and governance gates into existing CI/CD pipelines to ensure automated compliance at the deployment level. Pipeline integration is what transforms governance from a manual process into an automated enforcement mechanism. By the end of Phase 2, every team using AI-assisted development MUST have their pipelines configured with the gates described in this section. This directly supports the [Governance Framework](/transformation/phase-2-expansion/governance-implementation/) and builds toward the automated workflows described in [Phase 3: AI-First Workflows](/transformation/phase-3-enterprise-scale/ai-first-workflows/).

## Pipeline Architecture Overview

AI governance integrates into the CI/CD pipeline at four stages. Each stage adds specific checks that validate AI-assisted code before it progresses further toward production.

```
[Commit] --> [Build & Test] --> [Security & Quality Gate] --> [Governance Gate] --> [Deploy]
    |              |                     |                          |                  |
    v              v                     v                          v                  v
 Pre-commit    Unit tests          SAST/DAST scan            AI attribution      Canary/staged
 hooks run     Integration tests   AI quality checks         Policy compliance    deployment
 Secrets scan  Coverage check      Dependency audit           Risk assessment     Monitoring
```

## Stage 1: Pre-Commit Checks

Pre-commit hooks execute on the developer's local machine before code enters the repository. These MUST be enforced through repository-level configuration (e.g., pre-commit framework, Husky) and SHOULD NOT be bypassable without a documented exception.

### Required Pre-Commit Checks

| Check | Tool Examples | Action on Failure |
|---|---|---|
| Secrets detection | gitleaks, truffleHog, detect-secrets | Block commit; alert developer |
| Credential pattern matching | Custom regex rules for API keys, tokens | Block commit; alert developer |
| AI attribution metadata validation | Custom script | Warn (block in Phase 3) |
| Large file detection | pre-commit built-in | Block commit if > threshold |
| Basic linting | ESLint, Pylint, Clippy, etc. | Block commit |

### Configuration Example (pre-commit-config.yaml)

```yaml
repos:
  - repo: https://github.com/gitleaks/gitleaks
    rev: v8.18.0
    hooks:
      - id: gitleaks
  - repo: local
    hooks:
      - id: ai-attribution-check
        name: AI Attribution Metadata
        entry: scripts/check-ai-attribution.sh
        language: script
        stages: [commit]
      - id: data-classification-check
        name: Data Classification Scan
        entry: scripts/scan-classified-data.sh
        language: script
        stages: [commit]
```

## Stage 2: Build and Test Validation

The build stage validates that AI-assisted code meets functional requirements through automated testing.

### Required Build Checks

| Check | Minimum Threshold | Action on Failure |
|---|---|---|
| Unit test pass rate | 100% | Block pipeline |
| Integration test pass rate | 100% | Block pipeline |
| Code coverage (overall) | Maintain baseline or improve | Warn (block if > 5% decrease) |
| Code coverage (AI-assisted files) | Same threshold as overall | Block pipeline |
| Build compilation | Clean build with no errors | Block pipeline |

### AI-Specific Test Requirements

For files identified as AI-assisted (via attribution metadata), the pipeline SHOULD enforce additional test requirements:

- **Mutation testing** — RECOMMENDED for AI-assisted code to validate test effectiveness. AI-generated tests sometimes achieve coverage without meaningful assertions.
- **Property-based testing** — RECOMMENDED for AI-generated algorithmic code to catch edge cases that AI-generated example-based tests may miss.
- **Test origin tracking** — The pipeline SHOULD track whether tests were AI-generated or human-written, enabling analysis of AI-generated test effectiveness over time.

## Stage 3: Security and Quality Gate

This is the primary automated governance checkpoint. It MUST be configured as a blocking gate — the pipeline SHALL NOT proceed if any Critical or High findings are unresolved.

### Security Scanning Requirements

| Scan Type | Tool Examples | Frequency | Blocking Criteria |
|---|---|---|---|
| Static Application Security Testing (SAST) | SonarQube, Semgrep, CodeQL | Every PR | Any Critical or High finding |
| Software Composition Analysis (SCA) | Snyk, Dependabot, OWASP Dependency-Check | Every PR | Any Critical finding; High findings reviewed |
| Secret scanning (pipeline-level) | gitleaks, GitGuardian | Every PR | Any finding |
| Container scanning (if applicable) | Trivy, Grype | Every build | Any Critical finding |
| License compliance | FOSSA, ScanCode | Weekly (or on dependency change) | Restricted license detected |

### AI-Specific Quality Checks

In addition to standard security scanning, the following AI-specific quality checks MUST be integrated:

| Check | Description | Implementation |
|---|---|---|
| **AI attribution completeness** | Verify all AI-assisted files have proper attribution metadata | Custom pipeline step parsing commit metadata |
| **AI code complexity analysis** | Flag AI-generated code with unusually high cyclomatic complexity | SAST tool with custom thresholds |
| **Hallucinated dependency check** | Verify all imported packages/modules actually exist in the registry | Custom script querying package registries |
| **Deprecated API detection** | Check for use of deprecated APIs that AI tools commonly suggest | SAST rules or custom linting |
| **Duplicated pattern detection** | Identify AI-generated code that duplicates existing codebase patterns | Code duplication tools (PMD CPD, jscpd) |

### Pipeline Configuration Example (GitHub Actions)

```yaml
name: AI Governance Gate
on: [pull_request]

jobs:
  security-quality-gate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: AI Attribution Check
        run: |
          ./scripts/verify-ai-attribution.sh
          if [ $? -ne 0 ]; then
            echo "::error::AI attribution metadata missing"
            exit 1
          fi

      - name: SAST Scan
        uses: SonarSource/sonarqube-scan-action@v2
        with:
          args: >
            -Dsonar.qualitygate.wait=true

      - name: Dependency Vulnerability Scan
        uses: snyk/actions/node@master
        with:
          args: --severity-threshold=high

      - name: Hallucinated Dependency Check
        run: ./scripts/verify-dependencies-exist.sh

      - name: Secret Scan
        uses: gitleaks/gitleaks-action@v2

      - name: License Compliance
        run: ./scripts/check-licenses.sh
```

## Stage 4: Governance Gate

The governance gate is the final automated checkpoint before deployment. It aggregates results from all prior stages and applies organization-level policy decisions.

### Governance Gate Checks

| Check | Description | Blocking |
|---|---|---|
| All prior stage gates passed | No skipped or failed upstream gates | Yes |
| Risk assessment score within threshold | Project risk score per [Risk Assessment](/transformation/phase-2-expansion/risk-assessment-scaling/) | Yes, if above threshold |
| Required reviewer approvals obtained | Minimum approvals including AI-trained reviewer | Yes |
| Change window compliance | Deployment within approved change windows | Yes, for production |
| Audit trail complete | All governance events logged | Yes |

### Automated vs. Manual Governance

| Scenario | Governance Type | Rationale |
|---|---|---|
| Standard PR, low-risk project | Fully automated | Pipeline gates provide sufficient assurance |
| Standard PR, elevated-risk project | Automated + manual review flag | Additional human oversight for higher risk |
| Large PR (>500 LOC changed) | Automated + mandatory manual review | Large changes require human architectural review |
| Security-sensitive code paths | Automated + Security team review | Auth, crypto, and access control require security expertise |
| Emergency hotfix | Automated gates only (expedited) | Speed prioritized; post-deployment review required |

## Monitoring and Alerting

### Pipeline Health Metrics

The following pipeline metrics MUST be monitored and reported in the [Expanded Metrics](/transformation/phase-2-expansion/expanded-metrics/) dashboard:

- **Gate pass/fail rates** — Percentage of PRs that pass each gate on first attempt
- **Mean time through pipeline** — Total time from commit to deployment approval
- **False positive rate** — Percentage of gate failures that are overridden as false positives (target: `<5%`)
- **Most common failure reasons** — Categorized failure data to inform training and tooling improvements

### Alerting Thresholds

| Condition | Alert Level | Recipients |
|---|---|---|
| Critical vulnerability found | Immediate | Security Lead + PR author |
| Secrets detected in commit | Immediate | Security Lead + PR author + CISO |
| Gate false positive rate > 10% | Weekly summary | Platform Engineering Lead |
| Pipeline duration > 2x baseline | Daily | Platform Engineering Lead |

Pipeline integration is what makes governance sustainable at scale. Manual governance processes create bottlenecks as adoption grows; automated pipeline gates enforce standards consistently without slowing teams down. The configurations described here SHOULD be treated as a starting point — teams SHOULD continuously refine thresholds and checks based on the data collected through [Expanded Metrics](/transformation/phase-2-expansion/expanded-metrics/).

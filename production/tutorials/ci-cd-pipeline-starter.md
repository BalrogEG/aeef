---
title: "CI/CD Pipeline Starter"
sidebar_position: 2
description: "Ready-to-use GitHub Actions workflows implementing AEEF minimum enforcement."
---

# CI/CD Pipeline Starter

These are copy-paste GitHub Actions workflows that implement the [Apply-Ready Rollout Kit](/production/standards/apply-ready-rollout-kit) minimum enforcement checklist. Start with the Minimal Pipeline, then upgrade to the Full Pipeline as your team grows.

## Minimal Pipeline (Start Here)

This pipeline covers the Day 0-30 essentials: security scanning, dependency checking, and test execution. It uses entirely free, open-source tools.

**Implements:** PRD-STD-002 (review enforcement), PRD-STD-003 (test execution), PRD-STD-004 (SAST), PRD-STD-008 (dependency scanning)

Create `.github/workflows/ai-quality-gates.yml`:

```yaml
name: AI Quality Gates

on:
  pull_request:
    branches: [main, develop]
  push:
    branches: [main]

permissions:
  contents: read
  security-events: write

jobs:
  # ── Security Scanning (PRD-STD-004) ──────────────────────────
  security-scan:
    name: Security Scan (SAST)
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Run Semgrep SAST
        uses: semgrep/semgrep-action@v1
        with:
          config: >-
            p/default
            p/owasp-top-ten
            p/security-audit
        env:
          SEMGREP_APP_TOKEN: ${{ secrets.SEMGREP_APP_TOKEN }}
        # Note: Semgrep works without a token (limited rules).
        # Sign up free at semgrep.dev for full rule sets.

  # ── Dependency Audit (PRD-STD-008) ───────────────────────────
  dependency-check:
    name: Dependency Audit
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      # For Node.js projects:
      - name: Node.js dependency audit
        if: hashFiles('package-lock.json') != ''
        run: npm audit --audit-level=high
        continue-on-error: false

      # For Python projects:
      - name: Python dependency audit
        if: hashFiles('requirements.txt') != '' || hashFiles('pyproject.toml') != ''
        run: |
          pip install pip-audit
          pip-audit -r requirements.txt --fail-on-vuln
        continue-on-error: false

      # For Go projects:
      - name: Go vulnerability check
        if: hashFiles('go.mod') != ''
        run: |
          go install golang.org/x/vuln/cmd/govulncheck@latest
          govulncheck ./...

      # Universal container/filesystem scan:
      - name: Trivy vulnerability scan
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          scan-ref: '.'
          severity: 'CRITICAL,HIGH'
          exit-code: '1'

  # ── Tests (PRD-STD-003) ─────────────────────────────────────
  tests:
    name: Test Suite
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      # For Node.js:
      - name: Setup Node.js
        if: hashFiles('package.json') != ''
        uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'

      - name: Install and test (Node.js)
        if: hashFiles('package.json') != ''
        run: |
          npm ci
          npm test -- --coverage
        env:
          CI: true

      # For Python:
      - name: Setup Python
        if: hashFiles('pyproject.toml') != '' || hashFiles('requirements.txt') != ''
        uses: actions/setup-python@v5
        with:
          python-version: '3.12'

      - name: Install and test (Python)
        if: hashFiles('pyproject.toml') != '' || hashFiles('requirements.txt') != ''
        run: |
          pip install -e ".[test]" 2>/dev/null || pip install -r requirements.txt
          pytest --cov --cov-fail-under=70

      # For Go:
      - name: Test (Go)
        if: hashFiles('go.mod') != ''
        uses: actions/setup-go@v5
        with:
          go-version: '1.23'

      - name: Run Go tests
        if: hashFiles('go.mod') != ''
        run: go test -race -coverprofile=coverage.out ./...

  # ── AI Metadata Check (PRD-STD-002) ─────────────────────────
  ai-metadata:
    name: AI Disclosure Check
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'
    steps:
      - name: Check PR body for AI disclosure
        uses: actions/github-script@v7
        with:
          script: |
            const body = context.payload.pull_request.body || '';
            const hasAIUsage = body.includes('AI-Usage:');
            const hasAITool = body.includes('AI-Tool:');

            if (!hasAIUsage || !hasAITool) {
              core.warning(
                'PR description is missing AI disclosure fields (AI-Usage, AI-Tool). ' +
                'Please use the PR template. See: https://aeef.codemeld.io/production/tutorials/starter-configs'
              );
            }

            // Log for visibility — don't fail the build on this yet
            console.log(`AI-Usage field present: ${hasAIUsage}`);
            console.log(`AI-Tool field present: ${hasAITool}`);
```

### How to Use This Pipeline

1. Copy the YAML above into `.github/workflows/ai-quality-gates.yml`
2. Delete the language sections you don't use (keep only your stack)
3. Push to your repository
4. Create a PR — the checks will run automatically

### Cost: $0

This pipeline uses:
- **Semgrep** — Free for open-source and small teams (free tier: 10 developers)
- **Trivy** — Fully open-source, no account required
- **npm audit / pip-audit / govulncheck** — Built into the language ecosystems, free
- **GitHub Actions** — Free for public repos; 2,000 minutes/month free for private repos

---

## Full Pipeline (Month 2+)

Once your team is comfortable with the minimal pipeline, upgrade to include linting, coverage thresholds, and license checking.

Create `.github/workflows/ai-quality-gates-full.yml`:

```yaml
name: AI Quality Gates (Full)

on:
  pull_request:
    branches: [main, develop]
  push:
    branches: [main]

permissions:
  contents: read
  security-events: write
  pull-requests: write

jobs:
  # ── Linting ──────────────────────────────────────────────────
  lint:
    name: Lint
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint

  # ── Type Check ───────────────────────────────────────────────
  typecheck:
    name: Type Check
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'
      - run: npm ci
      - run: npx tsc --noEmit

  # ── Tests with Coverage Gate ─────────────────────────────────
  tests:
    name: Tests (Coverage Gate)
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'
      - run: npm ci
      - run: npm test -- --coverage --coverageThreshold='{"global":{"branches":70,"functions":70,"lines":80,"statements":80}}'
        env:
          CI: true

  # ── Security Scan ────────────────────────────────────────────
  security:
    name: Security Scan
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Semgrep
        uses: semgrep/semgrep-action@v1
        with:
          config: >-
            p/default
            p/owasp-top-ten
            p/typescript
            p/nodejs
      - name: Trivy filesystem scan
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          severity: 'CRITICAL,HIGH'
          exit-code: '1'

  # ── Dependency Audit ─────────────────────────────────────────
  dependencies:
    name: Dependency Audit
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'
      - run: npm ci
      - name: Check for vulnerabilities
        run: npm audit --audit-level=high
      - name: License check
        run: |
          npx license-checker --failOn 'GPL-2.0;GPL-3.0;AGPL-1.0;AGPL-3.0' \
            --excludePrivatePackages

  # ── AI Metadata ──────────────────────────────────────────────
  ai-disclosure:
    name: AI Disclosure
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request'
    steps:
      - name: Validate AI metadata
        uses: actions/github-script@v7
        with:
          script: |
            const body = context.payload.pull_request.body || '';
            const required = ['AI-Usage:', 'AI-Tool:'];
            const missing = required.filter(f => !body.includes(f));

            if (missing.length > 0) {
              core.setFailed(
                `PR description missing required fields: ${missing.join(', ')}. ` +
                `Use the PR template.`
              );
            }

  # ── Build ────────────────────────────────────────────────────
  build:
    name: Build
    needs: [lint, typecheck, tests, security, dependencies]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
```

---

## GitLab CI Equivalent

For teams using GitLab, here's the equivalent minimal pipeline.

Create `.gitlab-ci.yml`:

```yaml
stages:
  - security
  - test
  - build

variables:
  NODE_VERSION: "22"

# ── Security Scanning ──────────────────────────────────────────
semgrep:
  stage: security
  image: semgrep/semgrep
  script:
    - semgrep --config p/default --config p/owasp-top-ten .
  allow_failure: false

trivy:
  stage: security
  image:
    name: aquasec/trivy
    entrypoint: [""]
  script:
    - trivy fs --severity CRITICAL,HIGH --exit-code 1 .

dependency-audit:
  stage: security
  image: node:${NODE_VERSION}
  script:
    - npm ci
    - npm audit --audit-level=high

# ── Tests ──────────────────────────────────────────────────────
tests:
  stage: test
  image: node:${NODE_VERSION}
  script:
    - npm ci
    - npm test -- --coverage
  coverage: '/Lines\s*:\s*(\d+\.?\d*)%/'
  artifacts:
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage/cobertura-coverage.xml

# ── Build ──────────────────────────────────────────────────────
build:
  stage: build
  image: node:${NODE_VERSION}
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/
```

---

## Branch Protection Setup

After setting up CI, configure branch protection to enforce it:

### GitHub

1. Go to **Settings > Branches > Branch protection rules**
2. Add rule for `main`:
   - [x] Require a pull request before merging
   - [x] Require approvals (set to 1 for small teams)
   - [x] Require status checks to pass: `Security Scan (SAST)`, `Dependency Audit`, `Test Suite`
   - [x] Require branches to be up to date before merging
   - [x] Do not allow bypassing the above settings

### GitHub CLI (Faster)

```bash
gh api repos/{owner}/{repo}/branches/main/protection -X PUT \
  -f required_status_checks='{"strict":true,"contexts":["Security Scan (SAST)","Dependency Audit","Test Suite"]}' \
  -f required_pull_request_reviews='{"required_approving_review_count":1}' \
  -F enforce_admins=true
```

## Next Steps

- [Starter Config Files](/production/tutorials/starter-configs) — AI tool configurations
- [First AI PR Tutorial](/production/tutorials/first-ai-pr-tutorial) — End-to-end walkthrough
- [Security Scanning Tools](/production/tool-guides/security-scanning-tools) — Deep dive on tool configuration

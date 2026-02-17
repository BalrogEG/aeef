---
title: "PRD-STD-008: Dependency & License Compliance"
sidebar_position: 9
description: "Dependency and license compliance for AI-generated code."
---

# PRD-STD-008: Dependency & License Compliance

**Standard ID:** PRD-STD-008
**Version:** 1.0
**Status:** Active
**Compliance Level:** Level 1 (Foundation)
**Effective Date:** 2025-01-15
**Last Reviewed:** 2026-01-15

## 1. Purpose

This standard defines requirements for managing dependencies introduced by AI-generated code. AI coding assistants frequently suggest third-party libraries, packages, and modules as part of generated solutions. These suggestions may introduce dependencies with incompatible licenses, known vulnerabilities, abandoned maintenance status, or supply chain risks that the developer may not be aware of.

Because AI tools are trained on vast corpora of open-source code, they have a natural tendency to suggest dependencies without evaluating their suitability for the specific project's legal, security, or operational context. This standard ensures that every dependency introduced through AI-assisted development is evaluated, approved, and continuously monitored.

## 2. Scope

This standard applies to:

- All third-party dependencies (direct and transitive) introduced by AI-generated code
- All package managers and dependency resolution systems (npm, pip, Maven, NuGet, Go modules, Cargo, etc.)
- All production, development, and build-time dependencies
- Software Bill of Materials (SBOM) generation and maintenance

This standard works in conjunction with [PRD-STD-004: Security Scanning](/production/standards/PRD-STD-004-security-scanning/) for vulnerability management.

## 3. Definitions

| Term | Definition |
|---|---|
| **Direct Dependency** | A library or package explicitly declared in the project's dependency manifest |
| **Transitive Dependency** | A library or package pulled in as a dependency of a direct dependency |
| **SBOM** | Software Bill of Materials -- a comprehensive inventory of all components in a software artifact |
| **License Compatibility** | Whether a dependency's license terms are compatible with the project's license and distribution model |
| **Supply Chain Attack** | An attack that compromises a software dependency to inject malicious code into downstream consumers |
| **Dependency Freshness** | How recently a dependency has been updated by its maintainers |

## 4. Requirements

### 4.1 License Compliance

:::danger MANDATORY
**REQ-008-01:** All dependencies introduced by AI-generated code MUST be checked for license compatibility before merging. License checks MUST be automated in the CI/CD pipeline per [PRD-STD-007](/production/standards/PRD-STD-007-quality-gates/).

**REQ-008-02:** Organizations MUST maintain an approved license list. Dependencies with licenses not on the approved list MUST NOT be introduced without explicit approval from legal counsel or the designated license compliance authority.

**REQ-008-03:** The following license categories MUST be used to classify dependency licenses:

| Category | Licenses (Examples) | Policy |
|---|---|---|
| **Approved - Permissive** | MIT, BSD-2-Clause, BSD-3-Clause, Apache-2.0, ISC, Unlicense, CC0-1.0 | Allowed without restriction |
| **Approved - Weak Copyleft** | LGPL-2.1, LGPL-3.0, MPL-2.0, EPL-2.0 | Allowed with conditions; legal review for linking |
| **Restricted - Strong Copyleft** | GPL-2.0, GPL-3.0, AGPL-3.0 | Requires legal review and explicit approval |
| **Prohibited** | SSPL, Commons Clause, any "source available" non-OSI license | Not permitted in production code |
| **Unknown / No License** | No license file, unclear licensing | Not permitted; treat as all rights reserved |

**REQ-008-04:** Dependencies with dual or multi-licensing MUST be evaluated under the most restrictive applicable license unless the organization explicitly elects a permissive option in the dependency configuration.

**REQ-008-05:** License compliance checks MUST cover transitive dependencies, not just direct dependencies. A prohibited transitive dependency blocks the entire dependency chain.
:::

:::warning RECOMMENDED
**REQ-008-06:** Organizations SHOULD maintain a machine-readable approved license list (e.g., SPDX format) that can be consumed by automated tooling.

**REQ-008-07:** License compliance results SHOULD be included in the SBOM and made available for audit.
:::

### 4.2 Vulnerability Monitoring

:::danger MANDATORY
**REQ-008-08:** All project dependencies MUST be continuously monitored for newly disclosed vulnerabilities. Monitoring MUST occur at least daily.

**REQ-008-09:** Vulnerability remediation MUST follow the SLAs defined in [PRD-STD-004](/production/standards/PRD-STD-004-security-scanning/):

| Severity | Remediation SLA |
|---|---|
| Critical (CVSS 9.0+) | 24 hours |
| High (CVSS 7.0-8.9) | 7 days |
| Medium (CVSS 4.0-6.9) | 30 days |
| Low (CVSS 0.1-3.9) | 90 days |

**REQ-008-10:** When a dependency vulnerability cannot be remediated by upgrading, the team MUST evaluate and implement one of the following mitigations: (a) apply a patch, (b) replace the dependency, (c) implement compensating controls, or (d) accept the risk with documented security team approval.

**REQ-008-11:** Dependencies with Critical vulnerabilities that have no available fix MUST be flagged for immediate replacement evaluation. A replacement plan MUST be documented within 72 hours.
:::

:::warning RECOMMENDED
**REQ-008-12:** Organizations SHOULD use automated pull request / merge request generation tools (e.g., Dependabot, Renovate) to keep dependencies up to date proactively.

**REQ-008-13:** Vulnerability monitoring SHOULD include threat intelligence feeds beyond standard CVE databases to catch zero-day and emerging threats.
:::

### 4.3 Supply Chain Security

:::danger MANDATORY
**REQ-008-14:** Organizations MUST verify the integrity of all dependencies through package manager lock files (e.g., `package-lock.json`, `Pipfile.lock`, `go.sum`). Lock files MUST be committed to version control and MUST NOT be manually edited.

**REQ-008-15:** When AI-generated code introduces a new direct dependency, the dependency MUST be evaluated against the following supply chain criteria before approval:

| Criterion | Minimum Standard |
|---|---|
| **Maintenance Activity** | At least one commit in the past 12 months |
| **Maintainer Count** | At least 2 active maintainers (for dependencies in critical paths) |
| **Download / Usage Volume** | Not a threshold, but low-usage packages require additional scrutiny |
| **Security Policy** | Has a SECURITY.md or vulnerability disclosure process |
| **Known Supply Chain Incidents** | No unresolved supply chain incidents |

**REQ-008-16:** Organizations MUST generate and maintain a Software Bill of Materials (SBOM) in SPDX or CycloneDX format for all production deployments.

**REQ-008-17:** Dependency resolution MUST use verified registries. Private registries MUST be configured to prevent dependency confusion attacks (namespace squatting).
:::

:::warning RECOMMENDED
**REQ-008-18:** Organizations SHOULD implement package provenance verification (e.g., npm provenance, Sigstore) where supported by the package ecosystem.

**REQ-008-19:** Organizations SHOULD maintain a curated internal registry or approved dependency catalog that engineers can draw from, reducing the risk of AI tools suggesting unapproved packages.

**REQ-008-20:** Dependency review SHOULD include an assessment of the dependency's own transitive dependency tree size. AI tools sometimes suggest packages with unnecessarily large dependency trees for simple functionality.
:::

## 5. Implementation Guidance

### Dependency Review Checklist for AI-Introduced Dependencies

When a code review per [PRD-STD-002](/production/standards/PRD-STD-002-code-review/) identifies a new dependency introduced by AI:

- [ ] License is on the approved list
- [ ] No known Critical or High vulnerabilities
- [ ] Package is actively maintained (commit within 12 months)
- [ ] Package has adequate maintainer coverage
- [ ] Package is well-known and widely used (or justification for niche package)
- [ ] Transitive dependency tree is reasonable in size
- [ ] No alternative exists in the project's existing dependencies
- [ ] Lock file is updated and committed
- [ ] SBOM is regenerated to include the new dependency

### Common AI Dependency Pitfalls

AI coding assistants frequently make the following dependency mistakes:

1. **Suggesting heavy libraries for simple tasks** -- AI may suggest lodash for a single utility function, or moment.js when native Date suffices
2. **Recommending deprecated packages** -- AI training data includes popular-at-the-time packages that are now deprecated (e.g., request, tslint)
3. **Mixing ecosystem conventions** -- AI may suggest Python packages in a Node.js context, or Java libraries with Kotlin-native alternatives
4. **Ignoring existing project dependencies** -- AI may suggest a new HTTP client when the project already has one configured
5. **Suggesting packages with incompatible licenses** -- AI does not evaluate license compatibility during code generation

### Tooling Recommendations

| Tool Category | Recommended Tools | Integration |
|---|---|---|
| License Scanning | FOSSA, Licensee, license-checker, scancode-toolkit | CI/CD pipeline |
| Vulnerability Monitoring | Snyk, GitHub Dependabot, Mend (WhiteSource), Grype | Continuous monitoring |
| SBOM Generation | syft, cyclonedx-cli, spdx-tools | Build pipeline |
| Dependency Updates | Dependabot, Renovate, PyUp | Automated PRs |
| Supply Chain Verification | Sigstore/cosign, npm provenance, pip --require-hashes | Package installation |

### SBOM Example (CycloneDX)

Organizations should generate SBOMs automatically as part of the build process:

```bash
# Node.js
npx @cyclonedx/cyclonedx-npm --output-file sbom.json

# Python
cyclonedx-py poetry > sbom.json

# Java/Maven
mvn org.cyclonedx:cyclonedx-maven-plugin:makeBom
```

## 6. Exceptions & Waiver Process

Exceptions MAY be granted for:

- **Restricted (copyleft) licenses** (REQ-008-03) when the dependency is used in a context where copyleft obligations do not apply (e.g., LGPL for dynamic linking, GPL for internal-only tools) -- requires legal review and written approval
- **Supply chain criteria** (REQ-008-15) for well-known single-maintainer projects with established track records (e.g., core-js) -- requires security team review and documented risk acceptance
- **SBOM requirements** (REQ-008-16) for projects in early development that have not reached production deployment -- SBOM MUST be generated before first production deployment

No exceptions are available for prohibited licenses (REQ-008-03), Critical vulnerability handling (REQ-008-11), or lock file requirements (REQ-008-14).

## 7. Related Standards

- [PRD-STD-004: Security Scanning](/production/standards/PRD-STD-004-security-scanning/) -- Vulnerability scanning and remediation SLAs
- [PRD-STD-002: Code Review Standards](/production/standards/PRD-STD-002-code-review/) -- Dependency review during code review
- [PRD-STD-007: Quality Gates](/production/standards/PRD-STD-007-quality-gates/) -- License and vulnerability checks as merge gates
- [Security Scanning Tools](/production/tool-guides/security-scanning-tools/) -- Tool configuration for dependency scanning
- [Pillar 2: Governance & Risk](/pillars/pillar-2-governance-risk/) -- Organizational risk and compliance framework

## 8. Revision History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | 2025-01-15 | AEEF Standards Committee | Initial release |
| 1.0.1 | 2026-01-15 | AEEF Standards Committee | Added approved license table; expanded supply chain criteria; added SBOM guidance |

# Prompt Library

Execution-ready prompts aligned with the PRD-STD series and role guides.

## Quick Start

1. Start with one prompt from `by-use-case` or `by-role`.
2. Replace placeholders and run it against a real task.
3. Capture the prompt path in your PR (`AI-Prompt-Ref`).
4. Record outcome quality (accepted, revised, rejected).

## Ready-Made Prompt Set

| Category | Prompt | File |
|---|---|---|
| Code Review | PR Risk Review | `by-use-case/code-review/pr-risk-review.md` |
| Test Generation | Risk-Based Test Matrix | `by-use-case/test-generation/risk-based-test-matrix.md` |
| Debugging | Production Incident Triage | `by-use-case/debugging/production-incident-triage.md` |
| Refactoring | Legacy Hardening Refactor | `by-use-case/refactoring/legacy-hardening-refactor.md` |
| Documentation | Change Summary and Runbook | `by-use-case/documentation/change-summary-and-runbook.md` |
| Dependency Compliance | Dependency Risk Check | `by-use-case/dependency-compliance/dependency-risk-check.md` |
| Developer Role | Feature Implementation | `by-role/developer/feature-implementation.md` |
| Security Role | Security Review and Remediation | `by-role/security-engineer/security-review-and-remediation.md` |
| Platform Role | CI Quality Gate Design | `by-role/platform-engineer/ci-quality-gates.md` |
| Product Role | Story Hardening | `by-role/product-manager/story-hardening.md` |
| Compliance Role | Audit Evidence Request | `by-role/compliance-officer/audit-evidence-request.md` |

## Governance Notes

- Every prompt entry should include owner, version, and known limitations.
- A Tech Lead, QA Lead, or Security Engineer should review prompts before marking them `verified`.
- Prompt changes should be versioned through pull requests.
- Any deprecated prompt should include migration guidance to a replacement prompt.

## Verification Status Labels

- `draft`: newly added, not yet benchmarked
- `verified`: passed at least 5 representative tests
- `deprecated`: retained for history, not recommended for new usage

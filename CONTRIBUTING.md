# Contributing to AEEF Standards

Thanks for contributing to AEEF Standards.

## Before You Start AI Coding

Complete these steps before starting vibecoding or opening a PR:

1. Read `production/standards/index.md` and the relevant PRD-STD docs.
2. Start with `production/standards/apply-ready-rollout-kit.md`.
3. Open or link an issue that defines scope, acceptance criteria, and owners.
4. Confirm testing, security, and dependency requirements:
   - PRD-STD-003 (Testing Requirements)
   - PRD-STD-004 (Security Scanning)
   - PRD-STD-008 (Dependency & License Compliance)

## Local Setup

```bash
npm ci
npm run typecheck
npm run build
```

## Contribution Workflow

1. Create a branch from `main`.
2. Make focused changes with clear commit messages.
3. Keep standards references and links accurate.
4. Run quality checks locally before pushing.
5. Open a PR with:
   - Purpose and scope
   - Standards impacted
   - Test evidence
   - Risk notes (if any)

## Expert Network Application

Experts who want to support framework rollout can apply through:

- GitHub issue form: `Expert Network Application`
- Template path: `.github/ISSUE_TEMPLATE/expert-join.yml`

Please provide accurate domain expertise and availability to speed up review.

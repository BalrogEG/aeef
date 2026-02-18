# AEEF Standards Website

This site is built with [Docusaurus](https://docusaurus.io/).

## Requirements

- Node.js `>=20`
- npm

## Install

```bash
npm ci
```

## Local Development

```bash
npm run start
```

Runs the Docusaurus dev server with hot reload.

## Build

```bash
npm run build
```

Generates static output in `build/`.

## Serve Built Site

```bash
npm run serve -- --host 127.0.0.1 --port 3085
```

This is the production-style runtime used behind Nginx for `aaee.buildstudio.app`.

## Quality Checks

```bash
npm run typecheck
npm run build
```

## Feedback Popup Setup

A floating feedback popup is enabled on all pages.

Configure one of these before building/deploying:

- `FEEDBACK_ENDPOINT`: webhook URL that accepts `POST` JSON.
- `FEEDBACK_EMAIL`: fallback `mailto:` recipient.

Example:

```bash
FEEDBACK_ENDPOINT="https://your-webhook-url"
npm run build
```

## Open-Source Onboarding

Before starting AI-assisted implementation, follow:

1. `production/standards/apply-ready-rollout-kit.md`
2. `CONTRIBUTING.md`
3. `production/tool-guides/open-source-onboarding-expert-network.md`

Experts can apply through the GitHub issue form:

- `.github/ISSUE_TEMPLATE/expert-join.yml`

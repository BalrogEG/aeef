# Prompt: Change Summary and Runbook

- Title: Change Summary and Runbook
- Category: documentation
- Status: draft
- Owner: engineering-enablement
- Version: 1.0.0
- Last Updated: 2026-02-18

## Prompt Text

```text
Generate production documentation for this implementation change.
Output in order:
1) summary of functional changes
2) architecture impact
3) operational impact and alerts
4) deployment and rollback steps
5) AI prompt references and assumptions
Use concise Markdown suitable for a PR description or runbook update.
```

## Expected Inputs

- Diff or feature summary
- Service runbook template if available

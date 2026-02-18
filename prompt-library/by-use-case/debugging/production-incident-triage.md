# Prompt: Production Incident Triage

- Title: Production Incident Triage
- Category: debugging
- Status: draft
- Owner: sre-platform
- Version: 1.0.0
- Last Updated: 2026-02-18

## Prompt Text

```text
Act as an incident commander for a production software issue.
Inputs: incident timeline, logs, metrics, recent deploy diff.
Deliver:
1) probable root causes ranked by confidence
2) immediate containment actions
3) rollback vs forward-fix recommendation
4) missing telemetry to collect
5) follow-up preventive actions with owners
Keep output concise and action-oriented.
```

## Expected Inputs

- Error logs
- Metrics snapshots
- Recent deploy or PR references

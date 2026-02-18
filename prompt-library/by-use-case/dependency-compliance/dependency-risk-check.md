# Prompt: Dependency Risk Check

- Title: Dependency Risk Check
- Category: dependency-compliance
- Status: draft
- Owner: appsec-governance
- Version: 1.0.0
- Last Updated: 2026-02-18

## Prompt Text

```text
Review added or updated dependencies in this pull request.
For each dependency provide:
- package and version
- license and compatibility risk
- known vulnerability summary
- transitive dependency risk
- approval decision and rationale
If rejected, suggest safer alternatives.
```

## Expected Inputs

- lockfile diff
- package manifest diff
- policy constraints (allowed licenses, severity thresholds)

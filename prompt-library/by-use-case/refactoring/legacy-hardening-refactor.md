# Prompt: Legacy Hardening Refactor

- Title: Legacy Hardening Refactor
- Category: refactoring
- Status: draft
- Owner: architecture
- Version: 1.0.0
- Last Updated: 2026-02-18

## Prompt Text

```text
Act as a staff engineer refactoring legacy code.
Goal: improve maintainability and safety without changing behavior.
Constraints:
- preserve public API behavior
- avoid large rewrites
- add tests before risky edits
- improve observability where practical
Return:
1) phased refactor plan
2) minimal patch sequence
3) regression risk list
4) rollback strategy
```

## Expected Inputs

- Existing module code
- Known pain points and defect history

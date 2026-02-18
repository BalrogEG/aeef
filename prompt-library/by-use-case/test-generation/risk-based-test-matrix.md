# Prompt: Risk-Based Test Matrix

- Title: Risk-Based Test Matrix
- Category: test-generation
- Status: draft
- Owner: qa-lead
- Version: 1.0.0
- Last Updated: 2026-02-18

## Prompt Text

```text
You are a senior QA engineer.
Given this feature description and code diff, build a risk-based test matrix.
Produce sections:
- unit tests
- integration tests
- regression tests
- negative tests
- performance/security checks if relevant
For each test include: id, risk covered, setup, input, expected result, and failure signal.
Prioritize tests for AI-specific failure modes such as missing validation, hallucinated APIs, and silent error paths.
```

## Expected Inputs

- User story or requirements
- Code diff
- Existing test framework details

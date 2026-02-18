# Role Prompt: Developer Feature Implementation

- Role: Software Developer
- Status: draft
- Owner: developer-experience
- Version: 1.0.0
- Last Updated: 2026-02-18

## Prompt Text

```text
Act as a senior <language> developer.
Implement <feature> in <service/module>.
Context:
- existing interfaces: <paste>
- coding standards: <paste>
Constraints:
- include input validation and explicit error handling
- include unit tests for success and failure paths
- do not add new dependencies unless justified
Return:
1) implementation plan
2) patch
3) tests
4) risks and follow-up tasks
```

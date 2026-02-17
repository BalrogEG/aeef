---
title: "Defect Pattern Analysis"
sidebar_position: 4
description: "Analyzing defect patterns in AI-generated code."
---

# Defect Pattern Analysis

AI-generated code introduces specific, repeatable defect patterns that differ from those found in human-written code. By cataloging these patterns, understanding their root causes, and building detection mechanisms, you can shift from reactive defect fixing to proactive defect prevention. This section provides a comprehensive catalog of AI-specific defect categories, root cause analysis techniques, and strategies for systematic quality improvement.

## AI-Specific Defect Categories

### Category 1: Logic Correctness Defects

These are the most common and most dangerous AI-specific defects because they are the hardest to detect -- the code compiles, runs, and produces plausible but incorrect results.

| Pattern | Description | Example | Detection Method |
|---------|-------------|---------|-----------------|
| **Off-by-one errors** | AI frequently miscalculates loop boundaries, array indices, and range endpoints | `for (i = 0; i <= arr.length; i++)` instead of `< arr.length` | Boundary value testing, property-based testing |
| **Inverted conditions** | Boolean conditions that are reversed, especially with negation | `if (!user.isActive)` when the intent was `if (user.isActive)` | Specification-based testing; test both branches |
| **Incorrect operator precedence** | Math or logic operations that evaluate in the wrong order | `a + b * c` when `(a + b) * c` was intended | Unit tests with known expected values |
| **Stale pattern application** | Correct pattern applied to wrong context, producing subtle errors | Repository pattern for a query that needs raw SQL for performance | Architecture review, performance testing |
| **Missing state transitions** | State machine that handles some transitions but misses others | Order goes from "shipped" to "cancelled" without "return initiated" | State machine testing, specification-based testing |
| **Truncation errors** | Floating-point arithmetic that loses precision, especially in financial calculations | Currency calculation using `float` instead of `Decimal` | Property-based testing with precision assertions |

### Category 2: Security Vulnerability Defects

AI-generated code has a 2.74x higher vulnerability rate. These are the most common security defect patterns per [PRD-STD-005](/production/standards/PRD-STD-004-security-scanning):

| Pattern | CWE | Description | Detection Method |
|---------|-----|-------------|-----------------|
| **SQL injection** | CWE-89 | String concatenation in database queries | SAST rules, parameterized query enforcement |
| **Cross-site scripting (XSS)** | CWE-79 | User input rendered without sanitization | SAST + DAST, output encoding enforcement |
| **Broken authentication** | CWE-287 | Missing or incorrect authentication checks | Integration tests for every endpoint, DAST |
| **Broken access control** | CWE-862 | Missing authorization after authentication | Role-based integration tests, DAST |
| **Hardcoded credentials** | CWE-798 | Secrets in source code | Secret scanning (pre-commit and CI) |
| **Insecure deserialization** | CWE-502 | Deserializing untrusted data without validation | SAST, manual review of deserialization code |
| **SSRF** | CWE-918 | Server making requests to user-controlled URLs | SAST, input validation testing |
| **Path traversal** | CWE-22 | File access without path sanitization | SAST, fuzzing with `../` patterns |

### Category 3: Structural Defects

AI-generated code often has structural issues that do not cause immediate bugs but degrade maintainability and create future defect risk:

| Pattern | Description | Impact | Detection Method |
|---------|-------------|--------|-----------------|
| **Dead code** | Functions, variables, or branches that are never executed | Maintenance burden, confusion | Static analysis, coverage analysis |
| **Duplicate logic** | Same logic implemented differently in multiple places | Inconsistent behavior when one copy is updated | Duplication analysis tools |
| **Inappropriate coupling** | Modules with hidden dependencies on each other | Fragile changes, cascading failures | Architecture testing, dependency analysis |
| **Resource leaks** | Connections, file handles, or memory not properly released | Gradual performance degradation, crashes | SAST, load testing, memory profiling |
| **Race conditions** | Concurrent access to shared state without synchronization | Intermittent failures, data corruption | Concurrency testing, stress testing, code review |
| **N+1 queries** | Database query inside a loop instead of batch query | Performance degradation under load | Query logging, performance testing |

### Category 4: Integration Defects

AI generates code in isolation and may produce components that work individually but fail when integrated:

| Pattern | Description | Detection Method |
|---------|-------------|-----------------|
| **API contract mismatch** | Generated client does not match actual API specification | Contract testing, integration tests |
| **Data format assumptions** | Code assumes date format, number format, or encoding that differs from actual data | Integration tests with real data samples |
| **Error contract mismatch** | Error handling expects different error format than what upstream produces | Integration tests with error injection |
| **Timeout/retry mismatch** | Timeout values that conflict with upstream service SLAs | Configuration review, chaos testing |

## Root Cause Analysis (RCA) Techniques

### Technique 1: AI-Specific 5 Whys

Adapt the traditional 5 Whys technique with AI-specific follow-up questions:

1. **Why** did the defect occur? (e.g., "The function does not handle null input")
2. **Why** was the null handling missing? (e.g., "The AI-generated code did not include null checks")
3. **Why** did the AI omit null checks? (e.g., "The prompt did not specify null handling as a constraint")
4. **Why** was the prompt incomplete? (e.g., "The developer did not follow the prompt engineering guidelines")
5. **Why** were the guidelines not followed? (e.g., "The developer was not trained on the new prompt template")

**AI-specific root cause categories:**
- **Prompt deficiency:** The prompt did not specify the constraint
- **Review gap:** The reviewer did not catch the issue
- **Test gap:** No test covered this scenario
- **Tool limitation:** The AI tool consistently fails at this pattern
- **Training gap:** The developer lacked awareness of this risk

### Technique 2: Defect Clustering Analysis

Group defects by their AI root cause to identify systemic issues:

| Cluster | If Frequent | Action |
|---------|-------------|--------|
| Same defect type, multiple developers | Tool limitation or team knowledge gap | Training session or tool evaluation |
| Same defect type, one developer | Individual skill gap | Targeted coaching per [Skill Development](/roles/developer/skill-development) |
| Same defect type, one code area | Codebase area unsuitable for AI | Add to "low AI suitability" classification |
| Many defect types, one developer | Insufficient review rigor | Process intervention per [Performance Management](/roles/development-manager/performance-management) |
| Security defects increasing | Security awareness gap | Security training refresh per [Security Awareness](/roles/developer/security-awareness) |

### Technique 3: Before-After Comparison

Compare defect patterns before and after AI adoption to isolate AI-specific contributions:

| Metric | Pre-AI Baseline | Current | Delta | Interpretation |
|--------|----------------|---------|-------|----------------|
| Defects per sprint | [X] | [Y] | [Y-X] | Net defect change |
| Defects per KLOC | [X] | [Y] | [Y-X] | Normalized for code volume |
| Security findings per sprint | [X] | [Y] | [Y-X] | AI security impact |
| Defect severity distribution | [%Critical/%High/%Med/%Low] | [current] | [shift] | Severity pattern change |
| Time to detect | [X days] | [Y days] | [Y-X] | Detection efficiency |

## Building a Defect Pattern Database

Maintain an organizational defect pattern database that captures AI-specific patterns:

### Database Schema

| Field | Description | Example |
|-------|-------------|---------|
| **Pattern ID** | Unique identifier | ADP-042 |
| **Category** | Logic / Security / Structural / Integration | Security |
| **Pattern name** | Descriptive name | Hardcoded API Key in AI-Generated Service |
| **Description** | Detailed description of the pattern | AI generates placeholder API keys that resemble real keys |
| **Detection method** | How to find this pattern | Secret scanning with regex for `sk-`, `pk_`, `AKIA` patterns |
| **Prevention method** | How to prevent this pattern | Include "no hardcoded secrets" in all prompts; pre-commit hooks |
| **First observed** | When this pattern was first seen | 2025-03-15 |
| **Frequency** | How often this pattern appears | 3-4 times per month |
| **AI tool** | Which AI tool generates this pattern | [Tool name] |
| **Severity** | Impact severity | High |

### Using the Database

1. **Onboarding.** New developers review the top 20 defect patterns as part of onboarding.
2. **Code review.** Reviewers reference the database when reviewing AI-generated code.
3. **Testing.** Test suites include test cases specifically designed to catch cataloged patterns.
4. **Tool evaluation.** When evaluating new AI tools per [Tooling Decisions](/roles/development-manager/tooling-decisions), test against the known defect pattern database.
5. **Trend analysis.** Track pattern frequency over time. Declining frequency indicates effective prevention.

## Reporting Defect Analysis

### To Development Managers

Monthly report including:
- Defect count by category (AI-specific vs. general)
- Top 5 most frequent defect patterns this month
- Trend comparison (this month vs. last 3 months)
- Recommended actions (training, tool changes, process adjustments)

### To CTO

Quarterly report including:
- Security vulnerability trend with AI overlay
- Defect density trend normalized by code volume
- Defect pattern database highlights (new patterns, declining patterns)
- Risk assessment update per [Technical Risk Management](/roles/cto/technical-risk)

### To Executive

Quarterly summary for [Board-Ready Metrics](/roles/executive/board-ready-metrics):
- Escaped defect count and severity
- Security posture indicator (green/yellow/red)
- Quality trend narrative

:::info
Defect pattern analysis is most valuable when it drives prevention, not just detection. Every pattern in your database should have both a detection method and a prevention method. The goal is to shrink the database over time as prevention mechanisms take effect.
:::

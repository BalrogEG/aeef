#!/usr/bin/env bash
set -euo pipefail

# Starter pre-commit check for AI attribution signals.
# Default behavior is warning-only; set STRICT_AI_ATTRIBUTION=1 to block.

if ! git rev-parse --git-dir >/dev/null 2>&1; then
  echo "Not in a git repository; skipping attribution check."
  exit 0
fi

staged_files=$(git diff --cached --name-only --diff-filter=ACMR || true)
if [[ -z "${staged_files}" ]]; then
  exit 0
fi

if ! echo "${staged_files}" | grep -Eq '\.(js|jsx|ts|tsx|py|go|java|kt|rb|rs|cs|php|swift|scala|sql|yml|yaml|tf)$'; then
  exit 0
fi

if echo "${staged_files}" | grep -Eq '^\.ai-attribution\.(yml|yaml|json)$'; then
  exit 0
fi

msg="AI-attribution metadata file not found in staged changes (.ai-attribution.yml/.yaml/.json)."
if [[ "${STRICT_AI_ATTRIBUTION:-0}" == "1" ]]; then
  echo "ERROR: ${msg}"
  exit 1
fi

echo "WARN: ${msg}"
echo "WARN: In Phase 3, set STRICT_AI_ATTRIBUTION=1 to enforce blocking behavior."
exit 0

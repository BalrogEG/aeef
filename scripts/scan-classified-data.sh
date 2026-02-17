#!/usr/bin/env bash
set -euo pipefail

# Scans added staged lines for common restricted-data patterns.

if ! git rev-parse --git-dir >/dev/null 2>&1; then
  echo "Not in a git repository; skipping scan."
  exit 0
fi

diff_content=$(git diff --cached -U0 -- . ':(exclude)*.md' || true)
if [[ -z "$diff_content" ]]; then
  exit 0
fi

patterns=(
  'AKIA[0-9A-Z]{16}'
  'BEGIN (RSA|EC|OPENSSH) PRIVATE KEY'
  '(password|passwd|pwd)\s*[:=]\s*[^[:space:]]+'
  '(ssn|social[ _-]?security|credit[ _-]?card)'
)

for pattern in "${patterns[@]}"; do
  if grep -Eiq "$pattern" <<<"$diff_content"; then
    echo "ERROR: potential restricted/sensitive data pattern detected: $pattern"
    exit 1
  fi
done

echo "Classified-data scan passed."

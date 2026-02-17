#!/usr/bin/env bash
set -euo pipefail

# CI check for required AI attribution trailers in recent commits.

if ! git rev-parse --git-dir >/dev/null 2>&1; then
  echo "Not in a git repository; cannot verify attribution."
  exit 1
fi

if ! git rev-parse --verify HEAD >/dev/null 2>&1; then
  echo "No commits available yet; skipping AI attribution verification."
  exit 0
fi

range="${COMMIT_RANGE:-HEAD~1..HEAD}"
if ! git rev-list --count "$range" >/dev/null 2>&1; then
  range="HEAD"
fi

required_fields=(
  "AI-Tool:"
  "AI-Model-Version:"
  "AI-Prompt-Ref:"
  "AI-Human-Modifications:"
  "AI-Reviewed-By:"
)

failed=0
while IFS= read -r commit; do
  msg=$(git log -1 --pretty=%B "$commit")

  # Skip commit if no code-like files changed.
  changed=$(git diff-tree --no-commit-id --name-only -r "$commit" | grep -E '\.(js|jsx|ts|tsx|py|go|java|kt|rb|rs|cs|php|swift|scala|sql)$' || true)
  [[ -z "$changed" ]] && continue

  for field in "${required_fields[@]}"; do
    if ! grep -Fq "$field" <<<"$msg"; then
      echo "ERROR: commit $commit missing trailer '$field'"
      failed=1
    fi
  done
done < <(git rev-list "$range")

if [[ "$failed" -ne 0 ]]; then
  exit 1
fi

echo "AI attribution verification passed."

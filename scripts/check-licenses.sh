#!/usr/bin/env bash
set -euo pipefail

# Starter license guardrail using lockfile metadata when available.

if [[ ! -f package-lock.json ]]; then
  echo "No package-lock.json found; skipping license check."
  exit 0
fi

disallowed='GPL-3.0|AGPL-3.0|LGPL-3.0'
if grep -Eiq "\"license\"\s*:\s*\"(${disallowed})" package-lock.json; then
  echo "ERROR: Disallowed license detected in package-lock.json (${disallowed})."
  exit 1
fi

echo "License compliance check passed (starter policy set)."

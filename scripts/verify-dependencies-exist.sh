#!/usr/bin/env bash
set -euo pipefail

# Starter dependency sanity check for JS/TS projects.
# Flags external imports that are not declared in package.json.

if [[ ! -f package.json ]]; then
  echo "No package.json found; skipping dependency verification."
  exit 0
fi

node <<'NODE'
const fs = require('fs');
const path = require('path');

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const declared = new Set([
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.devDependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.optionalDependencies || {}),
]);

const exts = new Set(['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs']);
const files = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    if (name === 'node_modules' || name === '.git' || name === 'build' || name === '.docusaurus') continue;
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      walk(full);
      continue;
    }
    if (exts.has(path.extname(full))) files.push(full);
  }
}

walk(process.cwd());

const importRe = /(?:import\s+[^'"`]*from\s*|require\s*\()\s*['"]([^'"`]+)['"]/g;
const missing = new Set();

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = importRe.exec(content)) !== null) {
    const spec = m[1];
    if (!spec || spec.startsWith('.') || spec.startsWith('/') || spec.startsWith('#')) continue;
    if (
      spec.startsWith('@theme/') ||
      spec.startsWith('@site/') ||
      spec.startsWith('@generated/') ||
      spec.startsWith('@docusaurus/')
    ) {
      continue;
    }
    const base = spec.startsWith('@') ? spec.split('/').slice(0, 2).join('/') : spec.split('/')[0];
    if (!declared.has(base)) missing.add(base);
  }
}

if (missing.size > 0) {
  console.error('Undeclared external imports detected:');
  for (const dep of [...missing].sort()) console.error(` - ${dep}`);
  process.exit(1);
}

console.log('Dependency declaration verification passed.');
NODE

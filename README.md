# AEEF Standards Website

This site is built with [Docusaurus](https://docusaurus.io/).

## Requirements

- Node.js `>=20`
- npm

## Install

```bash
npm ci
```

## Local Development

```bash
npm run start
```

Runs the Docusaurus dev server with hot reload.

## Build

```bash
npm run build
```

Generates static output in `build/`.

## Serve Built Site

```bash
npm run serve -- --host 127.0.0.1 --port 3085
```

This is the production-style runtime used behind Nginx for `aaee.buildstudio.app`.

## Quality Checks

```bash
npm run typecheck
npm run build
```

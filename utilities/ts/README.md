# Typescript Config

Arbutus `.tsconfig` base.

## Get Started

### (1) Install dependencies

```sh
npm i -D @microsoft/arbutus.ts
```

### (2) Add to .tsconfig.json

```json
{
  "extends": "@microsoft/arbutus.ts",
  "include": ["src"]
}
```

### Rationale

- Targeting ESNext and ES Modules
- ES Module bundlers ready (Esbuild, Cloudpack, etc). See [RFC: Enforce consistency through package linting](https://hackmd.io/DQ1oJxCcSr6BxDM_37dVJQ) for more details.

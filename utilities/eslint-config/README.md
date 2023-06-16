# Eslint Config

An eslintrc base for Arbutus projects.

## Get Started

### (1) Install dependencies

```sh
npm i -D @microsoft/eslint-config-arbutus
```

### (2) Add to .eslintrc

```json
{
  "extends": ["@microsoft/eslint-config-arbutus"]
}
```

## Rationale

### Extensions

- **eslint:recommended** → Eslint recommended rules for JavaScript.
- **plugin:@typescript-eslint/eslint-recommended** → Recommended rules for TypeScript.
- plugin:@typescript-eslint/recommended →
- **plugin:jsx-a11y/recommended** → Recommended rules for accessible interfaces.
- **plugin:react-hooks/recommended** → Recommended rules for React Hooks.
- **plugin:react/recommended** → Recommended rules for React.
- **prettier** → This plugin disables rules from eslint:recommended that should be handled by Prettier.

### Additional rules

- `"react/prop-types": "off"` → We don't use prop-types; we type props with TypeScript.
- `"simple-import-sort/imports": "error"` → Auto sort imports.
- `"simple-import-sort/exports": "error"` → Auto sort exports.
- `"padding-line-between-statements"` → Rules for blank lines.
- `@rnx-kit/no-export-all` → [Why is export \* bad? — HackMD](https://hackmd.io/Z021hgSGStKlYLwsqNMOcg)
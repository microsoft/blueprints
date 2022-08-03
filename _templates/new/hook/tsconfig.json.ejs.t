---
to: hooks/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/tsconfig.json
---
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@m365-admin/config.ts",
  "include": ["src"],
  "compilerOptions": {
    "outDir": "lib"
  }
}
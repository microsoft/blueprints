---
to: utilities/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/tsconfig.json
---
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@microsoft/arbutus.ts",
  "include": ["src"],
  "compilerOptions": {
    "outDir": "lib"
  }
}
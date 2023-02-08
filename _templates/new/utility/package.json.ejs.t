---
to: utilities/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/package.json
---
{
  "name": "@microsoft/arbutus.<%= h.changeCase.lower(h.inflection.dasherize(name)) %>",
  "version": "<%= version %>",
  "description": "<%= description %>",
  "main": "lib/index.js",
  "module": "lib/index.js",
  "typings": "lib/index.d.ts",
  "exports": [
    "./lib/index.js"
  ],
  "files": [
    "lib/**"
  ],
  "sideEffects": false,
  "scripts": {
    "build": "tsc",
    "lint": "eslint . --fix"
  },
  "devDependencies": {
    "@microsoft/arbutus.ts": "0.0.1",
    "typescript": "^4.7.3"
  }
}

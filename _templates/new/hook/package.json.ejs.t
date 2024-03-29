---
to: hooks/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/package.json
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
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "dependencies": {
    "@fluentui/react-theme": "^9.1.0",
   "@griffel/react": "^1.1.0"
  },
  "devDependencies": {
    "@microsoft/arbutus.ts": "0.0.1",
    "typescript": "^4.7.3"
  }
}

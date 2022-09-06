---
to: components/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/package.json
---
{
  "name": "@arbutus/component.<%= h.changeCase.lower(h.inflection.dasherize(name)) %>",
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
    "react": ">=16.8.0 <=18.2.0",
    "react-dom": ">=16.8.0 <=18.2.0"
  },
  "dependencies": {
    "@fluentui/react-theme": "^9.0.0",
   "@griffel/react": "^1.3.1"
  },
  "devDependencies": {
    "@m365-admin/config.ts": "^0.1.2",
    "typescript": "^4.7.4"
  }
}

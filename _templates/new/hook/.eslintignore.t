---
to: hooks/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/.eslintignore
---
# configs
just.config.js
**/.eslintrc.js
**/tsconfig.js
lage.config.js
**/*.config.js

# generated folders
__snapshots__
.cache
dist
lib
node_modules

# template files which actually follow a different language's formatting
_templates
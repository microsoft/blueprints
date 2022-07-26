---
to: components/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/README.md
---
# Component: <%= h.changeCase.title(name) %>

**<%= h.changeCase.sentence(description) %>.**

## Get Started

```sh
npm i "<%= h.changeCase.lower(h.inflection.dasherize(name)) %>"
```

```
import { <%= h.changeCase.pascal(name) %> } from "<%= h.changeCase.lower(h.inflection.dasherize(name)) %>";
```

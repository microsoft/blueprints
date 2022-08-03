---
to: hooks/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/README.md
---
# Hook: <%= h.changeCase.title(name) %>

**<%= h.changeCase.sentence(description) %>.**

## Get Started

```sh
npm i "@arbutus/hook.<%= h.changeCase.lower(h.inflection.dasherize(name)) %>"
```

```
import { <%= h.changeCase.camel(name) %> } from "@arbutus/hook.<%= h.changeCase.lower(h.inflection.dasherize(name)) %>";
```

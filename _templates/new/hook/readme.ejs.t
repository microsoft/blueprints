---
to: hooks/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/README.md
---
# Hook: <%= h.changeCase.title(name) %>

**<%= h.changeCase.sentence(description) %>.**

## Get Started

```sh
npm i "@microsoft/arbutus.<%= h.changeCase.lower(h.inflection.dasherize(name)) %>"
```

```ts
import { <%= h.changeCase.camel(name) %> } from "@microsoft/arbutus.<%= h.changeCase.lower(h.inflection.dasherize(name)) %>";
```

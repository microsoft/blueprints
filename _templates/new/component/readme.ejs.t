---
to: components/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/README.md
---
# Component: <%= h.changeCase.title(name) %>

**<%= h.changeCase.sentence(description) %>.**

## Get Started

```sh
npm i "@microsoft/arbutus.<%= h.changeCase.lower(h.inflection.dasherize(name)) %>"
```

```tsx
import { <%= h.changeCase.pascal(name) %> } from "@microsoft/arbutus.<%= h.changeCase.lower(h.inflection.dasherize(name)) %>";
```

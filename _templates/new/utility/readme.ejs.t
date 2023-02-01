---
to: utilities/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/README.md
---
# Utility: <%= h.changeCase.title(name) %>

**<%= h.changeCase.sentence(description) %>.**

## Get Started

```sh
npm i "@microsoft/arbutus.<%= h.changeCase.lower(h.inflection.dasherize(name)) %>"
```

```
import { <%= h.changeCase.camel(name) %> } from "@microsoft/arbutus.<%= h.changeCase.lower(h.inflection.dasherize(name)) %>";
```

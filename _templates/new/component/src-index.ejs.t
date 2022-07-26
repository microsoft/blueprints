---
to: components/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/src/index.ts
---
export * from './<%= h.changeCase.lower(h.inflection.dasherize(name)) %>';

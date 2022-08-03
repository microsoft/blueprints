---
to: hooks/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/src/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/index.ts
---
export * from './<%= h.changeCase.lower(h.inflection.dasherize(name)) %>';
export type { <%= h.changeCase.pascal(name) %>Args } from './<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.types';


---
to: hooks/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/src/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/index.ts
---
export * from './<%= h.changeCase.lower(h.inflection.dasherize(name)) %>';
export type { <%= h.changeCase.camel(name) %>Props } from './<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.types';


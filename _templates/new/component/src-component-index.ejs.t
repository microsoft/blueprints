---
to: components/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/src/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/index.ts
---
export * from './<%= h.changeCase.lower(h.inflection.dasherize(name)) %>';
export * from './<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.styles';
export type { <%= h.changeCase.pascalCase(name) %>Props } from './<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.types';


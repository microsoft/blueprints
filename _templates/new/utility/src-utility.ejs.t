---
to: utilities/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/src/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.tsx
---
import type { <%= h.changeCase.pascalCase(name) %>Args } from './<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.types';

export const <%= h.changeCase.camel(name) %> = (...args: <%= h.changeCase.pascalCase(name) %>Args) => {
  // Utility

  return;
};

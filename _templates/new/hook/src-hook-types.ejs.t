---
to: hooks/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/src/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.types.ts
---

export type <%= h.changeCase.pascalCase(name) %>Args = {
  /**
   * Hook arguments.
   */
};

---
to: components/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/src/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.types.ts
---

export type <%= h.changeCase.pascalCase(name) %>Props = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * 
   */
  text?: string;
};

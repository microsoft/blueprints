---
to: components/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/src/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.styles.ts
---
import { makeStyles } from '@griffel/react';

export const use<%= h.changeCase.pascalCase(name) %>Styles = makeStyles({
  root: {
    color: 'var(--arbutus--color-text-primary)',
  },
});
 
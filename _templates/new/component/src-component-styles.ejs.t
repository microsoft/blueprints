---
to: components/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/src/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.styles.ts
---
import { makeStyles } from '@griffel/react';

export const useTextStyles = makeStyles({
  root: {
    color: 'var(--color-primary)',
  },
});

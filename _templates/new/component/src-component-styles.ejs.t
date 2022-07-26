---
to: components/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/src/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.styles.ts
---
import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const use<%= h.changeCase.pascalCase(name) %>Styles = makeStyles({
  root: {
    color: tokens.colorNeutralForeground1,
  },
});
 
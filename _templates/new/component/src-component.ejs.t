---
to: components/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/src/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>/<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.tsx
---
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import type { <%= h.changeCase.pascalCase(name) %>Props } from './<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.types';
import { use<%= h.changeCase.pascalCase(name) %>Styles } from './<%= h.changeCase.lower(h.inflection.dasherize(name)) %>.styles';


export const <%= h.changeCase.pascalCase(name) %>: FC<<%= h.changeCase.pascalCase(name) %>Props> = ({ className, text }) => {
  // Styles
  const classes = use<%= h.changeCase.pascalCase(name) %>Styles();

  return <h1 className={mergeClasses(classes.root, className)}> ✅ {text}</h1>;
};

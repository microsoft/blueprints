import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';
import { parse } from 'react-docgen';

import { usePropTableStyles } from './prop-table.styles';
import type { PropTableProps } from './prop-table.types';

const codeSample = `import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { usePropTableStyles } from './prop-table.styles';
import type { PropTableProps } from './prop-table.types';

export const PropTable: FC<PropTableProps> = ({ className, text }) => {
  // Styles
  const classes = usePropTableStyles();

  return <h1 className={mergeClasses(classes.root, className)}> ✅ {text}</h1>;
};

`;

export const PropTable: FC<PropTableProps> = ({ className, text }) => {
  // Styles
  const classes = usePropTableStyles();

  console.log(parse(codeSample));

  return <h1 className={mergeClasses(classes.root, className)}> ✅ {text}</h1>;
};

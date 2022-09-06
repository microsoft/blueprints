import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useDividerStyles } from './divider.styles';
import type { DividerProps } from './divider.types';

export const Divider: FC<DividerProps> = ({ className }) => {
  // Styles
  const classes = useDividerStyles();
  const rootClasses = mergeClasses(classes.root, className);

  return <hr className={rootClasses} />;
};

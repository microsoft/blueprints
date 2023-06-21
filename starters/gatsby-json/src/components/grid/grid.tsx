import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useGridStyles } from './grid.styles';
import type { GridProps } from './grid.types';

export const Grid: FC<GridProps> = ({ children, layout, className }) => {
  const classes = useGridStyles();

  return (
    <div className={mergeClasses(classes.root, layout && classes[layout], className)}>
      {children}
    </div>
  );
};

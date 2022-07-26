import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useTrayStyles } from './tray.styles';
import type { TrayProps } from './tray.types';

export const Tray: FC<TrayProps> = ({ className, children, isOpen }) => {
  // Styles
  const classes = useTrayStyles();

  return (
    <aside className={mergeClasses(classes.root, isOpen && classes.isOpen, className)}>
      {children}
    </aside>
  );
};

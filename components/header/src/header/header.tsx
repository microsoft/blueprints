import { mergeClasses } from '@griffel/react';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import { useHeaderStyles } from './header.styles';
import type { HeaderProps } from './header.types';

export const Header: FC<HeaderProps> = ({ className, children }) => {
  // Styles
  const classes = useHeaderStyles();
  const space = useSpaceStyles();

  return (
    <header className={mergeClasses(classes.root, space.py5, className)}>
      {children}
    </header>
  );
};

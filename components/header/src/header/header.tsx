import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useHeaderStyles } from './header.styles';
import type { HeaderProps } from './header.types';

export const Header: FC<HeaderProps> = ({ className, children }) => {
  // Styles
  const classes = useHeaderStyles();
  const space = useSpaceStyles();

  return (
    <header className={mergeClasses(classes.root, space.px7, space.py5, className)}>
      {children}
    </header>
  );
};

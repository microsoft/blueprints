import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useMainNavigationStyles } from './main-navigation.styles';
import type { MainNavigationProps } from './main-navigation.types';

export const MainNavigation: FC<MainNavigationProps> = ({ className, children }) => {
  // Styles
  const classes = useMainNavigationStyles();

  return <div className={mergeClasses(classes.root, className)}>{children}</div>;
};

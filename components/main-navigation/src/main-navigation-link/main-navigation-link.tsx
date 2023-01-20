import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useMainNavigationLinkStyles } from './main-navigation-link.styles';
import type { MainNavigationLinkProps } from './main-navigation-link.types';

export const MainNavigationLink: FC<MainNavigationLinkProps> = ({
  as: Link,
  children,
  elementProps,
  isActive,
}) => {
  const classes = useMainNavigationLinkStyles();

  return (
    <Link
      className={mergeClasses(classes.root, isActive && classes.active)}
      {...elementProps}
    >
      {children}
    </Link>
  );
};

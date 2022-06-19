import type { FC } from 'react';
import * as React from 'react';

import { useMainNavigationLinkStyles } from './main-navigation-link.styles';
import type { MainNavigationLinkProps } from './main-navigation-link.types';

export const MainNavigationLink: FC<MainNavigationLinkProps> = ({
  children,
  as: Link,
  elementProps,
}) => {
  const classes = useMainNavigationLinkStyles();

  return (
    <div className={classes.root}>
      <Link {...elementProps}>{children}</Link>
    </div>
  );
};

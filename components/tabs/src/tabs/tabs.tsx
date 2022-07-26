import { mergeClasses } from '@griffel/react';
import { Tabs as ReachTabs } from '@reach/tabs';
import type { FC } from 'react';
import * as React from 'react';

import { useTabsStyles } from './tabs.styles';
import type { TabsProps } from './tabs.types';

export const Tabs: FC<TabsProps> = ({ className, children, ...rest }) => {
  // Styles
  const classes = useTabsStyles();

  return (
    <ReachTabs className={mergeClasses(classes.root, className)} {...rest}>
      {children}
    </ReachTabs>
  );
};

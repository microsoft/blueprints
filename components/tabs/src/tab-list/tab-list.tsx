import { mergeClasses } from '@griffel/react';
import { TabList as ReachTabList } from '@reach/tabs';
import type { FC } from 'react';
import * as React from 'react';

// import { useTabListStyles } from './tab-list.styles';
import type { TabListProps } from './tab-list.types';

export const TabList: FC<TabListProps> = ({ className, children, ...rest }) => {
  // Styles
  // const classes = useTabListStyles();

  return (
    <ReachTabList className={mergeClasses(className)} {...rest}>
      {children}
    </ReachTabList>
  );
};

import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { injectIndex } from '../utilities';
import { useTabListStyles } from './tab-list.styles';
import type { TabListProps } from './tab-list.types';

export const TabList: FC<TabListProps> = ({ className, children }) => {
  const childrenWithProps = injectIndex({ children });

  // Styles
  const classes = useTabListStyles();

  return (
    <div role="tablist" className={mergeClasses(classes.root, className)}>
      {childrenWithProps}
    </div>
  );
};

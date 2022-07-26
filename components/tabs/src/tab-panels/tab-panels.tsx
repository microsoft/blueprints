import { TabPanels as ReachTabPanels } from '@reach/tabs';
import type { FC } from 'react';
import * as React from 'react';

import type { TabPanelsProps } from './tab-panels.types';

export const TabPanels: FC<TabPanelsProps> = ({ className, children, ...rest }) => {
  return (
    <ReachTabPanels className={className} {...rest}>
      {children}
    </ReachTabPanels>
  );
};

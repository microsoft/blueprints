import { TabPanel as ReachTabPanel } from '@reach/tabs';
import type { FC } from 'react';
import * as React from 'react';

import type { TabPanelProps } from './tab-panel.types';

export const TabPanel: FC<TabPanelProps> = ({ className, children, ...rest }) => {
  return (
    <ReachTabPanel className={className} {...rest}>
      {children}
    </ReachTabPanel>
  );
};

import type { FC } from 'react';
import * as React from 'react';

import { useTabsContext } from '../tabs-context';
import { AppearMotion, SlideMotion } from './motion';
import type { TabPanelProps } from './tab-panel.types';

export const TabPanel: FC<TabPanelProps> = ({ className, children, __index = 0 }) => {
  const { currentIndex, id } = useTabsContext();

  const isActive = currentIndex === __index;

  return (
    <AppearMotion
      tabIndex={0}
      role="tabpanel"
      key={__index}
      isActive={isActive}
      className={className}
      id={`${id}-tabpanel-${__index}`}
    >
      <SlideMotion isActive={isActive}>{children}</SlideMotion>
    </AppearMotion>
  );
};

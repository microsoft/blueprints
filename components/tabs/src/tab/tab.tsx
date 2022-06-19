import { Tab as ReachTab } from '@reach/tabs';
import type { FC } from 'react';
import * as React from 'react';

import type { TabProps } from './tab.types';

export const Tab: FC<TabProps> = ({ className, children, ...rest }) => {
  // Styles

  return (
    <ReachTab className={className} {...rest}>
      {children}
    </ReachTab>
  );
};

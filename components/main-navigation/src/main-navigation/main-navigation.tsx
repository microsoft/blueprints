import type { FC } from 'react';
import * as React from 'react';

import type { MainNavigationProps } from './main-navigation.types';

export const MainNavigation: FC<MainNavigationProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
);

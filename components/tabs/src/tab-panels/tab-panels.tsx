import type { FC } from 'react';
import * as React from 'react';

import { injectIndex } from '../utilities';

export const TabPanels: FC<{ className: string }> = ({ children, className }) => (
  <div className={className}>{injectIndex({ children })}</div>
);

import * as React from 'react';
import type { FC, ReactNode, PropsWithChildren } from 'react';

import { useCenteredClasses } from './centered.styles';

export const Centered: FC<{ children?: ReactNode }> = ({ children }) => {
  const classes = useCenteredClasses();
  return <div className={classes.root}>{children}</div>;
};

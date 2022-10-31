import * as React from 'react';
import type { FC } from 'react';

import { useCenteredClasses } from './centered.styles';

export const Centered: FC<{}> = ({ children }) => {
  const classes = useCenteredClasses();
  return <div className={classes.root}>{children}</div>;
};

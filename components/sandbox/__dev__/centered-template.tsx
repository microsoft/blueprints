export const centered = `import { makeStyles } from '@griffel/react';
import type { FC, ReactNode } from 'react';
import * as React from 'react';

const useCenteredClasses = makeStyles({
  root: {
    minHeight: '100vh',
    width: '100%',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
  },
});

export const Centered: FC<{ children?: ReactNode }> = ({ children }) => {
  const classes = useCenteredClasses();

  return <div className={classes.root}>{children}</div>;
};`;

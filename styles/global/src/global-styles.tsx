import { makeStyles, mergeClasses } from '@griffel/react';
import type { FC, ReactNode } from 'react';
import * as React from 'react';

import { GLOBAL_STYLES } from './styles';

const useGlobalStyles = makeStyles(GLOBAL_STYLES);

export const GlobalStyles: FC<{
  className?: string;
  children?: ReactNode | undefined;
}> = ({ children, className }) => {
  const classes = useGlobalStyles();

  return <div className={mergeClasses(classes.root, className)}>{children}</div>;
};

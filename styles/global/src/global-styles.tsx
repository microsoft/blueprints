import * as React from 'react';
import type { FC } from 'react';
import { makeStyles, mergeClasses } from '@griffel/react';

import { GLOBAL_STYLES } from './styles';

const useGlobalStyles = makeStyles(GLOBAL_STYLES);

export const GlobalStyles: FC = ({ children }) => {
  const classes = useGlobalStyles();

  return (
    <div className={mergeClasses(classes.root, classes.body)}>{children}</div>
  )
}
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { MarkListContext } from '../context';
import { useMarkListStyles } from './mark-list.styles';
import type { MarkListProps } from './mark-list.types';

export const MarkList: FC<MarkListProps> = ({
  className,
  children,
  iconColor,
  iconName,
}) => {
  // Styles
  const classes = useMarkListStyles();

  return (
    <MarkListContext.Provider value={{ iconColor, iconName }}>
      <ul className={mergeClasses(classes.root, className)}>{children}</ul>
    </MarkListContext.Provider>
  );
};

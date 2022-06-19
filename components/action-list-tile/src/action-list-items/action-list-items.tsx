import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useActionListItemsStyles } from './action-list-items.styles';
import type { ActionListItemsProps } from './action-list-items.types';

export const ActionListItems: FC<ActionListItemsProps> = ({ className, children }) => {
  // Styles
  const classes = useActionListItemsStyles();

  return <div className={mergeClasses(classes.root, className)}>{children}</div>;
};

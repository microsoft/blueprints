import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useOrderedListItemStyles } from './ordered-list-item.styles';
import type { OrderedListItemProps } from './ordered-list-item.types';

export const OrderedListItem: FC<OrderedListItemProps> = ({
  className,
  children,
  variant = 'primary',
  __index,
}) => {
  // Styles
  const classes = useOrderedListItemStyles();

  return (
    <li className={mergeClasses(classes.root, className)}>
      <div className={mergeClasses(classes.puck, classes[variant])}>{__index}</div>
      <div>{children}</div>
    </li>
  );
};

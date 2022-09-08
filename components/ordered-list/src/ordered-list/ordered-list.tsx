import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { injectIndex } from '../utilities';
import { useOrderedListStyles } from './ordered-list.styles';
import type { OrderedListProps } from './ordered-list.types';

export const OrderedList: FC<OrderedListProps> = ({ className, children, start }) => {
  // Styles
  const classes = useOrderedListStyles();

  return (
    <ol className={mergeClasses(classes.root, className)}>
      {injectIndex({ children, start })}
    </ol>
  );
};

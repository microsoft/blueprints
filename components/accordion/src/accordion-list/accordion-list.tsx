import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useAccordionListStyles } from './accordion-list.styles';
import type { AccordionListProps } from './accordion-list.types';

export const AccordionList: FC<AccordionListProps> = ({ className, children }) => {
  // Styles
  const classes = useAccordionListStyles();

  return <div className={mergeClasses(classes.root, className)}>{children}</div>;
};

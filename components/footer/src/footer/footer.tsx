import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useFooterStyles } from './footer.styles';
import type { FooterProps } from './footer.types';

export const Footer: FC<FooterProps> = ({ className, children }) => {
  // Styles
  const classes = useFooterStyles();
  const space = useSpaceStyles();

  return (
    <footer className={mergeClasses(classes.root, space.p7, className)}>
      {children}
    </footer>
  );
};

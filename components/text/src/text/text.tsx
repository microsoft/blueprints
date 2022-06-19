import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useTextStyles } from './text.styles';
import type { TextProps } from './text.types';

export const Text: FC<TextProps> = ({
  as: Root = 'p',
  children,
  color = 'text',
  variant = 'paragraph',
  className,
}) => {
  // Styles
  const classes = useTextStyles();
  const rootClasses = mergeClasses(
    classes.root,
    classes[color],
    classes[variant],
    className,
  );

  return <Root className={rootClasses}>{children}</Root>;
};

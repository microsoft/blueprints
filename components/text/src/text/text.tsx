import { Text as FluentText } from '@fluentui/react-text';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useTextStyles } from './text.styles';
import type { TextProps } from './text.types';

export const Text: FC<TextProps> = ({
  children,
  color = 'primary',
  variant = 'paragraph',
  className,
  ...props
}) => {
  // Styles
  const classes = useTextStyles();
  const rootClasses = mergeClasses(
    classes.root,
    classes[color],
    classes[variant],
    className,
  );

  return (
    <FluentText className={rootClasses} {...props}>
      {children}
    </FluentText>
  );
};

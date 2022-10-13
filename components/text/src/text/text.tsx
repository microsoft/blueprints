import { Text as FluentText } from '@fluentui/react-text';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useTextStyles } from './text.styles';
import type { TextProps } from './text.types';

export const Text: FC<TextProps> = ({
  children,
  color = 'primary',
  variant,
  className,
  weight,
  size,
  font,
  ...props
}) => {
  // Styles
  const classes = useTextStyles();

  let variantClass = '';

  if (!weight || !size || !font) {
    if (variant) {
      variantClass = classes[variant];
    } else {
      variantClass = classes.paragraph;
    }
  }

  const rootClasses = mergeClasses(classes.root, classes[color], variantClass, className);

  return (
    <FluentText
      weight={weight}
      size={size}
      font={font}
      className={rootClasses}
      {...props}
    >
      {children}
    </FluentText>
  );
};

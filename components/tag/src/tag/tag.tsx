import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useTagStyles } from './tag.styles';
import type { TagProps } from './tag.types';

export const Tag: FC<TagProps> = ({ className, children, isInline, type = 'accent' }) => {
  // Styles
  const classes = useTagStyles();

  return (
    <span
      className={mergeClasses(
        classes.root,
        classes[type],
        isInline && classes.inline,
        className,
      )}
    >
      {children}
    </span>
  );
};

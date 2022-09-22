import { mergeClasses } from '@griffel/react';
import { Icon } from '@microsoft/arbutus.icon';
import type { FC } from 'react';
import * as React from 'react';

import { useBadgeStyles } from './badge.styles';
import type { BadgeProps } from './badge.types';

export const Badge: FC<BadgeProps> = ({
  className,
  iconName,
  color = 'primary',
  isInline,
}) => {
  // Styles
  const classes = useBadgeStyles();

  return (
    <span
      className={mergeClasses(
        classes.root,
        classes[color],
        isInline && classes.inline,
        className,
      )}
    >
      <Icon size="small" iconName={iconName} color={`${color}-inverse`} />
    </span>
  );
};

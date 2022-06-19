import { Icon } from '@arbutus/component.icon';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useBadgeStyles } from './badge.styles';
import type { BadgeProps } from './badge.types';

export const Badge: FC<BadgeProps> = ({
  className,
  iconName,
  iconColor = 'background',
  backgroundColor = 'tile',
  isInline,
}) => {
  // Styles
  const classes = useBadgeStyles();

  return (
    <span
      className={mergeClasses(
        classes.root,
        classes[backgroundColor],
        isInline && classes.inline,
        className,
      )}
    >
      <Icon size="small" color={iconColor} iconName={iconName} />
    </span>
  );
};

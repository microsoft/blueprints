import { Icon } from '@arbutus/component.icon';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useIconButtonStyles } from './icon-button.styles';
import type { IconButtonProps } from './icon-button.types';

export const IconButton: FC<IconButtonProps> = ({
  className,
  label,
  iconName,
  onClick,
}) => {
  // Styles
  const classes = useIconButtonStyles();
  const space = useSpaceStyles();

  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={mergeClasses(classes.root, space.p2, className)}
    >
      <Icon iconName={iconName} />
    </button>
  );
};

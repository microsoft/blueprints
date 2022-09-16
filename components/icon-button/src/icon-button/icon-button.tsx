import { mergeClasses } from '@griffel/react';
import { Icon } from '@microsoft/arbutus.icon';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import { useIconButtonStyles } from './icon-button.styles';
import type { IconButtonProps } from './icon-button.types';

export const IconButton: FC<IconButtonProps> = ({
  className,
  label,
  iconName,
  onClick,
  color = 'primary',
}) => {
  // Styles
  const classes = useIconButtonStyles();
  const space = useSpaceStyles();

  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={mergeClasses(classes.root, classes[color], space.p2, className)}
    >
      <Icon iconName={iconName} />
    </button>
  );
};

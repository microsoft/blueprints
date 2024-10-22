import { mergeClasses } from '@griffel/react';
import { Icon, IconProps } from '@microsoft/arbutus.icon';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import { type FC, forwardRef } from 'react';
import * as React from 'react';

import { useIconButtonStyles } from './icon-button.styles';
import type { IconButtonProps } from './icon-button.types';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      label,
      iconName,
      color = 'primary',
      size = 'medium',
      ...restButtonAttributes
    },
    ref,
  ) => {
    // Styles
    const classes = useIconButtonStyles();
    const space = useSpaceStyles();
    const iconSize: IconProps['size'] = size === 'medium' ? 'medium' : 'large';

    return (
      <button
        ref={ref}
        className={mergeClasses(classes.root, classes[color], space.p2, className)}
        {...(restButtonAttributes['aria-label']
          ? { 'aria-label': restButtonAttributes['aria-label'] }
          : { 'area-label': label })}
        {...restButtonAttributes}
      >
        <Icon iconName={iconName} size={iconSize} />
      </button>
    );
  },
);

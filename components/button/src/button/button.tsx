import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import {
  useButtonBrickStyles,
  useButtonPillStyles,
  useButtonStyles,
} from './button.styles';
import type { ButtonProps } from './button.types';

export const Button: FC<ButtonProps> = ({
  className,
  color = 'primary',
  size = 'medium',
  shape = 'brick',
  children,
  ...rest
}) => {
  // Styles
  const classes = useButtonStyles();
  const brickClasses = useButtonBrickStyles();
  const pillClasses = useButtonPillStyles();

  const isBrick = shape === 'brick';
  const isPill = shape === 'pill';

  return (
    <button
      className={mergeClasses(
        classes.root,
        classes[size],
        // Brick variant
        isBrick && brickClasses[color],
        isBrick && classes.brick,
        // Pill variant
        isPill && classes.pill,
        isPill && pillClasses[color],
        isPill && pillClasses[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

import { mergeStyles } from '@fluentui/react';
import { nanoid } from 'nanoid';
import type { FC } from 'react';
import { useMemo } from 'react';
import * as React from 'react';

import { useIconStyles } from './icon.styles';
import type { IconProps } from './icon.types';
import { paths } from './icons';

export const Icon: FC<IconProps> = ({
  className,
  color = 'text',
  label,
  iconName,
  size = 'medium',
  isInline,
}) => {
  const Icon = useMemo(() => paths[iconName], [iconName]);

  // A11y
  const a11yId = useMemo(() => nanoid(), []);

  type A11yProps = {
    role?: string;
    ['aria-labelledby']?: string;
    ['aria-hidden']?: boolean;
  };

  const a11yProps: A11yProps = {};

  if (label) {
    a11yProps['role'] = 'img';
    a11yProps['aria-labelledby'] = label;
  } else {
    a11yProps['aria-hidden'] = true;
  }

  // Styles
  const classes = useIconStyles();
  const rootClasses = mergeStyles(
    classes.root,
    classes[color],
    classes[size],
    isInline && classes.inline,
    className,
  );

  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={rootClasses}
      fill="currentColor"
      {...a11yProps}
    >
      {label && <title id={a11yId}>{label}</title>}
      <Icon />
    </svg>
  );
};

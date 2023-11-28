import { mergeClasses } from '@griffel/react';
import { Button } from '@microsoft/arbutus.button';
import { Icon } from '@microsoft/arbutus.icon';
import { Logo } from '@microsoft/arbutus.logo';
import { Text } from '@microsoft/arbutus.text';
import type { FC } from 'react';
import * as React from 'react';

import {
  useResourcePillActionStyles,
  useResourcePillLogoStyles,
  useResourcePillStyles,
} from './resource-pill.styles';
import type { ResourcePillProps } from './resource-pill.types';

export const ResourcePill: FC<ResourcePillProps> = ({
  actionIconName,
  className,
  logoLabel,
  logoName,
  text,
  size = 'medium',
  onClick,
}) => {
  // Styles
  const classes = useResourcePillStyles();
  const actionClasses = useResourcePillActionStyles();
  const logoClasses = useResourcePillLogoStyles();

  return (
    <Button
      className={mergeClasses(classes.root, classes[size], className)}
      shape="pill"
      color="secondary"
      size="large"
      onClick={onClick}
    >
      {logoName && logoLabel && (
        <Logo
          className={mergeClasses(logoClasses.root, logoClasses[size])}
          logoName={logoName}
          label={logoLabel}
        />
      )}
      <Text variant="caption">{text}</Text>
      <span className={mergeClasses(actionClasses.root, actionClasses[size])}>
        <Icon iconName={actionIconName} color="accent" />
      </span>
    </Button>
  );
};

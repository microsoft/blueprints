import { mergeClasses } from '@griffel/react';
import { Button } from '@microsoft/arbutus.button';
import { Icon } from '@microsoft/arbutus.icon';
import { Logo } from '@microsoft/arbutus.logo';
import { Text } from '@microsoft/arbutus.text';
import type { FC } from 'react';
import * as React from 'react';

import {
  useResourceChipActionStyles,
  useResourceChipLogoStyles,
  useResourceChipStyles,
} from './resource-chip.styles';
import type { ResourceChipProps } from './resource-chip.types';

export const ResourceChip: FC<ResourceChipProps> = ({
  actionIconName = 'link',
  className,
  logoLabel,
  logoName,
  text,
  size = 'medium',
  onClick,
}) => {
  // Styles
  const classes = useResourceChipStyles();
  const actionClasses = useResourceChipActionStyles();
  const logoClasses = useResourceChipLogoStyles();
  const hasAction = !!actionIconName;
  const rightPaddingMap = {
    small: classes.smallRightPadding,
    medium: classes.mediumRightPadding,
    large: classes.largeRightPadding,
  };

  return (
    <Button
      className={mergeClasses(
        classes.root,
        classes[size],
        !hasAction && rightPaddingMap[size],
        className,
      )}
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
      {actionIconName && (
        <span className={mergeClasses(actionClasses.root, actionClasses[size])}>
          <Icon iconName={actionIconName} color="accent" />
        </span>
      )}
    </Button>
  );
};

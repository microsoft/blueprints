import { Text } from '@arbutus/component.text';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import type { ActionListHeaderProps } from './action-list-header.types';
import { useActionListTileStyles } from './acton-list-header.styles';

export const ActionListHeader: FC<ActionListHeaderProps> = ({
  className,
  title,
  iconSrc,
  iconAlt,
}) => {
  const classes = useActionListTileStyles();
  const space = useSpaceStyles();

  return (
    <header className={className}>
      {iconSrc && (
        <img
          src={iconSrc}
          alt={iconAlt}
          className={mergeClasses(space.mb4, classes.image)}
        />
      )}
      <Text as="h3" variant="caption" className={space.mb3}>
        {title}
      </Text>
    </header>
  );
};

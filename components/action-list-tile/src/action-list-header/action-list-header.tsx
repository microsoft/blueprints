import { mergeClasses } from '@griffel/react';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import type { ActionListHeaderProps } from './action-list-header.types';
import { useActionListHeaderStyles } from './acton-list-header.styles';

export const ActionListHeader: FC<ActionListHeaderProps> = ({
  className,
  title,
  iconSrc,
  iconAlt,
}) => {
  const classes = useActionListHeaderStyles();
  const space = useSpaceStyles();

  return (
    <header className={mergeClasses(space.mb3, className)}>
      {iconSrc && (
        <img
          src={iconSrc}
          alt={iconAlt}
          className={mergeClasses(space.mb4, classes.image)}
        />
      )}
      <Text block as="h3" variant="caption">
        {title}
      </Text>
    </header>
  );
};

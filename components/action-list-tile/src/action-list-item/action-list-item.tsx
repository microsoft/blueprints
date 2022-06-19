import { Icon } from '@arbutus/component.icon';
import { Text } from '@arbutus/component.text';
import { mergeClasses } from '@griffel/react';
import { VisuallyHidden } from '@reach/visually-hidden';
import type { FC } from 'react';
import * as React from 'react';

import { useActionListItemStyles } from './action-list-item.styles';
import type { ActionListItemProps } from './action-list-item.types';

export const ActionListItem: FC<ActionListItemProps> = ({
  className,
  label,
  iconName,
  onClick,
  description,
}) => {
  // Styles
  const classes = useActionListItemStyles();

  return (
    <button onClick={onClick} className={mergeClasses(classes.root, className)}>
      <Text as="span" variant="description" color="secondary">
        <VisuallyHidden>{description}</VisuallyHidden>
        {label}
      </Text>
      <Icon iconName={iconName} color="secondary" size="small" />
    </button>
  );
};

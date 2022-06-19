import { Icon } from '@arbutus/component.icon';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';
import { useContext } from 'react';

import { MarkListContext } from '../context';
import { useMarkListItemStyles } from './mark-list-item.styles';
import type { MarkListItemProps } from './mark-list-item.types';

export const MarkListItem: FC<MarkListItemProps> = ({ className, children }) => {
  const { iconColor, iconName } = useContext(MarkListContext);

  // Styles
  const classes = useMarkListItemStyles();
  const space = useSpaceStyles();

  return (
    <li className={mergeClasses(classes.root, className)}>
      {iconName ? (
        <Icon iconName={iconName} color={iconColor} className={space.mt1} />
      ) : (
        <span className={classes.mark}>— </span>
      )}
      <div>{children}</div>
    </li>
  );
};

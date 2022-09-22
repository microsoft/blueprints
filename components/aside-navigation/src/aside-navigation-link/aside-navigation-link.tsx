import { mergeClasses } from '@griffel/react';
import { Text } from '@microsoft/arbutus.text';
import type { FC } from 'react';
import * as React from 'react';
import { useContext } from 'react';

import { AsideNavigationContext } from '../context';
import { useAsideNavigationLinkStyles } from './aside-navigation-link.styles';
import type { AsideNavigationLinkProps } from './aside-navigation-link.types';

export const AsideNavigationLink: FC<AsideNavigationLinkProps> = ({
  children,
  as: Root = 'button',
  onClick,
  index,
}) => {
  const classes = useAsideNavigationLinkStyles();
  const { currentIndex } = useContext(AsideNavigationContext);
  const isActive = currentIndex === index;

  return (
    <Root onClick={onClick} className={mergeClasses(classes.root)}>
      <Text
        as="span"
        color={isActive ? 'action' : 'secondary'}
        className={isActive ? classes.active : undefined}
      >
        {children}
      </Text>
    </Root>
  );
};

import { Divider } from '@microsoft/arbutus.divider';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import { useContext } from 'react';
import * as React from 'react';

import { MainNavigationLink, MainNavigationSub } from '../index';
import type { MainNavigationRendererProps, NavigationLink, SubNavigation } from './index';
import { MainNavigationRendererContext, MainNavigationRendererProvider } from './index';

export const isSubMenu = (item: NavigationLink | SubNavigation): item is SubNavigation =>
  'items' in item;

export const isButton = (item: NavigationLink | SubNavigation): item is NavigationLink =>
  'id' in item;

export const MainNavigationItems: FC<{ item: SubNavigation | NavigationLink }> = ({
  item,
}) => {
  const { linkAs, activeItemId, onNavigationItemClick } = useContext(
    MainNavigationRendererContext,
  );

  const space = useSpaceStyles();

  const handleClickProp =
    isButton(item) && onNavigationItemClick
      ? { onClick: () => onNavigationItemClick?.(item) }
      : {};

  if (isButton(item)) {
    return (
      <>
        <MainNavigationLink
          isActive={item.id === activeItemId}
          as={linkAs}
          elementProps={{ ...(item.linkProps ?? {}), ...handleClickProp }}
        >
          {item.title}
        </MainNavigationLink>
        {item.hasDivider && <Divider className={space.my4} />}
      </>
    );
  }

  if (isSubMenu(item)) {
    return (
      <>
        <MainNavigationSub title={item.title}>
          {Object.entries(item.items).map(([key, subItem]) => (
            <MainNavigationItems key={key} item={subItem} />
          ))}
        </MainNavigationSub>
        {item.hasDivider && <Divider className={space.my4} />}
      </>
    );
  }

  return null;
};

export const MainNavigationRenderer: FC<MainNavigationRendererProps> = ({
  items,
  ...contextValue
}) => {
  return (
    <MainNavigationRendererProvider value={contextValue}>
      {Object.entries(items).map(([key, item]) => (
        <MainNavigationItems key={key} item={item} />
      ))}
    </MainNavigationRendererProvider>
  );
};

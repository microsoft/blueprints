import { Divider } from '@microsoft/arbutus.divider';
import type { FC } from 'react';
import { useContext } from 'react';
import * as React from 'react';

import { MainNavigationLink, MainNavigationSub } from '../index';
import type {
  MainNavigationRendererProps,
  NavigationButton,
  SubNavigation,
} from './index';
import { MainNavigationRendererContext, MainNavigationRendererProvider } from './index';

export const isSubMenu = (
  item: NavigationButton | SubNavigation,
): item is SubNavigation => 'items' in item;

export const isButton = (
  item: NavigationButton | SubNavigation,
): item is NavigationButton => 'id' in item;

export const MainNavigationItems: FC<{ item: SubNavigation | NavigationButton }> = ({
  item,
}) => {
  const { linkAs, linkElementProps, activeItemId, onNavigationItemClick } = useContext(
    MainNavigationRendererContext,
  );

  const handleClickProp =
    isButton(item) && onNavigationItemClick
      ? { onClick: () => onNavigationItemClick?.(item.id) }
      : {};

  if (isButton(item)) {
    return (
      <>
        <MainNavigationLink
          isActive={item.id === activeItemId}
          as={linkAs}
          elementProps={{ ...linkElementProps, ...handleClickProp }}
        >
          {item.title}
        </MainNavigationLink>
        {item.hasDivider && <Divider />}
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
        {item.hasDivider && <Divider />}
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

import type { ElementType } from 'react';

export type NavigationButton = {
  /**
   * Unique id of the item. Use the route path as id, if applicable. Id is used to determine the active item.
   */
  id: string;

  /**
   * Human-readable title of the navigation button.
   */
  title: string;

  /**
   * Adds an optional divider **after** the navigation button.
   * @default false
   */
  hasDivider?: boolean;
};

export type SubNavigation = {
  /**
   * Human-readable title of the sub-navigation button.
   */
  title: string;

  /**
   * Navigation items of the sub-navigation.
   */
  items: Record<string, NavigationButton | SubNavigation>;

  /**
   * Adds an optional divider **after** the sub-navigation button.
   * @default false
   */
  hasDivider?: boolean;
};

export type NavigationItems = Record<string, NavigationButton | SubNavigation>;

export type MainNavigationRendererProps = {
  /**
   * Navigation items of the sub-navigation.
   */
  items: NavigationItems | [];

  /**
   * Id of the active navigation item. It is used to visually highlight an active page. `activeItemId` should match the
   * `id` of the `NavigationButton` item in your `NavigationItems` object (passed through `items`).
   *
   * If none is provided, no item will be highlighted.
   */
  activeItemId?: string;

  /**
   * Link element.
   */
  linkAs: ElementType;

  /**
   * Link element props.
   */
  linkElementProps?: Record<string, unknown>;

  /**
   * Optional callback that is called when a navigation item is clicked.
   * @param id - Id of the `NavigationButton` item in your `NavigationItems` object (passed through `items`).
   */
  onNavigationItemClick?: (id: string) => void;
};

export type MainNavigationRendererContextValue = Omit<MainNavigationRendererProps, 'items'>;

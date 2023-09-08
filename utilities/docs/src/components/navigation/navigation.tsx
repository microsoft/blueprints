import type { NavigationItems } from '@microsoft/arbutus.main-navigation';
import {
  MainNavigation,
  MainNavigationRenderer,
} from '@microsoft/arbutus.main-navigation';
import { useLocation } from '@reach/router';
import { graphql, Link, useStaticQuery } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';

import { getNavigationContent, makeNavigationQuery } from './get-navigation-content';
import type { ComponentPageData, GuidelinesPageData } from './navigation.types';

const MainNavigationQuery = graphql`
  query MainNavigationQuery {
    mainNavigationJson {
      items {
        hasDivider
        id
        linkProps {
          to
        }
        title
        items {
          collection
          exclude
          id
          order
          title
          linkProps {
            to
          }
          items {
            collection
            order
          }
        }
      }
    }
  }
`;

export type MainNavigationItem = {
  title: string;
  id: string;
  linkProps: {
    to: string;
  }
};

export type MainNavigationCollection = {
  collection: string;
  exclude?: string[];
  include?: string[];
  order?: 'alphabetical' | 'by-index';
}

export type MainNavigationHeader = {
  title: string;
  items: MainNavigationItemType[];
  hasDivider?: boolean;
}

export type MainNavigationItemType = MainNavigationItem | MainNavigationCollection | MainNavigationHeader;

export type NavigationQuery = {
  mainNavigationJson: {
    items: MainNavigationItemType[];
  };
};

export type CollectionsQuery = {
  [key: string]: {
    nodes: {
      title: string;
      _path: string;
    }[];
  }
}

export const Navigation: FC = () => {
  const { pathname } = useLocation();

  const navigationData = useStaticQuery<NavigationQuery>(MainNavigationQuery);

  const { query, aliases } = makeNavigationQuery(navigationData.mainNavigationJson.items);

  const itemsData = useStaticQuery<CollectionsQuery>(query);

  return (
    <MainNavigation>
      {/* <MainNavigationRenderer items={items} linkAs={Link} activeItemId={pathname} /> */}
    </MainNavigation>
  );
};

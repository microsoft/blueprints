import * as React from 'react';
import type { FC } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import {
  MainNavigation,
  MainNavigationRenderer,
} from '@microsoft/arbutus.main-navigation';
import type { NavigationItems } from '@microsoft/arbutus.main-navigation';
import { useLocation } from '@reach/router';

import { getNavigationContent } from './get-navigation-content';
import type { NavigationProps } from './navigation.types';

export type ComponentPageData = {
  _path: string;
  _orderInNav?: number;
  _includeInNav?: boolean;
  title: string;
};

export type GuidelinesPageData = {
  _path: string;
  _orderInNav?: number;
  _includeInNav?: boolean;
  title: string;
};

export type NavigationQuery = {
  allComponentsJson: {
    nodes: ComponentPageData[];
  };
  allGuidanceJson: {
    nodes: GuidelinesPageData[];
  };
};

export const Navigation: FC<NavigationProps> = () => {
  const { pathname } = useLocation();

  const data = useStaticQuery<NavigationQuery>(graphql`
    query MyQuery {
      allGuidanceJson {
        nodes {
          _path
          _orderInNav
          _includeInNav
          title
        }
      }
      allComponentsJson {
        nodes {
          _path
          _includeInNav
          title
        }
      }
    }
  `);

  const { components, guidance } = getNavigationContent(data);

  const items: NavigationItems = {
    gettingStarted: {
      title: 'Getting Started',
      id: '/getting-started',
      linkProps: { to: '/getting-started' },
      hasDivider: true,
    },
    guidance: {
      title: 'Guidance',
      items: guidance,
    },
    documentation: {
      title: 'Documentation',
      hasDivider: true,
      items: {
        quickStart: {
          title: 'Quick Start',
          id: '/documentation/quick-start',
          linkProps: { to: '/documentation/quick-start' },
        },
        theming: {
          title: 'Theming',
          id: '/documentation/theming',
          linkProps: { to: '/documentation/theming' },
        },
        content: {
          title: 'Content',
          id: '/documentation/content',
          linkProps: { to: '/documentation/content' },
        },
        starters: {
          title: 'Starters',
          items: {
            gatsbyJson: {
              title: 'Gatsby & JSON',
              id: '/documentation/starters/gatsby-json',
              linkProps: { to: '/documentation/starters/gatsby-json' },
            },
          },
        },
        components: {
          title: 'Components',
          items: components,
        },
      },
    },
  };

  return (
    <MainNavigation>
      <MainNavigationRenderer items={items} linkAs={Link} activeItemId={pathname} />
    </MainNavigation>
  );
};

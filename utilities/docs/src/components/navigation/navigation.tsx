import {
  MainNavigation,
  MainNavigationRenderer,
} from '@microsoft/arbutus.main-navigation';
import { useLocation } from '@reach/router';
import { graphql, Link, useStaticQuery } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';

import { getNavigationContent } from './get-navigation-content';
import type { MainNavigationCollectionsQuery } from './navigation.types';
import { MAIN_NAVIGATION } from './config';

const MainNavigationCollectionsQuery = graphql`
  query MainNavigationCollectionsQuery {
    guidance: allPagesJson(filter: { _path: { glob: "/guidance/*" } }) {
      nodes {
        _path
        title
      }
    }
    layouts: allPagesJson(filter: { _path: { glob: "/layouts/*" } }) {
      nodes {
        _path
        title
      }
    }
    patterns: allPagesJson(filter: { _path: { glob: "/patterns/*" } }) {
      nodes {
        _path
        title
      }
    }
    componentsAtoms: allPagesJson(filter: { _path: { glob: "/components/atoms/*" } }) {
      nodes {
        _path
        title
      }
    }
    componentsLists: allPagesJson(filter: { _path: { glob: "/components/lists/*" } }) {
      nodes {
        _path
        title
      }
    }
    componentsTiles: allPagesJson(filter: { _path: { glob: "/components/tiles/*" } }) {
      nodes {
        _path
        title
      }
    }
    styles: allPagesJson(filter: { _path: { glob: "/styles/*" } }) {
      nodes {
        _path
        title
      }
    }
  }
`;

export const Navigation: FC = () => {
  const { pathname } = useLocation();

  const collectionsData = useStaticQuery<MainNavigationCollectionsQuery>(
    MainNavigationCollectionsQuery,
  );
  const items = getNavigationContent({ collectionsData, config: MAIN_NAVIGATION });

  return (
    <MainNavigation>
      <MainNavigationRenderer items={items} linkAs={Link} activeItemId={pathname} />
    </MainNavigation>
  );
};

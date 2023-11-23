import { graphql, type HeadFC, type PageProps } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';

import type { LayoutKey } from '../layouts/layouts.types';
import {
  WorkInProgressLayout,
  WorkInProgressLayoutProps,
} from '../layouts/work-in-progress';
import { BasicLayout, BasicLayoutProps } from '../layouts/basic';
import { ReferenceLayout, ReferenceLayoutProps } from '../layouts/reference';
import type { ComponentData } from '../components/component-renderer';
import { formatDataToProps } from '../utilities/generating-pages';

type JsonPageContext = {
  id: string;
  _path: string;
};

export type JsonPageData = {
  pagesJson: {
    packageName: string;
    _layout: LayoutKey;
    _path: string;
    title: string;
    leading?: string;
    definition?: string;
    owners?: {
      alias: string;
      firstName: string;
      lastName: string;
      role: string;
    }[];
    heroImage?: {
      alt: string;
      src: {
        publicURL: string;
      };
    };
    content?: ComponentData[];
    tabs?: {
      tab: string;
      content: ComponentData[];
    }[];
  };
};

const JsonPage: FC<PageProps<JsonPageData, JsonPageContext>> = ({ data }) => {
  const { key, props } = formatDataToProps(data);

  if (key === 'basic') {
    return <BasicLayout {...(props as BasicLayoutProps)} />;
  }

  if (key === 'reference') {
    return <ReferenceLayout {...(props as ReferenceLayoutProps)} />;
  }

  if (key === 'work-in-progress') {
    return <WorkInProgressLayout {...(props as WorkInProgressLayoutProps)} />;
  }

  return <WorkInProgressLayout title={data.pagesJson.title ?? 'Page title'} />;
};

export const Head: HeadFC<JsonPageData> = ({ data }) => (
  <title>{`Blueprints | ${data.pagesJson.title}`}</title>
);

export default JsonPage;

export const query = graphql`
  fragment Metadata on PagesJson {
    _layout
    _path
  }
  fragment Description on PagesJson {
    definition
    leading
    title
  }
  fragment Owners on PagesJson {
    owners {
      alias
      firstName
      lastName
      role
    }
  }
  fragment HeroImage on PagesJson {
    heroImage {
      alt
      src {
        publicURL
      }
    }
  }
  fragment HeadingComponent on PagesJsonContent {
    contentComponentId
    title
    leading
    withCopyLink
    withDivider
    size
    as
  }
  fragment TextComponent on PagesJsonContent {
    contentComponentId
    markdown {
      raw
    }
  }
  fragment IntroductionTextComponent on PagesJsonContent {
    contentComponentId
    markdown {
      raw
    }
  }
  query JsonPageQuery($_path: String!) {
    pagesJson(_path: { eq: $_path }) {
      ...Metadata
      ...Description
      ...Owners
      ...HeroImage
      content {
        ...HeadingComponent
        ...IntroductionTextComponent
        ...TextComponent
      }
      tabs {
        tab
        content {
          contentComponentId
          title
          leading
          withCopyLink
          withDivider
          size
          as
        }
      }
    }
  }
`;

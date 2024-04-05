import { graphql, type HeadFC, type PageProps } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';

import type { ComponentData } from '../components/component-renderer';
import type { BasicLayoutProps } from '../layouts/basic';
import { BasicLayout } from '../layouts/basic';
import type { LayoutKey } from '../layouts/layouts.types';
import type { ReferenceLayoutProps } from '../layouts/reference';
import { ReferenceLayout } from '../layouts/reference';
import type { WorkInProgressLayoutProps } from '../layouts/work-in-progress';
import { WorkInProgressLayout } from '../layouts/work-in-progress';
import { formatDataToProps } from '../utilities/generating-pages';

type JsonPageContext = {
  id: string;
  _path: string;
};

export type JsonPageData = {
  pagesJson: {
    _layout: LayoutKey;
    _path: string;
    title: string;
    leading?: string;
    definition?: string;
    quickResources: (
      | {
          label: string;
          url: string;
          type: 'figma' | 'storybook';
        }
      | {
          copyText: string;
        }
    )[];
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
  fragment HeadingComponentTabs on PagesJsonTabsContent {
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
  fragment TextComponentTabs on PagesJsonTabsContent {
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
  fragment IntroductionTextComponentTabs on PagesJsonTabsContent {
    contentComponentId
    markdown {
      raw
    }
  }
  fragment ComponentPreviewComponent on PagesJsonContent {
    contentComponentId
    exampleFile
    withMenu
  }
  fragment ComponentPreviewComponentTabs on PagesJsonTabsContent {
    contentComponentId
    exampleFile
    withMenu
  }
  fragment AnatomyComponentTabs on PagesJsonTabsContent {
    contentComponentId
    embedUrl
    listItems {
      headline
      text
    }
  }
  fragment SandboxComponentTabs on PagesJsonTabsContent {
    contentComponentId
    codeFile
    dependencies
  }
  fragment EmbedTabs on PagesJsonTabsContent {
    contentComponentId
    url
    type
    title
    size
  }
  fragment PropTableTabs on PagesJsonTabsContent {
    contentComponentId
    componentName
    componentPropType
  }
  fragment TableListComponent on PagesJsonContent {
    contentComponentId
    data
    headers {
      text
    }
    variant
    columnSizing
  }
  fragment TableListComponentTabs on PagesJsonTabsContent {
    contentComponentId
    variant
    data
    columnSizing
  }
  fragment SidenoteComponent on PagesJsonContent {
    contentComponentId
    markdown {
      raw
    }
    variant
  }
  query JsonPageQuery($_path: String!) {
    pagesJson(_path: { eq: $_path }) {
      ...Metadata
      ...Description
      ...Owners
      ...HeroImage
      quickResources {
        label
        url
        type
        copyText
      }
      content {
        ...HeadingComponent
        ...IntroductionTextComponent
        ...TextComponent
        ...TableListComponent
        ...SidenoteComponent
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
          ...AnatomyComponentTabs
          ...ComponentPreviewComponentTabs
          ...EmbedTabs
          ...HeadingComponentTabs
          ...PropTableTabs
          ...SandboxComponentTabs
          ...TableListComponentTabs
          ...TextComponentTabs
        }
      }
    }
  }
`;

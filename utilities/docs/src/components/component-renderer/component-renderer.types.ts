import type { IGatsbyImageData } from 'gatsby-plugin-image';

import { components } from './partials';

export type ComponentData =
  | ActionListTileComponentData
  | BookmarkTileComponentData
  | CodeSnippetComponentData
  | EmbedComponentData
  | GuidanceComponentData
  | HeadingComponentData
  | IllustrationTileComponentData
  | ImageComponentData
  | ImageTileComponentData
  | LinkComponentData
  | MarkListComponentData
  | OrderedListComponentData
  | PersonTileComponentData
  | RecommendationComponentData;

export type HeadingComponentData = {
  contentComponentId: 'blocks.heading';
  title: string;
  leading?: string;
  withCopyLink?: boolean;
  withDivider?: boolean;
  size: 'headline' | 'jumbo' | 'title' | 'subtitle' | 'caption';
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export type CodeSnippetComponentData = {
  contentComponentId: 'blocks.heading';
  code_: string;
  language: 'typescript' | 'javascript';
};

export type BookmarkTileComponentData = {
  contentComponentId: 'tiles.bookmark-tile';
  title: string;
  description: string;
  isExternal: string;
  to: string;
  icon?: {
    alternativeText: string;
    src: string;
  };
};

export type ImageComponentData = {
  contentComponentId: 'blocks.image';
  image: {
    alternativeText: string;
    url: string;
    localFile: { publicURL: string; childrenImageSharp: { gatsbyImageData: IGatsbyImageData }[] };
  };
  description: string;
};

export type MarkListComponentData = {
  contentComponentId: 'lists.mark-list';
  listItems: {
    headline?: string;
    text: string;
  }[];
};

export type ActionListTileComponentData = {
  contentComponentId: 'tiles.action-list-tile';
  title?: string;
  icon?: {
    alternativeText: string;
    src: string;
  };
  listItems: {
    iconType: 'link' | 'download' | 'open';
    description: string;
    label: string;
    to: string;
    isExternal: boolean;
  }[];
};

export type GuidanceComponentData = {
  contentComponentId: 'blocks.guidance';
  fileTitle: string;
  fileType: 'figma' | 'storybook';
  url: string;
  heading?: string;
  description?: string;
  image: {
    alternativeText: string;
    src: { publicURL: string; childrenImageSharp: { gatsbyImageData: IGatsbyImageData }[] };
  };
  listItems?: {
    headline?: string;
    text: string;
  }[];
};

export type EmbedComponentData = {
  contentComponentId: 'blocks.embed';
  url: string;
  type: 'figma' | 'storybook';
  title: string;
  size: 'small' | 'medium' | 'large';
};

export type LinkComponentData = {
  contentComponentId: 'atoms.link';
  to: string;
  text: string;
  isExternal: boolean;
};

export type OrderedListComponentData = {
  contentComponentId: 'lists.ordered-list';
  variant: 'primary' | 'secondary' | 'accent';
  listItems: {
    headline?: string;
    text: string;
  }[];
};

export type IllustrationTileComponentData = {
  contentComponentId: 'tiles.illustration-tile';
  title: string;
  to: string;
  isExternal: boolean;
  description: string;
  image: {
    alternativeText: string;
    url: string;
  };
};

export type ImageTileComponentData = {
  contentComponentId: 'tiles.image-tile';
  to: string;
  isExternal: boolean;
  title?: string;
  description?: string;
  image: {
    url?: string;
    alternativeText: string;
    localFile: { publicURL: string; childrenImageSharp: { gatsbyImageData: IGatsbyImageData }[] };
  };
};

export type PersonTileComponentData = {
  contentComponentId: 'tiles.person-tile';
  role: string;
  lastName: string;
  isExternal: boolean;
  firstName: string;
  to: string;
  avatar?: {
    alternativeText: string;
    url?: string;
  };
  icon: {
    alternativeText: string;
    url: string;
  };
};

export type RecommendationComponentData = {
  contentComponentId: 'tiles.recommendation';
  title: string;
  recommendation: 'positive' | 'negative';
  description?: string;
  recommendationsList?: {
    text: string;
    headline?: string;
  }[];
  image?: {
    alternativeText: string;
    localFile: { publicURL: string; childrenImageSharp: { gatsbyImageData: IGatsbyImageData }[] };
  };
};

export type PropTableComponentData = {
  contentComponentId: 'blocks.prop-table';
  componentName: string;
  componentPropType: string;
};

export type TextComponentData = {
  contentComponentId: 'blocks.text';
  childStrapiComponentBlocksTextTextTextnode: {
    childMarkdownRemark: {
      html?: string;
      rawMarkdownBody?: string;
    };
  };
};

export type ComponentPreviewComponentData = {
  contentComponentId: 'blocks.component-preview';
  exampleFile: string;
  withMenu: boolean;
  wrapper: 'display' | 'minimal' | 'none';
};

export type ComponentRendererProps = {
  content?: ComponentData[] | [];
};

export type ComponentProps = {
  type: ComponentType;
  content: ComponentData[];
};

export type ComponentType = keyof typeof components;

import type { HeadFC, type PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import type { FC } from 'react';
import * as React from 'react';

import type { ComponentData } from '../../components/component-renderer';
import { BasicLayout } from '../../layouts/basic';

type GuidancePageData = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
  guidanceJson: {
    title: string;
    leading: string;
    heroImage?: {
      alt: string;
      src: {
        publicURL: string;
        childrenImageSharp: { gatsbyImageData: IGatsbyImageData }[];
      };
    };
    content: ComponentData[];
  };
};

export const getGuidancePageContent = (data?: GuidancePageData) => ({
  title: data?.guidanceJson?.title ?? '[title]',
  leading: data?.guidanceJson?.leading ?? '[leading]',
  heroImage: data?.guidanceJson?.heroImage,
  content: data?.guidanceJson?.content ?? [],
});

const GuidancePage: FC<PageProps<GuidancePageData, { _path: string }>> = ({ data }) => {
  const basicLayoutProps = getGuidancePageContent(data);

  return <BasicLayout {...basicLayoutProps} />;
};

export const Head: HeadFC<GuidancePageData> = ({ data }) => {
  const { title: site } = data.site?.siteMetadata ?? '';
  const { title } = getGuidancePageContent(data);

  return <title>{`${site} | ${title}`}</title>;
};

export default GuidancePage;

export const query = graphql`
  query GuidancePageQuery($_path: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    guidanceJson(_path: { eq: $_path }) {
      title
      leading
      heroImage {
        alt
        src {
          publicURL
          childrenImageSharp {
            gatsbyImageData(
              height: 620
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              quality: 100
            )
          }
        }
      }
      content {
        contentComponentId
        as
        leading
        size
        title
        withCopyLink
        withDivider
        to
        isExternal
        icon {
          alternativeText
          src
        }
        description
      }
    }
  }
`;

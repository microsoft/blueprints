import * as React from 'react';
import type { FC } from 'react';
import { graphql, HeadFC, type PageProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import { BasicLayout, type BasicLayoutProps } from '../layouts/basic';
import { ComponentData } from '../components/component-renderer';

type BasicPageData = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
  basicJson: {
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

export const getBasicPageContent = (data?: BasicPageData): BasicLayoutProps => ({
  title: data?.basicJson?.title ?? '[title]',
  leading: data?.basicJson?.leading ?? '[leading]',
  heroImage: data?.basicJson?.heroImage,
  content: data?.basicJson?.content ?? [],
});

const BasicPage: FC<PageProps<BasicPageData, { _path: string }>> = ({ data }) => {
  const basicLayoutProps = getBasicPageContent(data);

  return <BasicLayout {...basicLayoutProps} />;
};

export const Head: HeadFC<BasicPageData> = ({ data }) => {
  const { title: site } = data.site?.siteMetadata ?? '';
  const { title } = getBasicPageContent(data);

  return <title>{`${site} | ${title}`}</title>;
};

export default BasicPage;

export const query = graphql`
  query BasicPageQuery($_path: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    basicJson(_path: { eq: $_path }) {
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
        code_
        avatar {
          alternativeText
          url
        }
        description
        fileTitle
        fileType
        firstName
        heading
        icon {
          url
          alternativeText
        }
        image {
          alternativeText
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
        imageDescription
        isExternal
        language
        lastName
        leading
        listItems {
          description
          headline
          iconType
          isExternal
          label
          text
        }
        recommendation
        recommendationsList {
          headline
          text
        }
        role
        size
        text
        title
        to
        type
        url
        variant
        withCopyLink
        withDivider
      }
    }
  }
`;

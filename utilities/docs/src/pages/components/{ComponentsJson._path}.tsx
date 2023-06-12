import * as React from 'react';
import type { FC } from 'react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';

import { ReferenceLayout, type ReferenceLayoutProps } from '../../layouts/reference';
import { ComponentData } from '../../components/component-renderer';

type ComponentPageQuery = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
  componentsJson: {
    title: string;
    definition: string;
    packageName: string;
    owners: {
      firstName: string;
      lastName?: string;
      role: string;
      alias?: string;
      avatar?: {
        alternativeText: string;
        url: string;
      };
    }[];
    tabs: {
      tab: string;
      content: ComponentData[];
    }[];
  };
};

export const getComponentPageContent = (data?: ComponentPageQuery): ReferenceLayoutProps => ({
  title: data?.componentsJson?.title ?? '[title]',
  definition: data?.componentsJson?.definition ?? '[definition]',
  packageName: data?.componentsJson?.packageName ?? '[packageName]',
  owners: data?.componentsJson?.owners ?? [],
  tabs: data?.componentsJson?.tabs ?? []
});

const ReferencePage: FC<PageProps<ComponentPageQuery, { _path: string }>> = ({ data }) => {
  const referenceLayoutProps = getComponentPageContent(data);

  return <ReferenceLayout {...referenceLayoutProps} />;
};

export const Head: HeadFC<ComponentPageQuery> = ({ data }) => {
  const { title: site } = data.site?.siteMetadata ?? '';
  const { title } = getComponentPageContent(data);

  return <title>{`${site} | ${title}`}</title>;
};

export default ReferencePage;

export const query = graphql`
  query ComponentPageQuery($_path: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    componentsJson(_path: { eq: $_path }) {
      title
      definition
      owners {
        alias
        firstName
        lastName
        role
      }
      tabs {
        tab
        content {
          contentComponentId
          as
          leading
          size
          title
          withCopyLink
          withDivider
          exampleFile
          withMenu
          componentName
          componentPropType
        }
      }
    }
  }
`;

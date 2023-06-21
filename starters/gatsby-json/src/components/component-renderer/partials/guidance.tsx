import { Guidance } from '@microsoft/arbutus.guidance';
import { GatsbyImage } from 'gatsby-plugin-image';
import type { FC } from 'react';
import * as React from 'react';

import type { GuidanceComponentData } from '../component-renderer.types';

type GuidanceComponentProps = GuidanceComponentData;

const formatListItemData = (listItems: GuidanceComponentProps['listItems']) =>
  listItems?.map(({ text, headline }) => ({ heading: headline, description: text }));

export const GuidanceComponent: FC<GuidanceComponentProps> = ({
  fileTitle,
  fileType,
  image,
  url,
  description,
  heading,
  listItems,
}) => {
  const legendListItems = formatListItemData(listItems);
  const imageSrc = image?.src?.childrenImageSharp[0]?.gatsbyImageData;

  return (
    <Guidance
      fileTitle={fileTitle}
      logoName={fileType}
      logoLabel={`${fileType} file`}
      openButtonLabel={`Open the ${fileType} file`}
      url={url}
      imageAs={GatsbyImage}
      imageProps={{ image: imageSrc, alt: image.alternativeText }}
      heading={heading}
      description={description}
      legendListItems={legendListItems}
    />
  );
};

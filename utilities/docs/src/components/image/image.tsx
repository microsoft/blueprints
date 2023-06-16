import * as React from 'react';
import type { FC } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import type { ImageProps } from './image.types';
import { useImageStyles } from './image.styles';
import { mergeClasses } from '@griffel/react';

export const Image: FC<ImageProps> = ({
  image,
  src,
  alt,
  className,
  isRounded,
  isHero,
  gatsbyImageProps,
}) => {
  // Styles
  const classes = useImageStyles();
  const rootClasses = mergeClasses(
    classes.root,
    isRounded && classes.rounded,
    isHero && classes.hero,
    className,
  );

  const imageSrc = image?.localFile?.childrenImageSharp[0]?.gatsbyImageData;
  const isSvg = image?.url?.endsWith('.svg');
  const isGatsbyImage = Boolean(imageSrc && !isSvg);

  if (!isGatsbyImage && !isSvg && !src) {
    return null;
  }

  // Vanilla image
  if (src) {
    return <img src={src} alt={alt ?? ''} className={rootClasses} />;
  }

  // SVG image
  if (image && isSvg) {
    return <img src={image.url} alt={image.alternativeText} className={rootClasses} />;
  }

  // Gatsby image
  return (
    <GatsbyImage
      image={imageSrc!}
      alt={image?.alternativeText ?? ''}
      className={rootClasses}
      {...gatsbyImageProps}
    />
  );
};

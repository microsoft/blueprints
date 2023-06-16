import * as React from 'react';
import type { FC } from 'react';
import { navigate } from 'gatsby';
import { ImageTile } from '@microsoft/arbutus.image-tile';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  thumbnail: {
    height: '180px',
    width: '100%',
    objectFit: 'cover',
  },
});

import { ImageTileComponentData } from '../component-renderer.types';

type ImageTileComponentProps = ImageTileComponentData;

const SVGImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => <img src={src} alt={alt} className={className} />;

export const ImageTileComponent: FC<ImageTileComponentProps> = ({
  image,
  isExternal,
  to,
  description,
  title,
}) => {
  const classes = useStyles();

  const onClick = () => (isExternal ? window.open(to, '_blank') : navigate(to));
  const isSvg = image?.url?.endsWith('.svg');

  const imageProps = isSvg
    ? {
        src: image.url,
        alt: image.alternativeText,
        className: classes.thumbnail,
      }
    : {
        image: getImage(image.localFile),
        alt: image.alternativeText,
        className: classes.thumbnail,
      };

  return (
    <ImageTile
      imageAs={isSvg ? SVGImage : GatsbyImage}
      imageProps={imageProps}
      title={title}
      description={description}
      onClick={onClick}
    />
  );
};

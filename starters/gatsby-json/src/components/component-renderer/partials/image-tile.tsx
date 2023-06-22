import { makeStyles } from '@griffel/react';
import { ImageTile } from '@microsoft/arbutus.image-tile';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import type { FC } from 'react';
import * as React from 'react';

import { makeNavigate } from '../../../utilities';
import type { ImageTileComponentData } from '../component-renderer.types';

const useStyles = makeStyles({
  thumbnail: {
    height: '180px',
    width: '100%',
    objectFit: 'cover',
  },
});

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

  const onClick = makeNavigate({ isExternal, to });
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

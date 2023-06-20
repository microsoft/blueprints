import { IllustrationTile } from '@microsoft/arbutus.illustration-tile';
import type { FC } from 'react';
import * as React from 'react';

import { makeNavigate } from '../../../utilities';
import type { IllustrationTileComponentData } from '../component-renderer.types';

type IllustrationTileComponentProps = IllustrationTileComponentData;

export const IllustrationTileComponent: FC<IllustrationTileComponentProps> = ({
  to,
  description,
  image,
  isExternal,
  title,
}) => {
  const onClick = makeNavigate({ isExternal, to });

  return (
    <IllustrationTile
      description={description}
      illustrationAlt={image.alternativeText}
      illustrationSrc={image.url}
      onClick={onClick}
      title={title}
    />
  );
};

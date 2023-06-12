import * as React from 'react';
import type { FC } from 'react';
import { navigate } from 'gatsby';
import { IllustrationTile } from '@microsoft/arbutus.illustration-tile';

import { IllustrationTileComponentData } from '../component-renderer.types';

type IllustrationTileComponentProps = IllustrationTileComponentData;

import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  root: {
    maxWidth: '316px'
  }
});

export const IllustrationTileComponent: FC<IllustrationTileComponentProps> = ({
  to,
  description,
  image,
  isExternal,
  title
}) => {
  const onClick = () => (isExternal ? window.open(to, '_blank') : navigate(to));

  const classes = useStyles();
  return (
    <IllustrationTile
      className={classes.root}
      description={description}
      illustrationAlt={image.alternativeText}
      illustrationSrc={image.url}
      onClick={onClick}
      title={title}
    />
  );
};

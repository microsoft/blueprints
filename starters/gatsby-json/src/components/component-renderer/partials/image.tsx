import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';
import { Text } from '@microsoft/arbutus.text';
import type { FC } from 'react';
import * as React from 'react';

import { Image } from '../../image';
import type { ImageComponentData } from '../component-renderer.types';

type ImageComponentProps = ImageComponentData;

const useImageComponentStyles = makeStyles({
  figure: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    '& img': {
      ...shorthands.borderRadius(tokens.borderRadiusXLarge),
    },
    '& figcaption': {
      marginTop: tokens.spacingVerticalL,
    },
  },
});

export const ImageComponent: FC<ImageComponentProps> = ({ image, description }) => {
  const classes = useImageComponentStyles();

  return (
    <figure className={classes.figure}>
      <Image image={image} />
      {description && (
        <figcaption>
          <Text variant="description" color="secondary">
            {description}
          </Text>
        </figcaption>
      )}
    </figure>
  );
};

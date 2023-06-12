import * as React from 'react';
import type { FC } from 'react';
import { Text } from '@microsoft/arbutus.text';
import { makeStyles, shorthands } from '@griffel/react';
import { tokens } from '@fluentui/react-theme';

import { ImageComponentData } from '../component-renderer.types';
import { Image } from '../../image';

type ImageComponentProps = ImageComponentData;

const useImageComponentStyles = makeStyles({
  figure: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    '& img': {
      ...shorthands.borderRadius(tokens.borderRadiusXLarge)
    },
    '& figcaption': {
      marginTop: tokens.spacingVerticalL
    }
  }
});

export const ImageComponent: FC<ImageComponentProps> = ({ image, description }) => {
  const classes = useImageComponentStyles();

  return (
    <figure className={classes.figure}>
      <Image image={image}/>
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

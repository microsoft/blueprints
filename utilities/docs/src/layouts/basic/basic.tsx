import { mergeClasses } from '@griffel/react';
import { Divider } from '@microsoft/arbutus.divider';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import { ComponentRenderer } from '../../components/component-renderer';
import { Image } from '../../components/image';
import { useBasicLayoutStyles } from './basic.styles';
import type { BasicLayoutProps } from './basic.types';

export const BasicLayout: FC<BasicLayoutProps> = ({
  title,
  leading,
  content,
  heroImage,
}) => {
  const classes = useBasicLayoutStyles();
  const space = useSpaceStyles();

  const image = {
    alternativeText: heroImage?.alt ?? '',
    localFile: heroImage?.src,
  };

  return (
    <>
      {heroImage && <Image isHero image={image} />}
      <Text
        block
        variant="jumbo"
        as="h1"
        className={mergeClasses(space.mt12, space.mb10, classes.title)}
      >
        {title}
      </Text>
      {leading && (
        <Text block variant="leading" className={mergeClasses(space.my5, space.mb10)}>
          {leading}
        </Text>
      )}
      <Divider />
      {content && <ComponentRenderer content={content} />}
    </>
  );
};

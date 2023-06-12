import * as React from 'react';
import type { FC } from 'react';
import { Text } from '@microsoft/arbutus.text';
import { Divider } from '@microsoft/arbutus.divider';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import { mergeClasses } from '@griffel/react';

import { ComponentRenderer } from '../../components/component-renderer';
import { Image } from '../../components/image';
import type { BasicLayoutProps } from './basic.types';

export const BasicLayout: FC<BasicLayoutProps> = ({ title, leading, content, heroImage }) => {
  const space = useSpaceStyles();

  const image = {
    alternativeText: heroImage?.alt ?? '',
    localFile: heroImage?.src,
    url: heroImage?.src?.publicURL ?? ''
  }

  return (
    <>
      {heroImage && <Image isHero image={image} />}
      <Text block variant="jumbo" as="h1" className={space.mt12}>
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

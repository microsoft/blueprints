import * as React from 'react';
import type { FC } from 'react';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';

import type { HomeLayoutProps } from './home.types';
import { useHomeStyles } from './home.styles';
import { mergeClasses } from '@griffel/react';

export const HomeLayout: FC<HomeLayoutProps> = ({ title, leading }) => {
  const classes = useHomeStyles();
  const space = useSpaceStyles();

  return (
    <div className={classes.root}>
      <div className={mergeClasses(classes.welcomeCard, space.py12, space.px9)}>
        <Text as="h1" block variant="jumbo">
          {title}
        </Text>
        <Text as="p" block variant="subtitle">
          {leading}
        </Text>
      </div>
    </div>
  );
};

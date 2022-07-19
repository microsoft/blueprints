import { Text } from '@arbutus/component.text';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { tokens } from '@fluentui/react-theme';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';
import { Children } from 'react';

import { AsideNavigationContext } from '../context';
import { useAsideNavigationStyles } from './aside-navigation.styles';
import type { AsideNavigationProps } from './aside-navigation.types';

export const AsideNavigation: FC<AsideNavigationProps> = ({
  as: Root = 'aside',
  className,
  children,
  currentIndex,
  title,
}) => {
  // Styles
  const classes = useAsideNavigationStyles();
  const space = useSpaceStyles();
  const count = Children.count(children);
  const highlightStyle = {
    height: `calc(${100 / count}% - ${tokens.spacingVerticalM})`,
    top: `calc((100% + ${tokens.spacingVerticalM}) / ${count} *  ${currentIndex})`,
  };

  return (
    <AsideNavigationContext.Provider value={{ currentIndex }}>
      <Root className={className}>
        {title && (
          <Text
            as="h3"
            variant="caption"
            className={mergeClasses(space.pl4, space.pb6, space.pt1, classes.title)}
          >
            {title}
          </Text>
        )}
        <div className={classes.list}>
          <div className={classes.highlight} style={highlightStyle}>
            &nbsp;
          </div>
          {children}
        </div>
      </Root>
    </AsideNavigationContext.Provider>
  );
};

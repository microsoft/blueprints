import { tokens } from '@fluentui/react-theme';
import { makeStyles, mergeClasses } from '@griffel/react';
import { Text } from '@microsoft/arbutus.text';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FC, FunctionComponent, ReactNode } from 'react';
import React, { useState } from 'react';

import type { MainNavigationProps, NavigationItems } from '../src/index';
import {
  isButton,
  isSubMenu,
  MainNavigation,
  MainNavigationRenderer,
} from '../src/index';

export default {
  title: 'Layout/MainNavigation',
  component: MainNavigation,
} as ComponentMeta<typeof MainNavigation>;

const Link: FC<{ onClick: () => void; children?: ReactNode | undefined }> = ({
  children,
  onClick,
}) => (
  <button onClick={onClick} style={{ padding: 0, cursor: 'pointer' }}>
    {children}
  </button>
);

const useNavigationStyles = makeStyles({
  root: {
    paddingLeft: tokens.spacingHorizontalXXXL,
    paddingRight: tokens.spacingHorizontalXXXL,
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '17.5rem auto',
    minHeight: '40rem',
    columnGap: tokens.spacingHorizontalXXXL,
  },
});

const menuItems: NavigationItems = {
  aboutUs: {
    id: 'about-us',
    title: 'About us',
  },
  overview: {
    id: 'overview',
    title: 'Overview',
  },
  gettingStarted: {
    id: 'getting-started',
    title: 'Getting started',
    hasDivider: true,
  },
  designFundamentals: {
    title: 'Design fundamentals',
    hasDivider: true,
    items: {
      typography: {
        id: 'design-fundamentals/typography',
        title: 'Typography',
      },
      colors: {
        id: 'design-fundamentals/colors',
        title: 'Colors',
      },
      spaceGrid: {
        id: 'design-fundamentals/space-grid',
        title: 'Space grid',
      },
    },
  },
  components: {
    title: 'Components',
    hasDivider: true,
    items: {
      button: {
        title: 'Button',
        items: {
          primary: {
            id: 'components/button/primary',
            title: 'Primary',
          },
          secondary: {
            id: 'components/button/secondary',
            title: 'Secondary',
          },
          umph: {
            id: 'components/button/umph',
            title: 'Umph',
          },
        },
      },
      tile: {
        id: 'components/tile',
        title: 'Tile',
      },
      link: {
        id: 'components/link',
        title: 'Link',
      },
    },
  },
  credits: {
    id: 'credits',
    title: 'Credits',
  },
};

const findTitle = (items: NavigationItems, id: string): string | undefined => {
  for (const key in items) {
    const item = items[key];

    if (isButton(item)) {
      if (item.id === id) {
        console.log(item.id, id);

        return item.title;
      }
    }

    if (isSubMenu(item)) {
      const result = findTitle(item.items, id);

      if (result) {
        return result;
      }
    }
  }
};

const Template: ComponentStory<typeof MainNavigation> = () => {
  const classes = useNavigationStyles();
  const space = useSpaceStyles();
  const [active, setActive] = useState(
    isButton(menuItems.overview) ? menuItems.overview.id : '',
  );
  const makeOnClick = (id: string) => setActive(id);

  return (
    <div className={classes.root}>
      <MainNavigation>
        <MainNavigationRenderer
          items={menuItems}
          activeItemId={active}
          linkAs={Link}
          onNavigationItemClick={makeOnClick}
        />
      </MainNavigation>

      <Tile variant="solid-color" className={mergeClasses(space.py10, space.px12)}>
        <Text variant="title" color="quaternary">
          {findTitle(menuItems, active)}
        </Text>
      </Tile>
    </div>
  );
};

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<MainNavigationProps>
>;

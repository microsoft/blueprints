import { Divider } from '@arbutus/component.divider';
import { Tile } from '@arbutus/component.tile';
import { makeStyles } from '@griffel/react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FC, FunctionComponent } from 'react';
import React, { useState } from 'react';

import type { MainNavigationProps } from '../src/index';
import { MainNavigation, MainNavigationLink, MainNavigationSub } from '../src/index';

export default {
  title: 'Layout/MainNavigation',
  component: MainNavigation,
} as ComponentMeta<typeof MainNavigation>;

const Link: FC<{ onClick: () => void }> = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);

const useNavigationStyles = makeStyles({
  root: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '17.5rem auto',
    minHeight: '40rem',
    columnGap: 'var(--space-7)',
  },
});

const Template: ComponentStory<typeof MainNavigation> = () => {
  const classes = useNavigationStyles();
  const [active, setActive] = useState(1);
  const makeOnClick = (i: number) => () => setActive(i);

  return (
    <div className={classes.root}>
      <MainNavigation>
        <MainNavigationSub title="About us">
          <MainNavigationLink
            as={Link}
            isActive={active === 1}
            elementProps={{ onClick: makeOnClick(1) }}
          >
            Overview
          </MainNavigationLink>
          <MainNavigationLink
            as={Link}
            isActive={active === 2}
            elementProps={{ onClick: makeOnClick(2) }}
          >
            Getting started
          </MainNavigationLink>
        </MainNavigationSub>
        <Divider />
        <MainNavigationSub title="Design Fundamentals">
          <MainNavigationLink
            as={Link}
            isActive={active === 3}
            elementProps={{ onClick: makeOnClick(3) }}
          >
            Typography
          </MainNavigationLink>
          <MainNavigationLink
            as={Link}
            isActive={active === 4}
            elementProps={{ onClick: makeOnClick(4) }}
          >
            Colors
          </MainNavigationLink>
          <MainNavigationLink
            as={Link}
            isActive={active === 5}
            elementProps={{ onClick: makeOnClick(5) }}
          >
            Space grid
          </MainNavigationLink>
        </MainNavigationSub>
        <Divider />
        <MainNavigationSub title="Components">
          <MainNavigationSub title="Button">
            <MainNavigationLink
              as={Link}
              isActive={active === 6}
              elementProps={{ onClick: makeOnClick(6) }}
            >
              Primary
            </MainNavigationLink>
            <MainNavigationLink
              as={Link}
              isActive={active === 7}
              elementProps={{ onClick: makeOnClick(7) }}
            >
              Secondary
            </MainNavigationLink>
            <MainNavigationLink
              as={Link}
              isActive={active === 8}
              elementProps={{ onClick: makeOnClick(8) }}
            >
              Umph
            </MainNavigationLink>
          </MainNavigationSub>
          <MainNavigationLink
            as={Link}
            isActive={active === 9}
            elementProps={{ onClick: makeOnClick(9) }}
          >
            Text
          </MainNavigationLink>
          <MainNavigationLink
            as={Link}
            isActive={active === 10}
            elementProps={{ onClick: makeOnClick(10) }}
          >
            Link
          </MainNavigationLink>
        </MainNavigationSub>
        <Divider />
        <MainNavigationLink
          as={Link}
          isActive={active === 11}
          elementProps={{ onClick: makeOnClick(11) }}
        >
          Credits
        </MainNavigationLink>
      </MainNavigation>

      <Tile variant="solid-color">&nbsp;</Tile>
    </div>
  );
};

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<MainNavigationProps>
>;

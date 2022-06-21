import { Divider } from '@arbutus/component.divider';
import { Tile } from '@arbutus/component.tile';
import { makeStyles } from '@griffel/react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FC, FunctionComponent } from 'react';
import React from 'react';

import type { MainNavigationProps } from '../src/index';
import { MainNavigation, MainNavigationLink, MainNavigationSub } from '../src/index';

export default {
  title: 'Layout/MainNavigation',
  component: MainNavigation,
} as ComponentMeta<typeof MainNavigation>;

const Link: FC<{ href: string }> = ({ children, href }) => <a href={href}>{children}</a>;

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

  return (
    <div className={classes.root}>
      <MainNavigation>
        <MainNavigationSub title="About us">
          <MainNavigationLink as={Link} elementProps={{ href: '#' }}>
            Overview
          </MainNavigationLink>
          <MainNavigationLink as={Link} elementProps={{ href: '#' }}>
            Getting started
          </MainNavigationLink>
        </MainNavigationSub>
        <Divider />
        <MainNavigationSub title="Design Fundamentals">
          <MainNavigationLink as={Link} elementProps={{ href: '#' }}>
            Typography
          </MainNavigationLink>
          <MainNavigationLink as={Link} elementProps={{ href: '#' }}>
            Colors
          </MainNavigationLink>
          <MainNavigationLink as={Link} elementProps={{ href: '#' }}>
            Space grid
          </MainNavigationLink>
        </MainNavigationSub>
        <Divider />
        <MainNavigationSub title="Components">
          <MainNavigationLink as={Link} elementProps={{ href: '#' }}>
            Button
          </MainNavigationLink>
          <MainNavigationLink as={Link} elementProps={{ href: '#' }}>
            Text
          </MainNavigationLink>
          <MainNavigationLink as={Link} elementProps={{ href: '#' }}>
            Link
          </MainNavigationLink>
        </MainNavigationSub>
        <Divider />
        <MainNavigationLink as={Link} elementProps={{ href: '#' }}>
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

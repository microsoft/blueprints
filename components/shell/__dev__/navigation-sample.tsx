import { Divider } from '@arbutus/component.divider';
import { IconButton } from '@arbutus/component.icon-button';
import {
  MainNavigation,
  MainNavigationLink,
  MainNavigationSub,
} from '@arbutus/component.main-navigation';
import { Text } from '@arbutus/component.text';
import { useTrayContext } from '@arbutus/component.tray';
import { layout } from '@arbutus/style.theming';
import { makeStyles } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';
import useBreakpoint from 'use-breakpoint';

const Link: FC<{ href: string }> = ({ children, href }) => <a href={href}>{children}</a>;

export const NavigationMenu = () => (
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
      <MainNavigationSub title="Button">
        <MainNavigationLink as={Link} elementProps={{ href: '#' }}>
          Primary
        </MainNavigationLink>
        <MainNavigationLink as={Link} elementProps={{ href: '#' }}>
          Secondary
        </MainNavigationLink>
        <MainNavigationLink as={Link} elementProps={{ href: '#' }}>
          Umph
        </MainNavigationLink>
      </MainNavigationSub>
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
);

const useNavStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  header: {
    display: 'grid',
    gridTemplateColumns: 'var(--space-8) auto',
    columnGap: 'var(--space-3)',
    marginBottom: 'var(--space-5)',
  },
  stickyHeader: {
    position: 'sticky',
    top: '1rem',
    height: '25rem',
  },
});

export const NavigationSample = () => {
  const classes = useNavStyles();
  const { breakpoint } = useBreakpoint(layout);
  const isTabletLayout = breakpoint === 'tablet' || breakpoint === 'mobile';
  const { setIsOpen } = useTrayContext();
  const onCloseTray = () => setIsOpen(false);

  return (
    <div className={!isTabletLayout ? classes.stickyHeader : ''}>
      {isTabletLayout && (
        <header className={classes.header}>
          <IconButton
            iconName="slide-in"
            label="Close navigation"
            onClick={onCloseTray}
          />
          <Text as="h1" variant="subheading">
            Arbutus
          </Text>
        </header>
      )}
      <NavigationMenu />
    </div>
  );
};

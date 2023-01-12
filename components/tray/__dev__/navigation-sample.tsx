import { Divider } from '@microsoft/arbutus.divider';
import {
  MainNavigation,
  MainNavigationLink,
  MainNavigationSub,
} from '@microsoft/arbutus.main-navigation';
import type { FC, ReactNode } from 'react';
import * as React from 'react';

const Link: FC<{ href: string; children?: ReactNode | undefined }> = ({
  children,
  href,
}) => <a href={href}>{children}</a>;

export const NavigationSample = () => (
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

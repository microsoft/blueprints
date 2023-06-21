import { Shell as ArbutusShell } from '@microsoft/arbutus.shell';
import type { PageProps } from 'gatsby';
import { withPrefix } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';

import { makeNavigate } from '../../utilities';
import { Footer } from '../footer';
import { Header } from '../header';
import { Navigation } from '../navigation';
import { useLogoStyles } from './shell.styles';

const navigateHome = makeNavigate({ isExternal: false, to: '/' });

const Logo: FC = () => (
  <svg
    width="210"
    height="210"
    viewBox="0 0 210 210"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="mads-logo-title"
    className={useLogoStyles().svg}
  >
    <title id="mads-logo-title">Fluent</title>

    <path
      d="M101.002 17.3064L57.0022 42.691C54.5258 44.1198 53 46.7615 53 49.6205V160.379C53 163.239 54.5258 165.88 57.0022 167.309L99.0011 191.539C101.668 193.078 105 191.153 105 188.074V135L150.994 108.465C153.663 106.925 153.663 103.075 150.994 101.535L105 75L150.994 48.4647C153.663 46.9254 153.663 43.0746 150.994 41.5353L108.998 17.3064C106.524 15.8791 103.476 15.8791 101.002 17.3064Z"
      fill="var(--colorNeutralForeground1)"
    />
  </svg>
);

export const Shell: FC<PageProps> = ({ children, location }) => {
  const isHome = location.pathname === withPrefix('/');
  const isComponentPreview = location.pathname.includes('/preview/');
  const isComponentSandbox = location.pathname.includes('/sandbox/');

  return (
    <ArbutusShell
      footerArea={<Footer />}
      headerArea={<Header />}
      navigationArea={<Navigation />}
      logoAs={Logo}
      logoText="Documentation"
      closeTrayLabel="Close navigation"
      openTrayLabel="Open navigation"
      isHeroMode={isHome}
      isBlankMode={isComponentPreview || isComponentSandbox}
      onLogoClick={navigateHome}
    >
      {children}
    </ArbutusShell>
  );
};

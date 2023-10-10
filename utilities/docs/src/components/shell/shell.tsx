import { Shell as ArbutusShell } from '@microsoft/arbutus.shell';
import { useCSSVars } from '@microsoft/arbutus.use-css-vars';
import { useTheme } from '@microsoft/arbutus.theming';
import type { PageProps } from 'gatsby';
import { withPrefix } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';
import { BLUEPRINTS_DOCS_PREFIX, BLUEPRINTS_DOCS_THEME } from '../theme';

import { makeNavigate } from '../../utilities';
import { Footer } from '../footer';
import { Header } from '../header';
import { Navigation } from '../navigation';
import { useLogoStyles } from './shell.styles';
import { FluentLogo } from '../fluent-logo';
import { Text } from '@fluentui/react-text';

const navigateHome = makeNavigate({ isExternal: false, to: '/' });

const Logo: FC = () => {
  const classes = useLogoStyles();

  return (
  <>
    <FluentLogo className={classes.svg} />
    <Text as="h1" size={700} weight="bold" className={classes.text}>
      Blueprints
    </Text>
  </>
)};

export const Shell: FC<PageProps> = ({ children, location }) => {
  const isHome = location.pathname === withPrefix('/');
  const isComponentPreview = location.pathname.includes('/preview/');
  const isComponentSandbox = location.pathname.includes('/sandbox/');

  const { themeKey } = useTheme();
  useCSSVars({ theme: BLUEPRINTS_DOCS_THEME, currentThemeKey: themeKey, prefix: BLUEPRINTS_DOCS_PREFIX });

  console.log(themeKey)

  return (
    <ArbutusShell
      footerArea={<Footer />}
      headerArea={<Header />}
      navigationArea={<Navigation />}
      logoAs={Logo}
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

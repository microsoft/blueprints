import { mergeClasses } from '@griffel/react';
import { Footer } from '@microsoft/arbutus.footer';
import { Header } from '@microsoft/arbutus.header';
import { layout as BREAKPOINTS } from '@microsoft/arbutus.theming';
import { Tray, TrayConsumer, TrayProvider, useTray } from '@microsoft/arbutus.tray';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import { type FC, useEffect, useState } from 'react';
import * as React from 'react';
import { useBreakpoint } from 'use-breakpoint';

import { Crown } from '../crown';
import { HEADER_HEIGHT, useShellStyles } from './shell.styles';
import type { ShellProps } from './shell.types';

export const Shell: FC<ShellProps> = ({
  children,
  className,
  closeTrayLabel,
  footerArea,
  headerArea,
  isBlankMode,
  isHeroMode,
  logoMarkAlt,
  logoAs,
  logoProps,
  logoMarkSrc,
  logoText,
  navigationArea,
  onLogoClick,
  openTrayLabel,
}) => {
  // Styles
  const classes = useShellStyles();
  const space = useSpaceStyles();
  const trayValue = useTray();
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  const isTabletLayout = breakpoint === 'tablet' || breakpoint === 'mobile';
  const [heroScrollTopPosition, setHeroScrollTopPosition] = useState(true);

  useEffect(() => {
    if (isHeroMode && !!window) {
      const handleScroll = () => {
        setHeroScrollTopPosition(
          window.scrollY >= parseInt(HEADER_HEIGHT) ? false : true,
        );
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }

    return;
  }, [isHeroMode]);

  if (isBlankMode) {
    return <>{children}</>;
  }

  if (isHeroMode) {
    return (
      <div className={classes.heroWrapper}>
        <Header
          className={mergeClasses(
            classes.heroHeader,
            !heroScrollTopPosition && classes.heroHeaderScroll,
          )}
        >
          <div className={classes.heroHeaderContent}>{headerArea}</div>
        </Header>
        <main className={classes.hero}>{children}</main>
        <Footer className={classes.footer}>{footerArea}</Footer>
      </div>
    );
  }

  return (
    <TrayProvider value={trayValue}>
      <div className={mergeClasses(classes.root, className)}>
        {isTabletLayout && (
          <div className={mergeClasses(classes.header, classes.grid, space.px7)}>
            <Crown
              className={space.my5}
              closeTrayLabel={closeTrayLabel}
              isTabletLayout={isTabletLayout}
              logoMarkAlt={logoMarkAlt}
              logoMarkSrc={logoMarkSrc}
              logoAs={logoAs}
              logoProps={logoProps}
              logoText={logoText}
              onClick={onLogoClick}
              openTrayLabel={openTrayLabel}
            />
            <Header>{headerArea}</Header>
          </div>
        )}

        <div
          className={
            !isTabletLayout
              ? mergeClasses(classes.grid, classes.minHeight)
              : classes.minHeightTablet
          }
        >
          {isTabletLayout ? (
            <TrayConsumer>
              {({ isOpen }) => (
                <Tray
                  isOpen={isOpen}
                  className={mergeClasses(classes.aside, space.px7, space.py5)}
                >
                  <Crown
                    closeTrayLabel={closeTrayLabel}
                    isTabletLayout={isTabletLayout}
                    logoMarkAlt={logoMarkAlt}
                    logoMarkSrc={logoMarkSrc}
                    logoAs={logoAs}
                    logoProps={logoProps}
                    logoText={logoText}
                    onClick={onLogoClick}
                    openTrayLabel={openTrayLabel}
                  />
                  {navigationArea}
                </Tray>
              )}
            </TrayConsumer>
          ) : (
            <aside className={mergeClasses(classes.aside, classes.stickyAside)}>
              <Crown
                className={space.my5}
                isTabletLayout={isTabletLayout}
                logoMarkAlt={logoMarkAlt}
                logoMarkSrc={logoMarkSrc}
                logoAs={logoAs}
                logoProps={logoProps}
                logoText={logoText}
                onClick={onLogoClick}
              />
              {navigationArea}
            </aside>
          )}
          <div>
            {!isTabletLayout && <Header className={classes.header}>{headerArea}</Header>}
            <main className={mergeClasses(classes.main, classes.boundaries)}>
              {children}
            </main>
          </div>
        </div>

        <Footer className={classes.footer}>{footerArea}</Footer>
      </div>
    </TrayProvider>
  );
};

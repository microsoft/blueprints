import { mergeClasses } from '@griffel/react';
import { Footer } from '@microsoft/arbutus.footer';
import { Header } from '@microsoft/arbutus.header';
import { layout as BREAKPOINTS } from '@microsoft/arbutus.theming';
import { Tray, TrayConsumer, TrayProvider, useTray } from '@microsoft/arbutus.tray';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';
import { useBreakpoint } from 'use-breakpoint';

import { Crown } from '../crown';
import { useShellStyles } from './shell.styles';
import type { ShellProps } from './shell.types';

export const Shell: FC<ShellProps> = ({
  children,
  className,
  closeTrayLabel,
  footerArea,
  headerArea,
  isHeroMode,
  logoMarkAlt,
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

  if (isHeroMode) {
    return (
      <div className={classes.heroWrapper}>
        <div className={classes.heroHeader}>
          <Crown
            className={space.my5}
            isTabletLayout={false}
            logoMarkAlt={logoMarkAlt}
            logoMarkSrc={logoMarkSrc}
            logoText={logoText}
            onClick={onLogoClick}
          />
          <Header>{headerArea}</Header>
        </div>
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
              logoText={logoText}
              onClick={onLogoClick}
              openTrayLabel={openTrayLabel}
            />
            <Header>{headerArea}</Header>
          </div>
        )}

        <div className={!isTabletLayout ? classes.grid : undefined}>
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

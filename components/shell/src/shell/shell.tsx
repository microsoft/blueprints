import { mergeClasses } from '@griffel/react';
import { Footer } from '@microsoft/arbutus.footer';
import { Header } from '@microsoft/arbutus.header';
import { layout as BREAKPOINTS } from '@microsoft/arbutus.theming';
import { Tray, TrayConsumer, TrayProvider, useTray } from '@microsoft/arbutus.tray';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';
import useBreakpoint from 'use-breakpoint';

import { Crown } from '../crown';
import { useShellStyles } from './shell.styles';
import type { ShellProps } from './shell.types';

export const Shell: FC<ShellProps> = ({
  className,
  children,
  footerArea,
  headerArea,
  navigationArea,
  logoMarkAlt,
  logoMarkSrc,
  logoText,
  closeTrayLabel,
  openTrayLabel,
}) => {
  // Styles
  const classes = useShellStyles();
  const space = useSpaceStyles();
  const trayValue = useTray();
  const { breakpoint } = useBreakpoint(BREAKPOINTS);

  const isTabletLayout = breakpoint === 'tablet' || breakpoint === 'mobile';

  return (
    <TrayProvider value={trayValue}>
      <div className={mergeClasses(classes.root, className)}>
        {isTabletLayout && (
          <div className={mergeClasses(classes.header, classes.grid, space.px7)}>
            <Crown
              isTabletLayout={isTabletLayout}
              logoMarkAlt={logoMarkAlt}
              logoMarkSrc={logoMarkSrc}
              logoText={logoText}
              closeTrayLabel={closeTrayLabel}
              openTrayLabel={openTrayLabel}
              className={space.my5}
            />
            <Header>{headerArea}</Header>
          </div>
        )}

        <div className={!isTabletLayout ? classes.grid : undefined}>
          {isTabletLayout ? (
            <TrayConsumer>
              {({ isOpen }) => (
                <Tray isOpen={isOpen}>
                  <div className={mergeClasses(space.px7, space.py5)}>
                    <Crown
                      isTabletLayout={isTabletLayout}
                      logoMarkAlt={logoMarkAlt}
                      logoMarkSrc={logoMarkSrc}
                      logoText={logoText}
                      closeTrayLabel={closeTrayLabel}
                      openTrayLabel={openTrayLabel}
                    />
                    {navigationArea}
                  </div>
                </Tray>
              )}
            </TrayConsumer>
          ) : (
            <aside className={classes.aside}>
              <Crown
                isTabletLayout={isTabletLayout}
                logoMarkAlt={logoMarkAlt}
                logoMarkSrc={logoMarkSrc}
                logoText={logoText}
                className={space.my5}
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

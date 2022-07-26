import { Footer } from '@arbutus/component.footer';
import { Header } from '@arbutus/component.header';
import { Tray, TrayConsumer, TrayProvider, useTray } from '@arbutus/component.tray';
import { layout as BREAKPOINTS } from '@arbutus/style.theming';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';
import useBreakpoint from 'use-breakpoint';

import { useShellStyles } from './shell.styles';
import type { ShellProps } from './shell.types';

export const Shell: FC<ShellProps> = ({
  className,
  children,
  footerArea,
  headerArea,
  navigationArea,
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
        <Header className={classes.header}>{headerArea}</Header>

        <main
          className={mergeClasses(classes.main, !isTabletLayout && classes.mainDesktop)}
        >
          {isTabletLayout ? (
            <TrayConsumer>
              {({ isOpen }) => (
                <Tray isOpen={isOpen}>
                  <div className={mergeClasses(space.px8, space.py5)}>
                    {navigationArea}
                  </div>
                </Tray>
              )}
            </TrayConsumer>
          ) : (
            <>{navigationArea}</>
          )}
          {children}
        </main>

        <Footer className={classes.footer}>{footerArea}</Footer>
      </div>
    </TrayProvider>
  );
};

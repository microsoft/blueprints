import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { layout as BREAKPOINTS } from '@microsoft/arbutus.theming';
import { TRAY_WIDTH } from '@microsoft/arbutus.tray';

const toRawValue = (value: `${string}px`) => Number(value.replace('px', ''));

export const FOOTER_HEIGHT = '160px';
export const HEADER_HEIGHT = '80px';
export const CONTENT_WIDTH = '980px';
export const CONTAINER_WIDTH = `${
  toRawValue(CONTENT_WIDTH) + toRawValue(TRAY_WIDTH) + 24
}px`;

export const useShellStyles = makeStyles({
  root: {
    width: '100%',
  },
  main: {
    width: '100%',
    minHeight: `calc(100vh - (${HEADER_HEIGHT} + ${FOOTER_HEIGHT}))`,
    maxWidth: CONTENT_WIDTH,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  boundaries: {
    [`@media screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      paddingLeft: tokens.spacingHorizontalL,
    },
    [`@media screen and (max-width: ${CONTAINER_WIDTH})`]: {
      paddingRight: tokens.spacingHorizontalL,
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: `${TRAY_WIDTH} auto`,
    columnGap: tokens.spacingHorizontalXXL,
  },
  footer: {
    minHeight: FOOTER_HEIGHT,
  },
  header: {
    minHeight: HEADER_HEIGHT,
    paddingRight: tokens.spacingHorizontalL,
  },
  aside: {
    paddingLeft: tokens.spacingHorizontalL,
    position: 'relative',
  },
  stickyNavigation: {
    position: 'sticky',
    top: '0',
    height: '25rem',
  },
});

import { TRAY_WIDTH } from '@arbutus/component.tray';
import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const FOOTER_HEIGHT = '160px';
export const HEADER_HEIGHT = '80px';

export const useShellStyles = makeStyles({
  root: {
    width: '100%',
  },
  main: {
    minHeight: `calc(100vh - (${HEADER_HEIGHT} + ${FOOTER_HEIGHT}))`,
  },
  mainDesktop: {
    display: 'grid',
    paddingLeft: tokens.spacingHorizontalXXL,
    paddingRight: tokens.spacingHorizontalXXL,
    gridTemplateColumns: `${TRAY_WIDTH} auto`,
    columnGap: tokens.spacingHorizontalXXL,
  },
  headerTablet: {
    display: 'grid',
    gridTemplateColumns: `${TRAY_WIDTH} auto`,
  },
  footer: {
    minHeight: FOOTER_HEIGHT,
  },
  header: {
    minHeight: HEADER_HEIGHT,
  },
});

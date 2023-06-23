import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';
import { CONTAINER_WIDTH, HEADER_HEIGHT } from '@microsoft/arbutus.shell';
import { layout as BREAKPOINTS } from '@microsoft/arbutus.theming';

export const useHomeStyles = makeStyles({
  root: {
    position: 'relative',
    maxWidth: CONTAINER_WIDTH,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: HEADER_HEIGHT,

    [`@media (max-width: ${CONTAINER_WIDTH})`]: {
      paddingLeft: tokens.spacingHorizontalXL,
      paddingRight: tokens.spacingHorizontalXL,
    },

    [`@media (max-width: ${BREAKPOINTS.tablet})`]: {
      paddingLeft: tokens.spacingVerticalL,
      paddingRight: tokens.spacingVerticalL,
    },
  },

  welcomeCard: {
    backgroundColor: tokens.colorBrandBackground2,
    borderTopLeftRadius: tokens.borderRadiusXLarge,
    borderTopRightRadius: tokens.borderRadiusXLarge,
    borderBottomLeftRadius: tokens.borderRadiusXLarge,
    borderBottomRightRadius: tokens.borderRadiusXLarge,
  },
});

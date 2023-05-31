import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useTableListStyles = makeStyles({
  root: {
    borderSpacing: 0,
    width: '100%',
    display: 'block',

    '& > tbody, & > thead': {
      display: 'block',
      width: '100%',
    },

    '& > thead > tr': {
      borderBottomStyle: 'solid',
      borderBottomWidth: tokens.strokeWidthThin,
      borderBottomColor: tokens.colorNeutralStroke1,
    },
  },

  collapsed: {
    '& > thead': {
      // [VisuallyHidden](https://www.npmjs.com/package/@reach/visually-hidden)
      borderBottomStyle: 'none',
      borderBottomWidth: 0,
      borderLeftStyle: 'none',
      borderLeftWidth: 0,
      borderRightStyle: 'none',
      borderRightWidth: 0,
      borderTopStyle: 'none',
      borderTopWidth: 0,
      clip: 'rect(0 0 0 0)',
      height: '1px',
      marginBottom: '-1px',
      marginLeft: '-1px',
      marginRight: '-1px',
      marginTop: '-1px',
      overflowX: 'hidden',
      overflowY: 'hidden',
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      position: 'absolute',
      width: '1px',

      // [Beware smushed off-screen accessible text](https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe)
      whiteSpace: 'nowrap',
      wordWrap: 'normal',
    },
  },

  boundary: {
    ...shorthands.borderColor(tokens.colorNeutralStroke1),
    ...shorthands.borderWidth(tokens.strokeWidthThin),
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderRadius(tokens.borderRadiusXLarge),
  },

  caption: {
    width: '100%',
    textAlign: 'left',
    '&:last-of-type': {
      marginBottom: tokens.spacingHorizontalL,
    },
  },
});

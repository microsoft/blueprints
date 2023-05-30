import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useTableListStyles = makeStyles({
  root: {
    borderSpacing: 0,
    width: '100%',
    display: 'block',

    '& tbody, & thead, & th, & td, & caption': {
      display: 'block',
      width: '100%',
    },

    '& thead > tr': {
      borderBottomStyle: 'solid',
      borderBottomWidth: tokens.strokeWidthThin,
      borderBottomColor: tokens.colorNeutralStroke1,
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

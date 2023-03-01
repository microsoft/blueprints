import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useTableListStyles = makeStyles({
  root: {
    borderSpacing: 0,
    width: '100%',
    ...shorthands.borderColor(tokens.colorNeutralStroke1),
    ...shorthands.borderWidth(tokens.strokeWidthThin),
    ...shorthands.borderStyle('solid'),
    ...shorthands.borderRadius(tokens.borderRadiusXLarge),
    tableLayout: 'fixed',

    '& thead > tr > th': {
      borderBottomColor: tokens.colorNeutralStroke1,
      borderBottomWidth: tokens.strokeWidthThin,
      borderBottomStyle: 'solid',
      ...shorthands.borderRadius(0),
    },
    '& thead tr:last-child td:first-child, &:last-child th:first-child': {
      borderBottomLeftRadius: 0,
    },
    '& thead tr:last-child td:last-child, &:last-child th:last-child': {
      borderBottomRightRadius: 0,
    },
  },
  caption: {
    color: tokens.colorNeutralForeground1,
    fontFamily: tokens.fontFamilyBase,
    fontSize: tokens.fontSizeBase500,
    lineHeight: tokens.lineHeightBase500,
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: tokens.spacingVerticalL,
    textAlign: 'left',
    '@media screen and (max-width: 600px)': {
      fontSize: tokens.fontSizeBase400,
      lineHeight: tokens.lineHeightBase400,
    },
  },
});

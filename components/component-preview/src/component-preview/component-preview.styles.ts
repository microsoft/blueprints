import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';

export const useComponentPreviewStyles = makeStyles({
  root: {
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopColor: tokens.colorNeutralStroke1,
    borderBottomColor: tokens.colorNeutralStroke1,
    borderLeftColor: tokens.colorNeutralStroke1,
    borderRightColor: tokens.colorNeutralStroke1,
    borderTopWidth: tokens.strokeWidthThin,
    borderBottomWidth: tokens.strokeWidthThin,
    borderLeftWidth: tokens.strokeWidthThin,
    borderRightWidth: tokens.strokeWidthThin,
    ...shorthands.borderRadius('var(--arbutus--shape-border-radius)'),
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  header: {
    paddingTop: tokens.spacingVerticalM,
    paddingBottom: tokens.spacingVerticalM,
    paddingLeft: tokens.spacingHorizontalM,
    paddingRight: tokens.spacingHorizontalM,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    columnGap: tokens.spacingHorizontalM,
    borderBottomStyle: 'solid',
    borderBottomWidth: tokens.strokeWidthThin,
    borderBottomColor: tokens.colorNeutralStroke1,
  },
  menuItem: {
    minWidth: '124px',
    '& select': {
      height: '26px',
    },
  },
  menuItemIcon: {
    color: tokens.colorNeutralForeground2,
  },
  menuItemButton: {
    display: 'flex',
    columnGap: tokens.spacingHorizontalS,
  },
});

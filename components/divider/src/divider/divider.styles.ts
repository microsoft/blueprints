import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useDividerStyles = makeStyles({
  root: {
    width: '100%',
    height: '0.0625rem',
    position: 'relative',
    borderTopStyle: 'none',
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    borderLeftStyle: 'none',
    backgroundColor: tokens.colorNeutralStroke1,
    paddingBottom: 0,
    paddingTop: 0,
  },
});

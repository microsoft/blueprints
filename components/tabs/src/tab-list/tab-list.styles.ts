import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useTabListStyles = makeStyles({
  root: {
    display: 'flex',
    backgroundColor: tokens.colorNeutralBackground1,
    borderBottomWidth: '0.0625rem',
    borderBottomStyle: 'solid',
    borderBottomColor: tokens.colorNeutralStroke1,
    marginBottom: tokens.spacingVerticalXL,
  },
});

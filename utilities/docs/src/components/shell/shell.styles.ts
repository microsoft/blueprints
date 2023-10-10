import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useLogoStyles = makeStyles({
  svg: {
    height: '34px',
    width: 'auto',
  },
  text: {
    marginTop: 0,
    marginBottom: 0,
    color: tokens.colorNeutralForeground1,
  },
});

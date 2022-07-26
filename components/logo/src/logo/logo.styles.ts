import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const sizeClasses = {
  small: {
    height: tokens.spacingVerticalXL,
  },
  medium: {
    height: tokens.spacingVerticalXXL,
  },
  large: {
    height: tokens.spacingVerticalXXXL,
  },
  fill: {
    height: '100%',
  },
};

export const useLogoStyles = makeStyles({
  root: {
    width: 'auto',
  },
  inline: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  ...sizeClasses,
});

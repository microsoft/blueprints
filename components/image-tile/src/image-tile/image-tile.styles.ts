import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useImageTileStyles = makeStyles({
  image: {
    width: '100%',
    height: 'auto',
    borderTopLeftRadius: tokens.borderRadiusLarge,
    borderTopRightRadius: tokens.borderRadiusLarge,
  },
});

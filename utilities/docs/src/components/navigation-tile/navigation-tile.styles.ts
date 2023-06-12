import { makeStyles } from '@griffel/react';
import { tokens } from '@fluentui/react-theme';

export const useNavigationTileStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: '200px 1fr',
    columnGap: tokens.spacingHorizontalXXL,
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  placeholder: {
    backgroundColor: tokens.colorNeutralBackground4,
  },
  image: {
    height: '100%',
    width: 'auto',
    objectFit: 'cover',
  },
  links: {
    display: 'grid',
    rowGap: tokens.spacingVerticalS,
    paddingLeft: 0,
    marginTop: tokens.spacingVerticalM,
    marginBottom: 0,
  },
  link: {
    listStyleType: 'none',
  }
});

import { makeStyles } from '@griffel/react';
import { arbutusTokens } from '@microsoft/arbutus.theming';

export const useImageStyles = makeStyles({
  root: {
    width: '100%',
  },
  rounded: {
    borderTopLeftRadius: arbutusTokens.shape.borderRadius,
    borderTopRightRadius: arbutusTokens.shape.borderRadius,
    borderBottomLeftRadius: arbutusTokens.shape.borderRadius,
    borderBottomRightRadius: arbutusTokens.shape.borderRadius,
  },
  hero: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    borderTopLeftRadius: arbutusTokens.shape.borderRadius,
    borderTopRightRadius: arbutusTokens.shape.borderRadius,
    borderBottomLeftRadius: arbutusTokens.shape.borderRadius,
    borderBottomRightRadius: arbutusTokens.shape.borderRadius,
  },
});

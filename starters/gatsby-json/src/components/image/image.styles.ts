import { makeStyles } from '@griffel/react';

export const useImageStyles = makeStyles({
  root: {
    width: '100%',
  },
  rounded: {
    borderTopLeftRadius: 'var(--arbutus--shape-border-radius)',
    borderTopRightRadius: 'var(--arbutus--shape-border-radius)',
    borderBottomLeftRadius: 'var(--arbutus--shape-border-radius)',
    borderBottomRightRadius: 'var(--arbutus--shape-border-radius)',
  },
  hero: {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    borderTopLeftRadius: 'var(--arbutus--shape-border-radius)',
    borderTopRightRadius: 'var(--arbutus--shape-border-radius)',
    borderBottomLeftRadius: 'var(--arbutus--shape-border-radius)',
    borderBottomRightRadius: 'var(--arbutus--shape-border-radius)',
  },
});

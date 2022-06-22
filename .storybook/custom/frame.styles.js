import { makeStyles, makeStaticStyles } from '@griffel/react';

export const useStoryStyles = makeStaticStyles({
  'html, body, #root': {
    height: '100%',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  '.sb-show-main.sb-main-padded': {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
});

export const useFrameClasses = makeStyles({
  root: {
    height: '100%',
    backgroundColor: 'var(--color-background)',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
  },
});

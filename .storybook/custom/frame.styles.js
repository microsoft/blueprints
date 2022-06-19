import { makeStyles, makeStaticStyles } from '@griffel/react';

export const useThemeSwitchStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '0.5rem',
  },
  button: {
    backgroundColor: 'var(--color-backgroundColor)',
    borderBottomColor: 'var(--color-border)',
    borderBottomLeftRadius: '0.25rem',
    borderBottomRightRadius: '0.25rem',
    borderBottomStyle: 'solid',
    borderBottomWidth: '0.0625rem',
    borderLeftColor: 'var(--color-border)',
    borderLeftStyle: 'solid',
    borderLeftWidth: '0.0625rem',
    borderRightColor: 'var(--color-border)',
    borderRightStyle: 'solid',
    borderRightWidth: '0.0625rem',
    borderTopColor: 'var(--color-border)',
    borderTopLeftRadius: '0.25rem',
    borderTopRightRadius: '0.25rem',
    borderTopStyle: 'solid',
    borderTopWidth: '0.0625rem',
    color: 'var(--color-primary)',
    paddingBottom: '0.25rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    paddingTop: '0.25rem',
    ':hover': {
      backgroundColor: 'var(--color-tile)',
      borderTopColor: 'var(--color-tile)',
      borderBottomColor: 'var(--color-tile) ',
      borderRightColor: 'var(--color-tile)',
      borderLeftColor: 'var(--color-tile)',
    },
  },
});

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
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignContent: 'center',
    marginBottom: '0.5rem',
  },
  canvas: {
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    height: 'calc(100% - 2rem)',
  },
});

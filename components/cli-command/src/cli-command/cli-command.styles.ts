import { makeStyles } from '@griffel/react';

export const useCLICommandStyles = makeStyles({
  root: {
    width: '100%',
    paddingTop: '1rem',
    paddingBottom: '1.125rem',
    paddingLeft: '1.375rem',
    paddingRight: '1.375rem',
    borderTopLeftRadius: 'var(--shape-corner-radius)',
    borderTopRightRadius: 'var(--shape-corner-radius)',
    borderBottomRightRadius: 'var(--shape-corner-radius)',
    borderBottomLeftRadius: 'var(--shape-corner-radius)',
    backgroundColor: 'var(--color-tile-background)',
    display: 'block',
    position: 'relative',
  },
  command: {
    fontSize: '14px',
    fontWeight: 'var(--font-weight-regular)',
    color: 'var(--color-secondary)',
    display: 'inline-block',
    lineHeight: '1',
  },
  copy: {
    width: '48px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftStyle: 'none',
    borderTopRightStyle: 'none',
    borderBottomRightStyle: 'none',
    borderBottomLeftStyle: 'none',
    backgroundColor: 'transparent',
    position: 'absolute',
    right: '0',
    top: '0',
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0',
    outlineStyle: 'none',
    cursor: 'pointer',
    transitionProperty: 'background-color',
    transitionDuration: '140ms',
    transitionTimingFunction: 'ease-in-out',
    transitionDelay: '0ms',
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',

    ':focus': {
      outlineColor: '#005c9b',
      outlineStyle: 'solid',
      outlineWidth: '0.125rem',
    },

    '& svg': {
      width: '1.375rem',
      transitionProperty: 'all',
      transitionDuration: '240ms',
      transitionTimingFunction: 'ease-in-out',
      transitionDelay: '0ms',

      '& path': {
        fill: 'var(--color-background)',
      },
    },
  },
  idle: {
    backgroundColor: 'var(--color-positive)',
  },
  complete: {
    backgroundColor: 'var(--color-secondary)',
  },
});

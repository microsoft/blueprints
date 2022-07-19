import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useCLICommandStyles = makeStyles({
  root: {
    width: '100%',
    paddingTop: '1rem',
    paddingBottom: '1.125rem',
    paddingLeft: '1.375rem',
    paddingRight: '1.375rem',
    borderTopLeftRadius: 'var(--arbutus--shape-border-radius)',
    borderTopRightRadius: 'var(--arbutus--shape-border-radius)',
    borderBottomRightRadius: 'var(--arbutus--shape-border-radius)',
    borderBottomLeftRadius: 'var(--arbutus--shape-border-radius)',
    backgroundColor: 'var(--arbutus--color-tile)',
    display: 'block',
    position: 'relative',
  },
  command: {
    fontSize: '14px',
    fontWeight: tokens.fontWeightRegular,
    color: tokens.colorNeutralForeground2,
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
        fill: tokens.colorNeutralBackground1,
      },
    },
  },
  idle: {
    backgroundColor: tokens.colorNeutralBackground2,
  },
  complete: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
});

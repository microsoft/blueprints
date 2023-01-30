import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useCodeSnippetStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    width: '100%',
    paddingTop: tokens.spacingVerticalL,
    paddingBottom: tokens.spacingVerticalL,
    paddingLeft: tokens.spacingVerticalXXL,
    paddingRight: tokens.spacingVerticalXXL,
    borderTopLeftRadius: 'var(--arbutus--shape-border-radius)',
    borderTopRightRadius: 'var(--arbutus--shape-border-radius)',
    borderBottomRightRadius: 'var(--arbutus--shape-border-radius)',
    borderBottomLeftRadius: 'var(--arbutus--shape-border-radius)',
    backgroundColor: 'rgb(240, 240, 240)',
    display: 'block',
    position: 'relative',
  },
});

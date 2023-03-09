import { tokens } from '@fluentui/react-theme';
import type { CSSProperties } from 'react';

export const syntaxHighlighterCustomStyles: CSSProperties = {
  backgroundColor: tokens.colorNeutralBackground3,
  marginTop: 0,
  marginBottom: 0,
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
};

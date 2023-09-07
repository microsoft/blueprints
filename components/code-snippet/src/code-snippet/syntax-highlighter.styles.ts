import { tokens } from '@fluentui/react-theme';
import { arbutusTokens } from '@microsoft/arbutus.theming';
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
  borderTopLeftRadius: arbutusTokens.shape.borderRadius,
  borderTopRightRadius: arbutusTokens.shape.borderRadius,
  borderBottomRightRadius: arbutusTokens.shape.borderRadius,
  borderBottomLeftRadius: arbutusTokens.shape.borderRadius,
};

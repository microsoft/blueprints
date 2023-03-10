import { useTheme } from '@microsoft/arbutus.theming';
import type { FC } from 'react';
import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  solarizedDark,
  solarizedLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import type { CodeSnippetProps } from './code-snippet.types';
import { syntaxHighlighterCustomStyles } from './syntax-highlighter.styles';

export const CodeSnippet: FC<CodeSnippetProps> = ({ language, code }) => {
  // Theme
  const { themeKey } = useTheme();
  const isDarkTheme = themeKey === 'dark';

  return (
    <SyntaxHighlighter
      language={language}
      showLineNumbers
      style={isDarkTheme ? solarizedDark : solarizedLight}
      customStyle={syntaxHighlighterCustomStyles}
    >
      {code}
    </SyntaxHighlighter>
  );
};

import type { FC } from 'react';
import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { useCodeSnippetStyles } from './code-snippet.styles';
import type { CodeSnippetProps } from './code-snippet.types';

export const CodeSnippet: FC<CodeSnippetProps> = ({ language, code }) => {
  // Styles
  const classes = useCodeSnippetStyles();

  return (
    <div className={classes.root}>
      <SyntaxHighlighter language={language} showLineNumbers={true}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

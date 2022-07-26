import type { FC } from 'react';
import * as React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { BlockStyles } from './block-styles';
import { useCodeBlockStyles } from './code-block.styles';
import type { CodeBlockProps } from './code-block.types';

// @todo Implement @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const CodeBlock: FC<CodeBlockProps> = ({ language, code, isCopyable }) => {
  // Styles
  const classes = useCodeBlockStyles();

  return (
    <div className={classes.root}>
      <div className={classes.overflow}>
        <SyntaxHighlighter language={language} showLineNumbers={true} style={BlockStyles}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

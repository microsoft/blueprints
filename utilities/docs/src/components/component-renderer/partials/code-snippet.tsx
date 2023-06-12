import * as React from 'react';
import type { FC } from 'react';
import { CodeSnippet } from '@microsoft/arbutus.code-snippet';

import type { CodeSnippetComponentData } from '../component-renderer.types';

type CodeSnippetProps = CodeSnippetComponentData;

export const CodeSnippetComponent: FC<CodeSnippetProps> = ({ code_, language }) => (
  <CodeSnippet code={code_} language={language} />
);

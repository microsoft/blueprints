import * as React from 'react';
import type { FC } from 'react';
import Markdown from 'react-markdown';
import { Text as ArbutusText } from '@microsoft/arbutus.text';
import { MarkList, MarkListItem } from '@microsoft/arbutus.mark-list';
import { OrderedList, OrderedListItem } from '@microsoft/arbutus.ordered-list';
import { CodeSnippet } from '@microsoft/arbutus.code-snippet';

import { Image } from '../../image';
import { TextComponentData } from '../component-renderer.types';
import { Divider } from '@microsoft/arbutus.divider';

type TextProps = TextComponentData;

export const TextComponent: FC<TextProps> = (data) => {
  const {
    childStrapiComponentBlocksTextTextTextnode: {
      childMarkdownRemark: { rawMarkdownBody }
    }
  } = data;

  if (!rawMarkdownBody) {
    return null;
  }

  return (
    <Markdown
      children={rawMarkdownBody}
      components={{
        h1: ({ children }) => (
          <ArbutusText as="h1" variant="jumbo" block>
            {children}
          </ArbutusText>
        ),
        h2: ({ children }) => (
          <ArbutusText as="h2" variant="title" block>
            {children}
          </ArbutusText>
        ),
        h3: ({ children }) => (
          <ArbutusText as="h3" variant="subtitle" block>
            {children}
          </ArbutusText>
        ),
        h4: ({ children }) => (
          <ArbutusText as="h4" variant="headline" block>
            {children}
          </ArbutusText>
        ),
        h5: ({ children }) => (
          <ArbutusText as="h5" variant="leading" block>
            {children}
          </ArbutusText>
        ),
        h6: ({ children }) => (
          <ArbutusText as="h6" variant="caption" block>
            {children}
          </ArbutusText>
        ),
        img: ({ src, alt }) => <Image isRounded src={src} alt={alt} />,
        p: ({ children }) => (
          <ArbutusText block as="p" variant="paragraph">
            {children}
          </ArbutusText>
        ),
        strong: ({ children }) => <ArbutusText variant="caption">{children}</ArbutusText>,
        ul: ({ children }) => <MarkList>{children}</MarkList>,
        ol: ({ children }) => <OrderedList>{children}</OrderedList>,
        li: ({ children, ordered, index }) =>
          ordered ? (
            <OrderedListItem __index={index + 1}>{children}</OrderedListItem>
          ) : (
            <MarkListItem>{children}</MarkListItem>
          ),
        hr: () => <Divider />,
        code: ({ children, node, className }) => {
          const match = /language-(\w+)/.exec(className ?? '');
          const isMultiline = node?.position?.start.line !== node?.position?.end.line;

          return isMultiline ? (
            // @ts-ignore-next-line Value does exist.
            <CodeSnippet code={node?.children[0]?.value ?? ''} language={match[1]} />
          ) : (
            <code>
              <ArbutusText variant="code">{children}</ArbutusText>
            </code>
          );
        }
      }}
    />
  );
};

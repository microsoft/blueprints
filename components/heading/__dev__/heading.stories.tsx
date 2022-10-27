import { colorClasses, Text, variantClasses } from '@microsoft/arbutus.text';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React, { useCallback, useState } from 'react';

import type { HeadingProps, OnCopyArgs } from '../src/index';
import { Heading } from '../src/index';

export default {
  title: 'Blocks/Heading',
  component: Heading,
  argTypes: {
    variant: {
      options: Object.keys(variantClasses),
      control: {
        type: 'select',
      },
    },
    color: {
      options: Object.keys(colorClasses),
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [headingUrl, setHeadingUrl] = useState<string>('');

  const onCopy = useCallback(({ url }: OnCopyArgs) => {
    args.onCopy?.({ url });
    setCopied(true);
    setHeadingUrl(url);
    setTimeout(() => {
      setCopied(false);
      setHeadingUrl('');
    }, 2000);
  }, []);

  return (
    <>
      <Heading {...args} onCopy={onCopy} />
      {copied && (
        <Text variant="caption" color="positive">
          Copied {headingUrl}#{args.id}
        </Text>
      )}
    </>
  );
};

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<HeadingProps>
>;
Simple.args = {
  as: 'h1',
  children: 'Heading',
  color: 'primary',
  variant: 'headline',
};

export const WithCopyLinkButton = Template.bind({}) as ComponentStory<
  FunctionComponent<HeadingProps>
>;
WithCopyLinkButton.args = {
  as: 'h1',
  children: 'Section title',
  color: 'primary',
  variant: 'subtitle',
  headingUrl: 'example.com',
  copyLabel: 'Copy heading URL to clipboard.',
  id: 'section-title',
};

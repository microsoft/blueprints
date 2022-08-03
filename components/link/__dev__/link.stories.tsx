import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent, SyntheticEvent } from 'react';
import React from 'react';

import type { LinkProps } from '../src/index';
import { Link } from '../src/index';

export default {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'inverse', 'caption'],
      },
    },
    withIcon: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Link>;

const LinkSample = ({ children }) => {
  const onClick = (e: SyntheticEvent) => {
    e.preventDefault();
    alert('Clicked!');
  };

  return (
    <button
      style={{ background: 'transparent', border: 'none', outline: 'none' }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Simple = Template.bind({}) as ComponentStory<FunctionComponent<LinkProps>>;
Simple.args = {
  children: 'Simple Link Example',
  as: LinkSample,
};

export const IsUnderlined = Template.bind({}) as ComponentStory<
  FunctionComponent<LinkProps>
>;
IsUnderlined.args = {
  children: 'Queen of Style',
  isUnderlined: true,
  as: LinkSample,
};

export const WithIcon = Template.bind({}) as ComponentStory<FunctionComponent<LinkProps>>;
WithIcon.args = {
  children: 'Open in new tab',
  withIcon: true,
  as: LinkSample,
};

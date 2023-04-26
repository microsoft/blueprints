import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import { Centered } from '../../../.storybook/decorators';
import type { CrownProps } from '../src/index';
import { Crown } from '../src/index';
// @ts-ignore TS doesn’t recognize the image format.
import logo from './fluentui-logo.svg';
// @ts-ignore TS doesn’t recognize the image format.
import logoMark from './logo.svg';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Layout/Crown',
  component: Crown,
  argTypes: {
    onClick: { action: 'clicked' },
    onLogoClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => (
      <Centered>
        <div style={{ maxWidth: '360px' }}>
          <Story />
        </div>
      </Centered>
    ),
  ],
} as ComponentMeta<typeof Crown>;

const Template: ComponentStory<typeof Crown> = (args) => <Crown {...args} />;

export const Simple = Template.bind({}) as ComponentStory<FunctionComponent<CrownProps>>;

Simple.args = {
  logoMarkAlt: 'Arbutus logo',
  logoMarkSrc: logo as string,
  logoText: 'Arbutus',
  isTabletLayout: false,
};

export const TabletLayout = Template.bind({}) as ComponentStory<
  FunctionComponent<CrownProps>
>;

TabletLayout.args = {
  logoMarkAlt: 'Arbutus logo',
  logoMarkSrc: logoMark as string,
  logoText: 'Arbutus',
  isTabletLayout: true,
};

export const ImageOnly = Template.bind({}) as ComponentStory<
  FunctionComponent<CrownProps>
>;

ImageOnly.args = {
  logoMarkAlt: 'Fluent logo',
  logoMarkSrc: logo as string,
  isTabletLayout: false,
};

const CustomLogo = ({ title }) => (
  <>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block' }}
    >
      <g>
        <path
          d="M10 0C10.4142 0 10.75 0.33579 10.75 0.75V2.25C10.75 2.66421 10.4142 3 10 3C9.5858 3 9.25 2.66421 9.25 2.25V0.75C9.25 0.33579 9.5858 0 10 0ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10ZM19.25 10.75C19.6642 10.75 20 10.4142 20 10C20 9.5858 19.6642 9.25 19.25 9.25H17.75C17.3358 9.25 17 9.5858 17 10C17 10.4142 17.3358 10.75 17.75 10.75H19.25ZM10 17C10.4142 17 10.75 17.3358 10.75 17.75V19.25C10.75 19.6642 10.4142 20 10 20C9.5858 20 9.25 19.6642 9.25 19.25V17.75C9.25 17.3358 9.5858 17 10 17ZM2.25 10.75C2.66421 10.75 3 10.4142 3 10C3 9.5858 2.66421 9.25 2.25 9.25H0.75C0.33579 9.25 0 9.5858 0 10C0 10.4142 0.33579 10.75 0.75 10.75H2.25ZM2.21967 2.22004C2.51256 1.92715 2.98744 1.92715 3.28033 2.22004L4.78033 3.72004C5.07322 4.01294 5.07322 4.48781 4.78033 4.7807C4.48744 5.0736 4.01256 5.0736 3.71967 4.7807L2.21967 3.2807C1.92678 2.98781 1.92678 2.51294 2.21967 2.22004ZM3.28033 17.7807C2.98744 18.0736 2.51256 18.0736 2.21967 17.7807C1.92678 17.4878 1.92678 17.0129 2.21967 16.72L3.71967 15.22C4.01256 14.9271 4.48744 14.9271 4.78033 15.22C5.07322 15.5129 5.07322 15.9878 4.78033 16.2807L3.28033 17.7807ZM17.7803 2.22004C17.4874 1.92715 17.0126 1.92715 16.7197 2.22004L15.2197 3.72004C14.9268 4.01294 14.9268 4.48781 15.2197 4.7807C15.5126 5.0736 15.9874 5.0736 16.2803 4.7807L17.7803 3.2807C18.0732 2.98781 18.0732 2.51294 17.7803 2.22004ZM16.7197 17.7807C17.0126 18.0736 17.4874 18.0736 17.7803 17.7807C18.0732 17.4878 18.0732 17.0129 17.7803 16.72L16.2803 15.22C15.9874 14.9271 15.5126 14.9271 15.2197 15.22C14.9268 15.5129 14.9268 15.9878 15.2197 16.2807L16.7197 17.7807Z"
          fill="#212121"
        />
      </g>
    </svg>

    <p>{title}</p>
  </>
);

export const WithCustomLogoMarkElement = Template.bind({}) as ComponentStory<
  FunctionComponent<CrownProps>
>;

WithCustomLogoMarkElement.args = {
  logoAs: CustomLogo,
  logoProps: { title: 'Custom logo mark' },
};

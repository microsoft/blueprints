import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { ConcertinaListProps } from '../src/index';
import { ConcertinaList } from '../src/index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/ConcertinaList',
  component: ConcertinaList,
} as ComponentMeta<typeof ConcertinaList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConcertinaList> = (args) => (
  <ConcertinaList {...args} />
);

const lorem =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas cupiditate inventore id voluptatum ipsa. Voluptatibus, id. Deserunt modi labore culpa quis consectetur aut corporis reiciendis, eligendi sit, maxime harum magnam.';

export const Simple = Template.bind({}) as ComponentStory<
  FunctionComponent<ConcertinaListProps>
>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  title: 'Simple ConcertinaList Example',
  description: 'Simple ConcertinaList Example lorem',
  items: [
    {
      title: 'First title',
      content: <p>Hello hello. {lorem}</p>,
    },
    {
      title: 'Second title',
      content: <p>Hello hello. {lorem}</p>,
    },
    {
      title: 'Third title',
      content: <p>Hello hello. {lorem}</p>,
    },
  ],
};

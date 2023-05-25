import { Text } from '@microsoft/arbutus.text';
import type { Meta, StoryFn } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { AccordionItemProps, AccordionListProps } from '../src/index';
import { AccordionItem, AccordionList } from '../src/index';
import { DemoContent } from './partials/demo-content';

export default {
  title: 'Lists/AccordionList',
  component: AccordionItem,
} as Meta<typeof AccordionItem>;

const ItemTemplate: StoryFn<typeof AccordionItem> = (args) => (
  <div style={{ width: '600px' }}>
    <AccordionItem {...args} />
  </div>
);

const lorem =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas cupiditate inventore id voluptatum ipsa. Voluptatibus, id. Deserunt modi labore culpa quis consectetur aut corporis reiciendis, eligendi sit, maxime harum magnam.';

export const Item = ItemTemplate.bind({}) as StoryFn<
  FunctionComponent<AccordionItemProps>
>;
Item.args = {
  title: 'Sample title for an AccordionItem',
  children: <Text block>{lorem}</Text>,
};

const ListTemplate: StoryFn<typeof AccordionItem> = (args) => (
  <div style={{ width: '600px', height: '100%' }}>
    <AccordionList {...args} />
  </div>
);

export const List = ListTemplate.bind({}) as StoryFn<
  FunctionComponent<AccordionListProps>
>;

List.args = {
  children: (
    <>
      {Array.from({ length: 3 }, (_, i) => (
        <AccordionItem key={i} title={`AccordionItem ${i + 1}`}>
          <DemoContent />
        </AccordionItem>
      ))}
    </>
  ),
};

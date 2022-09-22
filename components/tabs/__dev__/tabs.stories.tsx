import { makeStyles } from '@griffel/react';
import { Text } from '@microsoft/arbutus.text';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import type { FunctionComponent } from 'react';
import React from 'react';

import type { TabsProps } from '../src/index';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '../src/index';

const usePreviewStyles = makeStyles({
  root: {
    maxWidth: '60rem',
    width: '100%',
  },
});

const Content = ({ index }: { index: string }) => {
  const space = useSpaceStyles();

  return (
    <Tile variant="solid-color" className={space.mt10}>
      <article className={space.p6}>
        <Text as="h3" variant="subheading" block>
          This Is a Headline {index}!
        </Text>
        <Text as="p" block>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloremque
          dolores beatae sapiente enim rerum dolorum optio quasi quaerat reiciendis.
          Laboriosam doloremque itaque optio sint earum debitis nesciunt autem dolor?
        </Text>
      </article>
    </Tile>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = (args) => {
  const classes = usePreviewStyles();

  return (
    <Tabs className={classes.root} {...args}>
      <TabList>
        <Tab>Usage</Tab>
        <Tab>Style</Tab>
        <Tab>Implementation</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Content index="One" />
        </TabPanel>
        <TabPanel>
          <Content index="Two" />
        </TabPanel>
        <TabPanel>
          <Content index="Three" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export const Simple = Template.bind({}) as ComponentStory<FunctionComponent<TabsProps>>;

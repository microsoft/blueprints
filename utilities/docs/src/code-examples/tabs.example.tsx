import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@microsoft/arbutus.tabs';
import { Text } from '@microsoft/arbutus.text';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import React from 'react';

const Content = ({ index }: { index: string }) => {
  const space = useSpaceStyles();

  return (
    <Tile variant="solid-color">
      <article className={space.p8}>
        <Text as="h3" variant="subtitle" block className={space.mb4}>
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

const ExampleComponent = () => (
  <Tabs initialIndex={0}>
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

export default ExampleComponent;

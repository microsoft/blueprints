import { BookmarkTile } from '@arbutus/component.bookmark-tile';
import { Divider } from '@arbutus/component.divider';
import { MarkList, MarkListItem } from '@arbutus/component.mark-list';
import { RecommendationTile } from '@arbutus/component.recommendation-tile';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@arbutus/component.tabs';
import { Text } from '@arbutus/component.text';
import { Tile } from '@arbutus/component.tile';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { mergeStyles } from '@fluentui/react';
import { makeStyles, shorthands } from '@griffel/react';
import React from 'react';

const useMainStyles = makeStyles({
  root: {
    maxWidth: '61.25rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '48px',
  },
  split: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '1rem',
  },
  thirds: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '1rem',
  },
  image: {
    ...shorthands.borderRadius('var(--arbutus--shape-border-radius)'),
    width: '100%',
  },
});

const Content = ({ index }: { index: string }) => {
  const space = useSpaceStyles();

  return (
    <Tile variant="solid-color">
      <article className={space.p6}>
        <Text as="h3" variant="subheading">
          This Is a Headline {index}!
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloremque
          dolores beatae sapiente enim rerum dolorum optio quasi quaerat reiciendis.
          Laboriosam doloremque itaque optio sint earum debitis nesciunt autem dolor?
        </Text>
      </article>
    </Tile>
  );
};

export const PageSample = () => {
  const space = useSpaceStyles();
  const classes = useMainStyles();

  return (
    <main className={classes.root}>
      <Text as="h1" variant="jumbo">
        Button
      </Text>
      <Text variant="leading" className={space.mb12}>
        A button denotes a single action to move a user forward in a flow.
      </Text>

      <Tabs>
        <TabList>
          <Tab>Usage</Tab>
          <Tab>Style</Tab>
          <Tab>Implementation</Tab>
        </TabList>

        <TabPanels className={space.pt10}>
          <TabPanel>
            <MarkList>
              <MarkListItem>
                <Text as="b" variant="caption">
                  Natural on every platform.{' '}
                </Text>
                <Text as="span" color="secondary">
                  You want to know what to do. Your experiences should adapt to the device
                  you’re on and should build off the familiar — designing for what you
                  already understand. You want to know what to do. Your experiences should
                  adapt to the device you’re on and should build off the familiar —
                  designing for what you already understand.
                </Text>
              </MarkListItem>
              <MarkListItem>
                <Text as="b" variant="caption">
                  One for all, all for one. You want to be included.{' '}
                </Text>
                <Text as="span" color="secondary">
                  Your experiences should consider, learn, and reflect a range of
                  perspectives and abilities for the benefit of all.
                </Text>
              </MarkListItem>
              <MarkListItem>
                <Text as="b" variant="caption">
                  Built for focus. You want to stay in the flow.{' '}
                </Text>

                <Text as="span" color="secondary">
                  Your experiences should inspire action, drawing you forward, simply and
                  seamlessly.
                </Text>
              </MarkListItem>
              <MarkListItem>
                <Text as="b" variant="caption">
                  Unmistakably Microsoft.{' '}
                </Text>

                <Text as="span" color="secondary">
                  You want to recognize what you’re looking for. Your experiences should
                  feel like one Microsoft. One moment, one product, one experience at a
                  time.
                </Text>
              </MarkListItem>
            </MarkList>
          </TabPanel>
          <TabPanel>
            <Content index="Two" />
          </TabPanel>
          <TabPanel>
            <Content index="Three" />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Divider className={space.my8} />

      <Text as="h2" variant="subheading">
        Overview
      </Text>
      <Text variant="paragraph" className={space.mb8}>
        Our focus on legibility, scalability, accessibility, asethetic elegance, and
        emotional impact of text are surfaced via a set of carefully curated properties
        that work across devices and platforms.
      </Text>

      <div className={classes.split}>
        <RecommendationTile
          title="Use buttons for high priority actions"
          description="Users should be able to tell at a glance what a button will let them do based on their current context."
          recommendation="positive"
          imageSrc="https://via.placeholder.com/300x100.png/f0f0f0"
          imageAlt="Sample"
        />
        <RecommendationTile
          title="Too many buttons will clutter a layout."
          description="Too many buttons will clutter a layout and disrupt visual hierarchy."
          recommendation="negative"
          imageSrc="https://via.placeholder.com/300x100.png/f0f0f0"
          imageAlt="Sample"
        />
      </div>

      <Divider className={space.my12} />
      <Text as="h2" variant="subheading" className={space.mb8}>
        Resources
      </Text>
      <div className={classes.thirds}>
        <BookmarkTile
          title="Link Name"
          description="Start using in Figma"
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onClick={() => {}}
        />
        <BookmarkTile
          title="Link Name"
          description="Start using in code"
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onClick={() => {}}
        />
      </div>
    </main>
  );
};

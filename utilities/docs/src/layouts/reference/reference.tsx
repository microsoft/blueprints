import { mergeClasses } from '@griffel/react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@microsoft/arbutus.tabs';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import { ComponentRenderer } from '../../components/component-renderer';
import { useReferenceStyles } from './reference.styles';
import type { ReferenceLayoutProps } from './reference.types';
import {
  QuickResource,
  isCopyResource,
  isLinkResource,
} from '../../components/quick-resource';

export const ReferenceLayout: FC<ReferenceLayoutProps> = ({
  definition,
  quickResources,
  tabs,
  title,
}) => {
  const space = useSpaceStyles();
  const classes = useReferenceStyles();

  return (
    <>
      <Text block variant="jumbo" as="h1">
        {title}
      </Text>

      {definition && (
        <Text
          block
          variant="leading"
          as="p"
          className={mergeClasses(space.my5, space.mb10)}
        >
          {definition}
        </Text>
      )}

      {quickResources && (
        <div className={space.my5}>
          {quickResources.map((resource, index) => {
            let key = '';
            if (isCopyResource(resource)) {
              key = resource.copyText;
            }
            if (isLinkResource(resource)) {
              key = resource.label;
            }

            return (
              <QuickResource
                key={`${index}--${key}`}
                data={resource}
                className={space.mr3}
              />
            );
          })}
        </div>
      )}

      <Tabs className={space.mt12}>
        <TabList>
          {tabs.map((tab, index) => {
            const currentTab = tabs.find((t) => t.tab === tab.tab);

            return (
              <Tab key={`${index}--${currentTab?.tab ?? ''}`} className={classes.tab}>
                {currentTab?.tab}
              </Tab>
            );
          })}
        </TabList>
        <TabPanels>
          {tabs.map(({ tab, content }, index) => (
            <TabPanel key={`${index}--${tab}`}>
              {content && <ComponentRenderer content={content} />}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

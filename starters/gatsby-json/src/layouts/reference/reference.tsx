import * as React from 'react';
import type { FC } from 'react';
import { Text } from '@microsoft/arbutus.text';
import { PersonTile } from '@microsoft/arbutus.person-tile';
import { Tabs, TabList, TabPanel, TabPanels, Tab } from '@microsoft/arbutus.tabs';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import { mergeClasses } from '@griffel/react';

import type { ReferenceLayoutProps } from './reference.types';
import { Grid } from '../../components/grid';
import { ComponentRenderer } from '../../components/component-renderer';
import { useReferenceStyles } from './reference.styles';
import { sortTabs } from './reference.utils';

export const ReferenceLayout: FC<ReferenceLayoutProps> = ({ title, definition, owners, packageName, tabs }) => {
  const space = useSpaceStyles();
  const classes = useReferenceStyles();

  const makeTeamsLink = (alias?: string) => () =>
    alias && window?.open(`https://teams.microsoft.com/l/chat/0/0?users=${alias}@microsoft.com`, '_blank');

  return (
    <>
      <Text block variant="jumbo" as="h1">
        {title}
      </Text>
      {definition && (
        <Text block variant="leading" className={mergeClasses(space.my5, space.mb10)}>
          {definition}
        </Text>
      )}
      <Grid layout="small">
        {owners.map((owner, index) => (
          <PersonTile
            key={index}
            firstName={owner.firstName}
            lastName={owner.lastName ?? ''}
            role={owner.role}
            avatarSrc={owner.avatar?.url}
            onClick={makeTeamsLink(owner.alias)}
          />
        ))}
      </Grid>

      <Tabs className={space.mt12}>
        <TabList>
          {sortTabs(tabs).map((tab, index) => {
              const currentTab = tabs.find((t) => t.tab === tab.tab);
              return (
                <Tab key={`${index}--${currentTab?.tab}`} className={classes.tab}>
                {currentTab?.tab}
              </Tab>
              )
          })}
        </TabList>
        <TabPanels>
          {sortTabs(tabs).map(({ tab, content }, index) => (
            <TabPanel key={`${index}--${tab}`}>{content && <ComponentRenderer content={content} />}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};

import { mergeClasses } from '@griffel/react';
import { PersonTile } from '@microsoft/arbutus.person-tile';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@microsoft/arbutus.tabs';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import { ResourceChip } from '@microsoft/arbutus.resource-chip';
import type { FC } from 'react';
import * as React from 'react';
import { useCopyToClipboard } from '@microsoft/arbutus.use-copy-to-clipboard';

import { ComponentRenderer } from '../../components/component-renderer';
import { useReferenceStyles } from './reference.styles';
import type { ReferenceLayoutProps } from './reference.types';

export const ReferenceLayout: FC<ReferenceLayoutProps> = ({
  definition,
  figmaLink,
  owners,
  packageName,
  tabs,
  title,
}) => {
  const space = useSpaceStyles();
  const classes = useReferenceStyles();

  const { copy: copyPackageName, status } = useCopyToClipboard();
  const handleCopyPackageName = () => copyPackageName(packageName ?? '');
  const handleFigmaToolkitClick = () =>
    window.open('https://www.figma.com/@microsoft', '_blank');

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
      <div className={space.my5}>
        {figmaLink && (
          <ResourceChip
            text="Figma Toolkit"
            actionIconName="link"
            onClick={handleFigmaToolkitClick}
            logoName="figma"
            logoLabel="Figma"
            className={space.mr3}
          />
        )}
        {packageName && (
          <ResourceChip
            text={packageName}
            actionIconName={status === 'ready' ? 'copy' : 'check'}
            onClick={handleCopyPackageName}
            className={space.mr3}
          />
        )}
      </div>

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

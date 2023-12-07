import { Guidance } from '@microsoft/arbutus.guidance';
import type { FC } from 'react';
import * as React from 'react';

import type { AnatomyComponentData } from '../component-renderer.types';

type AnatomyComponentProps = AnatomyComponentData;

const formatListItemData = (listItems: AnatomyComponentProps['listItems']) =>
  listItems?.map(({ text, headline }) => ({ heading: headline, description: text }));

const Preview: FC<Pick<AnatomyComponentProps, 'embedUrl'> & { className: string }> = ({
  embedUrl,
  className,
}) => {
  return (
    <iframe
      style={{ border: '1px solid rgba(0, 0, 0, 0.1)', height: '360px' }}
      className={className}
      src={embedUrl}
    />
  );
};

export const AnatomyComponent: FC<AnatomyComponentProps> = ({
  embedUrl,
  description,
  heading,
  listItems,
}) => {
  const legendListItems = formatListItemData(listItems);

  return (
    <Guidance
      imageAs={Preview}
      imageProps={{ embedUrl }}
      heading={heading}
      description={description}
      legendListItems={legendListItems}
    />
  );
};

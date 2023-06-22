import {
  ActionListHeader,
  ActionListItem,
  ActionListItems,
  ActionListTile,
} from '@microsoft/arbutus.action-list-tile';
import type { FC } from 'react';
import * as React from 'react';

import { makeNavigate } from '../../../utilities';
import type { ActionListTileComponentData } from '../component-renderer.types';

type ActionListTileComponentProps = ActionListTileComponentData;

export const ActionListTileComponent: FC<ActionListTileComponentProps> = ({
  title,
  icon,
  listItems,
}) => {
  return (
    <ActionListTile>
      {title && (
        <ActionListHeader
          title={title}
          iconAlt={icon?.alternativeText ?? ''}
          iconSrc={icon?.src}
        />
      )}
      <ActionListItems>
        {listItems.map(({ label, description, to, isExternal, iconType }) => {
          const onClick = makeNavigate({ isExternal, to });

          return (
            <ActionListItem
              iconName={iconType}
              key={label}
              label={label}
              description={description}
              onClick={onClick}
            />
          );
        })}
      </ActionListItems>
    </ActionListTile>
  );
};

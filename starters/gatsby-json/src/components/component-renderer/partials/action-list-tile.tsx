import * as React from 'react';
import type { FC } from 'react';
import {
  ActionListTile,
  ActionListHeader,
  ActionListItem,
  ActionListItems,
} from '@microsoft/arbutus.action-list-tile';
import { navigate } from 'gatsby';
import { makeStyles } from '@griffel/react';

const useStyles = makeStyles({
  root: {
    maxWidth: '316px',
  },
});

import { ActionListTileComponentData } from '../component-renderer.types';

type ActionListTileComponentProps = ActionListTileComponentData;

export const ActionListTileComponent: FC<ActionListTileComponentProps> = ({
  title,
  icon,
  listItems,
}) => {
  const handleClick = ({
    isExternal,
    to,
  }: Pick<ActionListTileComponentProps['listItems'][0], 'isExternal' | 'to'>) =>
    isExternal ? window.open(to, '_blank') : navigate(to);

  const classes = useStyles();

  return (
    // <ActionListTile className={classes.root}>
    <ActionListTile>
      {title && (
        <ActionListHeader
          title={title}
          iconAlt={icon?.alternativeText ?? ''}
          iconSrc={icon?.src}
        />
      )}
      <ActionListItems>
        {listItems.map(({ label, description, to, isExternal, iconType }) => (
          <ActionListItem
            iconName={iconType}
            key={label}
            label={label}
            description={description}
            onClick={() => handleClick({ to, isExternal })}
          />
        ))}
      </ActionListItems>
    </ActionListTile>
  );
};
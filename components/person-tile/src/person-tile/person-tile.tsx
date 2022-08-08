import { Icon } from '@arbutus/component.icon';
import { Text } from '@arbutus/component.text';
import { Tile } from '@arbutus/component.tile';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { Avatar } from '@fluentui/react-avatar';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { usePersonTileStyles } from './person-tile.styles';
import type { PersonTileProps } from './person-tile.types';

export const PersonTile: FC<PersonTileProps> = ({
  className,
  avatarSrc,
  firstName,
  lastName,
  onClick,
  role,
  iconSrc,
  iconAlt,
}) => {
  // Styles
  const classes = usePersonTileStyles();
  const space = useSpaceStyles();

  return (
    <Tile
      onClick={onClick}
      variant="card"
      className={mergeClasses(classes.root, space.p7, className)}
    >
      <Avatar size={40} image={{ as: 'img', src: avatarSrc, 'aria-hidden': true }} />
      <div>
        <Text variant="caption" block>
          {firstName} {lastName}
        </Text>
        <Text variant="paragraph" color="secondary" block>
          {role}
        </Text>
      </div>
      {iconSrc && iconAlt ? (
        <img
          src={iconSrc}
          alt={iconAlt}
          className={mergeClasses(classes.image, space.px3)}
        />
      ) : (
        <Icon iconName="open" label={iconAlt} className={space.px3} color="secondary" />
      )}
    </Tile>
  );
};

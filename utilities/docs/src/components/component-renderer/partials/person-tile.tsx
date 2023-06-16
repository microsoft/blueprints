import { PersonTile } from '@microsoft/arbutus.person-tile';
import { navigate } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';

import type { PersonTileComponentData } from '../component-renderer.types';

type PersonTileComponentProps = PersonTileComponentData;

export const PersonTileComponent: FC<PersonTileComponentProps> = ({
  avatar,
  firstName,
  lastName,
  role,
  isExternal,
  to,
  icon,
}) => {
  const onClick = () => (isExternal ? window.open(to, '_blank') : navigate(to));

  return (
    <PersonTile
      avatarSrc={avatar?.url}
      firstName={firstName}
      lastName={lastName}
      role={role}
      iconSrc={icon?.url}
      iconAlt={icon?.alternativeText}
      onClick={onClick}
    />
  );
};

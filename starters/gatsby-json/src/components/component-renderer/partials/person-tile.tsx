import { PersonTile } from '@microsoft/arbutus.person-tile';
import type { FC } from 'react';
import * as React from 'react';

import { makeNavigate } from '../../../utilities';
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
}) => (
  <PersonTile
    avatarSrc={avatar?.url}
    firstName={firstName}
    lastName={lastName}
    role={role}
    iconSrc={icon?.url}
    iconAlt={icon?.alternativeText}
    onClick={makeNavigate({ isExternal, to })}
  />
);

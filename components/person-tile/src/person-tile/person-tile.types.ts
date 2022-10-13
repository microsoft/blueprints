import type { AvatarProps } from '@fluentui/react-avatar';
import type { SyntheticEvent } from 'react';

type WithIcon = {
  /**
   * Custom optional icon.
   */
  iconSrc?: string;

  /**
   * Accessible icon description.
   */
  iconAlt: string;
};

type WithoutIcon = {
  /**
   * Custom optional icon.
   */
  iconSrc?: never;

  /**
   * Accessible icon description.
   */
  iconAlt?: never;
};

export type PersonTileProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * First name of the person.
   */
  firstName: string;

  /**
   * Last name of the person.
   */
  lastName: string;

  /**
   * Avatar of the person.
   */
  avatarSrc?: string;

  /**
   * Role of the person.
   */
  role: string;

  /**
   * Action that handles click on the person tile.
   */
  onClick: (e?: SyntheticEvent) => void;
} & Pick<AvatarProps, 'image'> &
  (WithIcon | WithoutIcon);

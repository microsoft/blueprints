import type { ElementType, SyntheticEvent } from 'react';
import type { AvatarProps } from '@fluentui/react-avatar';

export type PostPreviewProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Image element.
   * @default 'img'
   */
  imageAs?: ElementType;

  /**
   * Image element props.
   */
  imageProps?: Record<string, unknown>;

  /**
   * Use image placeholder.
   */
  isImagePlaceholder?: boolean;

  /**
   * Title text.
   */
  title: string;

  /**
   * Publishing time.
   */
  timestamp: string;

  /**
   * Author’s avatar.
   */
  avatarProps?: AvatarProps;

  /**
   * Author’s first name.
   */
  firstName: string;

  /**
   * Author’s last name.
   */
  lastName: string;

  /**
   * Click handler.
   */
  onClick: (e?: SyntheticEvent) => void;
};

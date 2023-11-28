import type { paths } from '@microsoft/arbutus.icon';
import type { logos } from '@microsoft/arbutus.logo';

export type SizeKey = 'small' | 'medium' | 'large';

export type SizeValue = Record<'actionIcon' | 'logo' | 'padding' | 'paddingL' | 'gap', string>;

export type SizeMap = Record<SizeKey, SizeValue>;

export type ResourceChipProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Resource name
   */
  text: string;

  /**
   * Selection of icons for indicating the type of action when the user clicks on ResourceChip.
   * @default 'link'
   */
  actionIconName?: keyof typeof paths;

  /**
   * Click handler.
   */
  onClick?: () => void;

  /**
   * Size of the button.
   * @default 'medium'
   * */
  size?: SizeKey;

  /**
   * Selection of logos that represent the resource type.
   */
  logoName?: keyof typeof logos;

  /**
   * Accessible label for the logo that represents the resource type.
   */
  logoLabel?: string;
};

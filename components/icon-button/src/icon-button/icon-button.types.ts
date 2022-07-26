import type { paths } from '@arbutus/component.icon';
import type { SyntheticEvent } from 'react';

export type IconButtonProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Descriptive label of the button.
   */
  label: string;

  /**
   * Selection of icons.
   */
  iconName: keyof typeof paths;

  /**
   * Click handler.
   */
  onClick: (e?: SyntheticEvent) => void;
};

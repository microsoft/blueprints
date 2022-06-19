import type { paths } from '@arbutus/component.icon';
import type { SyntheticEvent } from 'react';

export type ActionListItemProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Action label.
   */
  label: string;

  /**
   * Concise action description for assistive technology (e.g. 'download', 'open link').
   */
  description: string;

  /**
   * Selection of icons.
   */
  iconName: keyof typeof paths;

  /**
   * Click handler.
   */
  onClick: (e?: SyntheticEvent) => void;
};

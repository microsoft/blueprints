import type { statusMap } from './callout.styles';

export type CalloutStatus = keyof typeof statusMap;

export type CalloutIconProps = {
  status?: CalloutStatus;
};

export type CalloutProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * String that renders as the Header text
   */
  title: string;

  /**
   * String that renders as the Header text
   */
  status?: CalloutStatus;
};

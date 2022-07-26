import type { CalloutProps } from '../callout/callout.types';

export type CalloutBadgeProps = {
  /**
   * Consumer provided class.
   */
  className?: string;
} & Pick<CalloutProps, 'status'>;

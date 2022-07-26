import type { logos } from '../logos';
import type { sizeClasses } from './logo.styles';

export type LogoProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Selection of logos.
   */
  logoName: keyof typeof logos;

  /**
   * Selection of size options.
   * @default 'fill'
   */
  size?: keyof typeof sizeClasses;

  /**
   * Sets the Icon to be an inline element.
   */
  isInline?: boolean;
};

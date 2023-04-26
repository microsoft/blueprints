import type { ReactNode } from 'react';

export type ShellProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * A consumer defined header area.
   */
  headerArea: ReactNode;

  /**
   * A consumer defined footer area.
   */
  footerArea: ReactNode;

  /**
   * A consumer defined navigation area.
   */
  navigationArea: ReactNode;

  /**
   * Logo mark src.
   * */
  logoMarkSrc?: string;

  /**
   * Logo mark alt.
   */
  logoMarkAlt?: string;

  /**
   * Logo text.
   */
  logoText?: string;

  /**
   * Alternative logo element.
   */
  logoAs?: React.ElementType;

  /**
   * Props to be passed to the alternative logo element.
   */
  logoProps?: Record<string, unknown>;

  /**
   * Accessible text for the close tray action.
   */
  closeTrayLabel?: string;

  /**
   * Accessible text for the open tray action.
   */
  openTrayLabel?: string;

  /**
   * Sets the Shell to be in full-width mode.
   * @default false
   * */
  isHeroMode?: boolean;

  /**
   * Sets the Shell to be in blank mode, meaning that the header and footer are not rendered. This is useful for pages
   * that are not part of the main navigation or for preview pages.
   * @default false
   */
  isBlankMode?: boolean;

  /**
   * Click handler for the logo. Usually used to return the user back to the home page.
   */
  onLogoClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;

  children?: ReactNode | undefined;
};

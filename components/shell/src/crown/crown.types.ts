export type CrownProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Logo mark src.
   * */
  logoMarkSrc?: string;

  /**
   * Logo mark alt.
   */
  logoMarkAlt?: string;

  /**
   * Alternative logo element.
   */
  logoAs?: React.ElementType;

  /**
   * Props to be passed to the alternative logo element.
   */
  logoProps?: Record<string, unknown>;

  /**
   * Logo text.
   */
  logoText?: string;

  /**
   * Adds tablet tray controls.
   */
  isTabletLayout?: boolean;

  /**
   * Accessible text for the close tray action.
   */
  closeTrayLabel?: string;

  /**
   * Accessible text for the open tray action.
   */
  openTrayLabel?: string;

  /**
   * Click handler.
   */
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

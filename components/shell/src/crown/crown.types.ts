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
};

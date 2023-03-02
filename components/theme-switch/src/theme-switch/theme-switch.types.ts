export type ThemeSwitchProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Label for assistive technologies to indicate whether the theme is light or dark.
   * @default 'Dark mode'
   */
  label?: string;

  /**
   * Whether the theme is light or dark.
   */
  isDark: boolean;

  /**
   * Callback to be called when the theme is toggled.
   * @param isDark - Whether the theme is light or dark.
   */
  onToggle?: () => void;
};

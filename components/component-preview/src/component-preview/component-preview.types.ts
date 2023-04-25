import type { ElementType, ReactElement, ReactNode } from 'react';

export type ComponentPreviewProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Component to render in the preview.
   */
  component: ElementType;

  /**
   * Wrapper for the component. Use it to set up theme, context, custom styles, etc. See `themeKey` prop for info on how to change the theme.
   * @default ({ children }) => <>{children}</>
   * @example ({ children, currentThemeKey }) => <ThemeProvider theme={currentThemeKey}>{children}</ThemeProvider>
   */
  wrapper?: ({ children, themeKey }: WrapperProps) => ReactElement<any, any> | null;

  /**
   * Themes to be passed to the wrapper, if you want to add theme switcher.
   */
  themes?: {
    label: string;
    value: string;
  }[];

  /**
   * Default theme in the themes array to be used in theme switcher.
   * @default 0
   */
  defaultThemeIndex?: number;

  /**
   * Label for the theme switcher select control.
   * @default 'Theme'
   */
  themeSwitcherLabel?: string;

  /**
   * If you would like to show code implementation of the component, you can pass the string here.
   */
  code?: string;

  /**
   * Code language to be used for syntax highlighting.
   * @default 'tsx'
   */
  codeLanguage?: string;

  /**
   * If you want to render a button to open the preview in full screen, provide an on click handler for it here.
   * @example () => window.open('https://bit.dev/bit/base-ui/preview', '_blank')
   */
  onFullScreen?: () => void;

  /**
   * If you want to render a button to open the preview in live edit mode, provide an on click handler for it here.
   * @example () => window.open('https://bit.dev/bit/base-ui/edit', '_blank')
   */
  onLiveEdit?: () => void;

  /**
   * If you need to access the currently selected theme, you can pass a callback here.
   * @example ```tsx
   *   const [currentTheme, setCurrentTheme] = React.useState<string>();
   *   const onThemeChange = (theme: string) => setCurrentTheme(theme);
   *  ```
   */
  onThemeChange?: (themeKey: string) => void;
};

export type WrapperProps = {
  /**
   * Wrapper is going to render the component as children.
   */
  children: ReactNode;

  /**
   * Wrapper can receive a theme key to change the theme.
   * @example 'dark'
   */
  themeKey?: string;
};

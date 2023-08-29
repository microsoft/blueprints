export type ArbutusTokens = {
  color: {
    overlay: {
      background: string;
    };
  };
  shape: {
    borderRadius: string;
  };
  breakpoints: {
    micro: string;
    xxs: string;
    xs: string;
    small: string;
    medium: string;
    large: string;
  };
  layout: {
    mobile: number;
    tablet: number;
    desktop: number;
    ultraWide: number;
  };
};

export type ArbutusTheme = {
  light: ArbutusTokens;
  dark: ArbutusTokens;
};

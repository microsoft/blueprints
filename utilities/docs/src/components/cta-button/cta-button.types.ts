import type { ButtonHTMLAttributes, ElementType, LinkHTMLAttributes, ReactNode } from 'react';

type CTAButtonAsButton = {
  as?: 'button';
  elementProps?: ButtonHTMLAttributes<HTMLButtonElement>;
};

type CTAButtonAsLink = {
  as: 'a';
  elementProps?: LinkHTMLAttributes<HTMLAnchorElement>;
};

type CTAButtonAsElementType = {
  as: ElementType;
  elementProps?: { [key: string]: any };
};

export type CTAButtonProps = {
  /**
   * Children to render inside the text.
   */
  children?: ReactNode;

  /**
   * Custom styles for the root element.
   */
  className?: string;

  /**
   * The HTML element to render the text as.
   * @default "a"
   */
  as?: 'button' | 'a' | ElementType;
} & (CTAButtonAsButton | CTAButtonAsLink | CTAButtonAsElementType);

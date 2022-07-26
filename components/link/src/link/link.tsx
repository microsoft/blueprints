import { Icon } from '@arbutus/component.icon';
import type { TextProps } from '@arbutus/component.text';
import { Text } from '@arbutus/component.text';
import { useSpaceStyles } from '@arbutus/style.use-space-styles';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useLinkStyles } from './link.styles';
import type { LinkProps } from './link.types';

const getTextProps = ({ variant }: Pick<LinkProps, 'variant'>): TextProps => {
  switch (variant) {
    case 'caption': {
      return {
        variant: 'caption',
        color: 'primary',
      };
    }
    case 'inverse': {
      return {
        color: 'background',
      };
    }
    case 'secondary': {
      return {
        variant: 'description',
        color: 'secondary',
      };
    }
    case 'primary':
    default: {
      return {
        color: 'action',
      };
    }
  }
};

export const Link: FC<LinkProps> = ({
  as: Link,
  children,
  className,
  elementProps,
  variant,
  withIcon,
  isUnderlined,
}) => {
  const space = useSpaceStyles();
  const classes = useLinkStyles();

  return (
    <Link {...elementProps}>
      <Text
        as="span"
        className={mergeClasses(
          classes.root,
          isUnderlined && classes.isUnderlined,
          className,
        )}
        {...getTextProps({ variant })}
      >
        {children}
      </Text>
      {withIcon && (
        <Icon iconName="open" color="tertiary" isInline className={space.ml3} />
      )}
    </Link>
  );
};

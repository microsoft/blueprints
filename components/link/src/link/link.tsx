import { mergeClasses } from '@griffel/react';
import { Icon } from '@microsoft/arbutus.icon';
import type { TextProps } from '@microsoft/arbutus.text';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import { useLinkStyles } from './link.styles';
import type { LinkProps } from './link.types';

const getTextProps = ({ variant }: Pick<LinkProps, 'variant'>): TextProps => {
  switch (variant) {
    case 'display': {
      return {
        variant: 'leading',
        color: 'action',
      };
    }
    case 'accent':
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
  variant = 'primary',
  withIcon,
  isUnderlined,
  iconName = 'open',
}) => {
  const space = useSpaceStyles();
  const classes = useLinkStyles();

  const isComplexVariant = ['display', 'accent'].includes(variant);

  return (
    <Link
      className={mergeClasses(
        classes.root,
        isComplexVariant && classes.flexLayout,
        className,
      )}
      {...elementProps}
    >
      {isComplexVariant && (
        <Icon
          iconName="arrow-right"
          size={variant === 'display' ? 'large' : 'medium'}
          className={mergeClasses(
            variant === 'display' ? space.mr3 : space.mr1,
            variant === 'display' && space.mt1,
          )}
        />
      )}
      <Text
        as="span"
        className={isUnderlined ? classes.isUnderlined : ''}
        {...getTextProps({ variant })}
      >
        {children}
      </Text>
      {withIcon && (
        <Icon iconName={iconName} color="tertiary" isInline className={space.ml3} />
      )}
    </Link>
  );
};

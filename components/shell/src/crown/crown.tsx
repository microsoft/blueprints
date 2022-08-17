import { IconButton } from '@arbutus/component.icon-button';
import { Text } from '@arbutus/component.text';
import { useTrayContext } from '@arbutus/component.tray';
import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import { useCrownStyles } from './crown.styles';
import type { CrownProps } from './crown.types';

export const Crown: FC<CrownProps> = ({
  className,
  closeTrayLabel = 'Close navigation',
  isTabletLayout,
  logoMarkAlt,
  logoMarkSrc,
  logoText,
  openTrayLabel = 'Open navigation',
}) => {
  // Styles
  const classes = useCrownStyles();
  const { isOpen, setIsOpen } = useTrayContext();
  const onOpenTray = () => setIsOpen(true);
  const onCloseTray = () => setIsOpen(false);

  return (
    <div className={mergeClasses(classes.root, className)}>
      {isTabletLayout && (
        <IconButton
          iconName={isOpen ? 'slide-in' : 'slide-out'}
          label={isOpen ? closeTrayLabel : openTrayLabel}
          onClick={isOpen ? onCloseTray : onOpenTray}
          aria-hidden={true}
        />
      )}
      {logoMarkSrc && (
        <img src={logoMarkSrc} alt={logoMarkAlt} className={classes.image} />
      )}
      {logoText && (
        <Text as="h1" variant="subheading">
          {logoText}
        </Text>
      )}
    </div>
  );
};

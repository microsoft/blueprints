import { mergeClasses } from '@griffel/react';
import { IconButton } from '@microsoft/arbutus.icon-button';
import { Text } from '@microsoft/arbutus.text';
import { useTrayContext } from '@microsoft/arbutus.tray';
import type { FC, ReactNode } from 'react';
import * as React from 'react';

import { useCrownStyles } from './crown.styles';
import type { CrownProps } from './crown.types';

const Logo: FC<Pick<CrownProps, 'onClick'> & { children?: ReactNode | undefined }> = ({
  onClick,
  children,
}) => {
  // Styles
  const classes = useCrownStyles();

  if (onClick) {
    return (
      <button
        className={mergeClasses(classes.logo, classes.interactive)}
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else {
    return <>{children}</>;
  }
};

export const Crown: FC<CrownProps> = ({
  className,
  onClick,
  closeTrayLabel = 'Close navigation',
  isTabletLayout,
  logoMarkAlt,
  logoMarkSrc,
  logoText,
  openTrayLabel = 'Open navigation',
}) => {
  const { isOpen, setIsOpen } = useTrayContext();
  const onOpenTray = () => setIsOpen(true);
  const onCloseTray = () => setIsOpen(false);

  // Styles
  const classes = useCrownStyles();

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
      <Logo onClick={onClick}>
        {logoMarkSrc && (
          <img src={logoMarkSrc} alt={logoMarkAlt} className={classes.image} />
        )}
        {logoText && (
          <Text as="h1" variant="subtitle">
            {logoText}
          </Text>
        )}
      </Logo>
    </div>
  );
};

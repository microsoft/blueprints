import { Icon } from '@microsoft/arbutus.icon';
import { AnimatePresence } from 'framer-motion';
import { nanoid } from 'nanoid';
import type { FC } from 'react';
import { useMemo, useState } from 'react';
import * as React from 'react';

import { useMainNavigationSubStyles } from './main-navigation-sub.styles';
import type { MainNavigationSubProps } from './main-navigation-sub.types';
import { FadeMotion, SlideMotion } from './motion';

export const MainNavigationSub: FC<MainNavigationSubProps> = ({
  className,
  children,
  title,
  initial = 'collapsed',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpandClick = () => setIsExpanded(!isExpanded);

  const a11yLabelId = useMemo(() => nanoid(), []);
  const a11yContentId = useMemo(() => nanoid(), []);

  const classes = useMainNavigationSubStyles();

  return (
    <div className={className}>
      <button
        className={classes.button}
        id={a11yLabelId}
        aria-controls={a11yContentId}
        aria-expanded={isExpanded}
        onClick={handleExpandClick}
      >
        <Icon iconName="chevron-right" color="tertiary" />
        {title}
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <SlideMotion
            initial={initial}
            a11yContentId={a11yContentId}
            a11yLabelId={a11yLabelId}
          >
            <FadeMotion initial={initial}>
              <div className={classes.subList}>{children}</div>
            </FadeMotion>
          </SlideMotion>
        )}
      </AnimatePresence>
    </div>
  );
};

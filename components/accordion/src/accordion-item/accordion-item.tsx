import { mergeClasses } from '@griffel/react';
import { Icon } from '@microsoft/arbutus.icon';
import { Text } from '@microsoft/arbutus.text';
import { AnimatePresence } from 'framer-motion';
import { nanoid } from 'nanoid';
import type { FC } from 'react';
import * as React from 'react';
import { useMemo, useState } from 'react';

import { useAccordionItemStyles } from './accordion-item.styles';
import type { AccordionItemProps } from './accordion-item.types';
import { FadeMotion, SlideMotion } from './motion';

export const AccordionItem: FC<AccordionItemProps> = ({
  className,
  title,
  children,
  initial = 'collapsed',
}) => {
  const [isExpanded, setIsExpanded] = useState(initial === 'expanded');
  const handleExpandClick = () => setIsExpanded(!isExpanded);

  const a11yLabelId = useMemo(() => nanoid(), []);
  const a11yContentId = useMemo(() => nanoid(), []);

  // Styles
  const classes = useAccordionItemStyles();

  return (
    <div className={mergeClasses(classes.root, className)}>
      <button
        className={classes.trigger}
        id={a11yLabelId}
        aria-controls={a11yContentId}
        aria-expanded={isExpanded}
        onClick={handleExpandClick}
      >
        <Text className={classes.title} block variant="caption">
          {title}
        </Text>
        <Icon
          iconName="chevron-right"
          color="tertiary"
          className={mergeClasses(
            classes.toggle,
            isExpanded ? classes.toggleExpanded : classes.toggleIdle,
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <SlideMotion
            initial={initial}
            a11yContentId={a11yContentId}
            a11yLabelId={a11yLabelId}
            className={classes.content}
          >
            <FadeMotion initial={initial}>{children}</FadeMotion>
          </SlideMotion>
        )}
      </AnimatePresence>
    </div>
  );
};

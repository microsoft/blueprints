import type { FC } from 'react';
import * as React from 'react';
import { useState } from 'react';

import { useConcertinaListItemStyles } from './concertina-list-item.styles';
import type { ConcertinaListItemProps } from './concertina-list-item.types';

export const ConcertinaListItem: FC<ConcertinaListItemProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpandClick = () => setIsExpanded(!isExpanded);

  // Styles
  const classes = useConcertinaListItemStyles();

  return (
    <div className={classes.root}>
      <button
        className={classes.heading}
        onClick={handleExpandClick}
        aria-expanded={isExpanded}
      >
        <span className={classes.title}>{title}</span>
        <div className={classes.toggle}>
          <svg
            className={isExpanded ? classes.toggleExpanded : classes.toggleIdle}
            fill="none"
            height="6"
            viewBox="0 0 11 6"
            width="11"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.220449 0.739665C0.530486 0.436132 1.05249 0.418556 1.38637 0.700408L5.5 4.22652L9.61363 0.700408C9.94751 0.418556 10.4695 0.436132 10.7796 0.739665C11.0896 1.0432 11.0703 1.51775 10.7364 1.7996L6.06137 5.7996C5.74484 6.0668 5.25517 6.0668 4.93863 5.7996L0.263631 1.7996C-0.0702549 1.51775 -0.0895883 1.0432 0.220449 0.739665Z" />
          </svg>
        </div>
      </button>
      {isExpanded && <div className={classes.content}>{children}</div>}
    </div>
  );
};

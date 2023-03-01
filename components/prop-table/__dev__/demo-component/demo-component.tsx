import type { FC } from 'react';
import * as React from 'react';

import type { DemoComponentProps } from './demo-component.types';

export const DemoComponent: FC<DemoComponentProps> = ({
  className,
  title,
  onClick,
  description,
  callToAction = 'Hello 👋',
  // This is a demo component. It's okay to use deprecated props.
  // eslint-disable-next-line deprecation/deprecation
  text,
}) => {
  return (
    <>
      <h1 className={className}> ✅ {title}</h1>
      {text && <p>{text}</p>}
      {description && <p>{description}</p>}
      <button onClick={onClick}>{callToAction}</button>
    </>
  );
};

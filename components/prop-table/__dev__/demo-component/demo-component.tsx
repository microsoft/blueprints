import type { FC } from 'react';
import * as React from 'react';

import type { DemoComponentProps } from './demo-component.types';

export const DemoComponent: FC<DemoComponentProps> = ({ className, text = 'Hello' }) => {
  return <h1> ✅ {text}</h1>;
};

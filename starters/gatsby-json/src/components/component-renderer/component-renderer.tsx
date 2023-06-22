import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import * as React from 'react';

import type {
  ComponentData,
  ComponentProps,
  ComponentRendererProps,
  ComponentType,
} from './component-renderer.types';
import { formatData } from './format-data';
import { components } from './partials';
import { GRID_SETTINGS, useGridStyles } from './use-grid-styles';

const getComponent = (type: ComponentType) => components[type] ?? null;

const Component: FC<ComponentProps> = ({ type, content }) => {
  const Component = getComponent(type);
  const isGrid = content.length > 1;
  const gridClasses = useGridStyles();
  const gridSetting = GRID_SETTINGS[type];

  if (!Component) {
    return null;
  }

  if (!isGrid) {
    // @ts-ignore Intended behavior
    return <Component {...content[0]} />;
  } else {
    return (
      <div className={mergeClasses(gridClasses.root, gridClasses[gridSetting])}>
        {content.map((props, index) => (
          // @ts-ignore Intended behavior
          <Component key={index} {...props} />
        ))}
      </div>
    );
  }
};

export const ComponentRenderer: FC<ComponentRendererProps> = ({ content }) => {
  const gridClasses = useGridStyles();

  if (!content || content.length === 0) {
    return null;
  }

  const data = formatData(content as ComponentData[]);

  return (
    <div className={mergeClasses(gridClasses.root, gridClasses.container)}>
      {data.map(({ type, content: componentContent }, i) => (
        <Component key={`${type}-${i}`} type={type} content={componentContent} />
      ))}
    </div>
  );
};

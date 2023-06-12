import * as React from 'react';
import type { FC } from 'react';
import { mergeClasses } from '@griffel/react';

import type { ComponentRendererProps, ComponentProps, ComponentType } from './component-renderer.types';
import { components } from './partials';
import { useGridStyles, GRID_SETTINGS } from './use-grid-styles';
import { formatData } from './format-data';
import { ComponentData } from './component-renderer.types';

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
    // @ts-ignore
    return <Component {...content[0]} />;
  } else {
    return (
      <div className={mergeClasses(gridClasses.root, gridClasses[gridSetting])}>
        {content.map((props, index) => (
          // @ts-ignore
          <Component key={index} {...props} />
        ))}
      </div>
    );
  }
};

export const ComponentRenderer: FC<ComponentRendererProps> = ({ content }) => {
  if (!content || content.length === 0) {
    return null;
  }

  const gridClasses = useGridStyles();
  const data = formatData(content as ComponentData[]);

  return (
    <div className={mergeClasses(gridClasses.root, gridClasses.container)}>
      {data.map(({ type, content: componentContent }, i) => (
        <Component key={`${type}-${i}`} type={type} content={componentContent} />
      ))}
    </div>
  );
};

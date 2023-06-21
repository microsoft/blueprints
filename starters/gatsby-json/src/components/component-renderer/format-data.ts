import type { ComponentData, ComponentType } from './component-renderer.types';

export const formatData = (data: ComponentData[]) => {
  let position = 0;
  let currentType = data[0].contentComponentId;

  return data.reduce((acc, item) => {
    if (item.contentComponentId !== currentType) {
      position += 1;
      currentType = item.contentComponentId;
    }

    if (!acc[position]) {
      acc[position] = { type: currentType, content: [] };
    }

    acc[position].content.push(item);

    return acc;
  }, [] as { type: ComponentType; content: ComponentData[] }[]);
};

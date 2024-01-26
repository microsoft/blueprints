import { ResourceChip, type ResourceChipProps } from '@microsoft/arbutus.resource-chip';
import { Text } from '@microsoft/arbutus.text';
import * as React from 'react';

const resourceChipProps: ResourceChipProps = {
  text: "ResourceChip Story",
  logoName: 'storybook',
  logoLabel: 'Storybook file',
  actionIconName: 'link',
  size: 'small'
}

const ExampleComponent = () => (
  <Text style={{ maxWidth: 640 }}>
    Repudiandae corporis facilis minima fugiat, aut magni delectus suscipit iste ipsa.
    Inventore sapiente repellendus. This is a <ResourceChip {...resourceChipProps} />. Lorem ipsum
    dolor sit amet consectetur adipisicing elit. Ex maxime soluta ducimus deserunt 
    veritatis repellat odio.
  </Text>
);

export default ExampleComponent;

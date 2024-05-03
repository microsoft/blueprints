export default `import { ActionListHeader, ActionListItem, ActionListItems, ActionListTile } from '@microsoft/arbutus.action-list-tile';
import * as React from 'react';

// @ts-ignore TS doesn’t recognize the image format.
import figmaLogo from './assets/figma.png';

const downloads = ['Toolkit', 'Examples', 'Tokens', 'Utilities'];

const ExampleComponent = () => {
  const onClick = () => {};

  return (
    <ActionListTile>
        <ActionListHeader
          title="Figma Resources"
          iconSrc={figmaLogo as string}
          iconAlt="Figma logo"
        />
      <ActionListItems>
        {downloads.map((action, i) => (
          <ActionListItem
            key={\`\${i}-\${action}\`}
            label={action}
            description='Download'
            iconName="download"
            onClick={onClick}
          />
        ))}
      </ActionListItems>
    </ActionListTile>
  );
};

export default ExampleComponent;
`;

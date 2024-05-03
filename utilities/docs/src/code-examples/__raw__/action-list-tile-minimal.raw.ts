export default `import {
  ActionListHeader,
  ActionListItem,
  ActionListItems,
  ActionListTile,
} from '@microsoft/arbutus.action-list-tile';
import * as React from 'react';

const links = [
  'Did you know about this?',
  'Interesting blog post 🤔',
  'I like cats and dogs and it is a longer title.',
  'Fourth item in this list.',
];

const ExampleComponent = () => {
  const onClick = () => {};

  return (
    <ActionListTile>
      <ActionListHeader title="Useful Links" />
      <ActionListItems>
        {links.map((action, i) => (
          <ActionListItem
            key={\`\${i}-\${action}\`}
            label={action}
            description="Go to"
            iconName="open"
            onClick={onClick}
          />
        ))}
      </ActionListItems>
    </ActionListTile>
  );
};

export default ExampleComponent;
`;

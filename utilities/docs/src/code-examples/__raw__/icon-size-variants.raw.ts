export default `import * as React from 'react';
import { Icon } from '@microsoft/arbutus.icon';
import { Text } from '@microsoft/arbutus.text';
import { makeStyles } from '@griffel/react';
import { tokens } from '@fluentui/react-theme';

const useContainerStyles = makeStyles({
  root: {
    display: 'flex',
    columnGap: tokens.spacingHorizontalL,
  },
});

const ExampleComponent = () => {
  const classes = useContainerStyles();

  return (
    <div className={classes.root}>
      <Text variant="caption">
        <Icon iconName="moon" size="small" isInline />
        &ensp;Small
      </Text>
      <Text variant="caption">
        <Icon iconName="moon" isInline />
        &ensp;Medium (default)
      </Text>
      <Text variant="caption">
        <Icon iconName="moon" size="large" isInline />
        &ensp;Large
      </Text>
    </div>
  );
};

export default ExampleComponent;
`;

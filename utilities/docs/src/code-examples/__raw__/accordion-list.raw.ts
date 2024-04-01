export default `import { makeStyles } from '@griffel/react';
import { AccordionList, AccordionItem } from '@microsoft/arbutus.accordion';
import { Text } from '@microsoft/arbutus.text';
import { Tile } from '@microsoft/arbutus.tile';
import type { FC } from 'react';
import * as React from 'react';

const DemoContent: FC = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gridGap: '1rem',
    }}
  >
    <Text block as="p" variant="paragraph">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus iure iusto ipsa
      labore placeat nulla veniam. Odit possimus praesentium enim blanditiis. Quis
      quisquam esse eos amet dolore odit vel asperiores.
    </Text>
    <Tile variant="solid-color">&nbsp;</Tile>
  </div>
);

const useExampleStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '600px',
    height: '100%',
  },
});

const ExampleComponent: FC = () => {
  const classes = useExampleStyles();

  return (
    <AccordionList className={classes.root}>
      {Array.from({ length: 3 }, (_, i) => (
        <AccordionItem key={i} title={\`AccordionItem \${i + 1}\`}>
          <DemoContent />
        </AccordionItem>
      ))}
    </AccordionList>
  );
};

export default ExampleComponent;
`;

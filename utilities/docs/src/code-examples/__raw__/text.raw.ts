export default `import { tokens } from '@fluentui/react-theme';
import { makeStyles, shorthands } from '@griffel/react';
import { Divider } from '@microsoft/arbutus.divider';
import { Text } from '@microsoft/arbutus.text';
import { arbutusTokens } from '@microsoft/arbutus.theming';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import * as React from 'react';

const useExampleComponentStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '1rem',
  },
  image: {
    ...shorthands.borderRadius(arbutusTokens.shape.borderRadius),
    width: '100%',
    backgroundColor: tokens.colorNeutralBackground4,
    height: '12rem',
    marginBottom: tokens.spacingVerticalL,
  },
});

const ExampleComponent = () => {
  const classes = useExampleComponentStyles();
  const space = useSpaceStyles();

  return (
    <main>
      <Text block as="h1" variant="jumbo" className={space.my8}>
        Jumbo
      </Text>
      <Text block as="h2" variant="title" className={space.my4}>
        Title
      </Text>
      <Text block as="p" variant="leading">
        Leading Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi
        eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus
        temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit
        iusto.
      </Text>

      <Divider className={space.my8} />

      <Text block as="h3" variant="subtitle" className={space.mb2}>
        Subheading
      </Text>
      <Text block as="p" variant="leading">
        Leading Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi
        eveniet dolorum <Text variant="code">code</Text> assumenda similique a voluptas
        voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit,
        architecto optio sit iusto.
      </Text>

      <Divider className={space.my8} />

      <Text block as="h4" variant="headline" className={space.my4}>
        Headline
      </Text>
      <Text block as="p" variant="paragraph" className={space.mb8}>
        Paragraph Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        modi eveniet dolorum officiis <Text variant="code">code</Text> similique a
        voluptas voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt
        suscipit, architecto optio sit iusto.
      </Text>
      <div className={classes.grid}>
        <article>
          <div className={classes.image}>&nbsp;</div>
          <Text block variant="caption" className={space.mb2}>
            Caption
          </Text>
          <Text block variant="description">
            Description. Culpa animi labore molestiae nesciunt suscipit. Similique a
            voluptas voluptatum ducimus temporibus.
          </Text>
        </article>
        <article>
          <div className={classes.image}>&nbsp;</div>
          <Text block variant="caption" className={space.my2}>
            Caption
          </Text>
          <Text block variant="description">
            Description. Culpa animi labore molestiae nesciunt suscipit. Sit amet
            consectetur adipisicing elit. Cupiditate modi eveniet dolorum.
          </Text>
        </article>
      </div>
    </main>
  );
};

export default ExampleComponent;
`;

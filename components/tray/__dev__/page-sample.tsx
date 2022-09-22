import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { Divider } from '@microsoft/arbutus.divider';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import React from 'react';

const useGridStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '1rem',
  },
  image: {
    ...shorthands.borderRadius('var(--arbutus--shape-border-radius)'),
    width: '100%',
  },
});

export const PageSample = () => {
  const space = useSpaceStyles();
  const grid = useGridStyles();
  const imageClasses = mergeClasses(grid.image, space.mb4);

  return (
    <main className={space.pb12}>
      <Text block as="h1" variant="headline">
        Headline
      </Text>
      <Text block variant="leading">
        Leading Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate modi
        eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus
        temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit
        iusto.
      </Text>

      <Divider className={space.my8} />

      <Text block as="h2" variant="subheading">
        Subheading
      </Text>
      <Text block variant="paragraph" className={space.mb8}>
        Paragraph Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
        modi eveniet dolorum officiis assumenda similique a voluptas voluptatum ducimus
        temporibus. Culpa animi labore molestiae nesciunt suscipit, architecto optio sit
        iusto.
      </Text>

      <div className={grid.root}>
        <section>
          <img
            src="https://via.placeholder.com/300x100.png/f0f0f0"
            alt="Text demo 1"
            className={imageClasses}
          />
          <Text block as="h2" variant="caption" className={space.mb1}>
            Caption: What do you see?
          </Text>
          <Text block variant="description" color="tertiary">
            Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas
            voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit,
            architecto optio sit iusto.
          </Text>
        </section>
        <section>
          <img
            src="https://via.placeholder.com/300x100.png/f0f0f0"
            alt="Text demo 1"
            className={imageClasses}
          />
          <Text block as="h2" variant="caption" className={space.mb1}>
            Caption: What do you see?
          </Text>
          <Text block variant="description" color="tertiary">
            Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas
            voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit,
            architecto optio sit iusto.
          </Text>
        </section>
      </div>

      <Divider className={space.my12} />

      <div className={grid.root}>
        <section>
          <Text block as="h4" variant="jumbo" color="quaternary" className={space.mt4}>
            Jumbo Text
          </Text>
          <Text block variant="description" color="secondary">
            Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Cupiditate modi eveniet dolorum officiis assumenda similique a voluptas
            voluptatum ducimus temporibus. Culpa animi labore molestiae nesciunt suscipit,
            architecto optio sit iusto.
          </Text>
        </section>
        <img
          src="https://via.placeholder.com/300x100.png/f0f0f0"
          alt="Text demo 2"
          className={grid.image}
        />
      </div>
    </main>
  );
};

import * as React from 'react';
import { Link as GatsbyLink, HeadFC } from 'gatsby';
import { Text } from '@microsoft/arbutus.text';
import { Link } from '@microsoft/arbutus.link';

const NotFoundPage = () => {
  return (
    <>
      <Text as="h1" variant="headline">
        Page not found
      </Text>
      <Text variant="paragraph">
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <Link as={GatsbyLink} elementProps={{ to: '/' }} isUnderlined>
          Go home
        </Link>
        .
      </Text>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

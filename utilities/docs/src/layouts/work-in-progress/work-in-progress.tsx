import { Divider } from '@microsoft/arbutus.divider';
import { Text } from '@microsoft/arbutus.text';
import { Tile } from '@microsoft/arbutus.tile';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import { Link } from '../../components/link';
import type { WorkInProgressLayoutProps } from './work-in-progress.types';

export const WorkInProgressLayout: FC<WorkInProgressLayoutProps> = ({
  title,
  leading,
}) => {
  const space = useSpaceStyles();

  return (
    <>
      <Text block variant="jumbo" as="h1" className={space.mt8}>
        {title}
      </Text>
      {leading && (
        <Text block variant="leading" className={space.my5}>
          {leading}
        </Text>
      )}

      <Divider className={space.my11} />

      <Tile variant="solid-color" backgroundColor="warning" className={space.p12}>
        <Text block variant="title" as="h1" className={space.mt4}>
          🚧👷‍♀️ Work in progress…
        </Text>

        <Text block className={space.mt8}>
          We are working on this page. If you have any immediate questions about this
          topic, please reach out to the maintainers through{' '}
          <Link
            to="https://github.com/microsoft/blueprints/discussions/categories/q-a"
            isExternal
          >
            GitHub Discussions
          </Link>
          .
        </Text>
      </Tile>
    </>
  );
};

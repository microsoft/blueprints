import * as React from 'react';
import type { FC } from 'react';
import { Text } from '@microsoft/arbutus.text';
import { graphql, useStaticQuery } from 'gatsby';
import { Divider } from '@microsoft/arbutus.divider';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';

import { Link } from '../link';
import { useFooterStyles } from './footer.styles';

type FooterQuery = {
  footerJson: {
    primaryLinks: {
      isExternal: boolean;
      text: string;
      to: string;
    }[];
    secondaryLinks: {
      isExternal: boolean;
      text: string;
      to: string;
    }[];
  };
};

const getFooterContent = (data?: FooterQuery) => ({
  primaryLinks: data?.footerJson?.primaryLinks ?? [],
  secondaryLinks: data?.footerJson?.secondaryLinks ?? []
});

export const Footer: FC = () => {
  const classes = useFooterStyles();
  const space = useSpaceStyles();

  const data = useStaticQuery<FooterQuery>(graphql`
    query FooterQuery {
      footerJson(_layout: {eq: "footer"}) {
        primaryLinks {
          isExternal
          text
          to
        }
        secondaryLinks {
          isExternal
          text
          to
        }
      }
    }
  `);

  const { primaryLinks, secondaryLinks } = getFooterContent(data);

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.links}>
          {primaryLinks.map(({ to, text, isExternal }, index) => (
            <Link key={`${to}${index}`} variant="caption" to={to} isExternal={isExternal}>
              {text}
            </Link>
          ))}
        </div>
      </div>
      <Divider className={space.my6} />
      <div className={classes.root}>
        <div className={classes.links}>
          {secondaryLinks.map(({ to, text, isExternal }, index) => (
            <Link key={`${to}${index}`} variant="secondary" to={to} isExternal={isExternal}>
              {text}
            </Link>
          ))}
          <Text color="secondary">© Microsoft {new Date().getFullYear()}</Text>
        </div>
      </div>
    </div>
  );
};

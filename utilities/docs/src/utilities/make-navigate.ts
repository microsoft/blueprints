import { navigate } from 'gatsby';
import { type SyntheticEvent } from 'react';

const handleNavigation = async ({
  isExternal,
  to,
}: {
  isExternal: boolean;
  to: string;
}) => (isExternal ? window.open(to, '_blank') : await navigate(to));

export const makeNavigate =
  ({ to, isExternal }: { to: string; isExternal: boolean }) =>
  (e: SyntheticEvent<Element, Event> | undefined) => {
    e?.preventDefault();

    handleNavigation({ isExternal, to }).catch((error) => {
      process?.env?.NODE_ENV === 'development'
        ? console.error(error)
        : console.error('Something went wrong with navigation.');
    });
  };

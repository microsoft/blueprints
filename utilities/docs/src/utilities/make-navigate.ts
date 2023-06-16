import { navigate } from 'gatsby';

export const makeNavigate = (to?: string, isExternal?: boolean) => () => {
  if (!to || isExternal === undefined) {
    return;
  }

  return isExternal ? window.open(to, '_blank') : navigate(to);
};

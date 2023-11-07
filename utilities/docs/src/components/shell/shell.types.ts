import type { PageProps } from 'gatsby';
import type { ReactNode } from 'react';

/**
 * @description ShellProps is a type that extends the PageProps type from Gatsby and adds a children property. Shell is
 * used in Gatsby browser and SSR configs to wrap the page component. `wrapPageElement` is used in Gatsby browser and
 * SSR configs to wrap page component in Shell. It passes PageProps to the Shell component, but unlike Gatsby
 * pages, Shell does indeed have children, so we are removing the children property set to `undefined` from PageProps
 * and adding it to ShellProps as ReactNode.
 */
export type ShellProps = Omit<PageProps, 'children'> & { children: ReactNode };

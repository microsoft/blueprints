import type {
  QuickResourceCopyTextProps,
  QuickResourceLinkProps,
} from '../components/quick-resource';
import type { BasicLayoutProps } from '../layouts/basic';
import type { ReferenceLayoutProps } from '../layouts/reference';
import type { WorkInProgressLayoutProps } from '../layouts/work-in-progress';
import type { JsonPageData } from '../pages/{PagesJson._path}';

/**
 * Detects if an array has duplicate values. This utility is used to detect if there are multiple page files with the
 * same path. We cannot generate pages with the same path, so we need to detect this and throw an error.
 * @param arrayOfPaths An array of paths to check for duplicates.
 * @returns A boolean indicating if there are duplicates.
 * @example
 * ```ts
 * const arrayOfPaths = [
 *  '/components/atoms/button',
 *  '/components/atoms/link',
 *  '/components/atoms/button',
 * ];
 *
 * hasDuplicates(arrayOfPaths); // returns true
 * ```
 */

export function findDuplicates(arrayOfPaths: string[]) {
  const duplicates: string[] = [];
  const uniqueValues = new Set();

  for (const value of arrayOfPaths) {
    if (uniqueValues.has(value)) {
      duplicates.push(value);
    } else {
      uniqueValues.add(value);
    }
  }

  return { hasDuplicates: duplicates.length > 0, duplicates };
}

function removeNullProperties<T>(obj: T) {
  const newObj = { ...obj };

  for (const key in newObj) {
    if (newObj[key] === null) {
      delete newObj[key];
    }
  }

  return newObj;
}

type FormatDataToPropsReturnValue =
  | {
      key: 'basic';
      props: BasicLayoutProps;
    }
  | {
      key: 'reference';
      props: ReferenceLayoutProps;
    }
  | {
      key: 'work-in-progress';
      props: WorkInProgressLayoutProps;
    }
  | Record<string, never>;

export function formatDataToProps({
  pagesJson: data,
}: JsonPageData): FormatDataToPropsReturnValue {
  const { _layout } = data;

  if (_layout === 'basic') {
    return {
      key: 'basic',
      props: {
        title: data.title,
        leading: data.leading,
        heroImage: {
          alt: data.heroImage?.alt,
          src: {
            childImageSharp: data.heroImage?.src?.childImageSharp,
            publicURL: data.heroImage?.src?.publicURL,
          },
        },
        content: data.content ?? [],
      } as BasicLayoutProps,
    };
  }

  if (_layout === 'reference') {
    const { quickResources = [] } = data;

    const formattedQuickResources = quickResources?.map((resource) =>
      removeNullProperties<QuickResourceCopyTextProps | QuickResourceLinkProps>(resource),
    );

    return {
      key: 'reference',
      props: {
        title: data.title,
        definition: data.definition,
        quickResources: formattedQuickResources,
        owners: data.owners ?? [],
        tabs: data.tabs ?? [],
      } as ReferenceLayoutProps,
    };
  }

  if (_layout === 'work-in-progress') {
    return {
      key: 'work-in-progress',
      props: {
        title: data.title,
        leading: data.leading,
      } as WorkInProgressLayoutProps,
    };
  }

  return {};
}

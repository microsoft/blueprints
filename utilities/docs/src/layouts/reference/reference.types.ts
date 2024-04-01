import type { ComponentData } from '../../components/component-renderer';
import type { QuickResourceProps } from '../../components/quick-resource';

type Contributor = {
  firstName: string;
  lastName?: string;
  role: string;
  alias?: string;
  avatar?: {
    alternativeText: string;
    url: string;
  };
};

export type ReferenceLayoutProps = {
  title: string;
  definition: string;
  quickResources: QuickResourceProps['data'][];
  owners: Contributor[];
  tabs:
    | {
        tab: string;
        content?: ComponentData[];
      }[]
    | [];
};

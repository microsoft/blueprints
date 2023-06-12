import { ComponentData } from "../../components/component-renderer";

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
  packageName: string;
  owners: Contributor[];
  tabs: {
    tab: string;
    content?: ComponentData[];
  }[] | [];
};
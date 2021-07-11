export interface IProjectInformation {
  title: string;
  url?: string;
  description: string;
  tags: FilterType[];
  image?: string;
  github?: string;
}

export enum FilterType {
  All,
  Frontend,
  Backend,
  Hardware
}

export interface IPost {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  tags: Array<string>;
}
export interface IFilter {
  tags: Array<string>;
  tagselected: string;
  search: string;
}

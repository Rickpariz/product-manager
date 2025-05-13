export type Pagination = {
  current: number;
  pageSize: number;
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
};

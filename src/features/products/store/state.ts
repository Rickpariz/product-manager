import { ProductStore } from "./types";

export const initialProductState: Omit<
  ProductStore,
  | "fetchProducts"
  | "addProduct"
  | "reset"
  | "setPage"
  | "setPageSize"
  | "setFilters"
> = {
  products: [],
  filters: {
    search: "",
    price_range: {},
    sort: "name",
    order: "asc",
  },
  loading: false,
  error: null,
  pagination: {
    current: 1,
    pageSize: 10,
    first: 1,
    prev: null,
    next: null,
    last: 1,
    pages: 1,
    items: 0,
  },
};

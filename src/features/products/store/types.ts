import { Pagination } from "@/types/pagination";
import { Product } from "@/types/product";

export type ResetParams = {
  list?: Product[];
  pagination?: Pagination;
};

type ProductFilters = {
  search: string;
  price_range: {
    start?: number;
    end?: number;
  };
  sort?: string;
  order?: string;
};

export type ProductStore = {
  products: Product[];
  filters: ProductFilters | null;
  loading: boolean;
  error: string | null;
  pagination: Pagination;

  fetchProducts: () => Promise<void>;
  addProduct: (product: Product) => void;
  reset: (params: ResetParams) => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  setFilters: (filters: Partial<ProductFilters>) => void;
};

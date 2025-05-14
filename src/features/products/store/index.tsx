import { create } from "zustand";
import { Product } from "@/types/product";
import { getProductsService } from "@/services/products/get-products.service";
import { Pagination } from "@/types/pagination";

type ResetParams = {
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

type ProductStore = {
  products: Product[];
  filters: ProductFilters | null;
  loading: boolean;
  error: string | null;
  pagination: Pagination;

  fetchProducts: () => Promise<void>;
  reset: (params: ResetParams) => void;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
  setFilters: (filters: Partial<ProductFilters>) => void;
};

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  filters: {
    search: "",
    price_range: {
      start: undefined,
      end: undefined,
    },
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

  fetchProducts: async () => {
    const { pagination, filters } = get();

    set({ loading: true, error: null });

    try {
      const result = await getProductsService({
        page: pagination.current,
        pageSize: pagination.pageSize,
        search: filters?.search,
        price_range: filters?.price_range,
        sort: filters?.sort,
        order: filters?.order,
      });

      set({
        products: result.products,
        pagination: result.pagination,
        loading: false,
      });
    } catch {
      set({ error: "Ocorreu um erro ao buscar os produtos", loading: false });
    }
  },

  setFilters: (newFilters) =>
    set((state) => ({
      filters: {
        ...state.filters,
        ...newFilters,
        search: newFilters.search ?? state.filters?.search ?? "",
        price_range: {
          ...(state.filters?.price_range || {}),
          ...(newFilters.price_range || {}),
        },
      },
    })),

  reset: (params) =>
    set({
      products: params.list || [],
      pagination: params.pagination,
      loading: false,
      error: null,
    }),

  setPage: (page) => {
    set((state) => ({
      ...state,
      pagination: {
        ...state.pagination,
        current: page,
      },
    }));
  },

  setPageSize: (size) => {
    set((state) => ({
      ...state,
      pagination: {
        ...state.pagination,
        current: 1,
        pageSize: size,
      },
    }));
  },
}));

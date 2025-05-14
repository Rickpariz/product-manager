import { create } from "zustand";
import { getProductsService } from "@/services/products/get-products.service";
import { ProductStore } from "./types";
import { initialProductState } from "./state";

export const useProductStore = create<ProductStore>((set, get) => ({
  ...initialProductState,

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

  addProduct: (product) => {
    set((state) => ({
      products: [product, ...state.products],
      pagination: {
        ...state.pagination,
        items: state.pagination.items + 1,
      },
    }));
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

import { create } from "zustand";

type ProductFilters = {
  search: string;
  price_range: {
    start?: number;
    end?: number;
  };
  sort?: string;
};

type FilterStore = {
  filters: ProductFilters;
  setFilters: (filters: Partial<ProductFilters>) => void;
  resetFilters: () => void;
};

export const useProductFilters = create<FilterStore>((set) => ({
  filters: {
    search: "",
    price_range: {},
    sort: undefined,
  },

  setFilters: (newFilters) =>
    set((state) => ({
      filters: {
        ...state.filters,
        ...newFilters,
        price_range: {
          ...state.filters.price_range,
          ...(newFilters.price_range || {}),
        },
      },
    })),

  resetFilters: () =>
    set({
      filters: {
        search: "",
        price_range: {},
        sort: undefined,
      },
    }),
}));

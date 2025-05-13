import { create } from "zustand";
import { Product } from "@/types/product";
import { getProductsService } from "@/services/products/get-products.service";
import { useProductFilters } from "../../product-filters/store";
import { Pagination } from "@/types/pagination";

type ProductListStore = {
  products: Product[];
  loading: boolean;
  error: string | null;
  pagination: Pagination | null;
  page: number;

  fetchProducts: (page?: number) => Promise<void>;
  reset: () => void;
};

export const useProductList = create<ProductListStore>((set) => ({
  products: [],
  loading: false,
  error: null,
  pagination: null,
  page: 1,

  fetchProducts: async (page = 1) => {
    const { filters } = useProductFilters.getState();

    set({ loading: true, error: null });

    try {
      const result = await getProductsService({
        page,
        search: filters.search,
        price_range: filters.price_range,
        sort: filters.sort,
      });

      set({
        products: result.products,
        pagination: result.pagination,
        page,
        loading: false,
      });
    } catch {
      set({ error: "Ocorreu um erro ao buscar os produtos", loading: false });
    }
  },

  reset: () =>
    set({
      products: [],
      pagination: null,
      page: 1,
      loading: false,
      error: null,
    }),
}));

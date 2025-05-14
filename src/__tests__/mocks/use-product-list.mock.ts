import { vi } from "vitest";
import { useProductList } from "@/features/products/product-list/hooks/use-product-list.hook";

export const mockUseProductList = (
  override: Partial<ReturnType<typeof useProductList>> = {}
) => ({
  loading: false,
  products: [],
  pagination: {
    current: 1,
    pageSize: 10,
    first: 1,
    last: 1,
    next: null,
    prev: null,
    pages: 1,
    items: 0,
  },
  setPage: vi.fn(),
  setPageSize: vi.fn(),
  ...override,
});

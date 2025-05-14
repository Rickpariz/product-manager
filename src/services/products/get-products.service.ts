import { Pagination } from "@/types/pagination";
import { Product } from "@/types/product";

export type ProductFilterDTO = {
  page?: number;
  pageSize?: number;
  search?: string;
  price_range?: {
    start?: number;
    end?: number;
  };
  sort?: string;
  order?: string;
};

export type ProductApiResponse = Product[];

export type ProductResult = {
  products: Product[];
  pagination: Pagination;
};

export async function getProductsService(
  filters: ProductFilterDTO = { page: 1 }
): Promise<ProductResult> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const query = buildQueryParams(filters);
  const url = `http://localhost:3333/products?${query}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  const total = Number(response.headers.get("X-Total-Count") || 0);
  const products: ProductApiResponse = await response.json();

  const currentPage = filters.page || 1;
  const pageSize = filters.pageSize || 10;
  const totalPages = Math.ceil(total / pageSize);

  return {
    products,
    pagination: {
      current: currentPage,
      pageSize: pageSize,
      first: 1,
      prev: currentPage > 1 ? currentPage - 1 : null,
      next: currentPage < totalPages ? currentPage + 1 : null,
      last: totalPages,
      pages: totalPages,
      items: total,
    },
  };
}

function buildQueryParams(filters: ProductFilterDTO): string {
  const params = new URLSearchParams();

  if (filters.page) params.set("_page", filters.page.toString());
  if (filters.pageSize) params.set("_limit", filters.pageSize.toString());

  if (filters.search) params.set("q", filters.search);
  if (filters.sort) params.set("_sort", filters.sort);
  if (filters.order) params.set("_order", filters.order);

  if (filters.price_range?.start !== undefined)
    params.set("price_gte", filters.price_range.start.toString());

  if (filters.price_range?.end !== undefined)
    params.set("price_lte", filters.price_range.end.toString());

  return params.toString();
}

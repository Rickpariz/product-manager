import { Pagination } from "@/types/pagination";
import { Product } from "@/types/product";

export type ProductFilterDTO = {
  page?: number;
  search?: string;
  price_range?: {
    start?: number;
    end?: number;
  };
  sort?: string;
};

export type ProductApiResponse = Pagination & {
  data: Product[];
};

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

  const json: ProductApiResponse = await response.json();

  console.log("Response from API:", json);
  return {
    products: json.data,
    pagination: {
      first: json.first,
      prev: json.prev,
      next: json.next,
      last: json.last,
      pages: json.pages,
      items: json.items,
    },
  };
}

function buildQueryParams(filters: ProductFilterDTO): string {
  const params = new URLSearchParams();

  if (filters.page) params.set("_page", filters.page.toString());
  if (filters.search) params.set("search", filters.search);
  if (filters.sort) params.set("sort", filters.sort);

  if (filters.price_range?.start !== undefined)
    params.set("price_range_start", filters.price_range.start.toString());

  if (filters.price_range?.end !== undefined)
    params.set("price_range_end", filters.price_range.end.toString());

  return params.toString();
}

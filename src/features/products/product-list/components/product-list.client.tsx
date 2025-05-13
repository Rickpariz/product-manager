"use client";

import ProductCard from "./product-card";
import { useProductList } from "../store";
import { useEffect } from "react";
import { ProductListPagination } from "./product-list-pagination";
import { ProductResult } from "@/services/products/get-products.service";
import ProductListSkeleton from "./product-list-skeleton";

type Props = { initialState: ProductResult };

export default function ProductListClient({ initialState }: Props) {
  const { products, reset, loading } = useProductList();

  useEffect(() => {
    reset({
      list: initialState.products,
      pagination: initialState.pagination,
    });
  }, [initialState, reset]);

  return (
    <div className="mt-4">
      {loading ? (
        <ProductListSkeleton />
      ) : products.length > 0 ? (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <ProductListPagination />
        </div>
      ) : (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-500">Nenhum produto encontrado.</p>
        </div>
      )}
    </div>
  );
}

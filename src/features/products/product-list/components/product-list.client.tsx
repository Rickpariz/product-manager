"use client";

import { useProductList } from "../hooks/use-product-list.hook";
import { Pagination } from "@/components/ui/pagination";
import { ProductListSkeleton } from "./product-list-skeleton";
import { ProductCard } from "./product-card";

export function ProductListClient() {
  const { products, pagination, loading, setPage, setPageSize } =
    useProductList();

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

          <Pagination
            pagination={pagination}
            setPage={setPage}
            setPageSize={setPageSize}
          />
        </div>
      ) : (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-500">Nenhum produto encontrado.</p>
        </div>
      )}
    </div>
  );
}

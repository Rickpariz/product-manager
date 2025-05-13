import { Header } from "@/components/layout/header";
import ProductFilters from "@/features/products/product-filters";
import ProductList from "@/features/products/product-list";
import ProductListSkeleton from "@/features/products/product-list/loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <ProductFilters />
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
    </>
  );
}

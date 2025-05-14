import { Header } from "@/components/layout/header";
import { ProductFilters } from "@/features/products/product-filters";
import { ProductListClient } from "@/features/products/product-list";

export default function Home() {
  return (
    <>
      <Header />
      <ProductFilters />
      <ProductListClient />
    </>
  );
}

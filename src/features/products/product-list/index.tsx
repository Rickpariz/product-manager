import { getProductsService } from "@/services/products/get-products.service";
import ProductListClient from "./components/product-list.client";

export default async function ProductList() {
  const products = await getProductsService();

  return <ProductListClient initialState={products} />;
}

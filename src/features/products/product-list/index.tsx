import { getProductsService } from "@/services/products/get-products.service";
import ProductCard from "./components/product-card";

export default async function ProductList() {
  const { products } = await getProductsService();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-500">
            Nenhum produto encontrado.
          </p>
        </div>
      )}
    </div>
  );
}

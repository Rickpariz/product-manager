import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-xl border overflow-hidden h-full flex flex-col">
      <div className="flex p-4 h-full items-center">
        <div className="relative h-24 w-24 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col ml-4 flex-grow">
          <h3 className="font-medium text-lg text-gray-800">{product.name}</h3>

          <p className="text-gray-500 text-sm line-clamp-2 mb-2">
            {product.description}
          </p>
          <Badge variant="outline">{product.category}</Badge>

          <span className="text-green-500 font-bold mt-2">
            R${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

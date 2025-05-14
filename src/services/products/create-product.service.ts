import { delay } from "@/lib/delay";
import { Product } from "@/types/product";

export async function createProductService(product: Product): Promise<Product> {
  await delay(1000);

  const url = `http://localhost:3333/products`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar criar produto");
  }

  return response.json();
}

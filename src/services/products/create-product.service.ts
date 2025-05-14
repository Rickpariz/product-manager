import { API_URL } from "@/lib/api";
import { delay } from "@/lib/delay";
import { Product } from "@/types/product";

export async function createProductService(product: Product): Promise<Product> {
  await delay(1000);

  const response = await fetch(`${API_URL}/products`, {
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

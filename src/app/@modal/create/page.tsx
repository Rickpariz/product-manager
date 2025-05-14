"use client";

import { useRouter } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import ProductForm from "@/features/products/product-form";

export default function CreateProduct() {
  const router = useRouter();

  return (
    <Sheet defaultOpen onOpenChange={() => router.back()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Criar novo produto</SheetTitle>
          <SheetDescription>
            Crie um novo produto para o seu catálogo. Você pode adicionar
            informações como nome, descrição, preço e imagens.
          </SheetDescription>
        </SheetHeader>
        <div className="px-4 py-2">
          <ProductForm />
        </div>
      </SheetContent>
    </Sheet>
  );
}

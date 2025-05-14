import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { createProductService } from "@/services/products/create-product.service";
import { toast } from "sonner";
import { useProductStore } from "../../store";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  category: z
    .string()
    .min(2, { message: "Categoria deve ter pelo menos 2 caracteres" }),
  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Preço deve ser um número positivo",
  }),
  description: z
    .string()
    .min(5, { message: "Descrição deve ter pelo menos 5 caracteres" }),
  image: z
    .string()
    .url({ message: "URL inválida" })
    .optional()
    .or(z.literal("")),
});

export type ProductForm = z.infer<typeof formSchema>;

export const useProductForm = () => {
  const router = useRouter();
  const [isLoading, startTransition] = useTransition();
  const { addProduct } = useProductStore();

  const form = useForm<ProductForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      price: "",
      description: "",
      image: "",
    },
  });

  const onSubmit = async (data: ProductForm) => {
    startTransition(async () => {
      try {
        const product = await createProductService({
          id: crypto.randomUUID(),
          ...data,
          price: Number(data.price),
        });

        addProduct(product);
        toast.success("Produto criado com sucesso");
        router.back();
      } catch {
        toast.error("Ocorreu um erro ao criar o produto, tente novamente");
      }
    });
  };

  return {
    form,
    onSubmit,
    isLoading,
  };
};

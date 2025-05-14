export const formatCurrency = (value: string) => {
  const numericValue = Number(value.replace(/\D/g, "")) / 100;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numericValue);
};

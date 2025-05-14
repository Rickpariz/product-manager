import { useEffect } from "react";
import { useProductStore } from "../../store";

export const useProductList = () => {
  const {
    products,
    pagination,
    filters,
    loading,
    fetchProducts,
    setPage,
    setPageSize,
  } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [filters, pagination.current, pagination.pageSize, fetchProducts]);

  return {
    products,
    loading,

    setPage,
    pagination,
    setPageSize,
  };
};

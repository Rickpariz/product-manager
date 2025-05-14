import { useDebouncedCallback } from "use-debounce";
import { useProductStore } from "../../store";

export const useProductFilters = () => {
  const { filters, setFilters } = useProductStore();

  const onSearch = useDebouncedCallback((e) => {
    setFilters({
      search: e.target.value,
    });
  }, 500);

  return {
    filters,
    setFilters,
    onSearch,
  };
};

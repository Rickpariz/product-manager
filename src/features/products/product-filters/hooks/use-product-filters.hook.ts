import { useDebouncedCallback } from "use-debounce";
import { useProductStore } from "../../store";

export const SORT_OPTIONS = {
  "name-asc": { sort: "name", order: "asc" },
  "name-desc": { sort: "name", order: "desc" },
  "price-asc": { sort: "price", order: "asc" },
  "price-desc": { sort: "price", order: "desc" },
} as const;

type SortKey = keyof typeof SORT_OPTIONS;

export const useProductFilters = () => {
  const { filters, setFilters } = useProductStore();

  const onSearch = useDebouncedCallback((e) => {
    setFilters({
      search: e.target.value,
    });
  }, 500);

  const onPriceRangeChange = useDebouncedCallback((range: [number, number]) => {
    setFilters({
      price_range: {
        start: range[0],
        end: range[1],
      },
    });
  }, 500);

  const onSortChange = (value: string) => {
    const { sort, order } = SORT_OPTIONS[value as SortKey];

    setFilters({
      sort,
      order,
    });
  };

  return {
    filters,
    onPriceRangeChange,
    onSortChange,
    onSearch,
  };
};

"use client";

import { useProductFilters } from "./hooks/use-product-filters.hook";
import { PriceRange } from "./components/price-range";
import { Sorting } from "./components/sorting";
import { SearchInput } from "./components/search";

export function ProductFilters() {
  const { onSearch, onPriceRangeChange, onSortChange } = useProductFilters();

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-10 border rounded-2xl p-4 justify-between md:justify-start items-center">
      <SearchInput onSearch={onSearch} />
      <PriceRange onChange={onPriceRangeChange} />
      <Sorting onChange={onSortChange} />
    </div>
  );
}

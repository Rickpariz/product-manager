"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProductFilters } from "./hooks/use-product-filters.hook";
import { PriceRange } from "./components/price-range";
import { Search } from "lucide-react";
import { Sorting } from "./components/sorting";

export function ProductFilters() {
  const { onSearch, onPriceRangeChange, onSortChange } = useProductFilters();

  return (
    <div className="flex gap-4 mt-10 border rounded-2xl p-4 justify-between items-center">
      <div className="space-y-1">
        <Label htmlFor="search" className="text-sm font-medium">
          Busca de produtos
        </Label>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            id="search"
            type="search"
            placeholder="Buscar por nome..."
            className="pl-8 w-full"
            onChange={onSearch}
          />
        </div>
      </div>
      <div>
        <PriceRange onChange={onPriceRangeChange} />
      </div>
      <div>
        <Sorting onChange={onSortChange} />
      </div>
    </div>
  );
}

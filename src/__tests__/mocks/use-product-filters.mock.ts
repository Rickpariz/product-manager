import { vi } from "vitest";

export const mockUseProductFilters = () => ({
  onSearch: vi.fn(),
  onPriceRangeChange: vi.fn(),
  onSortChange: vi.fn(),
});

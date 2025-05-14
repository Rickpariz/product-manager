import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { act } from "react";
import { mockUseProductFilters } from "../mocks/use-product-filters.mock";
import { mockUseProductList } from "../mocks/use-product-list.mock";
import { productMock } from "../mocks/product.mock";

afterEach(() => {
  vi.resetModules();
});

vi.mock(
  "@/features/products/product-filters/hooks/use-product-filters.hook",
  () => ({ useProductFilters: mockUseProductFilters })
);

const renderHomePage = async (override = {}) => {
  vi.doMock(
    "@/features/products/product-list/hooks/use-product-list.hook",
    () => ({ useProductList: () => mockUseProductList(override) })
  );

  const { default: Home } = await import("@/app/page");

  await act(async () => {
    render(<Home />);
  });
};

describe("Home page", () => {
  it("renders loading state correctly with skeleton", async () => {
    await renderHomePage({ loading: true });

    const skeletons = document.querySelectorAll('[data-slot="skeleton"]');

    expect(skeletons.length).toBeGreaterThan(0);
  });

  it("renders 'No products found' message correctly when there are no products", async () => {
    await renderHomePage({ products: [] });

    const noProductsMessage = await screen.findByText(
      "Nenhum produto encontrado."
    );
    expect(noProductsMessage).toBeInTheDocument();
    expect(document.body).toMatchSnapshot();
  });

  it("renders product card correctly when there are products", async () => {
    await renderHomePage({
      products: [productMock],
    });

    const productCard = await screen.findByRole("article");
    expect(productCard).toBeInTheDocument();

    expect(screen.getByText(productMock.name)).toBeInTheDocument();
    expect(document.body).toMatchSnapshot();
  });

  it("renders loading state correctly with skeleton snapshot", async () => {
    await renderHomePage({ loading: true });
    expect(document.body).toMatchSnapshot();
  });

  it("renders 'No products found' message correctly when there are no products snapshot", async () => {
    await renderHomePage({ products: [] });
    expect(document.body).toMatchSnapshot();
  });

  it("renders product card correctly when there are products snapshot", async () => {
    await renderHomePage({
      products: [productMock],
    });

    expect(document.body).toMatchSnapshot();
  });
});

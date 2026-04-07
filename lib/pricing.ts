export type ProductPricing = {
  price: number;
  compareAtPrice?: number;
};

export function hasValidDiscount(price: number, compareAtPrice?: number): boolean {
  return typeof compareAtPrice === "number" && compareAtPrice > price;
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("zh-TW", {
    style: "currency",
    currency: "TWD",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace("$", "NT$");
}

export function getPricingDisplay(pricing: ProductPricing) {
  // 僅在 compareAtPrice 大於現價時顯示刪線價，避免顛倒價格層級。
  const showCompareAt = hasValidDiscount(pricing.price, pricing.compareAtPrice);

  return {
    priceText: formatCurrency(pricing.price),
    compareAtPriceText: showCompareAt ? formatCurrency(pricing.compareAtPrice as number) : null,
    showCompareAt,
  };
}

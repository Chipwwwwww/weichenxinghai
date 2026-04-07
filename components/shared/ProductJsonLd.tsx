import { hasValidDiscount } from "@/lib/pricing";

type ProductEntry = {
  name: string;
  description: string;
  image: string;
  price: number;
  compareAtPrice?: number;
};

type ProductJsonLdProps = {
  products: readonly ProductEntry[];
};

export function ProductJsonLd({ products }: ProductJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": products.map((product) => ({
      "@type": "Product",
      name: product.name,
      description: product.description,
      image: product.image,
      offers: {
        "@type": "Offer",
        priceCurrency: "TWD",
        price: product.price,
        availability: "https://schema.org/InStock",
        ...(hasValidDiscount(product.price, product.compareAtPrice)
          ? {
              priceSpecification: [
                {
                  "@type": "UnitPriceSpecification",
                  priceCurrency: "TWD",
                  price: product.price,
                },
                {
                  "@type": "UnitPriceSpecification",
                  priceCurrency: "TWD",
                  price: product.compareAtPrice,
                  priceType: "https://schema.org/ListPrice",
                },
              ],
            }
          : {}),
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

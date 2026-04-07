import { getPricingDisplay } from "@/lib/pricing";

type PriceDisplayProps = {
  price: number;
  compareAtPrice?: number;
  className?: string;
};

export function PriceDisplay({ price, compareAtPrice, className }: PriceDisplayProps) {
  const { priceText, compareAtPriceText } = getPricingDisplay({ price, compareAtPrice });

  return (
    <p className={className}>
      <span className="text-2xl font-semibold tracking-tight text-brand-deep">{priceText}</span>
      {compareAtPriceText ? <span className="ml-2 text-base text-brand-slate/65 line-through">{compareAtPriceText}</span> : null}
    </p>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { getProductById } from "@/data/brandContent";
import { PriceDisplay } from "@/components/shared/PriceDisplay";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="grid gap-8 rounded-3xl border border-brand-teal/15 bg-white p-6 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f3f4ef]">
          <Image src={product.image} alt={product.name} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-[0.12em] text-brand-teal">{product.tagline}</p>
          <h1 className="text-4xl font-semibold text-brand-deep">{product.name}</h1>
          <p className="text-lg text-brand-slate">{product.subtitle}</p>
          <p className="text-base leading-8 text-brand-slate">{product.description}</p>
          <PriceDisplay price={product.price} compareAtPrice={product.compareAtPrice} className="pt-1" />
          <ul className="space-y-2 text-base text-brand-slate">
            {product.bullets.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <div className="pt-2 flex flex-wrap gap-3">
            <AddToCartButton productId={product.id} />
            <Link href="/cart" className="tap-target inline-flex rounded-full border-2 border-brand-teal px-5 py-3 text-base font-semibold text-brand-teal">
              立即查看購物車
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { ProductJsonLd } from "@/components/shared/ProductJsonLd";
import { products } from "@/data/brandContent";

const sceneTags = ["可自用也可送人", "長輩友善", "禮盒體面", "日常陪伴"] as const;

export const metadata: Metadata = {
  title: "看看商品與禮盒",
  description: "三款商品：禪意日常玻璃杯禮盒、禪意香氛杯禮盒、小型桌面型空氣清新機｜完整禮盒版。",
};

export default function ShopPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <ProductJsonLd products={products} />
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h1 className="text-4xl font-semibold text-brand-deep sm:text-5xl">看看商品與禮盒</h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-brand-slate">
          我們目前提供三款商品：禪意日常玻璃杯禮盒、禪意香氛杯禮盒、小型桌面型空氣清新機｜完整禮盒版。
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {sceneTags.map((tag) => (
            <span key={tag} className="rounded-full border border-brand-teal/25 bg-[#fcfbf7] px-3 py-2 text-base text-brand-slate">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        {products.map((product) => (
          <article key={product.id} className="flex h-full flex-col overflow-hidden rounded-3xl border border-brand-teal/15 bg-white shadow-[0_10px_30px_rgba(16,34,36,0.05)]">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#f3f4ef]">
              <Image src={product.image} alt={product.name} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" fill sizes="(max-width: 1024px) 100vw, 33vw" />
            </div>
            <div className="flex h-full flex-col space-y-4 p-6">
              <p className="text-sm font-semibold tracking-[0.12em] text-brand-teal">{product.tagline}</p>
              <h2 className="text-2xl font-semibold text-brand-deep">{product.name}</h2>
              <p className="text-base text-brand-slate">{product.subtitle}</p>
              <p className="text-base leading-8 text-brand-slate">{product.description}</p>
              <PriceDisplay price={product.price} compareAtPrice={product.compareAtPrice} className="pt-1" />
              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                <AddToCartButton productId={product.id} />
                <Link href={`/shop/${product.id}`} className="tap-target inline-flex rounded-full border-2 border-brand-teal px-5 py-3 text-base font-semibold text-brand-teal">
                  查看商品頁
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

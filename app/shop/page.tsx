import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/brandContent";

export const metadata: Metadata = {
  title: "品牌選品",
  description: "微塵星海三款生活選品：扭扭杯、桌面清淨器與空性香境杯。",
};

export default function ShopPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-brand-deep">品牌選品</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-brand-slate">
        以平安、祝福與淨感為核心，從器物設計、香氣陪伴到空間氛圍，整理出可日常使用也適合送禮的三款選品。
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article key={product.id} className="overflow-hidden rounded-3xl border border-brand-teal/10 bg-white">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#f3f4ef]">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4 p-6">
              <h2 className="text-xl font-semibold text-brand-deep">{product.name}</h2>
              <p className="text-sm font-medium text-brand-teal">{product.tagline}</p>
              <p className="text-sm leading-7 text-brand-slate">{product.description}</p>
              <ul className="space-y-2 text-sm text-brand-slate">
                {product.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              <p className="text-xs text-brand-slate">{product.useCases}</p>
              <button
                type="button"
                className="rounded-full border border-brand-teal px-5 py-2 text-sm font-medium text-brand-teal transition hover:bg-brand-teal hover:text-white"
              >
                {product.cta}
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-brand-gold/40 bg-[#fffdf8] p-5 text-sm leading-7 text-brand-slate">
        所有商品文案僅描述設計靈感、外觀材質、使用情境與空間氛圍，不涉及醫療療效或未經證實之功能聲稱。
      </div>

      <Link href="/" className="mt-8 inline-flex text-sm font-medium text-brand-teal hover:text-[#1f5a54]">
        返回首頁，查看品牌理念與 FAQ
      </Link>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { ProductJsonLd } from "@/components/shared/ProductJsonLd";
import { products, ritualItems } from "@/data/brandContent";
import { siteConfig } from "@/data/siteConfig";

const sceneTags = ["可自用也可送人", "長輩友善", "禮盒體面", "日常陪伴"] as const;

export const metadata: Metadata = {
  title: "看看禪意選品",
  description: "禪意日常玻璃杯、小型桌面型空氣清新機、禪意香氛杯：三條商品線命名與語氣一致，支援自用與送禮情境。",
};

export default function ShopPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <ProductJsonLd products={products} />
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h1 className="text-4xl font-semibold text-brand-deep sm:text-5xl">看看禪意選品</h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-brand-slate">
          我們目前提供三條主線：禪意日常玻璃杯、小型桌面型空氣清新機、禪意香氛杯。
          文案聚焦設計方向、外觀、使用情境、空間氛圍與送禮意義，協助你快速看懂再選擇。
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
          <article
            key={product.id}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-brand-teal/15 bg-white shadow-[0_10px_30px_rgba(16,34,36,0.05)] transition hover:-translate-y-0.5"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#f3f4ef]">
              <Image
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="flex h-full flex-col space-y-4 p-6">
              <p className="text-sm font-semibold tracking-[0.12em] text-brand-teal">{product.tagline}</p>
              <h2 className="text-2xl font-semibold text-brand-deep">{product.name}</h2>
              <p className="text-base text-brand-slate">{product.subtitle}</p>
              <p className="text-base leading-8 text-brand-slate">{product.description}</p>
              <PriceDisplay price={product.price} compareAtPrice={product.compareAtPrice} className="pt-1" />
              <ul className="space-y-2 rounded-2xl border border-brand-teal/15 bg-[#fcfbf7] px-4 py-3 text-base leading-8 text-brand-slate">
                <li>{product.specs}</li>
                <li>{product.placement}</li>
                <li>{product.audience}</li>
                <li>{product.usage}</li>
              </ul>
              <p className="rounded-2xl border border-brand-gold/35 bg-[#fffdf8] px-4 py-3 text-base leading-8 text-brand-slate">{product.useCases}</p>
              <a
                href={siteConfig.lineBlessingUrl}
                target="_blank"
                rel="noreferrer"
                className="tap-target mt-auto inline-flex rounded-full border-2 border-brand-teal px-5 py-3 text-base font-semibold text-brand-teal transition hover:bg-brand-teal hover:text-white"
              >
                {product.cta}
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-6 sm:p-8">
        <h2 className="text-3xl font-semibold text-brand-deep">祝福儀式物 / 隨身祝福系統</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {ritualItems.map((item) => (
            <div key={item} className="rounded-xl border border-brand-teal/20 bg-white px-4 py-4 text-base leading-8 text-brand-slate">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-brand-teal/15 bg-white p-6 text-base leading-8 text-brand-slate">
        我們目前以「官網介紹 + 加入 LINE 領今日祝福」承接需求。全站商品敘述僅描述設計、外觀、使用情境、空間氛圍與送禮意義。
      </section>

      <section className="mt-8 flex flex-wrap gap-4">
        <a
          href={siteConfig.lineBlessingUrl}
          target="_blank"
          rel="noreferrer"
          className="tap-target rounded-full bg-brand-teal px-6 py-3 text-base font-semibold text-white"
        >
          {siteConfig.cta.askLine}
        </a>
        <a
          href={siteConfig.lineBlessingUrl}
          target="_blank"
          rel="noreferrer"
          className="tap-target rounded-full border-2 border-brand-gold/70 bg-white px-6 py-3 text-base font-semibold text-brand-deep"
        >
          {siteConfig.cta.notifyLine}
        </a>
        <Link href="/about" className="tap-target inline-flex items-center text-base font-semibold text-brand-teal hover:text-[#1f5a54]">
          了解微塵星海 →
        </Link>
      </section>
    </div>
  );
}

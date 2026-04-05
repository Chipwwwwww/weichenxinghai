import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products, shopCollections } from "@/data/brandContent";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "選品",
  description: "微塵星海選品頁：香氛靜心空間、祝福儀式物與心意送禮，皆可透過 LINE 進一步詢問。",
};

export default function ShopPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-brand-deep">選品頁（持續上新中）</h1>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-brand-slate">
        這裡是微塵星海的需求承接頁。先看使用情境與風格方向，再透過 LINE 詢問細節、開賣時間與通知方式。
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {shopCollections.map((collection) => (
          <article key={collection.title} className="rounded-2xl border border-brand-teal/10 bg-white p-5">
            <h2 className="text-xl font-semibold text-brand-deep">{collection.title}</h2>
            <p className="mt-2 text-sm leading-7 text-brand-slate">{collection.description}</p>
            <p className="mt-2 text-xs text-brand-slate">{collection.scenario}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article key={product.id} className="overflow-hidden rounded-3xl border border-brand-teal/10 bg-white">
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
            <div className="space-y-4 p-6">
              <h2 className="text-xl font-semibold text-brand-deep">{product.name}</h2>
              <p className="text-sm font-medium text-brand-teal">{product.tagline}</p>
              <p className="text-sm leading-7 text-brand-slate">{product.description}</p>
              <ul className="space-y-2 text-sm text-brand-slate">
                {product.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              <p className="text-xs text-brand-slate">{product.useCase}</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={siteConfig.lineOaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-brand-teal px-4 py-2 text-xs font-medium text-brand-teal transition hover:bg-brand-teal hover:text-white"
                >
                  {siteConfig.cta.askLine}
                </a>
                <a
                  href={siteConfig.lineOaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-brand-gold/50 bg-[#fffdf8] px-4 py-2 text-xs font-medium text-brand-deep transition hover:bg-brand-gold/15"
                >
                  {siteConfig.cta.notifyLine}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-brand-gold/40 bg-[#fffdf8] p-5 text-sm leading-7 text-brand-slate">
        商品頁目前提供選品承接與詢問入口。物流、付款與正式售後政策將於完整上線時公布，現階段請以 LINE 回覆資訊為準。
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={siteConfig.lineOaUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-brand-teal px-5 py-2 text-sm font-medium text-white"
        >
          {siteConfig.cta.joinLine}
        </a>
        <Link href="/about" className="inline-flex items-center text-sm font-medium text-brand-teal hover:text-[#1f5a54]">
          先認識品牌故事 →
        </Link>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products, ritualItems } from "@/data/brandContent";
import { siteConfig } from "@/data/siteConfig";

const sceneTags = [
  "自用陪伴",
  "送禮心意",
  "家人 / 長輩 / 朋友",
  "書桌 / 床頭 / 玄關 / 靜心角落",
] as const;

export const metadata: Metadata = {
  title: "祝福選品",
  description: "微塵星海祝福選品承接頁：把平安、祝福與日常儀式，延伸到真實生活場景。",
};

export default function ShopPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/10 bg-white p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-brand-deep sm:text-4xl">祝福選品承接頁</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-brand-slate sm:text-base">
          這裡不是假購物車，而是把微塵星海的祝福主題，延伸到你每天會使用、也願意送給重要之人的器物。
          每一件選品都對應平安、陪伴與日常儀式場景。
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {sceneTags.map((tag) => (
            <span key={tag} className="rounded-full border border-brand-teal/20 bg-[#fcfbf7] px-3 py-1 text-xs text-brand-slate">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        {products.map((product) => (
          <article key={product.id} className="overflow-hidden rounded-3xl border border-brand-teal/10 bg-white shadow-[0_10px_30px_rgba(16,34,36,0.05)] transition hover:-translate-y-0.5">
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
              <p className="text-xs tracking-[0.16em] text-brand-teal">{product.tagline}</p>
              <h2 className="text-xl font-semibold text-brand-deep">{product.name}</h2>
              <p className="text-sm leading-7 text-brand-slate">{product.description}</p>
              <ul className="space-y-2 text-sm text-brand-slate">
                {product.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              <p className="rounded-2xl border border-brand-teal/10 bg-[#fcfbf7] px-4 py-3 text-xs leading-6 text-brand-slate">{product.useCases}</p>
              <a
                href={siteConfig.lineOaUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-brand-teal px-5 py-2 text-sm font-medium text-brand-teal transition hover:bg-brand-teal hover:text-white"
              >
                {product.cta}
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-3xl border border-brand-gold/35 bg-[#fffdf8] p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-brand-deep">祝福儀式物（延伸）</h2>
        <p className="mt-3 text-sm leading-7 text-brand-slate sm:text-base">
          它不是普通卡片，而是把祝福落地的日常媒介：能抽、能收、能送，也能陪你度過平凡的一天。
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {ritualItems.map((item) => (
            <div key={item} className="rounded-xl border border-brand-teal/15 bg-white px-4 py-4 text-sm leading-7 text-brand-slate">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-brand-teal/10 bg-white p-5 text-sm leading-7 text-brand-slate sm:p-6">
        我們目前以「官網介紹 + LINE 詢問」承接需求，不提供假結帳流程。
        所有文案僅描述設計靈感、外觀材質、使用情境與空間氛圍，不涉及醫療療效或未經證實之功能聲稱。
      </section>

      <section className="mt-8 flex flex-wrap gap-4">
        <a
          href={siteConfig.lineOaUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-brand-teal px-5 py-2 text-sm font-medium text-white"
        >
          {siteConfig.cta.askLine}
        </a>
        <a
          href={siteConfig.lineOaUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-brand-gold/60 bg-white px-5 py-2 text-sm font-medium text-brand-deep"
        >
          {siteConfig.cta.notifyLine}
        </a>
        <Link href="/about" className="inline-flex items-center text-sm font-medium text-brand-teal hover:text-[#1f5a54]">
          先了解品牌理念 →
        </Link>
      </section>
    </div>
  );
}

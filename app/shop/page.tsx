import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products, ritualItems } from "@/data/brandContent";
import { siteConfig } from "@/data/siteConfig";

const sceneTags = ["自用陪伴", "送禮心意", "家人 / 長輩 / 朋友", "書桌 / 床頭 / 玄關 / 靜心角落"] as const;

export const metadata: Metadata = {
  title: "祝福選品",
  description: "保留情境感與品牌質地，同時清楚呈現微塵星海選品的價格、規格、用途與適合對象。",
};

export default function ShopPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h1 className="text-4xl font-semibold text-brand-deep sm:text-5xl">祝福選品：把心意留在可看見的日常裡</h1>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-brand-slate">
          這裡保留微塵星海原本的情境感，也把資訊寫得更清楚：價格、規格、適合誰、適合放哪裡，
          讓你先看懂，再決定是否用 LINE 詢問。
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
          <article key={product.id} className="overflow-hidden rounded-3xl border border-brand-teal/15 bg-white shadow-[0_10px_30px_rgba(16,34,36,0.05)] transition hover:-translate-y-0.5">
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
              <p className="text-sm font-semibold tracking-[0.12em] text-brand-teal">{product.tagline}</p>
              <h2 className="text-2xl font-semibold text-brand-deep">{product.name}</h2>
              <p className="text-base text-brand-slate">{product.subtitle}</p>
              <p className="text-base leading-8 text-brand-slate">{product.description}</p>
              <ul className="space-y-2 rounded-2xl border border-brand-teal/15 bg-[#fcfbf7] px-4 py-3 text-base leading-8 text-brand-slate">
                <li>{product.price}</li>
                <li>{product.specs}</li>
                <li>{product.placement}</li>
                <li>{product.audience}</li>
                <li>{product.usage}</li>
              </ul>
              <p className="rounded-2xl border border-brand-gold/35 bg-[#fffdf8] px-4 py-3 text-base leading-8 text-brand-slate">{product.useCases}</p>
              <a
                href={siteConfig.lineOaUrl}
                target="_blank"
                rel="noreferrer"
                className="tap-target inline-flex rounded-full border-2 border-brand-teal px-5 py-3 text-base font-semibold text-brand-teal transition hover:bg-brand-teal hover:text-white"
              >
                {product.cta}
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-6 sm:p-8">
        <h2 className="text-3xl font-semibold text-brand-deep">祝福儀式物（延伸）</h2>
        <p className="mt-3 text-lg leading-8 text-brand-slate">它不是普通卡片，而是把祝福落地的日常媒介：能抽、能收、能送，也能陪你度過平凡的一天。</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {ritualItems.map((item) => (
            <div key={item} className="rounded-xl border border-brand-teal/20 bg-white px-4 py-4 text-base leading-8 text-brand-slate">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-brand-teal/15 bg-white p-6 text-base leading-8 text-brand-slate">
        我們目前以「官網介紹 + LINE 詢問」承接需求，不提供假結帳流程。所有文案僅描述設計靈感、外觀材質、使用情境與空間氛圍，不涉及醫療療效或未經證實之功能聲稱。
      </section>

      <section className="mt-8 flex flex-wrap gap-4">
        <a
          href={siteConfig.lineOaUrl}
          target="_blank"
          rel="noreferrer"
          className="tap-target rounded-full bg-brand-teal px-6 py-3 text-base font-semibold text-white"
        >
          {siteConfig.cta.askLine}
        </a>
        <a
          href={siteConfig.lineOaUrl}
          target="_blank"
          rel="noreferrer"
          className="tap-target rounded-full border-2 border-brand-gold/70 bg-white px-6 py-3 text-base font-semibold text-brand-deep"
        >
          {siteConfig.cta.notifyLine}
        </a>
        <Link href="/about" className="tap-target inline-flex items-center text-base font-semibold text-brand-teal hover:text-[#1f5a54]">
          先了解品牌理念 →
        </Link>
      </section>
    </div>
  );
}

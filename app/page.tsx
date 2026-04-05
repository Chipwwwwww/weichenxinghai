import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brandAssets, faqItems, products } from "@/data/brandContent";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "首頁",
  description: "微塵星海把祝福、平安與陪伴，轉為日常可分享的生活選品與靜心內容。",
};

const values = [
  {
    title: "平安",
    short: "把心安落在日常節奏。",
    detail:
      "我們相信平安不只是一個願望，也能是一句問候、一張平安圖，或一個讓你願意慢下來的生活片刻。",
  },
  {
    title: "祝福",
    short: "把心意送到重要的人身邊。",
    detail:
      "微塵星海把想說卻不容易說出口的關心，變成可分享、可傳遞、也能陪伴生活的日常形式。",
  },
  {
    title: "淨感",
    short: "讓空間更清爽，也更容易停留。",
    detail:
      "從桌面、玄關到床邊角落，以香氣、器物與設計語言，打造柔和有序的生活氛圍。",
  },
] as const;

const trustItems = [
  "台灣出貨與客服回覆資訊透明",
  "文案聚焦材質、設計與使用情境",
  "新品與開賣通知統一由 LINE 提供",
  "先理解品牌，再決定是否詢問與收藏",
] as const;

export default function HomePage() {
  return (
    <div className="bg-brand-ivory text-brand-ink">
      <section className="border-b border-brand-teal/10 bg-gradient-to-b from-brand-ivory to-[#f4f4ef]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div className="space-y-6">
            <p className="text-sm tracking-[0.22em] text-brand-teal">微塵星海 WEICHEN XINGHAI</p>
            <h1 className="text-3xl font-semibold leading-tight text-brand-deep sm:text-5xl">
              把祝福，
              <br />
              變成每天都能傳遞的日常。
            </h1>
            <p className="max-w-xl text-base leading-7 text-brand-slate sm:text-lg">
              微塵星海結合每日祝福、靜心內容與禪意生活選品，讓一句平安、一份香氣、一個更舒服的空間，
              都成為陪伴自己與家人的日常方式。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="rounded-full bg-brand-teal px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f5a54]"
              >
                查看選品
              </Link>
              <a
                href={siteConfig.lineOaUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-brand-gold/60 bg-white px-6 py-3 text-sm font-medium text-brand-deep transition hover:bg-brand-gold/15"
              >
                {siteConfig.cta.joinLine}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-brand-teal/15 bg-white p-6 shadow-[0_20px_60px_rgba(16,34,36,0.08)]">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f7f7f2]">
              <Image
                src={brandAssets.logoWordmark}
                alt="微塵星海品牌識別"
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-contain p-6"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
            <p className="mt-4 text-sm leading-6 text-brand-slate">
              願你心安，也願你把這份平安送給重要的人。
              <br />
              從一念祝福，到一份陪伴生活的安定。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-brand-teal/10 bg-white p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-2xl border border-brand-gold/40 bg-[#f9f6ea] p-3 sm:p-4 md:p-5">
            <Image
              src={brandAssets.logoMark}
              alt="微塵星海祝福流轉理念圖"
              loading="lazy"
              decoding="async"
              className="block h-auto w-full object-contain"
              width={900}
              height={900}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-brand-deep">品牌理念</h2>
            <p className="text-base leading-7 text-brand-slate">
              微塵星海不是在賣神秘功效，而是在把祈願、平安與陪伴，轉成日常可感知的生活形式。
            </p>
            <p className="text-base leading-7 text-brand-slate">
              平安不一定是宏大的願望，也可以是一張圖片、一句話、一份香氣，或一個更舒服的空間。
              我們希望把想送給家人朋友的心意，慢慢變成看得見、分享得出去、也陪伴生活的日常。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-brand-deep">三大價值</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-2xl border border-brand-teal/10 bg-white p-6">
              <h3 className="text-2xl font-semibold text-brand-teal">{value.title}</h3>
              <p className="mt-3 text-sm font-medium text-brand-deep">{value.short}</p>
              <p className="mt-4 text-sm leading-7 text-brand-slate">{value.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-brand-deep">精選商品</h2>
            <p className="mt-2 text-sm text-brand-slate">三款以禪意設計、香氣陪伴與空間淨感為核心的生活選品。</p>
          </div>
          <Link href="/shop" className="text-sm font-medium text-brand-teal hover:text-[#1f5a54]">
            查看完整商品頁
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
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
                <p className="text-xs tracking-[0.16em] text-brand-teal">{product.tagline}</p>
                <h3 className="text-xl font-semibold text-brand-deep">{product.name}</h3>
                <p className="text-sm leading-7 text-brand-slate">{product.description}</p>
                <ul className="space-y-2 text-sm text-brand-slate">
                  {product.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
                <p className="text-xs text-brand-slate">{product.useCases}</p>
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
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-8">
          <h2 className="text-3xl font-semibold text-brand-deep">安心與常見問題</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item} className="rounded-xl border border-brand-teal/15 bg-white px-4 py-3 text-sm text-brand-slate">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            {faqItems.map((item) => (
              <details key={item.q} className="rounded-2xl border border-brand-teal/10 bg-white px-5 py-4">
                <summary className="cursor-pointer text-sm font-medium text-brand-deep">{item.q}</summary>
                <p className="pt-3 text-sm leading-7 text-brand-slate">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

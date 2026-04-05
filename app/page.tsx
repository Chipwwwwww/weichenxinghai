import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  blessingFlow,
  blessingPreview,
  brandAssets,
  faqItems,
  products,
  ritualItems,
  trustItems,
} from "@/data/brandContent";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "首頁",
  description: "微塵星海品牌母站：承接理念、LINE 每日祝福、祝福選品與日常陪伴閉環。",
};

export default function HomePage() {
  return (
    <div className="bg-brand-ivory text-brand-ink">
      <section className="border-b border-brand-teal/10 bg-gradient-to-b from-brand-ivory to-[#f4f4ef]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
          <div className="space-y-6">
            <p className="text-sm tracking-[0.22em] text-brand-teal">微塵星海 WEICHEN XINGHAI</p>
            <h1 className="text-3xl font-semibold leading-tight text-brand-deep sm:text-5xl">
              把祝福，
              <br />
              變成每天都能傳遞的日常。
            </h1>
            <p className="max-w-xl text-base leading-7 text-brand-slate sm:text-lg">
              微塵星海是一個把「平安圖、靜心小語、祝福傳遞」與「陪伴型生活選品」連成一體的品牌母站。
              你可以先從 LINE 收下今日祝福，再把心意送給重要的人，最後讓祝福留在生活場景裡。
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={siteConfig.lineOaUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brand-teal px-6 py-3 text-sm font-medium text-white transition hover:bg-[#1f5a54]"
              >
                {siteConfig.cta.joinLine}
              </a>
              <Link
                href="/shop"
                className="rounded-full border border-brand-gold/60 bg-white px-6 py-3 text-sm font-medium text-brand-deep transition hover:bg-brand-gold/15"
              >
                {siteConfig.cta.exploreShop}
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-brand-teal/12 bg-white p-5 shadow-[0_16px_40px_rgba(16,34,36,0.06)] sm:p-6">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-[#f7f7f2]">
              <Image
                src={brandAssets.brandWordmark}
                alt="微塵星海品牌識別"
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-contain p-6"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
            <p className="mt-4 text-sm leading-6 text-brand-slate">
              官網承接品牌理念與選品，LINE 承接每日祝福與通知。
              <br />
              讓祝福從一句話，慢慢變成可被分享、可被收藏、可被日常看見的陪伴。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-brand-teal/10 bg-white p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-2xl border border-brand-gold/35 bg-[#f7f5eb] p-4 sm:p-5 md:p-6">
            <Image
              src={brandAssets.philosophyImage}
              alt="微塵星海祝福流轉理念圖"
              loading="lazy"
              decoding="async"
              className="block h-auto w-full object-contain"
              width={900}
              height={900}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-deep sm:text-3xl">品牌理念 / 世界觀</h2>
            <p className="text-base leading-7 text-brand-slate">
              微塵星海不是在販售神秘功效，而是把祝福、平安與陪伴，轉成可被日常感知的形式。
            </p>
            <p className="text-base leading-7 text-brand-slate">
              一張每日平安圖、一句靜心小語、一件讓空間更安定的器物，都可以是你照顧自己與他人的方式。
              我們想做的，是讓祝福流動起來，而不是停留在口號。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <div className="rounded-3xl border border-brand-teal/10 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-brand-deep sm:text-3xl">祝福如何在微塵星海流動</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-brand-slate sm:text-base">
            不是硬性的轉化流程，而是一條自然、可長期持續的陪伴路徑。
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {blessingFlow.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-brand-teal/10 bg-[#fcfbf7] p-5 shadow-[0_4px_18px_rgba(16,34,36,0.03)]">
                <p className="text-xs tracking-[0.16em] text-brand-teal">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-brand-deep">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <div className="grid gap-6 rounded-3xl border border-brand-gold/35 bg-[#fffdf8] p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs tracking-[0.16em] text-brand-teal">DAILY BLESSING PREVIEW</p>
            <h2 className="mt-2 text-2xl font-semibold text-brand-deep sm:text-3xl">每日祝福體驗預覽</h2>
            <p className="mt-4 text-sm leading-7 text-brand-slate sm:text-base">
              你會在 LINE 看到平安圖、靜心小語與祝福互動。這裡先展示體驗節奏，幫你快速理解內容樣貌。
            </p>
            <p className="mt-4 text-xs text-brand-slate">{blessingPreview.disclaimer}</p>
          </div>

          <div className="space-y-4">
            <article className="rounded-2xl border border-brand-teal/15 bg-white p-5">
              <p className="text-xs tracking-[0.14em] text-brand-teal">{blessingPreview.peaceImageTitle}</p>
              <p className="mt-2 text-sm leading-7 text-brand-slate">{blessingPreview.peaceImageDescription}</p>
            </article>
            <article className="rounded-2xl border border-brand-teal/15 bg-white p-5">
              <p className="text-xs tracking-[0.14em] text-brand-teal">今日靜心小語</p>
              <p className="mt-2 text-sm leading-7 text-brand-slate">{blessingPreview.quote}</p>
            </article>
            <article className="rounded-2xl border border-brand-teal/15 bg-white p-5">
              <p className="text-xs tracking-[0.14em] text-brand-teal">傳遞 / 點亮祝福</p>
              <p className="mt-2 text-sm leading-7 text-brand-slate">{blessingPreview.sharePrompt}</p>
              <ul className="mt-3 space-y-2 text-sm text-brand-slate">
                {blessingPreview.lightBlessings.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <h2 className="text-2xl font-semibold text-brand-deep sm:text-3xl">精選選品｜把祝福留在生活場景</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-brand-slate sm:text-base">
          保留真實商品圖，依照自用、送禮與空間情境，整理成可被理解與延伸的陪伴型選品。
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
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
                <h3 className="text-xl font-semibold text-brand-deep">{product.name}</h3>
                <p className="text-sm leading-7 text-brand-slate">{product.description}</p>
                <ul className="space-y-2 text-sm text-brand-slate">
                  {product.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
                <p className="text-xs leading-6 text-brand-slate">{product.useCases}</p>
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

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <div className="rounded-3xl border border-brand-gold/35 bg-[#fffdf8] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-brand-deep sm:text-3xl">祝福儀式物</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-brand-slate sm:text-base">
            它不是普通文創卡，而是讓祝福可以被抽取、收藏、送出與看見的日常儀式設計。
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {ritualItems.map((item) => (
              <div key={item} className="rounded-xl border border-brand-teal/15 bg-white px-4 py-4 text-sm leading-7 text-brand-slate">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <div className="rounded-3xl border border-brand-teal/10 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-brand-deep sm:text-3xl">信任與常見問題</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item} className="rounded-xl border border-brand-teal/15 bg-[#fcfbf7] px-4 py-3 text-sm leading-7 text-brand-slate">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            {faqItems.map((item) => (
              <details key={item.q} className="rounded-2xl border border-brand-teal/10 bg-[#fefefd] px-5 py-4">
                <summary className="cursor-pointer text-sm font-medium leading-6 text-brand-deep">{item.q}</summary>
                <p className="pt-3 text-sm leading-7 text-brand-slate">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

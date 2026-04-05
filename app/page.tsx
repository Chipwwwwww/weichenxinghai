import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  brandAssets,
  dailyBlessingPreview,
  faqItems,
  homeSteps,
  homeTrustItems,
  products,
  ritualMoments,
} from "@/data/brandContent";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "首頁",
  description: "微塵星海官網：認識品牌、預覽每日祝福體驗，並加入 LINE 展開日常陪伴。",
};

export default function HomePage() {
  return (
    <div className="bg-brand-ivory text-brand-ink">
      <section className="border-b border-brand-teal/10 bg-gradient-to-b from-brand-ivory to-[#f3f4ef]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div className="space-y-6">
            <p className="text-sm tracking-[0.22em] text-brand-teal">微塵星海 WEICHEN XINGHAI</p>
            <h1 className="text-4xl font-semibold leading-tight text-brand-deep sm:text-5xl">
              把祝福，
              <br />
              變成每天都能傳遞的日常。
            </h1>
            <p className="max-w-xl text-base leading-7 text-brand-slate sm:text-lg">
              先在官網理解品牌與選品，再到 LINE 領取今日平安圖與靜心小語。你也可以把祝福轉給想照顧的人，
              讓心意真的流動起來。
            </p>
            <div className="flex flex-wrap gap-3">
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
            <ul className="mt-4 space-y-2 text-sm text-brand-slate">
              <li>• 每日祝福：平安圖＋靜心小語</li>
              <li>• 祝福互動：可收藏、可分享、可點亮</li>
              <li>• 選品承接：把陪伴感帶進你的空間</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-brand-deep">三步驟開始微塵星海</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {homeSteps.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-brand-teal/10 bg-white p-6">
              <p className="text-sm font-medium text-brand-teal">STEP {index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold text-brand-deep">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-slate">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-brand-teal/10 bg-white p-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-brand-deep">每日祝福體驗預覽</h2>
            <p className="text-sm leading-7 text-brand-slate">
              以下為體驗示意，實際內容會在 LINE 官方帳號每日更新，不提供即時社群數據承諾。
            </p>
            <div className="rounded-2xl border border-brand-gold/35 bg-[#fffdf8] p-5">
              <p className="text-xs tracking-[0.15em] text-brand-teal">{dailyBlessingPreview.imageTitle}</p>
              <p className="mt-2 text-lg font-semibold text-brand-deep">{dailyBlessingPreview.imageSubtitle}</p>
            </div>
            <blockquote className="rounded-2xl border border-brand-teal/10 bg-[#f6f8f7] p-5 text-sm leading-7 text-brand-slate">
              {dailyBlessingPreview.quote}
            </blockquote>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-brand-teal/10 bg-[#f9fbfa] p-5">
              <p className="text-sm font-medium text-brand-deep">{dailyBlessingPreview.sharePrompt}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {dailyBlessingPreview.blessingOptions.map((option) => (
                  <span key={option} className="rounded-full border border-brand-teal/20 px-3 py-1 text-xs text-brand-slate">
                    {option}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-brand-teal/10 bg-white p-5">
              <p className="text-sm font-medium text-brand-deep">看看大家近期點亮的祝福（示意）</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {dailyBlessingPreview.litExamples.map((example) => (
                  <span key={example} className="rounded-full bg-brand-teal/10 px-3 py-1 text-xs text-brand-teal">
                    {example}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-xs leading-6 text-brand-slate">{dailyBlessingPreview.communityNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-teal/10 bg-white p-8">
          <h2 className="text-3xl font-semibold text-brand-deep">我們做的不是神效，而是可持續的陪伴</h2>
          <p className="mt-3 text-sm leading-7 text-brand-slate">
            微塵星海不做神秘保證，也不販售焦慮。我們把祝福、空間與送禮心意做成可被使用的日常：一張卡、一句話、一件器物。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/about" className="text-sm font-medium text-brand-teal hover:text-[#1f5a54]">
              {siteConfig.cta.learnBrand} →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-brand-deep">祝福儀式物，讓心意被看見</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ritualMoments.map((item) => (
            <article key={item.title} className="rounded-2xl border border-brand-teal/10 bg-white p-5">
              <h3 className="text-lg font-semibold text-brand-deep">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-brand-slate">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-brand-deep">精選選品</h2>
            <p className="mt-2 text-sm text-brand-slate">選出能放進日常的陪伴型選品，先了解，再決定是否加入開賣通知。</p>
          </div>
          <Link href="/shop" className="text-sm font-medium text-brand-teal hover:text-[#1f5a54]">
            查看完整選品頁
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
                <p className="text-xs text-brand-slate">{product.useCase}</p>
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
          <h2 className="text-3xl font-semibold text-brand-deep">信任與常見問題</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {homeTrustItems.map((item) => (
              <article key={item.q} className="rounded-xl border border-brand-teal/15 bg-white px-4 py-4">
                <h3 className="text-sm font-medium text-brand-deep">{item.q}</h3>
                <p className="mt-2 text-sm leading-7 text-brand-slate">{item.a}</p>
              </article>
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

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-deep p-8 text-brand-ivory">
          <h2 className="text-3xl font-semibold">今天就把第一份祝福收下來</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#d0d8d7]">
            加入 LINE 後，先領取今日平安圖與靜心小語；再從你喜歡的方式開始：收藏、分享，或點亮一份祝福。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={siteConfig.lineOaUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-gold px-6 py-3 text-sm font-medium text-[#2d2207] transition hover:brightness-105"
            >
              {siteConfig.cta.joinLine}
            </a>
            <Link
              href="/shop"
              className="rounded-full border border-white/35 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              先看選品，再決定是否詢問
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

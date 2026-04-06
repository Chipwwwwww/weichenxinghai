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
  description: "微塵星海品牌母站：保留溫潤美感與祝福節奏，同時提供清楚可讀的 LINE 承接與選品資訊。",
};

export default function HomePage() {
  return (
    <div className="bg-brand-ivory text-brand-ink">
      <section className="border-b border-brand-teal/15 bg-gradient-to-b from-brand-ivory to-[#f3f2eb]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <div className="space-y-6">
            <p className="text-base font-medium tracking-[0.14em] text-brand-teal">微塵星海 WEICHEN XINGHAI</p>
            <h1 className="text-4xl font-semibold leading-tight text-brand-deep sm:text-5xl">
              把祝福，
              <br />
              變成每天都能傳遞的日常。
            </h1>
            <p className="max-w-xl text-lg leading-8 text-brand-slate">
              你可以先從 LINE 收下一張平安圖與一句靜心小語，
              再把這份關心轉給家人、朋友與長輩。當你想把祝福留得更久，
              也能在這裡挑到適合自用與送禮的生活選品。
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={siteConfig.lineOaUrl}
                target="_blank"
                rel="noreferrer"
                className="tap-target rounded-full bg-brand-teal px-7 py-3 text-lg font-semibold text-white transition hover:bg-[#1f5953]"
              >
                {siteConfig.cta.joinLine}
              </a>
              <Link
                href="/shop"
                className="tap-target rounded-full border-2 border-brand-gold/80 bg-white px-7 py-3 text-lg font-semibold text-brand-deep transition hover:bg-brand-gold/15"
              >
                {siteConfig.cta.exploreShop}
              </Link>
            </div>
            <p className="text-base text-brand-slate">初次使用也不複雜：點擊加入後即可開始收到每日祝福。</p>
          </div>

          <div className="rounded-3xl border border-brand-teal/15 bg-white p-5 shadow-[0_16px_40px_rgba(16,34,36,0.06)] sm:p-6">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-[#f8f7f1]">
              <Image
                src={brandAssets.brandWordmark}
                alt="微塵星海品牌識別"
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-contain p-4 sm:p-6"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
              />
            </div>
            <p className="mt-4 text-base leading-8 text-brand-slate">
              官網承接品牌世界觀與選品，LINE 承接每日祝福與客服詢問。
              <br />
              從接收、分享到日常陪伴，形成一條溫柔但清楚的路徑。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="mx-auto flex w-full max-w-[700px] items-center justify-center overflow-hidden rounded-2xl border border-brand-gold/45 bg-[#f7f5eb] p-4 sm:p-6">
            <div className="w-full max-w-[620px]">
              <Image
                src={brandAssets.philosophyDiagram}
                alt="微塵星海祝福流轉理念圖"
                loading="lazy"
                decoding="async"
                className="block h-auto w-full object-contain"
                width={900}
                height={900}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-brand-deep">品牌理念 / 世界觀</h2>
            <p className="text-lg leading-8 text-brand-slate">
              微塵星海不是在販售神秘功效，而是把平安、關心與陪伴，轉成可被日常感知的形式。
            </p>
            <p className="text-lg leading-8 text-brand-slate">
              一張平安圖、一句靜心小語、一件讓空間更安定的器物，都可以是你照顧自己與他人的方式。
              我們希望祝福可以流動，而不是停留在口號。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <div className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
          <h2 className="text-3xl font-semibold text-brand-deep">祝福如何在微塵星海流動</h2>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-brand-slate">四個步驟，清楚好懂，也保留原本緩慢安定的節奏。</p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {blessingFlow.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-brand-teal/15 bg-[#fcfbf7] p-5 shadow-[0_4px_18px_rgba(16,34,36,0.03)]">
                <p className="text-sm font-semibold tracking-[0.12em] text-brand-teal">步驟 0{index + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold text-brand-deep">{item.title}</h3>
                <p className="mt-3 text-base leading-8 text-brand-slate">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <div className="grid gap-6 rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.12em] text-brand-teal">DAILY BLESSING PREVIEW</p>
            <h2 className="mt-2 text-3xl font-semibold text-brand-deep">每日祝福體驗預覽</h2>
            <p className="mt-4 text-lg leading-8 text-brand-slate">
              加入 LINE 後，你會看到平安圖、靜心小語與可分享的祝福內容。以下先讓你感受實際節奏。
            </p>
            <p className="mt-4 text-base text-brand-slate">{blessingPreview.disclaimer}</p>
          </div>

          <div className="space-y-4">
            <article className="rounded-2xl border border-brand-teal/20 bg-white p-5">
              <p className="text-sm font-semibold tracking-[0.1em] text-brand-teal">{blessingPreview.peaceImageTitle}</p>
              <p className="mt-2 text-base leading-8 text-brand-slate">{blessingPreview.peaceImageDescription}</p>
            </article>
            <article className="rounded-2xl border border-brand-teal/20 bg-white p-5">
              <p className="text-sm font-semibold tracking-[0.1em] text-brand-teal">今日靜心小語</p>
              <p className="mt-2 text-base leading-8 text-brand-slate">{blessingPreview.quote}</p>
            </article>
            <article className="rounded-2xl border border-brand-teal/20 bg-white p-5">
              <p className="text-sm font-semibold tracking-[0.1em] text-brand-teal">傳遞 / 點亮祝福</p>
              <p className="mt-2 text-base leading-8 text-brand-slate">{blessingPreview.sharePrompt}</p>
              <ul className="mt-3 space-y-2 text-base text-brand-slate">
                {blessingPreview.lightBlessings.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <h2 className="text-3xl font-semibold text-brand-deep">精選選品｜看得懂規格，也看得到生活情境</h2>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-brand-slate">
          保留真實商品圖，並把價格、規格、適合對象寫清楚，讓你在溫柔氛圍中仍能安心判斷。
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-3xl border border-brand-teal/15 bg-white shadow-[0_10px_30px_rgba(16,34,36,0.06)] transition hover:-translate-y-0.5">
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
                <h3 className="text-2xl font-semibold text-brand-deep">{product.name}</h3>
                <p className="text-base text-brand-slate">{product.subtitle}</p>
                <p className="text-base leading-8 text-brand-slate">{product.description}</p>
                <ul className="space-y-2 text-base text-brand-slate">
                  <li>• {product.price}</li>
                  <li>• {product.specs}</li>
                  <li>• {product.placement}</li>
                  <li>• {product.audience}</li>
                  <li>• {product.usage}</li>
                </ul>
                <p className="rounded-2xl border border-brand-teal/15 bg-[#fcfbf7] px-4 py-3 text-base leading-8 text-brand-slate">{product.useCases}</p>
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
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <div className="rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-6 sm:p-8">
          <h2 className="text-3xl font-semibold text-brand-deep">祝福儀式物</h2>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-brand-slate">
            它不是普通文創卡，而是讓祝福可以被抽取、收藏、送出與看見的日常儀式設計。
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {ritualItems.map((item) => (
              <div key={item} className="rounded-xl border border-brand-teal/20 bg-white px-4 py-4 text-base leading-8 text-brand-slate">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <div className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
          <h2 className="text-3xl font-semibold text-brand-deep">信任資訊與常見問題</h2>
          <p className="mt-3 text-lg leading-8 text-brand-slate">我們把品牌分工、客服方式與文案原則都寫清楚，讓你看得懂也放心。</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item} className="rounded-xl border border-brand-teal/20 bg-[#fcfbf7] px-4 py-3 text-base leading-8 text-brand-slate">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            {faqItems.map((item, index) => (
              <details key={item.q} open={index === 0} className="rounded-2xl border border-brand-teal/15 bg-[#fefefd] px-5 py-4">
                <summary className="tap-target cursor-pointer text-lg font-semibold leading-8 text-brand-deep">{item.q}</summary>
                <p className="pt-3 text-base leading-8 text-brand-slate">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

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
  description: "微塵星海：每天從 LINE 收到平安圖與靜心小語，也能查看適合自用與送禮的生活選品。",
};

export default function HomePage() {
  return (
    <div className="bg-brand-ivory text-brand-ink">
      <section className="border-b border-brand-teal/15 bg-gradient-to-b from-brand-ivory to-[#f4f4ef]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-20">
          <div className="space-y-6">
            <p className="text-base font-medium tracking-[0.12em] text-brand-teal">微塵星海 WEICHEN XINGHAI</p>
            <h1 className="text-4xl font-semibold leading-tight text-brand-deep sm:text-5xl">
              每天 LINE 領一張平安圖，
              <br />
              再把祝福傳給家人朋友。
            </h1>
            <p className="max-w-xl text-lg leading-8 text-brand-slate">
              這裡是微塵星海。加入 LINE 後，你每天都會收到平安圖與一句靜心小語；
              也可以把祝福轉傳給家人、朋友、長輩。看完今日祝福後，再來挑選適合自用或送禮的生活選品。
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={siteConfig.lineOaUrl}
                target="_blank"
                rel="noreferrer"
                className="tap-target rounded-full bg-brand-teal px-7 py-3 text-lg font-semibold text-white transition hover:bg-[#184e48]"
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
            <p className="text-base font-medium text-brand-slate">點擊後即可用 LINE 收到每日平安圖與靜心小語。</p>
          </div>

          <div className="rounded-3xl border border-brand-teal/20 bg-white p-5 shadow-[0_16px_40px_rgba(16,34,36,0.07)] sm:p-6">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-[#f7f7f2]">
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
              官網讓你先看懂品牌與商品，LINE 讓你每天都收得到祝福。
              <br />
              流程很簡單：加入 LINE → 收祝福 → 分享祝福 → 再挑選合適商品。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8 lg:grid-cols-1">
          <div className="mx-auto flex w-full max-w-[720px] items-center justify-center overflow-hidden rounded-2xl border border-brand-gold/45 bg-[#f7f5eb] p-4 sm:p-6">
            <div className="w-full max-w-[640px]">
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
            <h2 className="text-3xl font-semibold text-brand-deep">這個網站在做什麼？</h2>
            <p className="text-lg leading-8 text-brand-slate">
              我們每天透過 LINE 傳送平安圖與靜心小語，讓你在忙碌生活裡有一個短暫安定時刻。
            </p>
            <p className="text-lg leading-8 text-brand-slate">
              如果你覺得這份內容適合家人朋友，也可以直接分享。網站上的選品則是延伸用途，
              讓祝福不只停在訊息裡，而是留在每天看得到、用得到的生活場景。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <div className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
          <h2 className="text-3xl font-semibold text-brand-deep">加入後你會怎麼使用微塵星海</h2>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-brand-slate">四個步驟，一看就懂，長輩也能輕鬆跟上。</p>
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
            <h2 className="mt-2 text-3xl font-semibold text-brand-deep">每日祝福會長這樣</h2>
            <p className="mt-4 text-lg leading-8 text-brand-slate">
              加入 LINE 後，你會收到平安圖、靜心小語與可分享的祝福內容。以下先給你看實際感受。
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
        <h2 className="text-3xl font-semibold text-brand-deep">精選選品｜清楚標示價格、規格與送禮建議</h2>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-brand-slate">
          不用猜用途，每張卡片都告訴你適合誰、放哪裡、怎麼使用。先看懂，再決定是否詢問。
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
          <p className="mt-3 text-lg leading-8 text-brand-slate">
            我們重視資訊透明：品牌介紹清楚、客服管道明確、不做誇大功效宣稱。
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {trustItems.map((item) => (
              <div key={item} className="rounded-xl border border-brand-teal/20 bg-[#fcfbf7] px-4 py-3 text-base leading-8 text-brand-slate">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            {faqItems.map((item, index) => (
              <details key={item.q} open={index < 2} className="rounded-2xl border border-brand-teal/15 bg-[#fefefd] px-5 py-4">
                <summary className="tap-target cursor-pointer list-none text-lg font-semibold leading-8 text-brand-deep">
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-teal text-sm text-white">
                      {index < 2 ? "重點" : "Q"}
                    </span>
                    {item.q}
                  </span>
                </summary>
                <p className="pt-3 text-base leading-8 text-brand-slate">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

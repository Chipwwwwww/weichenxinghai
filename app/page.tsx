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
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { ProductJsonLd } from "@/components/shared/ProductJsonLd";
import SupportEmailInline from "@/components/shared/SupportEmailInline";
import { siteConfig } from "@/data/siteConfig";
import { AddToCartButton } from "@/components/cart/AddToCartButton";

export const metadata: Metadata = {
  title: "首頁",
  description: "把祝福，變成每天都能傳遞的日常。加入 LINE 領今日祝福，並看看微塵星海禪意選品。",
};

export default function HomePage() {
  return (
    <div className="bg-brand-ivory text-brand-ink">
      <ProductJsonLd products={products} />
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
              微塵星海以佛教祝福、靜心陪伴與禪意生活為核心，把一句平安、一張祝福圖、一份心語，和陪伴日常的選品，
              慢慢變成每天都能領取、分享，也能送給家人朋友的日常。
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={siteConfig.lineBlessingUrl}
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
              <Link
                href="/about"
                className="tap-target rounded-full border-2 border-brand-teal/35 bg-white px-7 py-3 text-lg font-semibold text-brand-teal transition hover:bg-brand-teal/5"
              >
                {siteConfig.cta.learnBrand}
              </Link>
            </div>
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
              加入 LINE 領今日祝福，先收下今日平安圖與今日靜心小語，再把祝福傳給你在意的人。當你想把這份心意留得更久，
              再看看禪意選品與祝福儀式物。
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
              微塵星海是一個以佛教祝福、靜心陪伴與禪意生活為核心的品牌。
            </p>
            <p className="text-lg leading-8 text-brand-slate">
              它不是宗教用品店，不是玄學商店，不是潮流香氛品牌，也不是普通文創卡片店；而是祝福感生活品牌。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <div className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
          <h2 className="text-3xl font-semibold text-brand-deep">祝福如何在微塵星海流動</h2>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-brand-slate">四個步驟，長輩友善、清楚好懂。</p>
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
            <p className="mt-4 text-lg leading-8 text-brand-slate">加入 LINE 領今日祝福後，你會看到平安圖、靜心小語與點亮互動內容。</p>
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
              <p className="text-sm font-semibold tracking-[0.1em] text-brand-teal">看看大家點亮了什麼</p>
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
        <h2 className="text-3xl font-semibold text-brand-deep">禪意選品｜可自用也可送禮</h2>
        <p className="mt-3 max-w-3xl text-lg leading-8 text-brand-slate">三條商品線皆以日常陪伴、禮盒質感與長輩友善為核心，並保持命名與語氣一致。</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-brand-teal/15 bg-white shadow-[0_10px_30px_rgba(16,34,36,0.06)] transition hover:-translate-y-0.5"
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
                <h3 className="text-2xl font-semibold text-brand-deep">{product.name}</h3>
                <p className="text-base text-brand-slate">{product.subtitle}</p>
                <p className="text-base leading-8 text-brand-slate">{product.description}</p>
                <PriceDisplay price={product.price} compareAtPrice={product.compareAtPrice} className="pt-1" />
                <ul className="space-y-2 text-base text-brand-slate">
                  <li>• {product.specs}</li>
                  <li>• {product.placement}</li>
                  <li>• {product.audience}</li>
                  <li>• {product.usage}</li>
                </ul>
                <p className="rounded-2xl border border-brand-teal/15 bg-[#fcfbf7] px-4 py-3 text-base leading-8 text-brand-slate">{product.useCases}</p>
                <div className="mt-auto flex flex-wrap gap-3">
                  <AddToCartButton productId={product.id} />
                  <Link href={`/shop/${product.id}`} className="tap-target inline-flex rounded-full border-2 border-brand-teal px-5 py-3 text-base font-semibold text-brand-teal">
                    查看商品頁
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <div className="rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-6 sm:p-8">
          <h2 className="text-3xl font-semibold text-brand-deep">祝福儀式物 / 隨身祝福系統</h2>
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
        <div className="rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-6 sm:p-8">
          <h2 className="text-3xl font-semibold text-brand-deep">購物與結帳流程</h2>
          <p className="mt-3 text-lg leading-8 text-brand-slate">商品頁加入購物車後，可在購物車調整數量與刪除，再前往結帳填寫收件資訊，最後選擇線上付款或貨到付款。</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/shop" className="tap-target rounded-full border-2 border-brand-teal px-6 py-3 text-base font-semibold text-brand-teal">看看禪意選品</Link>
            <Link href="/cart" className="tap-target rounded-full bg-brand-deep px-6 py-3 text-base font-semibold text-white">前往購物車</Link>
            <Link href="/shipping-payment" className="tap-target rounded-full border-2 border-brand-gold/70 bg-white px-6 py-3 text-base font-semibold text-brand-deep">配送與付款說明</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8">
        <div className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
          <h2 className="text-3xl font-semibold text-brand-deep">信任資訊與常見問題</h2>
          <p className="mt-3 text-lg leading-8 text-brand-slate">我們把品牌定位、內容邊界與客服入口寫清楚，讓你安心閱讀與選擇。</p>
          <p className="mt-2 text-base leading-8 text-brand-slate">如有商品、訂單或配送問題，歡迎來信 <SupportEmailInline /> 或來電 {siteConfig.contact.phone} 與我們聯繫。</p>
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

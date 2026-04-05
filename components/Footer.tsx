import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-brand-teal/15 bg-[#f6f4ec]">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-base font-semibold tracking-[0.12em] text-brand-teal">微塵星海｜每日 LINE 祝福與家庭向生活選品</p>
        <p className="mt-3 text-3xl font-semibold text-brand-deep sm:text-4xl">每天一張平安圖，關心自己，也分享給家人。</p>
        <p className="mt-3 max-w-2xl text-base leading-8 text-brand-slate">
          微塵星海提供清楚好懂的品牌介紹、商品用途說明與 LINE 客服入口。加入 LINE 後即可收到每日平安圖與靜心小語，
          也能詢問價格、規格與開賣通知。
        </p>

        <div className="mt-6 flex flex-wrap gap-5 text-base text-brand-slate">
          <Link href="/about" className="tap-target font-medium hover:text-brand-teal">
            品牌介紹
          </Link>
          <Link href="/shop" className="tap-target font-medium hover:text-brand-teal">
            查看價格與規格
          </Link>
          <a href={siteConfig.lineOaUrl} target="_blank" rel="noreferrer" className="tap-target font-medium hover:text-brand-teal">
            LINE 客服與官方帳號
          </a>
        </div>

        <p className="mt-4 text-base text-brand-slate">安心提醒：我們不做誇大功效宣稱，僅提供日常陪伴資訊與商品說明。</p>
        <p className="mt-6 text-sm text-brand-slate">微塵星海 © 2026 版權所有</p>
      </div>
    </footer>
  );
}

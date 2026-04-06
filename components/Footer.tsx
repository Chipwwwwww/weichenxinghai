import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-brand-teal/15 bg-[#f6f4ec]">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-base font-semibold tracking-[0.12em] text-brand-teal">微塵星海｜理念 × LINE 祝福 × 日常選品</p>
        <p className="mt-3 text-3xl font-semibold text-brand-deep sm:text-4xl">把祝福，放進每天都能接住的生活裡。</p>
        <p className="mt-3 max-w-2xl text-base leading-8 text-brand-slate">
          官網承接品牌理念與選品資訊，LINE 承接每日平安圖、靜心小語與客服回覆。
          你可以先慢慢理解，再決定要不要詢問商品或收到開賣通知。
        </p>

        <div className="mt-6 flex flex-wrap gap-5 text-base text-brand-slate">
          <Link href="/about" className="tap-target font-medium hover:text-brand-teal">
            品牌理念
          </Link>
          <Link href="/shop" className="tap-target font-medium hover:text-brand-teal">
            查看選品
          </Link>
          <a href={siteConfig.lineOaUrl} target="_blank" rel="noreferrer" className="tap-target font-medium hover:text-brand-teal">
            LINE 客服與官方帳號
          </a>
        </div>

        <p className="mt-4 text-base text-brand-slate">安心提醒：不誇大、不神效，只提供真實可理解的日常陪伴資訊。</p>
        <p className="mt-6 text-sm text-brand-slate">微塵星海 © 2026 版權所有</p>
      </div>
    </footer>
  );
}

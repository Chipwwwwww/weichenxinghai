import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-brand-teal/10 bg-[#f6f4ec]">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-sm tracking-[0.16em] text-brand-teal">微塵星海｜祝福的日常母站</p>
        <p className="mt-3 text-2xl font-semibold text-brand-deep">把祝福，變成每天都能傳遞的日常。</p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-brand-slate">
          官網承接品牌與選品，LINE 官方帳號承接每日互動。加入後可領取今日祝福，並把心意送給重要的人。
        </p>

        <div className="mt-6 flex flex-wrap gap-5 text-sm text-brand-slate">
          <Link href="/about" className="hover:text-brand-teal">
            品牌故事
          </Link>
          <Link href="/shop" className="hover:text-brand-teal">
            選品總覽
          </Link>
          <a href={siteConfig.lineOaUrl} target="_blank" rel="noreferrer" className="hover:text-brand-teal">
            {siteConfig.cta.joinLine}
          </a>
        </div>
        <p className="mt-6 text-xs text-brand-slate">微塵星海 © 2026 版權所有</p>
      </div>
    </footer>
  );
}

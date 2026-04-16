import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-brand-teal/15 bg-[#f6f4ec]">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-base font-semibold tracking-[0.12em] text-brand-teal">微塵星海｜祝福感生活品牌</p>
        <p className="mt-3 text-3xl font-semibold text-brand-deep sm:text-4xl">把祝福，變成每天都能傳遞的日常。</p>
        <p className="mt-3 max-w-2xl text-base leading-8 text-brand-slate">
          微塵星海是一個以佛教祝福、靜心陪伴與禪意生活為核心的品牌。
          你可以先加入 LINE 領今日祝福，再慢慢看看可自用也可送禮的禪意選品，並透過購物車與結帳流程完成下單。
        </p>

        <div className="mt-6 flex flex-wrap gap-5 text-base text-brand-slate">
          <Link href="/about" className="tap-target font-medium hover:text-brand-teal">
            了解微塵星海
          </Link>
          <Link href="/shop" className="tap-target font-medium hover:text-brand-teal">
            看看禪意選品
          </Link>
          <Link href="/contact" className="tap-target font-medium hover:text-brand-teal">
            聯絡我們
          </Link>
          <Link href="/faq" className="tap-target font-medium hover:text-brand-teal">
            常見問題
          </Link>
          <Link href="/shipping-payment" className="tap-target font-medium hover:text-brand-teal">
            配送與付款
          </Link>
          <Link href="/cart" className="tap-target font-medium hover:text-brand-teal">
            購物車
          </Link>
          <a href={siteConfig.lineBlessingUrl} target="_blank" rel="noreferrer" className="tap-target font-medium hover:text-brand-teal">
            加入 LINE 領今日祝福
          </a>
        </div>

        <div className="mt-6 rounded-2xl border border-brand-teal/20 bg-white px-4 py-4">
          <p className="text-sm font-semibold tracking-[0.08em] text-brand-teal">法務與消費者揭露</p>
          <div className="mt-3 flex flex-wrap gap-4 text-base text-brand-slate">
            <Link href="/consumer-rights" className="tap-target font-medium hover:text-brand-teal">
              消費者權益
            </Link>
            <Link href="/terms" className="tap-target font-medium hover:text-brand-teal">
              服務條款
            </Link>
            <Link href="/privacy" className="tap-target font-medium hover:text-brand-teal">
              隱私權政策
            </Link>
            <Link href="/refund-policy" className="tap-target font-medium hover:text-brand-teal">
              退款政策
            </Link>
          </div>
        </div>


        <div className="mt-6 rounded-2xl border border-brand-teal/20 bg-white px-4 py-4 text-base leading-8 text-brand-slate">
          <p className="font-semibold text-brand-deep">{siteConfig.name}</p>
          <p>客服信箱：{siteConfig.contact.email}</p>
          <p>客服電話：{siteConfig.contact.phone}</p>
        </div>

        <p className="mt-4 text-base text-brand-slate">安心提醒：全站只描述設計、外觀、情境、送禮與日常陪伴，不做未經證實的效果宣稱。</p>
        <p className="mt-6 text-sm text-brand-slate">微塵星海 © 2026 版權所有</p>
      </div>
    </footer>
  );
}

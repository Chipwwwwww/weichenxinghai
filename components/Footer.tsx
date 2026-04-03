import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-brand-teal/10 bg-[#f6f4ec]">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-sm tracking-[0.16em] text-brand-teal">微塵星海｜每日祝福與靜心生活</p>
        <p className="mt-3 text-2xl font-semibold text-brand-deep">把祝福，變成每天都能傳遞的日常。</p>
        <div className="mt-6 flex flex-wrap gap-5 text-sm text-brand-slate">
          <Link href="#" className="hover:text-brand-teal">
            客服聯繫
          </Link>
          <Link href="#" className="hover:text-brand-teal">
            配送與付款
          </Link>
          <Link href="#" className="hover:text-brand-teal">
            LINE 官方帳號
          </Link>
        </div>
        <p className="mt-6 text-xs text-brand-slate">微塵星海 © 2026 版權所有</p>
      </div>
    </footer>
  );
}

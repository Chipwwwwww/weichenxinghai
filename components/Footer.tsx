import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1020]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-300 sm:flex-row sm:px-6 lg:px-8">
        <p>微塵星海 © 2026 版權所有</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-brand-cyan">
            YouTube
          </Link>
          <Link href="#" className="hover:text-brand-cyan">
            Instagram
          </Link>
          <Link href="#" className="hover:text-brand-cyan">
            LINE
          </Link>
        </div>
      </div>
    </footer>
  );
}

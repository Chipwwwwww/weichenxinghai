"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { brandAssets } from "@/data/brandContent";

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "品牌理念" },
  { href: "/shop", label: "商品選品" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-8 w-8 overflow-hidden rounded-full border border-brand-gold/40 bg-white">
            <Image src={brandAssets.logoMark} alt="微塵星海 logo" fill className="object-contain p-1" sizes="32px" />
          </span>
          <span className="text-sm font-medium tracking-[0.18em] text-brand-deep">微塵星海</span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-brand-teal/30 p-2 text-brand-deep md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="切換選單"
          aria-expanded={open}
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="ml-1 block h-0.5 w-5 bg-current" />
        </button>

        <nav className="hidden items-center gap-8 text-sm text-brand-slate md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand-teal">
              {item.label}
            </Link>
          ))}
          <a
            href="#line-oa"
            className="rounded-full border border-brand-teal px-4 py-2 text-xs font-medium text-brand-teal transition hover:bg-brand-teal hover:text-white"
          >
            加入 LINE
          </a>
        </nav>
      </div>

      {open ? (
        <nav className="border-t border-brand-teal/10 bg-brand-ivory px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-brand-slate hover:bg-brand-teal/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#line-oa"
              className="rounded-md border border-brand-teal px-3 py-2 text-center text-sm text-brand-teal"
              onClick={() => setOpen(false)}
            >
              加入 LINE 領今日平安圖
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { brandAssets } from "@/data/brandContent";
import { siteConfig } from "@/data/siteConfig";
import { useCart } from "@/components/cart/CartProvider";

const navItems = [
  { href: "/", label: "品牌首頁" },
  { href: "/about", label: "了解微塵星海" },
  { href: "/shop", label: "看看商品與禮盒" },
  { href: "/faq", label: "常見問題" },
  { href: "/shipping-payment", label: "配送與付款" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-12 w-44 overflow-hidden rounded-md bg-transparent sm:h-12 sm:w-52">
            <Image src={brandAssets.brandWordmark} alt="微塵星海品牌識別" loading="eager" decoding="async" className="absolute inset-0 h-full w-full object-contain" fill sizes="(max-width: 640px) 176px, 208px" />
          </span>
        </Link>

        <button type="button" className="tap-target inline-flex h-12 w-12 items-center justify-center rounded-md border border-brand-teal/40 text-brand-deep md:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="切換選單" aria-expanded={open}>
          <span className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </span>
        </button>

        <nav className="hidden items-center gap-6 text-base text-brand-slate md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="tap-target transition hover:text-brand-teal">
              {item.label}
            </Link>
          ))}
          <Link href="/cart" className="tap-target relative rounded-full border-2 border-brand-teal/75 px-5 py-3 text-base font-semibold text-brand-teal transition hover:bg-brand-teal hover:text-white">
            購物車
            {itemCount > 0 ? <span className="absolute -right-1 -top-1 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-brand-gold px-1 text-sm font-bold text-[#2d2207]">{itemCount}</span> : null}
          </Link>
          <a href={siteConfig.lineBlessingUrl} target="_blank" rel="noreferrer" className="tap-target rounded-full border-2 border-brand-gold/70 px-5 py-3 text-base font-semibold text-brand-deep transition hover:bg-brand-gold/10">
            {siteConfig.cta.joinLine}
          </a>
        </nav>
      </div>

      {open ? (
        <nav className="border-t border-brand-teal/15 bg-brand-ivory/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="tap-target rounded-xl border border-brand-teal/15 bg-white px-4 py-3 text-base font-medium text-brand-slate transition hover:border-brand-teal/25 hover:bg-brand-teal/5" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/cart" className="tap-target rounded-xl border border-brand-teal bg-white px-4 py-3 text-center text-base font-semibold text-brand-teal" onClick={() => setOpen(false)}>
              前往購物車（{itemCount}）
            </Link>
            <a href={siteConfig.lineBlessingUrl} target="_blank" rel="noreferrer" className="tap-target rounded-xl border border-brand-teal bg-brand-teal px-4 py-3 text-center text-base font-semibold text-white" onClick={() => setOpen(false)}>
              {siteConfig.cta.joinLine}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

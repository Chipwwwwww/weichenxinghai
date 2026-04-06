"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { brandAssets } from "@/data/brandContent";
import { siteConfig } from "@/data/siteConfig";

const navItems = [
  { href: "/", label: "品牌首頁" },
  { href: "/about", label: "品牌理念" },
  { href: "/shop", label: "祝福選品" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-12 w-44 overflow-hidden rounded-md bg-transparent sm:h-12 sm:w-52">
            <Image
              src={brandAssets.brandWordmark}
              alt="微塵星海品牌識別"
              loading="eager"
              decoding="async"
              className="absolute inset-0 h-full w-full object-contain"
              fill
              sizes="(max-width: 640px) 176px, 208px"
            />
          </span>
        </Link>

        <button
          type="button"
          className="tap-target inline-flex h-12 w-12 items-center justify-center rounded-md border border-brand-teal/40 text-brand-deep md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="切換選單"
          aria-expanded={open}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </span>
        </button>

        <nav className="hidden items-center gap-8 text-base text-brand-slate md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="tap-target transition hover:text-brand-teal">
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.lineOaUrl}
            target="_blank"
            rel="noreferrer"
            className="tap-target rounded-full border-2 border-brand-teal/75 px-5 py-3 text-base font-semibold text-brand-teal transition hover:bg-brand-teal hover:text-white"
          >
            {siteConfig.cta.joinLine}
          </a>
        </nav>
      </div>

      {open ? (
        <nav className="border-t border-brand-teal/15 bg-brand-ivory/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="tap-target rounded-xl border border-brand-teal/15 bg-white px-4 py-3 text-base font-medium text-brand-slate transition hover:border-brand-teal/25 hover:bg-brand-teal/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.lineOaUrl}
              target="_blank"
              rel="noreferrer"
              className="tap-target rounded-xl border border-brand-teal bg-brand-teal px-4 py-3 text-center text-base font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {siteConfig.cta.joinLine}
            </a>
            <p className="text-base text-brand-slate">加入後每天都會收到平安圖與靜心小語，想看再看，不造成壓力。</p>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

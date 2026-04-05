"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { brandAssets } from "@/data/brandContent";
import { siteConfig } from "@/data/siteConfig";

const navItems = [
  { href: "/", label: "品牌母站" },
  { href: "/about", label: "品牌理念" },
  { href: "/shop", label: "祝福選品" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-8 w-36 overflow-hidden rounded-md bg-transparent sm:w-44">
            <Image
              src={brandAssets.logoWordmark}
              alt="微塵星海品牌識別"
              loading="eager"
              decoding="async"
              className="absolute inset-0 h-full w-full object-contain"
              fill
              sizes="(max-width: 640px) 144px, 176px"
            />
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-teal/30 text-brand-deep md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="切換選單"
          aria-expanded={open}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>

        <nav className="hidden items-center gap-8 text-sm text-brand-slate md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand-teal">
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.lineOaUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-brand-teal/70 px-4 py-2 text-xs font-medium text-brand-teal transition hover:bg-brand-teal hover:text-white"
          >
            {siteConfig.cta.joinLine}
          </a>
        </nav>
      </div>

      {open ? (
        <nav className="border-t border-brand-teal/10 bg-brand-ivory/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-brand-teal/10 bg-white px-3 py-2 text-sm text-brand-slate transition hover:border-brand-teal/20 hover:bg-brand-teal/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.lineOaUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-brand-teal bg-brand-teal px-3 py-2 text-center text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              {siteConfig.cta.joinLine}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

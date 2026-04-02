"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於" },
  { href: "/shop", label: "結緣商城" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-light tracking-[0.25em] text-white transition hover:text-brand-cyan"
        >
          微塵星海
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="切換選單"
          aria-expanded={open}
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="ml-1 block h-0.5 w-5 bg-current" />
        </button>

        <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-brand-cyan"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-[#0a0f1ef2] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

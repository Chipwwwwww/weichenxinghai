import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "商品總覽", description: "認識三款禪意生活選品與禮盒。" };
export default function Page(){return <main className="mx-auto max-w-5xl px-4 py-10"><h1 className="text-4xl font-semibold">看看商品與禮盒</h1><ul className="mt-6 space-y-3"><li><Link href="/products/glass-gift-box">禪意日常玻璃杯禮盒｜NT$888</Link></li><li><Link href="/products/fragrance-gift-box">禪意香氛杯禮盒｜NT$1,980</Link></li><li><Link href="/products/air-purifier-gift-box">小型桌面型空氣清新機｜完整禮盒版｜NT$3,980</Link></li></ul></main>}

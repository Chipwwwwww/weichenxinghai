import type { Metadata } from "next";import Link from "next/link";
export const metadata: Metadata={title:"商品總覽",description:"三款禪意禮盒：禪意日常玻璃杯禮盒、禪意香氛杯禮盒、小型桌面型空氣清新機｜完整禮盒版。"};
export default function PageProducts(){return <div className="p-8 space-y-3"><h1>看看商品與禮盒</h1><Link href="/products/glass-gift-box">禪意日常玻璃杯禮盒</Link><br/><Link href="/products/fragrance-gift-box">禪意香氛杯禮盒</Link><br/><Link href="/products/air-purifier-gift-box">小型桌面型空氣清新機｜完整禮盒版</Link></div>}

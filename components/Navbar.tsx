"use client";
import Link from "next/link";

const navItems = [
  ["/about", "品牌理念"],
  ["/products", "商品總覽"],
  ["/line", "加入 LINE 領今日祝福"],
  ["/coupons", "今日優惠／查看優惠券"],
  ["/shipping-payment", "付款配送"],
  ["/contact", "真人客服／回饋建議"],
] as const;

export default function Navbar() {
  return <header className="p-4 border-b bg-white"><nav className="mx-auto max-w-6xl flex gap-4 flex-wrap">{navItems.map(([h,l])=><Link key={h} href={h}>{l}</Link>)}</nav></header>;
}

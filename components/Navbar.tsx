"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { brandAssets } from "@/data/brandContent";
import { siteConfig } from "@/data/siteConfig";
import { useCart } from "@/components/cart/CartProvider";

const navItems = [
  { href: "/about", label: "品牌理念" },
  { href: "/products", label: "看看商品與禮盒" },
  { href: "/line", label: "加入 LINE 領今日祝福" },
  { href: "/coupons", label: "今日優惠／查看優惠券" },
  { href: "/shipping-payment", label: "付款配送" },
  { href: "/contact", label: "真人客服／回饋建議" },
] as const;

export default function Navbar() { const [open,setOpen]=useState(false); const {itemCount}=useCart();
return <header className="glass-nav fixed inset-x-0 top-0 z-50"><div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4"><Link href="/" onClick={()=>setOpen(false)}><span className="relative block h-12 w-44"><Image src={brandAssets.brandWordmark} alt="微塵星海" fill className="object-contain"/></span></Link><button type="button" className="md:hidden" onClick={()=>setOpen(!open)}>☰</button><nav className="hidden md:flex gap-4">{navItems.map(i=><Link key={i.href} href={i.href}>{i.label}</Link>)}<Link href="/cart">購物車（{itemCount}）</Link><a href={siteConfig.lineBlessingUrl} target="_blank" rel="noreferrer">加入 LINE 領今日祝福</a></nav></div>{open&&<nav className="md:hidden px-4 pb-4 flex flex-col gap-2">{navItems.map(i=><Link key={i.href} href={i.href} onClick={()=>setOpen(false)}>{i.label}</Link>)}</nav>}</header>; }
